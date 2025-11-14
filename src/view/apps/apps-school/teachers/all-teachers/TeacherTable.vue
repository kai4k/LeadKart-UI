<script setup lang="ts">
import { ref, computed } from 'vue';
import { teachersData } from './teacherlist-data';
import type { Teacher } from './teacherlist-data';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import AddTeacherForm from './AddTeacherForm.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight, CirclePlus, Search } from 'lucide-vue-next';
const teachers = ref<Teacher[]>(teachersData.value);
const searchTerm = ref('');
const sortBy = ref('teacherID');
const sortDirection = ref('asc');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const showAddTeacherForm = ref(false);
const showDeleteTeacherForm = ref(false);
const showEditTeacherForm = ref(false);
const selectTeacherData = ref<Teacher>()
const setAddTeacherFormValue = (state: boolean, data?: Teacher) => {
    showAddTeacherForm.value = state;
    selectTeacherData.value = {
        teacherID: '',
        title: '',
        teacherName: '',
        email: '',
        phone: '',
        salary: '',
        experience: '',
        date: '',
        lastSchool: ''
    }
}
const setDeleteTeacherFormValue = (state: boolean, data: Teacher) => {
    selectTeacherData.value = data
    showDeleteTeacherForm.value = state
}
const setEditTeacherFormValue = (state: boolean, data?: Teacher) => {
    selectTeacherData.value = data
    showEditTeacherForm.value = state
}

const filteredTeachers = computed(() => {
    return teachers.value.filter((teacher) =>
        teacher.teacherName.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
});

const displayedTeachers = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    return filteredTeachers.value.slice(startIndex, startIndex + itemsPerPage.value);
});

const totalPages = computed(() => {
    return Math.ceil(filteredTeachers.value.length / itemsPerPage.value);
});

const showingStart = computed(() => {
    return (currentPage.value - 1) * itemsPerPage.value + 1;
});

const showingEnd = computed(() => {
    return Math.min(currentPage.value * itemsPerPage.value, filteredTeachers.value.length);
});

function sort(field: keyof Teacher) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    sortBy.value = field;
    teachers.value.sort((a: any, b: any) => {
        if (a[field] > b[field]) return sortDirection.value === 'asc' ? 1 : -1;
        if (a[field] < b[field]) return sortDirection.value === 'asc' ? -1 : 1;
        return 0;
    });
}

function removeImage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
}

function deleteTeacherConfirmed() {
    const index = teachersData.value.findIndex(data => data.teacherID === selectTeacherData.value?.teacherID);
    teachersData.value.splice(index, 1)

}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function gotoPage(page: number) {
    currentPage.value = page;
}

function badgeClass(title: string) {
    switch (title) {
        case 'Teacher':
            return 'badge badge-blue';
        case 'Professor':
            return 'badge badge-purple';
        case 'Assistant':
            return 'badge badge-yellow';
        case 'Lecturer':
            return 'badge badge-red';
        case 'Instructor':
            return 'badge badge-green';
        case 'Senior Lecturer':
            return 'badge badge-orange';
        default:
            return 'badge badge-gray';
    }
}

teachersData.value.forEach((teacher) => {
    const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
    teacher.formattedDate = new Date(teacher.date).toLocaleDateString('en-GB', options);
});

teachersData.value.forEach((department, index) => {
    department.teacherID = `PET-${index + 2551}`;
});
</script>
<template>
    <div class="col-span-12 card">
        <div class="card-header">
            <div class="grid items-center grid-cols-12 gap-space">
                <div class="col-span-12 md:col-span-4 2xl:col-span-3">
                    <div class="relative group/form grow">
                        <input type="email" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." v-model="searchTerm" />
                        <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search class="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850">
                            </Search>
                        </button>
                    </div>
                </div>
                <div class="col-span-12 md:col-start-9 md:col-span-4 2xl:col-span-2 2xl:col-start-11 md:ltr:text-right md:rtl:text-left">
                    <button class="btn btn-primary shrink-0" @click="setAddTeacherFormValue(true)" data-modal-target="addTeacherModal">
                        <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus> Add Teacher
                    </button>
                </div>
            </div>
        </div>
        <div class="pt-0 card-body">
            <div>
                <div class="overflow-x-auto table-box whitespace-nowrap">
                    <table class="table flush">
                        <tbody>
                            <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                <th @click="sort('teacherID')" class="!font-medium cursor-pointer">ID <span v-if="sortBy === 'teacherID'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('teacherName')" class="!font-medium cursor-pointer">Teacher Name <span v-if="sortBy === 'teacherName'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('email')" class="!font-medium cursor-pointer">Email <span v-if="sortBy === 'email'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('phone')" class="!font-medium cursor-pointer">Phone <span v-if="sortBy === 'phone'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('salary')" class="!font-medium cursor-pointer">Salary <span v-if="sortBy === 'salary'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('experience')" class="!font-medium cursor-pointer">Experience <span v-if="sortBy === 'experience'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('title')" class="!font-medium cursor-pointer">Title <span v-if="sortBy === 'title'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('date')" class="!font-medium cursor-pointer">Joining Date <span v-if="sortBy === 'date'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th class="!font-medium">Action</th>
                            </tr>
                            <template v-for="(teacher, index) in displayedTeachers" :key="index">
                                <tr class="*:px-3 *:py-2.5">
                                    <td>{{ teacher.teacherID }}</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="relative text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 size-8">
                                                <img :src="teacher.image" alt="" class="rounded-full" @error="removeImage" />
                                                <span v-if="!teacher.image" class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850">
                                                    {{ teacher.avatarText }}
                                                </span>
                                            </div>
                                            <div>
                                                <h6><router-link to="apps-school-teachers-overview">{{
                                                    teacher.teacherName
                                                        }}</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ teacher.email }}</td>
                                    <td>+{{ teacher.phone }}</td>
                                    <td>${{ (teacher.salary) }}</td>
                                    <td>{{ teacher.experience }} years</td>
                                    <td>
                                        <span :class="badgeClass(teacher.title)">{{ teacher.title }}</span>
                                    </td>
                                    <td>{{ teacher.formattedDate }}</td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" @click="setEditTeacherFormValue(true, teacher)" data-modal-target="addTeacherModal">
                                                <i class="ri-pencil-line"></i>
                                            </button>
                                            <button class="btn btn-sub-red btn-icon !size-8 rounded-md" @click="setDeleteTeacherFormValue(true, teacher)" data-modal-target="deleteModal">
                                                <i class="ri-delete-bin-line"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <tr v-if="displayedTeachers.length === 0">
                                <TableDataNotFount />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="grid items-center grid-cols-12 mt-space gap-space" v-if="displayedTeachers.length > 0">
                    <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredTeachers.length }}</b> Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                                Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AddTeacherForm :addModuleShow="showAddTeacherForm" :setAddModuleValue="setAddTeacherFormValue" :setEditModuleValue="setEditTeacherFormValue" :editModuleShow="showEditTeacherForm" :editData="selectTeacherData" />
    <DeleteModule :showDeletePop="showDeleteTeacherForm" :setDeleteModal="setDeleteTeacherFormValue" :deleteRow="deleteTeacherConfirmed" />
</template>
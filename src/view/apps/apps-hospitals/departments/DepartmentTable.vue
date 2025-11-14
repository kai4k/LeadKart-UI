<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ChevronLeft, ChevronRight, CirclePlus } from 'lucide-vue-next';
import { departmentData, type Department } from "./department-data";
import DeleteModule from "../../apps-email/apps-mailbox/DeleteModule.vue";
import AddDepartmentRow from "./AddDepartmentRow.vue";

const sortBy = ref<string>("");
const sortDirection = ref<"asc" | "desc">("asc");
const currentPage = ref<number>(1);
const itemsPerPage = 5;
const showDeleteModule = ref(false);
const showAddModule = ref(false);
const showEditModule = ref(false);
const deleteData = ref<Department>();
const editData = ref<Department>();

function setAddModuleValue(state: boolean, data?: Department) {
    showAddModule.value = state
}
const setDeleteModuleValue = (state: boolean, data?: Department) => {
    showDeleteModule.value = state;
    deleteData.value = data;
}
function setEditModuleValue(state: boolean, data?: Department) {
    editData.value = data
    showEditModule.value = state
}

const totalPages = computed(() => Math.ceil(departmentData.value.length / itemsPerPage));

const displayedDepartments = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return departmentData.value.slice(start, end).map((departmentData) => ({
        ...departmentData,
        avatarText: generateAvatarText(departmentData.doctor),
    }));
});

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() =>
    Math.min(currentPage.value * itemsPerPage, departmentData.value.length)
);

function generateAvatarText(doctor: string): string {
    const nameWithoutPrefix = doctor.replace("Dr. ", "");
    const nameParts = nameWithoutPrefix.split(" ");
    return nameParts.length > 1 ? nameParts[0][0] + nameParts[1][0] : nameParts[0][0];
}

function sort(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortDirection.value = "asc";
        sortBy.value = column;
    }
    departmentData.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof Department];
        const valueB = b[column as keyof Department];
        if (valueA > valueB) return sortDirection.value === "asc" ? 1 : -1;
        if (valueA < valueB) return sortDirection.value === "asc" ? -1 : 1;
        return 0;
    });
}

function removeImage(event: Event) {
    const image = event.target as HTMLImageElement;
    image.style.display = "none";
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

function editDepartment() {
}

function deleteDepartment() {
    const index = departmentData.value.findIndex(attendance => attendance.departmentID === deleteData.value?.departmentID);
    if (index !== -1) {
        departmentData.value.splice(index, 1);
    }
}

onMounted(() => {
    departmentData.value.forEach((department, index) => {
        department.departmentID = `PED-${index + 1}`;
    });
});
</script>
<template>
    <div class="col-span-12 card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Department List</h6>
            <button type="button" class="btn btn-primary shrink-0" data-modal-target="addDepartmentModal" @click="setAddModuleValue(true)">
                <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus> Add Department
            </button>
        </div>
        <div class="pt-0 card-body">
            <div>
                <div class="overflow-x-auto table-box whitespace-nowrap">
                    <table class="table flush">
                        <thead>
                            <tr class="text-gray-500 bg-gray-100 dark:text-dark-500 dark:bg-dark-850">
                                <th @click="sort('departmentID')" class="!font-medium cursor-pointer">
                                    ID <span v-if="sortBy === 'departmentID'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                    }}</span>
                                </th>
                                <th @click="sort('departmentName')" class="!font-medium cursor-pointer">
                                    Department Name <span v-if="sortBy === 'departmentName'">{{ sortDirection === 'asc'
                                        ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('doctor')" class="!font-medium cursor-pointer">
                                    Doctor <span v-if="sortBy === 'doctor'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                    }}</span>
                                </th>
                                <th @click="sort('totalEmployee')" class="!font-medium cursor-pointer">
                                    Total Employee <span v-if="sortBy === 'totalEmployee'">{{ sortDirection === 'asc' ?
                                        '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('headOfDepartment')" class="!font-medium cursor-pointer">
                                    Head of Dept. <span v-if="sortBy === 'headOfDepartment'">{{ sortDirection === 'asc'
                                        ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('status')" class="!font-medium cursor-pointer">
                                    Status <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                    }}</span>
                                </th>
                                <th class="!font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(department, index) in displayedDepartments" :key="index" class="*:px-3 *:py-2.5">
                                <td>{{ department.departmentID }}</td>
                                <td>{{ department.departmentName }}</td>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="relative text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 size-10">
                                            <img v-if="department.image" :src="department.image" alt="" class="object-cover w-full h-full rounded-full" @error="removeImage($event)" />
                                            <span v-else class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850">
                                                {{ department.avatarText }}
                                            </span>
                                        </div>
                                        <div>
                                            <h6><a href="#!">{{ department.doctor }}</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ department.totalEmployee }}</td>
                                <td>
                                    <a href="#!" class="link link-primary">{{ department.headOfDepartment }}</a>
                                </td>
                                <td>
                                    <span :class="{
                                        'badge badge-green': department.status === 'Active',
                                        'badge badge-red': department.status === 'Unactive'
                                    }">
                                        {{ department.status }}
                                    </span>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-gray btn-icon !size-8" title="Edit" @click="setEditModuleValue(true, department)">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8" title="Delete" @click="setDeleteModuleValue(true, department)">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="col-span-12 text-center lg:col-span-6 ltr:lg:text-left rtl:lg:text-right">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ departmentData.length
                            }}</b> Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                {{ page }}
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

        <AddDepartmentRow :moduleShow="showAddModule" :setShowModuleValue="setAddModuleValue" :showEditModule="showEditModule" :setEditModuleValue="setEditModuleValue" :editFunction="editDepartment" :editData="editData" />
        <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteDepartment" />
    </div>
</template>
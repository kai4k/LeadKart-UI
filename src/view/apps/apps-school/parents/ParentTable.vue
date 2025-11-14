<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import parentsData from './parents-details';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import AddParentDetails from './AddParentDetails.vue';
import DeleteModule from '../../apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight, CirclePlus, Search } from 'lucide-vue-next';

interface Parent {
    parentsName: string;
    studentName: string;
    image?: string | null;
    relation: string;
    occupation: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
}

const tableHeaders = [
    { label: 'Parents Name', field: 'parentsName' },
    { label: 'Student Name', field: 'studentName' },
    { label: 'Relation', field: 'relation' },
    { label: 'Occupation', field: 'occupation' },
    { label: 'Gender', field: 'gender' },
    { label: 'Email', field: 'email' },
    { label: 'Phone', field: 'phone' },
    { label: 'Address', field: 'address' }
];

const searchTerm = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortBy = ref<string | null>(null);
const sortDirection = ref<'asc' | 'desc'>('asc');
const tableRows = ref<Parent[]>(parentsData.value);
const filteredParentsList = computed(() =>
    searchTerm.value
        ? tableRows.value.filter((parent) =>
            Object.values(parent).some((val) =>
                String(val).toLowerCase().includes(searchTerm.value.toLowerCase())
            )
        )
        : tableRows.value
);

const totalPages = computed(() =>
    Math.ceil(filteredParentsList.value.length / itemsPerPage.value)
);

const paginatedParents = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredParentsList.value.slice(start, start + itemsPerPage.value);
});

const showingStart = computed(
    () => (currentPage.value - 1) * itemsPerPage.value + 1
);

const showingEnd = computed(
    () =>
        Math.min(
            currentPage.value * itemsPerPage.value,
            filteredParentsList.value.length
        )
);

function filterParents() {
    currentPage.value = 1;
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

function sort(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    tableRows.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof Parent];
        const valueB = b[column as keyof Parent];
        if (valueA > valueB) return sortDirection.value === 'asc' ? 1 : -1;
        if (valueA < valueB) return sortDirection.value === 'asc' ? -1 : 1;
        return 0;
    });
}

function generateAvatarText(name: string): string {
    const nameParts = name.split(' ');
    return nameParts.length > 1
        ? nameParts[0][0] + nameParts[1][0]
        : name[0].toUpperCase();
}

// crud Operation of the data 
const showAddParentsForm = ref(false);
const showEditParentsForm = ref(false);
const showDeleteParentsForm = ref(false)
const deleteData = ref()
const editData = ref()
const setShowAddParentFormValue = (state: boolean) => {
    editData.value = null
    showAddParentsForm.value = state
}
const setShowEditParentFormValue = (state: boolean, data?: Parent) => {
    editData.value = data
    showEditParentsForm.value = state
}
const setShowDeleteParentFormValue = (state: boolean, data?: Parent) => {
    deleteData.value = data
    showDeleteParentsForm.value = state
}

function deleteParent(name: string) {
    const index = tableRows.value.findIndex((data) => deleteData.value.parentsName == data.parentsName)
    parentsData.value.splice(index, 1)
}

onMounted(() => {
    parentsData.value.forEach((data, index) => data.id = index + 1)
})

</script>
<template>
    <div class="grid grid-cols-12 gap-x-space" x-data="parentsTable()">
        <div class="col-span-12 card">
            <div class="card-header">
                <div class="grid items-center grid-cols-12">
                    <div class="col-span-3">
                        <div class="relative">
                            <input v-model="searchTerm" @input="filterParents" type="text" class="form-input ltr:pl-9 rtl:pr-9" placeholder="Search student, class, etc..." />
                            <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 focus:outline-none">
                                <Search class="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850 ">
                                </Search>
                            </button>
                        </div>
                    </div>
                    <div class="col-span-2 col-start-11 ltr:text-right rtl:text-left">
                        <button class="btn btn-primary" @click="setShowAddParentFormValue(true)">
                            <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus>
                            Add Parents
                        </button>
                    </div>
                </div>
            </div>

            <div class="pt-0 card-body">
                <div>
                    <div class="overflow-x-auto table-box whitespace-nowrap">
                        <table class="table flush">
                            <thead>
                                <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                    <th v-for="header in tableHeaders" :key="header.field" @click="sort(header.field)" class="!font-medium cursor-pointer">
                                        {{ header.label }}
                                        <span v-if="sortBy === header.field" :class="{ 'text-gray-700': sortDirection === 'asc', 'text-gray-500': sortDirection === 'desc' }">
                                            {{ sortDirection === 'asc' ? '↑' : '↓' }}
                                        </span>
                                    </th>
                                    <th class="!font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(parent, index) in paginatedParents" :key="index" class="*:px-3 *:py-2.5">
                                    <td>{{ parent.parentsName }}</td>
                                    <td class="flex items-center gap-3">
                                        <div class="relative text-gray-500 bg-gray-100 rounded-full size-8 dark:bg-dark-850 dark:text-dark-500">
                                            <img v-if="parent.image" :src="parent.image" alt="Profile Image" class="object-cover w-full h-full rounded-full" />
                                            <span v-else class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500">
                                                {{ generateAvatarText(parent.parentsName) }}
                                            </span>
                                        </div>
                                        <div>
                                            <h6>{{ parent.studentName }}</h6>
                                        </div>
                                    </td>
                                    <td>{{ parent.relation }}</td>
                                    <td>{{ parent.occupation }}</td>
                                    <td>{{ parent.gender }}</td>
                                    <td>{{ parent.email }}</td>
                                    <td>+ {{ parent.phone }}</td>
                                    <td>{{ parent.address }}</td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" @click="setShowEditParentFormValue(true, parent)">
                                                <i class="ri-pencil-line"></i>
                                            </button>
                                            <button class="btn btn-sub-red btn-icon !size-8 rounded-md" @click="setShowDeleteParentFormValue(true, parent)">
                                                <i class="ri-delete-bin-line"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="paginatedParents.length === 0">
                                    <TableDataNotFount />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination of the Table -->
                    <div v-if="paginatedParents.length > 0" class="grid items-center grid-cols-12 gap-5 mt-5">
                        <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
                            <p class="text-gray-500 dark:text-dark-500">
                                Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredParentsList.length }}</b> Results
                            </p>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <div class="flex justify-center md:justify-end pagination pagination-primary">
                                <button class="pagination-pre" :disabled="currentPage === 1" @click="prevPage">
                                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                    Prev
                                </button>
                                <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                    {{ page }}
                                </button>
                                <button class="pagination-next" :disabled="currentPage === totalPages" @click="nextPage">
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

        <AddParentDetails :setAddModuleValue="setShowAddParentFormValue" :showAddModule="showAddParentsForm" :showEditModule="showEditParentsForm" :setEditModuleValue="setShowEditParentFormValue" :editData="editData" />

        <!-- Delete module -->
        <DeleteModule :showDeletePop="showDeleteParentsForm" :setDeleteModal="setShowDeleteParentFormValue" :deleteRow="deleteParent" />
    </div>
</template>
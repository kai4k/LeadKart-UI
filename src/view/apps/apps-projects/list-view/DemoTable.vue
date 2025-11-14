<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { ChevronLeft, ChevronRight, CirclePlus, Search, Trash } from "lucide-vue-next";
import TableDataNotFount from "@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue";
import { projectListData } from "./list-data";
import type { Project } from "./list-data";

// Reactive state
const patients = ref<Project[]>([...projectListData.value]);
const searchTerm = ref<string>("");
const sortBy = ref<string>("");
const sortDirection = ref<"asc" | "desc">("asc");
const selectAll = ref<boolean>(false);
const selectedItems = ref<Project[]>([]);
const currentPage = ref<number>(1);
const itemsPerPage = 8;

// Computed properties
const filteredPatients = computed(() => {
    if (!searchTerm.value.trim()) return patients.value;
    const lowerSearch = searchTerm.value.toLowerCase();
    return patients.value.filter((patient) =>
        Object.values(patient).some((value) =>
            value.toString().toLowerCase().includes(lowerSearch)
        )
    );
});

const totalPages = computed(() => Math.ceil(filteredPatients.value.length / itemsPerPage));
const displayedPatients = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredPatients.value.slice(start, start + itemsPerPage);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage + 1, filteredPatients.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, filteredPatients.value.length));

// Methods
const toggleAll = () => {
    selectAll.value = !selectAll.value;
    selectedItems.value = selectAll.value ? [...filteredPatients.value] : [];
};

const toggleItem = (patient: Project) => {
    if (selectedItems.value.includes(patient)) {
        selectedItems.value = selectedItems.value.filter((p) => p !== patient);
    } else {
        selectedItems.value.push(patient);
    }
    selectAll.value = selectedItems.value.length === filteredPatients.value.length;
};

const deleteSelectedItems = () => {
    patients.value = patients.value.filter(
        (patient) => !selectedItems.value.includes(patient)
    );
    selectedItems.value = [];
    selectAll.value = false;
};

const sort = (column: string) => {
    if (column === sortBy.value) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortDirection.value = "asc";
        sortBy.value = column;
    }

    patients.value.sort((a: any, b: any) => {
        const valA = a[column as keyof Project];
        const valB = b[column as keyof Project];
        let comparison = valA > valB ? 1 : valA < valB ? -1 : 0;
        return sortDirection.value === "desc" ? comparison * -1 : comparison;
    });
};

// Pagination handlers
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};
onMounted(() => {
    projectListData.value.forEach((data, index) => data.projectID = 22697 + 1)
})
</script>
<template>
    <div class="flex flex-wrap items-center justify-between card-header gap-space">
        <h6 class="card-title grow">All Patients</h6>
        <div class="flex flex-col w-full md:items-center md:flex-row gap-space md:w-auto">
            <button class="btn btn-red btn-icon shrink-0" v-if="selectedItems.length" @click="deleteSelectedItems">
                <Trash class="size-4"></Trash>
            </button>
            <div class="relative w-full group/form grow">
                <input type="text" placeholder="Search for..."
                    class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                    v-model="searchTerm" />
                <button title="search-button"
                    class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                    <Search class="size-4"></Search>
                </button>
            </div>
            <a href="apps-hospital-patients-create" class="btn btn-primary shrink-0">
                <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus> Add Patient
            </a>
        </div>
    </div>

    <div class="card-body">
        <div class="overflow-x-auto">
            <table class="table whitespace-nowrap">
                <thead>
                    <tr>
                        <th class="!font-medium text-gray-500 dark:text-dark-500">
                            <div class="input-check-group">
                                <label for="checkboxAll" class="hidden input-check-label"></label>
                                <input type="checkbox" class="input-check input-check-primary size-4"
                                    v-model="selectAll" @click="toggleAll" />
                            </div>
                        </th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('projectID')">ID</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('projectName')">Project and Client Name</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('assignee')">Assigned To</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('dueDate')">Due Date</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('totalAmount')">Total Amount ($)</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('progress')">% Complete</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                            @click="sort('status')">Status</th>
                        <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(project, index) in displayedPatients" :key="index">
                        <td>
                            <div class="input-check-group">
                                <label :for="`project${index}`" class="hidden input-check-label"></label>
                                <input :id="`project${index}`" type="checkbox"
                                    :checked="selectedItems.includes(project)" @click="toggleItem(project)"
                                    class="input-check input-check-primary size-4" />
                            </div>
                        </td>
                        <td>{{ project.projectID }}</td>
                        <td>
                            <h6 class="mb-1">
                                <a href="apps-projects-overview" data-modal-target="contactOverviewModal"
                                    class="text-current link link-primary grow" v-text="project.projectName"></a>
                            </h6>
                            <p v-text="project.clientName" class="text-sm text-gray-500 dark:text-dark-500">
                            </p>
                        </td>
                        <td>
                            <div class="flex ml-3 -space-x-3 grow">
                                <template v-for="assignee in project.assignees" :key="assignee.name">
                                    <a href="#!" class="transition duration-300 ease-linear hover:z-10"
                                        :title="assignee.name">
                                        <img class="border-2 border-white rounded-full dark:border-dark-900 size-8"
                                            :src="assignee.image" alt="" />
                                    </a>
                                </template>
                            </div>
                        </td>
                        <td>{{ project.dueDate }}</td>
                        <td>{{ project.totalAmount }}</td>
                        <td>
                            <div class="flex items-center gap-2">
                                <p v-text="`${project.progress}%`"></p>
                                <div class="progress-bar progress-1">
                                    <div class="text-white progress-bar-wrap bg-primary-500"
                                        :style="'width: ' + project.progress + '%'"></div>
                                </div>
                            </div>
                        </td>
                        <td> <span :class="{
                            'badge badge-purple': project.status === 'Active',
                            'badge badge-orange': project.status === 'On Hold',
                            'badge badge-yellow': project.status === 'Pending',
                            'badge badge-green': project.status === 'Completed'
                        }">{{ project.status }}</span></td>
                        <td class="w-16">

                        </td>
                    </tr>
                    <tr v-if="displayedPatients.length === 0">
                        <TableDataNotFount />
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="grid items-center grid-cols-12 gap-space mt-space" x-show="displayedPatient.length > 0">
            <div class="flex col-span-12 text-center md:col-span-6 md:text-left">
                <p class="px-2 text-gray-500 dark:text-dark-500">Showing <b x-text="showingStart">{{ showingStart
                        }}</b> - <b x-text="showingEnd">{{ showingEnd }}</b> of <b x-text="filterPatient.length">{{
                            patients.length }}</b> Results</p>
                <span v-show="selectedItems.length > 0">
                    <b>{{ selectedItems.length }}</b> Row Selected
                </span>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div v-if="totalPages > 1" class="flex justify-center md:justify-end pagination pagination-primary">
                    <button @click="prevPage" class="pagination-pre" :disabled="currentPage === 1">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></ChevronLeft>
                        <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"></ChevronRight>
                        Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }"
                        @click="gotoPage(page)" class="pagination-item">
                        {{ page }}
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
                        <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-4"></ChevronLeft>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>
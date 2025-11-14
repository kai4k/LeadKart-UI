<script setup lang="ts">
import { ref, computed } from "vue";
import TableDataNotFount from "@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue";
import AddFormModule from "./AddFormModule.vue";
import { projectListData, assignees } from "./list-data";
import { ChevronLeft, ChevronRight, Ellipsis, Search, Trash } from "lucide-vue-next";
import RecentMenuList from "@/view/dashboards/recent-menu-list.vue";
import { dropdownOption } from "../../app-ecommerce/products/grid-view/grid-data-list";
interface Assignee {
    image: string;
    name: string;
}
interface Project {
    projectID?: string | number;
    projectImage?: string;
    projectName: string;
    clientName: string;
    dueDate: string;
    totalAmount: string | number;
    progress: string;
    status: string;
    assignees: Assignee[];
    image?: string;
}
// Reactive state
const patients = ref<Project[]>(projectListData.value);
const searchTerm = ref<string>("");
const sortBy = ref<string>("");
const sortDirection = ref<"asc" | "desc">("asc");
const selectAll = ref<boolean>(false);
const selectedItems = ref<Project[]>([]);
const currentPage = ref<number>(1);
const itemsPerPage = 10;
const selectedAssignees = ref<string[]>([]); // List of selected assignees
const filterStatus = ref<string>(''); // Status filter
const dropdownOpen = ref(false); // To manage dropdown visibility
const showEditForm = ref(false)
const editData = ref<any>({})

const filterDateOption = [
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Yearly", value: "Yearly" },
];
const filterStatusOption = [
    { label: "Active", value: "Active" },
    { label: "Pending", value: "Pending" },
    { label: "On Hold", value: "On Hold" },
    { label: "Completed", value: "Completed" },
]

function setEditFormValue(state: boolean, data?: any) {
    showEditForm.value = state
    editData.value = data
}
// Computed properties
const filteredPatients = computed(() => {
    const lowerSearch = searchTerm.value.toLowerCase();
    return patients.value.filter((patient) =>
        Object.values(patient).some((value) =>
            value.toString().toLowerCase().includes(lowerSearch)
        )
    ).filter((patient) => patient.status.toLowerCase().includes(filterStatus.value.toLowerCase()));
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

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
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

const handleTableActivity = (option: string, data?: Project) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
    }
    if (activity == 'edit') {
        setEditFormValue(true, data)
    }
    if (activity == 'delete') {
        // setDeleteModuleValue(true, data!)
    }
}

</script>
<template>
    <div class="card-header">
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 xl:col-span-4">
                <div class="relative group/form">
                    <input type="text" placeholder="Search for projects..." class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" v-model="searchTerm" />
                    <button title="search-button" class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search class="size-4"></Search>
                    </button>
                </div>
            </div>

            <!-- Buttons and Filters -->
            <div class="flex flex-wrap col-span-12 gap-2 xl:col-span-8 xl:justify-end">
                <button class="btn btn-red btn-icon " v-if="selectedItems.length" @click="deleteSelectedItems">
                    <Trash class="size-4"></Trash>
                </button>
                <!-- Date Filter -->
                <div>
                    <select class="form-select" placeholder="Status Select">
                        <option value="" class="text-gray-500">Filter Date Select</option>
                        <template v-for="(option, index) in filterDateOption" :key="index">
                            <option :value="option.value">{{ option.label }}</option>
                        </template>
                    </select>
                </div>
                <!-- Status Filter -->
                <div>
                    <!-- @change="updateFilterStatus" -->
                    <select v-model="filterStatus" class="form-select" placeholder="Status Select">
                        <option value="">Status Select</option>
                        <template v-for="(option, index) in filterStatusOption" :key="index">
                            <option :value="option.value">{{ option.label }}</option>
                        </template>
                    </select>
                </div>
                <!-- Assignee Filter Dropdown -->
                <div class="relative">
                    <button @click="toggleDropdown" class="w-full btn btn-sub-gray whitespace-nowrap">
                        Filter By Assignee
                    </button>
                    <div v-if="dropdownOpen" class="absolute right-0 p-2 mt-2 bg-white border rounded shadow-md dropdown-menu w-52">
                        <p class="mb-1 text-gray-500">Filter by Assignee</p>
                        <div v-for="assignee in assignees" :key="assignee.name" class="py-2 input-check-group">
                            <input type="checkbox" :id="assignee.id" :value="assignee.name" v-model="selectedAssignees" class="shrink-0 input-check input-check-primary" />
                            <label :for="assignee.id" class="flex items-center gap-2 font-medium input-check-label grow">
                                <img :src="assignee.avatar" alt="" class="rounded-full size-6" />
                                {{ assignee.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="pt-0 card-body">
        <div>
            <div class="overflow-x-auto table-box">
                <table class="table whitespace-nowrap">
                    <thead>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                            <th class="w-14">
                                <div class="input-check-group">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input type="checkbox" class="input-check input-check-primary" v-model="selectAll" @click="toggleAll" />
                                </div>
                            </th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('projectID')"> ID <span v-if="sortBy === 'projectID'"> {{ sortDirection ===
                                'asc' ? '↑' : '↓'
                            }}</span></th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('projectName')">Project and Client Name <span v-if="sortBy === 'projectName'">{{ sortDirection ===
                                'asc' ? '↑' : '↓'
                            }}</span> </th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('assignee')">Assigned To <span v-if="sortBy === 'assignee'">{{
                                sortDirection
                                    ===
                                    'asc' ? '↑' : '↓'
                            }}</span></th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('dueDate')">Due Date <span v-if="sortBy === 'dueDate'">{{ sortDirection ===
                                'asc' ? '↑' : '↓'
                            }}</span></th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('totalAmount')">Total Amount ($) <span v-if="sortBy === 'totalAmount'">{{
                                sortDirection ===
                                    'asc' ? '↑' : '↓'
                            }}</span></th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('progress')">% Complete <span v-if="sortBy === 'progress'">{{ sortDirection
                                ===
                                'asc' ? '↑' : '↓'
                            }}</span></th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer" @click="sort('status')">Status <span v-if="sortBy === 'status'">{{ sortDirection ===
                                'asc' ? '↑' : '↓'
                            }}</span></th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(project, index) in displayedPatients" :key="index">
                            <td>
                                <div class="input-check-group">
                                    <label :for="`project${index}`" class="hidden input-check-label"></label>
                                    <input :id="`project${index}`" type="checkbox" :checked="selectedItems.includes(project)" @click="toggleItem(project)" class="input-check input-check-primary" />
                                </div>
                            </td>
                            <td>PEP-{{ project.projectID }}</td>
                            <td>
                                <h6 class="mb-1">
                                    <a href="apps-projects-overview" data-modal-target="contactOverviewModal" class="!text-current link link-primary grow" v-text="project.projectName"></a>
                                </h6>
                                <p v-text="project.clientName" class="text-sm text-gray-500 dark:text-dark-500">
                                </p>
                            </td>
                            <td>
                                <div class="flex ml-3 -space-x-3 grow">
                                    <template v-for="assignee in project.assignees" :key="assignee.name">
                                        <a href="#!" class="transition duration-300 ease-linear hover:z-10" :title="assignee.name">
                                            <img class="border-2 border-white rounded-full dark:border-dark-900 size-8" :src="assignee.image" alt="" />
                                        </a>
                                    </template>
                                </div>
                            </td>
                            <td>{{ project.dueDate }}</td>
                            <td>${{ project.totalAmount.toLocaleString() }}</td>
                            <td>
                                <div class="flex items-center gap-2">
                                    <p v-text="`${project.progress}%`"></p>
                                    <div class="progress-bar progress-1">
                                        <div class="text-white progress-bar-wrap bg-primary-500" :style="'width: ' + project.progress + '%'"></div>
                                    </div>
                                </div>
                            </td>
                            <td> <span :class="{
                                'badge badge-purple': project.status === 'Active',
                                'badge badge-orange': project.status === 'On Hold',
                                'badge badge-yellow': project.status === 'Pending',
                                'badge badge-green': project.status === 'Completed'
                            }">{{ project.status }}</span></td>
                            <td>
                                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" @handleAction="(option) => handleTableActivity(option, project)" menuIconCss="size-4" />
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
                        <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }" @click="gotoPage(page)" class="pagination-item">
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
    </div>

    <AddFormModule :showEditProjectForm="showEditForm" :setEditProjectForm="setEditFormValue" :editDetails="editData" />
</template>
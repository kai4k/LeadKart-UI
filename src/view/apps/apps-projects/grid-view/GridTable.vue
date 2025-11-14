<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Project } from '../list-view/list-data';
import { projectListData } from '../list-view/list-data';
import AddFormModule from '../list-view/AddFormModule.vue';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import DeleteModule from '../../apps-email/apps-mailbox/DeleteModule.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import { dropdownOption } from '../../app-ecommerce/products/grid-view/grid-data-list';
import { useRouter } from 'vue-router';
const props = defineProps({
    activeTab: String,
    setFilterStatus: Function,
    searchQuery: {
        type: String,
        default: ''
    }
});
const currentPage = ref(1);
const itemsPerPage = 12;
const showEditForm = ref(false)
const editData = ref<any>({})
function setEditFormValue(state: boolean, data?: any) {
    showEditForm.value = state
    editData.value = data
}

// Computed Properties for Pagination and Display
const totalPages = computed(() => Math.ceil(projectListData.value.length / itemsPerPage));
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, projectListData.value.length));


// const filteredProjects = computed(() => projectListData.value);
const filteredProjects = computed(() => {
    let projects = projectListData.value;
    if (props.activeTab !== 'All') {
        projects = projects.filter(project => project.status === props.activeTab);
    }
    if (props.searchQuery) {
        projects = projects.filter(project =>
            project.projectName.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
            project.clientName.toLowerCase().includes(props.searchQuery.toLowerCase())
        );
    }
    return projects;
});
// Method to change the page
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};
// Displayed projects based on pagination
const displayedProjects = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProjects.value.slice(start, end);
});
// --------------- Table Activity ----------------------
const showDeleteModule = ref(false);
const selectedDetails = ref<Project>()
const setDeleteModuleValue = (state: boolean, data?: Project) => {
    showDeleteModule.value = state;
    selectedDetails.value = data
}
// deleteFolder(projectListData, 1)
const deleteFolder = () => {
    const findindex = projectListData.value.findIndex(project => project.projectID == selectedDetails.value?.projectID)
    projectListData.value.splice(findindex, 1)

};

onMounted(() => {
    projectListData.value.forEach((data, index) =>
        data.projectID = 22697 + index
    )
})

const router = useRouter()
const handleTableActivity = (option: string, data?: Project) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        router.push('/apps-projects-overview')
    }
    if (activity == 'edit') {
        setEditFormValue(true, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}
</script>
<template>
    <div class="grid grid-cols-1 mt-5 md:grid-cols-2 2xl:grid-cols-4 gap-x-5">
        <template v-if="filteredProjects.length > 0">
            <div v-for="(project, index) in displayedProjects" :key="index" class="card">
                <div class="card-body">
                    <!-- Dropdown Menu -->
                    <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="float-end" iconCss="size-4" @handleAction="(option) => handleTableActivity(option, project)" />

                    <!-- Project Image -->
                    <div class="p-2 mb-3 border border-gray-200 rounded-md dark:border-dark-800 size-12">
                        <img :src="project.projectImage" alt="Project Image" />
                    </div>

                    <!-- Project Name and Client -->
                    <h6 class="mb-1">{{ project.projectName }}</h6>
                    <p class="text-gray-500 dark:text-dark-500">{{ project.clientName }}</p>

                    <!-- Due Date and Total Amount -->
                    <div class="grid grid-cols-2 mt-3 divide-x divide-gray-200 rtl:divide-x-reverse dark:divide-dark-800">
                        <div class="p-2 text-center">
                            <h6 class="mb-1">{{ project.dueDate }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">Due Date</p>
                        </div>
                        <div class="p-2 text-center">
                            <h6 class="mb-1">${{ project.totalAmount.toLocaleString() }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">Total Amount</p>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="mt-5">
                        <p class="mb-2 text-gray-500 dark:text-dark-500">
                            Project {{ project.progress }}% completed
                        </p>
                        <div class="progress-bar progress-1">
                            <div class="text-white progress-bar-wrap ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 to-pink-500 via-purple-500" :style="{ width: project.progress + '%' }"></div>
                        </div>
                    </div>

                    <!-- Assigned Users and Status -->
                    <div class="flex items-center gap-2 mt-5">
                        <p class="text-gray-500 dark:text-dark-500">Assigned To:</p>
                        <div class="flex -space-x-3 grow">
                            <template v-for="assignee in project.assignees" :key="assignee.name">
                                <a href="#!" class="transition duration-300 ease-linear hover:z-10" title="avatar link">
                                    <img class="border-2 border-white rounded-full dark:border-dark-900 size-8" :src="assignee.image" :alt="assignee.name" />
                                </a>
                            </template>
                        </div>
                        <div class="shrink-0">
                            <span :class="{
                                'badge badge-purple': project.status === 'Active',
                                'badge badge-orange': project.status === 'On Hold',
                                'badge badge-yellow': project.status === 'Pending',
                                'badge badge-green': project.status === 'Completed'
                            }">
                                {{ project.status }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <template v-if="filteredProjects.length === 0">
        <div class="flex justify-center">
            <TableDataNotFount />
        </div>
    </template>
    <!-- Pagination Section -->
    <div class="grid items-center grid-cols-12 gap-5 mb-5" v-if="filteredProjects.length !== 0">
        <div class="col-span-12 md:col-span-6">
            <p class="text-gray-500 dark:text-dark-500">
                Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredProjects.length }}</b>
                Results
            </p>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="flex justify-start md:justify-end pagination pagination-primary">
                <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                    Prev
                </button>
                <template v-for="page in totalPages" :key="page">
                    <button @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>
                </template>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                    Next
                    <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                    <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                </button>
            </div>
        </div>
    </div>

    <AddFormModule :showEditProjectForm="showEditForm" :setEditProjectForm="setEditFormValue" :editDetails="editData" />
    <DeleteModule :delete-row="deleteFolder" :show-delete-pop="showDeleteModule" :set-delete-modal="setDeleteModuleValue" />
</template>
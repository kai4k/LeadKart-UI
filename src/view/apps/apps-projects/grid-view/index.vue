<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import AddFormModule from '../list-view/AddFormModule.vue';
import GridTable from './GridTable.vue';
import { projectListData } from '../list-view/list-data';
import { CirclePlus, Search } from 'lucide-vue-next';

// Define TypeScript types for the component
const searchQuery = ref('');
const isModalVisible = ref(false);
const setModuleValue = (state: boolean) => {
    isModalVisible.value = state
}

// Function to handle modal visibility
const handleModal = (action: 'showAddProjectForm' | 'closeAddProjectForm') => {
    if (action === 'showAddProjectForm') {
        isModalVisible.value = true;
    } else {
        isModalVisible.value = false;
    }
};
// Define state variables
const activeTab = ref<string>('All');  // This will store the currently active tab
// Define the tabs in an array of objects
const tabs = [
    { label: 'All Projects', status: 'All' },
    { label: 'Active', status: 'Active' },
    { label: 'Pending', status: 'Pending' },
    { label: 'On Hold', status: 'On Hold' },
    { label: 'Completed', status: 'Completed' },
];
// Define the method to set the filter status
const setFilterStatus = (status: string) => {
    activeTab.value = status;
};
</script>
<template>
    <PageHeading title="Grid View" sub-title="Projects" />
    <div>
        <div class="flex flex-wrap items-center gap-5 mb-5">
            <!-- Project Title Section -->
            <div class="shrink-0">
                <h6 class="card-title">
                    My Projects (<span>{{ projectListData.length }}</span>)
                </h6>
            </div>

            <!-- Search Input Section -->
            <div class="md:mx-auto">
                <div class="relative w-full md:w-80 group/form">
                    <input type="text" v-model="searchQuery" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for projects..." />
                    <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search class="size-4" />

                    </div>
                </div>
            </div>

            <!-- Add Project Button -->
            <div class="shrink-0">
                <button type="button" data-modal-target="addProjectModal" @click="handleModal('showAddProjectForm')" class="btn btn-primary">
                    <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4" /> <span class="align-middle"> Add Project</span>
                </button>
            </div>
        </div>
        <ul class="overflow-x-auto tabs">
            <li v-for="(tab, index) in tabs" :key="index">
                <a href="#!" @click="setFilterStatus(tab.status); activeTab = tab.status" :class="{ 'active': activeTab === tab.status }" class="nav-item [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500">
                    {{ tab.label }}
                </a>
            </li>
        </ul>
        <GridTable :activeTab="activeTab" :setFilterStatus="setFilterStatus" :searchQuery="searchQuery" />
        <AddFormModule :isModuleShow="isModalVisible" :setModuleValue="setModuleValue" />
    </div>
</template>
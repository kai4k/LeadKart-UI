<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import AddFormModule from './AddFormModule.vue';
import ProjectListTable from './ProjectListTable.vue';
import { projectListData } from "./list-data";
import { CirclePlus } from 'lucide-vue-next';

const showAddProjectForm = ref(false);  // Show 'Add Project' form

const setShowAddProjectValue = (state: boolean) => {
    showAddProjectForm.value = state
}
// Function to handle the modal toggle
const handleModal = (action: string) => {
    if (action === 'showAddProjectForm') {
        showAddProjectForm.value = true;
    } else if (action === 'hideAddProjectForm') {
        showAddProjectForm.value = false;
    }
};

</script>
<template>
    <PageHeading title="List View" sub-title="Projects" />
    <div>
        <div class="card">
            <div class="flex flex-wrap items-center gap-5 card-header">
                <div class="grow">
                    <h6 class="mb-1 card-title">All Projects ({{ projectListData.length }})</h6>
                    <p class="text-gray-500">Manage your construction projects from start to finish with complete
                        control.</p>
                </div>
                <button type="button" @click="handleModal('showAddProjectForm')" class="btn btn-primary">
                    <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus>
                    <span class="align-middle"> Add Project</span>
                </button>
            </div>
            <ProjectListTable />
        </div>
        <!-- Add Project Modal -->
        <AddFormModule :isModuleShow="showAddProjectForm" :setModuleValue="setShowAddProjectValue" />
    </div>
</template>
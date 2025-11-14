<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import AddStaffData from './AddStaffData.vue';
import StaffTable from './StaffTable.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import { CirclePlus } from 'lucide-vue-next';
import { ref } from 'vue'; // Import ref for managing state
import { staffData } from './staff-data';
// State to manage modal visibility
const showAddStaffForm = ref(false);
const showUpdateStaffForm = ref(false);
const showDeleteModule = ref(false);
const deleteIndex = ref<number | null>();
const updateRowData = ref<any>()
const setDeleteModuleValue = (index: number, state: boolean) => {
    deleteIndex.value = index
    showDeleteModule.value = state
}
const setShowAddStaffValue = (state: boolean) => {
    showAddStaffForm.value = state
}
const setShowUpdateStaffValue = (state: boolean, data: any) => {
    updateRowData.value = data
    showUpdateStaffForm.value = state
}
function addStaffData(data: any) {
    staffData.value.unshift({ ...data, staffID: staffData.value.length + 1595 });
}

function deleteStaffRow() {
    if (deleteIndex.value !== null && deleteIndex.value !== undefined) {
        staffData.value.splice(deleteIndex.value, 1);
    } else {
        console.error("Invalid index for deletion");
    }
}
</script>
<template>
    <PageHeading title="List View" sub-title="Staff" />
    <div>
        <div class="grid grid-cols-12 gap-x-space">
            <div class="col-span-12 card">
                <div class="flex items-center gap-3 card-header">
                    <h6 class="card-title grow">Staff List</h6>
                    <button type="button" class="btn btn-primary shrink-0" @click="showAddStaffForm = true"
                        data-modal-target="addStaffModal">
                        <CirclePlus class="inline-block mr-1 size-4"></CirclePlus> Add Staff
                    </button>
                </div>
                <StaffTable :setShowDeleteModuleValue="setDeleteModuleValue"
                    :setUpdateModuleValue="setShowUpdateStaffValue" />
            </div>
        </div>
        <AddStaffData :showModule="showAddStaffForm" :setShowModuleValue="setShowAddStaffValue" :addRow="addStaffData"
            :showUpdateModule="showUpdateStaffForm" :setShowUpdateModuleValue="setShowUpdateStaffValue"
            :updateData="updateRowData" />

        <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue"
            :deleteRow="deleteStaffRow" />
    </div>
</template>
<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, defineProps } from 'vue';
const props = defineProps({
    isModuleOpen: Boolean,
    setModuleValue: Function,
    addRow: Function
})
// Reactive state
const foldername = ref<string>('');
const folderError = ref<boolean>(false);

// Function to close the modal
const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue(false)
    foldername.value = ''; // Reset the folder name when closing
    folderError.value = false; // Reset any errors
};

// Function to validate the folder name
const validateFoldername = () => {
    folderError.value = foldername.value.trim() === '';
};

// Function to handle adding a folder (this can be expanded to integrate with actual data handling)
const addFolder = () => {
    validateFoldername()
    if (foldername.value && !folderError.value) {
        if (props.addRow) props.addRow(foldername.value)
        closeModal();
    }

};
</script>
<template>
    <div v-if="isModuleOpen" id="createFolderModal" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Create Folder</h6>
                <button @click="closeModal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div>
                    <label for="folderInput" class="form-label">Folder Name <span class="text-red-500">*</span></label>
                    <input type="text" id="folderInput" v-model="foldername"
                        class="form-input dark:bg-dark-800 dark:border-dark-500" @input="validateFoldername"
                        :class="{ 'border-red-500': folderError }" />
                    <span v-if="folderError" class="text-red-500">Folder name is required</span>
                </div>
                <div class="flex items-center justify-end gap-2 mt-space">
                    <button type="button" class="btn btn-active-red" @click="closeModal">
                        Close <X data-lucide="x" class="inline-block ltr:ml-1 rtl:mr-1 size-4"></X>
                    </button>
                    <button class="btn btn-primary" @click="addFolder">
                        Add Folder
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>
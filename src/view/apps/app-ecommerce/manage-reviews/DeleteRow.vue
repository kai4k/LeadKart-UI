<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import { defineProps } from 'vue';
const props = defineProps({
    isModalVisible: Boolean,
    setModelStatus: Function,
    deleteRow: Function,
})

// Close the modal
const closeModal = () => {
    // props.isModalVisible = false;
    if (props.setModelStatus) props.setModelStatus(false)
};

// Handle the deletion of the item
const deleteProduct = () => {
    if (props.deleteRow) props.deleteRow()
    closeModal();
};
</script>
<template>
    <div v-if="isModalVisible" id="deleteModal" class="modal">
        <div class="modal-wrap modal-xs modal-center">
            <div class="text-center modal-content p-7">
                <!-- Icon indicating delete -->
                <div
                    class="flex items-center justify-center mx-auto mb-4 text-red-500 rounded-full bg-red-500/10 size-14 backdrop-blur-xl">
                    <Trash2 data-lucide="trash-2" class="size-6"></Trash2>
                </div>
                <!-- Modal Heading -->
                <h5 class="mb-4">Are you sure you want to delete this Review?</h5>
                <!-- Modal Action Buttons -->
                <div class="flex items-center justify-center gap-2">
                    <!-- Delete Button -->
                    <button class="btn btn-red" @click="deleteProduct" data-modal-close="deleteModal">Delete</button>
                    <!-- Cancel Button -->
                    <button data-modal-close="deleteModal" class="btn link link-primary"
                        @click="closeModal">Cancel</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
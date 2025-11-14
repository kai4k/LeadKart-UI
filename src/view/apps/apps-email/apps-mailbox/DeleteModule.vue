<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import { defineProps } from 'vue';
const props = defineProps({
    showDeletePop: Boolean,
    setDeleteModal: Function,
    deleteRow: Function,
    title: String
})
const closeModal = (state: boolean) => {
    if (props.setDeleteModal) {
        props.setDeleteModal(state);
    }
};
const deleteMailItems = () => {
    if (props.deleteRow) props.deleteRow()
    closeModal(false); // Close the modal after deleting
};
</script>
<template>
    <div v-if="showDeletePop" class="modal">
        <div class="modal-wrap modal-xs modal-center">
            <div class="text-center modal-content p-7">
                <div
                    class="flex items-center justify-center mx-auto mb-4 text-red-500 rounded-full bg-red-500/10 size-14 backdrop-blur-xl">
                    <Trash2 data-lucide="trash-2" class="size-6"></Trash2>
                </div>
                <h5 class="mb-4">Are you sure you want to delete this {{ title || 'Data' }} ?</h5>
                <div class="flex items-center justify-center gap-2">
                    <button class="btn btn-red" @click="deleteMailItems">Delete</button>
                    <button @click="closeModal(false)" class="btn link link-primary">Cancel</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal(false)"></div>
    </div>
</template>
<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import { ref, defineProps, computed } from 'vue';
const props = defineProps({
    setDeleteModule: {
        type: Function,
    },
    isDeleteModuleOpen: {
        type: Boolean,
    }
})
let isModalOpen = computed(() => {
    return props.isDeleteModuleOpen;
});
const productToDelete = ref(null);
const closeModal = () => {
    if (props.setDeleteModule) props.setDeleteModule(isModalOpen)

};
const deleteProduct = () => {
    if (productToDelete.value) {
        // Implement your logic to delete the product here
        closeModal();
    }
};
</script>
<template>
    <!-- Delete Modal -->
    <div v-if="isModalOpen" id="deleteModal" class="modal">
        <div class="modal-wrap modal-xs modal-center">
            <div class="text-center modal-content p-7">
                <div
                    class="flex items-center justify-center mx-auto mb-4 text-red-500 rounded-full bg-red-500/10 size-14 backdrop-blur-xl">
                    <Trash2 data-lucide="trash-2" class="size-6"></Trash2>
                </div>
                <h5 class="mb-4">Are you sure you want to delete this Product?</h5>
                <div class="flex items-center justify-center gap-2">
                    <button class="btn btn-red" @click="deleteProduct">Delete</button>
                    <button @click="closeModal" class="btn link link-primary">Cancel</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>
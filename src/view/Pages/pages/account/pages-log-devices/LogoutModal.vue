<script setup lang="ts">
import { LogOut } from 'lucide-vue-next';
import { ref } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: 'Logout This Device'
    },
    description: {
        type: String,
        default: 'Are you sure you want to log out from this device?'
    },
    showModule: Boolean,
    setShowModuleValue: Function,
})
// State variable to control modal visibility
// const isModalVisible = ref(true);


// Function to close the modal
const closeModal = () => {
    if (props.setShowModuleValue) props.setShowModuleValue(false)
};

// Function to handle logging out the device
const logoutDevice = () => {
    closeModal(); // Close the modal after logging out
};
</script>
<template>
    <div v-if="showModule" id="logoutModal" class="modal">
        <div class="modal-wrap modal-xs modal-center">
            <div class="text-center modal-content p-7">
                <div
                    class="flex items-center justify-center mx-auto mb-4 bg-red-500 rounded-full size-12 text-red-50 ring-4 ring-red-500/10">
                    <LogOut class="size-6"></Logout>
                </div>
                <h5 class="mb-2">{{ title }}</h5>
                <p class="mb-5 text-gray-500 dark:text-dark-500">{{ description }}</p>
                <div class="flex items-center justify-end gap-2">
                    <button @click="logoutDevice" class="btn btn-red">Logout Device</button>
                    <button @click="closeModal" class="btn link link-primary">Cancel</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>
</template>
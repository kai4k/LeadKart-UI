<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { files } from './file-manager-ata';
const props = defineProps({
    showModule: Boolean,
    setModuleVisibleValue: Function,
    getData: Object,
})
const newFileName = ref<string | any>('');
watch(() => props.getData, (newVal) => {
    if (newVal) {
        newFileName.value = newVal?.documentName;
    }
})

const closeModal = () => {
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
};

const renameFile = () => {
    // Implement the logic to rename the file here.
    const index = files.value.findIndex(data => data.id == props.getData?.id)
    files.value.splice(index, 1, { ...files.value[index], documentName: newFileName.value });
    closeModal()
};
</script>
<template>
    <div id="renameFileModal" v-show="showModule" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Rename File</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div>
                    <label for="renameTitle" class="form-label">Rename Title <span class="text-red-500">*</span></label>
                    <input type="text" id="renameTitle" v-model="newFileName"
                        class="form-input dark:bg-dark-800 dark:border-dark-500" required
                        placeholder="Enter rename file">
                </div>
                <div class="flex items-center justify-end gap-2 mt-space">
                    <button type="button" class="btn btn-active-red" @click="closeModal">Close <X data-lucide="x"
                            class="inline-block ltr:ml-1 rtl:mr-1 size-4"></X></button>
                    <button class="btn btn-primary" @click="renameFile">Rename File</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>
</template>
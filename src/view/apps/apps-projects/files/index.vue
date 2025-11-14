<script setup lang="ts">
import { Upload } from 'lucide-vue-next';
import { onMounted, ref, computed, } from 'vue';
import { filesData } from './file-data';
const props = defineProps({
    setTitle: Function
})
// Define the type for the file
interface FileItem {
    name: string;
    size: number;
    type: string;
}

// Reactive files array, initialized with the static data
const files = ref<FileItem[]>(filesData);

// Handle file upload
const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
        const file = input.files[0];
        files.value.unshift({ name: file.name, size: file.size, type: file.type });
        input.value = ''; // Reset file input
    }
};

// Get the file type icon based on the file type
const getIconClass = (fileType: string) => {
    if (!fileType) return 'ri-file-text-line'; // Default icon if fileType is undefined
    switch (true) {
        case fileType.startsWith('image/'):
            return 'ri-file-image-line';
        case fileType === 'application/pdf':
            return 'ri-file-pdf-2-line';
        case fileType.startsWith('audio/'):
            return 'ri-file-music-line';
        case fileType.startsWith('video/'):
            return 'ri-file-2-line';
        case fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return 'ri-file-word-line';
        case fileType === 'application/vnd.ms-excel' || fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return 'ri-file-excel-line';
        case fileType === 'application/vnd.ms-powerpoint' || fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return 'ri-file-ppt-line';
        case fileType === 'application/zip' || fileType === 'application/x-rar-compressed':
            return 'ri-file-zip-line';
        case fileType === 'text/plain':
            return 'ri-file-text-line';
        default:
            return 'ri-file-line';
    }
};

// Format the file size
const formatSize = (sizeInBytes: number) => {
    if (sizeInBytes >= 1024 * 1024) {
        return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
    } else {
        return (sizeInBytes / 1024).toFixed(2) + ' KB';
    }
};

// Computed property to count the files
const fileCount = computed(() => files.value.length);


onMounted(() => {
    if (props.setTitle) props.setTitle('Files');
});
</script>
<template>
    <div>
        <h5 class="text-16">Files (<span>{{ fileCount }}</span>)</h5>

        <div class="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5">
            <div v-for="(file, index) in files" :key="index" class="relative text-center card">
                <div class="card-body">
                    <i :class="getIconClass(file.type)" class="text-2xl fill-sky-500/10"></i>
                    <h6 class="mt-4 mb-1">
                        <a href="#!" class="before:inset-0 before:absolute before:content-['']">{{ file.name }}</a>
                    </h6>
                    <p class="text-gray-500 dark:text-dark-500">{{ formatSize(file.size) }}</p>
                </div>
            </div>

            <label
                class="relative flex flex-col items-center justify-center p-5 cursor-pointer border-primary-500/20 bg-primary-50 dark:bg-primary-500/10 dark:border-primary-500/20 card">
                <Upload data-lucide="upload" class="inline-block mb-3 text-primary-500 size-7 fill-primary-500/20">
                </Upload>
                <span class="font-medium card-title text-primary-500">Upload file</span>
                <input type="file" @change="handleFileUpload"
                    class="hidden w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
            </label>
        </div>
    </div>
</template>
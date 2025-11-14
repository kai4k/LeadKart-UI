<script setup lang="ts">
import { ref } from 'vue';
import { fileManagerData } from './file-manager-data';
import { CloudUpload, Search } from 'lucide-vue-next';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
// Types
interface FileData {
    name: string;
    size: string;
    date: string;
    type: string;
    image: string;
}

// Reactive Variables
const searchTerm = ref('');
const filteredData = ref<FileData[]>([...fileManagerData]);

// Methods
const filterData = () => {
    const term = searchTerm.value.toLowerCase();
    if (term) {
        filteredData.value = fileManagerData.filter((item) =>
            Object.values(item).some((value) => value.toString().toLowerCase().includes(term))
        );
    } else {
        filteredData.value = [...fileManagerData];
    }
};

const deleteFile = (file: FileData) => {
    filteredData.value = filteredData.value.filter((item) => item !== file);
};
</script>
<template>
    <div class="col-span-12 xl:col-span-8 xl:row-span-2 card">
        <div class="flex flex-wrap items-center justify-between gap-4 card-header">
            <h6 class="card-title">Quick Access</h6>
            <div class="flex items-center gap-4">
                <!-- Search Input -->
                <div class="relative group/form grow">
                    <input type="text" class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Search for ..."
                        v-model="searchTerm" @input="filterData" />
                    <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3">
                        <Search data-lucide="search" class="text-gray-500 size-4"></Search>
                    </button>
                </div>
                <!-- Upload Button -->
                <div class="shrink-0">
                    <input type="file" id="fileInput" class="hidden" />
                    <label for="fileInput" class="btn btn-sub-green">
                        <CloudUpload data-lucide="cloud-upload" class="inline-block ltr:mr-1 rtl:ml-1 size-4">
                        </CloudUpload>
                        Upload
                    </label>
                </div>
            </div>
        </div>
        <div class="card-body">
            <!-- Table -->
            <div class="overflow-x-auto table-box">
                <table class="table flush">
                    <tbody>
                        <tr v-if="filteredData.length" v-for="(item, index) in filteredData" :key="index"
                            class="*:px-3 *:py-2.5">
                            <td class="whitespace-nowrap">
                                <div class="flex items-center gap-3">
                                    <img :src="item.image" loading="lazy" alt="File Icon" class="size-8" />
                                    <a href="#!">
                                        <h6>{{ item.name }}</h6>
                                    </a>
                                </div>
                            </td>
                            <td class="whitespace-nowrap">{{ item.type }}</td>
                            <td class="whitespace-nowrap">{{ item.size }}</td>
                            <td class="whitespace-nowrap">{{ item.date }}</td>
                            <td class="whitespace-nowrap" >
                                <div class="flex gap-3">
                                    <a href="#!" class="link link-primary">
                                        <i class="ri-edit-2-line"></i>
                                    </a>
                                    <a href="#!" class="link link-primary">
                                        <i class="ri-download-2-line"></i>
                                    </a>
                                    <a href="#!" class="link link-red" @click="deleteFile(item)">
                                        <i class="ri-delete-bin-6-line"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr v-else>
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
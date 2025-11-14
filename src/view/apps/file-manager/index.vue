<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import FileTable from './FileTable.vue';
import AddFileModule from './AddFileModule.vue';
import EChartsVue from '@/components/common/EChartsVue.vue';
import { folders, videoFiles, chartOptions, docFiles, type Folder } from './file-manager-ata';
import { Ellipsis, Plus, Search } from 'lucide-vue-next';
import folderImg from "@/assets/images/file-manager/icons/folder.png";
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
// Define the state for the search term and the modal visibility
const searchTerm = ref<string>(''); // The search term for filtering files
const createFolderModalVisible = ref<boolean>(false);

const setCreateFolderModelValue = (state: boolean) => {
    createFolderModalVisible.value = state;
}

// Delete folder by index
const deleteFolder = (index: number) => {
    folders.value.splice(index, 1);
};

function addFolder(foldername: any) {
    // Validate the folder name (must not be empty)
    if (!foldername.trim()) {
        console.error("Folder name is required!");
        return; // Stop the function if validation fails
    }
    folders.value.unshift({
        name: foldername,
        description: '0 items',
        image: folderImg
    });
    // Clear the folder name (optional)
    foldername = '';
    // Log success (optional)
}

const handleTableActivity = (option: string, data?: Folder, index?: number) => {
    const activity = option.toLowerCase()
    if (activity == 'delete') {
        deleteFolder(index!)
    }
}
</script>
<template>
    <PageHeading title="File Manager" sub-title="Apps" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
            <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
                <div class="flex flex-wrap justify-between gap-4">
                    <div class="flex-grow">
                        <div class="relative group/form">
                            <!-- Search input with model binding -->
                            <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search ..." v-model="searchTerm" />
                            <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                <Search class="size-4"></Search>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 gap-2">
                        <!-- Create New Button -->
                        <button type="button" class="w-full btn btn-primary" @click="createFolderModalVisible = true" data-modal-target="createFolderModal">
                            <Plus data-lucide="plus" class="inline-block ltr:ml-1 rtl:mr-1 size-4"></Plus> Create New
                        </button>
                        <!-- Ellipsis Button (More options) -->
                        <button type="button" title="btn" class="btn btn-sub-gray btn-icon shrink-0">
                            <Ellipsis data-lucide="ellipsis" class="size-4"></Ellipsis>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mt-space">
                <div>
                    <!-- Folder Title with count -->
                    <h6 class="mb-3">My Folders (<span>{{ folders.length }}</span>)</h6>
                    <!-- Grid to display folders -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-x-space">
                        <div v-for="(folder, index) in folders" :key="index" class="block card">
                            <div class="card-body">
                                <!-- Dropdown Menu for Each Folder -->
                                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="review-table-position top-5" :list="['Open Folder', 'Delete']" mainCss="float-end" iconCss="rotate-90 size-4" @tableActivity="(option) => handleTableActivity(option, folder, index)" />
                                <!-- Folder Image -->
                                <img :src="folder.image" alt="Folder Image" />

                                <div class="mt-4">
                                    <!-- Folder Name -->
                                    <h6 class="mb-1">{{ folder.name }}</h6>
                                    <!-- Folder Description -->
                                    <p class="text-sm text-slate-500 dark:text-dark-500">{{ folder.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 class="mb-3">Pinned Files</h6>
                    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space">
                        <!-- Loop through the files array and render each item -->
                        <a v-for="(file, index) in videoFiles" :key="index" href="#!" class="block overflow-hidden card">
                            <!-- Conditionally render an image or iframe based on file type -->
                            <div v-if="file.type === 'image'">
                                <img :src="file.src" alt="File image" class="object-cover w-full h-32" />
                            </div>
                            <div v-else-if="file.type === 'video'">
                                <iframe class="w-full h-32" :title="file.title" :src="file.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                            <div class="text-center border-t border-gray-200 card-body dark:border-dark-800">
                                <h6 class="mb-1">{{ file.title }}</h6>
                                <p class="text-sm text-slate-500 dark:text-dark-500">{{ file.size }}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card">

                    <FileTable :searchQuery="searchTerm" />
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="card-body">
                    <div class="h-72">
                        <!-- ECharts component -->
                        <EChartsVue :options="chartOptions" :height="288" />
                    </div>
                    <p class="text-center text-slate-500 dark:text-dark-500">Get an additional 500 GB of space for your
                        documents and files.</p>
                    <div class="space-y-4 mt-space">
                        <!-- Loop through the file categories and render them dynamically -->
                        <a v-for="(file, index) in docFiles" :key="index" href="#!" class="flex items-center gap-2">
                            <div class="flex items-center justify-center p-2 rounded-md bg-gray-50 size-12 shrink-0 dark:bg-dark-850">
                                <img :src="file.icon" alt="file-icon">
                            </div>
                            <div class="grow">
                                <h6 class="mb-1">{{ file.name }}</h6>
                                <p class="text-slate-500 dark:text-dark-500">{{ file.size }}</p>
                            </div>
                            <p class="text-slate-500 dark:text-dark-500 shrink-0">{{ file.percentage }}%</p>
                        </a>

                        <!-- Upgrade Section -->
                        <div class="pt-3 overflow-hidden rounded-md">
                            <div class="mx-10">
                                <img src="@/assets/images/file-manager/upgrade.png" alt="Upgrade Image">
                            </div>
                            <div class="text-center p-space bg-primary-500/10">
                                <h6 class="mb-1">Get More space for files</h6>
                                <p class="mb-3 text-sm text-slate-500 dark:text-dark-500">
                                    We offer your unlimited storage space for all your needs
                                </p>
                                <button type="button" class="w-full btn btn-primary">Upgrade to Pro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AddFileModule :isModuleOpen="createFolderModalVisible" :setModuleValue="setCreateFolderModelValue" :addRow="addFolder" />
    </div>
</template>
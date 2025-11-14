<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { files } from './file-manager-ata'
import DeleteModule from '../apps-email/apps-mailbox/DeleteModule.vue';
import UpdateFile from './UpdateFile.vue';
import TableDataNotFount from '../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import { ChevronLeft, ChevronRight, CloudUpload, Trash } from 'lucide-vue-next';
// Mock data - replace this with actual data or a prop if necessary
const props = defineProps({
    searchQuery: {
        type: String,
        default: '',
    }
})
interface FileType {
    image: string;
    type: string;
    documentName: string;
    size: string | number;
    lastEdit: string;
}

const selectedItems = ref<any>([]);
const selectAll = ref(false);
const currentPage = ref(1);
const perPage = 5;  // Number of items per page
const sortBy = ref('documentName');
const sortDirection = ref('desc');

// Computed properties for pagination
const totalPages = computed(() => Math.ceil(files.value.length / perPage));
const filteredFiles = computed(() => files.value.filter(data => data.documentName.toLowerCase().includes(props.searchQuery)));  // You can add filter logic here
const displayedFiles = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return filteredFiles.value.slice(start, end);
});
const showingStart = computed(() => (currentPage.value - 1) * perPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * perPage, filteredFiles.value.length));

// Methods to toggle selection
const toggleItem = (file: FileType) => {
    const index = selectedItems.value.indexOf(file);
    if (index !== -1) {
        selectedItems.value.splice(index, 1);
    } else {
        selectedItems.value.push(file);
    }
    selectAll.value = selectedItems.value.length === filteredFiles.value.length;
};

const toggleAll = () => {
    selectAll.value = !selectAll.value;
    selectedItems.value = selectAll.value ? [...files.value] : [];
};

// Sorting functionality
const sort = (column: any) => {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    // Sort the files based on column and direction
    files.value.sort((a: any, b: any) => {
        if (sortDirection.value === 'asc') {
            return a[column] > b[column] ? 1 : -1;
        } else {
            return a[column] < b[column] ? 1 : -1;
        }
    });
};

// Pagination methods
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

const deleteItem = ref<FileType | null>(null);
// Delete selected items
const deleteSelectedItems = () => {
    files.value = files.value.filter(
        (file) => !selectedItems.value.includes(file)
    );
    selectedItems.value = [];
    selectAll.value = false;
};
const handleFileChange = (event: Event) => {
};

// ------------------ Table activity----------------------
const selectedData = ref()
const showDeleteModule = ref(false)
const showEditModule = ref(false)
const setDeleteModuleValue = (state: boolean, data?: any) => {
    showDeleteModule.value = state
    selectedData.value = data

}
const setEditModuleValue = (state: boolean, data?: any) => {
    showEditModule.value = state
    selectedData.value = data
}

const deleteFileRow = () => {
    const index = files.value.findIndex(item => item.id === selectedData.value.id)
    files.value.splice(index, 1)
}

onMounted(() => {
    files.value.forEach((data, index) => data.id = index + 1);
    sort(sortBy.value)
})
</script>
<template>
    <div class="flex items-center gap-5 card-header">
        <h6 class="card-title grow">Recent Files</h6>

        <!-- Delete Button (only visible when there are selected items) -->
        <button class="btn btn-red btn-icon" v-if="selectedItems.length > 0" @click="deleteSelectedItems">
            <Trash data-lucide="trash" class="inline-block size-4"></Trash>
        </button>

        <!-- File Upload Section -->
        <div class="shrink-0">
            <input type="file" id="fileInput" class="hidden" @change="handleFileChange">
            <label for="fileInput" class="btn btn-sub-green">
                <CloudUpload class="inline-block ltr:mr-1 rtl:ml-1 size-4">
                </CloudUpload> Upload
                File
            </label>
        </div>
    </div>
    <div class="pt-0 card-body">
        <div>
            <div class="overflow-x-auto table-box whitespace-nowrap">
                <table class="table flush">
                    <tbody>
                        <!-- Table Header -->
                        <tr class="bg-gray-100 dark:bg-dark-850">
                            <th>
                                <div class="text-gray-500 input-check-group dark:text-dark-500">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" @click="toggleAll" />
                                </div>
                            </th>
                            <th @click="sort('type')" class="!font-medium cursor-pointer">
                                Type
                                <span v-if="sortBy === 'type'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('documentName')" class="!font-medium cursor-pointer">
                                Document Name
                                <span v-if="sortBy === 'documentName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('size')" class="!font-medium cursor-pointer">
                                Size
                                <span v-if="sortBy === 'size'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('lastEdit')" class="!font-medium cursor-pointer">
                                Last Edit
                                <span v-if="sortBy === 'lastEdit'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th class="!font-medium">Action</th>
                        </tr>

                        <!-- Table Body -->
                        <template v-if="displayedFiles.length > 0">
                            <tr v-for="(file, index) in displayedFiles" :key="index" class="*:px-3 *:py-2.5">
                                <td>
                                    <div class="input-check-group">
                                        <label :for="`files${index}`" class="hidden input-check-label"></label>
                                        <input :id="`files${index}`" class="input-check input-check-primary" type="checkbox" :checked="selectedItems.includes(file)" @click="toggleItem(file)" />
                                    </div>
                                </td>
                                <td>
                                    <img :src="file.image" alt="" class="h-6">
                                </td>
                                <td><a href="#!">{{ file.documentName }}</a></td>
                                <td>{{ file.size }}</td>
                                <td>{{ file.lastEdit }}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" title="edit" @click="setEditModuleValue(true, file)" data-modal-target="renameFileModal">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" title="delete" @click="setDeleteModuleValue(true, file)" data-modal-target="deleteModal">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </template>

                        <!-- No Records Found -->
                        <tr v-if="displayedFiles.length === 0">
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="grid items-center grid-cols-12 gap-5 mt-3" v-if="displayedFiles.length !== 0">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredFiles.length }}</b>
                        Results
                    </p>
                    <span v-if="selectedItems.length > 0">
                        <b>{{ selectedItems.length }} Row Selected</b>
                    </span>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex justify-center md:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                            Prev
                        </button>
                        <template v-for="page in totalPages" :key="page">
                            <button @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                {{ page }}
                            </button>
                        </template>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                            <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <UpdateFile :setModuleVisibleValue="setEditModuleValue" :showModule="showEditModule" :getData="selectedData" />
        <DeleteModule :show-delete-pop="showDeleteModule" :set-delete-modal="setDeleteModuleValue" :delete-row="deleteFileRow" />
    </div>
</template>
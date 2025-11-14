<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue'

import CategoryTable from './CategoryTable.vue';
import AddCategoryModule from './AddCategoryModule.vue';
import { Search, Trash, } from 'lucide-vue-next';
import type { CategoryType } from './category-data';
// Define reactive variables
const searchTerm = ref('');
const selectedItems = ref<Array<CategoryType>>([]);
const selectedData = ref()
// Method to delete selected items
const deleteSelectedItems = () => {
    // Logic to delete selected items
};
// --------table details-------------
const isAddModule = ref(true)
const setSelectedItems = (value: CategoryType) => {
    selectedItems.value.push(value);
}
const getSelectedData = (state: boolean, data: any) => {
    isAddModule.value = state
    selectedData.value = data
}
// delete module
let deleteData = ref<CategoryType | null>(null)
const isDeleteModuleOpen = ref(false);
const setDeleteModule = (data: CategoryType, state: boolean) => {
    isDeleteModuleOpen.value = state
    deleteData.value = data
}
</script>
<template>
    <PageHeading title="Category List" sub-title="Ecommerce" />
    <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-7 xl:col-span-8">
            <div class="card">
                <div class="card-header">
                    <div class="grid items-center grid-cols-12 gap-3">
                        <div class="col-span-12 md:col-span-3">
                            <h6 class="card-title">Category List</h6>
                        </div>
                        <div class="col-span-12 md:col-span-4 md:col-start-9">
                            <div class="flex gap-2">
                                <!-- Search input field -->
                                <div class="relative group/form grow">
                                    <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." v-model="searchTerm" />
                                    <button class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                        <Search data-lucide="search" class="size-4"></Search>
                                    </button>
                                </div>

                                <!-- Delete button, only visible when selectedItems has elements -->
                                <button class="btn btn-red btn-icon shrink-0" v-if="selectedItems.length > 0" @click="deleteSelectedItems">
                                    <Trash data-lucide="trash" class="size-4"></Trash>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <CategoryTable :setSelectedItems="setSelectedItems" :setDeleteModule="setDeleteModule" :searchQuery="searchTerm" :sendData="getSelectedData" />
            </div>
        </div>
        <AddCategoryModule :getData="selectedData" :isAddProductForm="isAddModule" :setAddModuleValue="getSelectedData" />
    </div>
</template>
<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { Plus, Search } from 'lucide-vue-next';
import VueDraggableModule from './VueDraggableModule.vue';
import AddRowModule from './AddRowModule.vue';
import { ref } from 'vue';
const searchTerm = ref('');
const searchContact = () => {
};
// ------------ Table Activity -------------
const showAddContactForm = ref<boolean>(false);

const setAddModuleValue = (state: boolean) => {
    showAddContactForm.value = state
}
</script>
<template>
    <PageHeading title="Lead" sub-title="CRM" />
    <div>
        <div class="card">
            <div>
                <!-- Card Header -->
                <div class="card-header">
                    <div class="grid grid-cols-12 gap-5">
                        <!-- Search Input -->
                        <div class="col-span-12 lg:col-span-6 xl:col-span-9">
                            <div class="relative group/form w-full xl:max-w-[300px]">
                                <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for leads..." v-model="searchTerm" @input="searchContact" />
                                <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                    <Search data-lucide="search" class="size-4">
                                    </Search>
                                </div>
                            </div>
                        </div>

                        <!-- Add Lead Button -->
                        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                            <div class="justify-end gap-2 sm:flex">
                                <button type="button" class="mt-2 btn btn-primary shrink-0 sm:mt-0" @click="showAddContactForm = true">
                                    <Plus class="inline-block size-4" /> <span class="align-baseline">Add Lead</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <VueDraggableModule />
                </div>
            </div>
        </div>
        <!-- Modal for Adding Lead (Example) -->
        <AddRowModule :isShowModule="showAddContactForm" :setShowModuleValue="setAddModuleValue" />
    </div>
</template>
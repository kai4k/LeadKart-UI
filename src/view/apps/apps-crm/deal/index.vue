<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import DealTableDetails from './DealTableDetails.vue';
import CallingPage from './CallingPage.vue';
import MessagePage from './MessagePage.vue';
import { Filter, GalleryVerticalEnd, List, Search, } from 'lucide-vue-next';
import { dealsData } from './deal-data';

const searchTerm = ref('');
const isSortOpen = ref(false);
const isCardView = ref(false);
const filterDeals = ref(dealsData);
const messageModalOpen = ref(false);
const callModalOpen = ref(false);
const setCallingModelValue = (state: boolean) => {
    callModalOpen.value = state;
}
const setMessageModelValue = (state: boolean) => {
    messageModalOpen.value = state
}
const sortDeals = (column: string | null) => {
    if (column === null) {
        filterDeals.value = [...dealsData.value];
    } else {
        filterDeals.value.sort((a: any, b: any) => {
            if (a[column] > b[column]) return 1;
            if (a[column] < b[column]) return -1;
            return 0;
        });
    }
};

const toggleSortDropdown = () => {
    isSortOpen.value = !isSortOpen.value;
};
</script>
<template>
    <PageHeading title="Deal" sub-title="CRM" />
    <div>
        <div>
            <div>
                <div>
                    <div class="flex flex-wrap justify-between gap-5 mb-5">
                        <div>
                            <div class="relative group/form">
                                <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." v-model="searchTerm" />
                                <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                    <Search data-lucide="search" class="size-4"></Search>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2">
                                <button class="btn btn-icon btn-icon-text" :class="isCardView ? 'btn btn-primary' : 'btn btn-sub-gray'" @click="isCardView = true" title="card">
                                    <GalleryVerticalEnd class="size-5" />
                                </button>
                                <button class="btn btn-icon btn-icon-text" :class="!isCardView ? 'btn btn-primary' : 'btn btn-sub-gray'" @click="isCardView = false" title="list">
                                    <List class="size-5" />
                                </button>
                                <div class="dropdown">
                                    <button class="btn btn-sub-gray" @click="toggleSortDropdown">
                                        <Filter class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" /> Sort By
                                    </button>
                                    <div v-if="isSortOpen" class="!fixed p-2 dropdown-menu !w-64">
                                        <ul>
                                            <li><a href="#" @click="sortDeals(null)" class="dropdown-item">No
                                                    Sorting</a></li>
                                            <li><a href="#" @click="sortDeals('projectName')" class="dropdown-item">Alphabetical (A -> Z)</a>
                                            </li>
                                            <li><a href="#" @click="sortDeals('projectName')" class="dropdown-item">Reverse Alphabetical (Z ->
                                                    A)</a></li>
                                            <li><a href="#" @click="sortDeals('status')" class="dropdown-item">Status</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DealTableDetails :tableView="isCardView" :setMessageModelValue="setMessageModelValue" :setCallModelValue="setCallingModelValue" :searchQuery="searchTerm" />
            </div>
            <CallingPage :setModuleValue="setCallingModelValue" :showModule="callModalOpen" />
            <MessagePage :setModelViewValue="setMessageModelValue" :showModule="messageModalOpen" />
        </div>
    </div>
</template>
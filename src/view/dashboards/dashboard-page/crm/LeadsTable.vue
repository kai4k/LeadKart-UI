<script setup lang="ts">
import { ref, computed, watch,onMounted } from 'vue';
import { leadsListData } from './crm-data';
import { ChevronLeft, ChevronRight, CirclePlus, Search } from 'lucide-vue-next';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
interface Lead {
    leadName: string;
    rating: string;
    date: string;
    contact: string;
    leadSource: string;
    leadStatus: string;
    totalBalance: string;
}

const leads = ref<Lead[]>(leadsListData);
const filterLeads = ref<Lead[]>(leadsListData);
const sortBy = ref<string>('leadName');
const sortDirection = ref<'asc' | 'desc'>('asc');
const searchTerm = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(8);

const sortClasses = {
    asc: '↑',
    desc: '↓'
};

const totalPages = computed(() => Math.ceil(filterLeads.value.length / itemsPerPage.value));

const displayedLeads = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filterLeads.value.slice(start, end);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, filterLeads.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filterLeads.value.length));

watch(searchTerm, () => filteredLeads());

function filteredLeads() {
    const term = searchTerm.value.trim().toLowerCase();
    if (term) {
        filterLeads.value = leads.value.filter(lead =>
            Object.values(lead).some(value => value.toString().toLowerCase().includes(term))
        );
    } else {
        filterLeads.value = leads.value;
    }
}

function sort(column: keyof Lead) {
    if (column === sortBy.value) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection.value = 'asc';
        sortBy.value = column;
    }

    filterLeads.value.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
        let comparison = 0;
        if (valueA > valueB) comparison = 1;
        if (valueA < valueB) comparison = -1;
        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

onMounted(() => {
    sort(sortBy.value as keyof Lead);
});
</script>
<template>
    <div class="col-span-12 card">
        <div class="grid grid-cols-12 lg:items-center card-header gap-space">
            <div class="col-span-12 lg:col-span-3">
                <h6 class="card-title">Leads ({{ filterLeads.length }})</h6>
            </div>
            <div class="col-span-12 lg:col-start-7 lg:col-span-6 2xl:col-span-4 2xl:col-start-9">
                <div class="flex items-center gap-space">
                    <div class="relative group/form grow">
                        <input type="text" class="pl-9 form-input group-[&.right]/form:pr-9 group-[&.right]/form:pl-4"
                            placeholder="Search for ..." v-model="searchTerm" @input="filteredLeads()" />
                        <button title="search-button"
                            class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 left-3 group-[&.right]/form:right-3 group-[&.right]/form:left-auto focus:outline-none">
                            <Search class="size-4"></Search>
                        </button>
                    </div>
                    <button type="button" class="btn btn-primary shrink-0">
                        <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus> Add Lead
                    </button>
                </div>
            </div>
        </div>

        <div class="pt-0 card-body">
            <div class="overflow-x-auto table-box">
                <table class="table whitespace-nowrap">
                    <tbody>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                            <th @click="sort('leadName')" class="cursor-pointer">
                                Lead Name <span v-if="sortBy === 'leadName'" :class="sortClasses[sortDirection]"></span>
                            </th>
                            <th @click="sort('rating')" class="cursor-pointer">
                                Rating <span v-if="sortBy === 'rating'" :class="sortClasses[sortDirection]"></span>
                            </th>
                            <th @click="sort('date')" class="cursor-pointer">
                                Date <span v-if="sortBy === 'date'" :class="sortClasses[sortDirection]"></span>
                            </th>
                            <th @click="sort('contact')" class="cursor-pointer">
                                Contact <span v-if="sortBy === 'contact'" :class="sortClasses[sortDirection]"></span>
                            </th>
                            <th @click="sort('leadSource')" class="cursor-pointer">
                                Lead Source <span v-if="sortBy === 'leadSource'"
                                    :class="sortClasses[sortDirection]"></span>
                            </th>
                            <th @click="sort('leadStatus')" class="cursor-pointer">
                                Lead Status <span v-if="sortBy === 'leadStatus'"
                                    :class="sortClasses[sortDirection]"></span>
                            </th>
                            <th @click="sort('totalBalance')" class="cursor-pointer">
                                Total Balance <span v-if="sortBy === 'totalBalance'"
                                    :class="sortClasses[sortDirection]"></span>
                            </th>
                        </tr>
                        <template v-if="displayedLeads.length > 0">
                            <tr v-for="(lead, index) in displayedLeads" :key="index">
                                <td>{{ lead.leadName }}</td>
                                <td><i class="text-yellow-500 align-baseline ri-star-fill"></i> ({{ lead.rating }})
                                </td>
                                <td>{{ lead.date }}</td>
                                <td>{{ lead.contact }}</td>
                                <td><span class="badge badge-gray">{{ lead.leadSource }}</span></td>
                                <td>
                                    <span :class="{
                                        'badge badge-sky': lead.leadStatus === 'New',
                                        'badge badge-green': lead.leadStatus === 'Contacted',
                                        'badge badge-yellow': lead.leadStatus === 'Interested',
                                        'badge badge-red': lead.leadStatus === 'Closed',
                                        'badge badge-purple': lead.leadStatus === 'Negotiation',
                                    }">
                                        {{ lead.leadStatus }}
                                    </span>
                                </td>
                                <td>{{ lead.totalBalance }}</td>
                            </tr>
                        </template>
                        <tr v-if="displayedLeads.length === 0">
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="grid items-center grid-cols-12 gap-space mt-space" v-if="displayedLeads.length > 0">
                <div class="col-span-12 text-center lg:col-span-6 lg:ltr:text-left lg:rtl:text-right">
                    <p class="text-gray-500 dark:text-dark-500">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filterLeads.length
                            }}</b> Results
                    </p>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <div class="flex justify-center gap-2 lg:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4">
                            </ChevronLeft>
                            <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"></ChevronRight>
                            Prev
                        </button>
                        <template v-for="page in totalPages" :key="page">
                            <button @click="gotoPage(page)" :class="{ active: currentPage === page }"
                                class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                        </template>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
                            <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-4"></ChevronLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { dealsData } from './deal-data';
import { ChevronLeft, ChevronRight, Trash } from 'lucide-vue-next';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
const props = defineProps({
    tableView: Boolean,
    setCallModelValue: Function,
    setMessageModelValue: Function,
    searchQuery: {
        type: String,
        default: ''
    },
})
const currentPage = ref(1);
const itemsPerPage = ref(8);
const totalPages = computed(() => Math.ceil(filteredDeals.value.length / itemsPerPage.value));
const filteredDeals = computed(() => {
    const searchTermLower = props.searchQuery.trim().toLowerCase();
    return dealsData.value.filter((deal) =>
        Object.values(deal).some((value) =>
            value.toString().toLowerCase().includes(searchTermLower)
        )
    );
});
const displayedDeals = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredDeals.value.slice(start, end);
});

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredDeals.value.length));

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

const openChat = (deal: any) => {
    if (props.setMessageModelValue) props.setMessageModelValue(true)
};

const reviewDeal = (projectName: string) => {
    if (props.setCallModelValue) props.setCallModelValue(true);
};

const deleteDeals = (deal: any) => {
    const dealIndex = dealsData.value.findIndex(data => data.projectName === deal.projectName);
    dealsData.value.splice(dealIndex, 1)

};

</script>
<template>
    <div>
        <div :class="{ 'group card-view gap-x-5 grid grid-cols-12': tableView, 'list-view group': !tableView }">
            <template v-if="displayedDeals.length > 0">
                <div v-for="(deal, index) in displayedDeals" :key="index" class="group-[&.card-view]:2xl:col-span-3 group-[&.card-view]:md:col-span-6 group-[&.card-view]:col-span-12">
                    <div class="card">
                        <div class="card-body">
                            <div :class="{ 'group-[&.list-view]:flex group-[&.list-view]:justify-between gap-4 group-[&.list-view]:overflow-x-auto group-[&.list-view]:whitespace-nowrap group-[&.card-view]:grid group-[&.card-view]:grid-cols-12': true }">
                                <div class="flex items-center group-[&.card-view]:col-span-12 gap-3">
                                    <div class="p-2 border border-gray-200 rounded-md dark:border-dark-800 size-12 shrink-0">
                                        <img :src="deal.image" alt="deal image">
                                    </div>
                                    <div class="overflow-hidden grow">
                                        <h6 class="mb-1 truncate">{{ deal.projectName }}</h6>
                                        <p class="text-gray-500 dark:text-dark-500">
                                            <span>{{ deal.amount }}</span> <span class="group-[&.card-view]:inline-block hidden"> - <span> {{ formatDate(deal.createDate) }}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div class="group-[&.list-view]:w-28 group-[&.card-view]:hidden">
                                    <p class="text-gray-500 dark:text-dark-500">{{
                                        formatDate(deal.createDate) }}</p>
                                </div>

                                <div class="group-[&.list-view]:w-28 group-[&.card-view]:col-span-12">
                                    <p class="text-gray-500 dark:text-dark-500 truncate group-[&.card-view]:!text-gray-800 dark:group-[&.card-view]:!text-dark-50 group-[&.card-view]:font-medium">
                                        {{ deal.company }}
                                    </p>
                                    <p class="group-[&.card-view]:block hidden mt-1 text-gray-500 dark:text-dark-500 line-clamp-2">
                                        {{ deal.content }}</p>
                                </div>

                                <div class="w-28 group-[&.card-view]:col-span-12">
                                    <div class="flex items-center gap-2">
                                        <p class="badge badge-pink">Expired
                                        </p>
                                        <span :class="{
                                            'badge badge-green': deal.status === 'Active',
                                            'badge badge-gray': deal.status === 'Unactive',
                                        }" v-text="deal.status"></span>
                                    </div>
                                </div>

                                <div class="group-[&.card-view]:col-span-12">
                                    <div class="flex flex-wrap items-center group-[&.list-view]:justify-end gap-2">
                                        <button @click="openChat(deal)" class="border-dashed btn btn-dashed-yellow">
                                            <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-message-2-line"></i>
                                            Message
                                        </button>
                                        <button @click="reviewDeal(deal.projectName)" class="border-dashed btn btn-dashed-primary shrink-0">
                                            <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-phone-line"></i>
                                            Call
                                        </button>
                                        <button @click="deleteDeals(deal)" class="btn btn-sub-gray shrink-0 btn-icon-text btn-icon" title="delete">
                                            <Trash class="inline-block size-4">
                                            </Trash>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div v-if="displayedDeals.length === 0" class="flex justify-center w-full">
            <TableDataNotFount />
        </div>
        <!-- Pagination Section -->
        <div v-if="displayedDeals.length > 0" class="grid items-center grid-cols-12 gap-5 mb-5">
            <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{
                        filteredDeals.length }}</b> Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" /> Prev
                    </button>
                    <template v-for="page in totalPages" :key="page">
                        <button @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                            {{ page }}
                        </button>
                    </template>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
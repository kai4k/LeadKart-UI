<script setup lang="ts">
import { ref, computed } from 'vue';
import { eventGridData } from './grid-data';
import type { TicketEvent } from './grid-data';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import BookEventTicket from './BookEventTicket.vue';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import AddGridEventForm from './AddGridEventForm.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../../app-ecommerce/products/grid-view/grid-data-list';
import { useRouter } from 'vue-router';

// Data/State
const currentPage = ref(1);
const itemsPerPage = 6;
const filterEvents = ref(eventGridData.value);

// Computed Properties
const totalPages = computed(() => Math.ceil(filterEvents.value.length / itemsPerPage));

const displayedEvents = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filterEvents.value.slice(start, start + itemsPerPage);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage + 1, filterEvents.value.length));

const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, filterEvents.value.length));

const totalEvents = computed(() => filterEvents.value.length);
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

const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const options: any = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};

const getWeekday = (dateStr: any) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const options: any = { weekday: 'short' };
    return date.toLocaleDateString('en-GB', options);
};

const formatDateTime = (dateStr: any, timeStr: any) => {
    if (!dateStr || !timeStr) return '';
    const dateTimeStr = `${dateStr}T${timeStr}`;
    const date: any = new Date(dateTimeStr);
    if (isNaN(date)) return 'Invalid date or time';
    const options: any = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    return date.toLocaleDateString('en-GB', options);
};

// ------------------ Table Activity --------------------------
const bookTicket = ref();
const selectedTicket = ref<TicketEvent>()
const editModuleShow = ref(false);

const setBookTicketVisibleValue = (state: boolean, data?: TicketEvent) => {
    bookTicket.value = state;
    selectedTicket.value = data
}
const setEditModuleValue = (state: boolean, data?: TicketEvent) => {
    editModuleShow.value = state
    selectedTicket.value = data
}
const deleteEvenRow = (state: boolean, rowDetails: TicketEvent) => {
    const findIndex = eventGridData.value.findIndex(data => data.Id == rowDetails.Id)
    eventGridData.value.splice(findIndex, 1)
}

const router = useRouter()
const handleTableActivity = (option: string, data?: TicketEvent) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        router.push('/apps-event-overview')
    }
    if (activity == 'edit') {
        setEditModuleValue(true, data)
    }
    if (activity == 'delete') {
        deleteEvenRow(true, data!)
    }
}

</script>
<template>
    <div>
        <!-- Event List Cards -->
        <div class="grid grid-cols-1 mt-5 md:grid-cols-2 xl:grid-cols-3 gap-x-space">
            <div v-for="(event, index) in displayedEvents" :key="index" class="card">
                <div class="card-body">
                    <div class="flex items-center gap-3">
                        <img :src="event.image" alt="" class="rounded-full size-12 shrink-0" />
                        <div class="grow">
                            <h6 class="mb-1"><a href="#!">{{ event.username }}</a></h6>
                            <p class="text-sm text-gray-500 dark:text-dark-500">{{ formatDateTime(event.date,
                                event.time) }}</p>
                        </div>
                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, event)" />

                    </div>
                    <div class="mt-5">
                        <img :src="event.mainImage" alt="" class="object-cover w-full h-48 rounded-md" />
                    </div>
                    <div class="flex gap-3 mt-5">
                        <div>
                            <div class="flex flex-col items-center justify-center mx-auto mb-2.5 border bg-red-500/20 rounded-md border-red-500/20 size-16 text-red-500">
                                <p class="mb-0.5">{{ getWeekday(event.date) }}</p>
                                <h3 class="leading-none">{{ new Date(event.date).getDate() }}</h3>
                            </div>
                            <button type="button" @click="setBookTicketVisibleValue(true, event)" class="btn btn-primary">Book</button>
                        </div>
                        <div>
                            <h6 class="mb-1"><a href="#!" class="!text-current link link-primary">{{ event.name }}</a>
                            </h6>
                            <p class="mb-2 text-gray-500 dark:text-dark-500">{{ formatDate(event.date) }}
                                <span class="ltr:pl-2 rtl:pr-2 ltr:ml-1.5 rtl:mr-1.5 ltr:border-l rtl:border-r border-gray-200 dark:border-dark-800">{{
                                    event.location }}</span>
                            </p>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Contributors</p>
                            <div class="flex mx-3 -space-x-3 grow rtl:space-x-reverse">
                                <a v-for="(contributor, idx) in event.contributors" :key="idx" href="#!" class="transition duration-300 ease-linear hover:z-10" title="avatar link">
                                    <img class="border-2 border-white rounded-full size-8 dark:border-dark-900" :src="contributor.image" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="grid items-center grid-cols-12 gap-5 mb-5">
            <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ totalEvents }}</b> Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-end md:justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" /> Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="displayedEvents.length === 0" class="flex justify-center">
            <TableDataNotFount />
        </div>
        <AddGridEventForm :edit-details="selectedTicket" :show-edit-module="editModuleShow" :set-edit-module-value="setEditModuleValue" />
        <BookEventTicket :showModule="bookTicket" :setShowModuleValue="setBookTicketVisibleValue" :getData="selectedTicket" />
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { eventsListData } from './event-data';
import type { Event } from './event-data';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import AddRowModule from './AddRowModule.vue';
import DeleteModule from '../../apps-email/apps-mailbox/DeleteModule.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../../app-ecommerce/products/grid-view/grid-data-list';
import { useRouter } from 'vue-router';
const props = defineProps({
    columnSortBy: {
        type: String,
        default: ''
    }
})
const sortBy = ref<string>(props.columnSortBy);
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref(1);
const eventsPerPage = 10;
const showEditForm = ref(false)
const editData = ref<any>({})
function setEditFormValue(state: boolean, data?: any) {
    showEditForm.value = state
    editData.value = data
}
watch(() => props.columnSortBy, (newData) => {
    sort(newData)
})
const filteredEvents = computed(() => {
    return eventsListData.value; // You can add filter logic here
});
const displayedEvents = computed(() => {
    const startIndex = (currentPage.value - 1) * eventsPerPage;
    return eventsListData.value.slice(startIndex, startIndex + eventsPerPage);
});

const totalPages = computed(() => {
    return Math.ceil(filteredEvents.value.length / eventsPerPage);
});

const showingStart = computed(() => {
    return (currentPage.value - 1) * eventsPerPage + 1;
});

const showingEnd = computed(() => {
    return Math.min(currentPage.value * eventsPerPage, filteredEvents.value.length);
});

const sort = (column: string) => {
    if (sortBy.value === column) {
        // Toggle the direction
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection.value = 'asc';
        sortBy.value = column;
    }

    // Sort the event data
    filteredEvents.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof Event];
        const valueB = b[column as keyof Event];
        let comparison = 0;

        // Compare values
        if (valueA > valueB) comparison = 1;
        else if (valueA < valueB) comparison = -1;

        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
};
// Date formatting function
const formatDate = (date: string) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0'); // ensures 2 digits
    const month = d.toLocaleString('en-GB', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
};

// Pagination navigation functions
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

// -------------------------------------------
const selectedData = ref()
const showDeleteModule = ref(false)
const setDeleteModuleValue = (state: boolean, data?: Event) => {
    selectedData.value = data
    showDeleteModule.value = state
}
const deleteEventRow = () => {
    const findIndex = eventsListData.value.findIndex((data) => data.ID == selectedData.value.ID)
    if (findIndex != -1) {
        eventsListData.value.splice(findIndex, 1)
    }
}

const router = useRouter()
const handleTableActivity = (option: string, data?: Event) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        router.push('/apps-event-overview')
    }
    if (activity == 'edit') {
        setEditFormValue(true, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}

onMounted(() => {
    eventsListData.value.forEach((data, index) => {
        data.ID = eventsListData.value.length + index
    });
})
</script>
<template>
    <div class="mt-5 overflow-x-auto">
        <table class="table whitespace-nowrap">
            <thead>
                <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                    <th @click="sort('eventName')" class="!font-medium cursor-pointer">Event Name <span v-if="sortBy === 'eventName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th @click="sort('eventDate')" class="!font-medium cursor-pointer">Event Date <span v-if="sortBy === 'eventDate'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th @click="sort('peopleSize')" class="!font-medium cursor-pointer">People Size <span v-if="sortBy === 'peopleSize'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th @click="sort('location')" class="!font-medium cursor-pointer">Location <span v-if="sortBy === 'location'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th @click="sort('eventType')" class="!font-medium cursor-pointer">Event Type <span v-if="sortBy === 'eventType'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th @click="sort('price')" class="!font-medium cursor-pointer">Price <span v-if="sortBy === 'price'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th @click="sort('status')" class="!font-medium cursor-pointer">Status <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                    <th class="!font-medium">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(event, index) in displayedEvents" :key="index">
                    <td>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center justify-center p-1 border border-gray-200 rounded size-9 dark:border-dark-800">
                                <img :src="event.image" alt="" class="rounded">
                            </div>
                            <h6><router-link to="apps-ecommerce-event-overview">{{ event.eventName }}</router-link></h6>
                        </div>
                    </td>
                    <td>{{ formatDate(event.eventDate) }}</td>
                    <td>{{ event.peopleSize }}</td>
                    <td>{{ event.location }}</td>
                    <td>{{ event.eventType }}</td>
                    <td>{{ `$${event.price}` }}</td>
                    <td>
                        <span :class="{
                            'badge badge-green': event.status === 'Published',
                            'badge badge-red': event.status === 'Expired',
                            'badge badge-yellow': event.status === 'Coming Soon'
                        }">{{ event.status }}</span>
                    </td>
                    <td class="">
                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, event)" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="eventsListData.length === 0" class="p-4 text-center">
            <TableDataNotFount />
        </div>
    </div>
    <!-- Pagination -->
    <div class="grid items-center grid-cols-12 gap-5 my-5">
        <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
            <p class="text-gray-500 dark:text-dark-500">
                Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredEvents.length }}</b>
                Results
            </p>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="flex justify-end md:justify-end pagination pagination-primary">
                <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                    Prev
                </button>
                <template v-for="page in totalPages" :key="page">
                    <button @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>
                </template>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                    Next
                    <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                    <ChevronLeft class="ml-1 ltr:hidden rtl:inline-block size-4" />
                </button>
            </div>
        </div>
    </div>
    <AddRowModule :showEditModule="showEditForm" :setEditModuleValue="setEditFormValue" :editDetails="editData" />

    <DeleteModule :delete-row="deleteEventRow" :show-delete-pop="showDeleteModule" :set-delete-modal="setDeleteModuleValue" />
</template>
<script setup lang="ts">
import { ref, computed, } from 'vue';
import simplebar from 'simplebar-vue';
import PageHeading from '@/components/common/PageHeading.vue';
import { Ellipsis, MoveLeft, MoveRight, Search } from 'lucide-vue-next';
import ticketsData, { type Ticket } from './help-center-data';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import ShowReplay from './ShowReplay.vue';
import ContactUs from './ContactUs.vue';
import CreateNewTicket from './CreateNewTicket.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
// Define the types for tickets
;

type Category = {
    category: string;
    tickets: Ticket[];
};

// Search query to filter tickets
const searchQuery = ref('');
const searchQuestions = () => {
    // You can implement search logic here if needed
};

// Active category and filter state
const activeCategory = ref('Getting Started');
const activeFilter = ref('All Tickets');

// Computed property for categories (all categories dynamically generated)
const categories = computed(() => [...new Set(ticketsData.value.map(item => item.category))]);

// Filter tickets by category
const filterCategory = (category: string) => {
    activeCategory.value = category;
};

// Filter tickets by status
const filterTickets = (status: string) => {
    activeFilter.value = status;
};

// Computed property for filtered tickets based on category and status
const filteredTickets = computed(() => {
    return ticketsData.value
        .filter(category => category.category === activeCategory.value)
        .flatMap(category =>
            category.tickets.filter(
                ticket =>
                    (activeFilter.value === 'All Tickets' || ticket.status === activeFilter.value) &&
                    (ticket.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || ticket.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
            )
        );
});

const showContactUs = ref(false);
const showAddTicket = ref(false);
const showTicketReply = ref(false);
const selectedDetails = ref({})
const setContactModuleValue = (stats: boolean) => {
    showContactUs.value = stats
}
const setTicketModuleValue = (stats: boolean) => {
    showAddTicket.value = stats
}
const setTicketReplyModuleValue = (stats: boolean, data?: any) => {
    selectedDetails.value = data
    showTicketReply.value = stats

}

const handleTableActivity = (option: string, data?: Ticket) => {
    const activity = option.toLowerCase()
    if (activity == 'reply task') {
        setTicketReplyModuleValue(true, data)
    }
}

</script>
<template>
    <PageHeading title="Help Center" sub-title="Pages" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="card-body">
                    <h6>Search for a Question</h6>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">Type your question or search keyword</p>
                    <div class="relative group/form">
                        <input type="text" id="iconWithInput" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Start typing ..." v-model="searchQuery" @input="searchQuestions" />
                        <button class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search data-lucide="search" class="size-4"></Search>
                        </button>
                    </div>
                    <simplebar class="h-auto lg:h-[calc(100vh_-_28rem)]" data-simplebar>
                        <ul class="px-1 my-5 space-y-3">
                            <li v-for="category in categories" :key="category" class="block px-4 py-2 font-medium rounded-md text-gray-500 dark:text-dark-500 [&.active]:bg-primary-500/10 [&.active]:!text-primary-500 transition ease-linear duration-200 hover:text-primary-500 dark:hover:text-primary-500 outline-1 text-sm outline-gray-200 dark:outline-dark-800 [&.active]:outline outline-offset-2 [&.active]:!outline-primary-500/20" :class="{ active: activeCategory == category }" @click="filterCategory(category)">
                                <a href="javascript:void(0)" :class="{ active: activeCategory === category }">
                                    {{ category }}
                                    <!-- <span class="!py-1 leading-none align-middle badge badge-primary ltr:ml-1 rtl:mr-1">
                                        5
                                    </span> -->
                                </a>
                            </li>
                        </ul>
                    </simplebar>
                    <div class="relative px-4 py-3 overflow-hidden rounded-md bg-primary-600">
                        <div class="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="300" height="160" preserveAspectRatio="none" viewBox="0 0 300 160">
                                <g mask="url(&quot;#SvgjsMask1016&quot;)" fill="none">
                                    <path d="M161.32 191.44C190.36 168.14 173.39 56.82 222.5 55.64 271.61 54.46 310.21 119.21 344.86 121.24" class="stroke-primary-400/15" stroke-width="2"></path>
                                    <path d="M103.48 160.94C139.34 155.85 149.02 78.76 217.61 71.68 286.2 64.6 298.91 8.36 331.74 6.08" class="stroke-primary-400/15" stroke-width="2"></path>
                                    <path d="M118.76 180.58C146.95 179.59 162.2 139.63 222.03 135.17 281.86 130.71 293.38 62.42 325.3 58.37" class="stroke-primary-400/15" stroke-width="2"></path>
                                    <path d="M96.26 168.19C127.98 167.05 145.97 121.03 212.32 116.71 278.68 112.39 293.56 41.87 328.39 38.31" class="stroke-primary-400/15" stroke-width="2"></path>
                                    <path d="M50.02 170.02C76.2 169.48 99.14 134.5 148.57 134.49 198 134.48 197.84 154.49 247.12 154.49 296.39 154.49 320.53 134.59 345.67 134.49" class="stroke-primary-400/15" stroke-width="2"></path>
                                </g>
                                <defs>
                                    <mask id="SvgjsMask1016">
                                        <rect width="300" height="160" fill="#ffffff"></rect>
                                    </mask>
                                </defs>
                            </svg>
                        </div>
                        <h6 class="mb-4 text-primary-50">Do you still need our help ?</h6>
                        <button data-modal-target="contactModal" class="relative text-white group/effect bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600 btn" v-on:click="showContactUs = true">
                            <span class="absolute inset-0 overflow-hidden rounded-xl">
                                <span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/effect:opacity-100">
                                </span>
                            </span>
                            <span>
                                Contact Us
                                <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Ticket Status Filter -->
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
            <div class="list" v-if="!showTicketReply">
                <div class="flex flex-wrap items-center gap-3 mb-5">
                    <ul class="overflow-x-auto tabs grow">
                        <li><a href="javascript:void(0)" @click="filterTickets('All Tickets')" :class="{ active: activeFilter === 'All Tickets' }" class="nav-item [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500">All
                                Tickets</a></li>
                        <li><a href="javascript:void(0)" @click="filterTickets('Active')" :class="{ active: activeFilter === 'Active' }" class="nav-item [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500">Active</a>
                        </li>
                        <li><a href="javascript:void(0)" @click="filterTickets('Closed')" :class="{ active: activeFilter === 'Closed' }" class="nav-item [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500">Closed</a>
                        </li>
                        <li><a href="javascript:void(0)" @click="filterTickets('Deleted')" :class="{ active: activeFilter === 'Deleted' }" class="nav-item [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500">Deleted</a>
                        </li>
                    </ul>
                    <div class="shrink-0">
                        <button class="btn btn-sky btn-icon-overlay" data-modal-target="newTicketsModal" @click="showAddTicket = true"><span class="icon"><i class="size-5 ri-pencil-line"></i></span>New Tickets</button>
                    </div>
                </div>
                <!-- Ticket List -->
                <simplebar class="h-[calc(100vh_-_16.8rem)]">
                    <div class="flex flex-col gap-3">
                        <div v-for="ticket in filteredTickets" :key="ticket.id" class="card !mb-0">
                            <div class="card-body">
                                <div class="flex items-center gap-5 mb-4">
                                    <h6 class="underline grow" @click="setTicketReplyModuleValue(true, ticket)"><a :href="'#!'">Ticket
                                            #<span>{{ ticket.id }}</span></a></h6>
                                    <div class="flex items-center gap-4 shrink-0">
                                        <p class="text-sm text-gray-500 dark:text-dark-500">{{ ticket.time }}</p>
                                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :list="['Reply Task', 'More Details']" mainCss="" iconCss="rotate-90 size-4" menuIconCss="size-4" @tableActivity="(option) => handleTableActivity(option, ticket)" />
                                    </div>
                                </div>
                                <h6 class="mb-1">{{ ticket.title }}</h6>
                                <p class="text-gray-500 dark:text-dark-500 line-clamp-2">{{
                                    ticket.description }}</p>
                                <div class="flex flex-wrap items-center gap-4 mt-5">
                                    <div class="flex items-center gap-2 grow">
                                        <img :src="ticket.avatar" alt="" class="rounded-full size-8 shrink-0">
                                        <h6>{{ ticket.author }}</h6>
                                    </div>
                                    <div class="shrink-0">
                                        <template v-for="(tag, index) in ticket.tags" :key="index">
                                            <a href="#!" class="p-1 text-gray-500 transition duration-200 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500"><span x-text="tag">{{ tag }}</span></a>
                                        </template>
                                    </div>
                                    <div class="shrink-0">
                                        <a href="#!" class="text-gray-500 transition duration-200 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500"><i class="inline-block align-middle size-5 ri-chat-3-line"></i> <span x-text="ticket.comments">{{
                                            ticket.comments }}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="filteredTickets.length === 0" class="flex items-center justify-center">
                        <TableDataNotFount />
                    </div>
                </simplebar>
                <!-- its ticket -->
            </div>

            <ShowReplay :showModule="showTicketReply" :set-show-module-value="setTicketReplyModuleValue" :get-data="selectedDetails" />
            <CreateNewTicket :showModule="showAddTicket" :setModuleValue="setTicketModuleValue" />

        </div>

    </div>

    <ContactUs :showModule="showContactUs" :setShowModuleValue="setContactModuleValue" />
</template>
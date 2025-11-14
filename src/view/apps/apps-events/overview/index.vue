<script setup lang="ts">
import { ref, watch } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import { Pencil, TicketMinus } from 'lucide-vue-next';
import Apexchart from '@/components/common/Apexchart.vue';
import { invitationChart, ticketSaleChart } from './overview-data';
//@ts-ignore
import { useStore } from 'vuex';
const store = useStore();
// Chart color set dynamic
const invitationChartRef = ref(invitationChart());
const ticketSaleChartRef = ref(ticketSaleChart());
const chartKey = ref(0)
watch(() => store.getters.primaryColor, () => {
    invitationChartRef.value = invitationChart()
    ticketSaleChartRef.value = ticketSaleChart()
    chartKey.value += 1
})

// Sample event data (replace with actual data from API or dynamic source)
const event = ref({
    image: new URL('@/assets/images/event/overview.jpg', import.meta.url).href,
    weekday: 'Fri',
    day: '20',
    name: 'Annual Music Festival!',
    date: '20 Dec 2024',
    location: 'Sydney, Australia',
    contributors: [
        { image: new URL('@/assets/images/avatar/user-5.png', import.meta.url).href, name: 'Declan Grieve' },
        { image: new URL('@/assets/images/avatar/user-20.png', import.meta.url).href, name: 'Callum Burston' },
        { image: new URL('@/assets/images/avatar/user-13.png', import.meta.url).href, name: 'Liam White' },
        { image: new URL('@/assets/images/avatar/user-14.png', import.meta.url).href, name: 'Olivia Green' },
        { image: new URL('@/assets/images/avatar/user-15.png', import.meta.url).href, name: 'Ethan Adams' },
        { image: new URL('@/assets/images/avatar/user-18.png', import.meta.url).href, name: 'Sophia Wilson' }
    ],
    description: 'Join us for an unforgettable experience filled with live performances, vibrant energy, and a celebration of music and culture. This year, we\'re bringing together some of the biggest names in the industry, alongside emerging artists, to create a diverse and dynamic lineup that promises to entertain and inspire.',
    highlights: [
        { title: 'Live Performances', description: 'Enjoy non-stop music from top artists across multiple stages.' },
        { title: 'Food and Drinks', description: 'Savor delicious cuisine and refreshing beverages from local vendors.' },
        { title: 'Workshops and Activities', description: 'Participate in interactive workshops and activities for all ages.' },
        { title: 'Merchandise', description: 'Get your hands on exclusive festival merchandise and memorabilia.' }
    ],
    details: [
        { title: 'Date', description: '20 Dec 2024' },
        { title: 'Time', description: '2:30 pm' },
        { title: 'Location', description: 'Sydney, Australia' },
        { title: 'Tickets Price', description: '$599.00' }
    ],
    additionalInfo: [
        { title: 'Parking', description: 'On-site parking available with a shuttle service to the festival grounds.' },
        { title: 'Accommodations', description: 'Partner hotels offering special festival rates for attendees. Check our website for more details.' },
        { title: 'Accessibility', description: 'The event is fully accessible with dedicated areas for wheelchair users and assistance for those with disabilities.' },
        { title: 'Safety Measures', description: 'We prioritize your safety with on-site medical facilities, security personnel, and clear signage throughout the venue.' }
    ],
    howToPrepare: [
        { title: 'Plan Ahead', description: 'Check the schedule and plan which performances you want to catch.' },
        { title: 'Stay Hydrated', description: 'Bring a reusable water bottle and stay hydrated throughout the event.' },
        { title: 'Dress Comfortably', description: 'Wear comfortable clothing and shoes suitable for outdoor activities.' },
        { title: 'Stay Connected', description: 'Follow us on social media for live updates and announcements.' }
    ],
    sustainability: [
        { title: 'Recycling Stations', description: 'Easily accessible recycling bins throughout the venue.' },
        { title: 'Eco-friendly Products', description: 'Encouraging the use of biodegradable and recyclable materials by our vendors.' },
        { title: 'Green Transportation', description: 'Promoting the use of public transport, biking, and carpooling to reduce the festival’s carbon footprint.' }
    ]
});
import { onMounted, onUnmounted } from 'vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';

// State to manage dropdown visibility
const open = ref(false);

// Toggle the dropdown visibility
const toggleDropdown = () => {
    open.value = !open.value;
};

// Close the dropdown
const closeDropdown = () => {
    open.value = false;
};

// Option selection handler
const selectOption = (option: any) => {
    closeDropdown(); // Close the dropdown after selection
};

// Detect clicks outside the dropdown to close it
const handleClickOutside = (event: any) => {
    if (!event.target.closest('.relative')) {
        closeDropdown();
    }
};

onMounted(() => {
    // Add event listener for outside clicks
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    // Clean up the event listener when the component is destroyed
    document.removeEventListener('click', handleClickOutside);
});
</script>
<template>
    <PageHeading title="Overview" sub-title="Events" />
    <div class="grid grid-cols-12 gap-x-5">
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Event Details</h6>
                </div>
                <div class="card-body">
                    <!-- Event Image -->
                    <div class="mb-5">
                        <img :src="event.image" alt="Event Image" class="object-cover w-full rounded-md h-72">
                    </div>

                    <!-- Event Info (Date, Title, Location, etc.) -->
                    <div class="flex flex-wrap gap-3 mb-5">
                        <div class="flex flex-col items-center justify-center mb-2.5 border bg-red-100 rounded-md border-red-200 size-16 text-red-500">
                            <p class="mb-0.5">{{ event.weekday }}</p>
                            <h3 class="leading-none">{{ event.day }}</h3>
                        </div>
                        <div class="grow">
                            <h6 class="mb-1.5">{{ event.name }}</h6>
                            <p class="mb-4 text-gray-500 dark:text-dark-500">
                                <span>{{ event.date }}</span>
                                <span class="ltr:pl-2 rtl:pr-2 ltr:ml-1.5 rtl:mr-1.5 ltr:border-l rtl:border-r border-gray-200 dark:border-dark-800">{{
                                    event.location }}</span>
                            </p>

                            <!-- Contributors/Sponsors -->
                            <p class="mb-2 text-gray-500 dark:text-dark-500">Contributors & Sponsors</p>
                            <div class="flex grow">
                                <div v-for="(contributor, index) in event.contributors" :key="index" class="transition duration-300 ease-linear hover:-translate-y-1">
                                    <img class="border-2 border-white rounded-full dark:border-dark-800 size-8" :src="contributor.image" :alt="contributor.name">
                                </div>
                            </div>
                        </div>
                        <div class="shrink-0">
                            <button class="btn btn-red" data-modal-target="bookEventModal">Book Now
                                <TicketMinus class="inline-block ltr:ml-1 rtl:mr-1 size-5">
                                </TicketMinus>
                            </button>
                        </div>
                    </div>

                    <!-- Event Description -->
                    <p class="mb-3 text-gray-500 dark:text-dark-500">{{ event.description }}</p>

                    <!-- Event Highlights -->
                    <h6 class="mb-3">Event Highlights:</h6>
                    <ul class="mb-4 space-y-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
                        <li v-for="(highlight, index) in event.highlights" :key="index">
                            <span class="font-medium text-gray-800 dark:text-dark-50">{{ highlight.title }}:</span> {{
                                highlight.description }}
                        </li>
                    </ul>

                    <!-- Event Details -->
                    <h6 class="mb-3">Details:</h6>
                    <ul class="mb-4 space-y-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
                        <li v-for="(detail, index) in event.details" :key="index">
                            <span class="font-medium text-gray-800 dark:text-dark-50">{{ detail.title }}:</span> {{
                                detail.description }}
                        </li>
                    </ul>

                    <!-- Additional Information -->
                    <h6 class="mb-3">Additional Information:</h6>
                    <ul class="mb-4 space-y-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
                        <li v-for="(info, index) in event.additionalInfo" :key="index">
                            <span class="font-medium text-gray-800 dark:text-dark-50">{{ info.title }}:</span> {{
                                info.description }}
                        </li>
                    </ul>

                    <!-- How to Prepare -->
                    <h6 class="mb-3">How to Prepare:</h6>
                    <ul class="mb-4 space-y-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
                        <li v-for="(prepare, index) in event.howToPrepare" :key="index">
                            <span class="font-medium text-gray-800 dark:text-dark-50">{{ prepare.title }}:</span> {{
                                prepare.description }}
                        </li>
                    </ul>

                    <!-- Sustainability Initiatives -->
                    <h6 class="mb-1">Sustainability Initiatives:</h6>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">We are committed to making this festival
                        environmentally friendly:</p>
                    <ul class="mb-4 space-y-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
                        <li v-for="(sustainability, index) in event.sustainability" :key="index">
                            <span class="font-medium text-gray-800 dark:text-dark-50">{{ sustainability.title }}:</span>
                            {{ sustainability.description }}
                        </li>
                    </ul>

                    <!-- Final Call -->
                    <p class="mb-2 text-gray-500 dark:text-dark-500">Don’t miss out on the music event of the year!
                        Gather your friends and family and come create lasting memories with us.</p>
                    <h6 class="mb-2">Get your tickets now and be part of the magic!</h6>
                    <p class="text-gray-500 dark:text-dark-500">For more information, visit our website or contact us at
                        SRBThemes. We can’t wait to see you there!</p>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
            <button type="button" class="w-full btn btn-primary">
                <Pencil data-lucide="pencil" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Pencil> Edit Event
            </button>
            <div class="mt-5 card">
                <div class="card-header">
                    <h6 class="card-title">Invitation Status</h6>
                </div>
                <div class="card-body">
                    <Apexchart :chartKey="chartKey" :series="invitationChartRef.series" :options="invitationChartRef.chartOptions" :height="255" class="!min-h-full" />
                    <div class="grid grid-cols-2 divide-x divide-gray-200 rtl:divide-x-reverse dark:divide-dark-800">
                        <div class="p-3 text-center">
                            <h6 class="mb-1">1800</h6>
                            <p class="text-gray-500 dark:text-dark-500">Sent</p>
                        </div>
                        <div class="p-3 text-center">
                            <h6 class="mb-1">1593</h6>
                            <p class="text-gray-500 dark:text-dark-500">Accept</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="flex items-center card-header">
                    <h6 class="card-title grow">Ticket Sale</h6>
                    <RecentMenuList :title="() => 'This Week'" extraClass="set-position" className="flex px-2 py-1 border-gray-200 dark:border-dark-800 link link-red btn !text-xs" />
                </div>
                <div class="card-body">
                    <Apexchart :series="ticketSaleChartRef.chartSeries" :options="ticketSaleChartRef.chartOptions" :height="180" class="!min-h-full" />
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Location</h6>
                </div>
                <div class="card-body">
                    <iframe class="w-full border-0 rounded-md aspect-4/3" title="video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.7072578641!2d150.60233714782865!3d-33.847234937864414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1716460671830!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
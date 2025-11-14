<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import simplebar from 'simplebar-vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import PageHeading from '@/components/common/PageHeading.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import RecentMenuList from '../../recent-menu-list.vue';
import SchoolCard from './SchoolCardDetails.vue';
import { updateCounter } from '@/view/dashboards/dashboard-page/email/email-data'
import VueApexCharts from '@/components/common/VueApexCharts.vue';
import {
    courseDonutChart,
    events,
    notices,
    studentsCharts,
    upcomingTestData,
    ScoreData,
    videos
} from './school-data'
import {
    BookOpen,
    GraduationCap,
    UserRound,
    MoveRight,
    CircleDot,
    Ellipsis,
    MoveLeft, ChevronLeft,
    ChevronRight,
    Medal,
    HandCoins,
    Computer
} from 'lucide-vue-next';
const totalStudentNumber = ref(0)
const totalTeachersNumber = ref(0)
const totalCoursesNumber = ref(0)
const totalClassRooms = ref(0)
const totalEarnings = ref(0)
const totalAwards = ref(0)
onMounted(() => {
    updateCounter(1478, totalStudentNumber)
    updateCounter(120, totalTeachersNumber)
    updateCounter(120, totalCoursesNumber)
    updateCounter(65, totalClassRooms)
    updateCounter(487, totalEarnings)
    updateCounter(30, totalAwards)
})

// Setup reactive properties
const today = new Date().getDate();
const currentDate = new Date();
const month = ref(currentDate.getMonth());
const year = ref(currentDate.getFullYear());

// Compute month name
const monthName = computed(() => {
    return currentDate.toLocaleString('default', { month: 'long' });
});

const daysInMonth = computed(() => {
    const days: number[] = [];
    const totalDays = new Date(year.value, month.value + 1, 0).getDate();
    for (let day = 1; day <= totalDays; day++) {
        days.push(day);
    }
    return days;
});


const modules = [Autoplay];
// Initialize with your data
const currentPage = ref(1);
const itemsPerPage = 5; // Set your items per page
const totalPages = computed(() => Math.ceil(ScoreData.value.length / itemsPerPage));
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, ScoreData.value.length));

const displayedEmails = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return ScoreData.value.slice(start, start + itemsPerPage);
});

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



</script>
<template>
    <PageHeading title="School" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <SchoolCard title="Total Students" bColor="before:border-primary-500" color="primary" :icon="GraduationCap"
            class="order-1">{{ totalStudentNumber }}</SchoolCard>
        <SchoolCard title="Total Teachers" bColor="before:border-orange-500" color="orange" :icon="UserRound"
            class="order-2">{{ totalTeachersNumber }}</SchoolCard>
        <SchoolCard title="Total Courses" :number="totalCoursesNumber" bColor="before:border-sky-500" color="sky"
            :icon="BookOpen" class="order-3">{{ totalCoursesNumber }}</SchoolCard>
        <div class="relative order-7 col-span-12 2xl:order-4 2xl:col-span-3 2xl:row-span-2 card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">Course Activities</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']"
                    extraClass="set-position" />
            </div>
            <div class="card-body">
                <VueApexCharts type="donut" :series="courseDonutChart.series" :options="courseDonutChart.chartOptions" :height="175" color-classes="[bg-gray-200, bg-primary-500]" class="!min-h-full"/>
            </div>
        </div>
        <div class="order-8 col-span-12 2xl:order-5 2xl:col-span-3 2xl:row-span-4 card">
            <div class="card-body">
                <div class="mb-5">
                    <h6 class="mb-3">{{ monthName }}, {{ year }}</h6>
                    <simplebar id="horizontalScroll">
                        <div class="flex items-center gap-2">
                            <a v-for="day in daysInMonth" :key="day" href="#!" :class="[
                                day === today ? 'active' : '',
                                'flex items-center justify-center font-medium text-lg bg-gray-100 dark:bg-dark-850 rounded-md size-12 shrink-0 [&.active]:bg-primary-500 [&.active]:text-primary-50 [&.active]:border-primary-500',
                                { 'bg-primary-500 text-primary-50 border-primary-500': day === today }
                            ]">
                                {{ day }}
                            </a>
                        </div>
                    </simplebar>
                </div>
                <div class="flex items-center gap-3 mb-4">
                    <h6 class="grow">Holiday Lists</h6>
                    <a href="#!" class="shrink-0 text-13 link link-primary text-primary-500">View More
                        <MoveRight class="inline-block size-4"></MoveRight>
                    </a>
                </div>
                <swiper class="mySwiper swiper" :loop="true" :slides-per-view="1" :space-between="10"
                    :pagination="{ clickable: true }" dir="ltr" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }" :modules="modules">
                    <swiper-slide v-for="event in events" :key="event.title" class="cursor-grab">
                        <div class="relative card">
                            <div class="flex items-center gap-3 card-body">
                                <div class="grow">
                                    <h6 class="mb-1">
                                        <CircleDot
                                            class="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4 fill-green-500/15">
                                        </CircleDot>
                                        {{ event.title }}
                                    </h6>
                                    <p class="text-gray-500 dark:text-dark-500 text-13">
                                        {{ event.date }}
                                    </p>
                                </div>
                                <img src="@/assets/images/school/holiday.png" alt="" class="shrink-0 size-10" />
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <!--start notice-->
                <div class="relative">
                    <h6 class="mb-4">Notice Board</h6>
                    <div class="space-y-5">
                        <div v-for="notice in notices" :key="notice.title" class="flex items-center gap-3">
                            <img :src="notice.image" alt="" class="object-cover w-16 h-20 rounded-md">
                            <div>
                                <h6 class="mb-2 line-clamp-2">
                                    <a href="#!"
                                        class="!text-current dark:text-current dark:hover:text-primary-500 link link-primary">
                                        {{ notice.title }}
                                    </a>
                                </h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ notice.author }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SchoolCard title="Class Rooms" bColor="before:border-yellow-500" color="yellow" :icon="Computer"
            class="order-4 2xl:order-6">{{ totalClassRooms }}</SchoolCard>
        <SchoolCard title="Total Earnings" bColor="before:border-pink-500" color="pink" :icon="HandCoins"
            class="order-5 2xl:order-7">${{ totalEarnings }}M</SchoolCard>
        <SchoolCard title="Awards" bColor="before:border-purple-500" color="purple" :icon="Medal"
            class="order-6 2xl:order-8">{{
                totalAwards }}+</SchoolCard>
        <div class="order-9 col-span-12 md:col-span-6 2xl:col-span-6 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Total Students</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']"
                className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="card-body">
                <Apexchart :options="studentsCharts.chartOptions" :series="studentsCharts.series" :height="290" class="!min-h-full"/>
            </div>
        </div>
        <div class="order-10 col-span-12 md:col-span-6 2xl:col-span-3 card">
            <div class="card-header">
                <h6 class="card-title">Upcoming Test</h6>
            </div>
            <div class="space-y-3 card-body">
                <div v-for="(item, index) in upcomingTestData" :key="index" class="flex items-center gap-3">
                    <div class="flex items-center justify-center rounded-md size-12" :class="item.bgColor">
                        <img :src="item.image" loading="lazy" alt="" class="h-6">
                    </div>
                    <div class="grow">
                        <h6 class="mb-1"><a href="#!">{{ item.title }}</a></h6>
                        <p class="text-gray-500 dark:text-dark-500">{{ item.class }}</p>
                    </div>
                    <p class="text-red-500 shrink-0">{{ item.date }}</p>
                </div>
            </div>
        </div>
        <div class="order-11 col-span-12 2xl:col-span-9 card" x-data="emailsTable()">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Top Score</h6>
                <div class="shrink-0">
                    <a href="#!" class="py-1 px-2.5 btn btn-primary">
                        View All
                        <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                        <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4"/>
                        
                    </a>
                </div>
            </div>
            <div class="pt-0 card-body">
                <div class="overflow-x-auto table-box">
                    <table class="table whitespace-nowrap flush">
                        <tbody>
                            <tr v-for="(email, index) in displayedEmails" :key="index">
                                <td>{{ email.studentsName }}</td>
                                <td>
                                    <span>{{ email.marks }}</span>/600
                                </td>
                                <td>{{ email.resultDate }}</td>
                                <td>{{ email.grade }}</td>
                                <td>
                                    <span :class="{
                                        'badge badge-green': email.passFail === 'Pass',
                                        'badge badge-orange': email.passFail === 'Fail'
                                    }">{{ email.passFail }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="grid items-center grid-cols-12 gap-space mt-space">
                    <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ ScoreData.length }}</b>
                            Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4">
                                </ChevronLeft>
                                <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"></ChevronRight>
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)"
                                :class="{ 'active': currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                                Next
                                <ChevronRight data-lucide="chevron-right"
                                    class="ml-1 ltr:inline-block rtl:hidden size-4">
                                </ChevronRight>
                                <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-4">
                                </ChevronLeft>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-12 col-span-12 xl:col-span-8 2xl:col-span-9 card">
            <div class="card-header">
                <h6 class="card-title">
                    Continue Watching
                    <MoveRight data-lucide="move-right" class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                    <MoveRight data-lucide="move-left" class="mr-1 rtl:inline-block ltr:hidden size-4"></MoveRight>
                </h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-space">
                    <div v-for="(video, index) in videos" :key="index" class="col-span-12 lg:col-span-4">
                        <div class="aspect-video">
                            <iframe class="w-full rounded-md aspect-video" :src="video.src" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div class="mt-3">
                            <h6 class="mb-1 truncate">
                                <a href="#!">{{ video.title }}</a>
                            </h6>
                            <p class="text-xs text-gray-500 dark:text-dark-500">{{ video.category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 text-center bg-gray-100 order-13 dark:bg-dark-850 xl:col-span-4 2xl:col-span-3 card">
            <div class="card-body">
                <h5 class="mb-2">Join the community and find out more information</h5>
                <button type="button" class="btn btn-green">Explore Now</button>
                <div class="mt-5">
                    <img src="@/assets/images/dashboards/school.png" loading="lazy" alt="" class="mx-auto h-44">
                </div>
            </div>
        </div>
    </div>
</template>
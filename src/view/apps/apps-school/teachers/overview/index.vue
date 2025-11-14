<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import ImageSwiper from '../../ImageSwiper.vue';
import TestScheduleSwiper from '../../TestScheduleSwiper.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';
import ProgressTable from '../../ProgressTable.vue';
import LectureSchedule from '../../LectureSchedule.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { timeSpendInLectureChert } from '../teacher-data';
import { Atom, FlaskConical, HeartPulse, JapaneseYen, Scale, Ellipsis, Mail, Pencil, Phone } from "lucide-vue-next";

interface UserInfo {
    icon: string;
    text: string;
}

interface UserDetail {
    label: string;
    value: string;
    badge?: boolean,
}

interface UserGoal {
    title: string;
    description: string;
}

interface User {
    avatar: string;
    name: string;
    info: UserInfo[];
    phone: string;
    email: string;
    details: UserDetail[];
    address: string;
    objective: string;
    goals: UserGoal[];
}

const user: User = {
    avatar: new URL("@/assets/images/avatar/user-4.png", import.meta.url).href,
    name: "Emily Davis",
    info: [
        { icon: "ri-building-line", text: "Lecturer" },
        { icon: "ri-map-pin-line", text: "Argentina" },
        { icon: "ri-calendar-event-line", text: "12 Jul, 2024" },
    ],
    phone: "+1 712 25 1525",
    email: "michael@gmail.com",
    details: [
        { label: "Title", value: "Lecturer", badge: true },
        { label: "Gender", value: "Female" },
        { label: "Religion", value: "Islam" },
        { label: "Father Occupation", value: "Web Developer" },
        { label: "Joining Date", value: "12 Jul 2024" },
        { label: "Salary", value: "$52,000" },
        { label: "Experience", value: "9 years" },
        { label: "Email", value: "davis@example.com" },
    ],
    address: "1816 Angus Ave, Simi Valley, Argentina",
    objective:
        "As a dedicated and passionate lecturer, my objective is to create a dynamic and engaging learning environment that fosters intellectual growth and critical thinking. I aim to:",
    goals: [
        {
            title: "Deliver High-Quality Education:",
            description:
                "Provide students with comprehensive, up-to-date knowledge in my field of expertise through well-structured lectures, interactive discussions, and practical applications.",
        },
        {
            title: "Encourage Critical Thinking:",
            description:
                "Inspire students to think critically and independently, encouraging them to challenge ideas and explore diverse perspectives.",
        },
    ],
};

const lectures = ref([
    {
        id: 1,
        subject: "12 (A)",
        time: "09:00AM - 10:15AM",
        icon: FlaskConical,
        bgColor: "text-sky-500 bg-sky-500/10",
        btnColor: "btn-red",
    },
    {
        id: 2,
        subject: "11",
        time: "10:15AM - 11:30AM",
        icon: Scale,
        bgColor: "text-purple-500 bg-purple-500/10",
        btnColor: "btn-sub-gray",
    },
    {
        id: 3,
        subject: "10 (B)",
        time: "11:30AM - 12:45PM",
        icon: Atom,
        bgColor: "text-orange-500 bg-orange-500/10",
        btnColor: "btn-sub-gray",
    },
    {
        id: 4,
        subject: "11 (A)",
        time: "02:00PM - 03:15PM",
        icon: HeartPulse,
        bgColor: "text-green-500 bg-green-500/10",
        btnColor: "btn-sub-gray",
    },
    {
        id: 5,
        subject: "9 (B)",
        time: "03:15PM - 05:00PM",
        icon: JapaneseYen,
        bgColor: "text-primary-500 bg-primary-500/10",
        btnColor: "btn-sub-gray",
    },
]);

</script>
<template>
    <PageHeading title="Overview" sub-title="Teachers" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 2xl:col-span-9 xl:row-span-3">
            <div class="card">
                <div class="card-body">
                    <div class="gap-4 mb-5 md:flex">
                        <img :src="user.avatar" alt="" class="rounded-md size-32 shrink-0" />
                        <div class="mt-5 grow md:mt-0">
                            <h6 class="mb-1">{{ user.name }}</h6>
                            <div class="flex flex-wrap gap-3 mb-4 item-center">
                                <p v-for="(info, index) in user.info" :key="index" class="text-gray-500 dark:text-dark-500">
                                    <i :class="info.icon"></i>
                                    <span class="ml-1 align-bottom">{{ info.text }}</span>
                                </p>
                            </div>
                            <p class="mb-2 text-gray-500 dark:text-dark-500">
                                <Phone class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850" data-lucide="phone">
                                </Phone>
                                <span class="align-bottom">{{ user.phone }}</span>
                            </p>
                            <p class="mb-3 text-gray-500 dark:text-dark-500">
                                <Mail class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850" data-lucide="mail">
                                </Mail>
                                <span class="align-bottom">{{ user.email }}</span>
                            </p>
                        </div>
                        <div class="absolute top-0 shrink-0 ltr:right-0 rtl:left-0">
                            <a href="apps-school-teachers-list" class="btn btn-sub-gray btn-icon">
                                <Pencil class="mr-1 size-4" data-lucide="pencil"></Pencil>
                            </a>
                        </div>
                    </div>
                    <div class="my-5 space-y-5">
                        <div class="grid grid-cols-12 gap-6">
                            <div v-for="(detail, index) in user.details" :key="index" class="col-span-12 md:col-span-6 xl:col-span-3">
                                <p class="mb-1 text-gray-500 dark:text-dark-500">{{ detail.label }}</p>
                                <h6><span :class="{ 'badge badge-red': detail.badge }">{{ detail.value }}</span></h6>
                            </div>
                            <div class="col-span-12 xl:col-span-6">
                                <div class="whitespace-normal">
                                    <p class="mb-1 text-gray-500 dark:text-dark-500">Address</p>
                                    <h6>{{ user.address }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        {{ user.objective }}
                    </p>
                    <ul class="space-y-2 list-inside list-circle">
                        <li v-for="(goal, index) in user.goals" :key="index" class="text-gray-500 dark:text-dark-500">
                            <strong>{{ goal.title }}</strong> {{ goal.description }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="card-body">
                    <ImageSwiper />
                </div>
            </div>
        </div>
        <TestScheduleSwiper />
        <div class="col-span-12 md:col-span-12 xl:col-span-4 2xl:col-span-6 card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">Time Spend in Lecture</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" menuIconCss="size-4" :list="['Weekly', 'Monthly', 'Yearly']" mainCss="float-end" iconCss="size-4" />
            </div>
            <div class="card-body">
                <VueApexCharts type="bar" :series="timeSpendInLectureChert.series" :options="timeSpendInLectureChert.chartOptions" :height="260" color-classes="[bg-primary-400]" class="-ml-4 " />
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
            <div class="card-header">
                <h6 class="card-title">Create Quiz</h6>
            </div>
            <ProgressTable />
        </div>
        <LectureSchedule :listObject="lectures" />
    </div>
</template>
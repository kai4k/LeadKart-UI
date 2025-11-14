<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { Box, CalendarCheck, Mail, MapPin, Pencil, Phone } from 'lucide-vue-next';
import ImageSwiper from '../../ImageSwiper.vue';
import TestScheduleSwiper from '../../TestScheduleSwiper.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import ProgressTable from '../../ProgressTable.vue';
import LectureSchedule from '../../LectureSchedule.vue';
import { marksChart } from './overview-data';
import { Atom, FlaskConical, HeartPulse, JapaneseYen, Scale } from "lucide-vue-next";
import { ref } from 'vue';

interface Badge {
    text: string;
    class: string;
}

interface Detail {
    label: string;
    value: string;
}

interface Student {
    avatar: string;
    name: string;
    class: string;
    location: string;
    birthDate: string;
    phone: string;
    email: string;
    editLink: string;
    badges: Badge[];
    details: Detail[];
    address: string;
    objective: string;
    curriculumGoals: string[];
}

const student: Student = {
    avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url).href,
    name: "Michael Johnson",
    class: "12 (A)",
    location: "California",
    birthDate: "05 Mar, 2007",
    phone: "+1 712 25 1525",
    email: "michael@gmail.com",
    editLink: "apps-school-students-admission",
    badges: [
        { text: "Learner (5)", class: "badge badge-yellow" },
        { text: "Teacher (6)", class: "badge badge-green" },
        { text: "Skills (12)", class: "badge badge-purple" },
    ],
    details: [
        { label: "Gender", value: "Male" },
        { label: "Religion", value: "Islam" },
        { label: "Father Occupation", value: "Web Developer" },
        { label: "Admission Date", value: "15 Jun 2024" },
        { label: "Roll No", value: "8" },
        { label: "Father Name", value: "Mitchell Martin" },
        { label: "Mother Name", value: "Theresa Martin" },
        { label: "Parents Number", value: "+1 147 20 1478" },
    ],
    address: "1816 Angus Ave, Simi Valley, California",
    objective:
        "To achieve academic excellence and personal growth in Class 12 (A) by mastering the curriculum, developing critical thinking skills, and preparing for higher education and future career opportunities.",
    curriculumGoals: [
        "Thoroughly understand and excel in all subjects including Mathematics, Science (Physics, Chemistry, Biology), English, and Electives (such as Computer Science, Economics, History, etc.).",
        "Regularly complete assignments, projects, and laboratory work to apply theoretical knowledge.",
        "Engage in activities that enhance critical thinking, such as debates, discussions, and problem-solving exercises.",
        "Apply logic and reasoning to solve complex problems in subjects like Mathematics and Science.",
    ],
};

interface Profile {
    title: string;
    completion: number;
}

const profile: Profile = {
    title: "Complete Your Profile",
    completion: 67.98,
};

const lectures = ref([
    {
        id: 1,
        subject: "Chemistry",
        time: "09:00AM - 10:15AM",
        icon: FlaskConical,
        bgColor: "text-sky-500 bg-sky-500/10",
        btnColor: "btn-red",
    },
    {
        id: 2,
        subject: "Physics",
        time: "10:15AM - 11:30AM",
        icon: Scale,
        bgColor: "text-purple-500 bg-purple-500/10",
        btnColor: "btn-sub-gray",
    },
    {
        id: 3,
        subject: "English",
        time: "11:30AM - 12:45PM",
        icon: Atom,
        bgColor: "text-orange-500 bg-orange-500/10",
        btnColor: "btn-sub-gray",
    },
    {
        id: 4,
        subject: "Biology",
        time: "02:00PM - 03:15PM",
        icon: HeartPulse,
        bgColor: "text-green-500 bg-green-500/10",
        btnColor: "btn-sub-gray",
    },
    {
        id: 5,
        subject: "Mathematics",
        time: "03:15PM - 05:00PM",
        icon: JapaneseYen,
        bgColor: "text-primary-500 bg-primary-500/10",
        btnColor: "btn-sub-gray",
    },
]);


</script>
<template>
    <PageHeading title="Overview" sub-title="Students" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9 xl:row-span-3">
            <div class="card">
                <div class="card-body">
                    <div class="relative gap-4 mb-5 md:flex">
                        <img :src="student.avatar" alt="User Avatar" class="rounded-md size-36 shrink-0" />
                        <div class="mt-5 grow md:mt-0">
                            <h6 class="mb-2">{{ student.name }}</h6>
                            <div class="flex flex-wrap gap-3 mb-2 whitespace-nowrap item-center">
                                <p class="text-gray-500 dark:text-dark-500">
                                    <Box class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850">
                                    </Box>
                                    <span class="align-bottom">Class: {{ student.class }}</span>
                                </p>
                                <p class="text-gray-500 dark:text-dark-500">
                                    <MapPin class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850"></MapPin>
                                    <span class="align-bottom">{{ student.location }}</span>
                                </p>
                                <p class="text-gray-500 dark:text-dark-500">
                                    <CalendarCheck class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850">
                                    </CalendarCheck>
                                    <span class="align-bottom">{{ student.birthDate }}</span>
                                </p>
                            </div>
                            <p class="mb-2 text-gray-500 dark:text-dark-500">
                                <Phone class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850"></Phone>
                                <span class="align-bottom">{{ student.phone }}</span>
                            </p>
                            <p class="mb-3 text-gray-500 dark:text-dark-500">
                                <Mail class="inline-block mr-1 size-4 fill-gray-100 dark:fill-dark-850"></Mail>
                                <span class="align-bottom">{{ student.email }}</span>
                            </p>
                            <div class="flex flex-wrap gap-2 item-center">
                                <span v-for="badge in student.badges" :key="badge.text" :class="badge.class">{{
                                    badge.text }}</span>
                            </div>
                        </div>
                        <div class="absolute top-0 shrink-0 ltr:right-0 rtl:left-0">
                            <a :href="student.editLink" class="btn btn-sub-gray btn-icon">
                                <Pencil class="size-4"></Pencil>
                            </a>
                        </div>
                    </div>
                    <div class="my-5">
                        <div class="grid grid-cols-12 gap-space">
                            <div v-for="(info, index) in student.details" :key="index" class="col-span-12 sm:col-span-6 md:col-span-3">
                                <p class="mb-1 text-gray-500 dark:text-dark-500">{{ info.label }}</p>
                                <h6>{{ info.value }}</h6>
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <div class="whitespace-normal">
                                    <p class="mb-1 text-gray-500 dark:text-dark-500">Address</p>
                                    <h6>{{ student.address }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mb-4 text-gray-500 dark:text-dark-500">{{ student.objective }}</p>
                    <h6 class="mb-3">Curriculum Mastery</h6>
                    <ul class="space-y-2 list-inside list-circle">
                        <li v-for="(goal, index) in student.curriculumGoals" :key="index" class="text-gray-500 dark:text-dark-500">
                            {{ goal }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="flex items-center gap-4 card-body">
                    <div class="grow">
                        <div class="flex items-center gap-3 mb-2.5">
                            <h6 class="grow">{{ profile.title }}</h6>
                            <h6 class="text-xs font-semibold text-red-500">{{ profile.completion }}%</h6>
                        </div>
                        <div class="bg-green-100 progress-bar progress-1">
                            <div :style="{ width: profile.completion + '%' }" class="text-white bg-green-500 progress-bar-wrap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="card-body">
                    <ImageSwiper />
                </div>
            </div>
        </div>
        <TestScheduleSwiper />
        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Test Marks (Subject)</h6>
            </div>
            <div class="card-body">
                <Apexchart :options="marksChart.chartOptions" :series="marksChart.series" :height="260" class="!min-h-full -ml-4" />
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
            <div class="card-header">
                <h6 class="card-title">Pending Quiz</h6>
            </div>
            <ProgressTable />
        </div>
        <LectureSchedule :listObject="lectures"/>
    </div>
</template>
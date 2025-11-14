<script setup lang="ts">
import { ref, onMounted } from 'vue';
import simplebar from 'simplebar-vue';
import PageHeading from '@/components/common/PageHeading.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import {
  transactionCard,
  cards,
  teamMembers,
  dashboardStats,
  analyticsStats,
  profileList,
  internDoctors,
  patients
} from './cards-data';
import {
  Dot,
  Ellipsis,
  MessageCircleMore,
  MoveLeft,
  MoveRight,
  Phone
} from 'lucide-vue-next';

const animatedCounters = ref(transactionCard.map(() => 0));
const animateCounters = (arr: any) => {
  arr.forEach((card: any, index: number) => {
    const step = card.value / 50; // Divide into 50 steps for smooth animation
    let current = 0;

    const interval = setInterval(() => {
      current += step;
      if (current >= card.value) {
        animatedCounters.value[index] = Math.round(card.value);
        clearInterval(interval);
      } else {
        animatedCounters.value[index] = Math.round(current);
      }
    }, 10); // Update every 10ms
  });
};

interface Schedule {
  date: number;
  month: string;
  year: number;
  workingTime: string;
  totalPatients: number;
}

const schedule: Schedule = {
  date: 14,
  month: "June",
  year: 2024,
  workingTime: "10:30 AM - 9:30 PM",
  totalPatients: 10,
};

interface Doctor {
  name: string;
  specialization: string;
  image: string;
}

const doctor: Doctor = {
  name: "Dr. Jose Miller",
  specialization: "Neurologist",
  image: new URL("@/assets/images/avatar/user-39.png", import.meta.url).href,
};

const moreDoctors = 14;
onMounted(() => {
  animateCounters(transactionCard)
});
</script>
<template>
  <PageHeading title="Cards" sub-title="Widgets" />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-space">
    <div v-for="(card, index) in transactionCard" :key="index" :class="`relative overflow-hidden group/item before:transition-all before:duration-500 before:ease-in-out card before:absolute before:h-0.5 before:w-full before:bottom-0 before:bg-${card.color}-500 hover:before:h-full hover:before:top-0`">
      <div class="relative p-6 text-center">
        <span :class="`transition-all duration-500 ease-linear badge badge-solid-${card.color} group-hover/item:bg-${card.color}-600 group-hover/item:border-${card.color}-600`">
          {{ card.title }}
        </span>

        <div class="mt-10 mb-8">
          <h3 :class="`transition-all duration-500 ease-linear group-hover/item:text-white`">
            <span>{{ card.prefix }}</span>
            <span>{{ animatedCounters[index] }}</span>
            <span>{{ card.suffix }}</span>
          </h3>
        </div>
        <a href="#!" :class="`inline-block px-3 py-1.5 text-sm border rounded-full link link-red transition-all duration-500 ease-linear border-gray-200 dark:border-dark-800 group-hover/item:text-${card.color}-100 group-hover/item:!border-${card.color}-400/50 dark:group-hover/item:!border-${card.color}-400/50`">
          View All
          <MoveRight class="ltr:inline-block rtl:hidden size-4" />
          <MoveLeft class="rtl:inline-block ltr:hidden size-4" />
        </a>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-space">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <div class="card-body">
        <div class="flex items-center gap-3 p-3 mb-4 bg-gray-100 rounded-md dark:bg-dark-850">
          <div class="flex items-center justify-center text-xs rounded-md size-10">
            <component :is="card.icon" :class="`fill-primary-500/10 text-primary-500 `"></component>
          </div>
          <h6>{{ card.title }}</h6>
        </div>
        <div class="grid grid-cols-2 gap-0 text-center divide-x divide-gray-200 dark:divide-dark-800 rtl:divide-x-reverse">
          <div>
            <h5>{{ card.pending }}</h5>
            <p class="text-gray-500 dark:text-dark-500">Pending</p>
          </div>
          <div>
            <h5>{{ card.success }}</h5>
            <p class="text-gray-500 dark:text-dark-500">Successfully</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-space">
    <div v-for="(member, index) in teamMembers" :key="index" class="card">
      <div class="card-body">
        <div class="flex flex-wrap items-center gap-2">
          <img :src="member.avatar" :alt="member.name" class="rounded-md size-10 shrink-0" />
          <div class="grow">
            <h6 class="mb-1">{{ member.name }}</h6>
            <p class="text-sm text-gray-500 dark:text-dark-500">{{ member.role }}</p>
          </div>
          <h6 class="grow">${{ member.amount }}</h6>
          <div class="grow">
            <span :class="`badge ${member.statusClass}`">
              {{ member.status }}
            </span>
          </div>
          <!-- <TopMenuButton buttonCss="rotate-90 w-4 h-4 mb-1" iconCss="size-5" /> -->
          <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :list="['Overview', 'Edit', 'Delete']" mainCss="" iconCss="size-5" menuIconCss="size-4" />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-space">
    <div v-for="(stat, index) in dashboardStats" :key="index" :class="`card ${stat.cardClass}`">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="grow">
            <p :class="stat.textClass">{{ stat.label }}</p>
            <h6 :class="stat.valueClass">{{ stat.value }}</h6>
          </div>
          <div :class="`flex items-center justify-center text-xs ${stat.iconBgClass} border-2 ${stat.iconBorderClass} rounded-full shrink-0 size-12 outline-1 outline-dashed ${stat.iconOutlineClass}`">
            <component :is="stat.icon" :class="stat.iconClass"></component>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-space">
    <div v-for="(stat, index) in analyticsStats" :key="index" class="card">
      <div class="flex items-center gap-3 card-header">
        <h6 class="card-title grow">{{ stat.title }}</h6>
        <a href="#!" class="badge" :class="stat.badgeCssClass">
          <Dot class="inline-block size-4"></Dot> {{ stat.period }}
        </a>
      </div>
      <div class="card-body">
        <p class="mb-2 text-sm text-gray-500 dark:text-dark-500">{{ stat.subtitle }}</p>
        <div class="flex items-center gap-2">
          <h5>{{ stat.value }}</h5>
          <component :is="stat.trendIcon" :class="stat.trendClass + ' size-5'"></component>
          <span>{{ stat.trendDescription }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-space">
    <div v-for="(member, index) in profileList" :key="index" class="text-center card">
      <div class="card-body">
        <img :src="member.avatar" :alt="member.name" class="mx-auto rounded-md size-14">
        <h6 class="mt-4">
          <a href="#!" class="!text-current dark:text-current link hover:text-primary-500 dark:hover:text-primary-500">
            {{ member.name }}
          </a>
        </h6>
        <p class="text-sm text-gray-500 dark:text-dark-500">{{ member.role }}</p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-x-space">
    <div class="col-span-12 row-span-2 md:col-span-6 xl:col-span-4 card">
      <div class="flex items-center card-header">
        <h6 class="card-title grow">My Schedule</h6>
        <div class="shrink-0">
          <div class="inline-flex gap-3 text-sm">
            <a href="#!" class="relative inline-block text-gray-500 dark:text-dark-500 transition duration-200 ease-linear grow hover:text-purple-500 dark:hover:text-purple-500 after:size-1 after:absolute after:transition-all after:duration-200 after:opacity-0 after:-bottom-3 hover:after:-bottom-1.5 hover:after:opacity-100 after:mx-auto after:rounded-full after:inset-x-0 after:bg-purple-500 [&.active]:after:-bottom-1.5 [&.active]:after:opacity-100 [&.active]:!text-purple-500 active">
              Day
            </a>
            <a href="#!" class="relative inline-block text-gray-500 dark:text-dark-500 transition duration-200 ease-linear grow hover:text-purple-500 dark:hover:text-purple-500 after:size-1 after:absolute after:transition-all after:duration-200 after:opacity-0 after:-bottom-3 hover:after:-bottom-1.5 hover:after:opacity-100 after:mx-auto after:rounded-full after:inset-x-0 after:bg-purple-500 [&.active]:after:-bottom-1.5 [&.active]:after:opacity-100 [&.active]:!text-purple-500">
              Week
            </a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-5">
            <div class="p-5 text-center bg-gray-100 rounded-md dark:bg-dark-850">
              <div class="flex items-center justify-center mx-auto mb-4 font-medium bg-white rounded-full dark:bg-dark-900 size-12">
                {{ schedule.date }}
              </div>
              <h6>{{ schedule.month }}, {{ schedule.year }}</h6>
            </div>
          </div>
          <div class="col-span-7">
            <p class="mb-1 text-gray-500 dark:text-dark-500">Working Time</p>
            <h6 class="mb-7">{{ schedule.workingTime }}</h6>

            <p class="mb-1 text-gray-500 dark:text-dark-500">Total Patient:</p>
            <h6>{{ schedule.totalPatients }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
      <div class="card-body">
        <p class="mb-2 text-gray-500 dark:text-dark-500">Doctor In Charge</p>
        <div class="flex items-center gap-2">
          <img :src="doctor.image" alt="" class="rounded-full size-9" />
          <div class="grow">
            <h6>{{ doctor.name }}</h6>
            <p class="text-xs text-gray-500 dark:text-dark-500">{{ doctor.specialization }}</p>
          </div>
          <a href="#!" class="inline-block text-red-500">
            <MessageCircleMore class="fill-red-500/10"/>
          </a>
        </div>
      </div>
    </div>
    <div class="col-span-12 row-span-2 md:col-span-6 xl:col-span-4 card">
      <div class="flex items-center card-header">
        <h6 class="card-title grow">Today Patients</h6>
        <div class="shrink-0">
          <div class="inline-flex gap-3 text-sm">
            <a href="#!" class="relative inline-block text-gray-500 dark:text-dark-500 transition duration-200 ease-linear grow hover:text-purple-500 dark:hover:text-purple-500 after:size-1 after:absolute after:transition-all after:duration-200 after:opacity-0 after:-bottom-3 hover:after:-bottom-1.5 hover:after:opacity-100 after:mx-auto after:rounded-full after:inset-x-0 after:bg-purple-500 [&.active]:after:-bottom-1.5 [&.active]:after:opacity-100 [&.active]:!text-purple-500 active">Day</a>
            <a href="#!" class="relative inline-block text-gray-500 dark:text-dark-500 transition duration-200 ease-linear grow hover:text-purple-500 dark:hover:text-purple-500 after:size-1 after:absolute after:transition-all after:duration-200 after:opacity-0 after:-bottom-3 hover:after:-bottom-1.5 hover:after:opacity-100 after:mx-auto after:rounded-full after:inset-x-0 after:bg-purple-500 [&.active]:after:-bottom-1.5 [&.active]:after:opacity-100 [&.active]:!text-purple-500">Week</a>
          </div>
        </div>
      </div>
      <simplebar data-simplebar class="h-36 card-body">
        <div class="space-y-3">
          <div v-for="(patient, index) in patients" :key="index" class="flex items-center gap-3">
            <img :src="patient.image" alt="" class="rounded-md size-10 shrink-0" />
            <div class="grow">
              <h6>{{ patient.name }}</h6>
              <p class="text-sm text-gray-500 dark:text-dark-500">{{ patient.time }}</p>
            </div>
            <button class="btn btn-outline-green btn-icon">
              <Phone class="size-5"/>
            </button>
          </div>
        </div>
      </simplebar>
    </div>
    <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
      <div class="card-body">
        <h6 class="mb-2">Interns Doctors</h6>
        <div class="flex -space-x-2 rtl:space-x-reverse grow">
          <a v-for="(doctor, index) in internDoctors" :key="index" href="#!" class="transition duration-300 ease-linear hover:z-10">
            <img :src="doctor.image" alt="" class="border-2 border-white rounded-full dark:border-dark-900 size-7" />
          </a>
          <a v-if="moreDoctors > 0" href="#!" class="transition duration-300 ease-linear hover:z-10">
            <div class="flex items-center justify-center text-white border-2 border-white rounded-full dark:border-dark-900 text-11 bg-primary-500 size-7">
              +{{ moreDoctors }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
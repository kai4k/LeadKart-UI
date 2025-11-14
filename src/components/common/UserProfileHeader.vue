<script setup lang="ts">
import { BadgeCheck, Building2, CalendarDays, MapPin } from 'lucide-vue-next';
import { userProfileDetails } from '@/store/defaultDetails';
import { formatDate } from '../../utils/reusable-functions';
</script>
<template>
    <div class="relative mb-6">
        <div class="relative overflow-hidden rounded-md h-44 bg-primary-500/10">
            <div
                class="border-[60px] border-t-primary-500 border-l-primary-500 absolute opacity-10 -top-2 left-0 rotate-45 size-96">
            </div>
            <div class="border-[60px] border-green-500 absolute opacity-10 top-20 left-8 rotate-45 size-80"></div>
            <div class="border-[60px] border-pink-500 absolute opacity-10 top-36 left-28 rotate-45 size-40"></div>
        </div>
        <div class="text-center">
            <div class="relative inline-block mx-auto">
                <div
                    class="relative p-1 rounded-full bg-gradient-to-tr from-primary-300 via-red-300 to-green-300 -mt-14">
                    <img :src="userProfileDetails.img" alt=""
                        class="mx-auto border-4 border-white rounded-full dark:border-dark-900 size-28" />
                </div>
                <div
                    class="absolute border-2 border-white dark:border-dark-900 rounded-full size-4 bg-green-500 bottom-2.5 ltr:right-2.5 rtl:left-2.5">
                </div>
            </div>
            <h5 class="mt-2 mb-1">{{ userProfileDetails.name }} <BadgeCheck data-lucide="badge-check"
                    class="inline-block text-primary-500 fill-primary-500/20 size-5"></BadgeCheck>
            </h5>
            <ul class="flex flex-wrap items-center justify-center gap-2 text-gray-500 dark:text-dark-500 text-14">
                <li>
                    <Building2 data-lucide="building-2" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Building2> <span
                        class="align-middle">{{ userProfileDetails.designation }}</span>
                </li>
                <li>
                    <MapPin data-lucide="map-pin" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></MapPin> <span
                        class="align-middle">{{ userProfileDetails.location }}</span>
                </li>
                <li>
                    <CalendarDays data-lucide="calendar-days" class="inline-block ltr:mr-1 rtl:ml-1 size-4">
                    </CalendarDays> <span class="align-middle">{{ formatDate(userProfileDetails.DOJ) }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
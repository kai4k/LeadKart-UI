<script setup lang="ts">
import { ref } from 'vue';
import { userProfileDetails } from '@/store/defaultDetails';
import { formatDate } from '@/utils/reusable-functions';
import {
    BriefcaseBusiness,
    Cake,
    Globe,
    Mail,
    MapPin,
    Monitor,
    Phone,
    Twitter,
} from 'lucide-vue-next';

</script>
<template>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Introductions</h6>
        </div>
        <div class="card-body">
            <p class="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-dark-500">About</p>
            <div class="space-y-3">
                <h6 class="font-medium">
                    <Monitor class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <span class="align-middle whitespace-nowrap">{{ userProfileDetails.name }} </span>
                </h6>
                <h6 class="font-medium">
                    <BriefcaseBusiness class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <span class="align-middle whitespace-nowrap">{{ userProfileDetails.designation }}</span>
                </h6>
                <h6 class="font-medium">
                    <MapPin class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <span class="align-middle whitespace-nowrap"> {{ userProfileDetails.location }}</span>
                </h6>
                <h6 class="font-medium">
                    <Cake class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <span class="align-middle whitespace-nowrap"> {{ formatDate(userProfileDetails.DOB) }}</span>
                </h6>
            </div>

            <div class="pt-4 mt-4 space-y-3 border-t border-gray-200 dark:border-dark-800">
                <h6 class="font-medium">
                    <Globe class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <router-link :to="userProfileDetails.website" class="align-middle whitespace-nowrap">{{
                        userProfileDetails.website
                    }}</router-link>
                </h6>
                <h6 class="font-medium">
                    <Mail class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <a :href="'mailto:' + userProfileDetails.email" class="align-middle whitespace-nowrap"> {{
                        userProfileDetails.email
                        }}</a>
                </h6>
                <h6 class="font-medium">
                    <Phone class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <a :href="'tel:' + userProfileDetails.phoneNumber" class="align-middle whitespace-nowrap"> {{
                        userProfileDetails.phoneNumber }}</a>
                </h6>
                <h6 class="font-medium">
                    <Twitter class="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" /> <span class="align-middle whitespace-nowrap">{{ userProfileDetails.twitter }}</span>
                </h6>
            </div>

            <p class="pt-4 mt-4 mb-3 space-y-3 text-sm font-medium text-gray-500 uppercase border-t border-gray-200 dark:border-dark-800 dark:text-dark-500">
                Fluent In
            </p>
            <div class="flex items-center gap-2">
                <span v-for="(language, index) in userProfileDetails.languages" :key="index" class="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 dark:text-dark-500 badge">
                    {{ language }}
                </span>
            </div>
        </div>
    </div>
</template>
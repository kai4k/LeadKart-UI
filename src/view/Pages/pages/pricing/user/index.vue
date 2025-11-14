<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ArrowDownFromLine, Droplet, Fan, Gem, Pyramid, Redo2, Zap } from 'lucide-vue-next';
import { ref } from 'vue';
// Define plans array directly in the setup
const plans = [
    {
        title: "Basic Plan",
        price: 29.99,
        description: "Forever",
        icon: Fan,
        iconClass: 'fill-sky-500/20 text-sky-500',
        bgClass: "bg-sky-500/20", // Background color class
        features: [
            "1 Products & Projects",
            "Custom Permissions",
            "Some Basic Integration",
            "Up to 5 Team Members",
            "24/7 Support",
        ],
        popular: false,
    },
    {
        title: "Professional Plan",
        price: 49.99,
        description: "Saving $24.99 a year",
        icon: Pyramid,
        iconClass: 'fill-green-500/20 text-green-500',
        bgClass: "bg-green-500/20",
        features: [
            "10 Products & Projects",
            "Custom Permissions",
            "Some Basic Integration",
            "Up to 10 Team Members",
            "Advanced Security",
            "24/7 Support",
        ],
        popular: true,
    },
    {
        title: "Enterprise Plan",
        price: 59.99,
        description: "Saving $24.99 a year",
        icon: Zap,
        iconClass: 'fill-red-500/20 text-red-500',
        bgClass: "bg-red-500/20",
        features: [
            "30 Products & Projects",
            "Custom Permissions",
            "Some Basic Integration",
            "Up to 50 Team Members",
            "Advanced Security",
            "Permissions & Workflows",
            "24/7 Support",
        ],
        popular: false,
    },
];

// Define the addOns array with the data
const addOns = ref([
    {
        title: 'Comodo Media Downloader',
        price: '$3.99',
        description: 'Comodo Media Downloader Service',
        icon: ArrowDownFromLine,
        iconClass: "text-yellow-500 fill-yellow-500/20",
        iconBgClass: 'bg-gradient-to-b from-yellow-500/20',
        checked: false, // for checkbox state
    },
    {
        title: 'Https Enforcement',
        price: '$6.99',
        description: 'Automatic Security',
        icon: Droplet,
        iconClass: "text-purple-500 fill-purple-500/20",
        iconBgClass: 'bg-gradient-to-r from-purple-500/20 ',
        checked: false,
    },
    {
        title: 'Online Security Pro',
        price: '$6.99',
        description: 'Online Security Pro protects you against malware, phishing and malicious websites.',
        icon: Gem,
        iconClass: "text-red-500 fill-red-500/20",
        iconBgClass: 'bg-gradient-to-bl from-red-500/20',
        checked: false,
    },
]);
</script>
<template>
    <PageHeading sub-title="Pages" title="Pricing" />
    <h6 class="mb-5 underline">Step 1:</h6>
    <div class="grid grid-cols-12 gap-x-5">
        <div class="col-span-12 xl:col-span-10 xl:col-start-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5">
                <!-- Loop through the plans -->
                <div v-for="(plan, index) in plans" :key="index">
                    <div class="relative card">
                        <div class="card-body">
                            <div v-if="plan.popular" class="absolute badge badge-sub-pink ltr:right-5 rtl:left-5 top-5">
                                Popular</div>
                            <div class="relative">
                                <div :class="plan.bgClass" class="absolute top-0 z-0 size-11 blur-md"></div>
                                <component :is="plan.icon" :class="plan.iconClass" class="relative stroke-1 size-10 ">
                                </component>
                            </div>
                            <h6 class="mt-5">{{ plan.title }}</h6>
                            <p class="mb-3 text-sm text-gray-500 dark:text-dark-500">{{ plan.description }}</p>
                            <h2 class="font-semibold">${{ plan.price }}</h2>
                            <div class="pt-5 my-5 border-t border-gray-200 dark:border-dark-800">
                                <ul class="space-y-3 *:flex *:items-center *:gap-2">
                                    <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
                                        <Redo2 class="inline-block text-green-500 size-4"></Redo2> {{
                                            feature }}
                                    </li>
                                </ul>
                            </div>
                            <button data-modal-target="confirmModal" class="w-full btn btn-primary">Choose Plan</button>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end grid-->
        </div>
        <!--end col-->
    </div>
    <h6 class="mt-2 mb-5 underline">Step 2:</h6>
    <div class="grid grid-cols-12 gap-x-5">
        <!-- Loop through add-ons -->
        <div v-for="(addOn, index) in addOns" :key="index" class="col-span-12 sm:col-span-6 lg:col-span-4 card">
            <div class="card-body">
                <div class="flex items-start">
                    <!-- Icon -->
                    <div :class="addOn.iconBgClass"
                        class="flex items-center justify-center ltr:mr-auto rtl:ml-auto size-16 rounded-modern">
                        <component :is="addOn.icon" :class="addOn.iconClass" class="relative stroke-1 size-10">
                        </component>
                    </div>

                    <!-- Switch -->
                    <label :for="'addOns' + index" class="switch-group switch-soft shrink-0">
                        <div class="relative">
                            <input type="checkbox" :id="'addOns' + index" class="hidden sr-only peer"
                                v-model="addOn.checked" />
                            <div class="switch-wrapper peer-checked:!bg-green-500/15"></div>
                            <div
                                class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:!bg-green-500">
                            </div>
                        </div>
                    </label>
                </div>

                <div class="flex items-center mt-4">
                    <h6 class="grow">{{ addOn.title }}</h6>
                    <h6>{{ addOn.price }}/month</h6>
                </div>
                <p class="text-gray-500 truncate dark:text-dark-500">{{ addOn.description }}</p>
            </div>
        </div>
    </div>
</template>
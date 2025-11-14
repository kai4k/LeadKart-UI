<script setup lang="ts">
import { ref } from 'vue';
import { tabs } from '../user-personal-details';
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import CreditCardComponent from './CreditCardComponent.vue';
import BillingTableHistory from './BillingTableHistory.vue';
import UpdateBillingInfo from './UpdateBillingInfo.vue';
import { ArrowUpLeft, ArrowUpRight, Pencil } from 'lucide-vue-next';

// Define the billing information
const billingInfo = ref({
    name: 'Sophia Mia',
    address: '3011 E Semoran Blvd, Apopka, Florida,',
    city: 'United States',
    phone: '+(407) 774-3111',
    zipcode: 32703,
});

const showBillInfoModule = ref(false);
const setBillInfoValue = (stats: boolean, data?: any) => {
    showBillInfoModule.value = stats
    if (data) {
        billingInfo.value = { ...billingInfo.value, ...data };
    }
}

</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="billingAndPlans" />
    <div class="mt-4 card">
        <div class="card-header">
            <h6 class="mb-1 card-title">Billing Settings</h6>
            <p class="text-gray-500 dark:text-dark-500">Take control of your billing and plan details here.</p>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <!-- Current Plan Section -->
                <div>
                    <h6 class="mb-3">Current Plan:</h6>
                    <div class="mb-0 card">
                        <div class="card-body">
                            <div class="flex items-center">
                                <div class="grow">
                                    <h6 class="mb-2">
                                        Basic Plan
                                        <span class="align-middle ltr:ml-1 rtl:mr-1 whitespace-nowrap badge badge-red">
                                            Monthly
                                        </span>
                                    </h6>
                                    <p class="text-gray-500 dark:text-dark-500">Our most sought-after plan tailored for
                                        small teams.</p>
                                </div>
                                <h3>$20 <small class="text-sm font-normal text-gray-500 dark:text-dark-500">Per
                                        month</small></h3>
                            </div>

                            <div class="mt-4">
                                <div class="flex items-center gap-3 mb-2">
                                    <h6 class="text-xs grow">16 of 30 Users</h6>
                                    <h6 class="text-xs font-semibold text-sky-500">55.47%</h6>
                                </div>
                                <div class="progress-bar progress-1">
                                    <div class="w-1/2 text-white progress-bar-wrap bg-primary-500"></div>
                                </div>
                            </div>
                            <div class="mt-5 text-right">
                                <a href="pages-pricing" class="btn btn-primary">
                                    <span class="align-middle whitespace-nowrap ">Upgrade Plan</span> <ArrowUpRight class="ltr:inline-block rtl:hidden size-4" />   <ArrowUpLeft class="ltr:hidden rtl:inline-block size-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Billing Information Section -->
                <div>
                    <h6 class="mb-3">Billing Information:</h6>
                    <div class="mb-0 card">
                        <div class="card-body">
                            <div class="flex items-center">
                                <div class="grow">
                                    <h6 class="mb-2">{{ billingInfo.name }}</h6>
                                    <p class="mb-1 text-gray-500 dark:text-dark-500">{{ billingInfo.address }}</p>
                                    <p class="mb-1 text-gray-500 dark:text-dark-500">{{ billingInfo.city }} - {{
                                        billingInfo.zipcode }}</p>
                                    <p class="text-gray-500 dark:text-dark-500">{{ billingInfo.phone }}</p>
                                </div>
                            </div>
                            <div class="mt-5 ltr:text-right rtl:text-left">
                                <button data-modal-target="billingEditModal" type="button" class="btn btn-sub-gray" @click="setBillInfoValue(true)">
                                    <Pencil class="inline-block ltr:mr-1 rtl:ml-1 size-4" /> <span class="align-middle whitespace-nowrap">Edit Billing</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div>
    </div>
    <CreditCardComponent />
    <BillingTableHistory />

    <UpdateBillingInfo :show-module="showBillInfoModule" :set-module-value="setBillInfoValue" :module-data="billingInfo" />

</template>
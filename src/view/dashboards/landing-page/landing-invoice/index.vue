<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import InvoiceHeader from './InvoiceHeader.vue';
import HeroPage from './HeroPage.vue';
import FeatureCard from './FeatureCard.vue';
import { CalendarFold, MoveLeft, MoveRight } from 'lucide-vue-next';
import PricingCard from './PricingCard.vue';
import { pricingPlans, featureDetails } from './invoice-data'
import Footer from './InvoiceFooter.vue';
import ThemeButton from '../landing-ecommerce/ThemeButton.vue';

interface Field {
    id: string;
    label: string;
    type: string;
    value: string;
}

const fields = ref<Field[]>([
    { id: 'fullNameInput', label: 'Your Full Name', type: 'text', value: '' },
    { id: 'emailInput', label: 'Your Email Address', type: 'email', value: '' },
    { id: 'interestedInput', label: 'What you are Interested', type: 'text', value: '' },
    { id: 'projectBudgetInput', label: 'Project Budget', type: 'text', value: '' },
]);

const message = ref('');

const handleSubmit = () => {
    // Handle form submission logic here
};

const bodyClasses = ['dark:text-white', 'text-16', 'font-body', 'dark:bg-body-invoice'];

onMounted(() => {
    document.body.classList.add(...bodyClasses);
});

onUnmounted(() => {
    document.body.classList.remove(...bodyClasses);
});
</script>
<template>
    <InvoiceHeader />
    <HeroPage />
    <!-- Modern Invoicing Section -->
    <section class="relative lg:py-20" id="About">
        <div class="container mx-auto px-4 max-w-[1350px]">
            <div class="grid items-center grid-cols-12 mb-10">
                <div class="col-span-12 text-center md:col-span-8 md:col-start-3">
                    <h2 class="mb-2 text-3xl capitalize md:leading-normal md:text-4xl">Modern <span class="font-bold text-purple-500">Invoicing</span> for small businesses & Freelancers</h2>
                    <p class="text-gray-500">All the company's terms and conditions, including due dates and penalties
                        for non-payment or partial payments, must be clearly included in the invoice.</p>
                </div><!--end col-->
            </div>
            <div class="grid grid-cols-12 gap-space">
                <template v-for="(feature, index) in featureDetails" :key="index">

                    <FeatureCard :data="feature" />
                </template>
            </div>
        </div>
    </section>
    <!-- online invoicing Section -->
    <section class="relative py-20" id="case">
        <div class="container mx-auto px-4 max-w-[1350px]">
            <div class="grid items-center grid-cols-12">
                <div class="col-span-12 lg:col-span-5">
                    <h2 class="mb-2 text-2xl leading-normal capitalize sm:text-3xl md:text-4xl">Get paid quickly and
                        easily
                        with Domiex's online invoicing software and system.</h2>
                    <p class="mb-5 text-gray-500">Invoicing software generates billing for services and products. It
                        streamlines the process for getting paid, giving your business an accurate picture of its
                        finances,
                        ensuring liquidity.</p>
                    <a href="apps-invoice-overview-1" class="btn btn-purple">
                        View Invoice
                        <MoveRight class="ml-1 size-4 ltr:inline-block rtl:hidden" />
                        <MoveLeft class="mr-1 rtl:inline-block size-4 ltr:hidden" />
                    </a>
                </div>
                <div class="col-span-12 mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0">
                    <div class="relative">
                        <svg viewBox="0 0 402 397" class="absolute right-0 -bottom-24 2xl:-right-24 size-64">
                            <g id="&lt;Group&gt;">
                                <g id="&lt;Group&gt;">
                                    <g id="&lt;Group&gt;">
                                        <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="fill-gray-100/50 dark:fill-muted-invoice/10" d="m28.9 275.3c-42.1-96.6 2.3-209.3 98.8-251.4 96.6-42.1 209.3 2.3 251.4 98.8 42 96.6-2.3 209.3-98.8 251.4-96.6 42-209.3-2.3-251.4-98.8zm346.5-151c-41.2-94.5-151.6-137.9-246.1-96.7-94.5 41.1-137.9 151.5-96.7 246.1 41.1 94.5 151.5 137.9 246.1 96.7 94.5-41.2 137.9-151.6 96.7-246.1z" />
                                    </g>
                                </g>
                                <g id="&lt;Group&gt;">
                                    <g id="&lt;Group&gt;">
                                        <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="fill-gray-100/50 dark:fill-muted-invoice/10" d="m57.3 262.7c-33.3-76.4-1.4-166.6 72.5-205.4 78.1-40.9 174.9-10.6 215.8 67.5 1.8 3.4 3.5 6.9 5.1 10.5 33.2 76.4 1.4 166.6-72.5 205.3-37.9 19.8-81.1 23.7-121.9 11-40.8-12.7-74.1-40.6-94-78.4-1.7-3.4-3.4-7-5-10.5zm289.7-125.8c-1.5-3.5-3.2-6.9-4.9-10.2-39.9-76.2-134.3-105.7-210.4-65.8-72.1 37.7-103.2 125.7-70.7 200.2 1.5 3.4 3.1 6.9 4.9 10.2 19.3 36.9 51.8 64.1 91.6 76.5 39.7 12.4 81.9 8.6 118.8-10.7 72.1-37.8 103.1-125.7 70.7-200.2z" />
                                    </g>
                                </g>
                                <g id="&lt;Group&gt;">
                                    <g id="&lt;Group&gt;">
                                        <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="fill-gray-100/50 dark:fill-muted-invoice/10" d="m84.7 250.8c-25.1-57.7-5.3-125 47.1-160 59.7-39.7 140.5-23.6 180.3 36 4.3 6.5 8.1 13.3 11.2 20.4 25.1 57.7 5.3 125-47.2 159.9-59.6 39.8-140.5 23.7-180.3-36-4.3-6.4-8-13.3-11.1-20.3zm234.9-102c-3-6.8-6.6-13.5-10.8-19.7-38.6-57.8-116.9-73.5-174.7-34.9-50.9 33.9-70.1 99.1-45.7 155 3 6.8 6.6 13.5 10.8 19.7 38.5 57.8 116.9 73.5 174.7 34.9 50.8-33.9 70-99.1 45.7-155z" />
                                    </g>
                                </g>
                                <g id="&lt;Group&gt;">
                                    <g id="&lt;Group&gt;">
                                        <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="fill-gray-100/50 dark:fill-muted-invoice/10" d="m110.1 239.9c-17.2-39.5-7.7-85.9 23.7-115.5 19.9-18.7 45.9-28.6 73.3-27.8 27.3 0.9 52.7 12.3 71.4 32.2 8.2 8.6 14.7 18.5 19.4 29.3 17.2 39.5 7.7 85.9-23.7 115.4-41.1 38.7-106.1 36.8-144.8-4.3-8.1-8.7-14.6-18.5-19.3-29.3zm184.1-80.2c-4.5-10.4-10.8-19.9-18.6-28.2-18-19.1-42.4-30.1-68.7-30.9-26.2-0.8-51.2 8.7-70.4 26.8-30.1 28.4-39.3 72.9-22.7 110.9 4.5 10.4 10.7 19.8 18.6 28.1 37.1 39.5 99.5 41.4 139 4.2 30.2-28.4 39.4-73 22.8-110.9z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <img src="@/assets/images/invoice/img-01.jpg" alt="" class="rounded-md shadow-lg shadow-gray-200 thumbnail">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="relative  py-12 md:py-24 bg-[url('../images/invoice/cta.jpg')]">
        <div class="container mx-auto px-4 max-w-[1350px]">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="absolute inset-0 uppercase text-7xl top-24 text-gray-100/5">Invoice Demo</h2>
                <div class="relative">
                    <h2 class="mb-2 leading-normal text-white capitalize xl:mt-10">Ready to give it a try?
                    </h2>
                    <p class="mb-5 text-slate-200/50">A standard invoice typically includes a header with the
                        business
                        name and contact details, a list of products or services provided with their prices, and the
                        total amount due. </p>
                    <div class="!space-x-2 !space-y-2">
                        <button type="button" class="btn btn-purple">Try for free</button>
                        <button type="button" class="font-medium bg-white hover:bg-gray-100 dark:text-gray-900 btn">
                            <CalendarFold data-lucide="calendar-fold" class="inline-block size-4 ltr:mr-1 rtl:ml-1" />
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Pricing Plan Section -->
    <section class="relative pt-12 md:py-20" id="community">
        <svg viewBox="0 0 156 54" width="156" height="54" class="hidden md:absolute ltr:-rotate-45 rtl:rotate-45 top-56 ltr:left-48 rtl:right-48">
            <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="fill-yellow-300" d="m36.7 49.8l-24.8-29.7 6.1-5.2 18.7 22.5 21.9-26.1 21.8 26.1 21.8-26.1 21.8 26.1 18.8-22.5 6.1 5.2-24.9 29.7-21.8-26.1-21.8 26.1-21.8-26.1z" />
            </g>
        </svg>
        <div class="container mx-auto px-4 max-w-[1350px]">
            <div class="max-w-[800px] mx-auto pb-10 text-center">
                <h2 class="mb-2 text-2xl leading-normal capitalize sm:text-3xl md:text-4xl">Ready to <span class="text-purple-500">get Started</span></h2>
                <p class="text-gray-500">The business name and address of the customer you're invoicing. a
                    clear
                    description of what you're charging for.</p>
            </div>
            <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <PricingCard v-for="(plan, index) in pricingPlans" :key="index" :icon="plan.icon" :title="plan.title" :description="plan.description" :price="plan.price" :buttonText="plan.buttonText" :buttonStyle="plan.buttonStyle" :features="plan.features" :highlight="plan.highlight" />
            </div>
        </div>
    </section>
    <!-- Inquiry Section -->
    <section class="relative py-12 md:py-20" id="contact-us">
        <div class="container mx-auto px-4 max-w-[1350px]">
            <div class="grid items-center grid-cols-12 mb-10">
                <div class="col-span-12 text-center md:col-span-8 md:col-start-3">
                    <h2 class="mb-2 text-2xl leading-normal capitalize sm:text-3xl md:text-4xl">Love for hear from you
                        <span class="text-purple-500">Get in Touch</span>
                    </h2>
                    <p class="text-gray-500">If you get in touch with someone, you contact them by writing to
                        them or
                        phoning them.</p>
                </div><!--end col-->
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="grid grid-cols-12 gap-5">
                    <div class="relative col-span-12 pr-4 md:col-span-6 sm:pr-0" v-for="(field, index) in fields" :key="index">
                        <div :class="{ 'show': field.value }" class="group">
                            <input v-model="field.value" :type="field.type" :id="field.id" class="px-6 pt-4 h-14 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice" required />
                            <label :for="field.id" class="absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 group-[&.show]:top-2 peer-focus:scale-[0.85] group-[&.show]:scale-[0.85] peer-focus:-translate-y-4 group-[&.show]:-translate-y-4 group-[&.show]:px-2 ltr:left-4 rtl:right-4">
                                {{ field.label }}
                            </label>
                        </div>
                    </div>

                    <div class="relative col-span-12 pr-4 sm:pr-0">
                        <div class="relative group" :class="{ 'show': message }">
                            <textarea v-model="message" id="messageInput" class="h-auto px-6 pt-4 form-input peer dark:!border-slate-300/10 focus:!border-purple-500 dark:placeholder:!text-muted-invoice dark:bg-body-invoice" rows="4" required></textarea>
                            <label for="messageInput" class="absolute text-15 text-gray-500 dark:text-dark-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-body-invoice px-4 peer-focus:px-2 scale-100 -translate-y-1/2 top-7 peer-focus:top-2 group-[&.show]:top-2 peer-focus:scale-[0.85] group-[&.show]:scale-[0.85] peer-focus:-translate-y-4 group-[&.show]:-translate-y-4 group-[&.show]:px-2 ltr:left-4 rtl:right-4">
                                Message
                            </label>
                        </div>
                    </div>

                    <div class="flex justify-end col-span-12 pr-4 sm:pr-0">
                        <button type="submit" class="w-full btn btn-purple max-w-[200px]">Send Inquiry</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <!-- Footer -->
    <Footer />

    <!-- Theme -->
    <ThemeButton />
</template>
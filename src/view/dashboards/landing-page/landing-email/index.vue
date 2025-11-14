<script setup lang="ts">
import { RouterLink } from 'vue-router';
import EmailHeader from './EmailHeader.vue';
import CardNot from './CardNote.vue';
import PricingCard from './PricingCard.vue'
import { onMounted, reactive, ref } from 'vue';
import { Apple, ChevronDown, ChevronUp, Fan, GalleryVerticalEnd, Gem, MoveRight } from 'lucide-vue-next';
import { plans } from './email-data'
import EmailFooter from './EmailFooter.vue';
import ThemeButton from '../landing-ecommerce/ThemeButton.vue';

const items = ref([
    {
        icon: Fan,
        title: 'Stay Professional',
        description: 'To most people, acting like a professional means working and behaving in such a way that others think of them as competent, reliable and respectful.',
    },
    {
        icon: GalleryVerticalEnd,
        title: 'Notes & Documents',
        description: 'A mortgage note document is a legally binding instrument that outlines the terms of a loan agreement between a borrower and a lender, specifying.',
    },
    {
        icon: Gem,
        title: 'Automation',
        description: 'Automation is the application of technology, programs, robotics or processes to achieve outcomes with minimal human input.',
    },
]);

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const faqs = reactive<FAQ[]>([
    {
        id: 1,
        question: 'What are the features of email?',
        answer: 'Emails are automatically date and time stamped. Signatures can be attached. Files, graphics, or sound can be sent as attachments.'
    },
    {
        id: 2,
        question: 'How do you use email features?',
        answer: `<h6 class="mb-2">Change smart features & personalization settings</h6>
      <ol class="space-y-2 list-decimal list-inside">
        <li>On your Android phone or tablet, open Gmail.</li>
        <li>Tap Menu. Settings. the account you want to change.</li>
        <li>Scroll to the "General" section.</li>
      </ol>`
    },
    {
        id: 3,
        question: 'What is the main use of email?',
        answer: 'Email is a beneficial way to communicate with individuals or small groups of friends or colleagues...'
    },
    {
        id: 4,
        question: 'How email really works?',
        answer: 'The email client connects to the Outgoing SMTP server based on the email account you used...'
    },
    {
        id: 5,
        question: 'What are emails used for?',
        answer: 'Email is used for many different purposes, including contacting friends, communicating with professors, and applying for jobs...'
    },
]);

const selected = ref<number | null>(null);
const faqContentHeights = ref<number[]>(new Array(faqs.length).fill(0));

const toggleFAQ = (index: number) => {
    selected.value = selected.value === index ? null : index;
};

onMounted(() => {
    faqContentHeights.value = faqs.map(faq => {
        // Here you can calculate the content height if necessary
        return 100; // Placeholder value, adjust as needed
    });
});

</script>
<template>
    <!-- Header -->
    <EmailHeader />
    <!-- Home Section -->
    <section class="relative pb-20 overflow-hidden pt-28 lg:pt-40 xl:pb-48 2xl:pt-80">
        <div class="container px-4 mx-auto">
            <div class="grid grid-cols-12 lg:gap-x-16">
                <div class="col-span-12 xl:col-span-5" data-aos="fade-up" data-aos-duration="2000">
                    <h2 class="mb-2 leading-normal capitalize xl:leading-normal xl:text-5xl">Customers with the
                        <span class="text-primary-500">#1</span> email marketing and automation.
                    </h2>
                    <p class="mb-5 text-lg text-gray-500 dark:text-dark-500">With AI-powered threat defenses,
                        enterprise-grade security and privacy controls, and Google's security-by-design cloud
                        infrastructure, Gmail helps keep your data protected, confidential, and compliant.</p>
                    <div class="flex flex-wrap items-center gap-3">
                        <RouterLink to="apps-mailbox" class="btn btn-primary">Request Demo <i data-lucide="move-right" class="inline-block ml-1 size-4"></i></RouterLink>
                        <button type="button" class="border-gray-200 dark:border-dark-800 btn btn-outline-gray">Open
                            in
                            you browser</button>
                    </div>
                </div>
                <div class="col-span-12 mt-8 xl:col-span-6 xl:col-start-7 md:mt-10 xl:mt-0">
                    <div>
                        <img src="@/assets/images/email/main.png" alt="" class="relative dark:hidden xl:scale-[1.8] object-cover border border-gray-200 dark:border-dark-800 rounded-lg ltr:xl:-right-44 rtl:xl:-left-44 xl:top-16 2xl:top-auto">
                        <img src="@/assets/images/email/email-dark.png" alt="" class="relative hidden dark:block xl:scale-[1.8] object-cover border border-gray-200 dark:border-dark-800 rounded-lg ltr:xl:-right-44 rtl:xl:-left-44 xl:top-16 2xl:top-auto">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Notes Card Section -->
    <section class="relative py-12 md:py-24 bg-gray-50 dark:bg-dark-900/50" id="services">
        <div class="container px-4 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space">
                <CardNot v-for="(item, index) in items" :key="index" :data="item" />
            </div>
        </div>
    </section>
    <!-- Pricing Card Section -->
    <section class="relative py-12 md:py-24" id="pricing">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <h2 class="mb-3 leading-normal capitalize">Choose the plan that suits you best</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">A pricing strategy is a model or method used to
                    establish the best price for a product or service. It helps you choose prices to maximize
                    profits
                    and shareholder value while considering.</p>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PricingCard v-for="(plan, index) in plans" :key="index" :title="plan.title" :description="plan.description" :price="plan.price" :features="plan.features" :isPopular="plan.isPopular" :link="plan.link" :button="plan.button" />
            </div>
        </div>
    </section>
    <!-- Domiex Email Features  -->
    <section class="relative md:pb-28" id="features">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <h2 class="mb-3 leading-normal capitalize">Domiex Email Features</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">Collaborate with your teammates using our
                    real-time
                    editor to compose professional emails.</p>
            </div>
            <div class="grid grid-cols-12 gap-x-space">
                <div class="col-span-12 row-span-2 text-center bg-gray-100 dark:bg-dark-900/40 md:col-span-3 card">
                    <div class="card-body">
                        <img src="@/assets/images/email/features-1.png" alt="" class="w-full rounded-md dark:hidden">
                        <img src="@/assets/images/email/features-1-dark.png" alt="" class="hidden w-full rounded-md dark:block">
                        <h6 class="mt-4">Easy to change Email Accounts</h6>
                    </div>
                </div>
                <div class="col-span-12 row-span-2 text-center bg-gray-100 dark:bg-dark-900/40 md:col-span-5 card">
                    <div class="card-body">
                        <img src="@/assets/images/email/features-2.png" alt="" class="w-full rounded-md dark:hidden">
                        <img src="@/assets/images/email/features-2-dark.png" alt="" class="hidden w-full rounded-md dark:block">
                        <h6 class="mt-4">Filter wise Email Lists</h6>
                    </div>
                </div>
                <div class="col-span-12 text-center bg-gray-100 dark:bg-dark-900/40 md:col-span-4 card">
                    <div class="space-y-8 card-body">
                        <div>
                            <img src="@/assets/images/email/features-3.png" alt="" class="w-full rounded-md dark:hidden">
                            <img src="@/assets/images/email/features-3-dark.png" alt="" class="hidden w-full rounded-md dark:block">
                            <h6 class="mt-4">Reply & New Added</h6>
                        </div>

                        <div>
                            <img src="@/assets/images/email/features-4.png" alt="" class="w-full rounded-md dark:hidden">
                            <img src="@/assets/images/email/features-4-dark.png" alt="" class="hidden w-full rounded-md dark:block">
                            <h6 class="mt-4">Email Reads</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative lg:py-24 bg-primary-900" id="templates">
        <div class="container px-4 mx-auto">
            <div class="lg:flex gap-x-16">
                <div class="w-full py-12 text-white lg:w-3/5 lg:py-0">
                    <h2 class="mb-2 leading-normal capitalize xl:text-5xl">Customers with the <span class="text-primary-500">#1</span> email marketing and automation.</h2>
                    <p class="mb-5 text-lg text-white">Email automation helps you find your audience and engage your
                        customers. Unlike manual campaigns, automations run in the background while you tend to
                        other valuable tasks. With automation, you can send personalized individual.</p>
                    <div class="flex flex-wrap items-center gap-3">
                        <a href="dashboard-email" class="btn btn-primary">Request Demo <i data-lucide="move-right" class="inline-block ml-1 size-4"></i></a>
                        <button type="button" class="btn">Open in you browser <i data-lucide="move-right" class="inline-block ml-1 size-4"></i></button>
                    </div>
                </div>
                <div class="lg:w-2/5">
                    <img src="@/assets/images/email/cta.png" alt="" class="w-[300px] mx-auto xl:scale-150 xl:-mt-16 relative object-cover rounded-lg ">
                </div>
            </div>
        </div>
    </section>
    <!-- View All FAQs  -->
    <section class="relative py-12 md:py-24" id="faq">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <h2 class="mb-3 leading-normal capitalize">Don't Just Take Our Word For It</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">
                    Frequently asked questions.
                    <a href="#!" class="font-medium text-gray-800 underline">View All FAQs</a>
                </p>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <div v-for="(faq, index) in faqs" :key="faq.id" class="relative border-b border-gray-200 dark:border-dark-800 last:border-0">
                        <button type="button" class="block w-full px-4 py-4 font-medium transition duration-200 ease-linear md:px-5" @click="toggleFAQ(index)" :class="{ 'bg-gray-50 text-primary-500 dark:bg-dark-900/30': selected === index }">
                            <div class="flex items-center justify-between">
                                <span>{{ faq.question }}</span>
                                <span class="text-gray-500 dark:text-dark-100 ico-down" v-show="selected !== index">
                                    <ChevronDown data-lucide="chevron-down" class="size-5" />
                                </span>
                                <span class="text-gray-500 dark:text-dark-500 ico-up" v-show="selected === index">
                                    <ChevronUp data-lucide="chevron-up" class="size-5" />
                                </span>
                            </div>
                        </button>
                        <div class="relative overflow-hidden transition-all duration-700" :style="{ maxHeight: selected === index ? `${faqContentHeights[index]}px` : '0' }">
                            <div class="p-5 text-gray-500 dark:text-dark-500">
                                <p v-html="faq.answer"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Customers can easily receive  -->
    <section class="relative pt-12 overflow-hidden md:pt-24 bg-gray-50 dark:bg-dark-900/50" id="updates">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-10 text-center">
                <h2 class="mb-3 leading-normal capitalize">Customers can easily receive new updates</h2>
                <p class="text-gray-500 dark:text-dark-500 mb-7 text-16">Domiex enables seamless collaboration with
                    clients and team members.</p>
                <div class="flex flex-wrap items-center justify-center gap-2">
                    <button type="button" class="btn btn-primary">
                        <Apple class="inline-block mb-0.5 mr-1 size-4" /> Download For Mac
                    </button>
                    <button type="button" class="btn !btn-sub-gray">Open Live Demos <MoveRight data-lucide="move-right" class="inline-block ml-1 mb-0.5 size-4"></MoveRight></button>
                </div>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-10 lg:col-start-2">
                    <img src="@/assets/images/email/email.png" alt="" class="relative border-2 border-gray-200 rounded-lg dark:border-dark-800 -bottom-5 dark:hidden" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300">
                    <img src="@/assets/images/email/email-dark.png" alt="" class="relative hidden border-2 border-gray-200 rounded-lg dark:border-dark-800 -bottom-5 dark:block" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300">
                </div>
            </div>
        </div>
    </section>
    <EmailFooter />
    <ThemeButton />
</template>
<style></style>
<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ChevronDown, ChevronUp, Headset, Phone } from 'lucide-vue-next';
import { ref, onMounted, nextTick } from "vue";
// Accordion Data
const faqs = ref([
    {
        question: 'Why do we use Tailwind CSS?',
        answer:
            'Tailwind CSS is used to design and style web pages fast and Responsive. Rapid Development, Highly Customizable, Reduced CSS File Size, Great Documentation, and Community Support are the main reasons for using Tailwind CSS.',
        contentHeight: 0,
    },
    {
        question: 'Can we change the base font-family in Tailwind config?',
        answer:
            'Yes, we can change the base <code class="text-pink-500">font-family</code> in Tailwind <code class="text-pink-500">config.</code> To adjust the main font style in Tailwind CSS, you can modify it by making changes in the “theme” part of your configuration file (<code class="text-pink-500">tailwind.config.js</code>). Just open that file, find the theme section, and add or update the fontFamily setting. We can also Change the font-family in the Tailwind config with different techniques Changing base font-family, Adding a new font family, Removing font family.',
        contentHeight: 0,
    },
    {
        question: 'How to create a form with Tailwind CSS?',
        answer:
            'Tailwind CSS, offers Tailwind forms as plugins that provide a foundational reset for form styles. Install TailwindCSS by writing the following command. We can also use utility classes to make a form with Tailwind CSS, use the easy-to-apply classes for backgrounds, borders, shadows, etc. Start by creating the form element and use the space-y-{n} class to add vertical spacing between the form controls.”.',
        contentHeight: 0,
    },
    {
        question: 'What is Tailwind CSS, and what is Utility-First CSS?',
        answer:
            '<p>Tailwind CSS is a utility-first CSS framework designed for rapid UI development. Instead of providing pre-built components, it offers low-level utility classes that let you build custom designs without ever leaving your HTML.</p><p class="mt-2">Utility-first CSS is an approach where you use small, single-purpose classes to build your user interface. These utility classes are composed to create complex designs directly in the HTML, rather than relying on custom CSS. This approach favors composition over inheritance, making it easier to maintain and scale your codebase.</clss=p>',
        contentHeight: 0,
    },
    {
        question: 'Why do we use Tailwind CSS?',
        answer:
            'Tailwind CSS is used to design and style web pages fast and Responsive. Rapid Development, Highly Customizable, Reduced CSS File Size, Great Documentation, and Community Support are the main reasons for using Tailwind CSS.',
        contentHeight: 0,
    },
    {
        question: 'Is Tailwind CSS open-source (FREE to use)?',
        answer:
            'Tailwind CSS is an open-source project, available for free usage and utility-first CSS framework that provides responsiveness.',
        contentHeight: 0,
    },
    {
        question: 'How to integrate Tailwind CSS into the HTML file?',
        answer:
            'We can easily integrate the tailwind CSS to the project via CDN links and by installing it from npm or yarn.',
        contentHeight: 0,
    },
    {
        question: 'Do Tailwind CSS 3 Classes Override Previous Classes?',
        answer:
            'Tailwind CSS is designed to be a low-level utility-first framework, which means that classes are not automatically overridden by default. This make the styling process for form elements simple and allowing easy customization with utilities.',
        contentHeight: 0,
    },
    {
        question: 'How to make text bold in Tailwind CSS?',
        answer:
            'For achieving the bold text we can easily add utility class font-bold.',
        contentHeight: 0,
    },
    {
        question: 'Do Tailwind CSS 3 Classes Override Previous Classes?',
        answer:
            'Tailwind CSS is designed to be a low-level utility-first framework, which means that classes are not automatically overridden by default. This make the styling process for form elements simple and allowing easy customization with utilities.',
        contentHeight: 0,
    },
    {
        question: 'How to make text bold in Tailwind CSS?',
        answer:
            'For achieving the bold text we can easily add utility class font-bold.',
        contentHeight: 0,
    },
    {
        question: 'How to center both horizontally and vertically?',
        answer:
            'We can easily add utility class self-center.',
        contentHeight: 0,
    },
]);

const selected = ref<number | null>(null);

// Refs for the accordion content elements
const contentRefs = ref<(HTMLDivElement | null)[]>([]);

// Toggle accordion functionality
const toggleAccordion = async (index: number) => {
    selected.value = selected.value === index ? null : index;

    await nextTick(); // Wait for DOM update
    faqs.value.forEach((faq, i) => {
        const content = contentRefs.value[i];
        faq.contentHeight = content?.scrollHeight || 0;
    });
};

const videos = [
    { src: "https://www.youtube.com/embed/DxcJbrs6rKk?si=r9xt6eHRj0kayf8d" },
    { src: "https://www.youtube.com/embed/eSzNNYk7nVU?si=EHJjJ8BjAsp6yMgx" },
    { src: "https://www.youtube.com/embed/MAtaT8BZEAo?si=iyOi2lREUWB35ct6" },
];

onMounted(() => {
    toggleAccordion(0);
})
</script>
<template>
    <PageHeading title="FAQ's" sub-title="Pages" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12">
            <div class="card">
                <div class="card-header">
                    <h6>Frequently asked questions (FAQ)</h6>
                </div>
                <div class="card-body">
                    <p class="mb-4 text-gray-500 dark:text-dark-500">
                        They serve as a self-service tool for customers to easily find the information they need without
                        contacting customer support.
                    </p>
                    <div class="grid items-center grid-cols-1 gap-3 xl:grid-cols-2">
                        <!-- Mobile View -->
                        <div class="text-center xl:hidden">
                            <img src="@/assets/images/auth/faq.png" alt="" class="mx-auto" />
                            <h5 class="mt-5 mb-1">Frequently asked questions (FAQ)</h5>
                            <p class="mb-5 text-gray-500 dark:text-dark-500">
                                Cleaning up common queries about domiex.
                            </p>
                            <div class="flex flex-wrap items-center justify-center gap-3">
                                <button class="btn btn-purple">
                                    <Phone data-lucide="phone" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Phone>
                                    Contact US
                                </button>
                                <button class="btn btn-gray">
                                    <Headset data-lucide="headset" class="inline-block ltr:mr-1 rtl:ml-1 size-4">
                                    </Headset>
                                    Help Center
                                </button>
                            </div>
                        </div>

                        <!-- Accordion Section -->
                        <div class="space-y-3">
                            <div v-for="(item, index) in faqs" :key="index">
                                <div class="accordion-boxed">
                                    <button type="button" class="accordion-button accordion-primary" @click="toggleAccordion(index)" :class="{ active: selected === index }">
                                        <div class="flex items-center justify-between">
                                            <span>{{ item.question }}</span>
                                            <span class="text-gray-500 ico-down" :class="{ 'text-primary-500': selected === index }" v-show="selected !== index">
                                                <ChevronDown data-lucide="chevron-down"></ChevronDown>
                                            </span>
                                            <span class="text-gray-500 ico-up" :class="{ 'text-primary-500': selected === index }" v-show="selected === index">
                                                <ChevronUp data-lucide="chevron-up"></ChevronUp>
                                            </span>
                                        </div>
                                    </button>
                                    <div class="overflow-hidden transition-all accordion-main-content" :style="{
                                        maxHeight: selected === index ? item.contentHeight + 'px' : '0',
                                    }" ref="contentRefs">
                                        <div class="px-3 py-2.5">
                                            <p v-html="item.answer" class="text-gray-500 dark:text-dark-500"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Desktop View -->
                        <div class="hidden xl:block">
                            <div class="text-center">
                                <img src="@/assets/images/auth/faq.png" alt="" class="mx-auto" />
                                <h5 class="mt-5 mb-1">Frequently asked questions (FAQ)</h5>
                                <p class="mb-5 text-gray-500 dark:text-dark-500">
                                    Cleaning up common queries about domiex.
                                </p>
                                <div class="flex items-center justify-center gap-3">
                                    <router-link to="pages-contact-us" class="btn btn-purple">
                                        <Phone class="inline-block ltr:mr-1 rtl:ml-1 size-4" />
                                        Contact US
                                    </router-link>
                                    <router-link to="pages-help-center" class="btn btn-sub-gray">
                                        <Headset class="inline-block ltr:mr-1 rtl:ml-1 size-4" />
                                        Help Center
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="card">
                <div class="card-header">
                    <h6>Video Tutorial by Domiex</h6>
                </div>
                <div class="card-body">
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        <iframe v-for="(video, index) in videos" :key="index" class="w-full rounded-xl aspect-video" :src="video.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
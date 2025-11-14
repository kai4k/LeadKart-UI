<script setup lang="ts">
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import pageHeading from '@/components/common/PageHeading.vue';
import { nextTick, onMounted, ref } from 'vue';

const accordionItems = ref([
    {
        id: 1,
        question: 'Why do we use Tailwind CSS?',
        answer: 'Tailwind CSS is used to design and style web pages fast and Responsive. Rapid Development, Highly Customizable, Reduced CSS File Size, Great Documentation, and Community Support are the main reasons for using Tailwind CSS.'
    },
    {
        id: 2,
        question: 'Can we change the base font-family in Tailwind config?',
        answer: 'Yes, we can change the base <code class="text-pink-500">font-family</code> in Tailwind <code class="text-pink-500">config.</code> To adjust the main font style in Tailwind CSS, you can modify it by making changes in the “theme” part of your configuration file (<code class="text-pink-500">tailwind.config.js</code>). Just open that file, find the theme section, and add or update the fontFamily setting.'
    },
    {
        id: 3,
        question: 'How to create a form with Tailwind CSS?',
        answer: 'Tailwind CSS offers Tailwind forms as plugins that provide a foundational reset for form styles. We can also use utility classes to make a form with Tailwind CSS, using easy-to-apply classes for backgrounds, borders, shadows, etc.'
    }
]);


const selected: any = ref(null);
const selectedGreen: any = ref(null);
const boxSelected: any = ref(null);
const boxSolidSelected: any = ref(null)
const toggleAccordion = (id: number) => {
    selected.value = selected.value === id ? null : id;
};
const toggleAccordionGreen = (id: number) => {
    selectedGreen.value = selectedGreen.value === id ? null : id;
};
const boxAccountToggle = (id: number) => {
    boxSelected.value = boxSelected.value === id ? null : id;
}
const boxSolidAccountToggle = (id: number) => {
    boxSolidSelected.value = boxSolidSelected.value === id ? null : id;
}

const getScrollHeight = (id: number) => {
    const item = accordionItems.value.find(item => item.id === id);
    return item ? item.answer.length * 10 : 0; // Simplified calculation for example
};

const isSelected = ref(false);
const containerHeight = ref(0);
const container = ref<HTMLElement | null>(null);

const collapseToggleAccordion = () => {
    isSelected.value = !isSelected.value;

    nextTick(() => {
        if (isSelected.value) {
            containerHeight.value = container.value?.scrollHeight || 0;
        } else {
            containerHeight.value = 0;
        }
    });
};

onMounted(() => {
    toggleAccordion(1)
    toggleAccordionGreen(1)
    boxAccountToggle(1)
    boxSolidAccountToggle(1)
    getScrollHeight(1)
});

</script>
<template>
    <pageHeading title="Accordion & Collapse" sub-title="UI" />


    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic Accordion</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="accordion" v-for="item in accordionItems" :key="item.id">
                            <button type="button" class="accordion-button accordion-primary" @click="toggleAccordion(item.id)" :class="{ active: selected === item.id }">
                                <span class="flex items-center justify-between">
                                    <span>{{ item.question }}</span>
                                    <span class="arrow-icon" :class="{ active: selected === item.id }" v-if="selected !== item.id">
                                        <ChevronDown class="w-5" />
                                    </span>
                                    <span class="arrow-icon" :class="{ active: selected === item.id }" v-if="selected === item.id">
                                        <ChevronUp class="w-5" />
                                    </span>
                                </span>
                            </button>
                            <div class="accordion-main-content" ref="container" :style="selected === item.id ? 'max-height: ' + getScrollHeight(item.id) + 'px' : ''">
                                <div class="content">
                                    <p v-html="item.answer"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="accordion" v-for="item in accordionItems" :key="item.id">
                            <button type="button" class="accordion-button accordion-green" @click="toggleAccordionGreen(item.id)" :class="{ active: selectedGreen === item.id }">
                                <span class="flex items-center justify-between">
                                    <span>{{ item.question }}</span>
                                    <span class="arrow-icon" v-if="selected !== item.id">
                                        <ChevronDown class="w-5" />

                                    </span>
                                    <span class="arrow-icon" v-else>
                                        <ChevronUp class="w-5" />
                                    </span>
                                </span>
                            </button>
                            <div class="accordion-main-content" :style="selectedGreen === item.id ? 'max-height: ' + getScrollHeight(item.id) + 'px' : {}">
                                <div class="content" ref="container">
                                    <p v-html="item.answer"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Boxed Accordion</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div class="accordion-boxed" v-for="item in accordionItems" :key="item.id">
                                <button type="button" class="accordion-button accordion-green" @click="boxAccountToggle(item.id)" :class="{ active: boxSelected === item.id }">
                                    <span class="flex items-center justify-between">
                                        <span>{{ item.question }}</span>
                                        <span class="arrow-icon" :class="{ active: boxSelected === item.id }" v-if="boxSelected !== item.id">
                                            <ChevronDown class="w-5" />
                                        </span>
                                        <span class="arrow-icon" :class="{ active: boxSelected === item.id }" v-if="boxSelected === item.id">
                                            <ChevronUp class="w-5" />
                                        </span>
                                    </span>
                                </button>
                                <div class="accordion-main-content" ref="container" :style="boxSelected === item.id ? 'max-height: ' + getScrollHeight(item.id) + 'px' : ''">
                                    <div class="content">
                                        <p v-html="item.answer"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div class="accordion-boxed" v-for="item in accordionItems" :key="item.id">
                                <button type="button" class="accordion-button accordion-solid-purple" @click="boxSolidAccountToggle(item.id)" :class="{ active: boxSolidSelected === item.id }">
                                    <span class="flex items-center justify-between">
                                        <span>{{ item.question }}</span>
                                        <span class="arrow-icon" :class="{ active: boxSolidSelected === item.id }" v-if="boxSolidSelected !== item.id">
                                            <ChevronDown class="w-10 h-5 " />
                                        </span>
                                        <span class="arrow-icon" :class="{ active: boxSolidSelected === item.id }" v-if="boxSolidSelected === item.id">
                                            <ChevronUp class="w-10 h-6" />
                                        </span>
                                    </span>
                                </button>
                                <div class="accordion-main-content" ref="container" :style="boxSolidSelected === item.id ? 'max-height: ' + getScrollHeight(item.id) + 'px' : ''">
                                    <div class="content">
                                        <p v-html="item.answer"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Collapse</h6>
            </div>
            <div class="card-body">
                <div class="relative">
                    <button type="button" class="text-white btn bg-amber-500 border-amber-500 hover:bg-amber-600 hover:text-white hover:border-amber-600 focus:bg-amber-600 focus:text-white focus:border-amber-600" @click="collapseToggleAccordion">
                        <div class="flex items-center justify-between gap-1">
                            <span class="ltr:mr-1 rtl:ml-1">Buttons Collapse</span>
                            <span class="ico-down" v-if="!isSelected">
                                <ChevronDown class="w-5" />

                            </span>
                            <span class="ico-up" v-if="isSelected">
                                <ChevronUp class="w-5" />
                            </span>
                        </div>
                    </button>
                    <div class="relative overflow-hidden transition-all duration-700" :style="{ maxHeight: isSelected ? containerHeight + 'px' : '0' }" ref="container">
                        <div class="pt-3">
                            <p>
                                Tailwind CSS is an open-source project, available for free usage and utility-first CSS
                                framework that provides responsiveness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CornerUpLeft, CornerUpRight, Gem, Layers3, MonitorStop, MoveLeft, MoveRight, PencilRuler } from 'lucide-vue-next';
import { ref } from 'vue';

// Array of expertise card data
const expertiseCards = ref([
    {
        id: 'brandingInput',
        title: 'Branding',
        description: 'We will create the image of your product from scratch.',
        icon: Gem,
        iconBgClass: 'bg-primary-500',
        boxCss: "peer-checked:bg-primary-100 dark:peer-checked:bg-primary-500/10 peer-checked:border-primary-300 dark:peer-checked:border-primary-500/30",
        checked: false,
        checkboxCss: "input-check-primary"
    },
    {
        id: 'productCheckbox',
        title: 'Product Design',
        description: 'We will create the image of your product from scratch.',
        icon: Layers3,
        iconBgClass: 'bg-green-500',
        boxCss: "peer-checked:bg-green-100 dark:peer-checked:bg-green-500/10 peer-checked:border-green-300 dark:peer-checked:border-green-500/30",
        checked: false,
        checkboxCss: "input-check-green"

    },
    {
        id: 'developmentCheckbox',
        title: 'Web Development',
        description: 'We will create the image of your product from scratch.',
        icon: MonitorStop,
        iconBgClass: 'bg-yellow-500',
        boxCss: "peer-checked:bg-yellow-100 dark:peer-checked:bg-yellow-500/10 peer-checked:border-yellow-300 dark:peer-checked:border-yellow-500/30",
        checked: false,
        checkboxCss: "input-check-yellow"
    },
    {
        id: 'customizeCheckbox',
        title: 'Customize Projects',
        description: 'We will create the image of your product from scratch.',
        icon: PencilRuler,
        iconBgClass: 'bg-purple-500',
        checked: false,
        boxCss: "peer-checked:bg-purple-100 dark:peer-checked:bg-purple-500/10 peer-checked:border-purple-300 dark:peer-checked:border-purple-500/30",
        checkboxCss: "input-check-purple"
    },
]);

const additionalList = [
    { name: "Basic support at the start of the project" },
    { name: "Taking care of the best design quality" },
    { name: "Perfect pixel at every stage of building your project" },
    { name: "Support: Design, Creative & Development" },
]
</script>
<template>
    <div
        class="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <!-- Left Section: Expertise Options -->
        <div class="col-span-12 xl:col-span-7">
            <div
                class="flex items-center border-gray-200 py-14 xl:py-0 xl:h-screen ltr:border-r rtl:border-l dark:border-dark-800">
                <div class="px-10 lg:px-20 grow">
                    <h1 class="mb-10 leading-normal xl:w-2/3">What expertise should specialists possess to develop your
                        project?</h1>
                    <div
                        class="grid grid-cols-1 gap-5 mb-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4">
                        <!-- Dynamic Cards -->
                        <div v-for="(card, index) in expertiseCards" :key="index" class="relative input-check-group">
                            <input :id="card.id" class="absolute z-10 input-check peer ltr:right-4 rtl:left-4 top-4"
                                :class="card.checkboxCss" type="checkbox" v-model="card.checked" />
                            <label :for="card.id"
                                class="relative block p-4 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer dark:border-dark-800 dark:bg-dark-900 shadow-gray-100 dark:shadow-dark-850"
                                :class="card.boxCss">
                                <span
                                    :class="`flex items-center justify-center ${card.iconBgClass} rounded-md text-white size-10`">
                                    <component :is="card.icon" class="size-5"></component>
                                </span>
                                <span class="block mt-4 mb-1 text-base font-medium">{{ card.title }}</span>
                                <span class="block text-sm text-gray-500 dark:text-dark-500">{{ card.description
                                    }}</span>
                            </label>
                        </div>
                    </div><!--end grid-->
                    <div class="flex flex-wrap gap-2">
                        <router-link to="pages-contact-us-two" class="btn btn-outline-gray">
                            <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></MoveLeft>
                            <MoveRight class="ml-1 ltr:hidden rtl:inline-block size-4"></MoveRight>
                            Back
                        </router-link>
                        <router-link to="pages-contact-us-four" class="btn btn-primary">
                            Go Forward
                            <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                            <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></MoveLeft>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Section: Project Timeline -->
        <div class="col-span-12 xl:col-span-5">
            <div class="flex flex-col justify-center w-full px-10 lg:px-20 py-14 xl:py-0 xl:h-screen">
                <div>
                    <h5 class="mb-3">At each stage of the project timeline, we ensure quality through the dedicated
                        oversight of our Head of Design, who leads our quality assurance efforts.</h5>
                    <p class="mb-5 text-gray-500 dark:text-dark-500">Our Head of Design is entrusted with ensuring the
                        utmost quality of the final digital product.</p>
                    <ul class="space-y-2 mb-7">
                        <template v-for="(list, index) in additionalList" :key="index">
                            <li>
                                <CornerUpRight class="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4">
                                </CornerUpRight>
                                <CornerUpLeft class="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4">
                                </CornerUPLEft>
                                {{ list.name }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
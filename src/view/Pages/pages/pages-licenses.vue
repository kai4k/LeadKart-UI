<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { X, Check, MessageCircleQuestion, Headset } from 'lucide-vue-next';
interface TableRow {
    label: string;
    regular: string;
    extended: string;
}

const tableRows: TableRow[] = [
    {
        label: "Number of end products",
        regular: "1",
        extended: "1",
    },
    {
        label: "Use in a single end product",
        regular: `<component data-lucide="check" class="mx-auto text-green-500 size-4">✓</component>`,
        extended: `<component data-lucide="check" class="mx-auto text-green-500 size-4">✓</component>`,
    },
    {
        label: "Use in a free end product",
        regular: `<component data-lucide="check" class="mx-auto text-green-500 size-4">✓</component>`,
        extended: `<component data-lucide="check" class="mx-auto text-green-500 size-4">✓</component>`,
    },
    {
        label: "Use in an end product that's sold",
        regular: `<component :is="X" class="mx-auto text-xs font-bold text-red-500 size-4">✕</component>`,
        extended: `<Check data-lucide="check" class="mx-auto text-green-500 size-4">✓</Check>`,
    },
    {
        label: "On-demand products/services",
        regular: "One license per each customized end product",
        extended: `<component data-lucide="x" class="mx-auto text-xs font-bold text-red-500 size-4">✕</component>`,
    },
    {
        label: "Use in stock items/templates",
        regular: `<component data-lucide="x" class="mx-auto text-xs font-bold text-red-500 size-4">✕</component>`,
        extended: `<component data-lucide="x" class="mx-auto text-xs font-bold text-red-500 size-3">✕</component>`,
    },
];

interface SupportCard {
    iconClass: string;
    iconBackground: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
    icon: object;
}

const supportCards: SupportCard[] = [
    {
        iconClass: "relative stroke-1 text-sky-500 size-10 fill-sky-500/20",
        iconBackground: "bg-gradient-to-b from-sky-500/10",
        title: "FAQ",
        description: "Did you know that the FAQs form part of the licenses?",
        link: "https://themeforest.net/licenses/faq",
        linkText: "Read on for more details",
        icon: MessageCircleQuestion,
    },
    {
        iconClass: "relative text-red-500 stroke-1 size-10 fill-red-500/20",
        iconBackground: "bg-gradient-to-b from-red-500/10",
        title: "Support",
        description: "Still have a burning question?",
        link: "https://help.market.envato.com/hc/en-us",
        linkText: "Have a chat with our friendly Help Team",
        icon: Headset,
    },
];
</script>
<template>
    <PageHeading title="Licenses" sub-title="Pages" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12">
            <div class="card">
                <div class="card-header">
                    <h6>Standard Licenses</h6>
                </div>
                <div class="card-body">
                    <p class="mb-5 text-gray-500 dark:text-dark-500">
                        The majority of our items (themes, code, graphics, 3D and flash) are covered by our
                        <b>Standard Licenses</b>. If your end product including the item is going to be free to the end
                        user then a <b>Regular License</b> is what you need. An <b>Extended License</b> is required if the end user must pay to use the end product.
                    </p>

                    <div class="overflow-x-auto">
                        <table class="table even-striped">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>
                                        <div>
                                            <h6>Regular</h6>
                                            <a href="#!" class="text-sm font-normal text-gray-500 underline transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">
                                                view full license
                                            </a>
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <h6>Extended</h6>
                                            <a href="#!" class="text-sm font-normal text-gray-500 underline transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">
                                                view full license
                                            </a>
                                        </div>
                                    </th>
                                </tr>
                                <tr v-for="(row, index) in tableRows" :key="index">
                                    <td class="whitespace-nowrap">{{ row.label }}</td>
                                    <td class="text-center whitespace-nowrap" v-html="row.regular"></td>
                                    <td class="text-center whitespace-nowrap" v-html="row.extended"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h6 class="mt-4 mb-2">Note to freelancers and creative agencies:</h6>
                    <p class="mb-4 text-gray-500 dark:text-dark-500">
                        You may charge your client for your services to create an end product, even under the Regular
                        License. But you
                        can’t use one of our Standard Licenses on multiple clients or jobs.
                    </p>

                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div class="mb-0 card" v-for="(supportCard, index) in supportCards" :key="index">
                            <div class="card-body">
                                <div class="flex items-center justify-center size-16 rounded-modern" :class="supportCard.iconBackground">
                                    <component :is="supportCard.icon" :class="supportCard.iconClass"></component>
                                </div>
                                <div class="mt-3">
                                    <h6 class="mb-1">{{ supportCard.title }}</h6>
                                    <p class="mb-2 text-gray-500 dark:text-dark-500">{{ supportCard.description }}</p>
                                    <a :href="supportCard.link" class="underline text-primary-500">{{
                                        supportCard.linkText }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
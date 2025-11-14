<script setup lang="ts">
import { computed, ref } from 'vue';
import invoicesData from './overview-1/invoice-data';
defineProps({
    temColor: Boolean
})
const subTotal: any = computed(() => {
    const total = invoicesData.value.items.reduce((sum, item) => sum + item.price, 0)
    return total
})
const vatAmount = computed<any>(() => {
    return Number(subTotal.value) * 6 / 100
})
const discount = computed(() => {
    return subTotal.value * 10 / 100
})
const printInvoice = () => {
    window.print();
};
const shippingCharge = ref(35)
const totalAmt = computed(() => {
    return Number(subTotal.value) + Number(vatAmount.value) + Number(shippingCharge.value)
})
const downloadInvoice = () => {
    // Add functionality for downloading the invoice
};

const fontCss = ref('font-semibold text-gray-900 dark:text-dark-50 md:text-primary-50 dark:md:text-primary-50');
const pCss = ref('text-gray-500 dark:text-dark-500 md:!text-primary-100 dark:md:!text-primary-100');
const footerCss = ref('bg-sky-500/10 card-footer border-sky-500/20')
</script>
<template>
    <div class="mx-auto mb-5 sm:max-w-6xl print:max-w-full" id="invoice-content">
        <div class="relative overflow-hidden card print:border-0 print:shadow-none">
            <div v-if="temColor" class="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b blur-2xl from-primary-500/10 print:hidden">
            </div>
            <div v-if="temColor" class="top-0 hidden h-40 md:block md:absolute rtl:left-0 ltr:right-0 rtl:rounded-br-full ltr:rounded-bl-full w-96 bg-primary-500 print:hidden">
            </div>
            <div class="relative md:p-10 card-body print:p-0">
                <div class="md:flex" :class="temColor ? 'mb-8' : 'mb-5'">
                    <div class="mb-4 grow md:mb-0">
                        <a href="#!">
                            <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-8 dark:hidden">
                            <img src="@/assets/images/logo-white.png" alt="" class="hidden h-8 dark:inline-block">
                        </a>
                        <h6 class="mt-3 text-16">Invoice #{{ invoicesData.number }}</h6>
                    </div>
                    <div class="space-y-2 ltr:text-right rtl:text-left">
                        <p class="text-gray-500 dark:text-dark-500" :class="temColor ? pCss : ''">
                            Support Email: <a :href="'mailto:' + invoicesData.supportEmail" class="font-semibold text-gray-800 dark:text-dark-50" :class="temColor ? fontCss : ''">{{
                                invoicesData.supportEmail
                            }}</a>
                        </p>
                        <p class="text-gray-500 dark:!text-dark-500" :class="temColor ? pCss : ''">
                            Invoice Date: <span class="font-semibold text-gray-800 dark:text-dark-50" :class="temColor ? fontCss : ''">{{
                                invoicesData.invoiceDate }}</span>
                        </p>
                        <p class="text-gray-500 dark:!text-dark-500" :class="temColor ? pCss : ''">
                            Due Date: <span class="font-semibold text-gray-800 dark:text-dark-50" :class="temColor ? fontCss : ''">{{
                                invoicesData.dueDate
                            }}</span>
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-12" :class="temColor ? 'mb-6' : ' gap-5'">
                    <div class="col-span-12 md:col-span-6">
                        <p class="mb-1 text-gray-500 dark:text-dark-500">From Address</p>
                        <h6 class="mb-2">{{ invoicesData.from.name }}</h6>
                        <div class="text-gray-500 w-72 dark:text-dark-500 font-body font-base">{{
                            invoicesData.from.address }}</div>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Phone No.: {{ invoicesData.from.phone }}</p>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Email: <a :href="'mailto:' + invoicesData.from.email">{{ invoicesData.from.email }}</a></p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Billing Address</p>
                        <h6 class="mb-2">{{ invoicesData.billing.name }}</h6>
                        <div class="text-gray-500 dark:text-dark-500 font-body font-base">
                            <span class="block">{{ invoicesData.billing.address.street }}</span>
                            <span class="block">{{ invoicesData.billing.address.city }}</span>
                        </div>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Phone No.: {{ invoicesData.billing.phone }}</p>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Email: <a :href="'mailto:' + invoicesData.billing.email">{{ invoicesData.billing.email }}</a></p>
                    </div>
                </div>

                <div>
                    <div class="overflow-x-auto">
                        <table class="table flush">
                            <thead>
                                <tr class="whitespace-nowrap">
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in invoicesData.items" :key="index">
                                    <td>{{ item.productNumber }}</td>
                                    <td>
                                        <div class="flex items-center !gap-2">
                                            <div class="flex items-center justify-center !p-1 border border-gray-200 rounded-sm dark:border-dark-800 size-12">
                                                <img :src="item.image" alt="" class="rounded-sm">
                                            </div>
                                            <div>
                                                <h6 class="mb-1"><a href="apps-ecommerce-product-overview">{{ item.name }}</a></h6>
                                                <p class="text-gray-500 dark:text-dark-500">
                                                    <span class="px-2 border-r border-gray-200 dark:border-dark-800 first:pl-0">{{
                                                        item.color }}</span>
                                                    <span class="px-2 first:pl-0">{{ item.size }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${{ item.price }}</td>
                                    <td>{{ item.qty }}</td>
                                    <td>${{ item.subTotal }}</td>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td colspan="3"></td>
                                    <td>Subtotal:</td>
                                    <th class="!border-0">${{ subTotal.toFixed(2) }}</th>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td colspan="3"></td>
                                    <td>Vat Amount (6%)</td>
                                    <th class="!border-0">${{ vatAmount.toFixed(2) }}</th>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td colspan="3"></td>
                                    <td>Discount (10%)</td>
                                    <th class="!border-0">-${{ discount.toFixed(2) }}</th>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td colspan="3"></td>
                                    <td>Shipping Charge</td>
                                    <th class="!border-0">${{ shippingCharge.toFixed(2) }}</th>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td colspan="3"></td>
                                    <td>Total Amount</td>
                                    <th class="!border-0 text-primary-600">${{ totalAmt.toFixed(2) }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="grid grid-cols-12 mt-5">
                    <div class="col-span-6">
                        <h6 class="mb-2">Payment Method <span class="align-middle ltr:ml-1 rtl:mr-1 badge badge-green">Paid</span></h6>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Card Holder Name: {{
                            invoicesData.payment.cardHolderName }}</p>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Debit Card: {{ invoicesData.payment.cardNumber
                        }}
                        </p>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Expiry Date: {{ invoicesData.payment.expiryDate
                        }}
                        </p>
                        <p class="mt-1 text-gray-500 dark:text-dark-500">Total Amount: ${{
                            totalAmt.toFixed(2) }}</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap items-center bg-gray-100 card-footer dark:bg-dark-850 print:bg-gray-100 dark:print:bg-dark-850 print:border-0 print:mt-space" :class="temColor ? footerCss : ''">
                <h6 class="grow">Thank you for purchasing Domiex Admin & Dashboards</h6>
                <a href="#!" class="shrink-0">+(021) 1452 023 021</a>
            </div>
        </div>

        <div class="flex items-center justify-end gap-2 print:hidden">
            <button class="btn btn-sub-red" @click="downloadInvoice">Download</button>
            <button class="btn btn-primary" @click="printInvoice">Print Now</button>
        </div>
    </div>
</template>
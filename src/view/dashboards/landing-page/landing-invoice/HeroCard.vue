<script setup lang="ts">
import { ref, computed } from 'vue';

// Props
const props = defineProps({
    idPrefix: {
        type: String,
        required: true,
    },
});

// Reactive variables
const selectedInvoiceOption = ref<string>('send');
const sendFrequency = ref<string>('1');
const sendTimes = ref<string>('1');

// Placeholder for delivery time
const deliveryTime = 'Yesterday on 06:48PM';

// Computed IDs
const radioBasic1Id = computed(() => `${props.idPrefix}-radioBasic1`);
const radioBasic2Id = computed(() => `${props.idPrefix}-radioBasic2`);
</script>

<template>
    <div class="col-span-12 lg:col-span-3">
        <div class="p-8 border border-gray-200 rounded-sm bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
            <h6 class="mb-3 font-normal tracking-wide">Recurring Invoice</h6>
            <div class="mb-2 input-radio-group">
                <input :id="radioBasic1Id" name="invoiceList" class="input-radio peer dark:border-slate-300/15 checked:!bg-purple-500 checked:!border-purple-500 checked:!ring-0" type="radio" v-model="selectedInvoiceOption" value="send" />
                <label :for="radioBasic1Id" class="text-16 shrink-0 dark:text-muted-invoice">Send Invoice</label>
            </div>
            <div class="input-radio-group">
                <input :id="radioBasic2Id" name="invoiceList" class="input-radio peer dark:border-slate-300/15 checked:!bg-purple-500 checked:!border-purple-500 checked:!ring-0" type="radio" v-model="selectedInvoiceOption" value="specificDate" />
                <label :for="radioBasic2Id" class="shrink-0 text-16 dark:text-muted-invoice">Send on specific
                    date</label>
            </div>
            <div class="mt-4">
                <label for="invoiceSend" class="form-label">What is the send Invoices?</label>
                <select id="invoiceSend" v-model="sendFrequency" class="dark:bg-body-invoice form-select dark:border-slate-300/10 focus:border-purple-500">
                    <option value="1">Weekly</option>
                    <option value="2">Monthly</option>
                    <option value="3">Yearly</option>
                </select>
            </div>
            <div class="mt-3">
                <label for="timesSend" class="form-label">How to many times should we send?</label>
                <select id="timesSend" v-model="sendTimes" class="dark:bg-body-invoice form-select dark:border-slate-300/10 focus:border-purple-500">
                    <option value="1">1 Times</option>
                    <option value="2">2 Times</option>
                    <option value="3">3 Times</option>
                    <option value="4">4 Times</option>
                </select>
            </div>
        </div>
        <div class="p-5 mt-5 border border-gray-200 rounded bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice">
            <div class="flex items-center gap-3">
                <img src="@/assets/images/avatar/user-11.png" alt="" class="rounded-full size-12" />
                <div>
                    <h6 class="mb-1 font-medium">Invoice sent & delivered</h6>
                    <p class="text-sm dark:text-muted-invoice">{{ deliveryTime }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

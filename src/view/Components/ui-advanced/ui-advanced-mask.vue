<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
// import TheMask from 'vue-the-mask'
import TheMask from 'vue-the-mask'
import { defineComponent, ref } from 'vue';
// defineComponent({
//     directives: {
//         mask: TheMask,
//     },
// });

const formattedValue = ref('99,999');
const formatDot = ref<any>('1.200.069');
const formatSpace = ref<any>('99 999.69');
const formatComma = ref<any>('12,000.6911');

const formatMoney = () => {
    // Remove all non-digit characters
    const cleanValue = formattedValue.value.replace(/\D/g, '');
    if (cleanValue) {
        const formatted = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedValue.value = formatted;
    }
};
const formatMoneyDot = () => {
    const cleanValue = formatDot.value.replace(/\D/g, '');
    if (cleanValue) {
        const formatted = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        formatDot.value = formatted;
    }
};
const formatMoneySpace = () => {
    const cleanValue = formatSpace.value.replace(/\D/g, '');
    if (cleanValue) {
        const formatted = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        formatSpace.value = formatted;
    }
};
const formatMoneyComma = () => {
    const cleanValue = formatComma.value.replace(/\D/g, '');
    if (cleanValue) {
        const formatted = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatComma.value = formatted;
    }
};


</script>
<template>
    <pageHeading title="Mask Input" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Date Mask</h6>
            </div>
            <div class="card-body">
                <input v-mask="'##/##/####'" placeholder="MM/DD/YYYY" class="form-input" />
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Dynamic Masks</h6>
            </div>
            <div class="card-body">
                <input v-mask="'#### #### #### ####'" class="form-input" placeholder="0000 0000 0000 0000" />
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Pin Code Masks</h6>
            </div>
            <div class="card-body">
                <input v-mask="'####'" class="form-input" placeholder="0000" />
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Phone Number Masks</h6>
            </div>
            <div class="card-body">
                <input v-mask="'### #### ###'" class="form-input" placeholder="000 0000 000" />
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Money Inputs</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-space">
                    <div>
                        <label for="moneyInput1" class="form-label">
                            Here is a fully functioning money input mask:
                        </label>
                        <input id="moneyInput1" v-model="formattedValue" @input="formatMoney" class="form-input"
                            placeholder="0" />
                    </div>
                    <div>
                        <label for="moneyInput1" class="form-label">
                            If you wish to swap the periods for commas and vice versa (as is required in certain
                            currencies), you can do so using the second optional parameter:
                        </label>
                        <input id="moneyInput1" v-model="formatDot" @input="formatMoneyDot" class="form-input"
                            placeholder="0" />
                    </div>
                    <div>
                        <label for="moneyInput3" class="form-label">You may also choose to override the thousands
                            separator by
                            supplying a third optional argument:</label>
                        <input id="moneyInput1" v-model="formatSpace" @input="formatMoneySpace" class="form-input"
                            placeholder="0" />
                    </div>
                    <div>
                        <label for="moneyInput1" class="form-label">
                            You can also override the default precision of 2 digits by using any desired number of
                            digits as the fourth optional argument:
                        </label>
                        <input id="moneyInput1" v-model="formatComma" @input="formatMoneyComma" class="form-input"
                            placeholder="0" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

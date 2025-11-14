<script setup lang="ts">
import { ref, onMounted } from 'vue';
import noUiSlider, { PipsMode } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import WithdrawConfirm from './WithdrawConfirm.vue';
import { X } from 'lucide-vue-next';

const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function
})
// Extend HTMLDivElement to include the noUiSlider property
interface HTMLDivElementWithNoUiSlider extends HTMLDivElement {
    noUiSlider?: any;
}

// Form inputs
const bankName = ref('');
const accountNumber = ref('');
const withdrawalAmount = ref('$5,879');
const showConfirmWithdraw = ref(false)
function setShowConfirmWithdrawValue(state: boolean) {
    showConfirmWithdraw.value = state
}

// Slider setup
const softSlider = ref<HTMLDivElementWithNoUiSlider | null>(null);

const initSlider = () => {
    if (softSlider.value) {
        noUiSlider.create(softSlider.value  as unknown as HTMLDivElementWithNoUiSlider, {
            start: 50,
            range: {
                min: 0,
                max: 100,
            },
            pips: {
                mode: 'values' as PipsMode,
                values: [20, 80],
                density: 4,
            } as any,
        });

        softSlider.value.noUiSlider?.on('change', (values: any, handle: any) => {
            const value = parseFloat(values[handle]);
            if (value < 20) {
                softSlider.value?.noUiSlider?.set(20);
            } else if (value > 80) {
                softSlider.value?.noUiSlider?.set(80);
            }
        });
    }
};

// Modal control
const closeModal = () => {
    if (props.setShowModuleValue) props.setShowModuleValue(false)
};

const proceed = () => {
    // Handle submission logic
    // alert(`Proceeding with withdrawal to ${bankName.value}, Account: ${accountNumber.value}`);
    setShowConfirmWithdrawValue(true)
    closeModal();
};

// Initialize slider when component mounts
onMounted(() => {
    initSlider();
});
</script>
<template>
    <div id="withdraw1Modal" class="modal " v-show="showModule">
        <div class=" modal-wrap modal-center">
            <div class="modal-header">
                <h6>Withdraw</h6>
                <button @click="closeModal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <p class="mb-3 text-gray-500 dark:text-dark-500">What amount would you like to withdraw?</p>
                <div class="p-3 mb-4 text-center bg-gray-100 rounded-md dark:bg-dark-850">
                    <h5>{{ withdrawalAmount }}</h5>
                </div>
                <div class="flex justify-center h-16">
                    <div id="soft-limit" ref="softSlider" class="w-full"></div>
                </div>
                <p class="mt-2 mb-3 text-gray-500 dark:text-dark-500">
                    Please input the account where you'd like to transfer the withdrawn amount.
                </p>
                <div class="mb-4">
                    <label for="bankNameInput" class="form-label">Bank Name</label>
                    <input type="text" id="bankNameInput" v-model="bankName" class="form-input" placeholder="Bank name"
                        required />
                </div>
                <div class="mb-5">
                    <label for="accountNumberInput" class="form-label">Account Number</label>
                    <input type="text" id="accountNumberInput" v-model="accountNumber" class="form-input"
                        placeholder="0000 0000 00000 000" required />
                </div>
                <div>
                    <button @click="proceed" class="w-full btn btn-green">Proceed</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>

    <WithdrawConfirm :showModule="showConfirmWithdraw" :setModuleValue="setShowConfirmWithdrawValue" />
</template>
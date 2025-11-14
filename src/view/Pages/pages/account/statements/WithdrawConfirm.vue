<script setup lang="ts">
import { ArrowDownToLine, CircleCheckBig, Landmark, X } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
})

const isSuccessWithdrawModalOpen = ref(false);
// Withdrawal details (example data, can be replaced dynamically)
const withdrawalDetails = ref({
    amount: '$5,879',
    bankName: 'Bank Of New',
    accountNumber: '24516 8792 335 41',
});
const transferDetails = ref({
    amount: '$5,879',
});
// Functions to handle modal actions
const closeWithdraw2Modal = () => {
    if (props.setModuleValue) props.setModuleValue(false)
};

const confirmWithdrawal = () => {
    // Handle withdrawal confirmation logic here
    // alert('Withdrawal confirmed!');
    isSuccessWithdrawModalOpen.value = true
    closeWithdraw2Modal();
};

const cancelWithdrawal = () => {
    closeWithdraw2Modal();
};
const closeSuccessWithdrawModal = () => {
    isSuccessWithdrawModalOpen.value = false;
};
// Functions to handle modal actions

const viewAccount = () => {
    // closeSuccessWithdrawModal();
};
</script>
<template>
    <div id="withdraw2Modal" class="modal" v-show="showModule">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Confirm Withdraw</h6>
                <button @click="closeWithdraw2Modal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="mb-5 text-center">
                    <div class="flex items-center justify-center mx-auto size-12">
                        <ArrowDownToLine class="text-sky-500 fill-sky-500/10"></ArrowDownToLine>
                    </div>
                    <p class="text-gray-500 dark:text-dark-500">
                        Are you sure you want to make this withdrawal?
                    </p>
                </div>
                <div class="p-3 mb-5 bg-gray-100 rounded-md dark:bg-dark-850">
                    <div class="grid items-center grid-cols-12 gap-6">
                        <div class="col-span-4">
                            <p>Withdrawal</p>
                        </div>
                        <div class="col-span-8">
                            <h5>{{ withdrawalDetails.amount }}</h5>
                        </div>
                        <div class="col-span-4">
                            <p>To</p>
                        </div>
                        <div class="col-span-8">
                            <div class="flex items-center gap-2">
                                <div class="shrink-0">
                                    <Landmark data-lucide="landmark" class="text-gray-500 fill-gray-500/20"></Landmark>
                                </div>
                                <div class="grow">
                                    <h6>{{ withdrawalDetails.bankName }}</h6>
                                    <p class="text-sm text-gray-500 dark:text-dark-500">
                                        {{ withdrawalDetails.accountNumber }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <button @click="confirmWithdrawal" class="w-full btn btn-primary">
                        Withdraw
                    </button>
                    <button @click="cancelWithdrawal" class="w-full btn btn-active-red">
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>


    <div id="successWithdrawModal" class="modal" v-show="isSuccessWithdrawModalOpen">
        <div class="modal-wrap modal-center">
            <div class="p-8 modal-content">
                <div class="mb-5 text-center">
                    <button @click="closeSuccessWithdrawModal" class="link float-end link-red">
                        <X data-lucide="x" class="size-5"></X>
                    </button>
                    <div class="flex items-center justify-center mx-auto size-20">
                        <CircleCheckBig class="text-green-500 size-10 fill-green-500/10">
                        </CircleCheckBig>
                    </div>
                    <h6 class="mt-3 mb-1">Transfer Successful</h6>
                    <p class="text-gray-500 dark:text-dark-500">
                        You've transferred <b>{{ transferDetails.amount }}</b> to your bank account.
                    </p>
                </div>
                <div class="flex flex-col gap-2">
                    <button @click="viewAccount" type="submit" class="w-full btn btn-primary">
                        View Account
                    </button>
                    <button @click="closeSuccessWithdrawModal" type="button" class="w-full btn btn-active-red">
                        Close
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>

</template>
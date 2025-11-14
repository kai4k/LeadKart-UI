<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { MoveLeft, MoveRight, PartyPopper, UserRoundPlus } from 'lucide-vue-next';
import VueTheMask from 'vue-the-mask'
import { ref, watch } from "vue";
// Tab state
const activeTab = ref("card");
// Card payment form fields
const cardName = ref("");
const cardNumber = ref("");
const expiryDate = ref("");
const cvv = ref("");
let errors = ref<any>({});

// Bank transfer form fields
const bankHolderName = ref("");
const accountNumber = ref("");
const confirmAccountNumber = ref("");
const ifscCode = ref("");
const bankName = ref("");

// Validate Card Form
const validateCardForm = () => {
    errors.value = {};
    validateInput("cardName");
    validateInput("cardNumber");
    validateInput("expiryDate");
    validateInput("cvv");
    if (Object.keys(errors.value).length === 0) {
        // If no errors, show the modal
        showModal();
        cardName.value = "";
        cardNumber.value = "";
        expiryDate.value = "";
        cvv.value = "";
    }

};

// Validate Bank Form
const validateBankForm = () => {
    errors.value = {};
    validateInput("bankHolderName");
    validateInput("accountNumber");
    validateInput("confirmAccountNumber");
    validateInput("ifscCode");
    validateInput("bankName");
    if (Object.keys(errors.value).length === 0) {
        // If no errors, show the modal
        showModal();
        bankHolderName.value = "";
        accountNumber.value = "";
        confirmAccountNumber.value = "";
        ifscCode.value = "";
        bankName.value = "";
    }
};


// General Input Validation
const validateInput = (field: string) => {
    if (field === "cardName" && !cardName.value) {
        errors.value.cardName = "Card Holder Name is required.";
    }

    if (field === "cardNumber") {
        const cardNumberPattern = /^\d{4}(?: \d{4}){3}$/;
        if (!cardNumber.value) {
            errors.value.cardNumber = "Card Number is required.";
        } else if (!cardNumberPattern.test(cardNumber.value)) {
            errors.value.cardNumber = "Card Number format is invalid.";
        }
    }

    if (field === "expiryDate" && !expiryDate.value) {
        errors.value.expiryDate = "Expiry Date is required.";
    }

    if (field === "cvv" && !cvv.value) {
        errors.value.cvv = "CVV is required.";
    }

    if (field === "bankHolderName" && !bankHolderName.value) {
        errors.value.bankHolderName = "Bank Holder Name is required.";
    }

    if (field === "accountNumber" && !accountNumber.value) {
        errors.value.accountNumber = "Account Number is required.";
    }

    if (field === "confirmAccountNumber" && confirmAccountNumber.value !== accountNumber.value) {
        errors.value.confirmAccountNumber = "Account Numbers do not match.";
    }

    if (field === "ifscCode" && !ifscCode.value) {
        errors.value.ifscCode = "IFSC Code is required.";
    }

    if (field === "bankName" && !bankName.value) {
        errors.value.bankName = "Bank Name is required.";
    }
};

// Modal visibility state
const isModalVisible = ref(false);
const showModal = () => {
    isModalVisible.value = true;
};

// Function to hide the modal
const hideModal = () => {
    isModalVisible.value = false;
};
</script>
<template>
    <PageHeading title="Payment" sub-title="Ecommerce" />
    <div class="grid grid-cols-12 gap-x-5">
        <div class="col-span-12 xl:col-span-8">
            <div class="mb-5 alert alert-green">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex items-center justify-center bg-white rounded-full dark:bg-dark-900 shrink-0 size-14">
                        <UserRoundPlus data-lucide="user-round-plus" class="text-green-500 fill-green-500/10">
                        </UserRoundPlus>
                    </div>
                    <div class="grow">
                        <h6 class="mb-2 text-gray-800 dark:text-dark-50">Invite your friend now by referral code!!</h6>
                        <p class="text-gray-500 dark:text-dark-500">Maximize your rewards by sharing your unique
                            referral code for exclusive benefits!</p>
                    </div>
                    <div class="shrink-0">
                        <button class="btn btn-green">
                            <UserRoundPlus data-lucide="user-round-plus" class="inline-block ltr:mr-1 rtl:ml-1 size-4">
                            </UserRoundPlus> <span class="align-center">Invite
                                Now</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div>
                        <!-- Tab Switcher -->
                        <div class="grid grid-cols-12 gap-5 mb-5">
                            <div class="col-span-12 md:col-span-6 xl:col-span-4">
                                <div @click="activeTab = 'card'" :class="{ 'bg-gray-100 dark:bg-dark-850': activeTab === 'card' }" class="flex items-center gap-3 p-4 border border-gray-200 rounded-md cursor-pointer dark:border-dark-800">
                                    <img src="@/assets/images/payment/visa.png" alt="" class="h-6" />
                                    <h6>Debit / Credit Card</h6>
                                </div>
                            </div>
                            <div class="col-span-12 md:col-span-6 xl:col-span-4">
                                <div @click="activeTab = 'bank'" :class="{ 'bg-gray-100 dark:bg-dark-850': activeTab === 'bank' }" class="flex items-center gap-3 p-4 border border-gray-200 rounded-md cursor-pointer dark:border-dark-800">
                                    <img src="@/assets/images/payment/bank.png" alt="" class="h-6" />
                                    <h6>Bank Transfer</h6>
                                </div>
                            </div>
                        </div>

                        <!-- Debit/Credit Card Form -->
                        <div v-if="activeTab === 'card'">
                            <h6 class="mb-3">Debit / Credit Card</h6>
                            <form @submit.prevent="validateCardForm">
                                <div class="grid grid-cols-12 gap-5">
                                    <div class="col-span-12">
                                        <label for="cardName" class="form-label">Card Holder Name</label>
                                        <input type="text" id="cardName" v-model="cardName" class="form-input" placeholder="Enter full name" />
                                        <span v-if="errors.cardName" class="text-sm text-red-500">{{ errors.cardName
                                        }}</span>
                                    </div>

                                    <div class="col-span-12">
                                        <label for="debitCreditNumber" class="form-label">Debit / Credit Card
                                            Number</label>
                                        <!-- <input type="text" id="debitCreditNumber" v-model="cardNumber"
                                            @input="validateInput('cardNumber')" class="form-input"
                                            placeholder="0000 0000 0000 0000" maxlength="19" /> -->
                                        <input v-mask="'#### #### #### ####'" v-model="cardNumber" class="form-input" placeholder="0000 0000 0000 0000" />
                                        <span v-if="errors.cardNumber" class="text-sm text-red-500">{{ errors.cardNumber
                                        }}</span>
                                    </div>

                                    <div class="col-span-12 md:col-span-6">
                                        <label for="expiryDate" class="form-label">Expiry Date</label>
                                        <!-- <input type="text" id="expiryDate" v-model="expiryDate"
                                            @input="validateInput('expiryDate')" class="form-input" placeholder="MM-YY"
                                            maxlength="5" /> -->
                                        <input v-mask="'##-##'" v-model="expiryDate" class="form-input" placeholder="MM-YY" />
                                        <span v-if="errors.expiryDate" class="text-sm text-red-500">{{ errors.expiryDate
                                        }}</span>
                                    </div>

                                    <div class="col-span-12 md:col-span-6">
                                        <label for="cvv" class="form-label">CVV</label>
                                        <!-- <input type="text" id="cvv" v-model="cvv" @input="validateInput('cvv')"
                                            class="form-input" placeholder="000" maxlength="3" /> -->
                                        <input v-mask="'###'" v-model="cvv" class="form-input" placeholder="000" />
                                        <span v-if="errors.cvv" class="text-sm text-red-500">{{ errors.cvv }}</span>
                                    </div>

                                    <div class="col-span-12">
                                        <div class="input-check-group">
                                            <input id="checkboxBasic1" class="input-check input-check-primary" type="checkbox" />
                                            <label for="checkboxBasic1" class="input-check-label">Save my card for
                                                future</label>
                                        </div>
                                    </div>

                                    <div class="col-span-12 ltr:text-right rtl:text-left">
                                        <button type="submit" class="btn btn-primary">
                                            Pay Now
                                            <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                                            <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4"></MoveLeft>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- Bank Transfer Form -->
                        <div v-if="activeTab === 'bank'">
                            <h6 class="mb-3">Bank Transfer</h6>
                            <form @submit.prevent="validateBankForm">
                                <div class="grid grid-cols-12 gap-5">
                                    <div class="col-span-12">
                                        <label for="bankHolderName" class="form-label">Bank Holder Name</label>
                                        <input type="text" id="bankHolderName" v-model="bankHolderName" @input="validateInput('bankHolderName')" class="form-input" placeholder="Enter full name" />
                                        <span v-if="errors.bankHolderName" class="text-sm text-red-500">{{
                                            errors.bankHolderName }}</span>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="accountNumber" class="form-label">Account Number</label>
                                        <input type="number" id="accountNumber" v-model="accountNumber" @input="validateInput('accountNumber')" class="form-input" placeholder="Enter account number" maxlength="12" />
                                        <span v-if="errors.accountNumber" class="text-sm text-red-500">{{
                                            errors.accountNumber }}</span>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="confirmAccountNumber" class="form-label">Confirm Account
                                            Number</label>
                                        <input type="number" id="confirmAccountNumber" v-model="confirmAccountNumber" @input="validateInput('confirmAccountNumber')" class="form-input" placeholder="Enter confirm account number" maxlength="12" />
                                        <span v-if="errors.confirmAccountNumber" class="text-sm text-red-500">{{
                                            errors.confirmAccountNumber }}</span>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="ifscCode" class="form-label">IFSC Code</label>
                                        <input type="text" id="ifscCode" v-model="ifscCode" @input="validateInput('ifscCode')" class="form-input" placeholder="IFSC Code" maxlength="11" />
                                        <span v-if="errors.ifscCode" class="text-sm text-red-500">{{ errors.ifscCode
                                        }}</span>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="bankName" class="form-label">Bank Name</label>
                                        <input type="text" id="bankName" v-model="bankName" @input="validateInput('bankName')" class="form-input" placeholder="Bank name" />
                                        <span v-if="errors.bankName" class="text-sm text-red-500">{{ errors.bankName
                                        }}</span>
                                    </div>

                                    <div class="col-span-12 ltr:text-right rtl:text-left">
                                        <button type="submit" class="btn btn-primary">
                                            Pay Now
                                            <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                                            <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4"></MoveLeft>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Order Summary</h6>
                </div>
                <div class="card-body">
                    <table class="table table-sm flush">
                        <tbody>
                            <tr>
                                <th class="!border-0">Sub Amount</th>
                                <td>$316.89</td>
                            </tr>
                            <tr>
                                <th class="!border-0">Vat Amount (6%)</th>
                                <td>$19.19</td>
                            </tr>
                            <tr>
                                <th class="!border-0">Discount (10%)</th>
                                <td>-$31.98</td>
                            </tr>
                            <tr>
                                <th class="!border-0">Shipping Charge</th>
                                <td>$35.00</td>
                            </tr>
                            <tr class="border-t border-gray-200 dark:border-dark-800">
                                <th class="!border-0">Total Amount</th>
                                <td>
                                    <div class="py-1.5"> $339.10</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="my-4">
                        <button class="w-full btn btn-primary">Pay $339.10</button>
                    </div>
                    <p class="text-center text-gray-500 dark:text-dark-500">100% Money back guarantee</p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isModalVisible" class="modal">
        <div class="modal-wrap modal-sm modal-center">
            <div class="text-center modal-content p-8 bg-[url('../images/others/payment-modal.png')] bg-cover bg-center">
                <div class="flex items-center justify-center mx-auto mt-20 mb-4 text-green-500 rounded-full bg-green-500/10 size-14 backdrop-blur-xl">
                    <PartyPopper class="size-6"></PartyPopper>
                </div>
                <h5 class="mb-1">Thank you for your purchase.</h5>
                <p class="mb-4 text-gray-500 dark:text-dark-500">Your payment has been processed successfully!</p>
                <div class="flex items-center justify-center gap-2">
                    <a href="apps-ecommerce-products-list" class="btn btn-green">Continue Shopping!</a>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="hideModal"></div>
    </div>
</template>
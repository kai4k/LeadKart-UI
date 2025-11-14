<script setup lang="ts">
import { CirclePlus, Pencil, X } from 'lucide-vue-next';
import { ref } from 'vue';

// Define payment methods data
const paymentMethods = ref([
    {
        id: 1,
        number: 'xxxx xxxx xxx 1547',
        expiry: '01/2030',
        image: new URL('@/assets/images/payment/visa.png', import.meta.url).href,
        bgColorStart: 'primary-500/10',
        bgColorMid: 'red-500/5',
    },
    {
        id: 2,
        number: 'xxxx xxxx xxx 8749',
        expiry: '24/2030',
        image: new URL('@/assets/images/payment/american.png', import.meta.url).href,
        bgColorStart: 'primary-500/10',
        bgColorMid: 'red-500/5',
    },
    {
        id: 3,
        number: 'xxxx xxxx xxx 3641',
        expiry: '13/2028',
        image: new URL('@/assets/images/payment/mastercard.png', import.meta.url).href,
        bgColorStart: 'primary-500/10',
        bgColorMid: 'red-500/5',
    }
]);

// Define the default card
const defaultCard = ref<number | null>(0);

// Function to toggle default card
const toggleDefaultCard = (index: number) => {
    defaultCard.value = defaultCard.value === index ? null : index;
};

const isModalVisible = ref(false);

// Form data structure for the card
const form = ref({
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    nameOnCard: '',
    isDefault: false
});

// Function to handle form submission
const handleSubmit = () => {
    closeModal();
};

// Function to close the modal
const closeModal = () => {
    isModalVisible.value = false;
};
</script>
<template>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Payment Methods</h6>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <!-- Loop through payment methods -->
                <div v-for="(card, index) in paymentMethods" :key="card.id" class="mb-0 card">
                    <div :class="`card-body bg-gradient-to-b from-primary-500/10 via-red-500/5 backdrop-lg`">
                        <img :src="card.image" alt="" class="h-10" />
                    </div>
                    <div class="pt-0 card-body">
                        <div class="flex items-center">
                            <div class="grow">
                                <h6 class="mb-1">{{ card.number }}</h6>
                                <p class="text-gray-500 dark:text-dark-500">Expiry on {{ card.expiry }}</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 mt-5">
                            <a href="#!" class="link link-green" :class="{ '!text-green-500': defaultCard === index }"
                                @click.prevent="toggleDefaultCard(index)">
                                <span>{{ defaultCard === index ? 'Default Set' : 'Set as Default' }}</span>
                            </a>
                            <a href="#!" data-modal-target="addCardPaymentModal" class="link link-primary">
                                <Pencil class="inline-block size-4"></Pencil> Edit
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Add Card Button -->
                <a href="#!" title="add" data-modal-target="addCardPaymentModal"
                    class="flex items-center justify-center mb-0 border-dashed card">
                    <div class="card-body">
                        <div class="flex items-center justify-center">
                            <CirclePlus class="text-green-500 stroke-1 size-10 fill-green-500/10"></CirclePlus>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div v-if="isModalVisible" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Add Card</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <label for="cardNumberInput" class="form-label">Card Number</label>
                            <input type="text" id="cardNumberInput" v-model="form.cardNumber" class="form-input"
                                placeholder="0000 0000 0000 0000" required />
                        </div>
                        <div class="col-span-12 lg:col-span-3">
                            <label for="cvvInput" class="form-label">CVV</label>
                            <input type="text" id="cvvInput" v-model="form.cvv" class="form-input" placeholder="000"
                                required />
                        </div>
                        <div class="col-span-12 lg:col-span-3">
                            <label for="expiryDateInput" class="form-label">Expiry Date</label>
                            <input type="text" id="expiryDateInput" v-model="form.expiryDate" class="form-input"
                                placeholder="MM/YYYY" required />
                        </div>
                        <div class="col-span-12 lg:col-span-6">
                            <label for="nameOnTheCardInput" class="form-label">Name on the Card</label>
                            <input type="text" id="nameOnTheCardInput" v-model="form.nameOnCard" class="form-input"
                                placeholder="Enter name" required />
                        </div>
                        <div class="col-span-12">
                            <div class="items-start input-check-group">
                                <input id="checkboxBasic1" v-model="form.isDefault"
                                    class="mt-0.5 input-check input-check-primary shrink-0" type="checkbox" />
                                <label for="checkboxBasic1" class="input-check-label grow">
                                    <span class="block mb-1.5 font-medium">Set as Default</span>
                                    <span class="block text-gray-500 dark:text-dark-500">
                                        Scheduled payment will be automatically deducted from this card.
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="col-span-12">
                            <div class="flex items-center justify-end gap-2">
                                <button @click="closeModal" class="btn btn-active-red">Cancel</button>
                                <button type="submit" class="btn btn-primary">Add Card</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>
</template>
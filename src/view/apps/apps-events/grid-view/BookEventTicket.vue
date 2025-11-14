<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, reactive, computed, watch } from 'vue';
import type { TicketEvent } from './grid-data';
import eventImg7 from "@/assets/images/event/img-07.jpg";
import user50 from "@/assets/images/avatar/user-50.png";
import user55 from "@/assets/images/avatar/user-55.png";
import user60 from "@/assets/images/avatar/user-60.png";

const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function,
    getData: Object,
})

interface Contributor {
    image: string;
}

// const isModalVisible = ref(false);
const fullName = ref('');
const totalTickets = ref(0);
const pricePerTicket = ref(499);
const totalAmount = computed(() => totalTickets.value * pricePerTicket.value);

let selectedItems = reactive<TicketEvent | any>({
    name: 'Tech Innovations Summit',
    username: 'Declan Grieve',
    price: "$499.00",
    date: '2024-05-19',
    time: '15:30',
    location: 'San Francisco, CA',
    image: user50,
    mainImage: eventImg7,
    contributors: [
        { image: user55 },
        { image: user60 },
    ],
    peopleSize: "1200",
    eventType: "Offline",
    status: "Expired",
});

watch(() => props.getData, (newData) => {
    if (newData) {
        selectedItems = newData
    }

})

function formatDateTime(date: string, time: string): string {
    return new Date(`${date}T${time}`).toLocaleString();
}

function formatDate(date: string): string {
    return new Date(date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
}

function getWeekday(date: string): string {
    return new Date(date).toLocaleDateString(undefined, { weekday: 'short' });
}

function calculatePrice() {
    // Computed property already handles totalAmount
}

function bookEvent() {
    if (!fullName.value || totalTickets.value <= 0) {
        alert('Please fill out all fields correctly.');
        return;
    }
    alert(`Event booked successfully for ${fullName.value}.`);
    closeModal();
}

function closeModal() {
    // isModalVisible.value = false;
    if (props.setShowModuleValue) props.setShowModuleValue(false)
}
</script>
<template>
    <div id="bookEventModal" v-show="showModule" class="modal">
        <div class="modal-wrap modal-center modal-lg">
            <div class="modal-header">
                <h6>{{ selectedItems.name }}</h6>
                <button @click="closeModal" class="link link-red ltr:float-end rtl:float-start">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="flex items-center gap-3 mb-4">
                    <img :src="selectedItems.image" alt="" class="rounded-full size-12 shrink-0" />
                    <div class="grow">
                        <h6 class="mb-1">
                            <a href="#!">{{ selectedItems.username }}</a>
                        </h6>
                        <p class="text-sm text-gray-500 dark:text-dark-500">
                            {{ formatDateTime(selectedItems.date, selectedItems.time) }}
                        </p>
                    </div>
                </div>
                <div class="mt-5">
                    <img :src="selectedItems.mainImage" alt="" class="object-cover w-full h-48 rounded-md" />
                </div>
                <div class="flex gap-3 mt-5">
                    <div>
                        <div
                            class="flex flex-col items-center justify-center mx-auto text-red-500 border rounded-md bg-red-500/15 border-red-500/20 size-16">
                            <p class="mb-0.5">{{ getWeekday(selectedItems.date) }}</p>
                            <h3 class="leading-none">{{ new Date(selectedItems.date).getDate() }}</h3>
                        </div>
                    </div>
                    <div>
                        <h6 class="mb-1">
                            <a href="#!" class="text-current link link-primary">{{ selectedItems.name }}</a>
                        </h6>
                        <p class="mb-2 text-gray-500 dark:text-dark-500">
                            {{ formatDate(selectedItems.date) }}
                            <span
                                class="ltr:pl-2 rtl:pr-2 ltr:ml-1.5 rtl:mr-1.5 ltr:border-l rtl:border-r border-gray-200 dark:border-dark-800">
                                {{ selectedItems.location }}
                            </span>
                        </p>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Contributors</p>
                        <div class="flex -space-x-3 grow rtl:space-x-reverse">
                            <template v-for="(contributor, index) in selectedItems.contributors" :key="index">
                                <a href="#!" class="transition duration-300 ease-linear hover:z-10">
                                    <img class="border-2 border-white rounded-full size-8 dark:border-dark-900"
                                        :src="contributor.image" alt="" />
                                </a>
                            </template>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="bookEvent">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <label for="fullNameInput" class="form-label">Full Name</label>
                            <input v-model="fullName" type="text" id="fullNameInput" class="form-input"
                                placeholder="Enter full name" />
                        </div>
                        <div class="col-span-6">
                            <label for="totalTicketInput" class="form-label">Total Tickets</label>
                            <input v-model.number="totalTickets" type="number" id="totalTicketInput" class="form-input"
                                placeholder="0" @input="calculatePrice" />
                        </div>
                        <div class="col-span-6">
                            <label for="pricePerTicketInput" class="form-label">Price per Ticket</label>
                            <input v-model.number="pricePerTicket" type="number" id="pricePerTicketInput"
                                class="form-input" placeholder="$0.00" @input="calculatePrice" />
                        </div>
                        <div class="col-span-6">
                            <label for="totalAmountInput" class="form-label">Total Amount</label>
                            <input v-model="totalAmount" type="text" id="totalAmountInput" class="form-input"
                                placeholder="$0.00" readonly />
                        </div>
                        <div class="col-span-12 text-right">
                            <button type="submit" class="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
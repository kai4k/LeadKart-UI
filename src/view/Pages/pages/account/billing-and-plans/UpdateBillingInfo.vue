<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref } from 'vue';
const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
    moduleData: Object,
})
// const isModalVisible = ref(true);

// The form data structure
const form = ref({
    name: 'Sophia Mia',
    address: '3011 E Semoran Blvd, Apopka, Florida,',
    country: 'United States',  // You'll need a dynamic list of countries
    state: 'Florida',
    city: 'Apopka',
    zipCode: 32703,
    phoneNumber: '+(407) 774-3111',
    email: 'shopia@example.com'
});

// Function to handle form submission
const handleSubmit = () => {
    if (props.setModuleValue) props.setModuleValue(false, form.value)
};

// Function to close the modal
const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue(false)
};
</script>
<template>
    <div v-if="showModule" class="modal">
        <div class="modal-wrap modal-center modal-lg">
            <div class="modal-header">
                <h6>Billing Information</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <label for="namePersonalInput" class="form-label">Personal / Company Name</label>
                            <input type="text" id="namePersonalInput" v-model="form.name" class="form-input" placeholder="Enter your name" required />
                        </div>
                        <div class="col-span-12">
                            <label for="addressInput" class="form-label">Personal / Company Address</label>
                            <input type="text" id="addressInput" v-model="form.address" class="form-input" placeholder="Your address" required />
                        </div>
                        <div class="col-span-6">
                            <label for="sampleSelect" class="form-label">Country</label>
                            <select name="" id="" class="form-select">
                                <option value="">IND</option>
                                <option value="">USA</option>
                                <option value="">Åland Islands</option>
                                <option value="">Åland Islands</option>
                                <option value="">Zambia</option>
                                <option value="">Zimbabwe</option>
                            </select>
                        </div>
                        <div class="col-span-6">
                            <label for="stateInput" class="form-label">State</label>
                            <input type="text" id="stateInput" v-model="form.state" class="form-input" placeholder="Your state" required />
                        </div>
                        <div class="col-span-6">
                            <label for="cityInput" class="form-label">City</label>
                            <input type="text" id="cityInput" v-model="form.city" class="form-input" placeholder="Your city" required />
                        </div>
                        <div class="col-span-6">
                            <label for="zipCodeInput" class="form-label">Zip Code</label>
                            <input type="number" id="zipCodeInput" v-model="form.zipCode" class="form-input" placeholder="Zip code" required />
                        </div>
                        <div class="col-span-6">
                            <label for="phoneNumberInput" class="form-label">Phone Number</label>
                            <input type="tel" id="phoneNumberInput" v-model="form.phoneNumber" class="form-input" placeholder="Enter your phone number" required />
                        </div>
                        <div class="col-span-6">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input type="email" id="emailInput" v-model="form.email" class="form-input" placeholder="Enter your email" required />
                        </div>
                        <div class="col-span-12">
                            <div class="flex items-center justify-end gap-2">
                                <button @click="closeModal" class="btn btn-active-red">Cancel</button>
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>
</template>
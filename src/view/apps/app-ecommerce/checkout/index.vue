<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { addresses, products } from './checkout-data';
import { computed, ref } from 'vue';
import { Pencil, ShieldCheck, Trash2 } from 'lucide-vue-next';
import type { Address, Product } from './checkout-data';
const showAddAddressForm = ref(false);
const showEditAddressForm = ref(false);
const errors = ref<Error | any>({});
const selected = ref<Address | null>(null);

const addressForm = ref({
    type: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zip: ''
});

const handleModalInsertUpdate = (modal: string) => {
    if (modal === 'showAddAddressForm') {
        showAddAddressForm.value = true;
        showEditAddressForm.value = false;
        selected.value = null;
        resetForm();
    } else {
        showEditAddressForm.value = true;
        showAddAddressForm.value = false;
    }
};

const editAddress = (item: Address) => {
    handleModalInsertUpdate('showEditAddressForm');
    addressForm.value = { ...item };
};

const updateAddress = () => {
    const index = addresses.value.findIndex(
        (address: Address) => address.firstName === addressForm.value.firstName
    );
    selectAddress(addresses.value[index]);
    addresses.value[index] = { ...addressForm.value };
};

const addAddress = () => {
    addresses.value.unshift({ ...addressForm.value });
    selectAddress(addresses.value[0]);
    showAddAddressForm.value = false;
};

const resetForm = () => {
    errors.value = {};
    addressForm.value = {
        type: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        zip: ''
    };
};

const deleteAddress = (address: Address) => {
    const index = addresses.value.indexOf(address);
    if (index !== -1) {
        addresses.value.splice(index, 1);
    }
    showEditAddressForm.value = false;
};

const validateForm = () => {
    errors.value = {};
    validateField('firstName', addressForm.value.firstName, 'First name is required.');
    validateField('lastName', addressForm.value.lastName, 'Last name is required.');
    validatePhone();
    validateField('address', addressForm.value.address, 'Address is required.');
    validateField('city', addressForm.value.city, 'City is required.');
    validateField('country', addressForm.value.country, 'Country is required.');
    validateField('zip', addressForm.value.zip, 'Zip code is required.');
    validateField('type', addressForm.value.type, 'Address type is required.');
    return Object.keys(errors.value).length === 0;
};

const validatePhone = () => {
    const phonePattern = /^[0-9]+$/;
    if (!addressForm.value.phone) {
        errors.value.phone = 'Phone number is required.';
    } else if (!phonePattern.test(addressForm.value.phone)) {
        errors.value.phone = 'Phone number must be numeric.';
    } else {
        delete errors.value.phone;
    }
};

const validateField = (fieldName: string, fieldValue: string, errorMessage: string) => {
    if (!fieldValue) errors.value[fieldName] = errorMessage;
    else delete errors.value[fieldName];
};

const submitForm = () => {
    if (validateForm()) {
        if (showAddAddressForm.value) addAddress();
        else updateAddress();
        resetForm();
        showEditAddressForm.value = false;
        showAddAddressForm.value = false;
    }
};

const selectAddress = (address: Address) => {
    selected.value = address;
};

// Other state variables
const discountCode = ref('');
const shippingCharge = 35.00;
const vatRate = 0.06;
const discountRate = 0.10;

// Computed properties for calculations
const subtotal = computed(() => {
    return products.value.reduce(
        (sum, item) => sum + (item.price * item.qty * (1 - item.discount)),
        0
    );
});

const vat = computed(() => {
    return subtotal.value * vatRate;
});

const discount = computed(() => {
    return discountCode.value ? subtotal.value * discountRate : 0;
});

const total = computed(() => {
    return subtotal.value + vat.value + shippingCharge - discount.value;
});

// Method to remove a product from the cart
const removeProduct = (product: Product) => {
    const index = products.value.indexOf(product);
    if (index !== -1) {
        products.value.splice(index, 1);
    }
};

</script>
<template>
    <PageHeading title="Checkout" sub-title="Ecommerce" />
    <div class="grid grid-cols-12 gap-space">
        <div class="col-span-12 2xl:col-span-8">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Personal Details</h6>
                </div>
                <div class="card-body">
                    <div>
                        <template v-for="(address, index) in addresses" :key="index">
                            <div class="card">
                                <div class="card-body">
                                    <div class="flex items-center gap-2 float-end">
                                        <a href="#!" class="font-medium link link-primary" @click="editAddress(address)">
                                            <Pencil class="inline-block size-4" /> <span class="align-center">Edit</span>
                                        </a>
                                        <a href="#!" class="font-medium link link-primary" @click="deleteAddress(address)">
                                            <Trash2 class="inline-block size-4" /> <span class="align-center">Delete</span>
                                        </a>
                                    </div>
                                    <span class="badge badge-purple">{{ address.type }}</span>
                                    <h6 class="mt-2 mb-1">{{ address.firstName + ' ' + address.lastName + ' - ' +
                                        address.phone }}</h6>
                                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                                        {{ address.address + ', ' + address.city + ', ' + address.country + ' - ' +
                                            address.zip }}
                                    </p>
                                    <button @click="selectAddress(address)" :class="selected === address ? 'btn btn-primary' : 'btn btn-sub-gray'">
                                        <span>{{ selected === address ? 'Selected Address' : 'Select Here' }}</span>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div>
                        <div class="text-right">
                            <button @click="handleModalInsertUpdate('showAddAddressForm')" class="btn btn-green">
                                Add a New Address
                            </button>
                        </div>

                        <div v-show="showAddAddressForm || showEditAddressForm" class="mt-3">
                            <h6 class="mb-2">{{ showAddAddressForm ? 'Add a New Address' : 'Edit Address' }}</h6>

                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 md:col-span-6">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" id="firstName" class="form-input" placeholder="Enter first name" v-model="addressForm.firstName" @input="validateField('firstName', addressForm.firstName, 'First name is required.')">
                                    <span v-if="errors.firstName" class="text-red-500">{{ errors.firstName }}</span>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" id="lastName" class="form-input" placeholder="Enter last name" v-model="addressForm.lastName" @input="validateField('lastName', addressForm.lastName, 'Last name is required.')">
                                    <span v-if="errors.lastName" class="text-red-500">{{ errors.lastName }}</span>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="phoneNumber" class="form-label">Phone Number</label>
                                    <input type="number" id="phoneNumber" class="form-input" placeholder="000 000 0000" v-model="addressForm.phone" @input="validatePhone">
                                    <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="alternatePhoneNumber" class="form-label">Alternate Phone Number
                                        (Optional)</label>
                                    <input type="number" id="alternatePhoneNumber" class="form-input" placeholder="000 000 0000">
                                </div>
                                <div class="col-span-12">
                                    <label for="textareaInput2" class="form-label">Address (Area and Street)</label>
                                    <textarea id="textareaInput2" rows="3" class="h-auto form-input" placeholder="Area and Street" v-model="addressForm.address" @input="validateField('address', addressForm.address, 'Address is required.')"></textarea>
                                    <span v-if="errors.address" class="text-red-500">{{ errors.address }}</span>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <label for="cityDistrictTownInput" class="form-label">City/District/Town</label>
                                    <input type="text" id="cityDistrictTownInput" class="form-input" placeholder="Enter city name" v-model="addressForm.city" @input="validateField('city', addressForm.city, 'City is required.')">
                                    <span v-if="errors.city" class="text-red-500">{{ errors.city }}</span>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <label for="conutryNameInput" class="form-label">Country Name</label>
                                    <input type="text" id="conutryNameInput" class="form-input" placeholder="Enter country" v-model="addressForm.country" @input="validateField('country', addressForm.country, 'Country is required.')">
                                    <span v-if="errors.country" class="text-red-500">{{ errors.country }}</span>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <label for="zipCodeInput" class="form-label">Zip Code</label>
                                    <input type="text" id="zipCodeInput" class="form-input" placeholder="Enter zip code" v-model="addressForm.zip" @input="validateField('zip', addressForm.zip, 'Zip code is required.')">
                                    <span v-if="errors.zip" class="text-red-500">{{ errors.zip }}</span>
                                </div>
                                <div class="col-span-12">
                                    <h6 class="mb-2">Address Type</h6>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-space">
                                        <div>
                                            <div class="input-radio-group">
                                                <input id="homeRadio" class="input-radio input-radio-primary" name="addressType" type="radio" value="Home" v-model="addressForm.type" />
                                                <label for="homeRadio" class="input-radio-label">Home (All day
                                                    delivery)</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="input-radio-group">
                                                <input id="workRadio" class="input-radio input-radio-primary" name="addressType" type="radio" value="Work" v-model="addressForm.type" />
                                                <label for="workRadio" class="input-radio-label">Work (Delivery between
                                                    10 AM - 5
                                                    PM)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex flex-wrap justify-end gap-2">
                                        <button type="button" class="btn btn-active-red" @click="showAddAddressForm = false; showEditAddressForm = false">Cancel</button>
                                        <button @click="submitForm" class="btn btn-primary">Save and Deliver
                                            Here</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 2xl:col-span-4">
            <div class="sticky mb-5 top-24">
                <div class="card">
                    <div class="card-header">
                        <h6 class="card-title">Order Summary</h6>
                    </div>
                    <div class="card-body">
                        <div v-for="product in products" :key="product.id" class="mb-3">
                            <button class="float-end" @click="removeProduct(product)">
                                <i class="link size-4 link-red ri-close-line"></i>
                            </button>
                            <div class="flex flex-col gap-3 md:flex-row">
                                <div class="flex items-center justify-center w-16 bg-gray-100 rounded-md dark:bg-dark-850">
                                    <img :src="product.image" alt="" />
                                </div>
                                <div>
                                    <h6 class="mb-1">{{ product.name }}</h6>
                                    <p class="flex items-center gap-2 mb-2 text-gray-500 divide-x divide-gray-200 dark:text-dark-500 dark:divide-dark-800">
                                        <span class="px-2 ltr:first:!pl-0 rtl:first:!pr-0">
                                            {{ product.qty }} Qty
                                        </span>
                                        <span class="px-2 ltr:first:!pl-0 rtl:first:!pr-0">
                                            {{ product.color }}
                                        </span>
                                        <span class="">{{ product.size }}</span>
                                    </p>
                                    <h5>{{ product.price.toFixed(2) }}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="discountCode" class="form-label">Discount Code</label>
                            <input type="text" id="discountCode" class="form-input" placeholder="Enter coupon code" v-model="discountCode" />
                        </div>
                        <table class="table flush">
                            <tbody>
                                <tr>
                                    <th class="!border-0">Sub Amount</th>
                                    <td>${{ subtotal.toFixed(2) }}</td>
                                </tr>
                                <tr>
                                    <th class="!border-0">Vat Amount (6%)</th>
                                    <td>${{ vat.toFixed(2) }}</td>
                                </tr>
                                <tr>
                                    <th class="!border-0">Discount (10%)</th>
                                    <td>-${{ discount.toFixed(2) }}</td>
                                </tr>
                                <tr>
                                    <th class="!border-0">Shipping Charge</th>
                                    <td>${{ shippingCharge.toFixed(2) }}</td>
                                </tr>
                                <tr class="border-t border-gray-200 dark:border-dark-800">
                                    <th class="!border-0">Total Amount</th>
                                    <td>${{ total.toFixed(2) }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="my-4">
                            <RouterLink to="apps-ecommerce-payment" class="w-full btn btn-primary">Checkout Now
                            </RouterLink>
                        </div>
                        <p class="text-center text-gray-500 dark:text-dark-500">
                            By clicking the "checkout order" button, you agree to the terms of the public offers.
                        </p>
                    </div>
                </div>
                <div class="flex gap-4 mb-5">
                    <div class="flex items-center justify-center bg-gray-100 rounded-md size-12 shrink-0 dark:bg-dark-850">
                        <ShieldCheck class="text-gray-500 dark:text-dark-500 fill-gray-200 dark:fill-dark-850">
                        </ShieldCheck>
                    </div>
                    <div>
                        <h6 class="mb-1">Safe and Secure</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            Safe and Secure Payments. Easy returns. 100% Authentic products.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
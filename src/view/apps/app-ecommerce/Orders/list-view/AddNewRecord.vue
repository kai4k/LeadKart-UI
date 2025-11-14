<script setup lang="ts">
import { reactive, defineProps, watch } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import { products, type Product } from './over-list-data';

import { Minus, Plus, X } from 'lucide-vue-next';

const props = defineProps({
    showAddOrderForm: Boolean,
    setAddOrderFormValue: Function,
    getFormData: Object,
    showEditForm: Boolean,
    setEditFormValue: Function
});

let form = reactive<Product>({
    ordersID: '',
    ordersDate: '',
    deliveredDate: '',
    customersName: '',
    qty: 1,
    price: 100.0,
    total: 100.0,
    productName: '',
    payment: 'Unpaid',
    status: '',
});

watch(() => props.getFormData, (newData) => {
    if (newData) Object.assign(form, newData);
    else { resetForm() }
});

let errors = reactive<Record<string, string>>({});

const increaseQty = () => {
    form.qty++;
    updateTotal();
};

const decreaseQty = () => {
    if (form.qty > 1) {
        form.qty--;
        updateTotal();
    }
};

const updateTotal = () => {
    form.total = parseFloat((form.qty * form.price).toFixed(2));
};

const validateField = (fieldName: string, value: string | number, errorMessage: string) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
};

const validateForm = () => {
    errors.ordersDate = !form.ordersDate ? 'Order date is required.' : '';
    errors.deliveredDate = !form.deliveredDate ? 'Delivered date is required.' : '';
    errors.customersName = !form.customersName ? 'Full name is required.' : '';
    errors.price = !form.price ? 'Price is required.' : '';
    errors.productName = !form.productName ? 'Product name is required.' : '';
    errors.payment = !form.payment ? 'Payment is required.' : '';
    errors.status = !form.status ? 'Status is required.' : '';

    // Return whether the form is valid
    return Object.values(errors).every((error) => !error);
};

const addOrder = () => {
    form.ordersID = 14521 + products.value.length + 1;

    products.value.unshift({
        ...form,
        image: 'assets/images/products/img-25.png',
    });
};
const updateRow = () => {
    const findIndex = products.value.findIndex((product) => product.ordersID === form.ordersID);
    products.value.splice(findIndex, 1, { ...form })

}

const submitForm = () => {
    if (validateForm()) {
        if (props.showAddOrderForm) {
            addOrder()
        } else {
            updateRow()
        }

        resetForm();
        closeModal();
        document.body.classList.toggle('overflow-hidden', false);
    }
};

const resetForm = () => {
    Object.assign(form, {
        ordersID: '',
        ordersDate: '',
        deliveredDate: '',
        customersName: '',
        qty: 1,
        price: 100.0,
        total: 100.0,
        productName: '',
        payment: '',
        status: '',
    });
    Object.keys(errors).forEach((key) => delete errors[key]);
};

const closeModal = () => {
    if (props.setAddOrderFormValue) props.setAddOrderFormValue(false);
    if (props.setEditFormValue) props.setEditFormValue(false);
};

const productNameOptions = [
    { label: 'Denim Jacket', value: 'Denim Jacket' },
    { label: 'Leather Wallet', value: 'Leather Wallet' },
    { label: 'Wireless Headphones', value: 'Wireless Headphones' },
    { label: 'Sunglasses', value: 'Sunglasses' },
    { label: 'Backpack', value: 'Backpack' },
    { label: 'Winter Coat', value: 'Winter Coat' },
    { label: 'Handbag', value: 'Handbag' },
    { label: 'Sweater', value: 'Sweater' },
    { label: 'Sports Watch', value: 'Sports Watch' },
];
const paymentStatusOptions = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
    { label: 'COD', value: 'COD' },
];
const orderStatusOptions = [
    { label: 'New', value: 'New' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Shipping', value: 'Shipping' },
    { label: 'Delivered', value: 'Delivered' },
];

</script>
<template>
    <div id="addOrderModal" v-show="showAddOrderForm || showEditForm" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>{{ showAddOrderForm ? 'Add Order' : 'Edit Order' }}</h6>
                <button @click="closeModal" class="link link-red float-end">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-5">
                        <!-- Order ID -->
                        <div class="col-span-12">
                            <label for="orderIDInput" class="form-label">Order ID</label>
                            <!-- v-model="form?.ordersID" -->
                            <input type="text" id="orderIDInput" class="form-input" placeholder="Order ID"
                                v-model="form.ordersID" disabled />
                        </div>

                        <!-- Order Date -->
                        <div class="col-span-6">
                            <label for="orderDateInput" class="form-label">Order Date</label>
                            <flat-pickr type="text" placeholder="YYYY-MM-DD" id="orderDateInput" class="form-input"
                                v-model="form.ordersDate"
                                @blur="validateField('ordersDate', form.ordersDate, 'Order date is required.')" />
                            <span v-if="errors.ordersDate" class="text-red-500">{{ errors.ordersDate }}</span>
                        </div>

                        <!-- Delivered Date -->
                        <div class="col-span-6">
                            <label for="deliveredDateInput" class="form-label">Delivered Date</label>
                            <flat-pickr type="text" placeholder="YYYY-MM-DD" id="deliveredDateInput" class="form-input"
                                v-model="form.deliveredDate"
                                @blur="validateField('deliveredDate', form.deliveredDate, 'Delivered date is required.')" />
                            <span v-if="errors.deliveredDate" class="text-red-500">{{ errors.deliveredDate }}</span>
                        </div>

                        <!-- Customer Name -->
                        <div class="col-span-12">
                            <label for="customerNameInput" class="form-label">Customer Name</label>
                            <input type="text" id="customerNameInput" class="form-input" placeholder="Customer name"
                                v-model="form.customersName"
                                @blur="validateField('customersName', form.customersName, 'Full name is required.')" />
                            <span v-if="errors.customersName" class="text-red-500">{{ errors.customersName }}</span>
                        </div>

                        <!-- Quantity -->
                        <div class="col-span-6">
                            <label for="quantityInput" class="form-label">Quantity</label>
                            <div>
                                <div class="input-spin-group">
                                    <div @click="decreaseQty" class="input-spin-minus">
                                        <Minus class="size-4" data-lucide="minus"></Minus>
                                    </div>
                                    <input type="text" v-model="form.qty" class="input-spin form-input"
                                        id="quantityInput" readonly />
                                    <div @click="increaseQty" class="input-spin-plus">
                                        <Plus class="size-4" data-lucide="plus"></Plus>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Price -->
                        <div class="col-span-6">
                            <label for="priceInput" class="form-label">Product Amount</label>
                            <input type="number" class="form-input" v-model.number="form.price"
                                @blur="validateField('price', form.price, 'Price is required.')" @input="updateTotal" />
                            <span v-if="errors.price" class="text-red-500">{{ errors.price }}</span>
                        </div>

                        <!-- Total Price -->
                        <div class="col-span-12">
                            <label for="totalAmountInput" class="form-label">Total Price</label>
                            <input type="number" class="form-input" v-model.number="form.total" readonly />
                        </div>

                        <!-- Product Name -->
                        <div class="col-span-12">
                            <label for="productNameSelect" class="form-label">Products Name</label>
                            <select id="productNameSelect" class="form-select" v-model="form.productName">
                                <template v-for="(option, index) in productNameOptions" :key="index">
                                    <option :value="option.value">{{ option.label }}</option>
                                </template>
                            </select>
                            <span v-if="errors.productName" class="text-red-500">{{ errors.productName }}</span>
                        </div>

                        <!-- Payment Status -->
                        <div class="col-span-6">
                            <label for="paymentStatusSelect" class="form-label">Payment Status</label>

                            <select name="" id="" class="form-select" v-model="form.payment">
                                <template v-for="(option, index) in paymentStatusOptions" :key="index">
                                    <option :value="option.value">{{ option.label }}</option>
                                </template>
                            </select>
                            <span v-if="errors.payment" class="text-red-500">{{ errors.payment }}</span>
                        </div>

                        <!-- Order Status -->
                        <div class="col-span-6">
                            <label for="orderStatusSelect" class="form-label">Order Status</label>
                            <select name="" id="" class="form-select" v-model="form.status">
                                <template v-for="(option, index) in orderStatusOptions" :key="index">
                                    <option :value="option.value">{{ option.label }}</option>
                                </template>
                            </select>
                            <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                        </div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="flex justify-end gap-2 mt-5">
                        <button @click="closeModal" type="button" class="btn btn-active-red">Cancel</button>
                        <button class="btn btn-primary" type="submit">{{ showAddOrderForm ? 'Add Order' : 'Update Order'
                            }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>
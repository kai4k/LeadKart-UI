<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { reactive, ref, computed, watch } from 'vue';
import type { Product } from './over-list-data';
const props = defineProps({
    previewData: Object,
    showModule: Boolean,
    setModuleValue: Function,
})


// Reactive state for the selected order
let selectedOrder = reactive<Product>({
    ordersID: '',
    image: '',
    customersName: '',
    productName: '',
    ordersDate: '',
    deliveredDate: '',
    payment: 'Unpaid',
    status: 'New',
    qty: 0,
    total: 0,
    price: 0,
});


watch(() => props.previewData, (newData) => {
    if (newData) {
        selectedOrder = newData as Product;
    }
})

// Modal visibility state

// Computed classes for payment and status badges
const paymentBadgeClass = computed(() => {
    return {
        'badge badge-green': selectedOrder.payment === 'Paid',
        'badge badge-gray': selectedOrder.payment === 'COD',
        'badge badge-red': selectedOrder.payment === 'Unpaid',
    };
});

const statusBadgeClass = computed(() => {
    return {
        'badge badge-green': selectedOrder.status === 'Delivered',
        'badge badge-primary': selectedOrder.status === 'New',
        'badge badge-red': selectedOrder.status === 'Cancelled',
        'badge badge-purple': selectedOrder.status === 'Shipping',
        'badge badge-yellow': selectedOrder.status === 'Pending',
    };
});
const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue(false)
    // isModalVisible.value = false;
};

const editOrder = () => {
    // Trigger edit order logic
    closeModal();
};
</script>
<template>
    <div v-if="showModule" class="modal" id="overviewOrderModal">
        <div class="modal-wrap modal-center">
            <div class="modal-content">
                <button @click="closeModal" class="link link-red float-end">
                    <X data-lucide="x" class="size-5"></X>
                </button>

                <!-- Order Image -->
                <div class="p-2 border border-gray-200 border-dashed rounded-md dark:border-dark-800 size-24">
                    <img :src="selectedOrder.image" alt="" />
                </div>

                <!-- Order Details -->
                <h6 class="mt-4 mb-2">Order {{ selectedOrder.ordersID }}</h6>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Customers</p>
                        <h6>{{ selectedOrder.customersName }}</h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Items</p>
                        <h6>
                            <a href="#!" class="text-gray-800 link link-primary">
                                {{ selectedOrder.productName }}
                            </a>
                        </h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Order Date</p>
                        <h6>{{ selectedOrder.ordersDate }}</h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Delivered Date</p>
                        <h6>{{ selectedOrder.deliveredDate }}</h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Payment</p>
                        <span :class="paymentBadgeClass">{{ selectedOrder.payment }}</span>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Status</p>
                        <span :class="statusBadgeClass">{{ selectedOrder.status }}</span>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Product Quantity</p>
                        <h6>{{ selectedOrder.qty }}</h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Total Amount</p>
                        <h6>{{ selectedOrder.total }}</h6>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="flex justify-end gap-2 mt-5">
                    <button @click="closeModal" type="button" class="btn btn-active-red">Cancel</button>
                    <button @click="editOrder" type="button" class="btn btn-primary">Edit Order</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>
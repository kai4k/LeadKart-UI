<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { CircleArrowDown, Pencil } from 'lucide-vue-next';
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

// Define the reactive data for the order
const orderId = ref('PEO-14521');
const orderDate = ref('2024-09-01');
const paymentStatus = ref('Payment Pending');

// Computed property to format the order date (e.g., "01 Sep, 2024")
const formattedOrderDate = ref(new Date(orderDate.value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
}));

// Methods to handle button clicks
const downloadInvoice = () => {
    // Implement the download logic
};

const editOrder = () => {
    // Implement the edit order logic
};

// Reactive customer information data
const customer = ref({
    name: 'Isabella Thomas',
    email: 'isabella@example.com',
    phone: '+(245) 012 345 678',
    deliveryPlace: 'Home',
    paymentMethod: 'Online Payment',
    addressLine: '0588 Macey Ranch',
    city: 'Port Blake',
    country: 'New Mexico',
    pinCode: '96153-1460',
});
// Delivery Status
const deliveryStatus = ref('Shipping');


// Sample Product Data (Can be fetched from an API or passed as props)
const products = ref([
    {
        name: 'Blouse Ruffle Tube top',
        price: 14.99,
        quantity: 4,
        image: new URL('@/assets/images/products/img-01.png', import.meta.url).href,
        category: 'Fashion',
        size: 'XL',
        color: 'Sky Blue',
    },
    {
        name: 'Crop top Sweater Clothing',
        price: 29.49,
        quantity: 6,
        image: new URL('@/assets/images/products/img-04.png', import.meta.url).href,
        category: 'Fashion',
        size: 'M',
        color: 'Pink',
    },
    {
        name: 'Tote bag Leather Handbag Dolce',
        price: 79.99,
        quantity: 1,
        image: new URL('@/assets/images/products/img-08.png', import.meta.url).href,
        category: 'Bags',
        size: '',
        color: 'Red',
    },
]);

// Computed properties to calculate amounts
const subAmount = computed(() => {
    return products.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const vatAmount = computed(() => {
    return subAmount.value * 0.06; // 6% VAT
});

const discountAmount = computed(() => {
    return subAmount.value * 0.1; // 10% Discount
});

const shippingCharge = computed(() => {
    return 35; // Flat shipping charge
});

const totalAmount = computed(() => {
    return subAmount.value + vatAmount.value - discountAmount.value + shippingCharge.value;
});
const deliverySteps = ref([
    { label: 'Order Place', status: 'done' },
    { label: 'Pickup', status: 'done' },
    { label: 'Shipped', status: 'current' },  // Current step
    { label: 'Out of Delivery', status: 'pending' },
    { label: 'Delivered', status: 'pending' },
]);
</script>
<template>
    <PageHeading title="Overview" subTitle="Orders" />
    <div>
        <div class="card">
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-5">
                    <div class="grow">
                        <h6 class="mb-1">Order ID: {{ orderId }}</h6>
                        <p class="mb-3 text-gray-500 dark:text-dark-500">Order Date: {{ formattedOrderDate }}</p>
                        <span class="align-middle badge badge-red">{{ paymentStatus }}</span>
                    </div>
                    <div class="items-center gap-2 sm:flex shrink-0">
                        <button class="btn btn-primary btn-icon-overlay" @click="downloadInvoice">
                            <span class="icon">
                                <CircleArrowDown class="size-4" />
                            </span> Download
                            Invoice
                        </button>
                        <button class="mt-3 btn btn-sub-gray sm:mt-0" @click="editOrder">
                            <Pencil class="inline-block ltr:mr-1 rtl:ml-1 size-4" /> <span class="align-center">Edit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
                <!-- Customer Information Section -->
                <div class="space-y-2">
                    <p class="text-gray-500 dark:text-dark-500">Customer Name:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.name }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Email:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.email }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Phone No:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.phone }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Delivery Place:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.deliveryPlace }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Payment Method:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.paymentMethod }}</span>
                    </p>
                </div>

                <!-- Address and Delivery Information Section -->
                <div class="space-y-2">
                    <p class="text-gray-500 dark:text-dark-500">Address Line:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.addressLine }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">City:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.city }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Country:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.country }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Pin Code:
                        <span class="font-medium text-gray-800 dark:text-dark-50">{{ customer.pinCode }}</span>
                    </p>
                    <p class="text-gray-500 dark:text-dark-500">Delivery Status:
                        <span class="badge badge-purple">{{ deliveryStatus }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Product Items</h6>
        </div>
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table flush whitespace-nowrap">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Loop through product items -->
                        <tr v-for="(item, index) in products" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td class="whitespace-nowrap">
                                <div class="flex items-center gap-3">
                                    <div class="p-2 border border-gray-200 rounded-md dark:border-dark-800 shrink-0 size-16">
                                        <img :src="item.image" alt="Product Image" />
                                    </div>
                                    <div>
                                        <h6 class="mb-2">
                                            <a href="apps-ecommerce-overview" class="!text-current link link-primary">
                                                {{ item.name }}
                                            </a>
                                        </h6>
                                        <div class="text-sm *:px-2.5 divide-x divide-gray-200 dark:divide-dark-800 rtl:divide-x-reverse">
                                            <a href="apps-ecommerce-category" class="underline ltr:first:pl-0 rtl:first:pr-0">
                                                {{ item.category }}
                                            </a> <span v-if="item.size"> {{ item.size }} </span> <span> {{ item.color }} </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>${{ item.price }}</td>
                            <td>{{ item.quantity.toString().padStart(2, '0') }}</td>
                            <td>${{ (item.price * item.quantity) }}</td>
                        </tr>

                        <!-- Subtotal, VAT, Discount, Shipping, Total -->
                        <tr>
                            <td colspan="3"></td>
                            <td>Sub Amount</td>
                            <td>${{ subAmount }}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td>Vat Amount (6%)</td>
                            <td>${{ vatAmount.toFixed(2) }}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td>Discount (10%)</td>
                            <td>-${{ discountAmount.toFixed(2) }}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td>Shipping Charge</td>
                            <td>${{ shippingCharge.toFixed(2) }}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td>Total Amount</td>
                            <td>${{ totalAmount.toFixed(2) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="flex items-center gap-5 card-header">
            <h6 class="card-title grow">Delivery Status</h6>
            <RouterLink to="apps-ecommerce-orders-track" class="btn btn-sub-red">Track Order</RouterLink>
        </div>
        <div class="card-body">
            <div class="px-12 py-2">
                <!-- Timeline -->
                <div class="relative flex items-center justify-between lg:w-full horizontal timeline before:absolute before:block before:w-full before:h-[0.2em] before:bg-gray-200 dark:before:bg-dark-800">
                    <div class="relative flex items-center justify-between w-full ltr:pl-0 rtl:pr-0 steps before:!hidden after:!hidden">
                        <!-- Loop over each step in the deliveryStatus array -->
                        <div v-for="(step, index) in deliverySteps" :key="index" :class="[
                            'relative z-10 block p-1.5 mx-1 border-2 border-white dark:border-dark-900 rounded-full bg-gray-200 dark:bg-gray-800 [&.done]:bg-primary-500 bottom-1.5 ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 [&.current]:before:absolute [&.current]:before:bottom-0 ltr:[&.current]:before:left-0 rtl:[&.current]:before:right-0 [&.current]:before:w-3 [&.current]:before:h-3 [&.current]:before:-mt-1 ltr:[&.current]:before:-mr-1 rtl:[&.current]:before:-ml-1 ',
                            {
                                'bg-gray-200 dark:bg-gray-800 [&.current]:before:bg-primary-500 [&.current]:before:rounded-full [&.current]:before:animate-ping done current': step.status == 'current',
                                'bg-primary-500': step.status === 'done',
                                'bg-green-500': step.status === 'delivered',
                                'dark:bg-dark-800': step.status !== 'done',
                            }
                        ]">
                            <span class="absolute text-gray-500 -translate-x-1/2 dark:text-dark-500 top-5 left-1/2 whitespace-nowrap" :class="{
                                '': step.status === 'current', // Ping animation for the current step
                            }">
                                {{ step.label }}
                            </span>
                        </div>
                    </div>

                    <!-- Timeline line -->
                    <div class="line block absolute w-1/2 inset-x-0 h-[0.2em] bg-primary-500 !pb-0 before:!hidden after:!hidden">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
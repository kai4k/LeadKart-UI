<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, computed, watch, onMounted } from 'vue';
import { shopCartData, productDescription, type ShopCartType } from './shop-cart-data';

// Timer countdown logic
const timerDuration = 300; // 5 minutes
const timeRemaining = ref(timerDuration);
const formattedTime = computed(() => {
    const minutes = Math.floor(timeRemaining.value / 60);
    const seconds = timeRemaining.value % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});

const countdown = () => {
    if (timeRemaining.value > 0) {
        timeRemaining.value--;
    }
};

onMounted(() => {
    setInterval(countdown, 1000);
});


const colorClass = (color: string) => {
    switch (color) {
        case 'blue':
            return 'bg-blue-500 outline-blue-500/20';
        case 'gray':
            return 'bg-gray-500 outline-gray-200 dark:outline-gray-800';
        case 'pink':
            return 'bg-pink-500 outline-pink-500/20';
        case 'green':
            return 'bg-green-500 outline-green-500/20';
        case 'red':
            return 'bg-red-500 outline-red-500/20';
        default:
            return '';
    }
};
// Remove a product from the cart
const removeProduct = (index: number) => {
    shopCartData.value.splice(index, 1);
};

// Select Color
const selectColor = (product: ShopCartType, color: string) => {
    product.activeColor = color;
};

// Select Size
const selectSize = (product: ShopCartType, size: number | string) => {
    product.activeSize = size;
};

// Adjust product count
const incrementCount = (product: ShopCartType) => {
    if (product.count < 5) {
        product.count++;
    }
};

const decrementCount = (product: ShopCartType) => {
    if (product.count > 1) {
        product.count--;
    }
};

// Order summary calculations
const discountCode = ref<string | null>(null);
const shippingCharge = ref(10); // Example static shipping charge
const vatRate = 0.06;

const subtotal = computed(() => {
    return shopCartData.value.reduce((total, product) => {
        return total + (product.price * product.count * (1 - product.discount));
    }, 0);
});

const vat = computed(() => subtotal.value * vatRate);

const discount = computed(() => discountCode.value == "DISCOUNT" ? subtotal.value * 0.1 as number : 0); // 10% discount

const total = computed(() => subtotal.value + vat.value + shippingCharge.value - discount.value);

</script>


<template>
    <PageHeading title="Shop Cart" subTitle="Ecommerce" />
    <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 xl:col-span-8">
            <!-- Shopping Cart Header and Countdown Timer -->
            <div class="flex flex-col md:items-center md:flex-row gap-space mb-space">
                <h6 class="card-title grow">Shopping Cart</h6>
                <div class="shrink-0">
                    <p class="text-gray-500 dark:text-dark-500 shrink-0">
                        <span class="font-semibold text-red-500">{{ formattedTime }}</span>
                        left until the end of the process
                    </p>
                </div>
            </div>

            <!-- Shopping Cart Products -->
            <div v-for="(product, index) in shopCartData" :key="product.id">
                <div class="card">
                    <div class="card-body">
                        <button class="float-end" @click="removeProduct(index)">
                            <i class="link size-4 link-red ri-close-line"></i>
                        </button>
                        <div class="gap-5 sm:flex">
                            <div class="w-full sm:!w-[300px] shrink-0 bg-gray-100 dark:bg-dark-850 rounded-md">
                                <img :src="product.image" alt="">
                            </div>
                            <div class="mt-5 sm:mt-0">
                                <span class="badge badge-gray">{{ product.category }}</span>
                                <h6 class="mt-2 mb-3"><a href="#!">{{ product.name }}</a></h6>
                                <div class="grid grid-cols-2 gap-space">
                                    <div>
                                        <h6>Select Colors</h6>
                                        <div class="flex items-center gap-2 mt-2 grow">
                                            <template v-for="color in product.colors" :key="color">
                                                <a href="#!" :class="['flex items-center justify-center text-white border-2 border-white rounded-full dark:border-dark-900 outline-1 outline size-6 group/item', colorClass(color)]" @click.prevent="selectColor(product, color)">
                                                    <i data-lucide="check" class="size-4 hidden group-[&.active]/item:block"></i>
                                                </a>
                                            </template>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Select Size</h6>
                                        <div class="flex items-center gap-2 mt-3 font-medium shrink-0">
                                            <!-- :class="{ 'active': product.activeSize === size }" -->
                                            <template v-for="size in product.sizes" :key="size">
                                                <a href="#!" @click.prevent="selectSize(product, size)" class="text-gray-500 dark:text-dark-500 [&.active]:!text-green-500" :class="{ 'active': size === product.activeSize }">
                                                    {{ size }}
                                                </a>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <h5 class="flex items-center gap-2 mt-4">
                                    <span>${{ (product.price * product.count * (1 - product.discount)).toFixed(2)
                                        }}</span>
                                    <small class="font-normal text-gray-500 line-through dark:text-dark-500" v-if="product.discount > 0">
                                        ${{ (product.price * product.count).toFixed(2) }}
                                    </small>
                                    <span class="!text-xs badge badge-red shrink-0" v-if="product.discount > 0">
                                        {{ (product.discount * 100).toFixed(0) }}%
                                    </span>
                                </h5>
                                <div class="mt-5">
                                    <div class="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                                        <button @click="decrementCount(product)" class="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 minus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                                            <i class="size-4 ri-subtract-line"></i>
                                        </button>
                                        <input type="text" :value="product.count" class="h-8 p-0 text-center !border-0 rounded-none form-input" readonly>
                                        <button @click="incrementCount(product)" class="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 plus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                                            <i class="size-4 ri-add-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Order Summary Section -->
        <div class="col-span-12 xl:col-span-4">
            <div class="sticky mb-5 top-24">
                <div class="card">
                    <div class="card-header">
                        <h6 class="card-title">Order Summary</h6>
                    </div>
                    <div class="card-body">
                        <div class="mb-4">
                            <label for="discountCode" class="form-label">Discount Code</label>
                            <input type="text" v-model="discountCode" class="form-input" placeholder="Enter coupon code">
                        </div>
                        <table class="table flush">
                            <tbody>
                                <tr>
                                    <th class="!border-0">Sub Amount</th>
                                    <td>$<span>{{ subtotal.toFixed(2) }}</span></td>
                                </tr>
                                <tr>
                                    <th class="!border-0">Vat Amount (6%)</th>
                                    <td>$<span>{{ vat.toFixed(2) }}</span></td>
                                </tr>
                                <tr>
                                    <th class="!border-0">Discount (10%)</th>
                                    <td>-$<span>{{ discount.toFixed(2) }}</span></td>
                                </tr>
                                <tr>
                                    <th class="!border-0">Shipping Charge</th>
                                    <td>$<span>{{ shippingCharge.toFixed(2) }}</span></td>
                                </tr>
                                <tr class="border-t border-gray-200 dark:border-dark-800">
                                    <th class="!border-0">Total Amount</th>
                                    <td>$<span>{{ total.toFixed(2) }}</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="my-4">
                            <router-link to="apps-ecommerce-checkout" class="w-full btn btn-primary">Checkout
                                Now</router-link>
                        </div>
                        <p class="text-center text-gray-500 dark:text-dark-500">
                            By clicking the "checkout order" button, you agree to the terms of the public offers.
                        </p>
                    </div>
                </div>
                <!-- Free Delivery, Safety, Discount Information -->
                <template v-for="(description, index) in productDescription" :key="index">
                    <div class="flex gap-4 mb-5">
                        <div class="flex items-center justify-center bg-gray-100 rounded-md size-12 dark:bg-dark-850 shrink-0">
                            <component :is="description.icon" class="text-gray-500 fill-gray-200 dark:text-dark-500 dark:fill-dark-850"></component>
                        </div>
                        <div>
                            <h6 class="mb-1">{{ description.title }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">
                                {{ description.description }}
                            </p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

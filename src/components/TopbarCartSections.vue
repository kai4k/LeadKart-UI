<script setup lang="ts">
import { ChevronDown, ChevronUp, Heart, Rotate3D, ShoppingBag, Trash2, X } from 'lucide-vue-next';
import { ref, computed, watch } from 'vue';
import { products } from '@/view/apps/app-ecommerce/checkout/checkout-data';

const props = defineProps({
    showComponent: {
        type: Boolean,
        default: false
    }
})
// const isOpen = ref(true);
const emit = defineEmits(['closeModel'])
const closeDrawer = () => emit('closeModel', false);
const removeItem = (index: number) => products.value.splice(index, 1);
const decreaseQuantity = (index: number) => {
    if (products.value[index].qty > 1) products.value[index].qty--;
};

const tax = ref(6)
const discountValue = ref(10)
const subtotal = computed(() => products.value.reduce((sum, item) => sum + item.price * item.qty, 0));
const vatAmount = computed(() => subtotal.value * tax.value / 100);
const discount = computed(() => subtotal.value * discountValue.value / 100);
const shippingCharge = ref(35.00);
const totalAmount = computed(() => subtotal.value + vatAmount.value - discount.value + shippingCharge.value);

watch(() => props.showComponent, (newValue) => {
    if (newValue) {
        document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
        document.body.style.overflow = ""; // Enable scrolling
    }
});
</script>
<template>
    <div v-if="showComponent" class="drawer drawer-lg" drawer-end>
        <div class="drawer-header">
            <h6>My Cart ({{ products.length }})</h6>
            <button @click="closeDrawer">
                <X data-lucide="x" class="link link-red"></X>
            </button>
        </div>

        <div class="drawer-content">
            <div v-for="(item, index) in products" :key="index"
                class="py-3 border-b border-gray-200 dark:border-dark-800 last:border-none first:pt-0">
                <div class="flex gap-3 item-center ">
                    <div class="bg-gray-100 rounded-md dark:bg-dark-850 size-16 shrink-0">
                        <img :src="item.image" :alt="item.name" />
                    </div>
                    <div class="grow">
                        <h6 class="mb-2 text-14"><a href="#">{{ item.name }}</a></h6>
                        <p>
                            <span class="ltr:mr-2 rtl:ml-2 badge" :class="item.inStock ? 'badge-green' : 'badge-red'">{{
                                item.inStock ?
                                    'In Stock' : 'Out of Stock' }}</span>
                            - <span class="inline-block size-3 rtl:mr-2 ltr:ml-2 me-1"
                                :style="{ backgroundColor: item.color }"></span>
                            <span class="align-baseline">{{ item.color }}</span>
                        </p>
                        <div class="flex gap-3 *:flex *:items-center items-center mt-5">
                            <button @click="removeItem(index)" class="shrink-0 link link-red text-14">
                                <Trash2 data-lucide="trash-2" class="inline-block size-4 ltr:mr-1 rtl:ml-1"></Trash2>
                                Remove
                            </button>
                            <button class="shrink-0 link link-primary text-14">
                                <Heart data-lucide="heart" class="inline-block size-4 ltr:mr-1 rtl:ml-1"></Heart>
                                Wishlist
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col shrink-0">
                        <h6>${{ item.price.toFixed(2) }}</h6>
                        <div class="mt-auto">
                            <div
                                class="flex items-center w-16 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                                <div class="flex flex-col">
                                    <button @click="item.qty++"
                                        class="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 plus hover:text-primary-500 dark:hover:text-primary-500">
                                        <ChevronUp class="size-3"></ChevronUp>
                                    </button>
                                    <button @click="decreaseQuantity(index)"
                                        class="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 minus hover:text-primary-500 dark:hover:text-primary-500">
                                        <ChevronDown class="size-3"></ChevronDown>
                                    </button>
                                </div>
                                <input type="text" v-model="item.qty"
                                    class="h-5 p-0 text-center border-0 rounded-none form-input" readonly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-col p-0 border-none drawer-footer">
            <div class="w-full p-5 pb-3 border-t border-gray-200 dark:border-dark-800">
                <div class="-mx-5">
                    <table class="w-full flush text-start">
                        <tbody>
                            <tr class="*:py-2 *:px-5">
                                <td>Sub Amount</td>
                                <td>${{ subtotal.toFixed(2) }}</td>
                            </tr>
                            <tr class="*:py-2 *:px-5">
                                <td>Vat Amount ({{ tax }}%)</td>
                                <td>${{ vatAmount.toFixed(2) }}</td>
                            </tr>
                            <tr class="*:py-2 *:px-5">
                                <td>Discount ({{ discountValue }}%)</td>
                                <td>-${{ discount.toFixed(2) }}</td>
                            </tr>
                            <tr class="*:py-2 *:px-5">
                                <td>Shipping Charge</td>
                                <td>${{ shippingCharge.toFixed(2) }}</td>
                            </tr>
                            <tr class="border-t border-gray-200 dark:border-dark-800 *:pt-3 *:px-5">
                                <th class="text-start">Total Amount</th>
                                <td>${{ totalAmount.toFixed(2) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex items-center justify-end gap-2 p-5 border-t border-gray-200 dark:border-dark-800">
                <RouterLink to="apps-ecommerce-products-list" class="btn btn-sub-indigo btn-icon-text">
                    <ShoppingBag class="size-4"></ShoppingBag> Continue Shopping
                </RouterLink>
                <RouterLink to="apps-ecommerce-checkout" class="btn btn-primary btn-icon-text">
                    <Rotate3D class="size-4"></Rotate3D> Checkout
                </RouterLink>
            </div>
        </div>
    </div>
    <div v-if="showComponent" class="backdrop-overlay backdrop-blur-xs" @click="closeDrawer"></div>

</template>

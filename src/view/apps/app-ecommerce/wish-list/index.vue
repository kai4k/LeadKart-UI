<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import product8 from '@/assets/images/products/img-08.png'
import product9 from '@/assets/images/products/img-09.png'
import product10 from '@/assets/images/products/img-10.png'
import product11 from '@/assets/images/products/img-11.png'

// Cart image (import the actual image for cart)
import cartImage from '@/assets/images/others/shopping-cart.png';
import { MoveLeft } from 'lucide-vue-next';

// Wishlist products data
interface WishListProjectType {
    image: string;
    productName: string;
    color: string;
    size: string | number;
    price: number;
    qty: number
}
const wishlistProducts = ref<Array<WishListProjectType>>([
    { image: product8, productName: 'Tote bag Leather Handbag Dolce', color: 'Red', size: 'M', price: 79.99, qty: 1 },
    { image: product9, productName: 'Hoodie Jacket Letterman Sleeve Coat', color: 'Red', size: 'M', price: 79.99, qty: 2 },
    { image: product10, productName: 'Straw hat Cap Cowboy hat Sun hat', color: 'Red', size: 'M', price: 79.99, qty: 1 },
    { image: product11, productName: 'Sneakers Shoe Nike Basketball', color: 'Red', size: 'M', price: 79.99, qty: 3 },
]);

// Method to remove an item from the wishlist
const removeItem = (index: number) => {
    wishlistProducts.value.splice(index, 1);
};

// Method to decrease quantity (minimum quantity is 1)
const decreaseQty = (item: WishListProjectType) => {
    item.qty = Math.max(1, item.qty - 1);
};

// Method to increase quantity
const increaseQty = (item: WishListProjectType) => {
    item.qty++;
};
</script>
<template>
    <PageHeading title="Wishlist" sub-title="Ecommerce" />
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">💖 Wishlist</h6>
        </div>
        <div class="pt-0 card-body">
            <div v-if="wishlistProducts.length === 0" class="overflow-x-auto table-box">
                <div class="p-4 text-center">
                    <img :src="cartImage" alt="" class="block mx-auto size-16" />
                    <h6 class="mt-4 mb-1">Your wishlist is waiting for you.</h6>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Add items to your wishlist as you browse, and they will magically appear here.
                    </p>
                    <div class="flex items-center justify-center gap-2">
                        <button class="btn btn-primary">Browse our catalog</button>
                        <button class="btn btn-outline-purple">Go to your cart</button>
                    </div>
                </div>
            </div>

            <div v-else class="overflow-x-auto table-box">
                <table class="table flush">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in wishlistProducts" :key="index" class="*:px-3 *:py-2.5">
                            <td class="whitespace-nowrap">
                                <div class="flex items-center gap-4">
                                    <div class="relative flex items-center justify-center p-2 bg-gray-100 dark:bg-dark-850 size-16">
                                        <button class="absolute flex items-center justify-center bg-white dark:bg-dark-900 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 -top-1.5 ltr:-right-1.5 rtl:-left-1.5 size-4" @click="removeItem(index)">
                                            <i class="ri-close-line"></i>
                                        </button>
                                        <img :src="item.image" alt="" />
                                    </div>
                                    <div class="grow">
                                        <h6 class="mb-1">{{ item.productName }}</h6>
                                        <p class="mb-2 text-gray-500 dark:text-dark-500">
                                            <span class="px-2 first:pl-0">
                                                <span class="px-2 border-r border-gray-200 dark:border-dark-800 first:pl-0">
                                                    {{ item.color }}
                                                </span>
                                                <span class="px-2 first:pl-0">{{ item.size }}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>{{ item.price.toFixed(2) }}</td>
                            <td>
                                <div class="input-spin-group input-spin-primary">
                                    <button @click="decreaseQty(item)" class="text-lg input-spin-minus">
                                        <i class="ri-subtract-line"></i>
                                    </button>
                                    <input type="text" v-model.number="item.qty" class="text-center input-spin form-input" readonly />
                                    <button @click="increaseQty(item)" class="text-lg input-spin-plus">
                                        <i class="ri-add-line"></i>
                                    </button>
                                </div>
                            </td>
                            <td>{{ (item.price * item.qty).toFixed(2) }}</td>
                            <td>
                                <a href="apps-ecommerce-shop-cart" class=" btn btn-sub-gray whitespace-nowrap">
                                    <div class="flex gap-1">
                                        <i class="ri-shopping-cart-line"></i>Add to Cart
                                    </div>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-2 mt-3">
                <a href="apps-ecommerce-products-grid" class="btn btn-sub-purple">
                    <MoveLeft data-lucide="move-left" class="inline-block ltr:mr-1 rtl:ml-1 size-5"></MoveLeft> Continue
                    Shopping
                </a>
                <a href="apps-ecommerce-shop-cart" class="btn btn-primary">Update to Cart</a>
            </div>
        </div>
    </div>
</template>
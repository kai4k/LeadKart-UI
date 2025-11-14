<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next';

const date = new Date()
const year = date.getFullYear()

</script>
<template>
    <footer class="relative">
        <div class="container mx-auto px-4 lg:max-w-[1350px]">
            <div class="grid grid-cols-12 gap-4 py-16 md:gap-x-8">
                <div class="col-span-12 lg:col-span-5 lg:pr-10">
                    <h5 class="drop-shadow-lg">Stay Connected</h5>
                    <div class="relative mt-5">
                        <input type="text"
                            class="!border-0 !border-b-2 rounded-none dark:bg-transparent ltr:pr-8 rtl:pl-8 form-input"
                            placeholder="Enter your email">
                        <button type="submit" title="submit"
                            class="absolute ltr:right-0 rtl:left-0 link link-primary top-2">
                            <MoveRight data-lucide="move-right" class="ltr:inline-block rtl:hidden"></MoveRight>
                            <MoveLeft data-lucide="move-left" class="ltr:hidden rtl:inline-block"></MoveLeft>
                        </button>
                    </div>
                    <p class="mt-5 text-gray-500 dark:text-dark-500">Enjoy 15% off your first purchase as a thank you
                        for staying in touch.</p>
                </div>
                <div class="col-span-12 md:col-span-4 lg:col-span-2">
                    <h5 class="mb-5 drop-shadow-lg">Quick Links</h5>
                    <ul class="space-y-5">
                        <li><a href="#!" class="link link-primary">My Account</a></li>
                        <li><a href="#!" class="link link-primary">Cart</a></li>
                        <li><a href="#!" class="link link-primary">Wishlist</a></li>
                        <li><a href="#!" class="link link-primary">Product Overview</a></li>
                        <li><a href="#!" class="link link-primary">Checkout</a></li>
                    </ul>
                </div>
                <div class="col-span-12 md:col-span-4 lg:col-span-2">
                    <h5 class="mb-5 drop-shadow-lg">Services</h5>
                    <ul class="space-y-5">
                        <li><a href="#!" class="link link-primary">Privacy Policy</a></li>
                        <li><a href="#!" class="link link-primary">Refund Policy</a></li>
                        <li><a href="#!" class="link link-primary">Shipping & Return</a></li>
                        <li><a href="#!" class="link link-primary">Term & Condition</a></li>
                        <li><a href="#!" class="link link-primary">Help Center</a></li>
                    </ul>
                </div>
                <div class="col-span-12 md:col-span-4 lg:col-span-3">
                    <h5 class="mb-5 drop-shadow-lg">Our Store</h5>
                    <p class="mb-4 text-gray-500 dark:text-dark-500">Find the nearest location to you. <a href="#!"
                            class="text-gray-900 underline dark:text-dark-50">Visit our Stores</a></p>
                    <p class="mb-1"><a href="tel:241012345678">+241 01234 5678</a></p>
                    <p><a href="mailto:support@example.com">support@example.com</a></p>
                </div>
            </div><!--end grid-->
            <div
                class="grid flex-wrap justify-between grid-cols-1 gap-5 py-6 text-center border-t border-gray-200 border-dashed md:grid-cols-3 dark:border-dark-800">
                <div class="flex justify-center gap-6 text-lg md:justify-start">
                    <a href="#!" title="twitter" class="link link-sky"><i class="ri-twitter-x-line"></i></a>
                    <a href="#!" title="instagram" class="link link-pink"><i class="ri-instagram-line"></i></a>
                    <a href="#!" title="amazon" class="link link-green"><i class="ri-amazon-line"></i></a>
                    <a href="#!" title="chrome" class="link link-red">
                        <i class="ri-chrome-line"></i>
                    </a>
                </div>
                <div class="text-center">
                    <p x-data="{ year: new Date().getFullYear() }" class="text-gray-500 dark:text-dark-500">
                        &copy; <span x-text="year">{{ year }}</span> Domiex. Crafted by <a href="#!" title="SRBThemes"
                            class="font-semibold">SRBThemes</a>
                    </p>
                </div><!--end col-->
                <div class="flex justify-center gap-5 text-lg md:justify-end">
                    <a href="#!" title="Payment"><img src="@/assets/images/payment/american.png" alt="" class="h-6"></a>
                    <a href="#!" title="Payment"><img src="@/assets/images/payment/mastercard.png" alt=""
                            class="h-6"></a>
                    <a href="#!" title="Payment"><img src="@/assets/images/payment/visa.png" alt="" class="h-6"></a>
                </div>
            </div><!--end grid-->
        </div>
    </footer>
</template>
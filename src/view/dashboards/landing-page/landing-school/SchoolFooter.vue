<script setup lang="ts">
import { Dribbble, Facebook, Twitter, Youtube } from 'lucide-vue-next';
const currentYear = new Date().getFullYear()

</script>
<template>
    <footer>
        <div class="py-14">
            <div class="container px-4 mx-auto">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="max-w-lg">
                            <a href="/" title="logo">
                                <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-7 dark:hidden">
                                <img src="@/assets/images/logo-white.png" alt="" class="hidden h-7 dark:inline-block">
                            </a>
                            <p class="mt-4 mb-6 text-gray-500 dark:text-dark-500 text-16">They constitute one of the
                                fundamental components of learning, alongside objectives, methodology, and assessment.
                                knowledge, procedures, skills, attitudes, abilities, and values necessary to achieve the
                                curricular goals outlined in educational.</p>
                            <div class="flex items-center gap-5">
                                <a href="#!" title="facebook"
                                    class="relative flex items-center justify-center transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-primary-500/10 size-10 text-primary-500">
                                    <Facebook data-lucide="facebook" class="relative z-10 size-5"></Facebook>
                                </a>
                                <a href="#!" title="dribbble"
                                    class="relative flex items-center justify-center text-pink-500 transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-pink-500/10 size-10">
                                    <Dribbble data-lucide="dribbble" class="relative z-10 size-5"></Dribbble>
                                </a>
                                <a href="#!" title="twitter"
                                    class="relative flex items-center justify-center transition duration-300 ease-linear hover:-translate-y-1 text-sky-500 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-sky-500/10 size-10">
                                    <Twitter data-lucide="twitter" class="relative z-10 size-5"></Twitter>
                                </a>
                                <a href="#!" title="youtube"
                                    class="relative flex items-center justify-center text-red-500 transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-red-500/10 size-10">
                                    <Youtube data-lucide="youtube" class="relative z-10 size-5"></Youtube>
                                </a>
                            </div>
                        </div>
                    </div><!--end col-->
                    <div class="col-span-12 sm:col-span-4 md:col-span-2">
                        <h6 class="mb-4 text-17">About Us</h6>
                        <ul class="space-y-5 text-16">
                            <li><a href="#!" class="link link-orange">Pricing</a></li>
                            <li><a href="#!" class="link link-orange">NewsLatter</a></li>
                            <li><a href="#!" class="link link-orange">About Us</a></li>
                            <li><a href="#!" class="link link-orange">Help Center</a></li>
                            <li><a href="#!" class="link link-orange">Dashboards</a></li>
                        </ul>
                    </div>
                    <div class="col-span-12 sm:col-span-4 md:col-span-2">
                        <h6 class="mb-4 text-17">Students</h6>
                        <ul class="space-y-5 text-16">
                            <li><a href="#!" class="link link-orange">List View</a></li>
                            <li><a href="#!" class="link link-orange">Profile</a></li>
                            <li><a href="#!" class="link link-orange">Attendance</a></li>
                        </ul>
                    </div>
                    <div class="col-span-12 sm:col-span-4 md:col-span-2">
                        <h6 class="mb-4 text-17">Our Support</h6>
                        <ul class="space-y-5 text-16">
                            <li><a href="#!" class="link link-orange">Contact Us</a></li>
                            <li><a href="#!" class="link link-orange">Account</a></li>
                            <li><a href="#!" class="link link-orange">Feedback</a></li>
                            <li><a href="#!" class="link link-orange">Licenses</a></li>
                            <li><a href="#!" class="link link-orange">FAQ's</a></li>
                            <li><a href="#!" class="link link-orange">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-4 mx-auto">
            <div
                class="py-6 text-center text-gray-500 border-t border-gray-200 border-dashed dark:text-dark-500 dark:border-dark-800 text-16">
                <p x-data="{ year: new Date().getFullYear() }">
                    &copy; <span x-text="year">{{ currentYear }}</span> Domiex. Crafted & Design by <a href="#!"
                        class="font-semibold link link-orange">SRBThemes</a>
                </p>
            </div>
        </div>
    </footer>
</template>
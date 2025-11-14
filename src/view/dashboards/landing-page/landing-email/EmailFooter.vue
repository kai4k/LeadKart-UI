<script setup lang="ts">
import { Dribbble, Facebook, Twitter, Youtube } from 'lucide-vue-next';

const date = new Date();
const year = date.getFullYear()
</script>
<template>
    <footer class="relative bg-gray-900 dark:bg-dark-900">
        <div class="py-12 lg:py-20">
            <div class="container px-4 mx-auto">
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 xl:col-span-6">
                        <div class="max-w-lg">
                            <a href="/" title="logo"><img src="
                                @/assets/images/logo-white.png" alt="" class="h-7"></a>
                            <p class="mt-4 mb-6 text-gray-500 dark:text-dark-500 text-16">This email and any attachments
                                may contain confidential information. If you are not the intended recipient, please
                                notify the sender immediately and delete this email. Unauthorized use, disclosure, or
                                copying of the contents is strictly prohibited.</p>
                            <div class="flex items-center gap-5">
                                <a href="#!" title="facebook"
                                    class="relative flex items-center justify-center transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10 text-primary-500">
                                    <Facebook data-lucide="facebook" class="relative z-10 size-5"></Facebook>
                                </a>
                                <a href="#!" title="dribbble"
                                    class="relative flex items-center justify-center text-pink-500 transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10">
                                    <Dribbble data-lucide="dribbble" class="relative z-10 size-5"></Dribbble>
                                </a>
                                <a href="#!" title="twitter"
                                    class="relative flex items-center justify-center transition duration-300 ease-linear hover:-translate-y-1 text-sky-500 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10">
                                    <Twitter data-lucide="twitter" class="relative z-10 size-5"></Twitter>
                                </a>
                                <a href="#!" title="youtube"
                                    class="relative flex items-center justify-center text-red-500 transition duration-300 ease-linear hover:-translate-y-1 after:absolute after:inset-0 after:rounded-lg after:-rotate-45 after:bg-gray-800/50 dark:after:bg-dark-800/50 size-10">
                                    <Youtube data-lucide="youtube" class="relative z-10 size-5"></Youtube>
                                </a>
                            </div>
                        </div>
                    </div><!--end col-->
                    <div class="col-span-12 md:col-span-4 xl:col-span-2">
                        <h6 class="mb-4 text-gray-200 dark:text-dark-200 text-17">Features</h6>
                        <ul class="space-y-5 text-16">
                            <li><a href="#!" class="link link-primary">Modern Inbox</a></li>
                            <li><a href="#!" class="link link-primary">Search</a></li>
                            <li><a href="#!" class="link link-primary">Send Later</a></li>
                            <li><a href="#!" class="link link-primary">All Features</a></li>
                            <li><a href="#!" class="link link-primary">Dashboards</a></li>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-4 xl:col-span-2">
                        <h6 class="mb-4 text-gray-200 text-17">Resource</h6>
                        <ul class="space-y-5 text-16">
                            <li><a href="#!" class="link link-primary">Blog</a></li>
                            <li><a href="#!" class="link link-primary">Help Center</a></li>
                            <li><a href="#!" class="link link-primary">Community</a></li>
                            <li><a href="#!" class="link link-primary">Video</a></li>
                            <li><a href="#!" class="link link-primary">FAQ's</a></li>
                            <li><a href="#!" class="link link-primary">Systems Status</a></li>
                            <li><a href="#!" class="link link-primary">API</a></li>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-4 xl:col-span-2">
                        <h6 class="mb-4 text-gray-200 text-17">Company</h6>
                        <ul class="space-y-5 text-16">
                            <li><a href="#!" class="link link-primary">About</a></li>
                            <li><a href="#!" class="link link-primary">Careers</a></li>
                            <li><a href="#!" class="link link-primary">Feedback</a></li>
                            <li><a href="#!" class="link link-primary">Contact Us</a></li>
                            <li><a href="#!" class="link link-primary">News</a></li>
                            <li><a href="#!" class="link link-primary">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-6 text-gray-500 dark:text-dark-500 text-16">
                <p x-data="{ year: new Date().getFullYear() }">
                    &copy; <span x-text="year">{{ year }}</span> Domiex. Crafted & Design by <a
                        href="javascript:void(0);"
                        class="font-medium !text-gray-200 dark:!text-dark-200 link">SRBThemes</a>
                </p>
            </div>
        </div>
    </footer>
</template>
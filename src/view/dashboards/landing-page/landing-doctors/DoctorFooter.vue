<script setup lang="ts">
import { Facebook, Instagram, Twitch, Twitter } from 'lucide-vue-next';


const currentYear = new Date().getFullYear()
</script>
<template>
    <footer class="pb-8 pt-36 bg-slate-50 dark:bg-dark-900/30">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="grid grid-cols-12 gap-space">
                <div class="col-span-12 xl:col-span-4">
                    <a href="/" title="logo">
                        <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-8 dark:!hidden">
                        <img src="@/assets/images/logo-white.png" alt="" class="hidden h-8 dark:!inline-block">
                    </a>
                    <p class="mb-5 text-gray-500 dark:text-dark-500 mt-7 text-16">Create a superior website for your
                        medical and healthcare business today.</p>
                    <div class="flex items-center gap-3">
                        <a href="#!" title="facebook"
                            class="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-primary">
                            <Facebook data-lucide="facebook" class="size-5"></Facebook>
                        </a>
                        <a href="#!" title="twitch"
                            class="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-purple">
                            <Twitch data-lucide="twitch" class="size-5"></Twitch>
                        </a>
                        <a href="#!" title="twitter"
                            class="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-sky">
                            <Twitter data-lucide="twitter" class="size-5"></Twitter>
                        </a>
                        <a href="#!" title="instagram"
                            class="inline-flex items-center justify-center bg-white rounded-lg shadow-lg dark:bg-dark-900 shadow-slate-200 dark:shadow-dark-850 size-12 link link-pink">
                            <Instagram data-lucide="instagram" class="size-5"></Instagram>
                        </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 xl:col-span-2 xl:col-start-7">
                    <h6 class="text-16">Product Pages</h6>
                    <ul class="mt-8 space-y-5 text-16">
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">About
                                Us</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Blog</a>
                        </li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Services</a>
                        </li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Careers</a>
                        </li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Help
                                Center</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Contacts
                                Us</a></li>
                    </ul>
                </div>
                <div class="col-span-12 sm:col-span-4 xl:col-span-2">
                    <h6 class="text-16">Links</h6>
                    <ul class="mt-8 space-y-5 text-16">
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Insta
                                by Domiex</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Domiex
                                Profile</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Domiex
                                Reach</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Domiex
                                Drive</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Domiex
                                Bot</a></li>
                    </ul>
                </div>
                <div class="col-span-12 sm:col-span-4 xl:col-span-2">
                    <h6 class="text-16">More Pages</h6>
                    <ul class="mt-8 space-y-5 text-16">
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Video
                                Tutorial</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Partnership</a>
                        </li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Cookie
                                Setting</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Privacy
                                Policy</a></li>
                        <li><a href="#!"
                                class="relative inline-block link link-sky before:absolute before:bg-sky-500 before:h-[1px] before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full">Healthcare
                                Directory</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container px-4 mx-auto mt-12 text-center xl:px-20">
            <p x-data="{ year: new Date().getFullYear() }" class="text-gray-500 dark:text-dark-500 text-16">
                &copy; <span x-text="year">{{ currentYear }}</span> Domiex. Crafted & Design by <a href="#!"
                    class="font-semibold link link-sky">SRBThemes</a>
            </p>
        </div>
    </footer>
</template>
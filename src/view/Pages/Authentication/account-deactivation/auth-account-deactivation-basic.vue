<script setup lang="ts">
import { handleTemporaryDisable, handlePermanentDelete, deactivateNotice } from './deactivation-notice'
// Event handlers for button actions


</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-12 from-sky-100 dark:from-sky-500/15 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-50 dark:via-green-500/10 to-pink-50 dark:to-pink-500/10">
        <div class="container">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card">
                    <div class="md:p-10 card-body">
                        <!-- Logo Section -->
                        <div class="mb-5 text-center">
                            <router-link to="/">
                                <img src="@/assets/images/main-logo.png" alt="Main Logo"
                                    class="h-8 mx-auto dark:hidden" />
                                <img src="@/assets/images/logo-white.png" alt="White Logo"
                                    class="hidden h-8 mx-auto dark:inline-block" />
                            </router-link>
                        </div>

                        <!-- Title Section -->
                        <h4
                            class="mb-1 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                            Account Deactivation
                        </h4>
                        <p class="mb-6 text-center text-gray-500 dark:text-dark-500">
                            Domiex Security and Privacy
                        </p>

                        <!-- Options Section -->
                        <template v-for="(item, index) in deactivateNotice" :key="index">
                            <div class="flex gap-3 mb-3">
                                <div class="shrink-0">
                                    <component :is="item.icon"></component>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1">{{ item.title }}</h6>
                                    <p class="text-gray-500 dark:text-dark-500">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </template>
                        <!-- Action Buttons -->
                        <div class="justify-center gap-2 mt-6 sm:flex">
                            <button @click="handleTemporaryDisable" class="btn btn-primary">
                                Temporary Disable
                            </button>
                            <button @click="handlePermanentDelete" class="btn btn-red mt-2.5 sm:mt-0">
                                Permanent Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
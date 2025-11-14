<script setup lang="ts">
import { MailOpen } from 'lucide-vue-next';
import { submitOtp, otpInputs, handleInput, handleKeyDown, handleFocus, handlePaste } from './otp-verification';
</script>
<template>
    <div class="relative">
        <div class="grid grid-cols-12">
            <!-- Left Section -->
            <div
                class="relative col-span-12 py-8 overflow-hidden bg-gray-100 dark:bg-dark-850 lg:min-h-screen lg:col-span-6 md:p-9 xl:p-12">
                <div class="absolute bottom-0 w-32 -rotate-45 -top-64 -right-8 bg-gray-200/20 dark:bg-dark-800/20">
                </div>
                <div class="p-4">
                    <router-link to="/">
                        <img src="@/assets/images/main-logo.png" alt="Logo" class="h-8 dark:hidden" />
                        <img src="@/assets/images/logo-white.png" alt="Logo Dark"
                            class="hidden h-8 dark:inline-block" />
                    </router-link>
                    <h1
                        class="max-w-lg mt-8 text-2xl font-normal leading-tight capitalize md:leading-tight md:text-4xl">
                        The most straightforward way to manage your projects
                    </h1>
                    <img src="@/assets/images/others/auth-creative.png" alt="Creative"
                        class="mt-9 xl:mt-0 relative xl:absolute xl:scale-110 rounded-lg shadow-lg xl:top-[315px] ltr:xl:left-[115px] rtl:xl:right-[115px]" />
                </div>
            </div>

            <!-- Right Section -->
            <div class="flex items-center col-span-12 lg:min-h-screen lg:col-span-6 py-9 md:py-12">
                <div class="grid w-full grid-cols-12">
                    <div class="col-span-12 mx-4 mb-0 2xl:col-span-8 2xl:col-start-3 md:mx-12 card">
                        <div class="md:p-10 card-body">
                            <div class="mb-4 text-center">
                                <div class="flex items-center justify-center mx-auto size-14">
                                    <MailOpen
                                        class="text-gray-500 stroke-1 dark:text-dark-500 size-10 fill-gray-100 dark:fill-dark-850">
                                    </MailOpen>
                                </div>
                            </div>
                            <h4
                                class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 via-purple-500 to-pink-500 bg-clip-text">
                                OTP Verification
                            </h4>
                            <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                                We've sent a code to <b>sophiamia@example.com</b>
                            </p>
                            <form @submit.prevent="submitOtp">
                                <div class="flex flex-wrap items-center justify-center gap-3">
                                    <input v-for="(digit, index) in otpInputs" :key="index" v-model="otpInputs[index]"
                                        type="text"
                                        class="text-2xl font-extrabold text-center bg-gray-100 border border-transparent rounded outline-none appearance-none size-9 sm:size-12 md:size-14 text-slate-900 dark:text-dark-50 dark:bg-dark-850 hover:border-slate-200 dark:hover:border-dark-800 focus:bg-white dark:focus:bg-dark-900 focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/15"
                                        maxlength="1" @keydown="handleKeyDown($event, index)"
                                        @input="handleInput(index)" @focus="handleFocus" @paste="handlePaste" />
                                </div>
                                <div class="mt-5">
                                    <button type="submit" class="w-full btn btn-primary">
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
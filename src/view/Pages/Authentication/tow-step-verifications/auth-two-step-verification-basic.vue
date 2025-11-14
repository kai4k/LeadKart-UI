<script setup lang="ts">
import { MailOpen } from 'lucide-vue-next';
import { submitOtp, otpInputs, handleInput, handleKeyDown, handleFocus, handlePaste } from './otp-verification';

</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-12 from-sky-100 dark:from-sky-500/15 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-50 dark:via-green-500/10 to-pink-50 dark:to-pink-500/10">
        <div class="container">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 md:col-span-10 lg:col-span-6 2xl:col-span-4 md:col-start-2 lg:col-start-4 2xl:col-start-5 card">
                    <div class="md:p-10 card-body">
                        <div class="mb-4 text-center">
                            <div class="flex items-center justify-center mx-auto size-14">
                                <MailOpen
                                    class="text-gray-500 stroke-1 dark:text-dark-500 size-10 fill-gray-100 dark:fill-dark-850">
                                </MailOpen>
                            </div>
                        </div>
                        <h4
                            class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                            OTP Verification</h4>
                        <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                            We're sent a code to <b>sophiamia@example.com</b>
                        </p>
                        <form @submit.prevent="submitOtp">
                            <div class="flex flex-wrap items-center justify-center gap-3">
                                <input v-for="(digit, index) in otpInputs" :key="index" v-model="otpInputs[index]"
                                    type="text"
                                    class="text-2xl font-extrabold text-center bg-gray-100 border border-transparent rounded outline-none appearance-none size-9 sm:size-12 md:size-14 text-slate-900 dark:text-dark-50 dark:bg-dark-850 hover:border-slate-200 dark:hover:border-dark-800 focus:bg-white dark:focus:bg-dark-900 focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/15"
                                    maxlength="1" @input="handleInput(index)" @keydown="handleKeyDown($event, index)"
                                    @focus="handleFocus" @paste="handlePaste" />
                            </div>
                            <div class="mt-5">
                                <button type="submit" class="w-full btn btn-primary">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
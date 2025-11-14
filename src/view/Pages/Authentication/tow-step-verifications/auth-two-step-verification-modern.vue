<script setup lang="ts">
import { MailOpen } from 'lucide-vue-next';
import { submitOtp, otpInputs, handleInput, handleKeyDown, handleFocus, handlePaste } from './otp-verification';
</script>
<template>
    <div class="relative flex items-center justify-center min-h-screen py-12 bg-center bg-cover bg-[url('../images/others/auth.jpg')]">
        <div class="absolute inset-0 bg-gray-950/50"></div>
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 border-none shadow-none md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card bg-white/10 backdrop-blur-md">
                    <div class="md:p-10 card-body">
                        <div class="mb-4 text-center">
                            <div class="flex items-center justify-center mx-auto size-14">
                                <MailOpen class="stroke-1 text-white/75 size-10 fill-white/20">
                                </MailOpen>
                            </div>
                        </div>
                        <h4 class="mb-2 leading-relaxed text-center text-white">
                            OTP Verification
                        </h4>
                        <p class="mb-5 text-center text-white/75">
                            We're sent a code to <b>sophiamia@example.com</b>
                        </p>
                        <form @submit.prevent="submitOtp">
                            <div class="flex flex-wrap items-center justify-center gap-3">
                                <input v-for="(digit, index) in otpInputs" :key="index" v-model="otpInputs[index]"
                                    type="text"
                                    class="text-2xl font-extrabold text-center text-white border border-transparent rounded outline-none appearance-none size-9 sm:size-12 md:size-14 bg-white/10 focus:bg-white/10"
                                    maxlength="1" @keydown="handleKeyDown($event, index)" @input="handleInput(index)"
                                    @focus="handleFocus" @paste="handlePaste" />
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
</template>
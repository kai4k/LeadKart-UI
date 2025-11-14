<script setup lang="ts">
import { Eye, EyeOff, MoveRight } from "lucide-vue-next";
import { reactive, ref } from "vue";
import { validateForm, confirmPassword, password, errors } from "./password-validation";
const showPassword = ref<boolean>(false);
const showConfirmPassword = ref<boolean>(false)
</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-12 from-sky-100 dark:from-sky-500/15 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-50 dark:via-green-500/10 to-pink-50 dark:to-pink-500/10">
        <div class="container">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card">
                    <div class="md:p-10 card-body">
                        <div class="mb-5 text-center">
                            <router-link to="#!">
                                <img src="@/assets/images/main-logo.png" alt="" class="h-8 mx-auto dark:hidden" />
                                <img src="@/assets/images/logo-white.png" alt=""
                                    class="hidden h-8 mx-auto dark:inline-block" />
                            </router-link>
                        </div>
                        <h4
                            class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                            Set your new password
                        </h4>
                        <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                            Ensure that your new password is different from any passwords
                            you've previously used.
                        </p>
                        <form @submit.prevent="validateForm">
                            <div class="grid grid-cols-12 gap-4 mt-5">
                                <div class="col-span-12">
                                    <div>
                                        <label for="passwordInput" class="form-label">Password</label>
                                        <div class="relative">
                                            <input :type="showPassword ? 'text' : 'password'" id="passwordInput"
                                                class="ltr:pr-8 rtl:pl-8 form-input" placeholder="Enter your password"
                                                v-model="password" />
                                            <button type="button" @click="showPassword = !showPassword"
                                                class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-none">
                                                <Eye v-if="showPassword" data-lucide="eye" class="size-5"></Eye>
                                                <EyeOff v-else data-lucide="eye-off" class="size-5"></EyeOff>
                                            </button>
                                        </div>
                                        <p v-if="errors.password" class="text-sm text-red-500">
                                            {{ errors.password }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <div>
                                        <label for="confirmPasswordInput" class="form-label">Confirm Password</label>
                                        <div class="relative">
                                            <input :type="showConfirmPassword ? 'text' : 'password'"
                                                id="confirmPasswordInput" class="ltr:pr-8 rtl:pl-8 form-input"
                                                placeholder="Enter your confirm password" v-model="confirmPassword" />
                                            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                                                class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-none">
                                                <Eye v-if="showConfirmPassword" class="size-5"></Eye>
                                                <EyeOff v-else class="size-5"></EyeOff>
                                            </button>
                                        </div>
                                        <p v-if="errors.confirmPassword" class="text-sm text-red-500">
                                            {{ errors.confirmPassword }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <button type="submit"
                                        class="w-full px-4 py-2 text-white rounded-md bg-primary-500 hover:bg-primary-600">
                                        Set Password
                                    </button>
                                    <p class="mt-3 text-center text-gray-500 dark:text-dark-500">
                                        Return to the
                                        <router-link to="auth-signin-basic"
                                            class="font-medium underline link link-primary">
                                            <span class="align-middle">Sign In</span>
                                            <MoveRight class="inline-block ml-1 size-4"></MoveRight>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
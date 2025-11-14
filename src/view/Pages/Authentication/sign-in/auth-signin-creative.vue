<script setup lang="ts">
import {
    validateForm,
    togglePasswordVisibility,
    alert,
    showPassword,
    formData,
    login
} from './validation';
</script>
<template>
    <div class="relative">
        <div class="grid grid-cols-12">
            <div
                class="relative col-span-12 py-8 overflow-hidden bg-gray-100 dark:bg-dark-850 lg:min-h-screen lg:col-span-6 md:p-9 xl:p-12">
                <div class="absolute bottom-0 w-32 -rotate-45 -top-64 -right-8 bg-gray-200/20 dark:bg-dark-800/20">
                </div>
                <div class="p-4">
                    <router-link to="/">
                        <img src="@/assets/images/main-logo.png" alt="" class="h-8 dark:hidden" />
                        <img src="@/assets/images/logo-white.png" alt="" class="hidden h-8 dark:inline-block" />
                    </router-link>
                    <h1
                        class="max-w-lg mt-8 text-2xl font-normal leading-tight capitalize md:leading-tight md:text-4xl">
                        The most straightforward way to manage your projects
                    </h1>

                    <img src="@/assets/images/others/auth-creative.png" alt=""
                        class="mt-9 xl:mt-0 relative xl:absolute xl:scale-110 rounded-lg shadow-lg xl:top-[315px] ltr:xl:left-[115px] rtl:xl:right-[115px]" />
                </div>
            </div>
            <div class="flex items-center col-span-12 lg:min-h-screen lg:col-span-6 py-9 md:py-12">
                <div class="grid w-full grid-cols-12">
                    <div class="col-span-12 mx-4 mb-0 2xl:col-span-8 2xl:col-start-3 md:mx-12 card">
                        <div class="md:p-10 card-body">
                            <h4
                                class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                                Welcome Back, Sofia!
                            </h4>
                            <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                                Don't have an account? <router-link to="auth-signup-creative"
                                    class="font-medium link link-primary">Sign Up</router-link>
                            </p>
                            <form @submit.prevent="validateForm">
                                <div v-if="alert.isVisible" :class="alert.type"
                                    class="relative py-3 text-sm rounded-md ltr:pl-5 rtl:pr-5 ltr:pr-7 rtl:pl-7">
                                    <span>{{ alert.message }}</span>
                                    <router-link to="#!" @click="alert.isVisible = false"
                                        class="absolute text-lg transition duration-200 ease-linear ltr:right-5 rtl:left-5 top-2">
                                        <i class="ri-close-fill"></i>
                                    </router-link>
                                </div>
                                <div class="grid grid-cols-12 gap-5 mt-5">
                                    <div class="col-span-12">
                                        <label for="emailOrUsername" class="form-label">Email Or Username</label>
                                        <input v-model="formData.emailOrUsername" type="text" id="emailOrUsername"
                                            class="w-full form-input" placeholder="Enter your email or username" />
                                    </div>
                                    <div class="col-span-12">
                                        <div>
                                            <label for="password" class="block mb-2 text-sm">Password</label>
                                            <div class="relative">
                                                <input v-model="formData.password"
                                                    :type="showPassword ? 'text' : 'password'" id="password"
                                                    class="w-full ltr:pr-8 rtl:pl-8 form-input"
                                                    placeholder="Enter your password" />
                                                <button type="button" @click="togglePasswordVisibility"
                                                    class="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-none dark:text-dark-500">
                                                    <i v-if="showPassword" data-lucide="eye" class="size-5"></i>
                                                    <i v-else data-lucide="eye-off" class="size-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-12">
                                        <div class="flex items-center">
                                            <div class="input-check-group grow">
                                                <input id="checkboxBasic1" class="input-check input-check-primary"
                                                    type="checkbox" />
                                                <label for="checkboxBasic1" class="input-check-label">Remember
                                                    me</label>
                                            </div>
                                            <router-link to="auth-forgot-password-creative"
                                                class="block text-sm font-medium underline transition duration-300 ease-linear ltr:text-right rtl:text-left shrink-0 text-primary-500 hover:text-primary-600">Forgot
                                                Password?</router-link>
                                        </div>
                                    </div>
                                    <div class="col-span-12">
                                        <button type="submit" class="w-full btn btn-primary">Sign In</button>
                                    </div>
                                </div>
                            </form>

                            <div
                                class="relative my-5 text-center text-gray-500 dark:text-dark-500 before:absolute before:border-gray-200 dark:before:border-dark-800 before:border-dashed before:w-full ltr:before:left-0 rtl:before:right-0 before:top-2.5 before:border-b">
                                <p class="relative inline-block px-2 bg-white dark:bg-dark-900">OR</p>
                            </div>

                            <div class="space-y-2">
                                <button type="button"
                                    class="w-full border-gray-200 dark:border-dark-800 btn hover:bg-gray-50 dark:hover:bg-dark-850 hover:text-primary-500">
                                    <img src="@/assets/images/others/google.png" alt=""
                                        class="inline-block h-4 ltr:mr-1 rtl:ml-1" /> SignIn Vie Google
                                </button>
                                <button type="button"
                                    class="w-full border-gray-200 dark:border-dark-800 btn hover:bg-gray-50 dark:hover:bg-dark-850 hover:text-primary-500">
                                    <i data-lucide="facebook"
                                        class="inline-block ltr:mr-1 rtl:ml-1 size-4 text-primary-500"></i> SignIn Vie
                                    Facebook
                                </button>
                            </div>

                            <div class="items-center gap-3 mt-5 md:flex">
                                <div class="grow">
                                    <h6 class="mb-1">Admin</h6>
                                    <p class="text-gray-500 dark:text-dark-500">Email: admin@example.com</p>
                                    <p class="text-gray-500 dark:text-dark-500">Password: admin@123</p>
                                </div>
                                <button class="shrink-0 btn btn-sub-gray mt-2.5 md:mt-0"
                                    @click="login('admin')">Login</button>
                            </div>

                            <div class="items-center gap-3 mt-3 md:flex">
                                <div class="grow">
                                    <h6 class="mb-1">Users</h6>
                                    <p class="text-gray-500 dark:text-dark-500">Email: user@example.com</p>
                                    <p class="text-gray-500 dark:text-dark-500">Password: user@123</p>
                                </div>
                                <button class="shrink-0 btn btn-sub-gray mt-2.5 md:mt-0">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import { ref } from 'vue';

const emailOrUsername = ref<string>('');

// Handle form submission
const handleSubmit = () => {
    // Log the entered email or username (you can replace this with actual submission logic)
};
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

            <div class="flex items-center min-h-screen col-span-12 py-12 lg:col-span-6">
                <div class="grid w-full grid-cols-12">
                    <div class="col-span-12 mx-12 mb-0 xl:col-span-8 xl:col-start-3 card">
                        <div class="md:p-10 card-body">
                            <h4
                                class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                                Forgot your Password?
                            </h4>
                            <p class="mb-5 text-center text-gray-500 dark:text-dark-500">Enter your email or username to
                                reset it.</p>

                            <form @submit.prevent="handleSubmit">
                                <div class="grid grid-cols-12 gap-4 mt-5">
                                    <div class="col-span-12">
                                        <label for="emailInput" class="form-label">Email or Username</label>
                                        <input v-model="emailOrUsername" type="text" id="emailInput"
                                            class="w-full form-input" placeholder="Enter your email or username"
                                            required />
                                    </div>
                                    <div class="col-span-12">
                                        <button type="submit"
                                            class="w-full px-4 py-2 text-white rounded-md bg-primary-500 hover:bg-primary-600">Reset
                                            Password</button>
                                        <p class="mt-3 text-center text-gray-500 dark:text-dark-500">
                                            Return to the
                                            <router-link to="/auth-signin-creative"
                                                class="font-medium underline link link-primary">
                                                <span class="mr-1 align-middle">Sign In</span>
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
    </div>
</template>
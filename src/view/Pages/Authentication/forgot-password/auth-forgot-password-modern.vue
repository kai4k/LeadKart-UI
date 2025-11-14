<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import { ref } from 'vue';

const emailOrUsername = ref<string>('');

// Handle form submission
const handleSubmit = () => {
    // Log the entered email or username (replace with API logic if needed)
};
</script>
<template>
    <div class="relative flex items-center justify-center min-h-screen py-12 bg-center bg-cover bg-[url('../images/others/auth.jpg')]">
        <div class="absolute inset-0 bg-gray-950/50"></div>
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 border-none shadow-none md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card bg-white/10 backdrop-blur-md">
                    <div class="md:p-10 card-body">
                        <div class="mb-5 text-center">
                            <router-link to="#!">
                                <img src="@/assets/images/logo-white.png" alt="" class="h-8 mx-auto" />
                            </router-link>
                        </div>
                        <h4 class="mb-2 leading-relaxed text-center text-white">Forgot your Password?</h4>
                        <p class="mb-5 text-center text-white/75">Enter your email or username to reset it.</p>

                        <form @submit.prevent="handleSubmit">
                            <div class="grid grid-cols-12 gap-4 mt-5">
                                <div class="col-span-12">
                                    <label for="emailInput" class="form-label text-white/75">Email or Username</label>
                                    <input v-model="emailOrUsername" type="text" id="emailInput"
                                        class="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                                        placeholder="Enter your email or username" required />
                                </div>
                                <div class="col-span-12">
                                    <button type="submit"
                                        class="w-full px-4 py-2 text-white rounded-md bg-primary-500 hover:bg-primary-600">Reset
                                        Password</button>
                                    <p class="mt-3 text-center text-white/75">
                                        Return to the
                                        <router-link to="/auth-signin-modern"
                                            class="font-medium text-white/75 hover:text-white link">
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
</template>
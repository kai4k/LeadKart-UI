<script setup lang="ts">
import { Eye, EyeOff, Facebook } from 'lucide-vue-next';
import { ref } from 'vue';

// Form data and allowed credentials
const formData = ref({
    emailOrUsername: 'admin@example.com',
    password: 'admin@123'
});
const allowedCredentials = {
    email: 'admin@example.com',
    password: 'admin@123'
};

// Alert message state
const alert = ref({
    isVisible: false,
    message: '',
    type: 'bg-red-100 text-red-500'
});

// Password visibility toggle
const showPassword = ref(false);

// Form validation
const validateForm = () => {
    alert.value.isVisible = false;
    alert.value.message = '';

    if (formData.value.emailOrUsername !== allowedCredentials.email || formData.value.password !== allowedCredentials.password) {
        showAlert('Invalid email or password', 'bg-red-100 text-red-500');
        return;
    }

    // If all validations pass
    showAlert(`You've successfully signed in to Domiex!`, 'bg-green-100 text-green-500');

    // Redirect to index.html after a short delay to allow the user to see the success message
    setTimeout(() => {
        window.location.href = '/';
    }, 1000); // Adjust the delay as needed
};

// Show alert message
const showAlert = (message: string, type: string) => {
    alert.value.message = message;
    alert.value.type = type;
    alert.value.isVisible = true;
};

// Admin login logic (for demonstration)
const login = (role: string) => {
    if (role === 'admin') {
        formData.value.emailOrUsername = 'admin@example.com';
        formData.value.password = 'admin@123';
    }
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
                            <router-link to="/"><img src="@/assets/images/logo-white.png" alt=""
                                    class="h-8 mx-auto" /></router-link>
                        </div>
                        <h4 class="mb-2 leading-relaxed text-center text-white">Welcome Back, Sofia!</h4>
                        <p class="mb-5 text-center text-white/75">Don't have an account?
                            <router-link to="auth-signup-modern" class="font-medium text-white">Sign Up</router-link>
                        </p>
                        <form @submit.prevent="validateForm">
                            <div v-if="alert.isVisible" :class="alert.type"
                                class="relative py-3 text-sm rounded-md ltr:pl-5 rtl:pr-5 ltr:pr-7 rtl:pl-7">
                                <span>{{ alert.message }}</span>
                                <router-link to="#!" @click="alert.isVisible = false"
                                    class="absolute text-lg transition duration-200 ease-linear ltr:right-5 rtl:left-5 top-2"><i
                                        class="ri-close-fill"></i></router-link>
                            </div>
                            <div class="grid grid-cols-12 gap-5 mt-5">
                                <div class="col-span-12">
                                    <label for="emailOrUsername" class="form-label text-white/75">Email Or
                                        Username</label>
                                    <input type="text" id="emailOrUsername" v-model="formData.emailOrUsername"
                                        class="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                                        placeholder="Enter your email or username" />
                                </div>
                                <div class="col-span-12">
                                    <div>
                                        <label for="password" class="block mb-2 text-sm text-white/75">Password</label>
                                        <div class="relative">
                                            <input :type="showPassword ? 'text' : 'password'" id="password"
                                                v-model="formData.password"
                                                class="text-white border-none ltr:pr-8 rtl:pl-8 form-input bg-white/10 placeholder:text-white/75"
                                                placeholder="Enter your password" />
                                            <button type="button" @click="showPassword = !showPassword"
                                                class="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-none dark:text-dark-500">
                                                <Eye v-if="showPassword" class="size-5"></Eye>
                                                <EyeOff v-if="!showPassword" class="size-5"></EyeOff>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center">
                                        <div class="input-check-group grow">
                                            <input id="checkboxBasic1"
                                                class="border-0 input-check input-check-primary bg-white/10"
                                                type="checkbox" />
                                            <label for="checkboxBasic1" class="input-check-label text-white/75">Remember
                                                me</label>
                                        </div>
                                        <router-link to="auth-forgot-password-modern"
                                            class="block text-sm font-medium underline transition duration-300 ease-linear ltr:text-right rtl:text-left shrink-0 text-white/75 hover:text-white">Forgot
                                            Password?</router-link>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <button type="submit" class="w-full btn btn-primary">Sign In</button>
                                </div>
                            </div>
                        </form>
                        <div class="relative my-5 text-center text-white/75">
                            <p>OR</p>
                        </div>
                        <div class="space-y-2">
                            <button type="button"
                                class="w-full border-white/10 text-white/75 btn hover:bg-white/10 hover:text-white">
                                <img src="@/assets/images/others/google.png" alt=""
                                    class="inline-block h-4 ltr:mr-1 rtl:ml-1"> SignIn Via Google
                            </button>
                            <button type="button"
                                class="w-full border-white/10 text-white/75 btn hover:bg-white/10 hover:text-white">
                                <Facebook class="inline-block ltr:mr-1 rtl:ml-1 size-4 text-primary-500">
                                </Facebook> SignIn Via
                                Facebook
                            </button>
                        </div>
                        <div class="flex items-center gap-3 mt-5">
                            <div class="grow">
                                <h6 class="mb-1 text-white">Admin</h6>
                                <p class="text-white/75">Email: admin@example.com</p>
                                <p class="text-white/75">Password: admin@123</p>
                            </div>
                            <button class="shrink-0 btn btn-sub-gray" @click="login('admin')">Login</button>
                        </div>
                        <div class="flex items-center gap-3 mt-3">
                            <div class="grow">
                                <h6 class="mb-1 text-white">Users</h6>
                                <p class="text-white/75">Email: user@example.com</p>
                                <p class="text-white/75">Password: user@123</p>
                            </div>
                            <button class="shrink-0 btn btn-sub-gray">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
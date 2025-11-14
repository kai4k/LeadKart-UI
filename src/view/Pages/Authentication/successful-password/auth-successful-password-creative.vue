<script setup lang="ts">
import { CircleCheckBig, MoveRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

// Setup the router instance
const router = useRouter();

// Define redirection function
const redirectToSignIn = (): void => {
    router.push('/auth-signin-basic'); // Replace with the actual sign-in route
};
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
                        <img src="@/assets/images/logo-white.png" alt="Logo (Dark)"
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
                                    <CircleCheckBig class="text-green-500 stroke-1 size-10 fill-green-500/10">
                                    </CircleCheckBig>
                                </div>
                            </div>
                            <h4
                                class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                                Password Reset!
                            </h4>
                            <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                                Your password has been successfully reset. Click below to continue accessing your
                                account.
                            </p>
                            <div class="text-center">
                                <button @click="redirectToSignIn" class="btn btn-primary">
                                    <span class="mr-1 align-middle">Return to SignIn</span>
                                    <MoveRight class="inline-block size-4 ml-0.5"></MoveRight>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
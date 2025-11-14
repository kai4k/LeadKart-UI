<script setup lang="ts">
import { CircleCheckBig, MoveRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

// Setup the router instance
const router = useRouter();

// Redirect function
const redirectToSignIn = () => {
    router.push('/auth-signin-basic'); // Update the route path as per your application
};
</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-12 from-sky-100 dark:from-sky-500/15 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-50 dark:via-green-500/10 to-pink-50 dark:to-pink-500/10">
        <div class="container">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card">
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
                            Your password has been successfully reset. Click below to continue accessing your account.
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
</template>
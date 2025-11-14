<script setup lang="ts">
import { CircleCheckBig, MoveLeft, MoveRight } from 'lucide-vue-next';

</script>
<template>
    <div
        class="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div class="col-span-12 md:col-span-6 md:col-start-4">
            <div class="flex flex-col justify-center w-full h-screen px-10 md:px-0">
                <div>
                    <CircleCheckBig data-lucide="circle-check-big"
                        class="mb-6 text-green-500 size-10 fill-green-500/10"></CircleCheckBig>
                    <h2 class="mb-2 leading-normal">Thank you, we accepted your Challenge</h2>
                    <p class="mb-6 text-gray-500 dark:text-dark-500">Usually, we need 24 hours to read the information
                        you sent. We will get back to you as soon as possible.</p>
                    <router-link to="/" class="btn btn-primary">
                        Back to Home
                        <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                        <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></MoveLeft>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
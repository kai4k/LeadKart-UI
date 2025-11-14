<script setup lang="ts">
import { CornerUpLeft, CornerUpRight, Mail, MoveLeft, MoveRight, Phone } from 'lucide-vue-next';


</script>
<template>
    <div
        class="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div class="col-span-12 lg:col-span-7">
            <div
                class="flex items-center my-10 border-gray-200 lg:ltr:border-r lg:rtl:border-l dark:border-dark-800 lg:my-0 lg:h-screen">
                <div class="px-10 xl:px-20 grow">
                    <h1 class="mb-3 text-2xl md:text-4xl">Challenge us together Get estimate</h1>
                    <p class="mb-8 text-gray-500 dark:text-dark-500">In three short steps we will establish the most
                        important details of our joint journey.</p>
                    <ul class="space-y-2 list-inside mb-9 list-square marker:text-primary-500">
                        <li>Customize Your Projects</li>
                        <li>Create Your Own website</li>
                        <li>Determining the skills of specialists</li>
                        <li>Details about the project</li>
                        <li>Customize your layouts</li>
                    </ul>
                    <router-link to="pages-contact-us-two" class="btn btn-primary">
                        Start Your Own
                        <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                        <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></MoveLEft>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-5">
            <div class="flex flex-col justify-center w-full px-10 lg:h-screen xl:px-20">
                <h4 class="mb-4">Check what will help you with the estimation of your project.</h4>
                <ul class="space-y-2 text-green-500 mb-7">
                    <li>
                        <CornerUpRight class="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4"></CornerUpRight>
                        <CornerUpLeft class="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4"></CornerUpLeft>
                        What knowledge do we need for the estimate
                    </li>
                    <li>
                        <CornerUpRight class="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4"></CornerUpRight>
                        <CornerUpLeft class="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4"></CornerUpLeft>
                        Sample estimation and cost calculation
                    </li>
                </ul>

                <div class="my-10 lg:mb-0 lg:mt-20">
                    <h5 class="mb-4">You can also contact us directly.</h5>
                    <div class="flex gap-3">
                        <img src="@/assets/images/avatar/user-16.png" alt="" class="rounded-md size-14 shrink-0">
                        <div class="grow">
                            <h6>SRBThemes</h6>
                            <p class="mb-3 text-gray-500 dark:text-dark-500">IT Company</p>
                            <ul class="space-y-2">
                                <li>
                                    <Mail
                                        class="inline-block text-gray-500 ltr:mr-1 rtl:ml-1 dark:text-dark-500 size-4">
                                    </Mail>
                                    <a href="mailto:support@example.com"
                                        class="ml-1 transition duration-200 ease-linear hover:text-primary-500">support@example.com</a>
                                </li>
                                <li>
                                    <Phone
                                        class="inline-block text-gray-500 ltr:mr-1 rtl:ml-1 dark:text-dark-500 size-4">
                                    </Phone>
                                    +(231) 12345 67890
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
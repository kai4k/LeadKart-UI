<script setup lang="ts">
import { EyeOff, Trash2 } from 'lucide-vue-next';
import { handleTemporaryDisable, handlePermanentDelete, deactivateNotice } from './deactivation-notice'
</script>
<template>
    <div class="relative flex items-center justify-center min-h-screen py-12 bg-center bg-cover bg-[url('../images/others/auth.jpg')]">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gray-950/50"></div>
        <div class="container relative">
            <div class="grid grid-cols-12">
                <!-- Card -->
                <div
                    class="col-span-12 mb-0 border-none shadow-none md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card bg-white/10 backdrop-blur-md">
                    <div class="md:p-10 card-body">
                        <!-- Logo -->
                        <div class="mb-5 text-center">
                            <router-link to="/">
                                <img src="@/assets/images/logo-white.png" alt="Logo" class="h-8 mx-auto" />
                            </router-link>
                        </div>
                        <!-- Title -->
                        <h4 class="mb-2 leading-relaxed text-center text-white">Account Deactivation</h4>
                        <p class="mb-5 text-center text-white/75">Domiex Security and Privacy</p>
                        <!-- Temporary Disable Option -->
                        <template v-for="(item, index) in deactivateNotice" :key="index">

                            <div class="flex gap-3 mb-3">
                                <div class="text-white shrink-0">
                                    <component :is="item.icon"></component>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-white">{{ item.title }}</h6>
                                    <p class="text-white/60">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </template>
                        <!-- Action Buttons -->
                        <div class="justify-center gap-2 mt-6 sm:flex">
                            <button @click="handleTemporaryDisable" class="btn btn-primary">Temporary Disable</button>
                            <button @click="handlePermanentDelete" class="btn btn-red mt-2.5 sm:mt-0">Permanent
                                Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
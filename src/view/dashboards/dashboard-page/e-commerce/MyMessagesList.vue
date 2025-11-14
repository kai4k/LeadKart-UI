<script setup lang="ts">
import { ref } from 'vue';

const openTab = ref(1);
const activeClasses = 'active nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50';
const inactiveClasses = 'text-gray-500 hover:text-primary-500 dark:text-dark-500 dark:hover:text-primary-500';
import { messages, allMessages } from './ecommorece-data';

</script>
<template>
    <div>
        <ul class="tabs-pills *:grow bg-gray-100 rounded-md dark:bg-dark-850">
            <li @click="openTab = 1">
                <router-link to="#!" :class="openTab === 1 ? activeClasses : inactiveClasses" class="nav-item">
                    New Message
                </router-link>
            </li>
            <li @click="openTab = 2">
                <router-link to="#!" :class="openTab === 2 ? activeClasses : inactiveClasses" class="nav-item">
                    All Message
                </router-link>
            </li>
        </ul>
        <div class="mt-4">
            <div v-if="openTab === 1" class="space-y-4">
                <router-link v-for="(message, index) in messages" :key="index" to="#!" class="flex gap-3">
                    <div class="rounded-full size-10 shrink-0">
                        <img :src="message.avatar" loading="lazy" alt="" class="rounded-full" />
                    </div>
                    <div class="overflow-hidden grow">
                        <h6 class="mb-0.5">{{ message.name }}</h6>
                        <p class="text-xs text-gray-500 truncate dark:text-dark-500">{{ message.text }}</p>
                    </div>
                    <p class="text-xs shrink-0">{{ message.time }}</p>
                </router-link>
            </div>
            <div v-if="openTab === 2" class="space-y-4">
                <router-link v-for="(message, index) in allMessages" :key="index" to="#!" class="flex gap-3">
                    <div class="rounded-full size-10 shrink-0">
                        <img :src="message.avatar" loading="lazy" alt="" class="rounded-full" />
                    </div>
                    <div class="overflow-hidden grow">
                        <h6 class="mb-0.5">{{ message.name }}</h6>
                        <p class="text-xs text-gray-500 truncate dark:text-dark-500">{{ message.text }}</p>
                    </div>
                    <p class="text-xs shrink-0">{{ message.time }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
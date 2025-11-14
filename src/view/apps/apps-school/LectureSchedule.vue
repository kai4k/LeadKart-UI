<script setup lang="ts">

import { ref } from "vue";
defineProps({
    listObject: {
        type: Object,
        default: {}
    }
})
</script>
<template>
    <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div class="card-header">
            <h6 class="card-title">Upcoming Lecture</h6>
        </div>
        <div class="card-body">
            <div class="space-y-3">
                <!-- Loop through lectures -->
                <div v-for="lecture in listObject" :key="lecture.id" class="flex gap-3 item-center">
                    <div :class="`flex items-center justify-center rounded-md shrink-0 size-10 ${lecture.bgColor}`">
                        <component :is="lecture.icon" class="size-5"></component>
                    </div>
                    <div class="grow">
                        <h6>{{ lecture.subject }}</h6>
                        <p class="text-gray-500 dark:text-dark-500">{{ lecture.time }}</p>
                    </div>
                    <div class="shrink-0">
                        <a href="#!" :class="`btn ${lecture.btnColor} btn-xs`">
                            <i class="ri-eye-line"></i> Live
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
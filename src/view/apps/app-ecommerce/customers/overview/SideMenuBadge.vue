<script setup lang="ts">
import { ref } from 'vue';

const badges = ref([
    {
        label: 'New Users',
        img: new URL('@/assets/images/others/new.png', import.meta.url).href
    },
    {
        label: 'Verified Badge',
        img: new URL('@/assets/images/others/quality.png', import.meta.url).href
    },
    {
        label: 'Verified Badge',
        img: new URL('@/assets/images/others/high-quality.png', import.meta.url).href
    },
    {
        label: 'Reward',
        img: new URL('@/assets/images/others/reward.png', import.meta.url).href
    },
]);
</script>
<template>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Badges</h6>
        </div>
        <div class="flex items-center gap-2 card-body">
            <template v-for="(badge, index) in badges" :key="index">
                <div class="col-start-2 text-center">
                    <div class="">
                        <img :src="badge.img" alt="New Users" class="size-7" />
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
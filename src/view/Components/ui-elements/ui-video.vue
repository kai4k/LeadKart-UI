<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

interface Video {
    title: string;
    src: string;
    aspectClass: string;
}

const videos = ref<Video[]>([
    {
        title: 'Aspect Auto',
        src: 'https://www.youtube.com/embed/DxcJbrs6rKk?si=r9xt6eHRj0kayf8d',
        aspectClass: 'aspect-video',
    },
    {
        title: 'Aspect Video (16 / 9)',
        src: 'https://www.youtube.com/embed/Tmkr2kKUEgU?si=g6q_jn3gzqxK_CMj',
        aspectClass: 'aspect-video',
    },
    {
        title: 'Aspect Video (21 / 9)',
        src: 'https://www.youtube.com/embed/eSzNNYk7nVU?si=EHJjJ8BjAsp6yMgx',
        aspectClass: 'aspect-21/9',
    },
]);

const videoList = ref<Video[]>([
    {
        title: 'Aspect Square (1 / 1)',
        src: 'https://www.youtube.com/embed/MAtaT8BZEAo?si=iyOi2lREUWB35ct6',
        aspectClass: 'aspect-square',
    },
    {
        title: 'Aspect 4 / 3',
        src: 'https://www.youtube.com/embed/WJDw1J7FZnE?si=K3rzRikfvdzhJjI_',
        aspectClass: 'aspect-4/3',
    },
]);
</script>
<template>
    <pageHeading title="Video" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6">
            <div class="card" v-for="(video, index) in videos" :key="index">
                <div class="card-header">
                    <h6 class="card-title">{{ video.title }}</h6>
                </div>
                <div class="card-body">
                    <iframe class="w-full rounded-xl" :class="video.aspectClass" :src="video.src"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card" v-for="(video, index) in videoList" :key="index">
                <div class="card-header">
                    <h6 class="card-title">{{ video.title }}</h6>
                </div>
                <div class="card-body">
                    <iframe class="w-full rounded-xl" :class="video.aspectClass" :src="video.src"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    </div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import PageHeading from '@/components/common/PageHeading.vue';

onMounted(() => {
    AOS.init();
});
const effects = [
    'fade-up',
    'fade-down',
    'fade-right',
    'fade-left',
    'fade-up-right',
    'fade-up-left',
    'fade-down-right',
    'fade-down-left'
];
const animations = [
    'flip-left',
    'flip-right',
    'flip-up',
    'flip-down',
];

const zoomEffects = [
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'zoom-in-left',
    'zoom-in-right',
    'zoom-out',
    'zoom-out-up',
    'zoom-out-down',
    'zoom-out-right',
    'zoom-out-left',
];


const differentAnimations = [
    {
        attributes: {
            'data-aos': 'fade-up',
            'data-aos-duration': '3000',
        },
        code: 'data-aos="fade-up" data-aos-duration="3000"',
    },
    {
        attributes: {
            'data-aos': 'fade-down',
            'data-aos-easing': 'linear',
            'data-aos-duration': '1500',
        },
        code: 'data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"',
    },
    {
        attributes: {
            'data-aos': 'fade-right',
            'data-aos-offset': '300',
            'data-aos-easing': 'ease-in-sine',
        },
        code: 'data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"',
    },
    {
        attributes: {
            'data-aos': 'fade-left',
            'data-aos-anchor': '#example-anchor',
            'data-aos-offset': '500',
            'data-aos-duration': '500',
        },
        code: 'data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500"',
    },
    {
        attributes: {
            'data-aos': 'fade-zoom-in',
            'data-aos-easing': 'ease-in-back',
            'data-aos-delay': '300',
            'data-aos-offset': '0',
        },
        code: 'data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"',
    },
    {
        attributes: {
            'data-aos': 'flip-left',
            'data-aos-easing': 'ease-out-cubic',
            'data-aos-duration': '2000',
        },
        code: 'data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"',
    },
];

const anchorAnimations = [
    {
        attributes: {
            'data-aos': 'fade-up',
            'data-aos-anchor-placement': 'top-bottom',
        },
        code: 'data-aos="fade-up" data-aos-anchor-placement="top-bottom"',
    },
    {
        attributes: {
            'data-aos': 'fade-up',
            'data-aos-anchor-placement': 'center-bottom',
        },
        code: 'data-aos="fade-up" data-aos-anchor-placement="center-bottom"',
    },
    {
        attributes: {
            'data-aos': 'fade-up',
            'data-aos-anchor-placement': 'center-center',
        },
        code: 'data-aos="fade-up" data-aos-anchor-placement="center-center"',
    },
    {
        attributes: {
            'data-aos': 'fade-up',
            'data-aos-anchor-placement': 'bottom-bottom',
        },
        code: 'data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"',
    },
    {
        attributes: {
            'data-aos': 'fade-up',
            'data-aos-anchor-placement': 'top-center',
        },
        code: 'data-aos="fade-up" data-aos-anchor-placement="top-center"',
    },
];
</script>
<template>
    <PageHeading title="Animation" sub-title="UI Advanced" />
    <h5 class="mb-5 underline">Fade Animation:</h5>
    <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div class="card" v-for="(effect, index) in effects" :key="index">
            <div class="card-body">
                <div class="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
                    :data-aos="effect"></div>
                <div class="mt-3 text-center">
                    <code class="text-pink-500">{{ `data-aos="${effect}"` }}</code>
                </div>
            </div>
        </div>
    </div>
    <h5 class="mb-5 underline">Flip Animation:</h5>
    <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div class="card" v-for="(animation, index) in animations" :key="index">
            <div class="card-body">
                <div class="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
                    :data-aos="animation"></div>
                <div class="mt-3 text-center">
                    <code class="text-pink-500">{{ `data-aos="${animation}"` }}</code>
                </div>
            </div>
        </div>
    </div>
    <h5 class="mb-5 underline">Zoom Animation:</h5>
    <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div class="card" v-for="(zoomEffect, index) in zoomEffects" :key="index">
            <div class="card-body">
                <div class="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
                    :data-aos="zoomEffect"></div>
                <div class="mt-3 text-center">
                    <code class="text-pink-500">{{ `data-aos="${zoomEffect}"` }}</code>
                </div>
            </div>
        </div>
    </div>
    <h5 class="mb-5 underline">Different settings examples Animation:</h5>
    <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div class="card" v-for="(animation, index) in differentAnimations" :key="index">
            <div class="card-body">
                <div class="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
                    v-bind="animation.attributes"></div>
                <div class="mt-3 text-center">
                    <code class="text-pink-500">{{ animation.code }}</code>
                </div>
            </div>
        </div>
    </div>
    <h5 class="mb-5 underline">Anchor placement:</h5>
    <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-x-space">
        <div class="card" v-for="(animation, index) in anchorAnimations" :key="index">
            <div class="card-body">
                <div class="mx-auto size-56 sm:size-64 md:size-80 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-sky-500/20"
                    v-bind="animation.attributes"></div>
                <div class="mt-3 text-center">
                    <code class="text-pink-500">{{ animation.code }}</code>
                </div>
            </div>
        </div>
    </div>
</template>
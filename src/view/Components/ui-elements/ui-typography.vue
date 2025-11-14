<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
const fonts = [
    { label: 'Base Font Family', class: 'font-body', code: '.font-body' },
    { label: 'Heading Font Family', class: 'font-heading', code: '.font-heading' },
];
const headings = [
    { tag: 'h1', text: 'The quick brown fox jumps over the lazy dog. (h1)' },
    { tag: 'h2', text: 'The quick brown fox jumps over the lazy dog. (h2)' },
    { tag: 'h3', text: 'The quick brown fox jumps over the lazy dog. (h3)' },
    { tag: 'h4', text: 'The quick brown fox jumps over the lazy dog. (h4)' },
    { tag: 'h5', text: 'The quick brown fox jumps over the lazy dog. (h5)' },
    { tag: 'h6', text: 'The quick brown fox jumps over the lazy dog. (h6)' },
];

const fontsWeight = [
    { className: 'font-thin' },
    { className: 'font-extralight' },
    { className: 'font-light' },
    { className: 'font-normal' },
    { className: 'font-medium' },
    { className: 'font-semibold' },
    { className: 'font-bold' },
    { className: 'font-extrabold' },
    { className: 'font-black' },
];
</script>
<template>
    <pageHeading title="Typography" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Font Family</h6>
            </div>
            <div class="card-body">
                <div class="grid gap-space lg:grid-cols-6">
                    <div v-for="(font, index) in fonts" :key="index">
                        <h6 class="mb-2" :class="font.class">{{ font.label }}</h6>
                        <code class="text-pink-500">{{ font.code }}</code>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Heading Title</h6>
            </div>
            <div class="space-y-4 card-body">
                <div v-for="(heading, index) in headings" :key="index">
                    <component :is="heading.tag" class="heading">
                        {{ heading.text }}
                    </component>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Font Weight</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-space sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    <div v-for="(font, index) in fontsWeight" :key="index">
                        <code class="text-pink-500">.{{ font.className }}</code>
                        <h6 class="mt-2" :class="font.className">The quick brown fox jumps over the lazy dog.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
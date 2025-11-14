<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

interface Shade {
    class: string;
    codeClass: string;
    className: string;
}

interface Color {
    name: string;
    shades: Shade[];
}

const colorList = ref<Color[]>([
    {
        name: 'Primary',
        shades: [
            { class: 'bg-primary-50', codeClass: 'text-sm text-primary-500', className: '.bg-primary-50' },
            { class: 'bg-primary-100', codeClass: 'text-sm text-primary-500', className: '.bg-primary-100' },
            { class: 'bg-primary-200', codeClass: 'text-sm text-primary-500', className: '.bg-primary-200' },
            { class: 'bg-primary-300', codeClass: 'text-sm text-primary-500', className: '.bg-primary-300' },
            { class: 'bg-primary-400', codeClass: 'text-sm text-primary-700', className: '.bg-primary-400' },
            { class: 'bg-primary-500', codeClass: 'text-sm text-primary-100', className: '.bg-primary-500' },
            { class: 'bg-primary-600', codeClass: 'text-sm text-primary-100', className: '.bg-primary-600' },
            { class: 'bg-primary-700', codeClass: 'text-sm text-primary-200', className: '.bg-primary-700' },
            { class: 'bg-primary-800', codeClass: 'text-sm text-primary-200', className: '.bg-primary-800' },
            { class: 'bg-primary-900', codeClass: 'text-sm text-primary-200', className: '.bg-primary-900' },
            { class: 'bg-primary-950', codeClass: 'text-sm text-primary-200', className: '.bg-primary-950' },
        ],
    },
    {
        name: 'Purple',
        shades: [
            { class: 'bg-purple-50', codeClass: 'text-sm text-purple-500', className: '.bg-purple-50' },
            { class: 'bg-purple-100', codeClass: 'text-sm text-purple-500', className: '.bg-purple-100' },
            { class: 'bg-purple-200', codeClass: 'text-sm text-purple-500', className: '.bg-purple-200' },
            { class: 'bg-purple-300', codeClass: 'text-sm text-purple-500', className: '.bg-purple-300' },
            { class: 'bg-purple-400', codeClass: 'text-sm text-purple-700', className: '.bg-purple-400' },
            { class: 'bg-purple-500', codeClass: 'text-sm text-purple-100', className: '.bg-purple-500' },
            { class: 'bg-purple-600', codeClass: 'text-sm text-purple-100', className: '.bg-purple-600' },
            { class: 'bg-purple-700', codeClass: 'text-sm text-purple-200', className: '.bg-purple-700' },
            { class: 'bg-purple-800', codeClass: 'text-sm text-purple-200', className: '.bg-purple-800' },
            { class: 'bg-purple-900', codeClass: 'text-sm text-purple-200', className: '.bg-purple-900' },
            { class: 'bg-purple-950', codeClass: 'text-sm text-purple-200', className: '.bg-purple-950' },
        ],
    },
    {
        name: 'Green',
        shades: [
            { class: 'bg-green-50', codeClass: 'text-sm text-green-500', className: '.bg-green-50' },
            { class: 'bg-green-100', codeClass: 'text-sm text-green-500', className: '.bg-green-100' },
            { class: 'bg-green-200', codeClass: 'text-sm text-green-500', className: '.bg-green-200' },
            { class: 'bg-green-300', codeClass: 'text-sm text-green-500', className: '.bg-green-300' },
            { class: 'bg-green-400', codeClass: 'text-sm text-green-700', className: '.bg-green-400' },
            { class: 'bg-green-500', codeClass: 'text-sm text-green-100', className: '.bg-green-500' },
            { class: 'bg-green-600', codeClass: 'text-sm text-green-100', className: '.bg-green-600' },
            { class: 'bg-green-700', codeClass: 'text-sm text-green-200', className: '.bg-green-700' },
            { class: 'bg-green-800', codeClass: 'text-sm text-green-200', className: '.bg-green-800' },
            { class: 'bg-green-900', codeClass: 'text-sm text-green-200', className: '.bg-green-900' },
            { class: 'bg-green-950', codeClass: 'text-sm text-green-200', className: '.bg-green-950' },
        ],
    },
    {
        name: 'Red',
        shades: [
            { class: 'bg-red-50', codeClass: 'text-sm text-red-500', className: '.bg-red-50' },
            { class: 'bg-red-100', codeClass: 'text-sm text-red-500', className: '.bg-red-100' },
            { class: 'bg-red-200', codeClass: 'text-sm text-red-500', className: '.bg-red-200' },
            { class: 'bg-red-300', codeClass: 'text-sm text-red-500', className: '.bg-red-300' },
            { class: 'bg-red-400', codeClass: 'text-sm text-red-700', className: '.bg-red-400' },
            { class: 'bg-red-500', codeClass: 'text-sm text-red-100', className: '.bg-red-500' },
            { class: 'bg-red-600', codeClass: 'text-sm text-red-100', className: '.bg-red-600' },
            { class: 'bg-red-700', codeClass: 'text-sm text-red-200', className: '.bg-red-700' },
            { class: 'bg-red-800', codeClass: 'text-sm text-red-200', className: '.bg-red-800' },
            { class: 'bg-red-900', codeClass: 'text-sm text-red-200', className: '.bg-red-900' },
            { class: 'bg-red-950', codeClass: 'text-sm text-red-200', className: '.bg-red-950' },
        ],
    },
    {
        name: 'Yellow',
        shades: [
            { class: 'bg-yellow-50', codeClass: 'text-sm text-yellow-500', className: '.bg-yellow-50' },
            { class: 'bg-yellow-100', codeClass: 'text-sm text-yellow-500', className: '.bg-yellow-100' },
            { class: 'bg-yellow-200', codeClass: 'text-sm text-yellow-500', className: '.bg-yellow-200' },
            { class: 'bg-yellow-300', codeClass: 'text-sm text-yellow-500', className: '.bg-yellow-300' },
            { class: 'bg-yellow-400', codeClass: 'text-sm text-yellow-700', className: '.bg-yellow-400' },
            { class: 'bg-yellow-500', codeClass: 'text-sm text-yellow-100', className: '.bg-yellow-500' },
            { class: 'bg-yellow-600', codeClass: 'text-sm text-yellow-100', className: '.bg-yellow-600' },
            { class: 'bg-yellow-700', codeClass: 'text-sm text-yellow-200', className: '.bg-yellow-700' },
            { class: 'bg-yellow-800', codeClass: 'text-sm text-yellow-200', className: '.bg-yellow-800' },
            { class: 'bg-yellow-900', codeClass: 'text-sm text-yellow-200', className: '.bg-yellow-900' },
            { class: 'bg-yellow-950', codeClass: 'text-sm text-yellow-200', className: '.bg-yellow-950' },
        ],
    },
    {
        name: 'Sky',
        shades: [
            { class: 'bg-sky-50', codeClass: 'text-sm text-sky-500', className: '.bg-sky-50' },
            { class: 'bg-sky-100', codeClass: 'text-sm text-sky-500', className: '.bg-sky-100' },
            { class: 'bg-sky-200', codeClass: 'text-sm text-sky-500', className: '.bg-sky-200' },
            { class: 'bg-sky-300', codeClass: 'text-sm text-sky-500', className: '.bg-sky-300' },
            { class: 'bg-sky-400', codeClass: 'text-sm text-sky-700', className: '.bg-sky-400' },
            { class: 'bg-sky-500', codeClass: 'text-sm text-sky-100', className: '.bg-sky-500' },
            { class: 'bg-sky-600', codeClass: 'text-sm text-sky-100', className: '.bg-sky-600' },
            { class: 'bg-sky-700', codeClass: 'text-sm text-sky-200', className: '.bg-sky-700' },
            { class: 'bg-sky-800', codeClass: 'text-sm text-sky-200', className: '.bg-sky-800' },
            { class: 'bg-sky-900', codeClass: 'text-sm text-sky-200', className: '.bg-sky-900' },
            { class: 'bg-sky-950', codeClass: 'text-sm text-sky-200', className: '.bg-sky-950' },
        ],
    },
    {
        name: 'Pink',
        shades: [
            { class: 'bg-pink-50', codeClass: 'text-sm text-pink-500', className: '.bg-pink-50' },
            { class: 'bg-pink-100', codeClass: 'text-sm text-pink-500', className: '.bg-pink-100' },
            { class: 'bg-pink-200', codeClass: 'text-sm text-pink-500', className: '.bg-pink-200' },
            { class: 'bg-pink-300', codeClass: 'text-sm text-pink-500', className: '.bg-pink-300' },
            { class: 'bg-pink-400', codeClass: 'text-sm text-pink-700', className: '.bg-pink-400' },
            { class: 'bg-pink-500', codeClass: 'text-sm text-pink-100', className: '.bg-pink-500' },
            { class: 'bg-pink-600', codeClass: 'text-sm text-pink-100', className: '.bg-pink-600' },
            { class: 'bg-pink-700', codeClass: 'text-sm text-pink-200', className: '.bg-pink-700' },
            { class: 'bg-pink-800', codeClass: 'text-sm text-pink-200', className: '.bg-pink-800' },
            { class: 'bg-pink-900', codeClass: 'text-sm text-pink-200', className: '.bg-pink-900' },
            { class: 'bg-pink-950', codeClass: 'text-sm text-pink-200', className: '.bg-pink-950' },
        ],
    },
    {
        name: 'Indigo',
        shades: [
            { class: 'bg-indigo-50', codeClass: 'text-sm text-indigo-500', className: '.bg-indigo-50' },
            { class: 'bg-indigo-100', codeClass: 'text-sm text-indigo-500', className: '.bg-indigo-100' },
            { class: 'bg-indigo-200', codeClass: 'text-sm text-indigo-500', className: '.bg-indigo-200' },
            { class: 'bg-indigo-300', codeClass: 'text-sm text-indigo-500', className: '.bg-indigo-300' },
            { class: 'bg-indigo-400', codeClass: 'text-sm text-indigo-700', className: '.bg-indigo-400' },
            { class: 'bg-indigo-500', codeClass: 'text-sm text-indigo-100', className: '.bg-indigo-500' },
            { class: 'bg-indigo-600', codeClass: 'text-sm text-indigo-100', className: '.bg-indigo-600' },
            { class: 'bg-indigo-700', codeClass: 'text-sm text-indigo-200', className: '.bg-indigo-700' },
            { class: 'bg-indigo-800', codeClass: 'text-sm text-indigo-200', className: '.bg-indigo-800' },
            { class: 'bg-indigo-900', codeClass: 'text-sm text-indigo-200', className: '.bg-indigo-900' },
            { class: 'bg-indigo-950', codeClass: 'text-sm text-indigo-200', className: '.bg-indigo-950' },
        ],
    },
    {
        name: 'Gray',
        shades: [
            { class: 'bg-gray-50', codeClass: 'text-sm text-gray-500', className: '.bg-gray-50' },
            { class: 'bg-gray-100', codeClass: 'text-sm text-gray-500', className: '.bg-gray-100' },
            { class: 'bg-gray-200', codeClass: 'text-sm text-gray-500', className: '.bg-gray-200' },
            { class: 'bg-gray-300', codeClass: 'text-sm text-gray-500', className: '.bg-gray-300' },
            { class: 'bg-gray-400', codeClass: 'text-sm text-gray-700', className: '.bg-gray-400' },
            { class: 'bg-gray-500', codeClass: 'text-sm text-gray-100', className: '.bg-gray-500' },
            { class: 'bg-gray-600', codeClass: 'text-sm text-gray-100', className: '.bg-gray-600' },
            { class: 'bg-gray-700', codeClass: 'text-sm text-gray-200', className: '.bg-gray-700' },
            { class: 'bg-gray-800', codeClass: 'text-sm text-gray-200', className: '.bg-gray-800' },
            { class: 'bg-gray-900', codeClass: 'text-sm text-gray-200', className: '.bg-gray-900' },
            { class: 'bg-gray-950', codeClass: 'text-sm text-gray-200', className: '.bg-gray-950' },
        ],
    },
    {
        name: 'Slate',
        shades: [
            { class: 'bg-slate-50', codeClass: 'text-sm text-slate-500', className: '.bg-slate-50' },
            { class: 'bg-slate-100', codeClass: 'text-sm text-slate-500', className: '.bg-slate-100' },
            { class: 'bg-slate-200', codeClass: 'text-sm text-slate-500', className: '.bg-slate-200' },
            { class: 'bg-slate-300', codeClass: 'text-sm text-slate-500', className: '.bg-slate-300' },
            { class: 'bg-slate-400', codeClass: 'text-sm text-slate-700', className: '.bg-slate-400' },
            { class: 'bg-slate-500', codeClass: 'text-sm text-slate-100', className: '.bg-slate-500' },
            { class: 'bg-slate-600', codeClass: 'text-sm text-slate-100', className: '.bg-slate-600' },
            { class: 'bg-slate-700', codeClass: 'text-sm text-slate-200', className: '.bg-slate-700' },
            { class: 'bg-slate-800', codeClass: 'text-sm text-slate-200', className: '.bg-slate-800' },
            { class: 'bg-slate-900', codeClass: 'text-sm text-slate-200', className: '.bg-slate-900' },
            { class: 'bg-slate-950', codeClass: 'text-sm text-slate-200', className: '.bg-slate-950' },
        ],
    },
]);

</script>
<template>
    <pageHeading title="Colors" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Colors Shades</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5">
                    <div v-for="(color, index) in colorList" :key="index">
                        <h6 class="mb-2">{{ color.name }}</h6>
                        <ul class="*:h-9 text-center *:flex *:items-center *:justify-center">
                            <li v-for="(shade, shadeIndex) in color.shades" :key="shadeIndex" :class="shade.class">
                                <code :class="shade.codeClass">{{ shade.className }}</code>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
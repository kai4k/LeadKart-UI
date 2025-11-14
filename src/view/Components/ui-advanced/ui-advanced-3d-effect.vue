<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
    const tiltElements: any = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach((tiltElement: any) => {
        VanillaTilt.init(tiltElement, {
            glare: tiltElement.hasAttribute('data-tilt-glare'), // Enable glare if attribute exists
            "max-glare": tiltElement.getAttribute('data-tilt-max-glare') || 0, // Get max glare from attribute or default to 0
            reverse: true,
        });
    });
});
</script>
<template>
    <pageHeading title="3D Effect" sub-title="UI Advanced" />
    <!-- <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
                    data-tilt></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Glare effect</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will enable a glare effect. You can tweak the glare value with
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
                    data-tilt data-tilt-glare data-tilt-max-glare="0.8"></div>
            </div>
        </div>
    </div> -->
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
                    data-tilt></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Glare effect</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will enable a glare effect. You can tweak the glare value with
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
                    data-tilt data-tilt-glare data-tilt-max-glare="0.8"></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Reverse Tilt</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will reverse the tilt.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-sky-600 to-sky-800"
                    data-tilt data-tilt-reverse="true"></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Keep Floating</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will not reset the tilt element when the user mouse leaves the element.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-primary-600 to-primary-800"
                    data-tilt data-tilt-reset=""></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Full Page Listening</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will make the element respond to any mouse movements on page.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
                    data-tilt data-tilt-full-page-listening="true"></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Scale on Hover</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will scale the tilt element on hover.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500"
                    data-tilt data-tilt-scale="1.1"></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Start Tilt Position</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will tilt the element at specific degrees at page load.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-sky-600 to-sky-800"
                    data-tilt data-tilt-startX="-20" data-tilt-startY="20" data-tilt-reset-to-start="true"></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Disable X Axis</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will disable the X-Axis on the tilt element.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
                    data-tilt data-tilt-axis="y"></div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Disable Y Axis</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">
                    Setting this option will disable the Y-Axis on the tilt element.
                </p>
                <div class="mx-auto shadow-lg size-56 sm:size-64 md:size-80 shadow-gray-300 dark:shadow-dark-800 bg-gradient-to-br from-green-500 via-indigo-500 to-sky-500"
                    data-tilt data-tilt-axis="x"></div>
            </div>
        </div>
    </div>
</template>

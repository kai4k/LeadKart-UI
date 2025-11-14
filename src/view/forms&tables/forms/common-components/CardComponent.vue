<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'Basic'
    },
    extraCss: {
        type: String,
        default: 'flex flex-col gap-2 '
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    halfWidth: {
        type: Boolean,
        default: false,
    }
})
</script>
<template>
    <div class="col-span-12 card" :class="{ 'sm:col-span-6 md:col-span-4': !fullWidth, 'md:col-span-6': halfWidth }">
        <div class="card-header">
            <h6 class="card-title">{{ title }}</h6>
        </div>
        <div class="card-body" :class="extraCss">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: {
        type: String,
    }
})
</script>
<template>
    <div class="col-span-12 card">
        <div class="card-header">
            <h6 class="card-title">{{ title }}</h6>
        </div>
        <div class="flex flex-col gap-5 card-body">
            <slot></slot>
        </div>
    </div>
</template>
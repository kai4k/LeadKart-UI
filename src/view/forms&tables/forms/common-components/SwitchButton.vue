<script setup lang="ts">
defineProps({
    title: {
        type: String,
    },
    extraClass: {
        type: String,
    }
})
</script>
<template>
    <div class="col-span-12 card" :class="extraClass">
        <div class="card-header">
            <h6 class="card-title">{{ title }}</h6>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>
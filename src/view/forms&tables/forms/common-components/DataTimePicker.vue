<script setup lang="ts">
defineProps({
    title: {
        type: String,
    }
})
</script>
<template>
    <div class="col-span-12 lg:col-span-6 card">
        <div class="card-header">
            <h6 class="card-title">{{ title }}</h6>
        </div>
        <div class="card-body">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
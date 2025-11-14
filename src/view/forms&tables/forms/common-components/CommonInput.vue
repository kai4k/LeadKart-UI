<script setup lang="ts">
import { ref } from 'vue';
defineProps({
    header: {
        type: String,
    },
    title: {
        type: String,
    },
    extraCss: {
        type: String,
    },
    inputCss: {
        type: String
    },
    placeholder: {
        type: String
    },
    value: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
    }
})
</script>
<template>
    <div class="col-span-12 md:col-span-6 card" :class="extraCss">
        <div class="card-header">
            <h6 class="card-title">{{ header }}</h6>
        </div>
        <div class="card-body">
            <label for="basicInput1" class="form-label">{{ title }}</label>
            <input :value="value" type="text" id="basicInput1" class="form-input" :placeholder="placeholder"
                :disabled="disabled" :class="inputCss" />
        </div>
    </div>
</template>
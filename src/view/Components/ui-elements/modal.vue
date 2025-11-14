<script setup lang="ts">
import { defineProps } from 'vue';
import { RiCloseLine } from 'vue-remix-icons'
const props = defineProps<{
    title: string;
    position: string;
}>();
const emit = defineEmits<{
    (e: 'close'): void;
}>();

function handleClose() {
    emit('close');
}
const modalId = props.title.replace(/\s+/g, '').toLowerCase(); // Convert title to ID
</script>
<template>
    <div :id="modalId" class="modal">
        <div :class="['modal-wrap', position]">
            <div class="modal-header">
                <h6>{{ title }}</h6>
                <button @click="$emit('close')" class="link link-red">
                    <RiCloseLine data-lucide="x" class="size-5" />
                </button>
            </div>
            <div class="modal-content">
                <slot name="content" />
            </div>
            <div class="modal-footer">
                <h6>Modal Footer</h6>
            </div>
        </div>
        <div id="backDropDiv" class="backdrop-overlay backdrop-blur-xs" @click="handleClose"></div>
    </div>
</template>
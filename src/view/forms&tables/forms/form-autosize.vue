<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from './common-components/CardComponent.vue';
import { ref, onMounted, watchEffect } from 'vue';

const charCount = ref(0);
const textarea = ref<HTMLTextAreaElement | null>(null);
const container = ref<HTMLDivElement | null>(null);

const updateTextarea = () => {
    if (textarea.value) {
        resizeTextarea(textarea.value as HTMLTextAreaElement);
        updateCharCount(textarea.value as HTMLTextAreaElement);
    }
};

const resizeTextarea = (el: HTMLTextAreaElement) => {
    if (el) {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight + 4}px`;
    }
};

const updateCharCount = (el: HTMLTextAreaElement) => {
    charCount.value = el.value.length;
};

onMounted(() => {
    if (container.value && textarea.value) {
        const resizeObserver = new ResizeObserver(() => {
            resizeTextarea(textarea.value as HTMLTextAreaElement);
        });
        resizeObserver.observe(container.value as HTMLDivElement);
    }
});

watchEffect(() => {
    if (textarea.value) {
        updateCharCount(textarea.value as HTMLTextAreaElement);
    }
});
</script>
<template>
    <PageHeading title="Autosize" sub-title="Forms" />
    <CardBody title="Autosize Textarea">
        <div ref="container">
            <div>
                <textarea class="h-auto form-input" rows="3" placeholder="Message..." maxlength="255"
                    @input="updateTextarea" ref="textarea"></textarea>
            </div>
            <div class="mt-1 leading-none ltr:text-right rtl:text-left">
                <span class="text-xs text-gray-500 dark:text-dark-500">
                    <span>{{ charCount }}</span> / 255
                </span>
            </div>
        </div>
    </CardBody>
</template>
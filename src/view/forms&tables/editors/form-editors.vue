<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../forms/common-components/CardComponent.vue';
import { ref, onMounted } from 'vue';
let quill;

// Create a reference for the editor container
const editorContainer = ref<HTMLElement | null>(null);

onMounted(async () => {
    if (typeof window !== 'undefined') {
        // Dynamically import Quill only on the client-side
        const { default: Quill } = await import('quill');

        // Initialize Quill editor
        if (editorContainer.value) {
            quill = new Quill(editorContainer.value as HTMLElement, {
                theme: 'snow',
            });
        }
    }
});
</script>
<template>
    <PageHeading title="Editors" sub-title="Forms & Tables" />
    <CardBody title="Snow Theme Editors" extraCss="">
        <div ref="editorContainer" class="h-52">
            <h2>Hello World!</h2>
            <p>Some initial <strong>bold</strong> text</p>
            <p><br /></p>
        </div>
    </CardBody>
</template>
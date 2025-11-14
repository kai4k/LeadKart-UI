<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

const search = ref<string>('');
const wordCount = ref<number>(0);
const charCount = ref<number>(0);

const updateCounts = () => {
    wordCount.value = countWords(search.value);
    charCount.value = countChars(search.value);
};

const countWords = (text: string): number => {
    return text.trim() === '' ? 0 : text.trim().split(" ").length;
};

const countChars = (text: string): number => {
    return text.replace(/\s/g, '').length;
};
</script>
<template>
    <pageHeading title="Word Counter" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Simple Word Counter</h6>
            </div>
            <div class="card-body">
                <textarea name="search" id="words" rows="10" v-model="search" @input="updateCounts"
                    class="h-auto form-input"></textarea>
                <p class="mt-4">
                    Word count: <span class="font-semibold text-blue-500">{{ wordCount }}</span>
                </p>
                <p>
                    Character count: <span class="font-semibold text-blue-500">{{ charCount }}</span> (without space)
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Clipboard } from 'lucide-vue-next';
import PageHeading from '../../components/common/PageHeading.vue';
import { ref } from "vue";

const inputValue = ref<string>("https://github.com/zenorocha/clipboard.js.git");
const textValue = ref<string>(
    "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system."
);

const inputRef = ref<HTMLInputElement | null>(null);
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    if (inputRef.value) {
        inputRef.value.select();
    }
};
const cutToClipboard = () => {
    navigator.clipboard.writeText(textValue.value);
    textValue.value = ""
    textareaRef.value?.focus()
};
</script>
<template>
    <PageHeading title="Clipboard" sub-title="Forms & Tables" />
    <div class="grid grid-cols-12">
        <!-- Input with Clipboard -->
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Input with Clipboard</h6>
            </div>
            <div class="card-body">
                <div class="relative">
                    <input type="text" v-model="inputValue" class="ltr:pr-8 rtl:pl-8 form-input" ref="inputRef" />
                    <button @click="copyToClipboard(inputValue)"
                        class="absolute inset-y-0 flex items-center p-0 text-gray-500 dark:text-dark-500 ltr:right-3 dark:hover:text-primary-500 hover:text-primary-500 focus:text-primary-500 dark:focus:text-primary-500 rtl:left-3 focus:outline-none btn focus:outline-0">
                        <Clipboard class="size-5"></Clipboard>
                    </button>
                </div>
            </div>
        </div>

        <!-- Textarea with Clipboard -->
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Textarea with Clipboard</h6>
            </div>
            <div class="card-body">
                <div class="relative">
                    <textarea v-model="textValue" id="bar" class="h-auto form-input" ref="textareaRef"></textarea>
                    <div class="ltr:text-right rtl:text-left">
                        <button @click="cutToClipboard()" class="mt-4 btn btn-primary">
                            Cut to clipboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
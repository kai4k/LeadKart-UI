<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
    showData: Object
})

// The question to be reviewed
interface Question {
    id: number;
    question: string;
    options: string[],

}
const reviewQuestion = ref<Question | null | any>({
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
});
watch(() => props.showData, (newData) => {
    if (newData) {
        reviewQuestion.value = { ...newData };
    }
})

// Function to close the modal
const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue(false)

};

// Mock function to handle answer submission
const sendAnswer = () => {
    alert('Answer sent!');
    closeModal();
};
</script>
<template>
    <div v-if="showModule" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">Review Question</h6>
                <button @click="closeModal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <h6>
                    Q{{ reviewQuestion?.id }}. {{ reviewQuestion?.question }}
                </h6>
                <div class="mt-3 space-y-2">
                    <div class="input-radio-group" v-for="(option, index) in reviewQuestion?.options || []"
                        :key="index">
                        <input :id="'qOption' + reviewQuestion?.id + index" class="hidden input-radio peer" type="radio"
                            :name="'optionQ' + reviewQuestion?.id" />
                        <label :for="'qOption' + reviewQuestion?.id + index"
                            class="flex items-center justify-center border border-gray-200 rounded-md text-15 size-9 peer-checked:bg-primary-500 peer-checked:border-primary-500 peer-checked:text-white">
                            {{ String.fromCharCode(65 + index) }}
                        </label>
                        <label :for="'qOption' + reviewQuestion?.id + index"
                            class="py-1.5 px-3 rounded-md border border-gray-200 input-radio-label grow">
                            {{ option }}
                        </label>
                    </div>
                </div>
                <div class="flex justify-end gap-2 mt-4">
                    <button type="button" class="btn btn-active-red" @click="closeModal">
                        <X data-lucide="x" class="inline-block size-4"></X>
                        <span class="align-baseline">Close</span>
                    </button>
                    <button type="button" class="btn btn-primary" @click="sendAnswer">
                        Send Ans
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
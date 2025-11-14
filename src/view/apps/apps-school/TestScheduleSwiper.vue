<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next';
import { ref, computed, onMounted } from 'vue';

interface Exam {
    subject: string;
    date: string;
}

const exams: Exam[] = [
    { subject: 'Vector Algebra (Mathematics)', date: '15 July, 2024' },
    { subject: 'Biomolecules (Chemistry)', date: '20 August, 2024' },
    { subject: 'Human Reproduction (Biology)', date: '10 September, 2024' }
];

const currentExamIndex = ref(0);
const show = ref(true);

// Computed property to get the current exam
const currentExam = computed(() => exams[currentExamIndex.value]);

// Function to change the current exam
const nextExam = () => {
    show.value = false; // Hide the content
    setTimeout(() => {
        currentExamIndex.value = (currentExamIndex.value + 1) % exams.length;
        show.value = true; // Show the content again
    }, 100); // Match the timeout with transition duration
};

// Auto change the exam every 5 seconds
onMounted(() => {
    setInterval(() => {
        nextExam();
    }, 5000); // Change exam every 5 seconds
});

// Transition hooks
const beforeEnter = () => {
    show.value = true;
};

const enter = (el: any, done: Function) => {
    el.offsetHeight; // Trigger reflow
    done();
};

const leave = (el: any, done: Function) => {
    done();
};
</script>
<template>
    <div class="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3 card">
        <div class="card-body">
            <div
                class="flex items-center justify-center mb-5 text-gray-500 bg-gray-100 rounded-md dark:text-dark-500 dark:bg-dark-850 size-14">
                <GraduationCap data-lucide="graduation-cap"></GraduationCap>
            </div>
            <h6 class="mb-1">Upcoming Test</h6>
            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                <div  class="min-h-11">
                    <div v-if="show" class="transition-opacity duration-500 ease-out">
                        <p class="text-gray-500 dark:text-dark-500">
                            Your
                            <span class="font-semibold">{{ currentExam.subject }}</span> Test will
                            be on <span class="font-semibold">{{ currentExam.date }}</span>
                        </p>
                    </div>
                </div>
            </transition>
            <div class="flex items-center gap-2 mt-4">
                <button type="button" class="w-full btn btn-sub-gray">Learn More</button>
                <button type="button" class="w-full btn btn-primary" @click="nextExam">Next Exam</button>
            </div>
        </div>
    </div>
</template>
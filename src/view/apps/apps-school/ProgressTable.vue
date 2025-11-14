<script setup lang="ts">
import { ref } from "vue";

// Define Quiz interface
interface Quiz {
    id: number;
    title: string;
    progress: number;
    stars: number;
}

// List of quizzes
const quizzes = ref<Quiz[]>([
    {
        id: 1,
        title: "Trivia Time: Fun Facts and Figures",
        progress: 32,
        stars: 3,
    },
    {
        id: 2,
        title: "Chemistry Conundrums: Elemental Quiz",
        progress: 52,
        stars: 1,
    },
    {
        id: 3,
        title: "A Mathematics Challenge",
        progress: 10,
        stars: 2,
    },
    {
        id: 4,
        title: "The Digital World Quiz",
        progress: 95,
        stars: 3,
    },
]);

// Start quiz action
const startQuiz = (id: number) => {
};
</script>
<template>
    <div class="card-body">
        <div class="flex flex-col gap-4">
            <div v-for="quiz in quizzes" :key="quiz.id" class="flex items-center gap-3">
                <!-- Circle Progress -->
                <div class="relative size-12 shrink-0" dir="ltr">
                    <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-sky-500/15" stroke-width="3"></circle>
                        <g class="origin-center transform -rotate-90">
                            <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-sky-500" stroke-width="3" :stroke-dasharray="100" :stroke-dashoffset="100 - quiz.progress" style="transition: stroke-dashoffset 1s ease-out;"></circle>
                        </g>
                    </svg>
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 start-1/2">
                        <span class="text-xs font-bold text-center text-gray-800 dark:text-white">
                            {{ quiz.progress }}%
                        </span>
                    </div>
                </div>

                <!-- Quiz Details -->
                <div class="overflow-hidden grow">
                    <h6 class="mb-1 truncate">
                        <a href="#!">{{ quiz.title }}</a>
                    </h6>
                    <div class="flex items-center gap-3">
                        <p class="text-gray-500 grow dark:text-dark-500">
                            Expert:
                            <template v-for="n in 3" :key="n">
                                <i class="mr-1 ri-star-s-fill" :class="{ 'text-yellow-500': n <= quiz.stars }"></i>
                            </template>
                        </p>
                        <button type="button" class="btn btn-green px-2 py-0.5 text-11" @click="startQuiz(quiz.id)">
                            <i class="ri-play-line"></i> Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
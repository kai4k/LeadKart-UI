<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import simplebar from 'simplebar-vue';
import { ref } from 'vue';

interface Comment {
    id: number;
    text: string;
}

interface Note {
    id: number;
    x: number;
    y: number;
    visible: boolean;
    comments: Comment[];
}

const notes = ref<Note[]>([
    {
        id: 1,
        x: 10,
        y: 20,
        visible: true,
        comments: [
            { id: 1, text: 'Beautiful Fabulous!' },
            { id: 1, text: 'Nice Awesome Photo!' },
        ]
    }
]);
const newComment = ref<string>('');
let nextCommentId = 1;
const showComment = ref(false)

function addComment(note: Note) {
    if (newComment.value.trim()) {
        note.comments.push({ id: nextCommentId++, text: newComment.value });
        newComment.value = '';
    }
}

function addMarker() {
    showComment.value = !showComment.value;
}

function getMaxCommentWidth(note: Note): number {
    const commentLengths = note.comments.map(comment => comment.text.length);
    return Math.max(...commentLengths, 0) * 8 + 40; // Calculate max width based on text length
}
</script>
<template>
    <pageHeading title="Images Annotation" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <div class="relative">

                    <img src="@/assets/images/gallery/img-02.jpg" class="w-full rounded" />

                    <div class="absolute z-20 top-8 ltr:left-1/3 rtl:right-1/3">
                        <div
                            class="absolute top-0 left-0 z-0 bg-red-500 rounded-full ltr:right-0 rtl:left-0 size-5 animate-ping">
                        </div>
                        <button
                            class="relative z-10 bg-red-500 border border-red-200 rounded-full shadow shadow-outline size-5"
                            @click="addMarker"></button>

                        <template v-for="note in notes" :key="note.id">
                            <simplebar class="absolute overflow-x-hidden max-h-52" @click.stop
                                :style="{ width: `${getMaxCommentWidth(note)}px` }">
                                <div v-if="showComment"
                                    class="relative z-10 flex flex-col w-48 gap-2 overflow-hidden bg-white divide-y divide-gray-200 rounded dark:divide-dark-800 dark:bg-dark-900">
                                    <template v-for="comment in note.comments" :key="comment.id">
                                        <p class="px-4 pt-2" v-text="comment.text"></p>
                                    </template>

                                    <input v-model="newComment" placeholder="Type comment"
                                        class="rounded-none form-input first:pt-2" @keydown.enter="addComment(note)" />
                                </div>
                            </simplebar>
                        </template>
                    </div>
                </div>
                <p class="mt-2 text-sm italic text-gray-500 dark:text-dark-500">
                    Add comments to the existing marker or click anywhere on the image to add new markers.
                </p>
            </div>
        </div>
    </div>
</template>
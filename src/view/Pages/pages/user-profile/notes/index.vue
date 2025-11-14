<script setup lang="ts">
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import SideMenuBadge from '@/view/apps/app-ecommerce/customers/overview/SideMenuBadge.vue';
import UserSideMenuList from '@/view/apps/app-ecommerce/customers/overview/UserSideMenuList.vue';
import { tabs } from '@/view/apps/app-ecommerce/customers/overview/overview-data';
import { Pencil, Trash2 } from 'lucide-vue-next';
import { ref, computed } from 'vue';

// Define note data structure
interface Note {
    image?: string;
    title: string;
    content: string;
    author?: string;
    date?: string;
    listItems?: string[];
    timestamp?: string;

}
// Sample pre-existing notes
const notes = ref<Note[]>([
    {
        title: 'Business Development Meeting',
        content: 'Share updates, discuss strategies, and address challenges or opportunities in a structured manner. Align goals and objectives to ensure everyone is working towards the same vision. Make informed decisions and outline actionable steps to drive growth and expansion.',
        author: 'Sophia Mia',
        timestamp: '2 May, 2024',
    },
    {
        title: 'The best time to visit a destination',
        content: 'Trip travel notes content" likely refers to documentation or records created during a trip to capture experiences, observations, and useful information for future reference. These notes can include details such as itinerary, accommodation details, transportation arrangements, places visited, notable experiences, expenses, and personal reflections. They serve as a valuable resource for recalling memories, sharing experiences with others, and planning future trips.',
        author: 'Sophia Mia',
        date: '02:54 PM',
        image: new URL('@/assets/images/gallery/img-01.jpg', import.meta.url).href,
    },
    {
        title: 'Business Strategy Meeting Notes',
        content: 'The meeting concluded with a clear understanding of the current business status, key challenges, and actionable steps to drive growth and success. Each attendee left with a sense of direction and accountability for their respective tasks.',
        author: 'Rudy Boring',
        date: '06:33 PM',
        listItems: [
            'Review of Previous Meeting Minutes',
            'Financial Performance Analysis',
            'Marketing Strategy Updates',
            'Operational Efficiency Discussion',
            'New Business Opportunities',
            'Action Items and Next Steps',
        ],
    },
]);
const noteTitle = ref('');
const noteContent = ref('');

const createNote = () => {
    if (!noteTitle.value || !noteContent.value) return;

    const newNote: Note = {
        title: noteTitle.value,
        content: noteContent.value,
        image: '', // You can handle image upload here
        timestamp: new Date().toLocaleString(),
    };

    notes.value.push(newNote);
    noteTitle.value = '';
    noteContent.value = '';
};

const handleImageChange = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        // Here you can handle image upload (store URL or base64)
    }
};

const editNote = (index: number) => {
    // Logic to edit a note
};

const deleteNote = (index: number) => {
    notes.value.splice(index, 1);
};
</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="notes" />
    <div class="grid grid-cols-12 mt-5 gap-x-5">
        <div class="col-span-12 xl:col-span-3">
            <UserSideMenuList />
            <SideMenuBadge />
        </div>
        <div class="col-span-12 xl:col-span-9">
            <!-- Create Notes Card -->
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Create Notes</h6>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createNote">
                        <div class="mb-4">
                            <label for="basicInput1" class="form-label">Notes Image</label>
                            <input type="file" id="basicInput1" class="form-file form-file-light" @change="handleImageChange" />
                        </div>
                        <div class="mb-4">
                            <label for="basicInput1" class="hidden form-label">Notes Title</label>
                            <input v-model="noteTitle" type="text" id="basicInput1" class="form-input" placeholder="Note Title" />
                        </div>
                        <div class="mb-4">
                            <label for="writeNotes" class="hidden form-label">Notes</label>
                            <textarea v-model="noteContent" name="writeNotes" id="writeNotes" rows="3" class="h-auto form-input" placeholder="Write your notes" />
                        </div>
                        <div class="ltr:text-right rtl:text-left">
                            <button type="submit" class="btn btn-primary">Create Notes</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Notes List -->
            <div class="card" v-for="(note, index) in notes" :key="index">
                <div class="card-body">
                    <div class="flex items-center gap-3 mb-3 lg:ltr:float-right lg:rtl:float-left lg:mb-0">
                        <a href="#" @click.prevent="editNote(index)" class="link link-green" title="edit">
                            <Pencil data-lucide="pencil" class="size-4"></Pencil>
                        </a>
                        <a href="#" @click.prevent="deleteNote(index)" class="link link-red" title="delete">
                            <Trash2 data-lucide="trash-2" class="size-4"></Trash2>
                        </a>
                    </div>
                    <div class="grid grid-cols-12 gap-5">
                        <div v-if="note.image" class="col-span-12 lg:col-span-3">
                            <img :src="note.image" alt="" class="rounded-md" />
                        </div>
                        <div class="col-span-12" :class="note.image ? 'lg:col-span-9' : 'lg:col-span-12'">
                            <h6>{{ note.title }}</h6>
                            <p class="mb-3 text-gray-500 dark:text-dark-500">
                                By <a href="#" class="link link-primary">Sophia Mia</a> - {{ note.timestamp }}{{
                                    note.date }}
                            </p>
                            <p class="text-gray-500 dark:text-dark-500">{{ note.content }}</p>
                            <ol class="grid-cols-12 mt-2 space-y-2 list-decimal list-inside">
                                <template v-for="(list, index) in note.listItems" :key="index">
                                    <li>{{ list }}</li>
                                </template>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
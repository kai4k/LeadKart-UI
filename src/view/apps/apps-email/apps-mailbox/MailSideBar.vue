<script setup lang="ts">
import { Calendar, ChevronDown, CircleAlert, Diamond, Inbox, Menu, Plus, SendHorizonal, SquarePenIcon, Star, StepForward, Trash2, X } from 'lucide-vue-next';
import { onMounted, ref, } from 'vue';
import simplebar from 'simplebar-vue';
import { emailData } from './email-data';
// Reactive variable to track the menu state
defineProps(({
    showModule: Boolean,
}))


const open = ref(false);
const userEmails = ref([
    // Example data structure
    {
        name: 'SRBThemes Account',
        email: 'shopia@example.com',
        image: new URL('@/assets/images/brands/img-04.png', import.meta.url).href
    },
    {
        name: 'Shopia Mia',
        email: 'shopia@example.com',
        image: new URL('@/assets/images/brands/img-05.png', import.meta.url).href
    },
    {
        name: 'Domiex',
        email: 'shopia@domiex.com',
        image: new URL('@/assets/images/brands/img-06.png', import.meta.url).href
    },
    {
        name: 'SRBThemes Account',
        email: 'shopia@domiex.com',
        image: new URL('@/assets/images/brands/img-09.png', import.meta.url).href
    },
]);
const activeUserEmail = ref(userEmails.value[0]); // Set the default active email

const toggle = () => {
    open.value = !open.value;
};

const close = () => {
    open.value = false;

};

const setActiveUserEmail = (email: any) => {
    activeUserEmail.value = email;
};


// ---------------------------------------
const totalMessages = ref(1487); // Example total messages
const unreadMessages = ref(26); // Example unread messages

const emailCategories = [
    { type: 'all', label: 'Inbox', icon: Inbox, count: emailData.value.length },
    { type: 'starred', label: 'Starred', icon: Star, count: 2 },
    { type: 'sent', label: 'Sent', icon: SendHorizonal, count: 0 },
    { type: 'drafts', label: 'Drafts', icon: SquarePenIcon, count: 2 },
    { type: 'spam', label: 'Spam', icon: CircleAlert, count: 0 },
    { type: 'trash', label: 'Trash', icon: Trash2, count: 0 },
    { type: 'important', label: 'Important', icon: StepForward, count: 0 },
    { type: 'scheduled', label: 'Scheduled', icon: Calendar, count: 0 },
];
const emit = defineEmits(['filter-selected', 'toggle-menu']);
const filterEmails = (type: string, badge?: any) => {
    // Emit the selected type to parent
    emit('filter-selected', { type, badge });
};

const labels = [
    { name: 'Team Meetings', icon: Diamond, color: 'text-red-500', count: 3 },
    { name: 'Application', icon: Diamond, color: 'text-green-500', count: 2 },
    { name: 'Developers', icon: Diamond, color: 'text-yellow-500', count: 4 },
    { name: 'Photographer', icon: Diamond, color: 'text-primary-500', count: 1 },
];



const openComposeMail = () => {
    // Logic to open the compose mail modal
};

</script>
<template>
    <div class="mb-space xl:hidden ">
        <button class="btn btn-primary" @click="emit('toggle-menu')">
            <Menu data-lucide="menu" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Menu> Menu
        </button>
    </div>
    <div class="fixed inset-y-0 ltr:right-0 rtl:left-0 mb-0 xl:mb-space z-[1004] xl:z-0 xl:static ltr:xl:rounded-r-none rtl:xl:rounded-l-none w-80 card"
        v-show="showModule">
        <div class="w-full dropdown min-w-[318px]">
            <button ref="button" @click="toggle" :aria-expanded="open" type="button"
                class="flex items-center w-full gap-2 text-start card-header">
                <img :src="activeUserEmail.image" alt="" class="size-9">
                <div class="grow">
                    <h6>{{ activeUserEmail.name }}</h6>
                    <p class="text-gray-500 dark:text-dark-500">{{ activeUserEmail.email }}</p>
                </div>
                <ChevronDown data-lucide="chevron-down" class="size-4 shrink-0"></ChevronDown>
            </button>
            <div v-if="open" ref="dropdown" @click.outside="close" class="p-2 !w-72 dropdown-menu">
                <ul class="space-y-2">
                    <li v-for="email in userEmails" :key="email.email">
                        <button type="button" @click="setActiveUserEmail(email); close()"
                            class="dropdown-item ltr:text-left rtl:text-right">
                            <img :src="email.image" alt="" class="size-9">
                            <div class="grow">
                                <h6>{{ email.name }}</h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ email.email }}</p>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <a href="#!" class="float-end xl:hidden" @click="emit('toggle-menu')">
                <X data-lucide="x" class="size-4"></X>
            </a>
            <h6 class="mb-1">Inbox Messages</h6>
            <p class="text-gray-500 dark:text-dark-500">{{ totalMessages }} messages - {{ unreadMessages }} unread
            </p>
            <simplebar data-simplebar class="max-h-[calc(100vh_-_14.5rem)] -mx-space px-space">
                <ul class="mt-5 space-y-3">
                    <li v-for="category in emailCategories" :key="category.type">
                        <a href="#!" @click="filterEmails(category.type)"
                            class="flex items-center gap-2 link link-primary [&.active]:text-primary-500">
                            <component :is="category.icon" class="size-4"></component>
                            {{ category.label }}
                            <span class="ml-auto shrink-0 badge badge-gray" v-if="category.count > 0">{{
                                category.count }}</span>
                        </a>
                    </li>
                </ul>

                <div class="flex mt-4 mb-1">
                    <h6 class="grow">Labels</h6>
                    <a href="#!" class="inline-block shrink-0 link link-primary">
                        <Plus data-lucide="plus" class="size-4"></Plus>
                    </a>
                </div>
                <ul class="mt-5 space-y-3">
                    <li v-for="label in labels" :key="label.name">
                        <!-- @click="filterEmails('all', label.name)" -->
                        <a href="#!" @click="filterEmails('all', label.name)"
                            class="flex items-center gap-2 link text-current link-primary [&.active]:text-primary-500">
                            <component :is="label.icon" :class="label.color" class="size-4"></component>
                            {{ label.name }}
                            <span class="ml-auto text-gray-500 dark:text-dark-500 shrink-0">{{ label.count }}</span>
                        </a>
                    </li>
                </ul>
            </simplebar>

            <button type="button" class="w-full mt-4 btn btn-primary" data-modal-target="addComposeModals"
                @click="openComposeMail">
                Compose
            </button>
        </div>
    </div>

</template>
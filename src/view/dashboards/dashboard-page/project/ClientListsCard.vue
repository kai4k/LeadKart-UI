<script setup lang="ts">
import { Ellipsis, MessagesSquare } from 'lucide-vue-next';
import RecentMenuList from '../../recent-menu-list.vue';
import { ref } from 'vue';

// import 
interface User {
    name: string;
    email: string;
    avatar: string | any;
    badges: Array<{ label: string; class: string }>;
    dateCreated: string;
}
const users = ref<User[]>([
    {
        name: 'Imelda Dach',
        email: 'imelda@example.com',
        avatar: new URL('@/assets/images/avatar/user-5.png', import.meta.url),
        badges: [
            { label: 'Finance Web', class: 'badge badge-outline-green' },
            { label: 'Business', class: 'badge badge-outline-purple' }
        ],
        dateCreated: '20 July, 2024',
    },
    {
        name: 'Adella Hauck',
        email: 'adella@example.com',
        avatar: new URL('@/assets/images/avatar/user-11.png', import.meta.url),

        badges: [
            { label: 'Web Site', class: 'badge badge-outline-sky' },
            { label: 'UI / UX', class: 'badge badge-outline-orange' }
        ],
        dateCreated: '10 July, 2024',
    },
    {
        name: 'Shanny Kirlin',
        email: 'shanny@example.com',
        avatar: new URL('@/assets/images/avatar/user-17.png', import.meta.url),

        badges: [
            { label: 'Development', class: 'badge badge-outline-primary' },
            { label: 'API', class: 'badge badge-outline-gray' }
        ],
        dateCreated: '27 May, 2024',
    },
]);

</script>
<template>
    <div v-for="(user, index) in users" :key="index" class="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div class="card-body">
            <div class="flex flex-wrap items-center gap-3 p-2 bg-gray-100 rounded-md dark:bg-dark-850">
                <img :src="user.avatar" alt="" class="rounded-full size-10 shrink-0">
                <div class="grow">
                    <h6>{{ user.name }}</h6>
                    <p class="text-gray-500 dark:text-dark-500">{{ user.email }}</p>
                </div>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Edit', 'Overview', 'Delete']"
                className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="flex flex-wrap gap-2 my-4">
                <span v-for="(badge, badgeIndex) in user.badges" :key="badgeIndex" :class="badge.class">{{
                    badge.label }}</span>
            </div>
            <p>Date Created: <span class="text-gray-500 dark:text-dark-500">{{ user.dateCreated }}</span></p>
            <div class="pt-3 mt-3 text-center border-t border-gray-200 dark:border-dark-800">
                <a href="#!" class="text-primary-500">
                    <MessagesSquare data-lucide="messages-square" class="inline-block size-4 ltr:mr-1 rtl:ml-1">
                    </MessagesSquare> Get a Chat
                </a>
            </div>
        </div>
    </div>
</template>
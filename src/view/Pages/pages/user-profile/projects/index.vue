<script setup lang="ts">
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import { tabs } from '@/view/apps/app-ecommerce/customers/overview/overview-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { Box, ChevronLeft, ChevronRight, Ellipsis, Eye, Globe, MessagesSquare, Ruler, SquareUser, Users } from 'lucide-vue-next';
import { ref, computed, } from 'vue';
interface Card {
    title: string;
    description: string;
    icon: string | object;
    iconClass: string;
    tag: string;
    views: number;
    avatars: string[];
}

const cards: Card[] = [
    {
        title: 'Chat App Templates',
        description: 'Chat applications typically run on centralized networks that are served by platform operator servers as opposed to peer-to-peer protocols such as XMPP. This allows two people to talk to each other in real time.',
        icon: MessagesSquare,
        iconClass: 'from-sky-500/10 text-sky-500 fill-sky-500/10',
        tag: 'Features',
        views: 148,
        avatars: [
            new URL('@/assets/images/avatar/user-2.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-3.png', import.meta.url).href,
        ],
    },
    {
        title: 'Domiex - Admin & Dashboards Templates',
        description: 'An admin dashboard template is a powerful tool that streamlines the process of building a robust and user-friendly admin panel for web applications. Image by ThemeMakker. It provides a pre-designed interface with various components and features to',
        icon: Box,
        iconClass: 'from-pink-500/10 text-pink-500 fill-pink-500/10',
        tag: 'Admin',
        views: 74,
        avatars: [
            new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-20.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-13.png', import.meta.url).href,
        ],
    },
    {
        title: 'Employee Management System',
        description: 'Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.',
        icon: Users,
        iconClass: 'from-green-500/10 text-green-500 fill-green-500/10',
        tag: 'Management',
        views: 179,
        avatars: [
            new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-16.png', import.meta.url).href,
        ],
    },
    {
        title: 'Create Business Website',
        description: 'If all you need is a basic one-page website with an email address, phone number and maybe your business address, you can absolutely do that yourself. There are many website builders and one-page templates you can use to get up and running',
        icon: Globe,
        iconClass: 'from-purple-500/10 text-purple-500 fill-purple-500/10',
        tag: 'Design',
        views: 132,
        avatars: [
            new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-16.png', import.meta.url).href,
        ],
    },
    {
        title: 'Contact Page Prototype',
        description: 'A contact page prototype is a draft of a contact page. It can be used to test the design and functionality of the page before it is launched. There are many different ways to create a contact page prototype. Some popular methods include using a',
        icon: SquareUser,
        iconClass: 'from-primary-500/10 text-primary-500 fill-primary-500/10',
        tag: 'Figma',
        views: 163,
        avatars: [
            new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-16.png', import.meta.url).href,
        ],
    },
    {
        title: 'Design System - Create Components',
        description: 'A design system defines reusable components and their usage, and explains why and when designers should choose a component. This helps designers and developers learn design concepts and best practices for different components.',
        icon: Ruler,
        iconClass: 'from-red-500/10 text-red-500 fill-red-500/10',
        tag: 'Components',
        views: 243,
        avatars: [
            new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
            new URL('@/assets/images/avatar/user-16.png', import.meta.url).href,
        ],
    },
    // More card data here...
];

const currentPage = ref(1);
const itemsPerPage = 6;

const totalCards = cards.length;
const totalPages = computed(() => Math.ceil(totalCards / itemsPerPage));
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);
const paginatedCards = computed(() => cards.slice(startIndex.value, endIndex.value));
function changePage(page: number) {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
    }
}
</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="projects" />
    <h5 class="mt-4 mb-5 text-16">Projects</h5>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5">
        <div v-for="(card, index) in paginatedCards" :key="index" class="card">
            <div class="card-body">
                <div class="flex gap-3">
                    <div class="flex items-center justify-center bg-gradient-to-t size-12 rounded-modern shrink-0"
                        :class="card.iconClass">
                        <component :is="card.icon" :class="card.iconClass" class="relative stroke-1 size-7"></component>
                    </div>
                    <div class=" grow">
                        <h6 class="mb-1 ">
                            <a href="#!" class="transition duration-200 ease-linear hover:text-primary-500">
                                {{ card.title }}
                            </a>
                        </h6>
                        <p class="text-gray-500 dark:text-dark-500 line-clamp-5">{{ card.description }}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 mt-3">
                    <a href="#!" class="ltr:mr-auto rtl:ml-auto badge badge-gray">#{{ card.tag }}</a>
                    <div class="text-gray-500 dark:text-dark-500 shrink-0 text-15">
                        <p>
                            <Eye data-lucide="eye" class="inline-block size-4 me-1"></Eye>
                            <span class="align-middle">{{ card.views }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-3 border-t border-gray-200 card-body dark:border-dark-800">
                <div class="flex -space-x-3 grow rtl:space-x-reverse" ref="activeDropdown">
                    <a v-for="(avatar, idx) in card.avatars" :key="idx" href="#!"
                        class="transition duration-300 ease-linear hover:z-10" title="avatar-link">
                        <img :src="avatar" alt=""
                            class="border-2 border-white rounded-full dark:border-dark-900 size-7" />
                    </a>
                </div>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position"
                    :list="['Overview', 'Edit', 'Delete']" mainCss="" iconCss="size-5" menuIconCss="size-4" />
            </div>
        </div>
    </div>

    <!-- Pagination  -->
    <div class="grid items-center grid-cols-12 gap-5 mb-5">
        <div class="col-span-12 lg:col-span-5">
            <p class="text-gray-500 dark:text-dark-500">
                Showing <b>{{ startIndex + 1 }}</b> of <b>{{ totalCards }}</b> Results
            </p>
        </div>
        <div class="col-span-12 lg:col-span-7">
            <div class="flex lg:justify-end pagination pagination-primary">
                <button type="button" class="pagination-pre" :disabled="currentPage === 1"
                    @click="changePage(currentPage - 1)">
                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5"></ChevronLEft>
                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5"></ChevronRight>
                    Prev
                </button>
                <button type="button" v-for="page in totalPages" :key="page"
                    :class="['pagination-item', { active: page === currentPage }]" @click="changePage(page)">
                    {{ page }}
                </button>
                <button type="button" class="pagination-next" :disabled="currentPage === totalPages"
                    @click="changePage(currentPage + 1)">
                    Next
                    <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                    </ChevronRight>
                    <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                    </ChevronLeft>
                </button>
            </div>
        </div>
    </div>
</template>
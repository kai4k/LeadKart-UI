<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import { RiAirplayLine, RiArrowRightLine, RiChat3Line, RiLogoutBoxRLine, RiPencilLine, RiSettings4Line, RiUserAddLine, RiUserUnfollowLine } from 'vue-remix-icons';
import { BriefcaseBusiness, SquareArrowOutUpRight, Star, Users } from 'lucide-vue-next';

const cards = ref([
    {
        header: 'Card Header',
        body: 'Business Content means any sound recordings, musical works, album cover artwork, photographs, images, audiovisual works, third party metadata (including editorial content) and other copyrighted materials made available by Seller through the Business Products, but excluding the Business Product Software and Incorporated.',
        footer: 'Card Footer',
    },
    {
        header: 'Card Header',
        body: 'Business Content means any sound recordings, musical works, album cover artwork, photographs, images, audiovisual works, third party metadata (including editorial content) and other copyrighted materials made available by Seller through the Business Products, but excluding the Business Product Software and Incorporated.',
    },
    {
        body: 'Business Content means any sound recordings, musical works, album cover artwork, photographs, images, audiovisual works, third party metadata (including editorial content) and other copyrighted materials made available by Seller through the Business Products, but excluding the Business Product Software and Incorporated.',
        footer: 'Card Footer',
    },
]);

interface User {
    id: number;
    name: string;
    role: string;
    stars: string;
    followers: string;
    projects: number;
    galleryImg: string | any;
    avatarImg: string | any;
    isFollowing: boolean;
    loading: boolean; // Added loading property
}

const users = ref<User[]>([
    {
        id: 1,
        name: 'Linda J. Bell',
        role: 'Sr. Web Designer',
        stars: '2k',
        followers: '10k',
        projects: 15,
        galleryImg: new URL('@/assets/images/gallery/img-01.jpg', import.meta.url),
        avatarImg: new URL('@/assets/images/avatar/user-21.png', import.meta.url),
        isFollowing: false,
        loading: false, // Initial loading state
    },
    {
        id: 2,
        name: 'Jennifer Brunner',
        role: 'Laravel Developer',
        stars: '1.1k',
        followers: '2.5k',
        projects: 2,
        galleryImg: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url).href,
        avatarImg: new URL('@/assets/images/avatar/user-18.png', import.meta.url).href,
        isFollowing: true,
        loading: false,
    },
    {
        id: 3,
        name: 'Sandra Alexander',
        role: 'ASP.Net Developer',
        stars: '3.6k',
        followers: '12k',
        projects: 8,
        galleryImg: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url).href,
        avatarImg: new URL('@/assets/images/avatar/user-17.png', import.meta.url).href,
        isFollowing: false,
        loading: false,
    },
    {
        id: 4,
        name: 'James Hazelwood',
        role: 'Wordpress Developer',
        stars: '2.9k',
        followers: '11.8k',
        projects: 5,
        galleryImg: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url).href,
        avatarImg: new URL('@/assets/images/avatar/user-14.png', import.meta.url).href,
        isFollowing: false,
        loading: false,
    },
]);

const toggleFollow = (user: any) => {
    user.loading = true; // Set loading state for the specific user
    setTimeout(() => {
        user.isFollowing = !user.isFollowing;
        user.loading = false; // Reset loading state
    }, 2000);
};

interface cardHoverEffect {
    id: number;
    description: string;
    bgColor: string;
}

const cardHoverEffect = ref<cardHoverEffect[]>([
    {
        id: 1,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        bgColor: 'primary',
    },
    {
        id: 2,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        bgColor: 'green',
    },
    {
        id: 3,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        bgColor: 'primary',
    },
    {
        id: 4,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        bgColor: 'purple',
    },
]);

interface Card {
    id: number;
    description: string;
    color: string;
    textColor: string,
}

const cardsHover = ref<Card[]>([
    {
        id: 1,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        color: 'text-primary-500 bg-primary-500/15',
        textColor: 'text-primary-500',
    },
    {
        id: 1,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        color: 'text-purple-500 bg-purple-500/15',
        textColor: 'text-purple-500',

    },
    {
        id: 2,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        color: 'text-orange-500 bg-orange-500/15',
        textColor: 'text-orange-500',

    },
    {
        id: 3,
        description: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
        color: 'text-green-500 bg-green-500/15',
        textColor: 'text-green-500',

    },
    // Add more card objects as needed
]);


const colorCards = ref([
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'primary',
        class: 'border-primary-300 shadow-primary-100 dark:border-primary-500/30 dark:shadow-primary-500/10'
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'purple',
        class: 'border-purple-300 shadow-purple-100 dark:border-purple-500/30 dark:shadow-purple-500/10'

    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'green',
        class: 'border-green-300 shadow-green-100 dark:border-green-500/30 dark:shadow-green-500/10',
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'red',
        class: 'border-red-300 shadow-red-100 dark:border-red-500/30 dark:shadow-red-500/10',
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'yellow',
        class: 'border-yellow-300 shadow-yellow-100 dark:yellow-primary-500/30 dark:shadow-yellow-500/10',
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'sky',
        class: 'border-sky-300 shadow-sky-100 dark:border-sky-500/30 dark:shadow-sky-500/10',
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'pink',
        class: 'border-pink-300 shadow-pink-100 dark:border-pink-500/30 dark:shadow-pink-500/10',
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'orange',
        class: 'border-orange-300 shadow-orange-100 dark:border-orange-500/30 dark:shadow-orange-500/10',
    },
    {
        title: 'Need a help in Claim?',
        description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
        color: 'indigo',
        class: 'border-indigo-300 shadow-indigo-100 dark:indigo-sky-500/30 dark:indigo-sky-500/10',
    },
]);

interface GalleryItem {
    title: string;
    description: string;
    image: string | any;
    alt: string;
    link: string;
    author: string;
    category1: string;
    category2: string;
}

const galleryItems = ref<GalleryItem[]>([
    {
        title: 'The white and blue boat on river under blue sky during daytime',
        description: 'Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!',
        image: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url),
        alt: 'Gallery',
        link: '#',
        author: 'Daniel',
        category1: 'Traveling',
        category2: 'Business',
    },
    {
        title: 'A heritage Shophouse at Little india SG',
        description: 'Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!',
        image: new URL('@/assets/images/gallery/img-01.jpg', import.meta.url),
        alt: 'Gallery',
        link: '#',
        author: 'Daniel',
        category1: 'Traveling',
        category2: 'Business',
    },
    {
        title: 'Purple flowers with green leaves',
        description: 'Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!',
        image: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url),
        alt: 'Gallery',
        link: '#',
        author: 'Daniel',
        category1: 'Traveling',
        category2: 'Business',
    },
]);

interface overlayGalleryItem {
    title: string;
    description?: string; // Optional
    image: string | any;
    gradientFrom: string;
    gradientVia: string;
}

const overlayGalleryItems = ref<overlayGalleryItem[]>([
    {
        title: 'Water Lily',
        description: 'Flowers of love',
        image: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url),
        gradientFrom: 'from-primary-500/30',
        gradientVia: 'via-green-500/30',
    },
    {
        title: 'Art Of Holiday',
        image: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url),
        gradientFrom: 'from-primary-500/80',
        gradientVia: 'via-sky-500/30',
    },
    {
        title: 'River Water',
        description: 'City of love',
        image: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url),
        gradientFrom: 'from-primary-500/50',
        gradientVia: 'via-sky-500/50',
    },
]);


let showSettings = ref(false);
const fullName = ref('Frankie N. Mixon');
const username = ref('frankie_mixon');
const photoUrl = ref('@/assets/images/avatar/user-18.png'); // Update with a valid path
// src=""
const editing = ref<string | null>(null);
const bgColor = ref('bg-primary-500'); // Default background color
const bgColors = ['bg-yellow-500', 'bg-pink-500', 'bg-purple-500', 'bg-primary-800', 'bg-primary-500']; // Add your desired colors here

function selectColor(color: string) {
    bgColor.value = color;
}

function toggleShowSettings() {
    showSettings.value = !showSettings.value

}

function edit(field: string) {
    editing.value = field;
}

function saveEdit(field: string) {
    editing.value = null; // Reset editing state
}

function discard(field: string) {
    editing.value = null; // Reset editing state
}
</script>
<template>
    <PageHeading title="Cards" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 sm:col-span-6 xl:col-span-4" v-for="(card, index) in cards" :key="index">
            <div class="card">
                <div class="card-header" v-if="card.header">
                    <h6 class="card-title">{{ card.header }}</h6>
                </div>
                <div class="card-body">
                    <p class="text-gray-500 dark:text-dark-500">{{ card.body }}</p>
                </div>
                <div class="card-footer" v-if="card.footer">
                    <h6 class="card-title">{{ card.footer }}</h6>
                </div>
            </div>
        </div>

    </div>
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="user in users" :key="user.id" class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="card">
                <div class="h-32 overflow-hidden rounded-t-md">
                    <img class="object-cover object-center w-full" :src="user.galleryImg" alt="Gallery">
                </div>
                <div class="relative mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full dark:border-dark-900 size-32">
                    <img class="object-cover object-center size-32" :src="user.avatarImg" alt="User Avatar">
                </div>
                <div class="mt-2 text-center">
                    <h5 class="text-16">{{ user.name }}</h5>
                    <p class="text-sm text-gray-500 dark:text-dark-500">{{ user.role }}</p>
                </div>
                <ul class="flex items-center justify-around py-4 mt-2">
                    <li class="flex flex-col items-center justify-around">
                        <Star class="block mb-2 text-yellow-500 size-5" />
                        <h6>{{ user.stars }}</h6>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                        <Users class="block mb-2 text-primary-500 size-5" />
                        <h6>{{ user.followers }}</h6>
                    </li>
                    <li class="flex flex-col items-center justify-around">
                        <BriefcaseBusiness class="block mb-2 text-green-500 size-5" />
                        <div>{{ user.projects }}</div>
                    </li>
                </ul>
                <div class="mx-8 mt-2 card-footer">
                    <button @click="toggleFollow(user)" class="flex items-center gap-2 mx-auto text-white bg-pink-500 border-pink-500 btn hover:bg-pink-600 hover:text-white hover:border-pink-600 focus:bg-pink-600 focus:text-white focus:border-pink-600">
                        <span class="flex items-center gap-2" v-if="!user.isFollowing">
                            <RiUserAddLine class="w-4" />
                            Follow
                        </span>
                        <span class="flex items-center gap-2" v-if="user.isFollowing">
                            <RiUserUnfollowLine class="w-4" />
                            UnFollow
                        </span>
                        <svg v-if="user.loading" class="text-white size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <h5 class="mt-2 mb-5 underline">Card Hover Effect:</h5>
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="user in cardHoverEffect" :key="user.id" class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
                <div class="card-body">
                    <span class="absolute z-0 transition-all duration-500 rounded-full size-20 top-5" :class="`bg-${user.bgColor}-500 group-hover/item:scale-[10]`"></span>
                    <div class="relative z-10 max-w-md mx-auto">
                        <div class="grid text-white transition-all duration-500 rounded-full size-20 place-items-center" :class="`bg-${user.bgColor}-500 group-hover/item:bg-${user.bgColor}-400/30`">
                            <RiChat3Line class="size-8" />
                        </div>
                        <div class="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500 group-hover/item:!text-white/90">
                            <p>{{ user.description }}</p>
                        </div>
                        <div class="pt-5">
                            <a href="#" class="font-medium transition-all duration-500" :class="`text-${user.bgColor}-500 group-hover/item:text-white`">
                                Read the docs
                                <RiArrowRightLine data-lucide="move-right" class="inline-block ml-1 size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="card in cardsHover" :key="card.id" class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
                <div class="card-body">
                    <div class="relative z-10 max-w-md mx-auto">
                        <div class="grid transition-all duration-500 border rounded-full size-20 place-items-center " :class="card.color">
                            <RiAirplayLine data-lucide="airplay" class="size-8" />
                        </div>
                        <div class="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500">
                            <p>{{ card.description }}</p>
                        </div>
                        <div class="pt-5">
                            <a href="#" class="font-medium transition-all duration-500" :class="card.textColor">
                                Read the docs
                                <!-- <i></i> -->
                                <RiArrowRightLine data-lucide="move-right" class="inline-block ml-1 size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h5 class="mt-2 mb-5 underline">Card Colored:</h5>
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="(card, index) in colorCards" :key="index" :class="`col-span-12 sm:col-span-6 xl:col-span-3 card border-${card.color}-300 shadow-${card.color}-100 dark:border-${card.color}-500/30 dark:shadow-${card.color}-500/10 ${card.class}`">
            <div class="card-body">
                <h6 class="mb-2">{{ card.title }}</h6>
                <p class="mb-3 text-gray-500 dark:text-dark-500">{{ card.description }}</p>
                <a href="#" class="inline-flex items-center gap-2 font-medium" :class="`text-${card.color}-500 hover:underline`">
                    See our guideline
                    <SquareArrowOutUpRight class="size-4" />
                </a>
            </div>
        </div>
    </div>

    <h5 class="mt-2 mb-5 underline">Fancy Card:</h5>
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="(item, index) in galleryItems" :key="index" class="col-span-12 !bg-transparent !border-0 shadow-none sm:col-span-6 xl:col-span-4 card">
            <a :href="item.link">
                <img class="rounded-md" :src="item.image" :alt="item.alt" />
            </a>
            <div class="relative mx-10 -mt-16 bg-white rounded-md card-body dark:bg-dark-950">
                <h5 class="mb-3">
                    <a :href="item.link" class="transition duration-500 ease-in-out hover:text-primary-500">{{
                        item.title }}</a>
                </h5>
                <p class="text-gray-500 dark:text-dark-500">{{ item.description }}</p>
                <p class="mt-4 text-sm text-gray-500 dark:text-dark-500">
                    By
                    <a href="#" class="transition duration-500 ease-in-out text-primary-500">{{ item.author }}</a> | in
                    <a href="#" class="transition duration-500 ease-in-out text-primary-500">{{ item.category1 }}</a>,
                    <a href="#" class="transition duration-500 ease-in-out text-primary-500">{{ item.category2 }}</a>
                </p>
            </div>
        </div>
    </div>

    <h5 class="mt-2 mb-5 underline">Overlay Card:</h5>
    <div class="grid grid-cols-12 gap-x-space min-h-80">
        <div v-for="(item, index) in overlayGalleryItems" :key="index" class="relative col-span-12 overflow-hidden !border-0 sm:col-span-6 xl:col-span-4 card">
            <img :src="item.image" alt="Gallery" />
            <div :class="`absolute inset-0 bg-gradient-to-t ${item.gradientFrom} ${item.gradientVia}`"></div>
            <div class="absolute inset-0 z-10 flex items-end card-body">
                <div>
                    <h3 class="mt-3 text-white">{{ item.title }}</h3>
                    <p v-if="item.description" class="text-white/75">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <h5 class="mt-2 mb-5 underline">Edit Cards</h5>
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 sm:col-span-6 xl:col-span-4">
            <div class="relative flex flex-col items-center justify-center w-full mb-5">
                <div class="flex flex-col w-full p-4 transition-colors ease-in rounded-lg shadow-md" :class="bgColor">
                    <div class="z-10 flex-col max-w-full p-5 text-center transition-all origin-top-left transform w-70 h-70" :class="showSettings ? 'flex' : 'hidden'">
                        <span class="text-2xl font-bold text-white">Settings</span>
                        <div class="flex flex-col mt-3 space-y-2 grow">
                            <span class="mb-2 font-bold text-white text-md">Background color:</span>
                            <div class="flex justify-center w-full space-x-2">
                                <button v-for="color in bgColors" :key="color" class="w-8 h-8 border-4 border-white rounded-full cursor-pointer" :class="color" @click="selectColor(color)" :disabled="bgColor === color"></button>
                            </div>
                        </div>
                        <div class="flex justify-center flex-shrink mt-4 align-end">
                            <button class="text-lg font-bold text-white bg-transparent rounded fill-current" @click="showSettings = false">Close</button>
                        </div>
                    </div>
                    <div v-show="!showSettings">
                        <div class="flex justify-between w-full p-2">
                            <button class="flex items-center space-x-1 font-semibold text-white bg-transparent cursor-pointer" v-on:click="toggleShowSettings">
                                <RiSettings4Line data-lucide="settings" class="w-7" />
                                <span class="text-lg transition-transform ease-in origin-left transform scale-x-0 select-none group-focus/items:scale-x-100 group-hover/items:scale-x-100">settings</span>
                            </button>
                            <button class="flex items-center space-x-1 font-semibold text-white bg-transparent cursor-pointer">
                                <span class="text-lg transition-transform ease-in origin-right transform scale-x-0 select-none group-focus/items:scale-x-100 group-hover/items:scale-x-100">logout</span>
                                <RiLogoutBoxRLine data-lucide="log-out" class="w-7" />
                            </button>
                        </div>
                        <div class="flex flex-col w-full h-full text-center">
                            <div class="flex flex-col items-center mb-3">
                                <img src="@/assets/images/avatar/user-18.png" alt="" class="rounded-full size-28">
                                <div class="relative mt-4 text-center group/items">
                                    <span class="p-0 px-2 m-0 font-sans text-xl font-semibold text-white break-words select-none" title="Double click to edit" @dblclick="edit('fullName')">{{ fullName }}</span>
                                    <RiPencilLine data-lucide="pencil" class="absolute inline w-4 h-4 transition-transform transform scale-0 cursor-pointer text-gray-50 right-2 -top-3 group-hover/items:scale-100" title="Edit" @click="edit('fullName')" />
                                    <input type="text" v-model="fullName" class="w-full p-0 px-2 m-0 font-sans text-xl font-semibold text-center text-white bg-transparent focus:outline-none" v-show="editing === 'fullName'" @keydown.enter="saveEdit('fullName')" @click.away="discard('fullName')" @keydown.escape="discard('fullName')" title="Enter to save, click outside to discard." maxlength="20">
                                </div>
                                <div class="relative mt-1 text-center group/items">
                                    <span class="p-0 m-0 font-sans text-sm font-semibold select-none text-white/75 text-wrap" title="Double click to edit">{{ username }}</span>
                                    <RiPencilLine data-lucide="pencil" class="absolute inline w-4 h-4 ml-1 transition-transform transform scale-0 cursor-pointer text-gray-50 -top-1 group-hover/items:scale-100" title="Edit" @click="edit('username')" />
                                    <input type="text" v-model="username" class="inline-block w-auto p-0 m-0 font-sans text-sm font-semibold text-center bg-transparent text-white/75 focus:outline-none" v-show="editing === 'username'" @keydown.enter="saveEdit('username')" @click.away="discard('username')" @keydown.escape="discard('username')" title="Enter to save, click outside to discard." maxlength="15">
                                </div>
                            </div>
                            <div class="flex flex-row justify-evenly">
                                <div class="flex flex-col cursor-pointer hover:opacity-80">
                                    <span class="text-lg font-bold text-white">11</span>
                                    <span class="text-sm text-white/75">Followers</span>
                                </div>
                                <div class="flex flex-col cursor-pointer hover:opacity-80">
                                    <span class="text-lg font-bold text-white">52</span>
                                    <span class="text-sm text-white/75">Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
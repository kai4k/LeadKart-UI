<script setup lang="ts">
import { BellDot, ChevronDown, Gem, Headset, LogOut, Presentation, Settings } from 'lucide-vue-next';
import { onBeforeUnmount, onMounted, ref, defineProps } from 'vue';
import { userProfileDetails } from '@/store/defaultDetails';
defineProps({
    title: {
        type: Function,
        default: () => 'Recent'
    },
    list: {
        type: Object,
        default: {},
    },
    showArrow: {
        type: Boolean,
        default: true
    },
    extraClass: {
        type: String,
        default: ''
    }
})

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const close = () => {
    open.value = false;
};

const toggle = () => {
    open.value = !open.value;
};
const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        close();
    }
};

const dropdownItems = [
    {
        text: 'Profile Activity',
        link: 'pages-user-activity',
        icon: BellDot
    },
    {
        text: 'Manage Projects',
        link: 'pages-user-projects',
        icon: Presentation
    },
    {
        text: 'Account Settings',
        link: 'pages-account-settings',
        icon: Settings
    },
    {
        text: 'Help Center',
        link: 'pages-help-center',
        icon: Headset
    },
    {
        text: 'Upgrade Plan',
        link: 'pages-pricing',
        icon: Gem
    },
];
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
<template>
    <div class="relative group-data-[layout=horizontal]:hidden group-data-[sidebar=small]:w-full" ref="dropdownRef">
        <div class="!block dropdown">
            <button ref="button" @click="toggle" type="button"
                class="flex items-center w-full gap-2 p-4 text-left group-data-[sidebar=small]:px-0" id="recent-btn">
                <img :src="userProfileDetails.img" alt=""
                    class="h-10 rounded-md shrink-0 group-data-[sidebar=small]:mx-auto" />
                <div
                    class="grow group-data-[sidebar=icon]:hidden group-data-[sidebar=small]:hidden overflow-hidden text-new-500">
                    <h6 class="font-medium truncate text-sidebar-text-active">
                        Sophia Mia
                    </h6>
                    <p class="text-menu-title text-14">ID: {{ userProfileDetails.userId }}</p>
                </div>
                <div
                    class="shrink-0 text-sidebar-text group-data-[sidebar=icon]:hidden group-data-[sidebar=small]:hidden group-data-[sidebar=medium]:hidden">
                    <ChevronDown data-lucide="chevron-down" class="size-4"></ChevronDown>
                </div>
            </button>
            <div v-show="open"
                class="absolute z-50 p-5 rounded-md shadow-lg !w-64 dropdown-menu !left-3  bg-white top-10 serLeft"
                :class="extraClass">
                <div class="flex items-center gap-2">
                    <img :src="userProfileDetails.img" alt="" class="rounded-full size-10" />
                    <div>
                        <h6>{{ userProfileDetails.name }}</h6>
                        <p>
                            <a href="#!" class="link link-primary">{{ userProfileDetails.email }}</a>
                        </p>
                    </div>
                </div>
                <div class="pt-2 mt-3 border-t border-gray-200 dark:border-dark-800">
                    <ul class="">
                        <li v-for="item in dropdownItems" :key="item.text">
                            <router-link @click="close" :to="item.link"
                                class="inline-block py-2 text-gray-500 before:hidden ltr:text-left rtl:text-right link hover:text-primary-500">
                                <component :is="item.icon" class="inline-block mr-2 size-4"></component> {{ item.text }}
                            </router-link>
                        </li>
                    </ul>
                    <div class="pt-3 mt-2 border-t border-gray-200 dark:border-dark-800">
                        <router-link to="auth-signin-basic" class="!px-0 !py-1.5 before:hidden link link-primary">
                            <LogOut data-lucide="log-out" class="inline-block mr-2 size-4"></LogOut> Log Out
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.serLeft {
    right: 12px !important;
    top: 75px;
}

.set-position {
    left: -135px !important;
    top: 22px !important;
}

.zero-position {
    left: -60px !important;
    top: 26px !important;
}

.file-position {
    left: -58px !important;
    top: 32px !important;
}
</style>
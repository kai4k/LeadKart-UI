<script setup lang="ts">
import { ref, onMounted } from 'vue';
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component is unmounted
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
});
const isSticky = ref(false);
const isMenuOpen = ref(false);
const activeTab = ref(0);

const handleScroll = () => {
    isSticky.value = window.scrollY > 0;
};

interface Tab {
    id: number;
    label: string;
    href: string;
}

const tabs: Tab[] = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Use Cases', href: '#case' },
    { id: 4, label: 'Community', href: '#community' },
    { id: 5, label: 'Contact', href: '#contact-us' },
];

const setActiveTab = (id: number) => {
    activeTab.value = id;
};
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
    <div>
        <header class="top-0 h-20 landing-navbar set-index" :class="{
            'scroll-sticky': isSticky,
            'shadow-gray-200/50 shadow-lg bg-white dark:shadow-dark-850 dark:bg-dark-900 landing-navbar top-0 h-20 z-sidebar [&.scroll-sticky]:bg-white dark:[&.scroll-sticky]:bg-body-invoice [&.scroll-sticky]:shadow-lg [&.scroll-sticky]:shadow-gray-200/50 dark:[&.scroll-sticky]:shadow-purple-100/5': isSticky
        }">
            <div class="container mx-auto px-4 max-w-[1350px] flex justify-between items-center">
                <RouterLink to="/" title="logo">
                    <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-7 dark:!hidden">
                    <img src="@/assets/images/logo-white.png" alt="" class="hidden h-7 dark:!inline-block">
                </RouterLink>
                <div class="mx-auto navbar-collapase dark:bg-body-invoice dark:shadow-purple-100/5 dark:xl:bg-transparent"
                    :class="{ 'hidden xl:flex': !isMenuOpen }">
                    <ul class="flex flex-col xl:flex-row xl:items-center *:inline-block *:text-16 *:tracking-wide">
                        <li v-for="tab in tabs" :key="tab.id">
                            <a :href="tab.href" @click="setActiveTab(tab.id)"
                                :class="['inline-block px-5 py-2 font-normal tracking-wide transition-all duration-300 ease-linear dark:text-muted-invoice dark:hover:text-purple-500', { 'active text-purple-500': activeTab === tab.id, 'text-gray-500 hover:text-purple-500': activeTab !== tab.id }]">
                                {{ tab.label }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button @click="toggleMenu" title="menu toggle" type="button"
                        class="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-purple btn-icon xl:!hidden">
                        <i :class="isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'" class="text-lg"></i>
                    </button>
                    <button class="btn btn-outline-purple">Get Started</button>
                </div>
            </div>
        </header>
    </div>
</template>
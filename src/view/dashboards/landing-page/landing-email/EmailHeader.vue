<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

// Reactive state
const isSticky = ref(false);

// Scroll event listener
const handleScroll = () => {
    isSticky.value = window.scrollY > 0;
};
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
});

const isMenuOpen = ref(false); // Replace with your logic to control the menu
const activeTab = ref(1);

// Method to set the active tab
function setActiveTab(tabIndex: number) {
    activeTab.value = tabIndex;
}
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
    <div>
        <header class="top-0 h-20 landing-navbar set-index" :class="{
            'scroll-sticky': isSticky,
            'shadow-gray-200/50 shadow-lg bg-white dark:shadow-dark-850 dark:bg-dark-900': isSticky
        }">
            <div class="container flex items-center justify-between w-full gap-5 px-4 mx-auto">
                <RouterLink to="/" title="logo">
                    <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-7 dark:!hidden">
                    <img src="@/assets/images/logo-white.png" alt="" class="hidden h-7 dark:!inline-block">
                </RouterLink>
                <div class="navbar-collapase ltr:mr-auto rtl:ml-auto" :class="{ 'hidden xl:flex': !isMenuOpen }">
                    <div class="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
                        <a href="#services" @click="setActiveTab(1)" :class="{ active: activeTab === 1 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">
                            Service
                        </a>
                        <a href="#pricing" @click="setActiveTab(2)" :class="{ active: activeTab === 2 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">
                            Pricing
                        </a>
                        <a href="#features" @click="setActiveTab(3)" :class="{ active: activeTab === 3 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">
                            Features
                        </a>
                        <a href="#templates" @click="setActiveTab(4)" :class="{ active: activeTab === 4 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">
                            Templates
                        </a>
                        <a href="#faq" @click="setActiveTab(5)" :class="{ active: activeTab === 5 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">
                            FAQ's
                        </a>
                        <a href="#updates" @click="setActiveTab(6)" :class="{ active: activeTab === 6 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">
                            Updates
                        </a>
                    </div>
                </div>
                <button @click="toggleMenu" type="button" class="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
                    <i :class="isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'" class="text-lg"></i>
                </button>
                <div>
                    <a href="auth-signin-basic" class="btn btn-active-gray">Sign In</a>
                    <button type="button" class="hidden btn btn-sub-primary md:inline-block">Get for free</button>
                </div>
            </div>
        </header>
    </div>
</template>
<style></style>
<script setup lang="ts">
import { Headset, Moon, Sun } from 'lucide-vue-next';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
// @ts-ignore
import { useStore } from 'vuex';
const store = useStore();
const isSticky = ref(false);
const isMenuOpen = ref(false);
const activeTab = ref(0);


// Scroll event handler
const handleScroll = () => {
    isSticky.value = window.scrollY > 0;
};

// Lifecycle hooks to add/remove the event listener
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
const setActiveTab = (tabIndex: number) => {
    activeTab.value = tabIndex;
    // You can add any additional logic for menu handling here
};

// landing theme set
const lendingTheme = computed(() => store.getters.layoutTheme)
const toggleMode = () => {
    const newValue = lendingTheme.value === 'light' ? 'dark' : 'light';
    const modeElement = document.querySelector('[data-mode]');
    if (modeElement) {
        modeElement.setAttribute('data-mode', newValue);
    }
    store.dispatch('updateLayoutTheme', newValue);
};
</script>
<template>
    <header class="top-0 h-20 landing-navbar" :class="{
        'scroll-sticky': isSticky,
        'shadow-gray-200/50 shadow-lg bg-white': isSticky,
        'dark:shadow-dark-850 dark:bg-dark-900': isSticky
    }">
        <div class="container flex items-center gap-5 px-4 mx-auto xl:px-20">
            <a href="/" title="logo">
                <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-7 dark:!hidden">
                <img src="@/assets/images/logo-white.png" alt="" class="hidden h-7 dark:!inline-block">
            </a>
            <div class="navbar-collapase ltr:ml-auto rtl:mr-auto" :class="{ 'hidden xl:flex': !isMenuOpen }">
                <div
                    class="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
                    <a href="#home" @click="setActiveTab(1)" :class="{ 'active': activeTab === 1 }"
                        class="leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear">
                        Home
                    </a>
                    <a href="#about-us" @click="setActiveTab(2)" :class="{ 'active': activeTab === 2 }"
                        class="leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear">
                        About Us
                    </a>
                    <a href="#services" @click="setActiveTab(3)" :class="{ 'active': activeTab === 3 }"
                        class="leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear">
                        Our Services
                    </a>
                    <a href="#doctors" @click="setActiveTab(4)" :class="{ 'active': activeTab === 4 }"
                        class="leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear">
                        Our Doctors
                    </a>
                    <a href="#feedback" @click="setActiveTab(5)" :class="{ 'active': activeTab === 5 }"
                        class="leading-normal [&.active]:text-sky-500 hover:text-sky-500 transition duration-300 ease-linear">
                        Feedback
                    </a>
                </div>
            </div>
            <button @click="isMenuOpen = !isMenuOpen" title="menu toggle" type="button"
                class="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
                <i :class="isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'" class="text-lg"></i>
            </button>
            <div class="flex gap-2">
                <button type="button" title="light & dark btn" @click="toggleMode"
                    class="!rounded-full btn btn-sub-gray btn-icon">
                    <Sun data-lucide="sun" class="inline-block size-4" v-if="lendingTheme === 'light'"></Sun>
                    <Moon data-lucide="moon" class="hidden dark:inline-block size-4" v-if="lendingTheme === 'dark'">
                    </Moon>
                </button>
                <button type="button" class="btn btn-sky">
                    <span class="hidden lg:inline-block ltr:mr-1 rtl:ml-1">Let's Talk </span>
                    <Headset data-lucide="headset" class="inline-block ml-1 size-4">
                    </Headset>
                </button>
            </div>
        </div>
    </header>
</template>
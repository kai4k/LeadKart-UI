<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

const isSticky = ref(false);

// Function to handle scroll event
const handleScroll = () => {
    isSticky.value = window.scrollY > 0;
};

// Add event listener on component mount
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Clean up the event listener on component unmount
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
const isMenuOpen = ref(false); // You can manage this based on your menu toggle logic
const activeTab = ref(1);

const setActiveTab = (tabIndex: number) => {
    activeTab.value = tabIndex;
};

</script>
<template>
    <div>
        <header
            class="landing-navbar h-20 top-10 [&.scroll-sticky]:top-0 [&.scroll-sticky]:shadow-gray-200/50 [&.scroll-sticky]:shadow-lg [&.scroll-sticky]:bg-white dark:[&.scroll-sticky]:shadow-dark-850 dark:[&.scroll-sticky]:bg-dark-900"
            :class="{
                'scroll-sticky': isSticky,
                'shadow-gray-200/50 shadow-lg bg-white dark:shadow-dark-850 dark:bg-dark-900': isSticky
            }">
            <div class="container flex items-center px-4 mx-auto">
                <RouterLink to="/" title="Logo">
                    <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-7 dark:hidden">
                    <img src="@/assets/images/logo-white.png" alt="" class="hidden h-7 dark:inline-block">
                </RouterLink>
                <div class="mx-auto navbar-collapase" :class="{ 'hidden xl:flex': !isMenuOpen }">
                    <div
                        class="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
                        <a href="#home" @click="setActiveTab(1)" :class="{ 'active': activeTab === 1 }"
                            class="leading-normal transition duration-300 ease-linear hover:text-orange-500">
                            Home
                        </a>

                        <a href="#about-us" @click="setActiveTab(2)" :class="{ 'active': activeTab === 2 }"
                            class="leading-normal transition duration-300 ease-linear hover:text-orange-500">
                            About Us
                        </a>

                        <a href="#courses" @click="setActiveTab(3)" :class="{ 'active': activeTab === 3 }"
                            class="leading-normal transition duration-300 ease-linear hover:text-orange-500">
                            Courses
                        </a>

                        <a href="#mentors" @click="setActiveTab(4)" :class="{ 'active': activeTab === 4 }"
                            class="leading-normal transition duration-300 ease-linear hover:text-orange-500">
                            Mentors
                        </a>

                        <a href="#blogs" @click="setActiveTab(5)" :class="{ 'active': activeTab === 5 }"
                            class="leading-normal transition duration-300 ease-linear hover:text-orange-500">
                            Blogs
                        </a>

                        <a href="#contact-us" @click="setActiveTab(6)" :class="{ 'active': activeTab === 6 }"
                            class="leading-normal transition duration-300 ease-linear hover:text-orange-500">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div class="flex items-center gap-2 ltr:ml-auto rtl:mr-auto">
                    <button @click="isMenuOpen = !isMenuOpen" type="button" title="menu toggle"
                        class="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
                        <i :class="isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'" class="text-lg"></i>
                    </button>
                    <button type="button" class="py-3 min-w-40 btn btn-orange">Enroll Now</button>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
.active {
    color: #F97316;
}
</style>
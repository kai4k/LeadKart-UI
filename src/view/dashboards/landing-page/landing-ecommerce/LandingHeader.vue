<script setup lang="ts">
import { Search, ShoppingCart } from 'lucide-vue-next';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
import { userProfileDetails } from '@/store/defaultDetails'
// Reactive state
const isSticky = ref(false);
const isMenuOpen = ref(false);
const activeTab = ref(1); // Default active tab

// Function to set the active tab
const setActiveTab = (tabIndex: number) => {
    activeTab.value = tabIndex;
    isMenuOpen.value = false;
};

// Scroll event handler
const handleScroll = () => {
    isSticky.value = window.scrollY > 0;
};

// ----Drop down list of profile options 
const open = ref(false);
const button = ref<HTMLButtonElement | null>(null);
const panel = ref<HTMLDivElement | null>(null);
const dropdownId = `dropdown-button-${Math.random().toString(36).substr(2, 9)}`;

const toggleDropdown = () => {
    open.value = !open.value;
    if (open.value) {
        button.value?.focus();
    }
};

const closeDropdown = () => {
    open.value = false;
};
const handlePanelClick = (event: MouseEvent) => {
    // Prevent closing the dropdown when clicking inside the panel
    event.stopPropagation();
};

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeDropdown();
    }
};

const handleClickOutside = (event: MouseEvent) => {
    if (panel.value && !panel.value.contains(event.target as Node) && button.value && !button.value.contains(event.target as Node)) {
        closeDropdown();
    }
};

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleClickOutside);
});
</script>
<template>
    <div :class="{ 'is-sticky': isSticky }">
        <header :class="[
            'container  mx-auto px-4 lg:max-w-[1300px] [&.scroll-sticky]:max-w-full landing-navbar top-0 h-20 bg-white rounded-b-lg [&.scroll-sticky]:rounded-none shadow-lg shadow-gray-200/50 dark:bg-dark-950 dark:shadow-dark-850',
            { 'scroll-sticky max-w-full rounded-none': isSticky }
        ]">
            <div class="flex items-center w-full gap-5">
                <RouterLink to="/" title="Logo">
                    <img src="@/assets/images/main-logo.png" alt="" class="inline-block h-7 dark:!hidden">
                    <img src="@/assets/images/logo-white.png" alt="" class="hidden h-7 dark:!inline-block">
                </RouterLink>
                <div class="mx-auto navbar-collapase" :class="{ 'hidden xl:flex': !isMenuOpen }">
                    <div class="flex flex-col xl:flex-row xl:items-center *:py-3 xl:py-0 xl:*:px-3 *:inline-block *:text-16 *:tracking-wide *:font-medium">
                        <a href="#products" title="products" @click="setActiveTab(1)" :class="{ 'active': activeTab === 1 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">Products</a>
                        <a href="#new-arrivals" title="new-arrivals" @click="setActiveTab(2)" :class="{ 'active': activeTab === 2 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">New
                            Arrivals</a>
                        <a href="#service" title="service" @click="setActiveTab(3)" :class="{ 'active': activeTab === 3 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">Service</a>
                        <a href="#cta" title="cta" @click="setActiveTab(4)" :class="{ 'active': activeTab === 4 }" class="leading-normal [&.active]:text-primary-500 hover:text-primary-500 transition duration-300 ease-linear">CTA</a>
                    </div>
                </div>
                <div class="flex items-center gap-2 ltr:ml-auto rtl:mr-auto xl:ltr:ml-0 xl:rtl:mr-0">
                    <button title="menu toggle" @click="isMenuOpen = !isMenuOpen" type="button" class="rounded-full xl:ltr:ml-0 xl:rtl:mr-0 ltr:ml-auto rtl:mr-auto navbar-toggle btn btn-sub-sky btn-icon xl:!hidden">
                        <i :class="isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'" class="text-lg"></i>
                    </button>
                    <button type="button" title="search" class="h-full rounded-full btn btn-icon btn-active-gray place-items-center">
                        <Search data-lucide="search" class="size-4"></Search>
                    </button>
                    <RouterLink to="" title="shopping-cart" class="h-full rounded-full btn btn-icon btn-active-gray place-items-center">
                        <ShoppingCart data-lucide="shopping-cart" class="size-4"></ShoppingCart>
                    </RouterLink>
                    <!-- Drop Down menu bar -->
                    <div class="dropdown" ref="dropdown">
                        <button ref="button" @click="toggleDropdown" :aria-expanded="open" :aria-controls="dropdownId" type="button" class="rounded-full btn btn-icon btn-active-gray">
                            <img :src="userProfileDetails.img" alt="Profile" class="rounded-full" />
                        </button>
                        <div v-if="open" ref="panel" @click="handlePanelClick" :id="dropdownId" class="dropdown-menu dropdown-right !w-72">
                            <div class="p-4">
                                <div class="flex items-center gap-3 mb-4">
                                    <img :src="userProfileDetails.img" alt="" class="rounded-md size-11" />
                                    <div>
                                        <h6 class="mb-0.5">{{ userProfileDetails.name }}</h6>
                                        <p class="flex items-center gap-2 text-gray-500 dark:text-dark-500">
                                            <span class="inline-block align-baseline bg-green-500 rounded-full size-2"></span>
                                            Active
                                        </p>
                                    </div>
                                </div>
                                <RouterLink to="pages-user" class="dropdown-item">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-user-line"></i>
                                    Profile
                                </RouterLink>
                                <RouterLink to="apps-ecommerce-shop-cart" class="dropdown-item">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-shopping-cart-2-line"></i>Shopping
                                    Cart
                                </RouterLink>
                                <RouterLink to="apps-ecommerce-wishlist" class="dropdown-item">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-bookmark-line"></i>Wish List
                                </RouterLink>
                                <RouterLink to="pages-help-center" class="dropdown-item">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-customer-service-2-line"></i>
                                    Help
                                    Center
                                </RouterLink>
                                <RouterLink to="pages-account-settings" class="dropdown-item">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-settings-3-line"></i>
                                    Account Settings
                                </RouterLink>
                            </div>
                            <div class="flex items-center gap-2 p-4 border-purple-500/20 border-y bg-purple-500/10">
                                <img src="@/assets/images/ecommerce/landing/gift.png" alt="" class="size-8 shrink-0" />
                                <div class="grow">
                                    <h6 class="mb-0.5">Refer a friend</h6>
                                    <p class="text-gray-500 dark:text-dark-500">7 invitation remaining</p>
                                </div>
                            </div>
                            <div class="p-4">
                                <RouterLink to="auth-signin-basic" class="dropdown-item"> <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-logout-circle-r-line"></i> Sign Out
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
@media screen and (max-width: 1243px) {
    .navbar-collapse {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 5rem;
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        padding: 1.25rem;
        --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
            0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000),
            var(--tw-shadow);
        --tw-shadow-color: #e5e7eb;
        --tw-shadow: var(--tw-shadow-colored);
    }

}
</style>
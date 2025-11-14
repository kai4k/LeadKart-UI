<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import flatPickr from 'vue-flatpickr-component';
// @ts-ignore
import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import NotificationDropdown from '@/components/common/NotificationDropdown.vue';
import ToolsAppModal from '@/components/ToolsAppModal.vue';
import { BellRing, CalendarRange, LayoutGrid, Moon, PanelRightOpen, Search, Settings, ShoppingBag, Sun } from 'lucide-vue-next';
import CustomizeDomiexLayout from '@/components/CustomizeDomiexLayout.vue';
import { notificationList } from './layout-topbar-data';
import FlagDropDown from '@/components/FlagDropDown.vue';
import TopbarCartSections from '@/components/TopbarCartSections.vue';
import { products } from '@/view/apps/app-ecommerce/checkout/checkout-data';
import ModernBoxPattern from '@/components/common/ModernBoxPattern.vue';

const store = useStore();
defineProps({
    scrolled: {
        type: Boolean,
        default: false
    }
})

const toolsAppShow = ref(false)
const showSettingCustomLayout = ref(false)
const setToolAppShowValue = (state: boolean) => {
    toolsAppShow.value = state;
}
const setShowSettingCustomLayoutValue = (state: boolean) => {
    showSettingCustomLayout.value = state
}
// -------------- Language -----------------------

const { t, locale } = useI18n();
const currentLocale = ref(store.getters.language);
const changeLanguage = () => {
    locale.value = currentLocale.value;
    store.dispatch('updateLanguage', currentLocale.value);
    const modeElement = document.querySelector('[lang]');
    if (modeElement) {
        modeElement.setAttribute('lang', currentLocale.value);
    }
};
// =========================================================
const layout = computed(() => store.getters.layoutStyle) // for horizontal or not check
const sidebarSize = ref(store.getters.sidebarSize);
// Method to update the selected sidebar
const setSidebar = () => {
    if (layout.value !== 'horizontal' || window.innerWidth < 1024) {
        store.dispatch('updateSidebarVisibleValue', true);
        const sizeElement = document.querySelector('[data-sidebar]')
        sidebarSize.value = sidebarSize.value === 'default' ? 'small' : 'default';
        if (sizeElement && window.innerWidth > 1024) {
            sizeElement.setAttribute('data-sidebar', sidebarSize.value);
            store.dispatch('updateSidebarSize', sidebarSize.value);
        };
        if (window.innerWidth < 1024) {
            setSidebarSize('default');
            store.dispatch('updateSidebarVisibleValue', true)
        }
    }
}

function setSidebarSize(size: string) {
    store.dispatch('updateSidebarSize', size);
    const sizeElement = document.querySelector('[data-sidebar]')
    if (sizeElement) {
        sizeElement.setAttribute('data-sidebar', size);
    }
}

const handleResize = () => {
    if (window.innerWidth < 1024) {
        store.dispatch('updateSidebarVisibleValue', false);
        setSidebarSize('default');
    }
}

// searching query 
const emits = defineEmits(['searchQuery'])

function handleSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    emits('searchQuery', term)
}

// ========== set Theme ==========
const layoutTheme = computed(() => store.getters.layoutTheme);
const toggleTheme = () => {
    const newTheme = layoutTheme.value === 'light' ? 'dark' : 'light';
    const modeElement = document.querySelector('[data-mode]');
    if (modeElement) {
        modeElement.setAttribute('data-mode', newTheme); // Apply the theme to the page
    }
    store.dispatch('updateLayoutTheme', newTheme); // Update Vuex state and localStorage
};

const RangeDate = ref<string | null>(null);
const rangePicker: Object = {
    mode: "range"
}

// ============ Cart Components ============
const showCartComponent = ref(false)


onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    changeLanguage()
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<template>
    <div class=" main-topbar group/topbar" :class="{
        navbar: true,
        'group-data-[layout=boxed]:top-0 group-data-[layout=semibox]:top-0 nav-sticky': scrolled,
        'z-index': layout === 'horizontal'
    }">
        <div class="main-topbar-wrapper group-data-[nav-type=pattern]:group-[&.nav-sticky]/topbar:bg-primary-500 group-data-[nav-type=pattern]:group-[&.nav-sticky]/topbar:border-primary-400">
            <div class="flex items-center w-full ltr:pr-4 rtl:pl-4">
                <!-- Logo and Sidebar Toggle -->
                <div class="navbar-brand">
                    <div class="logos">
                        <router-link to="/">
                            <img src="@/assets/images/main-logo.png" alt="Seminole tax hike" class="inline-block h-6 group-data-[layout=modern]:!hidden dark:!hidden" />
                            <img src="@/assets/images/logo-white.png" alt="Seminole tax hike" class="hidden h-6 group-data-[layout=modern]:!hidden dark:inline-block" />
                        </router-link>
                    </div>
                    <button @click="setSidebar" class="sidebar-toggle" title="Sidebar Toggle">
                        <PanelRightOpen data-lucide="panel-right-open" class="size-4"></PanelRightOpen>
                    </button>
                </div>

                <!-- Search -->
                <div class="relative items-center hidden lg:flex">
                    <Search class="text-topbar absolute top-3 size-4 group-data-[nav-type=pattern]:text-white/75 ltr:left-2 rtl:right-2">
                    </Search>
                    <input type="search" class="form-input w-72 !border-0 group-data-[nav-type=pattern]:bg-transparent group-data-[nav-type=pattern]:text-white group-data-[nav-type=pattern]:placeholder:text-white/50 focus:outline-none ltr:pl-8 rtl:pr-8" placeholder="Search for Domiex" @input="handleSearch" />
                </div>
                <!-- Actions -->
                <div class="flex items-center gap-2 ltr:ml-auto rtl:mr-auto">


                    <!-- Layout Settings -->
                    <button class="hidden topbar-link md:flex" title="Settings" data-modal-target="settingsModal" v-on:click="setShowSettingCustomLayoutValue(true)">
                        <Settings data-lucide="settings" class="size-4"></Settings>
                    </button>

                    <!-- Theme Toggle Dark/Light -->
                    <button class="topbar-link" @click="toggleTheme">
                        <!-- {{ $store.state.layoutTheme }} -->
                        <Moon data-lucide="moon" class="inline-block size-4" v-if="layoutTheme === 'light' || layoutTheme === 'black-white'"></Moon>
                        <Sun data-lucide="sun" class=" size-4" v-if="layoutTheme === 'dark'"></Sun>
                    </button>

                    <button class="hidden topbar-link sm:flex" title="tools-apps-modal" data-modal-target="toolsAppsModal" v-on:click="setToolAppShowValue(true)">
                        <LayoutGrid data-lucide="layout-grid" class="size-4"></LayoutGrid>
                    </button>

                    <!-- Card Section -->
                    <button class="relative hidden topbar-link sm:flex" title="shopping-cart" data-drawer-target="basicEnd" @click="showCartComponent = true">
                        <ShoppingBag data-lucide="shopping-bag" class="size-4"></ShoppingBag>
                        <span class="absolute !right-0 !p-0 !border-2 border-white !rounded-full dark:border-dark-900 badge badge-square badge-solid-red top-3.5 size-5">
                            {{ products.length }}
                        </span>
                    </button>

                    <!-- Notifications -->
                    <NotificationDropdown :title="BellRing" :list="notificationList" />

                    <!-- Language Switcher Dropdown -->
                    <div class="dropdown">
                        <FlagDropDown />
                    </div>
                    <!-- Schedule -->
                    <button type="button" class="items-center justify-center hidden px-2 link link-primary group-data-[nav-type=pattern]:text-white/75 group-data-[nav-type=pattern]:!border-primary-400 border border-gray-200 rounded-md md:flex dark:border-dark-800 h-9">
                        <CalendarRange data-lucide="calendar-range" class="ltr:md:mr-2 rtl:md:ml-2 size-4">
                        </CalendarRange>
                        <flat-pickr value="" v-model="RangeDate" data-date-format="d M, Y" data-range-date type="text" placeholder="Schedule" class="w-16 h-full bg-transparent outline-none" :config="rangePicker" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ModernBoxPattern />
    <ToolsAppModal :showModule="toolsAppShow" :set-visible-module-value="setToolAppShowValue" />
    <CustomizeDomiexLayout :showModule="showSettingCustomLayout" :setVisibleModuleValue="setShowSettingCustomLayoutValue" />
    <TopbarCartSections :showComponent="showCartComponent" @closeModel="(state) => showCartComponent = state" />
</template>
<style>
.z-index {
    z-index: 1006 !important;
}
</style>
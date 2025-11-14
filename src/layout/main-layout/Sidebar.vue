<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import SidebarDropDown from '@/components/SidebarDropDown.vue';
import NavbarList from './NavbarList.vue';
// @ts-ignore
import { useStore } from 'vuex';
const store = useStore()
const props = defineProps({
    scrolled: {
        type: Boolean,
    },
})

const sidebarVisible = computed(() => store.getters.isSidebarShow)
function closeSidebar() {
    store.dispatch('updateSidebarVisibleValue', !sidebarVisible.value);
}


const handleResize = () => {
    if (window.innerWidth < 1024) {
        store.dispatch('updateSidebarVisibleValue', false);
    } else {
        store.dispatch('updateSidebarVisibleValue', true);
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<template>
    <div id="main-sidebar"
        class="main-sidebar group-data-[layout=boxed]:top-[calc(theme('spacing.topbar')_+_theme('spacing.sidebar-boxed'))] navbar"
        :class="{
            'navbar ': true,
            'group-data-[layout=boxed]:!top-topbar': scrolled,
            'hidden': !sidebarVisible
        }">
        <div class="sidebar-wrapper">

            <div>
                <div class="navbar-brand">
                    <router-link to="/" class="inline-flex items-center justify-center w-full">
                        <div class="group-data-[sidebar=small]:hidden">
                            <img src="@/assets/images/main-logo.png" aria-label="logo" alt=""
                                class="h-6 mx-auto group-data-[sidebar-colors=light]:dark:hidden group-data-[sidebar-colors=dark]:hidden group-data-[sidebar-colors=brand]:hidden group-data-[sidebar-colors=purple]:hidden group-data-[sidebar-colors=sky]:hidden" />
                            <img src="@/assets/images/logo-white.png" aria-label="logo" alt=""
                                class="h-6 mx-auto group-data-[sidebar-colors=light]:hidden group-data-[sidebar-colors=light]:dark:inline-block" />
                        </div>
                        <div class="hidden group-data-[sidebar=small]:inline-block">
                            <img src="@/assets/images/logo-sm-dark.png" aria-label="logo" alt="" class="h-6 mx-auto" />
                        </div>
                    </router-link>
                </div>
                <SidebarDropDown />
            </div>
            <div class="fixed top-0 bottom-0 left-0 w-20 bg-white bg-light hidden group-data-[layout=doulcolumn]:block">
            </div>

            <NavbarList />
        </div>
        <div class="backdrop-overlay backdrop-blur-xs -z-50 lg:hidden" v-on:click="closeSidebar"></div>
    </div>
</template>
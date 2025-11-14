<script setup lang="ts">
import { onMounted } from 'vue';
// @ts-ignore
import { useStore } from 'vuex';
import { RouterView } from 'vue-router'

const store = useStore();
import AOS from 'aos';

onMounted(() => {
    AOS.init();
    const layoutTheme = store.getters.layoutTheme;
    const layoutStyle = store.getters.layoutStyle;
    const contentWidth = store.getters.contentWidth;
    const sidebarSize = store.getters.sidebarSize;
    const layoutDir = store.getters.layoutDir;
    const sidebarColor = store.getters.sidebarColor;
    const primaryColor = store.getters.primaryColor;
    const darkModeColors = store.getters.darkModeColors;
    const navType = store.getters.navigationType;

    const modeElement = document.querySelector('[data-mode]');
    const layoutElement = document.querySelector('[data-layout]');
    const contentWidthElement = document.querySelector('[data-content-width]');
    const sidebarSizeElement = document.querySelector('[data-sidebar]');
    const layoutDirElement = document.querySelector('[dir]');
    const sidebarColorElement = document.querySelector('[data-sidebar-colors]');
    const primaryColorElement = document.querySelector('[data-colors]');
    const navTypeElement = document.querySelector('[data-nav-type]');

    if (modeElement) {
        modeElement.setAttribute('data-mode', layoutTheme); // Apply the theme to the page
        if (layoutTheme == 'dark') {
            document.documentElement.classList.add(darkModeColors);
        }
    }
    if (layoutElement) {
        layoutElement.setAttribute('data-layout', layoutStyle); // Apply the theme to the page
    }
    if (contentWidthElement) {
        contentWidthElement.setAttribute('data-content-width', contentWidth)
    }
    if (sidebarSizeElement) {
        sidebarSizeElement.setAttribute('data-sidebar', sidebarSize)
    }
    if (layoutDirElement) {
        layoutDirElement.setAttribute('dir', layoutDir)
    }
    if (sidebarColorElement) {
        sidebarColorElement.setAttribute('data-sidebar-colors', sidebarColor)
    }
    if (primaryColorElement) {
        primaryColorElement.setAttribute('data-colors', primaryColor)
    }
    if (navTypeElement) {
        navTypeElement.setAttribute('data-nav-type', navType)
    }
});
// const layoutTheme = localStorage.getItem('layoutTheme')

</script>

<template>
    <RouterView />
</template>

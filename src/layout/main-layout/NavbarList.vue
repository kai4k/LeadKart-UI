<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

import menu from './nav-menu-list';
// @ts-ignore
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute();
const currentRoute = route.path;
// i18n setup
import { useI18n } from "vue-i18n";
import { Ellipsis } from 'lucide-vue-next';
import { onBeforeUnmount } from 'vue';
const { t, locale } = useI18n();
const translatedMenu = computed(() =>
    menu.map((item: any) => ({
        ...item,
        title: t(item.lang),
        children: item.children.map((child: any) => ({
            ...child,
            title: t(child.lang),
            children: child.children.map((subChild: any) => ({
                ...subChild,
                title: t(subChild.lang),
            })),
        })),
    }))
);
const filteredMenu = ref(translatedMenu);
const activeDropdown = ref<number | null>(0);
const activeSubDropdown = ref<{ [key: number]: number | null }>({}); // Track nested dropdowns per item
const subMenuPositionLeft = ref()
const subMenuPositionTop = ref()
const subMenuPositionBottom = ref()
const layout = computed(() => store.getters.layoutStyle);
const sidebarSize = computed(() => store.getters.sidebarSize);
const sidebarColor = computed(() => store.getters.sidebarColor);
const direction = computed(() => store.getters.layoutDir)

function toggleDropdown(index: number, event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Set left position (aligned with button)
    // subMenuPositionLeft.value = rect.left + 35;
    subMenuPositionLeft.value = direction.value !== 'rtl' ? rect.left + 35 : rect.left;

    // Use setTimeout to wait for the DOM to update
    setTimeout(() => {
        const dropdownMenu = document.querySelector(`.dropdown-wrapper .dropdown-menu`) as HTMLElement;

        if (dropdownMenu) {
            const menuListHeight = dropdownMenu.offsetHeight;
            const dropdownHeight = windowHeight - menuListHeight - 50;

            // Check if there is enough space below
            if (rect.bottom > windowHeight - 150) {
                subMenuPositionTop.value = null; // Remove 'top'
                subMenuPositionBottom.value = Math.max(rect.bottom - dropdownHeight, 0);
            } else {
                // Enough space, open dropdown below the button
                subMenuPositionTop.value = rect.bottom - 44;
                subMenuPositionBottom.value = null;
            }
        } else {
            // console.error('Dropdown menu not found');
        }
    }, 0); // Set timeout with 0 ms to execute after the DOM has updated
    // Toggle dropdown visibility
    activeDropdown.value = activeDropdown.value === index ? null : index;
    activeSubDropdown.value = {};
}

// Toggle nested dropdown visibility
function toggleSubDropdown(parentIndex: number, index: number) {
    activeSubDropdown.value[parentIndex] = activeSubDropdown.value[parentIndex] === index ? null : index;
}


function handleItemClick(index: number, childIndex: number | null, hasChildren: boolean) {

    if (childIndex === null) {
        // Clicked on a leaf item, close all dropdowns
        if (layout.value == 'horizontal' || sidebarSize.value === 'small') {
            activeDropdown.value = null;
            activeSubDropdown.value = {};
        }
    } else {
        // If the item has children, toggle the sub-dropdown
        if (hasChildren) {
            toggleSubDropdown(index, childIndex);
        } else {
            // Close parent dropdown when clicking a leaf item
            activeDropdown.value = null;
            activeSubDropdown.value = {}; // Close all nested dropdowns
        }
    }
}

function handleItemClick2(index: number, childIndex: number | null, hasChildren: boolean) {
    if (childIndex === null) {
        // Clicked on a leaf item, close all dropdowns
        if (layout.value == 'horizontal' || sidebarSize.value === 'small') {
            activeDropdown.value = null;
            activeSubDropdown.value = {};
        }
    } else {
        // If the item has children, toggle the sub-dropdown
        if (hasChildren) {
            toggleSubDropdown(index, childIndex);
        } else {
            activeSubDropdown.value[index] = childIndex; // Close all nested dropdowns
            if (layout.value == 'horizontal' || sidebarSize.value === 'small') {
                setNullMenu()
            }
        }
    }
}

const setActiveDropdown = (route: string) => {
    for (let i = 0; i < menu.length; i++) {
        const parent = menu[i];

        // Check if the route matches a direct parent link
        if (parent.link === route) {
            activeDropdown.value = i;
            activeSubDropdown.value = { [i]: null };
            return;
        }

        // Check for matching route in children
        for (let j = 0; j < parent.children.length; j++) {
            const child = parent.children[j];

            if (child.link === route) {
                activeDropdown.value = i; // Set the parent dropdown
                activeSubDropdown.value = { [i]: j }; // Set the child dropdown
                return;
            }

            // Check grandchildren if necessary
            for (let k = 0; k < child.children.length; k++) {
                const grandChild = child.children[k];

                if (grandChild.link === route) {
                    activeDropdown.value = i;
                    activeSubDropdown.value = { [i]: j };
                    return;
                }
            }
        }
    }
};

const removeSlash = currentRoute.replace('/', '');
watch(() => route.path, (newRoute) => {
    setActiveDropdown(newRoute);
    menu.forEach((item: any) => {
        const active = setActiveClass(item);
        if (active) {
            activeMenu.value = active;
        }
    });
});

watch(() => layout.value, () => {
    if (layout.value == 'horizontal' || sidebarSize.value === 'small') {
        activeDropdown.value = null;
        activeSubDropdown.value = {};
    }
})
watch(() => sidebarSize.value, () => {
    if (layout.value == 'horizontal' || sidebarSize.value === 'small') {
        activeDropdown.value = null;
        activeSubDropdown.value = {};
    }
    else {
        setActiveDropdown(removeSlash);
    }
})

const activeMenu = ref<any>({});
onMounted(() => {

    if (sidebarSize.value !== 'horizontal') {

        setActiveDropdown(removeSlash);
    }
    if (layout.value == 'horizontal' || sidebarSize.value === 'small') {
        activeDropdown.value = null;
        activeSubDropdown.value = {};
    }
    menu.forEach((item: any) => {
        const active = setActiveClass(item);
        if (active) {
            activeMenu.value = active;
        }
    });
})


function setActiveClass(menu: any) {
    const path = route.path == '/' ? '/' : route.path.replace('/', '');
    if (path === menu.link) {
        return menu;
    }
    if (menu.children) {
        for (let i = 0; i < menu.children.length; i++) {
            const active: any = setActiveClass(menu.children[i]);
            if (active !== null) {
                return active;
            }
        }
    }
    return null;
}

function isActiveClass(menu: any) {
    if (activeMenu.value?.link === menu.link) {
        return true;
    }
    if (menu.children) {
        for (let i = 0; i < menu.children.length; i++) {
            if (isActiveClass(menu.children[i])) {
                return true;
            }
        }
    }
    return false;
}
// -------------------------------  dropdown close  --------------------------------------

function setNullMenu() {
    activeDropdown.value = null;
    activeSubDropdown.value = {};
}
const dropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
    if (sidebarSize.value !== 'default' || layout.value == 'horizontal') {
        if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
            setNullMenu();
        }
    }
};
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});


</script>
<template>
    <simplebar class=" navbar-menu" id="navbar-menu-list" data-simplebar-scroll="gray">
        <ul class="group-data-[layout=horizontal]:md:flex group-data-[layout=horizontal]:*:shrink-0" id="sidebar"
            ref="dropdownRef">
            <li v-for="(item, index) in filteredMenu" :key="`${index}-${item.title}`"
                :class="item.separator ? 'menu-title' : 'relative'">
                <!-- Separator Item -->
                <template v-if="item.separator">
                    <span class="group-data-[sidebar=small]:hidden">
                        {{ item.title }}
                    </span>
                    <Ellipsis v-if="item.separator" class="hidden group-data-[sidebar=small]:hidden mx-auto size-4">
                    </Ellipsis>
                </template>

                <!-- Item without Children -->
                <template v-else-if="!item.children.length">
                    <router-link :to="item.link" class="nav-link" :class="isActiveClass(item) ? 'active' : ''"
                        @click="handleItemClick(index, null, false)">
                        <span class="w-6 group-data-[sidebar=small]:mx-auto shrink-0">
                            <component :is="item.icon"
                                class="size-4 group-data-[sidebar=small]:size-5 group-data-[sidebar=medium]:size-5">
                            </component>
                        </span>
                        <span class="group-data-[sidebar=small]:hidden">
                            {{ item.title }}
                        </span>
                    </router-link>
                </template>

                <!-- Item with Dropdown -->
                <template v-else>
                    <div class="relative">
                        <button class="nav-link" @click="toggleDropdown(index, $event)"
                            :class="isActiveClass(item) ? 'active' : ''">
                            <span class="w-6 group-data-[sidebar=small]:mx-auto shrink-0 ">
                                <component :is="item.icon"
                                    class="size-4 group-data-[sidebar=small]:size-5 group-data-[sidebar=medium]:size-5">
                                </component>
                            </span>
                            <span class=" content">
                                {{ item.title }}
                            </span>
                            <svg :class="{ 'transform rotate-180': activeDropdown === index }" class="arrow"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                        <!-- Dropdown Menu -->
                        <div class=" dropdown-wrapper dropdown-menu" :class="{ 'ml-7': sidebarSize === 'small' }"
                            v-if="activeDropdown === index"
                            :style="layout === 'horizontal' ? { left: subMenuPositionLeft + 'px', top: 130 + 'px' } : sidebarSize === 'small' && direction !== 'rtl' ? {
                                left: subMenuPositionLeft + 'px', top: subMenuPositionTop !== null ? subMenuPositionTop + 'px' : '',
                                bottom: subMenuPositionBottom !== null ? subMenuPositionBottom + 'px' : ''
                            } : direction == 'rtl' && layout === 'boxed' ? { right: 107 + 'px', top: subMenuPositionTop !== null ? subMenuPositionTop + 'px' : '', bottom: subMenuPositionBottom !== null ? subMenuPositionBottom + 'px' : '' } : direction == 'rtl' ? { right: 75 + 'px', top: subMenuPositionTop !== null ? subMenuPositionTop + 'px' : '' } : ''">
                            <ul :class="layout !== 'horizontal' ? 'dropdown-wrapper dropdown-menu' : ''" class="">
                                <li v-for="(child, childIndex) in item.children"
                                    :key="`${index}-${childIndex}-${child.title}`" class="relative">

                                    <RouterLink :to="child.link"
                                        @click="handleItemClick2(index, childIndex, child.children.length)"
                                        class="nav-link " :class="isActiveClass(child) ? 'active' : ''">
                                        {{ child.title }}
                                        <svg v-if="child.children.length > 0"
                                            :class="{ 'transform rotate-180': activeSubDropdown[index] === childIndex }"
                                            class="arrow size-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </RouterLink>
                                    <!-- Nested Dropdown -->
                                    <div v-if="child.children.length && activeSubDropdown[index] === childIndex"
                                        class="relative "
                                        :class="{ 'ml-48 -top-5': sidebarSize === 'small' && direction !== 'rtl', 'mr-44 bottom-9 ': direction == 'rtl' && sidebarSize === 'small' }">
                                        <ul :class="[
                                            layout !== 'horizontal' ? 'dropdown-wrapper dropdown-menu' : 'md:absolute w-full shadow-lg rounded-md bg-white -right-40 -top-10',
                                            sidebarColor === 'dark' ? 'dark:!bg-dark-800' :
                                                (layout === 'horizontal' && sidebarColor !== 'dark' ? 'dark:!bg-dark-800' : sidebarSize === 'small' ? 'dark:!bg-dark-800' : 'dark:!bg-transparent')
                                        ]">
                                            <li v-for="(subChild, subChildIndex) in child.children"
                                                :key="subChildIndex">
                                                <router-link @click="handleItemClick(index, null, false)"
                                                    :to="subChild.link" exactActiveClass="active">
                                                    {{ subChild.title }}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </li>
        </ul>
    </simplebar>
</template>
<style scoped></style>
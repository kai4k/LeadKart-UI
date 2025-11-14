<script setup lang="ts">
import { ref, } from "vue";
// @ts-ignore
import { useStore } from 'vuex';
import { defaultState } from "@/store/defaultDetails";
import {
    darkModeColorOptions,
    layoutModeOptions,
    sidebarColorOptions,
    primaryColorOptions,
    sidebarOptions,
    layoutOptions
} from "@/layout/main-layout/layout-topbar-data";
import { RotateCcw, ShoppingBag, X } from "lucide-vue-next";
const props = defineProps({
    setVisibleModuleValue: Function,
    showModule: Boolean,
})
const store = useStore();


//  ======================== Select Layout: ==============================
const selectedLayout = ref(store.getters.layoutStyle);

const setLayout = (layout: string) => {
    selectedLayout.value = layout
    setNavigation('default')
    store.dispatch('updateLayoutStyle', layout);
    const modeElement = document.querySelector('[data-layout]');
    if (modeElement) {
        modeElement.setAttribute('data-layout', layout);
        if (layout === 'horizontal') {
            setSidebar('default')
        }
    }
};

// Close modal function
const closeModal = () => {
    if (props.setVisibleModuleValue) props.setVisibleModuleValue(false)
};
// --------------------------------------------------
interface NavigationOption {
    id: string;
    value: string;
    label: string;
    name: string;
}

// State for layout and navigation type
const navType = ref(store.getters.navigationType);

// Navigation options
const navigationOptions: NavigationOption[] = [
    { id: 'defaultType', value: 'default', label: 'Default', name: 'navType' },
    { id: 'floatingType', value: 'floating', label: 'Floating', name: 'navType' },
    { id: 'boxedType', value: 'boxed', label: 'Boxed', name: 'navType' },
    { id: 'patternType', value: 'pattern', label: 'Pattern', name: 'navType' },
];

// Function to set navigation type
const setNavigation = (type: string) => {
    store.dispatch('updateNavType', type);
    navType.value = type
    const modeElement = document.querySelector('[data-nav-type]');
    if (modeElement) {
        modeElement.setAttribute('data-nav-type', type);
    }
};

// -------------------------------------------
// Define an interface for content width options
interface ContentWidthOption {
    id: string;
    value: string;
    label: string;
    name: string;
}

// Reactive state for selected content width
// Options for content width
const contentWidthOptions: ContentWidthOption[] = [
    {
        id: 'defaultContent',
        value: 'default',
        label: 'Default',
        name: 'contentWidth',
    },
    {
        id: 'fluidLayout',
        value: 'fluid',
        label: 'Fluid',
        name: 'contentWidth',
    },
];
// ========================= Content width ===========================
const contentWidth = ref(store.getters.contentWidth);
// Method to set content width
const setContentWidth = (width: string) => {
    contentWidth.value = width
    store.dispatch('updateContentWidth', width);
    const modeElement = document.querySelector('[data-content-width]');
    if (modeElement) {
        modeElement.setAttribute('data-content-width', width);
    }
};

// ========================= Navbar Size ===========================
const sidebar = ref(store.getters.sidebarSize);
// Method to update the selected sidebar
const setSidebar = (size: string) => {
    sidebar.value = size
    store.dispatch('updateSidebarSize', size);
    const sizeElement = document.querySelector('[data-sidebar]')
    if (sizeElement) {
        sizeElement.setAttribute('data-sidebar', size)
    }
};

// ===================== Direction ==============
// Reactive state for layout direction
const layoutDir = ref(store.getters.layoutDir);
// Method to update the layout direction
const setDirection = (direction: string) => {
    layoutDir.value = direction
    store.dispatch('updateLayoutDir', direction);
    const sizeElement = document.querySelector('[dir]')
    if (sizeElement) {
        sizeElement.setAttribute('dir', direction)
    }
};
// ===================== set Theme =====================
const layoutTheme = ref(store.getters.layoutTheme);
const selectedDarkModeColor = ref(store.getters.darkModeColors);

const setLayoutMode = (newTheme: string) => {
    layoutTheme.value = newTheme
    // Update Vuex state
    store.dispatch('updateLayoutTheme', newTheme);
    // Apply the theme to the page (data-mode attribute)
    const modeElement = document.querySelector('[data-mode]');
    if (modeElement) {
        modeElement.setAttribute('data-mode', newTheme);
        setDarkModeColors(selectedDarkModeColor.value);
    }
};

// Method to update selected dark mode color
const setDarkModeColors = (color: string) => {
    selectedDarkModeColor.value = color;
    document.documentElement.classList.remove("default", "zinc", "stone", "neutral", "gray");
    document.documentElement.classList.add(color);
    store.dispatch('updateDarkModeColors', color);
};

// =========== sidebar color ===================
const selectedSidebarColor = ref(store.getters.sidebarColor);

// Method to update selected sidebar color
const setSidebarColors = (color: string) => {
    selectedSidebarColor.value = color
    store.dispatch('updateSidebarColor', color);
    const sidebarColorElement = document.querySelector('[data-sidebar-colors]')
    if (sidebarColorElement) {
        sidebarColorElement.setAttribute('data-sidebar-colors', color)
    }
};

// ==========================================================
// Reactive state for selected primary color
const selectedPrimaryColor = ref(store.getters.primaryColor);
// Method to update selected primary color
const setPrimaryColors = (color: string) => {
    selectedPrimaryColor.value = color
    store.dispatch('updatePrimaryColor', color);
    const primaryColorElement = document.querySelector('[data-colors]');
    if (primaryColorElement) {
        primaryColorElement.setAttribute('data-colors', color)
    }
};
const resetLayoutModule = () => {
    setLayout(defaultState.layoutStyle) // default, boxed, horizontal, modern, semibox 
    setLayoutMode(defaultState.layoutTheme) // light, dark, black-white
    setDirection(defaultState.layoutDir) // rtl, ltr
    setSidebarColors(defaultState.sidebarColor) // dark, light, brand, purple, sky
    setContentWidth(defaultState.contentWidth);  // default, Fluid
    setSidebar(defaultState.sidebarSize); // default, small, medium
    setPrimaryColors(defaultState.primaryColor); // default, green, violet, orange, teal, fuchsia, lime, amber
    setNavigation(defaultState.navigationType) // default, floating, boxed, pattern
    closeModal()
}
</script>
<template>
    <div id="settingsModal" v-if="showModule" class="modal ">
        <div class="modal-wrap modal-center modal-xl">
            <div class="modal-header">
                <h6>Domiex Customizer</h6>
                <button @click="closeModal()" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div>
                    <h6 class="mb-3">Select Layout:</h6>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space">
                        <div v-for="layoutOption in layoutOptions" :key="layoutOption.value"
                            class="flex-col gap-0 input-radio-group">
                            <input @change="setLayout(layoutOption.value)" :id="layoutOption.id" name="layout"
                                type="radio" v-model="selectedLayout" :value="layoutOption.value"
                                class="hidden input-radio peer" />
                            <label :for="layoutOption.id"
                                class="block w-full mb-3 overflow-hidden cursor-pointer card h-28 peer-checked:border-primary-500"
                                :class="layoutOption.extraCss">
                                <span class="block h-full">
                                    <span class="flex gap-1  px-4 py-1.5 bg-gray-200/50 dark:bg-dark-800/50">
                                        <span class="inline-block bg-red-500 rounded-full size-1.5"></span>
                                        <span class="inline-block bg-green-500 rounded-full size-1.5"></span>
                                        <span class="inline-block rounded-full bg-yellow-500 size-1.5"></span>
                                    </span>
                                    <span v-html="layoutOption.template"></span>
                                </span>
                            </label>
                            <label :for="layoutOption.id" class="cursor-pointer form-label">
                                {{ layoutOption.label }}
                            </label>
                        </div>
                    </div>
                    <div v-if="selectedLayout === 'modern'" class="hidden lg:block">
                        <h6 class="my-3">Navigation Type</h6>
                        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space">
                            <div class="input-radio-group" v-for="option in navigationOptions" :key="option.id">
                                <input :id="option.id" :value="option.value" :name="option.name" type="radio"
                                    v-model="navType" class="input-radio input-radio-primary"
                                    @change="setNavigation(option.value)" />
                                <label :for="option.id" class="input-radio-label">{{ option.label }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="hidden xl:block">
                        <h6 class="my-4">Content Width:</h6>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-space">
                            <div v-for="option in contentWidthOptions" :key="option.id"
                                class="flex-col gap-0 input-radio-group">
                                <input :id="option.id" :value="option.value" :name="option.name" type="radio"
                                    v-model="contentWidth" class="hidden input-radio peer"
                                    @change="setContentWidth(option.value)" />
                                <label :for="option.id"
                                    class="block w-full mb-3 overflow-hidden cursor-pointer card h-28 peer-checked:border-primary-500">
                                    <span class="block h-full">
                                        <span class="flex gap-1 px-4 py-1.5 bg-gray-200/50 dark:bg-dark-800/50">
                                            <span class="inline-block bg-red-500 rounded-full size-1.5"></span>
                                            <span class="inline-block bg-green-500 rounded-full size-1.5"></span>
                                            <span class="inline-block rounded-full bg-yellow-500 size-1.5"></span>
                                        </span>
                                        <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
                                            <span
                                                class="h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850"></span>
                                            <span class="h-[calc(100%_-_8px)] col-span-10 py-1.5 px-4 inline-block">
                                                <span
                                                    class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                                <label :for="option.id" class="cursor-pointer form-label">
                                    {{ option.label }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div v-if="selectedLayout !== 'horizontal'" class="hidden lg:block">
                        <h6 class="my-4">Sidebar Size:</h6>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-space">
                            <div v-for="option in sidebarOptions" :key="option.id"
                                class="flex-col gap-0 input-radio-group">
                                <input :id="option.id" :value="option.value" :name="option.name" type="radio"
                                    v-model="sidebar" class="hidden input-radio peer"
                                    @change="setSidebar(option.value)" />
                                <label :for="option.id"
                                    class="block w-full h-24 mb-3 overflow-hidden cursor-pointer card peer-checked:border-primary-500">
                                    <span class="block h-full">
                                        <span class="flex gap-1 px-4 py-1.5 bg-gray-200/50 dark:bg-dark-800/50">
                                            <span class="inline-block bg-red-500 rounded-full size-1.5"></span>
                                            <span class="inline-block bg-green-500 rounded-full size-1.5"></span>
                                            <span class="inline-block rounded-full bg-yellow-500 size-1.5"></span>
                                        </span>
                                        <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
                                            <span :class="option.sidebarColClass"></span>
                                            <span class="h-[calc(100%_-_8px)] py-1.5 px-4 inline-block"
                                                :class="option.contentColClass">
                                                <span
                                                    class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                                <span
                                                    class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                                <label :for="option.id" class="cursor-pointer form-label">
                                    {{ option.label }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <h6 class="my-4">Layout Direction:</h6>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-space">
                        <div class="flex-col gap-0 input-radio-group">
                            <input id="ltrMode" @change="setDirection('ltr')" name="layoutDirection" type="radio"
                                v-model="layoutDir" value="ltr" class="hidden input-radio peer">
                            <label for="ltrMode"
                                class="block w-full mb-3 overflow-hidden cursor-pointer card h-28 peer-checked:border-primary-500">
                                <span class="block h-full">
                                    <span class="flex gap-1 px-4 py-1.5 bg-gray-200/50 dark:bg-dark-800/50">
                                        <span class="inline-block bg-red-500 rounded-full size-1.5"></span>
                                        <span class="inline-block bg-green-500 rounded-full size-1.5"></span>
                                        <span class="inline-block rounded-full bg-yellow-500 size-1.5"></span>
                                    </span>
                                    <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
                                        <span
                                            class="h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850"></span>
                                        <span class="h-[calc(100%_-_8px)] col-span-10 py-1.5 px-4 inline-block">
                                            <span
                                                class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                        </span>
                                    </span>
                                </span>
                            </label>
                            <label for="ltrMode" class="cursor-pointer form-label">LTR</label>
                        </div>
                        <div class="flex-col gap-0 input-radio-group">
                            <input @change="setDirection('rtl')" id="rtlMode" name="layoutDirection" type="radio"
                                v-model="layoutDir" value="rtl" class="hidden input-radio peer">
                            <label for="rtlMode"
                                class="block w-full mb-3 overflow-hidden cursor-pointer card h-28 peer-checked:border-primary-500">
                                <span class="block h-full">
                                    <span class="flex gap-1 px-4 py-1.5 bg-gray-200/50 justify-end dark:bg-dark-800/50">
                                        <span class="inline-block bg-red-500 rounded-full size-1.5"></span>
                                        <span class="inline-block bg-green-500 rounded-full size-1.5"></span>
                                        <span class="inline-block rounded-full bg-yellow-500 size-1.5"></span>
                                    </span>
                                    <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
                                        <span class="h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block">
                                            <span
                                                class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850 ml-auto"></span>
                                            <span
                                                class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850 ml-auto"></span>
                                            <span
                                                class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850 ml-auto"></span>
                                            <span
                                                class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850 ml-auto"></span>
                                            <span
                                                class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850 ml-auto"></span>
                                        </span>
                                        <span
                                            class="h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850"></span>
                                    </span>
                                </span>
                            </label>
                            <label for="rtlMode" class="cursor-pointer form-label">RTL</label>
                        </div>
                    </div>

                    <h6 class="my-4">Layout Mode:</h6>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-space">
                        <div v-for="option in layoutModeOptions" :key="option.id"
                            class="relative flex-col gap-0 input-radio-group">
                            <input :id="option.id" :name="option.name" type="radio" v-model="layoutTheme"
                                :value="option.value" class="hidden input-radio peer"
                                @change="setLayoutMode(option.value || layoutTheme)" />
                            <label :for="option.id"
                                :class="['relative block w-full mb-3 overflow-hidden cursor-pointer card h-28', option.labelClass]">
                                <span class="relative block h-full ">
                                    <span :class="['flex gap-1 px-4 py-1.5', option.bgClass]">
                                        <span class="inline-block bg-red-500 rounded-full size-1.5"></span>
                                        <span class="inline-block bg-green-500 rounded-full size-1.5"></span>
                                        <span class="inline-block rounded-full bg-yellow-500 size-1.5"></span>
                                    </span>
                                    <span class="grid h-[calc(100%_-_8px)] grid-cols-12" :class="option.spanTextCss">
                                        <span :class="option.sidebarColClass"></span>
                                        <span :class="`${option.contentColClass} p-1.5 inline-block`">
                                            <span
                                                class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                            <span
                                                class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
                                        </span>
                                    </span>
                                </span>
                            </label>
                            <label :for="option.id" class="cursor-pointer form-label">
                                {{ option.label }}
                            </label>
                        </div>
                    </div>

                    <div v-if="layoutTheme === 'dark'">
                        <h6 class="my-4 darkModeColors">Dark Mode Colors:</h6>
                        <div class="flex flex-wrap items-center gap-3 darkModeColors">
                            <div v-for="option in darkModeColorOptions" :key="option.id" class="input-radio-group">
                                <input :id="option.id" :name="option.name" type="radio" v-model="selectedDarkModeColor"
                                    :value="option.value" class="hidden input-radio peer"
                                    @change="setDarkModeColors(option.value)" />
                                <label :for="option.id" :class="[
                                    'flex items-center justify-center input-radio-label size-10',
                                    option.labelClass,
                                ]">
                                    <i v-if="option.icon" :class="option.icon"></i>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div v-if="selectedLayout !== 'horizontal'">
                        <h6 class="my-4">Sidebar Asset Colors:</h6>
                        <div class="flex flex-wrap items-center gap-3">
                            <div v-for="option in sidebarColorOptions" :key="option.id" class="input-radio-group">
                                <input :id="option.id" :name="option.name" type="radio" v-model="selectedSidebarColor"
                                    :value="option.value" class="hidden input-radio peer"
                                    @change="setSidebarColors(option.value)" />
                                <label :for="option.id" :class="[
                                    'rounded-full input-radio-label size-10 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400',
                                    option.labelClass,
                                ]"></label>
                            </div>
                        </div>
                    </div>

                    <h6 class="my-4">Primary Asset Colors:</h6>
                    <div class="flex flex-wrap items-center gap-3">
                        <div v-for="option in primaryColorOptions" :key="option.id" class="input-radio-group">
                            <input :id="option.id" :name="option.name" type="radio" v-model="selectedPrimaryColor"
                                :value="option.value" class="hidden input-radio peer"
                                @change="setPrimaryColors(option.value)" />
                            <label :for="option.id" :class="[
                                'rounded-full input-radio-label size-10 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400',
                                option.labelClass,
                            ]"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end gap-2 modal-footer">
                <button type="button" class="btn btn-sub-gray" @click="resetLayoutModule">
                    <RotateCcw data-lucide="rotate-ccw" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></RotateCcw>
                    Reset Layouts
                </button>
                <button type="button" class="btn btn-red">
                    <ShoppingBag data-lucide="shopping-bag" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></ShoppingBag>
                    Buy Now
                </button>
            </div>
        </div>

        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal()"></div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, defineProps } from 'vue';
defineProps({
    title: {
        type: Function,
        default: () => 'Recent'
    },
    showArrow: {
        type: Boolean,
        default: true
    },
    className: {
        type: String,
        default: 'border-gray-200 flex px-3 py-1.5 text-xs font-medium dark:border-dark-800 link link-primary btn'
    },
    extraClass: {
        type: String,
        default: ''
    },
    arrayList: {
        type: Object,
        default: {},
    },
    handleAction: {
        type: Function,
        default: () => { }, // A no-op function to prevent errors
    },
    iconCss: {
        type: String,
        default: 'size-5'
    },
    menuIconCss: {
        type: String,
        default: 'size-5'
    }
})

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const close = () => {
    open.value = false;
};

const toggle = () => {
    open.value = !open.value;
};
const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        close();
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
    <div class="relative dropdown shrink-0 " ref="dropdownRef">
        <button ref="button" @click="toggle" type="button" class="flex items-center text-gray-500 !border-none "
            :class="className" id="recent-btn">
            <component :is="title" :class="iconCss" />
            <svg v-show="showArrow" :class="{ 'transform rotate-180': open }"
                class="transition-transform duration-300 ltr:ml-1 rtl:mr-1 size-4" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>
        <div v-show="open" class="absolute p-2 top-10 dropdown-menu" :class="extraClass">
            <ul>
                <li v-for="option in arrayList" :key="option">
                    <a href="#!" class="dropdown-item " @click="handleAction(option)">
                        <component :class="menuIconCss" class="align-middle ltr:mr-2 rtl:ml-2 " :is="option.icon">
                        </component>
                        <span>{{ option.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

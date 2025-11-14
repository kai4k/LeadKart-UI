<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, defineProps } from 'vue';
const props = defineProps({
    title: {
        type: Function,
        default: () => 'Recent'
    },
    list: {
        type: Object,
        default: ['Recent', 'Weekly', 'Monthly', 'Yearly']
    },
    showArrow: {
        type: Boolean,
        default: true
    },
    className: {
        type: String,
        default: 'border-gray-200 border rounded-md px-3 py-1.5 text-xs font-medium dark:border-dark-800 !link !link-primary'
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
    },
    mainCss: {
        type: String
    }
})

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const emits = defineEmits(['tableActivity', 'handleAction'])
const selectOption = (option: string) => {
    emits('tableActivity', option)
};

const handleClick = (option: { name: string }) => {
    emits('handleAction', option.name)
}

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
    <div class="relative dropdown shrink-0" ref="dropdownRef" :class="mainCss">
        <button ref="button" @click="toggle" type="button" class="flex items-center text-gray-500 dark:text-dark-500"
            :class="className" id="recent-btn">
            <component :is="title" :class="iconCss" class="inline-block"/>
            <svg v-show="showArrow" :class="[{ 'transform rotate-180': open }, iconCss]"
                class="transition-transform duration-300 size-4" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>
        <div v-show="open" class="absolute p-2 top-10 serLeft dropdown-menu" :class="extraClass">
            <ul class="text-gray-900 dark:text-white">
                <template v-if="Object.keys(arrayList).length > 0">
                    <li v-for="option in arrayList" :key="option">
                        <a class="cursor-pointer dropdown-item" @click="handleClick(option)">
                            <component :class="menuIconCss" class="align-middle ltr:mr-2 rtl:ml-2 !size-4" :is="option.icon">
                            </component>
                            <span>{{ option.name }}</span>
                        </a>
                    </li>
                </template>
                <template v-else>
                    <li v-for="option in list">
                        <a class="cursor-pointer dropdown-item" @click="selectOption(option)">
                            <span>{{ option }}</span>
                        </a>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.serLeft {
    left: -80px !important;
}

.set-position {
    left: -135px !important;
    top: 22px !important;
}

.zero-position {
    left: -60px !important;
    top: 26px !important;
}

.file-position {
    left: -58px !important;
    top: 32px !important;
}

.chart-menu-position {
    left: -140px !important;
    top: 20px !important;
}

.review-table-position {
    left: 0 !important;
}

.mange-table-position {
    left: -140px !important;
    top: 30px !important;
}
</style>
<script setup lang="ts">
import simplebar from 'simplebar-vue';
import { computed, onBeforeUnmount, onMounted, ref, defineProps } from 'vue';
defineProps({
    title: {
        type: Function,
        default: () => 'Recent'
    },
    list: {
        type: Object,
        default: {}
    },
    showArrow: {
        type: Boolean,
        default: true
    },
    className: {
        type: String,
        default: ''
    },
    extraClass: {
        type: String,
        default: ''
    }
})

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const selectOption = (option: string) => {
    close(); // Close the dropdown after selection
};

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
        <button ref="button" @click="toggle" type="button" class="topbar-link" :class="className" id="recent-btn">
            <!-- icon -->
            <span class="relative">
                <component :is="title" class="size-4" />
                <div
                    class="absolute top-0 -mt-1 bg-green-500 rounded-full ltr:-mr-1 rtl:-ml-1 ltr:right-0 rtl:left-0 size-2 animate-ping">
                </div>
                <div
                    class="absolute top-0 -mt-1 bg-green-500 rounded-full ltr:-mr-1 rtl:-ml-1 ltr:right-0 rtl:left-0 size-2">
                </div>
            </span>
        </button>
        <div v-show="open" class="absolute p-2 top-10 serLeft dropdown-menu !w-96" :class="extraClass">
            <div class="flex items-center gap-3 p-4">
                <h6 class="grow">Notification ({{ list.length }})</h6>
                <a href="#!" class="text-sm shrink-0 link link-primary">Mark All as read</a>
            </div>
            <div class="py-4 border-t border-gray-200 dark:border-dark-800">
                <simplebar class="px-4 max-h-[calc(100vh_-_170px)]">
                    <ul class="">
                        <li v-for="option in list" :key="option">
                            <a href="#!"
                                class="relative flex gap-3 p-2 transition duration-300 ease-linear rounded-md hover:bg-gray-100 [&.unread]:bg-gray-100 dark:[&.unread]:bg-dark-850 dark:hover:bg-dark-850 "
                                :class="option.extraCss" @click="selectOption(option)">
                                <img v-if="option.image" :src="option.image" alt=""
                                    class="rounded-full size-7 shrink-0" />
                                <div v-if="!option.image"
                                    class="flex items-center justify-center text-xs text-gray-500 bg-gray-100 rounded-full size-7 shrink-0">
                                    {{ option.name.match(/\b\w/g).join("") }}
                                </div>
                                <div class="grow">
                                    <p class="mb-0.5 text-sm">
                                        <span class="font-medium">{{ option.name }}</span> {{ option.title }}
                                    </p>
                                    <span v-if="option.badge" class="mb-2 badge badge-primary">{{ option.badge }}</span>
                                    <p class="text-xs text-gray-500 dark:text-dark-500">
                                        {{ option.time }}
                                    </p>
                                    <p class="mt-3 text-sm line-clamp-2">
                                        {{ option.description }}
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </simplebar>
            </div>
        </div>
    </div>
</template>

<style scoped>
.serLeft {
    right: 12px !important;
    top: 75px;
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
</style>
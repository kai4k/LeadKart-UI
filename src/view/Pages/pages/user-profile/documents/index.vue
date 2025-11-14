<script setup lang="ts">
import { useId } from 'vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import { documentData, filesData, mediaItems } from './document-data';
import { tabs } from '@/view/apps/app-ecommerce/customers/overview/overview-data';
import { SlidersHorizontal } from 'lucide-vue-next';

const open = ref(false); // Dropdown visibility state
const dropdownId = useId(); // Unique ID for the dropdown
const dropdownContainer = ref<HTMLElement | null>(null);

// Filters state
const filters = ref({
    memberType: {
        author: false,
        customer: false,
    },
    fileType: [] as string[], // Placeholder for file types
});

// Toggles the dropdown
const toggleDropdown = () => {
    open.value = !open.value;
};

// Resets filters
const resetFilters = () => {
    filters.value = {
        memberType: {
            author: false,
            customer: false,
        },
        fileType: [],
    };
};

// Handles clicks outside the dropdown
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (dropdownContainer.value && !dropdownContainer.value.contains(target)) {
        open.value = false;
    }
};

// Add and remove event listeners
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="documents" />
    <div class="mt-4">
        <div class="flex items-center gap-5">
            <h5 class="text-16 grow">Documents</h5>
            <div class="shrink-0" ref="dropdownContainer">
                <!-- Dropdown Wrapper -->
                <div class="dropdown">
                    <!-- Button to Toggle Dropdown -->
                    <button ref="button" @click="toggleDropdown" :aria-expanded="open" :aria-controls="dropdownId" type="button" class="btn btn-sub-gray">
                        <SlidersHorizontal class="inline-block mr-1 size-4" /> <span class="align-middle whitespace-nowrap">Filter</span>
                    </button>

                    <!-- Dropdown Panel -->
                    <div v-show="open" :id="dropdownId" class="p-4 !w-80 dropdown-menu dropdown-right">
                        <h6 class="mb-4">Filter Options</h6>
                        <form @submit.prevent>
                            <p class="mb-2 text-sm font-medium">Member Type:</p>
                            <!-- Member Type Checkboxes -->
                            <div class="grid grid-cols-2 gap-4">
                                <div class="input-check-group">
                                    <input id="memberType1" class="input-check input-check-primary" type="checkbox" v-model="filters.memberType.author" />
                                    <label for="memberType1" class="input-check-label">Author</label>
                                </div>
                                <div class="input-check-group">
                                    <input id="memberType2" class="input-check input-check-primary" type="checkbox" v-model="filters.memberType.customer" />
                                    <label for="memberType2" class="input-check-label">Customer</label>
                                </div>
                                <div class="col-span-2">
                                    <p class="mb-2 text-sm font-medium">Files Type:</p>
                                    <div id="multipleSelect"></div>
                                </div>
                            </div>

                            <!-- Reset and Apply Buttons -->
                            <div class="flex items-center justify-end gap-2 mt-4">
                                <button type="reset" @click="resetFilters" class="btn-xs btn btn-sub-gray">
                                    Reset
                                </button>
                                <button type="submit" class="btn-xs btn btn-primary">
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-x-5">
            <!-- Render each card dynamically -->
            <div v-for="(card, index) in documentData" :key="index" class="relative card">
                <div class="card-body">
                    <!-- Icon -->
                    <component :is="card.icon" class="text-indigo-500 stroke-1 size-8 fill-indigo-500/10"></component>
                    <!-- Title -->
                    <h6 class="mt-4 mb-1">
                        <a href="#!" class="before:inset-0 before:absolute before:content-['']">
                            {{ card.title }}
                        </a>
                    </h6>
                    <!-- Description -->
                    <p class="text-gray-500 dark:text-dark-500">
                        {{ card.description }}
                    </p>
                </div>
            </div>
        </div>
        <h5 class="text-16">Files</h5>
        <div class="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-x-5">
            <!-- Render each file card dynamically -->
            <div v-for="(file, index) in filesData" :key="index" class="relative card">
                <div class="card-body">
                    <!-- Icon -->
                    <component :is="file.icon" class="stroke-1 text-sky-500 size-8 fill-sky-500/10"></component>
                    <!-- File Name -->
                    <h6 class="mt-4 mb-1">
                        <a href="#!" class="before:inset-0 before:absolute before:content-['']">
                            {{ file.name }}
                        </a>
                    </h6>
                    <!-- File Size -->
                    <p class="text-gray-500 dark:text-dark-500">
                        {{ file.size }}
                    </p>
                </div>
            </div>
        </div>
        <h5 class="text-16">Images & Video</h5>
        <div class="grid grid-cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-x-5">
            <div v-for="(media, index) in mediaItems" :key="index" class="relative card">
                <div class="card-body">
                    <!-- Conditional rendering for images and iframes -->
                    <template v-if="media.type === 'image'">
                        <img :src="media.src" :alt="media.title" class="object-cover rounded-md shadow-lg aspect-video shadow-primary-500/10" />
                    </template>
                    <template v-else-if="media.type === 'video'">
                        <iframe :src="media.src" title="YouTube video player" class="object-cover w-full rounded-md shadow-lg aspect-video shadow-primary-500/10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </template>
                    <!-- Title and file size -->
                    <h6 class="mt-4 mb-1 truncate">
                        <a v-if="media.type === 'image'" href="#!" class="before:inset-0 before:absolute before:content-['']">
                            {{ media.title }}
                        </a>
                        <span v-else>{{ media.title }}</span>
                    </h6>
                    <p class="text-gray-500 dark:text-dark-500">{{ media.size }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
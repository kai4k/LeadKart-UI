<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import pageHeading from '@/components/common/PageHeading.vue';
import UIDropdown from '@/components/common/UIDropdown.vue';
import { RiUserLine, RiRecordMailLine, RiCustomerServiceLine, RiMoonLine, RiPhoneLine } from 'vue-remix-icons'
const dropdownMenuShow = ref(false);
const dropdownMenuLink = ref(false)
const positionDropDown = ref(false);
const rightDropDown = ref(false);
const rightTopDropDown = ref(false);
const leftTopDropDown = ref(false);
const primaryOption = ref(false);
const greenOption = ref(false);
const purpleOption = ref(false);
const skyOption = ref(false);
const redOption = ref(false);
const yellowOption = ref(false);
const close = () => {
    dropdownMenuShow.value = false;
    dropdownMenuLink.value = false
    positionDropDown.value = false;
    rightDropDown.value = false;
    rightTopDropDown.value = false;
    leftTopDropDown.value = false;
    primaryOption.value = false;
    greenOption.value = false;
    purpleOption.value = false;
    skyOption.value = false;
    yellowOption.value = false;
    redOption.value = false;
};

// Optional: Close the dropdown when clicking outside
window.addEventListener('click', (event: any) => {
    if (!event.target.closest('.dropdown')) {
        close();
    }
});

const dropdownMenu = ref([
    {
        name: "New Task",
        style: "",
    },
    {
        name: "Edit Task",
        style: "",
    },
    {
        name: "Delete Task",
        style: "font-semibold text-red-400",
    },
])

const dropdownLink = ref([
    {
        name: "New Task",
        style: "",
    },
    {
        name: "Edit Task",
        style: "",
    },
    {
        name: "Delete Task",
        style: "font-semibold text-red-400",
    },
])


const dropdownMenuLinkToggle = () => {
    dropdownMenuLink.value = !dropdownMenuLink.value;
};


const openProfile = ref(false);
const profileDropdown = ref<HTMLElement | null>(null);
const button = ref<HTMLButtonElement | null>(null);
const dropdownStyle = ref({ top: '0px', left: '0px' });
// Function to toggle dropdown
const profileToggle = () => {
    openProfile.value = !openProfile.value;
    if (!openProfile.value) return;

    if (button.value) {
        const rect = button.value.getBoundingClientRect();
        dropdownStyle.value = {
            top: `${rect.bottom + window.scrollY}px`,
            left: `${rect.left}px`,
        };
    }
};

// Function to close dropdown
const closeProfile = () => {
    openProfile.value = false;
};

// Handle outside click
const handleClickOutside = (event: MouseEvent) => {
    if (profileDropdown.value && !profileDropdown.value.contains(event.target as Node) && button.value && !button.value.contains(event.target as Node)) {
        closeProfile();
    }
};

// Add event listener for outside click
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

// Clean up event listener
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>
<template>
    <pageHeading title="Dropdown" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Base Dropdown</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <div class="bg-gray-100 rounded-md dropdown">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Dropdown Options'"
                            className="flex dark:bg-dark-800 btn" extraClass="" />
                    </div>

                    <div class="dropdown">
                        <button ref="button" @click="dropdownMenuLinkToggle" type="button" class="flex btn">
                            Dropdown Link Options
                            <svg :class="{ 'rotate-180': dropdownMenuLink }"
                                class="w-5 text-gray-400 transition-transform duration-300 arrow-icon size-5"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                        <div v-show="dropdownMenuLink" class="dropdown-menu">
                            <a href="#" class="dropdown-item" v-for="(menu, index) in dropdownLink" :key="index"
                                :class="menu.style">{{
                                    menu.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Position Dropdown</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4 ">
                    <div class="bg-gray-100 border-none rounded-md dropdown">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Dropdown Options'"
                            className="flex dark:bg-dark-800 btn" extraClass="" />
                    </div>
                    <div class="bg-gray-100 border-none rounded-md dropdown ">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Right Options'"
                            className="flex dark:bg-dark-800 btn" extraClass="" />
                    </div>
                    <div class="bg-gray-100 rounded-md dropdown ">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Right Top Dropdown'"
                            className="flex dark:bg-dark-800 btn" extraClass="" />
                    </div>
                    <div class="bg-gray-100 rounded-md dropdown ">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Left Top Dropdown Options'"
                            className="flex dark:bg-dark-800 btn" extraClass="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Colored Dropdown</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <div class="rounded-md bg-primary-500 dropdown">
                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Primary Options '"
                            className="flex gap-3 text-white btn" extraClass="" />
                    </div>
                    <div class="bg-green-500 rounded-md dropdown">
                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Green Options'"
                            className="flex gap-3 text-white btn" extraClass="" />
                    </div>
                    <div class="bg-purple-500 rounded-md dropdown">
                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Purple Options'"
                            className="flex gap-3 text-white btn" extraClass="" />
                    </div>
                    <div class="bg-yellow-500 rounded-md dropdown">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Yellow Options'"
                            className="flex gap-3 text-white btn" extraClass="" />
                    </div>
                    <div class="rounded-md bg-sky-500 dropdown">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Sky Options'"
                            className="flex gap-3 text-white btn" extraClass="" />
                    </div>
                    <div class="bg-red-500 rounded-md dropdown">

                        <UIDropdown :arrayList="dropdownMenu" :title="() => 'Red Options'"
                            className="flex gap-3 text-white btn" extraClass="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Profile Dropdown</h6>
            </div>
            <div class="card-body">
                <div class="relative flex flex-wrap items-center gap-4">
                    <div @keydown.escape.prevent.stop="closeProfile" class="" ref="profileDropdown">
                        <button @click="profileToggle" type="button" class="flex items-center gap-2 btn btn-primary"
                            ref="button">
                            Profile
                            <svg :class="{ 'transform rotate-180': openProfile }"
                                class="transition-transform duration-300 size-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                        <div v-show="openProfile" @click.outside="closeProfile"
                            class="absolute z-50 bg-white border border-gray-100 rounded-md shadow-lg profileDropdownPosition w-72 dark:border-dark-800">
                            <div class="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-dark-800">
                                <img src="@/assets/images/avatar/user-17.png" alt=""
                                    class="rounded-full size-9 shrink-0">
                                <div class="overflow-hidden grow">
                                    <h6>Sophia Mia</h6>
                                    <a href="#!" class="truncate link link-primary"
                                        v-on:click.stopPropagation="closeProfile">sophia@example.com</a>
                                </div>
                                <div class="shrink-0">
                                    <span class="badge badge-pink">Pro</span>
                                </div>
                            </div>
                            <div class="flex flex-col p-4 space-y-4">
                                <a href="#!" class="flex items-center gap-1 link link-primary"
                                    @click.stop="closeProfile">
                                    <RiUserLine class="w-4 ltr:mr-1 rtl:ml-1" /> Account Settings
                                </a>
                                <a href="#!" class="flex items-center gap-1 link link-primary"
                                    @click.stop="closeProfile">
                                    <RiRecordMailLine class="size-4 ltr:mr-1 rtl:ml-1" /> Go Incognito
                                </a>
                                <a href="#!" class="flex gap-1 link link-primary" @click.stop="closeProfile">
                                    <RiCustomerServiceLine class="size-4 ltr:mr-1 rtl:ml-1" /> Help Center
                                </a>
                                <div class="flex gap-1 link link-primary">
                                    <RiMoonLine class="size-4 ltr:mr-1 rtl:ml-1" />
                                    <span class="grow">Dark Mode</span>
                                    <label for="darkModeProfile"
                                        class="flex items-center cursor-pointer select-none text-dark dark:text-white shrink-0">
                                        <div class="relative">
                                            <input type="checkbox" id="darkModeProfile" class="sr-only peer"
                                                @click.stop />
                                            <div class="block w-10 h-6 border border-gray-200 rounded-full"></div>
                                            <div
                                                class="absolute transition bg-gray-200 rounded-full size-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-sky-500">
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <a href="#!" class="flex gap-1 link link-primary" @click.stop="closeProfile">
                                    <RiPhoneLine class="size-4 ltr:mr-1 rtl:ml-1" /> Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown-menu {
    position: absolute;
    /* Keep dropdown positioned correctly */
    z-index: 10;
    /* Ensure it appears above other elements */
}

.profileDropdownPosition {
    top: -289.25px;
}
</style>
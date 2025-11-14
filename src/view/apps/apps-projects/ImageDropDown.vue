<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import user5 from "@/assets/images/avatar/user-5.png"
import user11 from "@/assets/images/avatar/user-11.png"
import user13 from "@/assets/images/avatar/user-13.png"
import user14 from "@/assets/images/avatar/user-14.png"
// Define the structure of the user data
interface User {
    name: string;
    image: string;
    role: string;
}

// Sample user data
const usersData: User[] = [
    { name: "Ina Payne", image: user5, role: "Project Manager" },
    { name: "Robert Freeman", image: user11, role: "Project Manager" },
    { name: "Michelle Weigle", image: user13, role: "Project Manager" },
    { name: "William Keen", image: user14, role: "Project Manager" },
];

// Dropdown state
const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const currentUser = ref<User>(usersData[0]);  // Default to the first user
const users = ref<User[]>(usersData);  // List of users

// Toggle the dropdown open/close
const toggleDropdown = () => {
    open.value = !open.value;
};

// Close the dropdown
const closeDropdown = () => {
    open.value = false;
};

// Select a user from the dropdown
const selectUser = (user: User) => {
    currentUser.value = user;
    closeDropdown();
};

// Check if a user is active (selected)
const isActive = (user: User) => user === currentUser.value;

const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        closeDropdown();
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
    <!-- Select -->
    <div
        class="col-span-12 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 sm:col-span-6 md:col-span-3 xl:col-span-2">
        <div class="dropdown" ref="dropdownRef">
            <!-- Button to trigger the dropdown -->
            <button ref="button" @click="toggleDropdown" :aria-expanded="open" :aria-controls="'dropdown-button'"
                type="button" class="flex gap-2 p-0 btn text-start">
                <img :src="currentUser.image" alt="" class="rounded-full size-10 shrink-0">
                <span class="block grow">
                    <span class="text-gray-500 dark:text-dark-500">{{ currentUser.role }}</span>
                    <span class="block font-medium">{{ currentUser.name }}</span>
                </span>
                <svg :class="{ 'transform rotate-180': open }" class="text-gray-400 transition-transform duration-300 size-5"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="open" @click="closeDropdown" class="p-2 dropdown-menu dropdown-right !w-52"
                :id="'dropdown-button'">
                <a v-for="user in users" :key="user.name" href="#!" @click.prevent="selectUser(user)"
                    :class="{ 'active': isActive(user) }" class="dropdown-item">
                    <img :src="user.image" alt="" class="rounded-full size-8 shrink-0">
                    <h6>{{ user.name }}</h6>
                </a>
            </div>
        </div>
    </div>
    <!-- End Select -->
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import UserProfileHEader from '@/components/common/UserProfileHeader.vue';
import SideMenuList from './UserSideMenuList.vue';
import SideMenuBadge from './SideMenuBadge.vue';
// Type definitions for user data
import { tabs } from './overview-data';

// Example user data (this could come from an API or store)

// Reactive state to track follow status and loading state
const isActive = ref(false);  // To track follow/unfollow status
const loadingButton = ref(false);  // To track the loading state (spinner)

function toggleFollow() {
    loadingButton.value = true;  // Start the loading spinner

    // Simulate a network request with a timeout (2 seconds)
    setTimeout(() => {
        loadingButton.value = false;  // Stop the loading spinner
        isActive.value = !isActive.value;  // Toggle follow/unfollow status
    }, 2000);
}

// Experience data
const experiences = ref([
    {
        title: "UI/UX Designer -",
        duration: "March 2020 - Present",
        company: "XYZ Tech Solutions",
        location: "San Francisco, CA",
        tasks: [
            "Designed intuitive user interfaces for web and mobile applications, focusing on user experience optimization.",
            "Conducted user research, usability testing, and gathered feedback to iterate on designs and improve user satisfaction.",
            "Collaborated with cross-functional teams including product managers, developers, and stakeholders to translate business requirements into user-centric design solutions.",
            "Created wireframes, prototypes, and mockups using tools such as Sketch, Adobe XD, and Figma.",
            "Implemented responsive design principles to ensure seamless user experiences across various devices and screen sizes.",
            "Led design workshops and presentations to communicate design concepts and rationale to team members and stakeholders.",
            "Contributed to the development of design systems and style guides to maintain design consistency and scalability across products."
        ]
    },
    {
        title: "Junior UI/UX Designer",
        duration: "",
        company: "ABC Design Studio",
        location: "New York, NY",
        tasks: [
            "Assisted in the design and development of user interfaces for web and mobile applications.",
            "Conducted competitive analysis and market research to identify design trends and best practices.",
            "Collaborated with senior designers to create wireframes, prototypes, and high-fidelity mockups.",
            "Participated in usability testing sessions and analyzed user feedback to refine design concepts.",
            "Supported the implementation of design solutions by providing assets and design specifications to development teams.",
            "Maintained and organized design files and assets using version control systems."
        ]
    }
]);

// Portfolio data
const portfolioItems = ref([
    {
        title: "Chat Application",
        image: new URL("@/assets/images/gallery/img-01.jpg", import.meta.url).href
    },
    {
        title: "CRM React Projects",
        image: new URL("@/assets/images/gallery/img-02.jpg", import.meta.url).href
    },
    {
        title: "HR Management Team",
        image: new URL("@/assets/images/gallery/img-04.jpg", import.meta.url).href
    }
]);
</script>
<template>
    <UserProfileHEader />
    <ProfileTapBar :tabs="tabs" active-tab="overview" />
    <div class="grid grid-cols-12 mt-space gap-space">
        <div class="col-span-12 md:col-span-5 lg:col-span-4">
            <div class="card">
                <div class="card-body">
                    <div class="grid grid-cols-2 gap-0 mb-4">
                        <div class="text-center border-gray-200 ltr:border-r rtl:border-l dark:border-dark-800">
                            <h6 class="mb-1">2459</h6>
                            <p class="text-gray-500 dark:text-dark-500">Followers</p>
                        </div>
                        <div class="text-center">
                            <h6 class="mb-1">2459</h6>
                            <p class="text-gray-500 dark:text-dark-500">Following</p>
                        </div>
                    </div>

                    <!-- Follow/Unfollow Button -->
                    <div>
                        <button @click="toggleFollow" class="w-full btn btn-sky btn-icon-text" :disabled="loadingButton">
                            <!-- Show Follow button text -->
                            <span v-if="!isActive" class="flex items-center gap-2">
                                <i class="ri-user-add-line"></i> Follow
                            </span>

                            <!-- Show Unfollow button text -->
                            <span v-if="isActive" class="flex items-center gap-2">
                                <i class="ri-user-unfollow-line"></i> UnFollow
                            </span>

                            <!-- Show loading spinner -->
                            <svg v-if="loadingButton" class="text-white size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <SideMenuList />
            <SideMenuBadge />
        </div>
        <div class="col-span-12 md:col-span-7 lg:col-span-8">
            <!-- Overview Section -->
            <h6 class="mb-2">Overview</h6>
            <p class="mb-2 text-gray-500 dark:text-dark-500">
                Hello, I'm <span class="font-medium">Sophia Mia</span>, a passionate UI/UX designer dedicated to
                crafting seamless digital experiences that blend elegance with functionality. With a keen eye for detail
                and a deep understanding of user psychology, I strive to create interfaces that not only look stunning
                but also intuitively guide users towards their goals.
            </p>
            <p class="mb-3 text-gray-500 dark:text-dark-500">
                I believe in the power of collaboration and enjoy working closely with cross-functional teams, including
                developers, product managers, and stakeholders. By fostering open communication and incorporating
                diverse perspectives, I ensure that the final product exceeds expectations and delights users.
            </p>

            <!-- Experience Section -->
            <h6 class="mb-2">Experience</h6>
            <ul class="timeline">
                <li v-for="(experience, index) in experiences" :key="index" class="timeline-primary active">
                    <h6 class="mb-1">{{ experience.title }} {{ experience.duration }}</h6>
                    <p class="mb-2 text-sm text-gray-500 dark:text-dark-500">{{ experience.company }}, {{
                        experience.location }}</p>
                    <ul class="space-y-2 text-gray-500 list-disc list-inside dark:text-dark-500">
                        <li v-for="(task, i) in experience.tasks" :key="i">{{ task }}</li>
                    </ul>
                </li>
            </ul>

            <!-- Portfolio Highlights Section -->
            <h6 class="mt-3 mb-2">Portfolio Highlights</h6>
            <div class="grid grid-cols-2 mb-5 lg:grid-cols-3 gap-space">
                <div v-for="(portfolio, index) in portfolioItems" :key="index" class="text-center group/item">
                    <div class="overflow-hidden rounded-md">
                        <img :src="portfolio.image" alt="" class="transition duration-200 ease-linear group-hover/item:scale-105 group-hover/item:skew-x-3" />
                    </div>
                    <h6 class="mt-2">
                        <a href="#!">{{ portfolio.title }}</a>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>
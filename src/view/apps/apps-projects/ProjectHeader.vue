    <script setup lang="ts">
    import { AlignLeft, Ellipsis, Eye, FileText, Sparkles, UserRound } from 'lucide-vue-next';
    import ImageDropDown from './ImageDropDown.vue';
    import { ref, onMounted, onUnmounted } from 'vue';
    import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
    // Dropdown state and position
    const dropdownOpen = ref(false);
    const dropdownWrapper = ref<HTMLElement | null>(null);
    // Close dropdown
    const closeDropdown = () => {
        dropdownOpen.value = false;
    };

    // Handle outside click to close the dropdown
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownWrapper.value && !dropdownWrapper.value.contains(event.target as Node)) {
            closeDropdown();
        }
    };

    // Register event listener for click outside
    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    // Cleanup event listener on unmount
    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });

    // Modal opening (dummy function for "Add User")
    const openModal = () => {
    };

    const dropdownOption = ['Create Invoice', 'Generate Billing', 'Delete Project', 'Settings']
    const topListItem = [
        {
            header: "31 May, 2024",
            description: "Due Date"
        },
        {
            header: "$25,000",
            description: "Budget ($)"
        },
        {
            header: "$8,000",
            description: "Total Spend ($)"
        },
    ]

    // Define the structure for the user objects
    interface User {
        name: string;
        avatar: string;
    }

    // Assigned users data
    const assignedTo = ref<User[]>([
        {
            name: 'Ina Payne',
            avatar: new URL('@/assets/images/avatar/user-5.png', import.meta.url).href,
        },
        {
            name: 'Robert Freeman',
            avatar: new URL('@/assets/images/avatar/user-11.png', import.meta.url).href,
        },
        {
            name: 'Michelle Wile',
            avatar: new URL('@/assets/images/avatar/user-13.png', import.meta.url).href,
        },
        {
            name: 'William Keen',
            avatar: new URL('@/assets/images/avatar/user-14.png', import.meta.url).href,
        },
        {
            name: 'Carol Kincaid',
            avatar: new URL('@/assets/images/avatar/user-16.png', import.meta.url).href,
        },
        {
            name: 'Rachel Jackson',
            avatar: new URL('@/assets/images/avatar/user-17.png', import.meta.url).href,
        }
    ]);


    // Report-to users data
    const reportTo = ref<User[]>([
        {
            name: 'Leal Bureau',
            avatar: new URL('@/assets/images/avatar/user-20.png', import.meta.url).href
        },
        {
            name: 'Julie Seltzer',
            avatar: new URL('@/assets/images/avatar/user-18.png', import.meta.url).href
        }
    ]);
    interface Tab {
        name: string;
        href: string;
        icon: string | Function;
    }

    // Define the tabs data
    const tabs = ref<Tab[]>([
        {
            name: 'Overview',
            href: 'apps-projects-overview',
            icon: Eye
        },
        {
            name: 'RoadMap',
            href: 'apps-projects-roadmap',
            icon: Sparkles
        },
        {
            name: 'Tasks',
            href: 'apps-projects-task',
            icon: AlignLeft
        },
        {
            name: 'Files',
            href: 'apps-projects-files',
            icon: FileText
        },
        {
            name: 'Users',
            href: 'apps-projects-users',
            icon: UserRound
        }
    ]);

    // Reactive variable to keep track of the active tab index
    const activeTab = ref<number>(0);

    // Method to set the active tab
    const setActiveTab = (index: number) => {
        activeTab.value = index;
    };
</script>
<template>
    <div class="card">
        <div class="relative overflow-hidden rounded-md-t h-44 bg-primary-500/10">
            <div class="border-[60px] border-t-primary-500 border-l-primary-500 absolute opacity-10 -top-2 ltr:right-0 rtl:left-0 rotate-45 size-96">
            </div>
            <div class="border-[60px] border-green-500 absolute opacity-10 top-20 ltr:right-8 rtl:left-8 rotate-45 size-80">
            </div>
            <div class="border-[60px] border-pink-500 absolute opacity-10 top-36 ltr:right-28 rtl:left-28 rotate-45 size-40">
            </div>
        </div>
        <div class="card-body">
            <div class="relative mb-6">
                <div class="flex flex-wrap gap-5">
                    <!-- Project Image -->
                    <div class="relative flex items-center justify-center bg-white border border-gray-200 rounded-md shadow-lg dark:bg-dark-900 dark:border-dark-800 shadow-gray-100 dark:shadow-dark-850 -mt-14 size-28 shrink-0">
                        <img src="@/assets/images/brands/img-02.png" alt="" class="mx-auto size-16" />
                    </div>

                    <!-- Project Title and Date -->
                    <div class="grow">
                        <h5 class="mb-1">
                            AI Model Development
                            <span class="leading-normal ltr:ml-1 rtl:mr-1 badge badge-yellow">In Progress</span>
                        </h5>
                        <p class="text-gray-500 dark:text-dark-500">Create Date: 25 Jan, 2024</p>
                    </div>

                    <!-- Add User Button and Dropdown -->
                    <div class="flex items-center gap-3 shrink-0">
                        <button type="button" class="btn btn-primary" @click="openModal">Add User</button>
                        <RecentMenuList :title="Ellipsis" :showArrow="false" extraClass="mange-table-position" className="btn-icon-text btn-icon btn-sub-gray btn" :list="dropdownOption" mainCss="" iconCss=" size-4" menuIconCss="size-4" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-5 mb-5">
                <!-- Due Date -->
                <div class="col-span-12 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 sm:col-span-6 md:col-span-3 xl:col-span-2" v-for="(item, index) in topListItem" :key="index">
                    <h6 class="mb-1">{{ item.header }}</h6>
                    <p class="text-gray-500 dark:text-dark-500">{{ item.description }}</p>
                </div>
                <!-- Dropdown (User) -->
                <ImageDropDown />
            </div>

            <div class="grid grid-cols-12 gapo-space mb-space">
                <!-- Assigned To Section -->
                <div class="col-span-12 md:col-span-4">
                    <h6 class="mb-1">Assigned To:</h6>
                    <div class="flex -space-x-3 rtl:space-x-reverse">
                        <!-- Loop through assigned users -->
                        <a v-for="(user, index) in assignedTo" :key="'assigned-to-' + index" :title="user.name" class="transition duration-300 ease-linear hover:z-10">
                            <img :class="['border-2', 'border-white', 'rounded-full', 'dark:border-dark-900', 'size-10']" :src="user.avatar" :alt="user.name" />
                        </a>
                    </div>
                </div>

                <!-- Report To Section -->
                <div class="col-span-12 md:col-span-4">
                    <h6 class="mb-1">Report To:</h6>
                    <div class="flex -space-x-3 rtl:space-x-reverse">
                        <!-- Loop through report-to users -->
                        <a v-for="(user, index) in reportTo" :key="'report-to-' + index" :title="user.name" class="transition duration-300 ease-linear hover:z-10">
                            <img class="border-2 border-white rounded-full dark:border-dark-900 size-10" :src="user.avatar" :alt="user.name" />
                        </a>
                    </div>
                </div>
            </div>
            <ul class="overflow-x-auto whitespace-normal tabs-pills">
                <!-- Loop through the tabs array to render each tab dynamically -->
                <li v-for="(tab, index) in tabs" :key="tab.name">
                    <RouterLink :to="tab.href" class="nav-item" @click.prevent="setActiveTab(index)" exactActiveClass="bg-primary-500 text-primary-50">
                        <component :is="tab.icon" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></component> <span class="align-middle"> {{ tab.name }}</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
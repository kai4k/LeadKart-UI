<script setup lang="ts">
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import { tabs } from '@/view/apps/app-ecommerce/customers/overview/overview-data';
import { ChevronLeft, ChevronRight, Mail, MoveLeft, MoveRight, Phone } from 'lucide-vue-next';
import { computed, ref } from 'vue';


interface User {
    name: string;
    email: string;
    phone: string;
    avatar: string;
    isActive: boolean;
    loadingButton: boolean;
}

const users = ref<User[]>([
    {
        name: 'Christina Williams',
        email: 'christina@example.com',
        phone: '+(546) 01234 567 89',
        avatar: new URL('@/assets/images/avatar/user-13.png', import.meta.url).href,
        isActive: false,
        loadingButton: false,
    },
    {
        name: 'Thomas Blamer',
        email: 'thomas@example.com',
        phone: '651-705-2653',
        avatar: new URL('@/assets/images/avatar/user-14.png', import.meta.url).href,
        isActive: true,
        loadingButton: false,
    },
    {
        name: 'Patricia Graham',
        email: 'pg@example.com',
        phone: '704-316-0398',
        avatar: new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
        isActive: true,
        loadingButton: false,
    },
    {
        name: 'Patricia Graham',
        email: 'patricia@example.com',
        phone: '952-542-3403',
        avatar: new URL('@/assets/images/avatar/user-19.png', import.meta.url).href,
        isActive: false,
        loadingButton: false,
    },
    {
        name: 'Joseph Obrien',
        email: 'josepho@example.com',
        phone: '907-675-5342',
        avatar: new URL('@/assets/images/avatar/user-20.png', import.meta.url).href,
        isActive: false,
        loadingButton: false,
    },
    {
        name: 'Edward Chapman',
        email: 'edward@example.com',
        phone: '267-645-5685',
        avatar: new URL('@/assets/images/avatar/user-45.png', import.meta.url).href,
        isActive: false,
        loadingButton: false,
    },
    {
        name: 'Annie Akins',
        email: 'annie@example.com',
        phone: '812-278-7277',
        avatar: new URL('@/assets/images/avatar/user-38.png', import.meta.url).href,
        isActive: false,
        loadingButton: false,
    },
    {
        name: 'Gena Kelly',
        email: 'kelly@example.com',
        phone: '713-229-0339',
        avatar: new URL('@/assets/images/avatar/user-35.png', import.meta.url).href,
        isActive: false,
        loadingButton: false,
    },
]);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 8;
const totalUsers = computed(() => users.value.length);
const totalPages = computed(() => Math.ceil(totalUsers.value / itemsPerPage));

// Get paginated users
const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = currentPage.value * itemsPerPage;
    return users.value.slice(start, end);
});

// Function to change page
const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

// Function to toggle follow/unfollow
const toggleFollow = (user: User) => {
    user.loadingButton = true;
    setTimeout(() => {
        user.loadingButton = false;
        user.isActive = !user.isActive;
    }, 2000);
};

</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="followers" />
    <div class="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-x-5">
        <div class="card" v-for="(user, index) in paginatedUsers" :key="index">
            <div class="flex flex-wrap items-center gap-3 card-body">
                <div class="shrink-0">
                    <img :src="user.avatar" alt="" class="rounded-md size-20" />
                </div>
                <div class="grow">
                    <h6 class="mb-1">{{ user.name }}</h6>
                    <div class="flex flex-wrap items-center gap-4 mb-3">
                        <p class="text-gray-500 dark:text-dark-500">
                            <Mail data-lucide="mail" class="inline-block ltr:mr-1 rtl:ml-1 size-4" /> <a :href="'mailto:' + user.email" class="align-middle whitespace-nowrap">{{ user.email
                            }}</a>
                        </p>
                        <p class="text-gray-500 dark:text-dark-500">
                            <Phone class="inline-block ltr:mr-1 rtl:ml-1 size-4" /> <span class="align-middle whitespace-nowrap">{{ user.phone }}</span>
                        </p>
                    </div>
                    <a href="pages-user" class="text-primary-500">
                        View More
                        <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                        <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4" />
                    </a>
                </div>
                <div>
                    <button @click="toggleFollow(user)" :disabled="user.loadingButton" class="btn btn-sub-gray btn-icon-text">
                        <span v-if="!user.isActive" class="flex items-center gap-2">
                            <i class="ri-user-add-line"></i> Follow
                        </span>
                        <span v-if="user.isActive" class="flex items-center gap-2">
                            <i class="ri-user-unfollow-line"></i> UnFollow
                        </span>
                        <svg v-if="user.loadingButton" class="size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Pagination -->
    <div class="grid items-center grid-cols-12 gap-5 mb-5">
        <div class="flex flex-wrap justify-center col-span-12 lg:col-span-5 lg:justify-start">
            <p class="text-gray-500 dark:text-dark-500">
                Showing <b>{{ currentPage * itemsPerPage - itemsPerPage + 1 }}</b> to <b>{{ currentPage *
                    itemsPerPage }}</b> of <b>{{ totalUsers }}</b> Results
            </p>
        </div>
        <div class="col-span-12 lg:col-span-7">
            <div class="flex justify-center lg:justify-end pagination pagination-primary">
                <button type="button" class="pagination-pre" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
                    <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5" />
                    <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5" />
                    Prev
                </button>
                <button v-for="page in totalPages" :key="page" type="button" class="pagination-item" :class="{ active: currentPage === page }" @click="changePage(page)">
                    {{ page }}
                </button>
                <button type="button" class="pagination-next" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
                    Next
                    <ChevronRight class="ml-1 rtl:hidden size-5 ltr:inline-block" />
                    <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-5" />
                </button>
            </div>
        </div>
    </div>
</template>
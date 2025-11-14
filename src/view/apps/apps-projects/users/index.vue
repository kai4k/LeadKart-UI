<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { usersData } from './users-data';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
const props = defineProps({
    setTitle: Function
})

interface User {
    image: string;
    name: string;
    role: string;
    task: string;
    earning: string;
    date: string;
}

// Reactive state variables
const users = ref<User[]>(usersData);
const currentPage = ref(1);
const itemsPerPage = ref(8);
const filter = ref('');
const loaded = ref(false);

// Computed property for filtered users based on selected filter
const filteredUsers = computed(() => {
    const now = new Date();
    const filterOptions: Record<string, () => User[]> = {
        'Last Month': () => {
            const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            return users.value.filter(user => new Date(user.date) >= lastMonth);
        },
        'This Month': () => {
            const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            return users.value.filter(user => new Date(user.date) >= thisMonth);
        },
        'Last Week': () => {
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            return users.value.filter(user => new Date(user.date) >= lastWeek);
        },
        'Last Year': () => {
            const lastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
            return users.value.filter(user => new Date(user.date) >= lastYear);
        },
        'This Year': () => {
            const thisYear = new Date(now.getFullYear(), 0, 1);
            return users.value.filter(user => new Date(user.date) >= thisYear);
        },
    };

    return filter.value === '' ? users.value : filterOptions[filter.value]();
});

// Pagination logic
const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage.value));
const displayedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredUsers.value.slice(start, end);
});

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredUsers.value.length));

// Pagination controls
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

// Update filter and reset pagination
const updateFilter = () => {
    currentPage.value = 1; // Reset to first page on filter change
};
onMounted(() => {
    if (props.setTitle) props.setTitle('Users');
});
</script>
<template>
    <div>
        <div class="flex flex-wrap items-center justify-between gap-3">
            <h6>Users (<span>{{ filteredUsers.length }}</span>)</h6>
            <div class="max-w-36" id="filterSelect">
                <!-- Add any filter controls here, e.g., a dropdown -->
                <select v-model="filter" @change="updateFilter" class="form-select">
                    <option value="" disabled>Select</option>
                    <option value="">All</option>
                    <option value="Last Month">Last Month</option>
                    <option value="This Month">This Month</option>
                    <option value="Last Week">Last Week</option>
                    <option value="Last Year">Last Year</option>
                    <option value="This Year">This Year</option>
                </select>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-space mt-space">
            <div v-for="(user, index) in displayedUsers" :key="index" class="card">
                <div class="text-center card-body">
                    <img :src="user.image" alt="" class="mx-auto mb-4 rounded-full size-14" @load="loaded = true" @error="loaded = false" />
                    <template v-if="!loaded">
                        <div class="mx-auto mb-4 bg-gray-200 rounded-full dark:bg-dark-850 size-24"></div>
                    </template>
                    <h6><a href="pages-user">{{ user.name }}</a></h6>
                    <p class="mt-1 text-gray-500 dark:text-dark-500">{{ user.role }}</p>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="p-3 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                            <h6>{{ user.task }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">Tasks</p>
                        </div>
                        <div class="p-3 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                            <h6>{{ user.earning }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">Earning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid items-center grid-cols-12 gap-5 mb-5">
            <div class="text-center ccol-span-12 md:col-span-6 ltr:md:text-left rtl:md:text-right">
                <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b>
                    of <b>{{
                        filteredUsers.length }}</b> Results</p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></ChevronLeft>
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4"></ChevronRight>
                        Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></ChevronLeft>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
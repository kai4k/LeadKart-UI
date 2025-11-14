<script setup lang="ts">
import TableDataNotFount from '../Orders/list-view/TableDataNotFount.vue';
import { ref, computed, defineProps } from 'vue';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import type { reviewType } from '../products/overview/overvie-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { RiDeleteBinLine, RiPencilLine } from 'vue-remix-icons';
const props = defineProps({
    tableData: <any>{
        type: Array,
        required: true
    },
})

const emits = defineEmits(['edit', 'delete'])
const dropdownOption = [
    {
        name: 'Edit',
        icon: RiPencilLine,
    },
    {
        name: 'Delete',
        icon: RiDeleteBinLine,
    }
]

const editFunction = (state: boolean, data?: reviewType) => {
    emits('edit', state, data)
}
const deleteFunction = (state: boolean, data?: reviewType) => {
    emits('delete', state, data)
}

const handleTableActivity = (option: string, data?: reviewType) => {
    const activity = option.toLowerCase()
    if (activity == 'edit') {
        editFunction(true, data)
    }
    if (activity == 'delete') {
        deleteFunction(true, data)
    }
}


const currentPage = ref(1);
const reviewsPerPage = 10;

// Computed property for total number of pages
const totalPages = computed(() => Math.ceil(props.tableData.length / reviewsPerPage));

// Computed property for the displayed reviews
const displayedReviews = computed(() => {
    const start = (currentPage.value - 1) * reviewsPerPage;
    return props.tableData.slice(start, start + reviewsPerPage);
});

// Computed properties for pagination info
const showingStart = computed(() => (currentPage.value - 1) * reviewsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * reviewsPerPage, props.tableData.length));
const totalReviews = computed(() => props.tableData.length);

// Methods for pagination
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

// Star rating method (returns the appropriate class for stars)
const getStarClass = (rating: string, starIndex: number) => {
    const numStars = parseFloat(rating);
    return starIndex <= numStars ? 'ri-star-fill text-yellow-500' : 'ri-star-line text-gray-400';
};

</script>

<template>
    <div class="!overflow-x-auto">
        <!-- Table -->
        <table class="table flush whitespace-nowrap !overflow-x-auto">
            <tbody>
                <template v-if="displayedReviews.length > 0">
                    <template v-for="(review, index) in displayedReviews" :key="index">
                        <tr class="gap-2">
                            <td class="align-top whitespace-nowrap">
                                <div class="flex items-center gap-3">
                                    <img :src="review.image" alt="" class="rounded-md shrink-0 size-16" />
                                    <div class="overflow-hidden grow">
                                        <h6 class="mb-1 truncate">
                                            <a href="#!" class="!text-current link link-primary">{{ review.userName
                                            }}</a>
                                        </h6>
                                        <p class="mb-1 text-sm truncate">{{ review.date }}</p>
                                        <p class="text-sm text-gray-500 truncate dark:text-dark-500">
                                            Location: <span>{{ review.location }}</span>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="whitespace-nowrap">
                                <div class="max-w-[550px]">
                                    <div class="flex items-center gap-2 mb-3">
                                        <div class="text-yellow-500">
                                            <template v-for="i in 5" :key="i">
                                                <i :class="getStarClass(review.star, i)"></i>
                                            </template>
                                        </div>
                                        <h6>({{ review.star }})</h6>
                                    </div>
                                    <h6 class="mb-1">{{ review.title }}</h6>
                                    <p class="text-gray-500 whitespace-normal dark:text-dark-500">{{ review.content }}
                                    </p>
                                </div>
                            </td>
                            <td class="align-top">
                                <div class="flex items-center justify-end gap-3">
                                    <button class="btn btn-sub-gray">Direct Message</button>
                                    <RecentMenuList :title="Ellipsis" :showArrow="false" className="btn btn-icon-text btn-primary btn-icon" extraClass="mange-table-position" :arrayList="dropdownOption" mainCss="" iconCss="text-white rotate-90 size-4" @handleAction="(option) => handleTableActivity(option, review)" />
                                </div>
                            </td>
                        </tr>
                    </template>
                </template>
                <template v-if="displayedReviews.length === 0">
                    <td colspan="10" class="!p-8">
                        <TableDataNotFount />
                    </td>
                </template>
            </tbody>
        </table>

        <!-- Pagination Section -->
        <div class="grid items-center grid-cols-12 gap-5 my-5" v-if="displayedReviews.length !== 0">
            <div class="col-span-12 md:col-span-6">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ totalReviews }}</b> Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-start md:justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                        Prev
                    </button>
                    <template v-for="page in totalPages" :key="page">
                        <button @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                            {{ page }}
                        </button>
                    </template>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
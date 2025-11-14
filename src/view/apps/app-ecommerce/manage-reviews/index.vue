<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { Plus, Search } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import ReviewTable from './ReviewTable.vue';
import AddModuleForm from '../products/overview/AddModuleForm.vue';
import DeleteRow from './DeleteRow.vue';
import { reviews } from '../products/overview/overvie-data';
import type { Review } from './reviews-data';
import type { reviewType } from '../products/overview/overvie-data';
const searchTerm = ref<string>('');
const totalReviews = ref(28);
const reviewPercentage = ref(100); // growth in percentage
const averageReview = ref(3.8);

const reviewForm = ref<Review>({
    customerID: '',
    userName: '',
    date: '',
    location: '',
    title: '',
    content: '',
    star: 0,
    image: ''
});

const selectedData = ref<reviewType>();
const showAddReviewForm = ref(false);
const showEditReviewForm = ref(false);
const isDeleteModalVisible = ref(false);

const setDeleteModelStatus = (state: boolean, data: Review) => {
    isDeleteModalVisible.value = state;
    selectedData.value = data
}
function setAddReviewForm(data: Review, state: boolean) {
    showAddReviewForm.value = state
}
function setEditReviewForm(state: boolean, data: Review,) {
    selectedData.value = data
    showEditReviewForm.value = state;
}

const deleteReview = () => {
    const index = reviews.value.findIndex(data => data.reviewId == selectedData.value?.reviewId);
    reviews.value.splice(index, 1);

};
const getStarClass = (average: number, star: number) => {
    if (average >= star) return 'ri-star-fill text-yellow-500';
    if (average >= star - 0.5) return 'ri-star-half-fill text-yellow-500';
    return 'ri-star-line text-yellow-500';
};
interface Rating {
    stars: number;
    percentage: number;
    count: number;
    color: string;
}
const ratings: Rating[] = [
    { stars: 5, percentage: 100, count: 4751, color: 'bg-green-500 progress-bar-wrap' },
    { stars: 4, percentage: 80, count: 3658, color: 'bg-pink-500 progress-bar-wrap' },
    { stars: 3, percentage: 65, count: 2349, color: 'bg-yellow-500 progress-bar-wrap' },
    { stars: 2, percentage: 50, count: 1472, color: 'bg-sky-500 progress-bar-wrap' },
    { stars: 1, percentage: 20, count: 120, color: 'bg-red-500 progress-bar-wrap' }
];

// Define the function to filter reviews based on searchTerm
const filterReview = () => {

};

onMounted(() => {
    reviews.value.forEach((data, index) => {
        data.reviewId = 1 + index
    })
})
</script>
<template>
    <PageHeading title="Manage Reviews" sub-title="Ecommerce" />
    <div class="grid items-center grid-cols-12 gap-5 mb-5">
        <!-- Title Section -->
        <div class="col-span-12 2xl:col-span-8">
            <h6 class="card-title">Reviews</h6>
        </div>
        <!-- Search and New Review Button -->
        <div class="col-span-12 2xl:col-span-4">
            <div class="flex flex-wrap items-center gap-3 2xl:justify-end">
                <!-- Search Input -->
                <div class="relative group/form">
                    <input type="email" class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Search username, date, etc..."
                        v-model="searchTerm" @input="filterReview" />
                    <span
                        class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3">
                        <Search class="size-4"></Search>
                    </span>
                </div>
                <!-- New Review Button -->
                <button class="btn btn-primary" data-modal-target="addReviewModal" @click="showAddReviewForm = true">
                    <Plus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Plus> New Review
                </button>
            </div>
        </div>
    </div>
    <div>
        <div
            class="grid items-center grid-cols-1 mb-4 divide-y divide-gray-200 dark:divide-dark-800 xl:grid-cols-3 xl:divide-y-0 xl:divide-x rtl:xl:divide-x-reverse">

            <!-- Total Reviews Section -->
            <div class="p-5 xl:ltr:first:pl-0 xl:rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 last:border-0">
                <h6 class="mb-5">Total Reviews</h6>
                <h3>
                    <span>{{ totalReviews }}</span>
                    <span class="inline-block ml-[6px] !text-xs align-middle badge badge-green">
                        {{ reviewPercentage }}%
                    </span>
                </h3>
                <p class="mt-2 text-gray-500 dark:text-dark-500">Growth in reviews on this year</p>
            </div>

            <!-- Average Rating Section -->
            <div class="p-5 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 last:border-0">
                <h6 class="mb-5">Average Rating</h6>
                <div class="flex items-center gap-3">
                    <h3>{{ averageReview }}</h3>
                    <div class="text-yellow-500">
                        <template v-for="i in 5" :key="i">
                            <i :class="getStarClass(averageReview, i)"></i>
                        </template>
                    </div>
                </div>
                <p class="mt-2 text-gray-500">Average rating on this year</p>
            </div>
            <!-- Review Breakdown Section -->
            <div class="p-5 space-y-1">
                <div v-for="(rating, index) in ratings" :key="index" class="flex items-center gap-2">
                    <p class="shrink-0">
                        <i class="text-yellow-500 ri-star-fill"></i> {{ rating.stars }}
                    </p>
                    <div :style="{ width: `${rating.percentage}%` }" class="progress-bar progress-1">
                        <div class="text-white " :class="rating.color">
                        </div>
                    </div>
                    <h6>{{ rating.count }}</h6>
                </div>
            </div>
        </div>
        <ReviewTable :tableData="reviews" @delete="setDeleteModelStatus" @edit="setEditReviewForm" />
        <AddModuleForm :showAddModule="showAddReviewForm" :setAddModuleValue="setAddReviewForm"
            :showEditModule="showEditReviewForm" :setEditModuleValue="setEditReviewForm" :rowData="selectedData" />
        <DeleteRow :isModalVisible="isDeleteModalVisible" :setModelStatus="setDeleteModelStatus"
            :deleteRow="deleteReview" />
    </div>
</template>
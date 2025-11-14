<script setup lang="ts">
import { ref, computed, reactive, onMounted, } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import PageHeading from '@/components/common/PageHeading.vue';
import ProductCard from '../ProductCard.vue';
import recentMenuList from '@/view/dashboards/recent-menu-list.vue';
import AddModuleForm from './AddModuleForm.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import userImg from "@/assets/images/avatar/user-1.png";
import type { reviewType } from './overvie-data';
import { offers, productDetails, reviews } from './overvie-data';
import {
    BadgeCheck,
    Check,
    ChevronLeft,
    ChevronRight,
    Ellipsis,
    Heart,
    Minus,
    Pencil,
    Plus,
    Store,
    Trash2, X
} from 'lucide-vue-next';
// Define product data and state variables
const basePrice = 99.99;
const discount = 0.5;
const count = ref(1);

const colors = [
    { value: 'blue' }, { value: 'gray' }, { value: 'pink' },
    { value: 'green' }, { value: 'red' }
];
const sizes = ['S', 'M', 'L', 'XL', '2XL'];
// Product details (overview table)

const activeColor = ref('gray');
const activeSize = ref('M');

const showMoreOffers = ref(false);
const showMoreDetails = ref(false);
// Computed property to get the displayed offers based on `showMoreOffers`
const displayedOffers = computed(() => {
    return showMoreOffers.value ? offers : offers.slice(0, 4);
});

// Method to toggle `showMoreOffers` state
const toggleShowMore = () => {
    showMoreOffers.value = !showMoreOffers.value;
};

const toggleShowMoreDetails = () => showMoreDetails.value = !showMoreDetails.value;
const limitedProductDetails = computed(() => {
    const entries = Object.entries(productDetails);
    return showMoreDetails.value ? entries : entries.slice(0, 7);
})

// Define the images array
const images = [
    new URL('@/assets/images/products/img-25.png', import.meta.url).href,
    new URL('@/assets/images/products/img-26.png', import.meta.url).href,
    new URL('@/assets/images/products/img-27.png', import.meta.url).href,
    new URL('@/assets/images/products/img-28.png', import.meta.url).href,
    new URL('@/assets/images/products/img-29.png', import.meta.url).href,
    new URL('@/assets/images/products/img-30.png', import.meta.url).href,
];

const modules = [Pagination, Navigation, Autoplay];

const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
};
// ---------------------------Rating table --------------------------

const currentPage = ref(1);
const reviewsPerPage = 8;
const showAddReviewForm = ref(false);

const totalPages = computed(() => {
    return Math.ceil(reviews.value.length / reviewsPerPage);
});
const displayedReviews = computed(() => {
    const start = (currentPage.value - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    return reviews.value.slice(start, end);
});

const showingStart = computed(() => {
    return (currentPage.value - 1) * reviewsPerPage + 1;
});

const showingEnd = computed(() => {
    const end = currentPage.value * reviewsPerPage;
    return end > reviews.value.length ? reviews.value.length : end;
});

// Methods for pagination and dropdown
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
// Star Rating Helper Function
const getStarClass = (star: any, index: number) => {
    if (index <= star) {
        return 'ri-star-fill text-yellow-500'; // Full star
    } else if (index - 0.5 <= star) {
        return 'ri-star-half-fill text-yellow-500'; // Half star
    } else {
        return 'ri-star-line text-yellow-500'; // Empty star
    }
};
// add new user feedback
const showEditReviewForm = ref(false);
const rating = ref(0);
const hovering = ref(0);
const emojis = ['😒', '🤨', '😊', '😚', '🥰'];

type ReviewForm = {
    customersID?: string;  // Optional string (can be undefined)
    images?: string;       // Optional string (can be undefined)
    star: number | number;
    userName: string;
    date: string;
    location: string;
    title: string;
    content: string;
};

let reviewForm = reactive<ReviewForm>({
    customersID: '',
    images: '',
    star: 0,
    userName: '',
    date: '',
    location: '',
    title: '',
    content: '',
});
const validateForm = (): boolean => {
    errors.star = '';      // Clear previous error
    errors.userName = '';  // Clear previous error
    errors.date = '';      // Clear previous error
    errors.location = '';  // Clear previous error
    errors.title = '';     // Clear previous error
    errors.content = '';   // Clear previous error

    // Validate each field
    let isValid = true;

    if (!reviewForm.userName) {
        errors.userName = 'User name is required.';
        isValid = false;
    }

    if (!reviewForm.date) {
        errors.date = 'Date is required.';
        isValid = false;
    }

    if (!reviewForm.location) {
        errors.location = 'Location is required.';
        isValid = false;
    }

    if (!reviewForm.title) {
        errors.title = 'Title is required.';
        isValid = false;
    }

    if (!reviewForm.content) {
        errors.content = 'Content is required.';
        isValid = false;
    }

    // Check if star rating is valid
    if (reviewForm.star < 1 || reviewForm.star > 5) {
        errors.star = 'Rating must be between 1 and 5.';
        isValid = false;
    }

    return isValid;
};

let errors = reactive({
    customersID: '',
    images: '',
    star: '' as string | null | number,
    userName: '' as string | null,
    date: '' as string | null,
    location: '' as string | null,
    title: '' as string | null,
    content: '' as string | null,
});
const validateField = (field: keyof typeof reviewForm) => {
    if (!reviewForm[field]) {
        errors[field] = `${capitalizeFirstLetter(field)} is required.`;
    } else {
        errors[field] = '';
    }
};

const setRating = (value: number) => {
    rating.value = value;
    reviewForm.star = value;
};

function resetForm() {
    rating.value = 0
    reviewForm = {
        customersID: '',
        images: '',
        star: 0,
        userName: '',
        date: '',
        location: '',
        title: '',
        content: '',
    };
}
const addReview = () => {
    // Convert star value to a string
    reviews.value.unshift({
        ...reviewForm,
        image: userImg, // Assuming `userImg` is defined somewhere
        star: reviewForm.star.toString(), // Convert to string
    });
    resetForm();
};
const updateReview = () => {
    // Handle edit (find and update review)
    const index: number = reviews.value.findIndex(r => r.userName === reviewForm.userName);
    if (index !== -1) {
        reviews.value[index] = { ...reviewForm, image: reviews.value[index].image };
    }
    resetForm();
};
const submitForm = () => {
    if (validateForm()) {
        if (showAddReviewForm.value) {
            addReview();  // Add the review if validation passes
        } else {
            //   updateReview();  // Update the review if validation passes
        }
        closeModal();  // Close the modal after submission
    }
};

const closeModal = () => {
    showAddReviewForm.value = false;
    showEditReviewForm.value = false;
};

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
// Handle Rating Input Change
const handleRatingInput = () => {
    const ratingValue = reviewForm.star;
    if (ratingValue < 1 || ratingValue > 5) {
        errors.star = 'Rating must be between 1 and 5.';
    } else {
        errors.star = '';;
        rating.value = ratingValue;  // Sync rating with the input field
    }
};

const dropDownOption = [
    {
        icon: Pencil,
        name: 'Edit',
    },
    {
        icon: Trash2,
        name: 'Delete',
    },
]
// ------------------------- Delete module ----------------------
const showAddModule = ref(false);
const showEditModule = ref(false);
const showDeleteModule = ref(false);
const selectedDetails = ref<reviewType | undefined>()
const setAddModuleValue = (state: boolean, data?: reviewType) => {
    showAddModule.value = state;
    selectedDetails.value = undefined
}
const setDeleteModuleValue = (state: boolean) => {
    showDeleteModule.value = state
}
const setEditModuleValue = (state: boolean) => {
    showEditModule.value = state
}
function tableActions(type: { name: string }, data?: reviewType) {
    selectedDetails.value = data
    if (type.name === 'Delete') {
        setDeleteModuleValue(true)
    }
    if (type.name === 'Edit') {
        setEditModuleValue(true)
    }
}

function deleteReviewRow() {
    const finedIndex = reviews.value.findIndex(data => data.reviewId == selectedDetails.value?.reviewId);
    reviews.value.splice(finedIndex, 1)

}
onMounted(() => {
    reviews.value.forEach((data, index) => {
        data.reviewId = 1 + index
    })
})

</script>
<template>
    <PageHeading title="Product Overview" sub-title="Ecommerce" />
    <div>
        <div class="grid grid-cols-12 gap-x-5">
            <div class="col-span-12 lg:col-span-8">
                <div class="card">
                    <div class="card-body">
                        <!-- Wishlist, Edit, Delete Buttons -->
                        <div class="flex items-center mb-5">
                            <p class="grow">
                                <span class="badge badge-sub-gray">
                                    <Heart data-lucide="heart" class="inline-block mr-1 text-red-500 size-4 fill-red-500"></Heart> Wishlist
                                </span>
                            </p>
                            <div class="divide-x divide-gray-200 rtl:divide-x-reverse dark:divide-dark-800 shrink-0">
                                <a href="apps-ecommerce-create-products" class="ltr:!pr-1 rtl:!pl-1 link link-primary">
                                    <Pencil data-lucide="pencil" class="inline-block size-4"></Pencil> <span class="align-middle">Edit</span>
                                </a>
                                <a href="#!" class="ltr:!pl-2 rtl:!pr-2 link link-red">
                                    <Trash2 data-lucide="trash-2" class="inline-block size-4"></Trash2> <span class="align-middle">Delete</span>
                                </a>
                            </div>
                        </div>

                        <!-- Product Title and Reviews -->
                        <h5 class="mb-3">Collection Ruffled Cotton Top</h5>
                        <div class="flex items-center divide-x divide-gray-200 dark:divide-dark-800 rtl:divide-x-reverse *:px-3 mb-5">
                            <p class="ltr:first:pl-0 rtl:first:pr-0"><i class="text-yellow-500 align-bottom ri-star-half-line"></i> 4.8</p>
                            <p class="ltr:first:pl-0 rtl:first:pr-0">149 Reviews</p>
                            <p class="ltr:first:pl-0 rtl:first:pr-0">4789 Sales</p>
                        </div>

                        <!-- Pricing Information -->
                        <h4 class="flex items-center gap-2 mt-3">
                            $<span>{{ (basePrice * count * (1 - discount)).toFixed(2) }}</span>
                            <small class="font-normal text-gray-500 line-through dark:text-dark-500">$<span>{{
                                (basePrice * count).toFixed(2) }}</span></small>
                            <span class="!text-xs badge badge-red shrink-0">50%</span>
                        </h4>

                        <!-- Color Selection -->
                        <div class="grid grid-cols-1 sm:grid-cols-2">
                            <div>
                                <h6 class="mt-5">Select Colors</h6>
                                <div class="flex items-center gap-2 mt-2 grow">
                                    <a v-for="color in colors" :key="color.value" href="#!" class="flex items-center justify-center text-white bg-blue-500 border-2 border-white rounded-full dark:border-dark-900 outline-1 outline outline-gray-200 dark:outline-dark-800 size-6 group/item" :class="{ 'active': activeColor === color.value, [`bg-${color.value}-500`]: true }" @click.prevent="activeColor = color.value">
                                        <Check data-lucide="check" class="size-4 hidden group-[&.active]/item:block">
                                        </Check>
                                    </a>
                                </div>
                            </div>

                            <!-- Size Selection -->
                            <div>
                                <h6 class="mt-5">Select Size</h6>
                                <div class="flex items-center gap-2 mt-3 font-medium shrink-0">
                                    <a v-for="size in sizes" :key="size" href="#!" class="text-gray-500 dark:text-dark-500 [&.active]:!text-green-500" :class="{ 'active': activeSize === size }" @click.prevent="activeSize = size">
                                        {{ size }}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Quantity Selector -->
                        <div class="my-5">
                            <div class="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                                <button @click="count > 1 && count--" class="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 minus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                                    <Minus class="size-4" data-lucide="minus"></Minus>
                                </button>
                                <input type="text" v-model="count" class="h-8 p-0 text-center !border-0 rounded-none form-input" readonly>
                                <button @click="count++" class="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 plus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                                    <Plus class="size-4" data-lucide="plus"></Plus>
                                </button>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-wrap items-center gap-2 mb-5">
                            <button type="button" class="btn btn-red w-36">Buy Now</button>
                            <button type="button" class="btn btn-sub-gray w-36">Add to Cart</button>
                        </div>

                        <!-- Available Offers -->
                        <h6 class="mb-2">Available offers</h6>
                        <div class="mb-5">
                            <ul class="space-y-2 text-gray-500 list-inside dark:text-dark-500 list-circle">
                                <!-- Display only the offers according to the limit -->
                                <li v-for="(offer, index) in displayedOffers" :key="index">
                                    <span class="font-semibold">{{ offer.type }}</span> {{ offer.description }}
                                    <a href="#!" class="underline link link-red">T&C</a>
                                </li>
                            </ul>

                            <!-- Show More / Show Less button -->
                            <a href="#!" @click.prevent="toggleShowMore" class="inline-block mt-3 link link-red">
                                <span>{{ showMoreOffers ? 'Show Less' : 'Show More' }}</span>
                                <i :class="showMoreOffers ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" class="inline-block size-4"></i>
                            </a>
                        </div>

                        <!-- Product Overview -->
                        <h6 class="mb-1">Product Overview</h6>
                        <p class="mb-4 text-gray-500 dark:text-dark-500">We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>

                        <div>
                            <table class="table table-sm flush">
                                <tr v-for="([key, value], index) in limitedProductDetails" :key="index">
                                    <th class="!border-0">{{ key }}</th>
                                    <td>{{ value }}</td>
                                </tr>
                            </table>
                            <a href="#!" @click.prevent="toggleShowMoreDetails" class="inline-block !mt-3 link link-red">
                                <span>{{ showMoreDetails ? 'Show Less ' : 'Show More ' }}</span>
                                <i :class="showMoreDetails ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" class="inline-block size-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Ratings & Reviews Table -->
                <div class="card">
                    <div class="card-header">
                        <div class="flex flex-wrap items-center gap-5">
                            <h6 class="card-title grow">Ratings & Reviews</h6>
                            <div class="shrink-0">
                                <button class="btn btn-primary" @click="setAddModuleValue(true)">
                                    <plus data-lucide="plus" class="inline-block mr-1 size-4"></plus> New Review
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="max-lg:overflow-x-auto">
                                <table class="table flush whitespace-nowrap">
                                    <tbody>
                                        <tr v-for="(review, index) in displayedReviews" :key="index">
                                            <td class="align-top">
                                                <div class="flex items-center gap-3 ">
                                                    <img :src="review.image" alt="" class="rounded-md shrink-0 size-16" />
                                                    <div class="overflow-hidden grow">
                                                        <h6 class="mb-1 truncate">
                                                            <a href="#!" class="!text-current link link-primary">{{
                                                                review.userName }}</a>
                                                        </h6>
                                                        <p class="mb-1 text-sm truncate">{{ review.date }}</p>
                                                        <p class="text-sm text-gray-500 truncate dark:text-dark-500">
                                                            Location: <span>{{ review.location }}</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
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
                                                    <p class="text-gray-500 whitespace-normal dark:text-dark-500">{{
                                                        review.content }}</p>
                                                </div>
                                            </td>
                                            <td class="align-top">
                                                <div class="flex items-center justify-end gap-3 ">
                                                    <recentMenuList :title="Ellipsis" className="rotate-90 btn btn-icon-text btn-sub-gray btn-icon" :show-arrow="false" iconCss="size-[15px] m-auto" :array-list="dropDownOption" menu-icon-css="size-3" extra-class="review-table-position" :handle-action="(type: any) => tableActions(type, review)" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="grid items-center grid-cols-12 gap-5 mt-5">
                                <div class="col-span-12 sm:col-span-6">
                                    <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> -
                                        <b>{{ showingEnd }}</b> of <b>{{
                                            reviews.length }}</b> Results
                                    </p>
                                </div>
                                <div class="col-span-12 sm:col-span-6">
                                    <div class="pagination pagination-primary flex sm:!justify-end">
                                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5" />
                                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5" />
                                            Prev
                                        </button>
                                        <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                            {{ page }}
                                        </button>
                                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                                            <ChevronRight class="ml-1 rtl:hidden size-5 ltr:inline-block"/>
                                            <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-5"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <div class="sticky mb-5 top-24">
                    <div class="card">
                        <div class="card-body">
                            <div class="bg-gray-100 dark:bg-dark-850">
                                <!-- Swiper Container -->
                                <swiper :autoplay="{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }" :slidesPerView="1" :spaceBetween="10" :navigation="navigation" :pagination="{
                                    type: 'fraction',
                                }" loop class="previewImages" :modules="modules">
                                    <!-- Swiper Slide Loop -->
                                    <swiper-slide v-for="(image, index) in images" :key="index">
                                        <img :src="image" alt="Product Image" />
                                    </swiper-slide>
                                    <div class="swiper-button-next after:!content-['\ea6e'] after:!font-['remixicon'] after:bg-white dark:after:bg-dark-900 size-10 after:text-4xl after:size-10 after:flex after:justify-center after:align-center after:rounded-full"></div>
                                    <div class="swiper-button-prev after:!content-['\ea64'] after:!font-['remixicon'] after:bg-white dark:after:bg-dark-900 size-10 after:text-4xl after:size-10 after:flex after:justify-center after:align-center after:rounded-full"></div>
                                    <div class="swiper-pagination"></div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="flex flex-wrap items-center gap-3 card-body">
                            <div class="flex items-center justify-center border border-gray-200 rounded-full dark:border-dark-800 shrink-0 size-14">
                                <Store data-lucide="store" class="text-sky-500 fill-sky-500/10"></Store>
                            </div>
                            <div class="grow">
                                <h6 class="mb-1"><a href="#!"><span class="align-middle">SRBThemes </span>
                                        <BadgeCheck class="inline-block ml-1 size-4 text-sky-500 fill-sky-500/10">
                                        </BadgeCheck>
                                    </a></h6>
                                <p><i class="text-yellow-500 align-bottom ri-star-half-line"></i> 4.8</p>
                            </div>
                            <button class="btn btn-purple shrink-0">View Store</button>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 mb-5">
                        <h6 class="grow">Recent Product</h6>
                        <a href="apps-ecommerce-products-list" class="link link-primary">View All</a>
                    </div>
                    <div class="card">
                        <ProductCard :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--create review modals-->
    <AddModuleForm :showAddModule="showAddModule" :setAddModuleValue="setAddModuleValue" :rowData="selectedDetails" :showEditModule="showEditModule" :setEditModuleValue="setEditModuleValue" />

    <!-- Delete Module -->
    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :delete-row="deleteReviewRow" />
</template>

<style>
@media screen and (max-width: 1024px) {
    .setPosition {
        position: absolute;
        left: -122px !important;
    }
}
</style>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight, CirclePlus, Search } from 'lucide-vue-next';
import books from './books-data';
import AddNewBook from './AddNewBook.vue';
import PreviewBook from './PreviewBook.vue';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
const searchTerm = ref('');
const selectedFilter = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(12);

// Computed properties
const filterBooks = computed(() => {
    let filtered = books.value;

    // Search
    if (searchTerm.value.trim()) {
        const term = searchTerm.value.toLowerCase();
        filtered = filtered.filter((book) =>
            Object.values(book).some((val) =>
                val.toString().toLowerCase().includes(term)
            )
        );
    }
    // Filter by type
    if (selectedFilter.value) {
        filtered = filtered.filter((book) => book.type === selectedFilter.value);
    }
    return filtered;
});
const totalPages = computed(() => Math.ceil(filterBooks.value.length / itemsPerPage.value));
const displayedBooks = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filterBooks.value.slice(start, start + itemsPerPage.value);
});
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() =>
    Math.min(currentPage.value * itemsPerPage.value, filterBooks.value.length)
);
// Functions
const prevPage = () => currentPage.value--;
const nextPage = () => currentPage.value++;
const gotoPage = (page: number) => (currentPage.value = page);
const fullStars = (rating: number) => Math.floor(rating);
const halfStar = (rating: number) => rating % 1 >= 0.5;
const emptyStars = (rating: number) => 5 - Math.ceil(rating);


// Add new Books 
const addBookModal = ref(false);
const previewBook = ref(false);
const bookPreviewData = ref()
const setAddBookModalValue = (state: boolean) => {
    addBookModal.value = state
}

const setPreviewBookValue = (state: boolean, data?: any) => {
    bookPreviewData.value = data;
    previewBook.value = state;
}

</script>
<template>
    <div>
        <!-- Search and Filters -->
        <div class="grid grid-cols-12 gap-space mb-space">
            <div class="col-span-12 md:col-span-4 xl:col-span-3">
                <div class="relative flex items-center">
                    <input type="text" class="ltr:rounded-r-none rtl:rounded-l-none ltr:!border-r-0 rtl:!border-l-0 form-input grow" placeholder="Search for ..." v-model="searchTerm" />
                    <button type="button" title="search-button" class="border-gray-200 ltr:rounded-l-none rtl:rounded-r-none btn btn-sub-gray btn-icon shrink-0">
                        <Search class="size-5"></Search>
                    </button>
                </div>
            </div>

            <div class="col-span-12 md:col-span-3 2xl:col-span-2 2xl:col-start-9">
                <select v-model="selectedFilter" class="w-full form-select">
                    <option value="" selected disabled hidden>Select</option>
                    <option value="">All</option>
                    <option value="Popular Book">Popular Book</option>
                    <option value="Best Sales">Best Sales</option>
                    <option value="Newest">Newest</option>
                </select>
            </div>

            <div class="col-span-12 md:col-span-3 2xl:col-span-2">
                <button type="button" class="w-full btn btn-primary" @click="setAddBookModalValue(true)">
                    <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus>
                    Add Book
                </button>
            </div>
        </div>
        <!-- Book Cards -->
        <div class="grid grid-cols-12 gap-x-space">
            <div v-for="(book, index) in displayedBooks" :key="index" class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
                <div class="flex items-center gap-3 card-body">
                    <img :src="book.image" alt="" class="h-40 rounded-md cursor-pointer shrink-0" @click="setPreviewBookValue(true, book)" />
                    <div class="overflow-hidden grow">
                        <h6 class="mb-1 truncate">
                            <a href="#!" class="!text-current link link-primary">
                                {{ book.title }}
                            </a>
                        </h6>
                        <p class="mb-2 text-gray-500 dark:text-dark-500">
                            By <span class="underline link link-green">{{ book.author }}</span>
                        </p>
                        <div class="text-yellow-500 flex gap-1.5 mb-2">
                            <i v-for="i in fullStars(book.rating)" :key="i" class="ri-star-fill"></i>
                            <i v-if="halfStar(book.rating)" class="ri-star-half-fill"></i>
                            <i v-for="i in emptyStars(book.rating)" :key="i" class="ri-star-line"></i>
                            <span class="text-gray-800 dark:text-dark-50">
                                ({{ book.reviewCount }})
                            </span>
                        </div>
                        <h5 class="mb-2">${{ book.price.toFixed(2) }}</h5>
                        <button type="button" class="w-full btn btn-sub-red">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center" v-if="displayedBooks.length === 0">
            <TableDataNotFount />
        </div>
        <!-- Pagination -->
        <div v-if="filterBooks.length > 0" class="grid items-center grid-cols-12 gap-5 mb-5">
            <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filterBooks.length }}</b> Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" /> Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                        {{ page }}
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                    </button>
                </div>
            </div>
        </div>

        <AddNewBook :addPageVisible="addBookModal" :setAddPageVisibleValue="setAddBookModalValue" />

        <PreviewBook :moduleShow="previewBook" :setModuleShowValue="setPreviewBookValue" :bookData="bookPreviewData" />
    </div>
</template>
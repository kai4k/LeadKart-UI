<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'vue-remix-icons';
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const totalPages = ref(10); // Total number of pages
const currentPage = ref(2); // Current active page
const basicCurrentPage = ref(2);
const modernCurrentPage = ref(4)
const currentPageValue = ref(4); // Current page variable
const totalPagesCount = ref(24); // Total number of pages
const pagesToShow = computed(() => {
    const pages = [];

    const startPage = Math.max(2, currentPage.value - 1);
    const endPage = Math.min(totalPages.value - 1, currentPage.value + 1);

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return pages;
});

const showEllipsisLeft = computed(() => currentPage.value > 3);
const showEllipsisRight = computed(() => currentPage.value < totalPages.value - 2);


// Function to go to a specific page
const goToPage = (page: number) => {
    currentPage.value = page;
};
const basicSetPage = (page: number) => {
    basicCurrentPage.value = page;
}
// Function to go to the previous page
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

const basicPrevPage = () => {
    if (basicCurrentPage.value > 1) {
        basicCurrentPage.value--;
    }
};
const basicNextPage = () => {
    if (basicCurrentPage.value < totalPages.value) {
        basicCurrentPage.value++;
    }
};

const modernNextPage = () => {
    if (modernCurrentPage.value < totalPages.value) {
        modernCurrentPage.value++;
    }
};
const modernPrevPage = () => {
    if (modernCurrentPage.value > 1) {
        modernCurrentPage.value--;
    }
};

const decrementPage = () => {
    if (currentPageValue.value > 1) {
        currentPageValue.value--;
    }
};

const incrementPage = () => {
    if (currentPageValue.value < totalPagesCount.value) {
        currentPageValue.value++;
    }
};
// Flush ------------------------------
const currentPageIndex = ref(1); // Current page index
const totalPageCount = ref(10); // Total number of pages

const visiblePages = computed(() => {
    const pages = [];
    if (currentPageIndex.value === 1) {
        // Show pages 1, 2, 3
        for (let i = 1; i <= Math.min(3, totalPageCount.value); i++) {
            pages.push(i);
        }
    } else if (currentPageIndex.value === totalPageCount.value) {
        // Show the last page and the two before it
        for (let i = totalPageCount.value - 2; i <= totalPageCount.value; i++) {
            if (i > 0) pages.push(i);
        }
    } else {
        // Show the current page and the one before and after it
        if (currentPageIndex.value > 1) pages.push(currentPageIndex.value - 1);
        pages.push(currentPageIndex.value);
        if (currentPageIndex.value < totalPageCount.value) pages.push(currentPageIndex.value + 1);
    }
    return pages;
});

const flushShowEllipsisRight = computed(() => {
    return visiblePages.value[visiblePages.value.length - 1] < totalPageCount.value;
});

const flushGoToPage = (page: number) => {
    if (page > 0 && page <= totalPageCount.value) {
        currentPageIndex.value = page;
    }
};


// Size ----------------------------------------------------


const sizeCurrentPage = ref(1);

const displayedPages = computed(() => {
    const pages = [];

    if (totalPages.value <= 5) {
        for (let i = 1; i <= totalPages.value; i++) {
            pages.push(i);
        }
    } else {
        if (sizeCurrentPage.value <= 3) {
            pages.push(1, 2, 3, 4, '...');
        } else if (sizeCurrentPage.value >= totalPages.value - 2) {
            pages.push(totalPages.value - 3, totalPages.value - 2, totalPages.value - 1, totalPages.value);
        } else {
            pages.push('...', sizeCurrentPage.value - 1, sizeCurrentPage.value, sizeCurrentPage.value + 1);
        }
    }

    return pages;
});

const showLastPage = computed(() => {
    return sizeCurrentPage.value < totalPages.value - 1;
});

const sizeGoToPage = (page: any) => {
    if (page >= 1 && page <= totalPages.value) {
        sizeCurrentPage.value = page;
    }
};


// ---------------------------------------------------
const lightCurrentPage = ref(1);
const lightTotalPages = ref(10); // Adjust this value dynamically as needed

const lightDisplayedPages = computed(() => {
    const pages = [];

    if (lightTotalPages.value <= 5) {
        for (let i = 1; i <= lightTotalPages.value; i++) {
            pages.push(i);
        }
    } else {
        if (lightCurrentPage.value <= 3) {
            pages.push(1, 2, 3, 4, '...');
        } else if (lightCurrentPage.value >= lightTotalPages.value - 2) {
            pages.push(lightTotalPages.value - 3, lightTotalPages.value - 2, lightTotalPages.value - 1, lightTotalPages.value);
        } else {
            pages.push('...', lightCurrentPage.value - 1, lightCurrentPage.value, lightCurrentPage.value + 1,);
        }
    }

    return pages;
});

const lightShowLastPage = computed(() => {
    return lightCurrentPage.value < lightTotalPages.value - 1;
});

const lightGoToPage = (page: any) => {
    if (page >= 1 && page <= lightTotalPages.value) {
        lightCurrentPage.value = page;
    }
};

</script>
<template>
    <pageHeading title="Pagination" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Basic Pagination</h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="pagination pagination-primary">
                        <button type="button" class="pagination-pre" :disabled="currentPage === 1" @click="prevPage">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5"></chevronLeft>
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-if="currentPage > 1" type="button" class="pagination-item" @click="goToPage(1)">
                            1
                        </button>

                        <span v-if="showEllipsisLeft">...</span>

                        <button v-for="page in pagesToShow" :key="page" type="button" class="pagination-item" :class="{ active: currentPage === page }" @click="goToPage(page)">
                            {{ page }}
                        </button>

                        <span v-if="showEllipsisRight">...</span>

                        <button v-if="currentPage < totalPages" type="button" class="pagination-item" @click="goToPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="pagination-next" :disabled="currentPage === totalPages" @click="nextPage">
                            Next
                            <ChevronRight class="ml-1 rtl:hidden size-5 ltr:inline-block"></ChevronRight>
                            <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-5"></ChevronLeft>
                        </button>
                    </div>
                </div>
                <div class="mt-space">
                    <div class="pagination pagination-green">
                        <button type="button" class="!rounded-full pagination-pre" :disabled="basicCurrentPage === 1" @click="basicPrevPage">
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-if="basicCurrentPage > 1" type="button" class="!rounded-full pagination-item" @click="basicSetPage(1)">
                            1
                        </button>
                        <span v-if="showEllipsisLeft">...</span>

                        <button v-for="page in pagesToShow" :key="page" type="button" class="!rounded-full pagination-item" :class="{ active: basicCurrentPage === page }" @click="basicSetPage(page)">
                            {{ page }}
                        </button>

                        <span v-if="showEllipsisRight">...</span>

                        <button v-if="basicCurrentPage < totalPages" type="button" class="!rounded-full pagination-item" @click="basicSetPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="!rounded-full pagination-next" :disabled="basicCurrentPage === totalPages" @click="basicNextPage">
                            Next
                            <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Modern Pagination</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <div class="inline-flex items-center gap-3 overflow-hidden border border-gray-200 rounded-md dark:border-dark-800">
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500" @click="modernPrevPage" :disabled="modernCurrentPage === 1">
                            <ChevronLeft class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronRight class="ltr:hidden rtl:inline-block size-5" />
                        </button>
                        <p class="text-gray-500 dark:text-dark-500">
                            <b class="font-medium text-gray-800 dark:text-dark-100">{{ String(modernCurrentPage).padStart(2, '0') }}</b> / {{
                                totalPages }}
                        </p>
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500" @click="modernNextPage" :disabled="modernCurrentPage === totalPages">
                            <ChevronRight class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronLeft class="ltr:hidden rtl:inline-block size-5" />
                        </button>
                    </div>

                    <div class="inline-flex items-center gap-3 overflow-hidden border border-gray-200 rounded-full dark:border-dark-800">
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500" @click="modernPrevPage" :disabled="modernCurrentPage === 1">
                            <ChevronLeft class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronRight class="ltr:hidden rtl:inline-block size-5" />
                        </button>
                        <p class="text-gray-500 dark:text-dark-500">
                            <b class="font-medium text-gray-800 dark:text-dark-100">{{ String(modernCurrentPage).padStart(2, '0') }}</b> / {{
                                totalPages }}
                        </p>
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500" @click="modernNextPage" :disabled="modernCurrentPage === totalPages">
                            <ChevronRight class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronLeft class="ltr:hidden rtl:inline-block size-5" />
                        </button>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 mt-5">
                    <div class="inline-flex items-center gap-3 overflow-hidden border rounded-md border-primary-500 bg-primary-500">
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-primary-200/20 bg-primary-500 text-primary-200 hover:text-white [&.active]:text-white disabled:text-primary-300" @click="decrementPage" :disabled="currentPageValue === 1">
                            <ChevronLeft class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronRight class="ltr:hidden rtl:inline-block size-5" />
                        </button>
                        <p class="cursor-default text-primary-200">
                            <b class="font-medium text-white">{{ String(currentPageValue).padStart(2, '0') }}</b> / {{ totalPagesCount }}
                        </p>
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-primary-200/20 bg-primary-500 text-primary-200 hover:text-white [&.active]:text-white disabled:text-primary-300" @click="incrementPage" :disabled="currentPageValue === totalPagesCount">
                            <ChevronRight class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronLeft class="rtl:inline-block ltr:hidden size-5" />
                        </button>
                    </div>
                    <div class="inline-flex items-center gap-3 overflow-hidden bg-green-500 border border-green-500 rounded-full">
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-green-200/20 bg-green-500 text-green-200 hover:text-white [&.active]:text-white disabled:text-green-300" @click="decrementPage" :disabled="currentPageValue === 1">
                            <ChevronLeft class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronRight class="hidden ltr:hidden rtl:inline-block size-5" />
                        </button>
                        <p class="text-green-200 cursor-default">
                            <b class="font-medium text-white">{{ String(currentPageValue).padStart(2, '0') }}</b> / {{ totalPagesCount }}
                        </p>
                        <button type="button" class="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-green-200/20 bg-green-500 text-green-200 hover:text-white [&.active]:text-white disabled:text-green-300" @click="incrementPage" :disabled="currentPageValue === totalPagesCount">
                            <ChevronRight class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronLeft class="rtl:inline-block ltr:hidden size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Flush Pagination</h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="pagination pagination-primary pagination-flush">
                        <button type="button" class="pagination-item" :disabled="currentPageIndex === 1" @click="flushGoToPage(currentPageIndex - 1)">
                            <ChevronLeft class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronRight class="ltr:hidden rtl:inline-block size-5" />
                        </button>
                        <button v-for="page in visiblePages" :key="page" type="button" class="pagination-item" :class="{ active: currentPageIndex === page }" @click="flushGoToPage(page)">
                            {{ page }}
                        </button>
                        <button v-if="flushShowEllipsisRight" type="button" class="pagination-item" disabled>
                            ...
                        </button>
                        <button type="button" class="pagination-item" :class="{ active: currentPageIndex === totalPageCount }" @click="flushGoToPage(totalPageCount)" v-if="currentPageIndex < totalPageCount">
                            {{ totalPageCount }}
                        </button>
                        <button type="button" class="pagination-item" :disabled="currentPageIndex === totalPageCount" @click="flushGoToPage(currentPageIndex + 1)">
                            <ChevronRight class="ltr:inline-block rtl:hidden size-5" />
                            <ChevronLeft class="rtl:inline-block ltr:hidden size-5" />
                        </button>
                    </div>
                </div>

                <div class="mt-space">
                    <div class="pagination pagination-purple pagination-flush">
                        <button type="button" class="!rounded-full pagination-pre" :disabled="currentPageIndex === 1" @click="flushGoToPage(currentPageIndex - 1)">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5" />
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5" /> Prev
                        </button>
                        <button v-for="page in visiblePages" :key="page" type="button" class="!rounded-full pagination-item" :class="{ active: currentPageIndex === page }" @click="flushGoToPage(page)">
                            {{ page }}
                        </button>
                        <button v-if="flushShowEllipsisRight" type="button" class="!rounded-full pagination-item" disabled>
                            ...
                        </button>
                        <button type="button" class="!rounded-full pagination-item" :class="{ active: currentPageIndex === totalPageCount }" @click="flushGoToPage(totalPageCount)" v-if="currentPageIndex < totalPageCount">
                            {{ totalPageCount }}
                        </button>
                        <button type="button" class="!rounded-full pagination-next" :disabled="currentPageIndex === totalPageCount" @click="flushGoToPage(currentPageIndex + 1)">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-5" />
                            <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Size Pagination</h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="pagination pagination-primary pagination-xs">
                        <button type="button" class="pagination-pre" :disabled="sizeCurrentPage === 1" @click="sizeGoToPage(sizeCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-for="page in displayedPages" :key="page" type="button" class="pagination-item" :class="{ active: page === sizeCurrentPage }" @click="sizeGoToPage(page)">
                            {{ page }}
                        </button>


                        <button type="button" class="pagination-item" v-if="totalPages > 1 && showLastPage" @click="sizeGoToPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="pagination-next" :disabled="sizeCurrentPage === totalPages" @click="sizeGoToPage(sizeCurrentPage + 1)">
                            Next
                            <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
                <div class="mt-space">
                    <div class="pagination pagination-primary pagination-sm">
                        <button type="button" class="pagination-pre" :disabled="sizeCurrentPage === 1" @click="sizeGoToPage(sizeCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-for="page in displayedPages" :key="page" type="button" class="pagination-item" :class="{ active: page === sizeCurrentPage }" @click="sizeGoToPage(page)">
                            {{ page }}
                        </button>


                        <button type="button" class="pagination-item" v-if="totalPages > 1 && showLastPage" @click="sizeGoToPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="pagination-next" :disabled="sizeCurrentPage === totalPages" @click="sizeGoToPage(sizeCurrentPage + 1)">
                            Next
                            <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
                <div class="mt-space">
                    <div class="pagination pagination-primary pagination-md">
                        <button type="button" class="pagination-pre" :disabled="sizeCurrentPage === 1" @click="sizeGoToPage(sizeCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-for="page in displayedPages" :key="page" type="button" class="pagination-item" :class="{ active: page === sizeCurrentPage }" @click="sizeGoToPage(page)">
                            {{ page }}
                        </button>


                        <button type="button" class="pagination-item" v-if="totalPages > 1 && showLastPage" @click="sizeGoToPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="pagination-next" :disabled="sizeCurrentPage === totalPages" @click="sizeGoToPage(sizeCurrentPage + 1)">
                            Next
                            <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
                <div class="mt-space">
                    <div class="pagination pagination-primary">
                        <button type="button" class="pagination-pre" :disabled="sizeCurrentPage === 1" @click="sizeGoToPage(sizeCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-for="page in displayedPages" :key="page" type="button" class="pagination-item" :class="{ active: page === sizeCurrentPage }" @click="sizeGoToPage(page)">
                            {{ page }}
                        </button>


                        <button type="button" class="pagination-item" v-if="totalPages > 1 && showLastPage" @click="sizeGoToPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="pagination-next" :disabled="sizeCurrentPage === totalPages" @click="sizeGoToPage(sizeCurrentPage + 1)">
                            Next
                            <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
                <div class="mt-space">
                    <div class="pagination pagination-primary pagination-lg">
                        <button type="button" class="pagination-pre" :disabled="sizeCurrentPage === 1" @click="sizeGoToPage(sizeCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                            Prev
                        </button>

                        <button v-for="page in displayedPages" :key="page" type="button" class="pagination-item" :class="{ active: page === sizeCurrentPage }" @click="sizeGoToPage(page)">
                            {{ page }}
                        </button>


                        <button type="button" class="pagination-item" v-if="totalPages > 1 && showLastPage" @click="sizeGoToPage(totalPages)">
                            {{ totalPages }}
                        </button>

                        <button type="button" class="pagination-next" :disabled="sizeCurrentPage === totalPages" @click="sizeGoToPage(sizeCurrentPage + 1)">
                            Next
                            <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Light Pagination</h6>
            </div>
            <div class="card-body">
                <div class="mt-4">
                    <div class="p-2 bg-gray-100 pagination pagination-primary pagination-flush dark:bg-dark-850">
                        <button type="button" class="pagination-item" :disabled="lightCurrentPage === 1" @click="lightGoToPage(lightCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                        </button>
                        <button v-for="page in lightDisplayedPages" :key="page" type="button" class="pagination-item" :class="{ active: page === lightCurrentPage }" @click="lightGoToPage(page)">
                            {{ page }}
                        </button>
                        <button type="button" class="pagination-item" v-if="lightTotalPages > 1 && lightShowLastPage" @click="lightGoToPage(lightTotalPages)">
                            {{ lightTotalPages }}
                        </button>
                        <button type="button" class="pagination-item" :disabled="lightCurrentPage === lightTotalPages" @click="lightGoToPage(lightCurrentPage + 1)">
                            <ChevronRight data-lucide="chevron-right" class="ltr:inline-block rtl:hidden size-5">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="p-2 bg-gray-100 rounded-full pagination pagination-primary pagination-flush dark:bg-dark-850">
                        <button type="button" class="pagination-item !rounded-full" :disabled="lightCurrentPage === 1" @click="lightGoToPage(lightCurrentPage - 1)">
                            <ChevronLeft data-lucide="chevron-left" class="ltr:inline-block rtl:hidden size-5">
                            </ChevronLeft>
                            <ChevronRight data-lucide="chevron-right" class="ltr:hidden rtl:inline-block size-5">
                            </ChevronRight>
                        </button>
                        <button v-for="page in lightDisplayedPages" :key="page" type="button" class="pagination-item !rounded-full" :class="{ active: page === lightCurrentPage }" @click="lightGoToPage(page)">
                            {{ page }}
                        </button>
                        <button type="button" class="pagination-item !rounded-full" v-if="lightTotalPages > 1 && lightShowLastPage" @click="lightGoToPage(lightTotalPages)">
                            {{ lightTotalPages }}
                        </button>
                        <button type="button" class="pagination-item !rounded-full" :disabled="lightCurrentPage === lightTotalPages" @click="lightGoToPage(lightCurrentPage + 1)">
                            <ChevronRight data-lucide="chevron-right" class="ltr:inline-block rtl:hidden size-5">
                            </ChevronRight>
                            <ChevronLeft data-lucide="chevron-left" class="rtl:inline-block ltr:hidden size-5">
                            </ChevronLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
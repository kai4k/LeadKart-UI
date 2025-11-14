<script setup lang="ts">
import { Columns3, Columns4, CreditCard, Handshake, Headset, Instagram, Search, Truck } from 'lucide-vue-next';
import Header from './LandingHeader.vue';
import { productsData, featuredProducts } from './ecom-data';
import { ref, computed, onMounted } from 'vue';
import { RiStarFill } from 'vue-remix-icons';
import { VueCompareImage } from 'vue3-compare-image'
import leftCompareImage from '@/assets/images/ecommerce/landing/cta-03.jpg'
import rightCompareImage from '@/assets/images/ecommerce/landing/cta-02.jpg'
import Footer from './EcomFooter.vue';
import ThemeButton from './ThemeButton.vue';
// const product = ref<any>(productsData);
const activeTab = ref('');
const filteredProducts = ref(productsData);
const tabs = ['Men', 'Women', 'Children', 'Brand']; // Define your tabs
const activeColumns = ref('columns-4'); // Default active column layout

const setActiveColumns = (columnType: string) => {
    activeColumns.value = columnType;
};

const filterProducts = () => {
    filteredProducts.value = productsData; // Copy original products

    if (activeTab.value !== '') {
        // If the active tab is "Brand", sort products by brand
        if (activeTab.value === 'Brand') {
            filteredProducts.value.sort((a: any, b: any) => {
                return a.brand.localeCompare(b.brand); // Sort by brand name
            });
        } else {
            // Filter products by category
            filteredProducts.value = filteredProducts.value.filter((prod: { category: string; }) => prod.category === activeTab.value);
        }
    }
};

// Function to set the active tab and filter products
const setActiveTab = (tab: string) => {
    activeTab.value = tab; // Update active tab
    filterProducts(); // Reapply filtering
};

// Initialize on component mount
onMounted(() => {
    filterProducts();
});

// ----------------- The Coastal Edition ---------------------
const products = [
    {
        image: new URL('@/assets/images/ecommerce/landing/img-01.jpg', import.meta.url).href,
        description: [
            {
                dropdownImage: new URL('@/assets/images/ecommerce/landing/img-03.jpg', import.meta.url).href,
                name: 'Faded Effect Top',
                price: '$34.65',
                buttonPosition: { top: '20%', left: '38%' },
            }
        ]
    },
    {
        image: new URL('@/assets/images/ecommerce/landing/img-02.jpg', import.meta.url).href,
        description: [
            {
                dropdownImage: new URL('@/assets/images/ecommerce/landing/img-04.jpg', import.meta.url).href,
                name: 'Luxury handbag',
                price: '$79.99',
                buttonPosition: { top: '75%', left: '33%' },
            },
            {
                dropdownImage: new URL('@/assets/images/ecommerce/landing/img-05.jpg', import.meta.url).href,
                name: 'Luxury handbag',
                price: '$79.99',
                buttonPosition: { top: '62%', left: '45%' },
            },
        ]
    },
];

// const isOpen = ref(Array(products.length).fill(false));
const isOpen = ref(Array.from({ length: products.length }, () => Array(products[0].description.length).fill(false)));

function toggleDropdown(productIndex: number, itemIndex: number) {
    // Close all descriptions for the clicked product
    isOpen.value[productIndex] = isOpen.value[productIndex].map(() => false);
    // Open the clicked description
    isOpen.value[productIndex][itemIndex] = !isOpen.value[productIndex][itemIndex];
}

function closeDropdown(productIndex: number, itemIndex: number) {
    isOpen.value[productIndex][itemIndex] = false;
}

const instagramImages = [
    { img: new URL('@/assets/images/ecommerce/landing/instagram/img-01.jpg', import.meta.url) },
    { img: new URL('@/assets/images/ecommerce/landing/instagram/img-02.jpg', import.meta.url) },
    { img: new URL('@/assets/images/ecommerce/landing/instagram/img-03.jpg', import.meta.url) },
    { img: new URL('@/assets/images/ecommerce/landing/instagram/img-04.jpg', import.meta.url) },
    { img: new URL('@/assets/images/ecommerce/landing/instagram/img-05.jpg', import.meta.url) },
]

</script>
<template>
    <!----------Menu------------>
    <Header />
    <!---------- Home------------>
    <section class="relative pb-48 min-h-screen overflow-hidden pt-80 bg-[url('../images/ecommerce/landing/home.jpg')] bg-cover bg-center">
        <div class="container lg:max-w-[1350px] lg:px-20">
            <h1 class="absolute inset-x-0 md:text-[80px] xl:text-[140px] 2xl:text-[11rem] bottom-10 text-white/60 text-center font-bold">
                DOMIEX FASHION</h1>
        </div>
    </section>
    <!----------Searching Section------------>
    <section class="relative -mt-10 pb-14 md:pb-24">
        <div class="container mx-auto px-4 lg:max-w-[1350px]" x-data="products()" x-init="init()">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <div class="p-5 bg-white rounded-lg dark:bg-dark-950">
                        <form action="#!" class="relative block group/form">
                            <input type="text" class="ltr:pl-9 rtl:pr-9 form-input dark:bg-transparent" placeholder="Search for product, brand etc...">
                            <button title="search" type="submit" class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                                <Search data-lucide="search" class="size-4">
                                </Search>
                            </button>
                        </form>
                        <div class="flex flex-wrap items-center justify-center gap-2 mt-2 whitespace-nowrap">
                            <h6>Popular Search:</h6>
                            <a href="#!" title="link" class="link link-primary">Fashion,</a>
                            <a href="#!" title="link" class="link link-primary">Girl Top,</a>
                            <a href="#!" title="link" class="link link-primary">Boys Fashion,</a>
                            <a href="#!" title="link" class="link link-primary">Watch</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center gap-5">
                    <ul class="flex items-center gap-6 overflow-x-auto grow">
                        <li v-for="tab in tabs" :key="tab" class="flex-shrink-0">
                            <a href="#!" title="tabs link" @click.prevent="setActiveTab(tab)" :class="{ 'active': activeTab === tab }" class="relative block py-2 text-center link link-primary [&.active]:text-primary-500">
                                {{ tab }}
                            </a>
                        </li>
                    </ul>
                    <div class="items-center hidden gap-3 lg:flex shrink-0">
                        <a href="#!" title="Columns link" class="link link-primary" :class="{ 'text-primary-500 active': activeColumns === 'columns-4' }" @click.prevent="setActiveColumns('columns-4')">
                            <Columns4 data-lucide="columns-4" class="size-5" />
                        </a>
                        <a href="#!" title="Columns link" class="link link-primary" :class="{ 'text-primary-500': activeColumns === 'columns-3' }" @click.prevent="setActiveColumns('columns-3')">
                            <Columns3 class="size-5" />
                        </a>
                    </div>
                </div>
                <div class="grid gap-8 mt-5" :class="activeColumns == 'columns-4' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'">
                    <div v-for="(product, index) in filteredProducts" :key="index" class="relative">
                        <div class="relative overflow-hidden bg-gray-100 rounded-md dark:bg-dark-900/40 group/item">
                            <img :src="product.image" alt="" />
                            <div class="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                                <button title="Rating Star Icon" type="button" class="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                                    <RiStarFill class="w-5 ri-star-fill"></RiStarFill>
                                </button>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h6 class="mb-1 truncate">
                                <a href="apps-ecommerce-product-overview" class="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">{{
                                    product.name }}</a>
                            </h6>
                            <p class="text-gray-500 dark:text-dark-500">{{ product.price }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-6">
                    <a href="apps-ecommerce-products-grid" title="Loading btn" class="!flex !items-center gap-2 btn btn-primary">
                        Loading ...
                        <svg class="size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div class="relative flex items-center h-40 max-w-full overflow-x-hidden">
        <div class="absolute animate-marquee whitespace-nowrap will-change-transform">
            <h1 class="font-bold uppercase text-gray-500/10 dark:text-dark-500/20 text-8xl">&nbsp;Mens Fashion Winter
                Deal || Girls Fashion || Brand Clothes Fashion || Up to 50% Discount in Domiex Fashion</h1>
        </div>
    </div>

    <!---------- Section------------>
    <section class="relative py-8 md:py-24" id="new-arrivals">
        <div class="container mx-auto px-4 lg:max-w-[1350px]">
            <div class="grid items-center grid-cols-12 gap-5 mb-8">
                <div class="col-span-12 2xl:col-span-5">
                    <h1 class="relative leading-normal capitalize ltr:pl-5 rtl:pr-5 before:rounded-full drop-shadow-lg before:absolute before:w-1 before:bg-primary-500 before:h-1/2 ltr:before:left-0 rtl:before:right-0">
                        New Arrivals this Spring Season</h1>
                </div>
                <div class="col-span-12 2xl:col-span-5 2xl:col-start-8">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">Spring is the time when nature blossoms, so look
                        for pieces of clothing that feature flowers, leaves, and pale colors. Additionally, opt for
                        light-weight fabrics like cotton or linen, since the weather is warming up.</p>
                    <a href="apps-ecommerce-products-list" title="All Collection" class="font-medium border-gray-200 dark:border-dark-800 btn btn-outline-gray">
                        Show All Collection
                        <i class="ml-1 align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                        <i class="mr-1 align-baseline ri-arrow-left-line ltr:hidden rtl:inline-block"></i>
                    </a>
                </div>
            </div>
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="(product, index) in featuredProducts" :key="index" class="relative">
                    <div class="relative overflow-hidden bg-gray-100 group/item dark:bg-dark-900/40">
                        <img :src="product.image" alt="" />
                        <div class="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                            <button title="Rating Star Icon" type="button" class="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                                <i class="ri-star-fill"></i>
                            </button>
                        </div>
                        <div v-if="product.discount" class="absolute px-4 py-1 text-red-100 bg-red-500 ltr:left-0 rtl:right-0 before:border-4 before:absolute ltr:before:border-l-transparent rtl:before:border-r-transparent before:border-b-transparent before:size-2 before:-bottom-2 before:border-red-500 ltr:before:right-0 rtl:before:left-0 top-2">
                            {{ product.discount }} OFF
                        </div>
                    </div>
                    <div class="mt-4">
                        <h6 class="mb-1 truncate">
                            <a :href="product.link" class="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">
                                {{ product.name }}
                            </a>
                        </h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            {{ product.price }} <span v-if="product.originalPrice" class="line-through">{{
                                product.originalPrice }}</span>
                        </p>
                    </div>
                </div><!--end col-->
            </div>
        </div>
    </section>
    <!---------- Summer Section------------>
    <a href="#!" title="Banner" class="relative block overflow-hidden py-60 bg-center bg-[url('../images/ecommerce/landing/cta-01.jpg')]">
        <div class="container mx-auto px-4 lg:max-w-[1350px] relative">
            <h2 class="absolute hidden font-bold uppercase md:flex left-4 lg:text-8xl text-white/70">Summer</h2>
            <h2 class="absolute font-bold uppercase left-1/2 lg:right-4 lg:text-8xl text-white/70">Fashion</h2>
        </div>
    </a>

    <!-- The Coastal Edition Section -->
    <section class="relative py-14 md:py-24">
        <div class="container mx-auto px-4 lg:max-w-[1350px]">
            <div class="grid items-center grid-cols-12 mb-10">
                <div class="col-span-12 text-center lg:col-span-6 lg:col-start-4">
                    <h1 class="mb-2 leading-normal capitalize">The Coastal Edition</h1>
                    <p class="text-gray-500 dark:text-dark-500">Clothing is practical and preppy, with plenty of
                        coverage—it's perfect for moms and grandmothers who aren't interested in baring it all in a
                        bikini at the beach.</p>
                </div>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-6" v-for="(product, index) in products" :key="index">
                    <div class="relative">
                        <img :src="product.image" alt="" />
                        <div class="absolute" v-for="(item, itemIndex) in product.description" :key="itemIndex" :style="{ top: item.buttonPosition.top, left: item.buttonPosition.left }">
                            <button @click="toggleDropdown(index, itemIndex)" title="dropdown-button" :aria-expanded="isOpen[index][itemIndex]" class="flex">
                                <div class="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full animate-ping">
                                </div>
                                <div class="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full"></div>
                            </button>

                            <div v-if="isOpen[index][itemIndex]" @click.outside="closeDropdown(index, itemIndex)" class="absolute left-0 right-0 z-10 w-48 p-3 mt-1 bg-white rounded-md shadow-md dark:bg-dark-900">
                                <img :src="item.dropdownImage" alt="" class="object-cover w-full" />
                                <h6 class="mt-3 mb-1 font-medium">
                                    <a href="#!">{{ item.name }}</a>
                                </h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ item.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits You Section -->
    <section class="relative pt-10 pb-10 md:pb-24" id="service">
        <div class="container mx-auto px-4 lg:max-w-[1350px]">
            <div class="grid items-center grid-cols-12 gap-5 lg:gap-8">
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2">
                    <div class="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                        <div class="flex items-center justify-center size-12 shrink-0">
                            <Truck data-lucide="truck" class="text-gray-500 stroke-1 dark:text-dark-500 size-8"></Truck>
                        </div>
                        <div class="overflow-hidden grow">
                            <h6 class="mb-1">Free Shipping</h6>
                            <p class="text-gray-500 truncate dark:text-dark-500">Enjoy free shipping on orders over
                                $149.</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                        <div class="flex items-center justify-center size-12 shrink-0">
                            <Handshake data-lucide="handshake" class="text-gray-500 stroke-1 dark:text-dark-500 size-8">
                            </Handshake>
                        </div>
                        <div class="overflow-hidden grow">
                            <h6 class="mb-1">Money Guarantee</h6>
                            <p class="text-gray-500 truncate dark:text-dark-500">Exchange within 30 days</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                        <div class="flex items-center justify-center size-12 shrink-0">
                            <Headset data-lucide="headset" class="text-gray-500 stroke-1 dark:text-dark-500 size-8">
                            </HeadSet>
                        </div>
                        <div class="overflow-hidden grow">
                            <h6 class="mb-1">Online Help Center</h6>
                            <p class="text-gray-500 truncate dark:text-dark-500">24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2">
                    <div class="flex flex-col gap-3 lg:items-center lg:flex-row md:p-5">
                        <div class="flex items-center justify-center size-12 shrink-0">
                            <CreditCard data-lucide="credit-card" class="text-gray-500 stroke-1 dark:text-dark-500 size-8"></CreditCard>
                        </div>
                        <div class="overflow-hidden grow">
                            <h6 class="mb-1">Flexible Payment Options</h6>
                            <p class="text-gray-500 truncate dark:text-dark-500">Pay Using Multiple Credit Cards</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 text-center lg:col-span-6">
                    <h1 class="relative leading-normal capitalize lg:ltr:pl-5 lg:rtl:pr-5 lg:before:rounded-full drop-shadow-lg lg:before:absolute lg:before:w-1 lg:before:bg-primary-500 lg:before:h-1/2 lg:ltr:before:left-0 lg:rtl:before:right-0">
                        Benefits You Get When Using Our Service</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- vue3-compare-image  -->
    <section class="relative pt-8 pb-14 md:pb-24" id="cta">
        <div class="container mx-auto px-4 lg:max-w-[1350px]">
            <div class="grid items-center grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-6">
                    <div id="beforeAfterImages" class="relative">
                        <VueCompareImage :left-image="leftCompareImage" :right-image="rightCompareImage" />
                        <div class="absolute top-5 left-5">
                            <span class="text-gray-500 bg-white border-transparent badge !text-13">After</span>
                        </div>
                        <div class="absolute bottom-5 right-5">
                            <span class="text-gray-500 bg-white border-transparent badge !text-13">Before</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 text-center md:col-span-6 2xl:col-span-4 2xl:col-start-8">
                    <h1 class="relative mb-3 leading-normal capitalize ltr:pl-5 rtl:pr-5 before:rounded-full drop-shadow-lg before:absolute before:w-1 before:bg-primary-500 before:h-1/2 ltr:before:left-0 rtl:before:right-0">
                        Layer Up with Expertly Designed Pieces</h1>
                    <p class="mb-5 text-gray-500">Discover our collection of meticulously crafted pieces that are
                        perfect for layering. Each item is designed to complement your style and keep you comfortable,
                        no matter the season.</p>
                    <a href="apps-ecommerce-products-grid" title="shop now" class="font-medium border-gray-200 dark:border-dark-800 btn btn-outline-gray">
                        Shop Now
                        <i class="ml-1 align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                        <i class="mr-1 align-baseline ri-arrow-left-line ltr:hidden rtl:inline-block"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Instagram @domiex Section -->
    <section class="relative pt-8">
        <div class="container mx-auto px-4  lg:max-w-[1350px]">
            <div class="mb-8 text-center">
                <h1 class="relative leading-normal capitalize drop-shadow-lg">Follow us Instagram @domiex</h1>
            </div>
        </div>
        <div class="grid items-center grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            <a v-for="(image, index) in instagramImages" :key="index" href="#!" title="Instagram Post" class="relative block group/item">
                <img :src="image.img.href" alt="" />
                <div class="absolute inset-0 transition-all duration-300 opacity-0 bg-gray-950/15 group-hover/item:opacity-100">
                </div>
                <Instagram data-lucide="instagram" class="absolute block text-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 size-8 top-[45%] group-hover/item:top-1/2 group-hover/item:opacity-100 left-1/2">
                </Instagram>
            </a>
        </div>
    </section>

    <!-- Footer -->
    <Footer />
    <ThemeButton />
</template>
<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import TableHead from '../TableHead.vue';
import ProductCard from '../ProductCard.vue';
import { Trash2, Plus, ImagePlus, Minus, Eye } from 'lucide-vue-next';
import { computed, ref } from 'vue';
// import VueSelect from 'vue-select';
import { brandOptions, categoryOptions, sizeOptions, colorOptions, paymentMethods } from './form-data';

const CategorySelected = ref('');

// Ref variables to hold the image URLs for each product image
const imageUrl1 = ref<string | null>(null);
const imageUrl2 = ref<string | null>(null);
const imageUrl3 = ref<string | null>(null);
// Function to handle file selection and conversion to data URL
const fileChosen = (imageNumber: number) => {
    const input = document.getElementById(`logo${imageNumber}`) as HTMLInputElement;
    if (input?.files?.length) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            if (imageNumber === 1) imageUrl1.value = result;
            else if (imageNumber === 2) imageUrl2.value = result;
            else if (imageNumber === 3) imageUrl3.value = result;
        };
    }
};

// Reactive state for the gender, stock, and quantity
const gender = ref<string>('male');
const stock = ref<number>(0);
const quantity = ref<number>(0);
// Methods to increase or decrease stock and quantity

// Reactive state for the selected sizes and colors
const selectedSizes = ref<string[]>([]);
const selectedColors = ref<string[]>([]);
const increaseStock = () => {
    stock.value++;
};

const decreaseStock = () => {
    if (stock.value > 0) stock.value--;
};
const increaseQuantity = () => {
    quantity.value++;
};

const decreaseQuantity = () => {
    if (quantity.value > 0) quantity.value--;
};
// Reactive variables for price, discount, and selling price
const price = ref<number | string>('');
const discount = ref<number | string>("");
const sellingPrice = computed(() => {
    // Parse the price and discount values to ensure they are numbers
    const priceValue = parseFloat(price.value.toString());
    const discountValue = parseFloat(discount.value.toString());

    // If either price or discount is invalid (NaN), return an empty string
    if (isNaN(priceValue) || isNaN(discountValue)) {
        return '00.00';
    }

    // Calculate the selling price after discount
    const discountAmount = (discountValue / 100) * priceValue;
    return (priceValue - discountAmount).toFixed(2);
});


// Watch for changes in price or discount and trigger calculation
const calculateSellingPrice = () => {
    // This will automatically update the selling price via the computed property
};

</script>
<template>
    <PageHeading title="Product Create" sub-title="Ecommerce" />
    <TableHead :firstIcon="Trash2" buttonTitle="Delete" :secondIcon="Plus" title="Add New Products" description="Please fill the below form to create a new product." extraClass="mb-5" />

    <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 xl:col-span-8">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Products Description</h6>
                </div>
                <div class="card-body">
                    <form action="#!">
                        <div class="grid grid-cols-12 gap-5">
                            <div class="col-span-12">
                                <label for="productNameInput" class="form-label">Product Name</label>
                                <input type="text" id="productNameInput" class="form-input" placeholder="Enter product name">
                            </div>
                            <div class="col-span-12">
                                <label for="descriptionTextarea" class="form-label">Description</label>
                                <textarea name="descriptionTextarea" id="descriptionTextarea" rows="3" class="h-auto form-input" placeholder="Enter your description"></textarea>
                            </div>
                            <div class="col-span-4">
                                <label for="categorySelect" class="form-label">Category</label>
                                <select name="" id="" class="form-select">
                                    <option value="">Select</option>
                                    <template v-for="(item, index) in categoryOptions" :key="index">
                                        <option :value="item.value">{{ item.label }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-span-4">
                                <label for="brandTypeSelect" class="form-label">Brand Type</label>
                                <select name="" id="" class="form-select">
                                    <option value="">Select</option>
                                    <template v-for="(item, index) in brandOptions" :key="index">
                                        <option :value="item.value">{{ item.label }}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Products Images</h6>
                </div>
                <div class="card-body">
                    <div class="grid grid-cols-12 gap-5">
                        <!-- Product Image 1 -->
                        <div class="col-span-12 md:col-span-7 md:row-span-2">
                            <div class="h-full">
                                <label for="logo1" class="flex items-center justify-center h-full p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                                    <img v-if="imageUrl1" :src="imageUrl1" class="mx-auto h-60" />
                                    <div v-else class="text-gray-500 dark:text-dark-500">
                                        <ImagePlus data-lucide="image-plus" class="mx-auto"></ImagePlus>
                                        <div class="mt-3">Product Image 1</div>
                                    </div>
                                </label>
                                <div class="hidden mt-4">
                                    <input type="file" name="logo1" id="logo1" @change="fileChosen(1)" class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                                </div>
                            </div>
                        </div>

                        <!-- Product Image 2 -->
                        <div class="col-span-12 md:col-span-5">
                            <div>
                                <label for="logo2" class="flex items-center justify-center h-56 p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                                    <img v-if="imageUrl2" :src="imageUrl2" class="mx-auto h-44" />
                                    <div v-else class="text-gray-500 dark:text-dark-500">
                                        <ImagePlus data-lucide="image-plus" class="mx-auto"></ImagePlus>
                                        <div class="mt-3">Product Image 2</div>
                                    </div>
                                </label>
                                <div class="hidden mt-4">
                                    <input type="file" name="logo2" id="logo2" @change="fileChosen(2)" class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                                </div>
                            </div>
                        </div>

                        <!-- Product Image 3 -->
                        <div class="col-span-12 md:col-span-5">
                            <div>
                                <label for="logo3" class="flex items-center justify-center h-56 p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                                    <img v-if="imageUrl3" :src="imageUrl3" class="mx-auto h-44" />
                                    <div v-else class="text-gray-500 dark:text-dark-500">
                                        <ImagePlus data-lucide="image-plus" class="mx-auto"></ImagePlus>
                                        <div class="mt-3">Product Image 3</div>
                                    </div>
                                </label>
                                <div class="hidden mt-4">
                                    <input type="file" name="logo3" id="logo3" @change="fileChosen(3)" class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Advance Description</h6>
                </div>
                <div class="card-body">
                    <div class="grid grid-cols-12 gap-5">
                        <!-- Gender Selection -->
                        <div class="col-span-12 md:col-span-4">
                            <h6 class="form-label">Select Gender</h6>
                            <div class="flex items-center gap-3">
                                <div class="input-radio-group">
                                    <input id="maleRadio" v-model="gender" type="radio" value="male" class="input-radio input-radio-primary" />
                                    <label for="maleRadio" class="input-radio-label">Male</label>
                                </div>
                                <div class="input-radio-group">
                                    <input id="femaleRadio" v-model="gender" type="radio" value="female" class="input-radio input-radio-primary" />
                                    <label for="femaleRadio" class="input-radio-label">Female</label>
                                </div>
                                <div class="input-radio-group">
                                    <input id="unisexRadio" v-model="gender" type="radio" value="unisex" class="input-radio input-radio-primary" />
                                    <label for="unisexRadio" class="input-radio-label">Unisex</label>
                                </div>
                            </div>
                        </div>
                        <!-- Stock -->
                        <div class="col-span-12 md:col-span-4">
                            <label for="stockInput" class="form-label">Stock</label>
                            <div class="flex input-spin-group input-spin-primary">
                                <button @click="decreaseStock" class="input-spin-minus">
                                    <Minus class="size-4" data-lucide="minus"></Minus>
                                </button>
                                <input type="text" v-model="stock" class="input-spin form-input" readonly id="stockInput" />
                                <button @click="increaseStock" class="input-spin-plus">
                                    <Plus class="size-4" data-lucide="plus"></Plus>
                                </button>
                            </div>
                        </div>
                        <!-- Quantity -->
                        <div class="col-span-12 md:col-span-4">
                            <label for="quantityInput" class="form-label">Quantity</label>
                            <div class="flex input-spin-group input-spin-primary">
                                <button @click="decreaseQuantity" class="input-spin-minus">
                                    <Minus class="size-4" data-lucide="minus"></Minus>
                                </button>
                                <input type="text" v-model="quantity" class="input-spin form-input" readonly id="quantityInput" />
                                <button @click="increaseQuantity" class="input-spin-plus">
                                    <Plus class="size-4" data-lucide="plus"></Plus>
                                </button>
                            </div>
                        </div>
                        <!-- Size Select -->
                        <div class="col-span-12 md:col-span-6">
                            <label for="sizeSelect" class="form-label">Size</label>
                            <select name="" id="" class="form-select">
                                <option value="">Select</option>
                                <template v-for="(item, index) in sizeOptions" :key="index">
                                    <option :value="item.value">{{ item.label }}</option>
                                </template>
                            </select>
                        </div>
                        <!-- Colors Select -->
                        <div class="col-span-12 md:col-span-6">
                            <label for="colorsSelect" class="form-label">Colors</label>
                            <select name="" id="" class="form-select">
                                <option value="">Select</option>
                                <template v-for="(item, index) in colorOptions" :key="index">
                                    <option :value="item.value">{{ item.label }}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Pricing & Sale</h6>
                </div>
                <div class="card-body">
                    <div class="grid grid-cols-12 gap-5">
                        <!-- Price Input -->
                        <div class="col-span-12 md:col-span-3">
                            <label for="priceInput" class="form-label">Price</label>
                            <input type="text" id="priceInput" class="form-input" placeholder="$00.00" v-model="price" @input="calculateSellingPrice" />
                        </div>

                        <!-- Discount Input -->
                        <div class="col-span-12 md:col-span-3">
                            <label for="discountInput" class="form-label">Discount</label>
                            <input type="text" id="discountInput" class="form-input" placeholder="0%" v-model="discount" @input="calculateSellingPrice" />
                        </div>

                        <!-- Selling Price (Calculated) -->
                        <div class="col-span-12 md:col-span-3">
                            <label for="sellingPrice" class="form-label">Selling Price</label>
                            <input type="text" id="sellingPrice" class="form-input" placeholder="$00.00" :value="`$` + sellingPrice" disabled />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Payment Method</h6>
                </div>
                <div class="card-body">
                    <div class="grid grid-cols-12 gap-5">
                        <div v-for="(method, index) in paymentMethods" :key="index" class="col-span-12 md:col-span-4">
                            <label :for="method.id" class="relative block mb-0 cursor-pointer card">
                                <span class="flex items-center gap-3 card-body">
                                    <img :src="method.imgSrc" alt="" class="h-8 shrink-0" />
                                    <span class="block text-base font-semibold grow">{{ method.label }}</span>
                                    <input :id="method.id" class="input-check input-check-primary shrink-0" type="checkbox" v-model="method.checked" />
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4">
            <div class="sticky top-24 card">
                <div class="card-header">
                    <h6 class="card-title">
                        <Eye data-lucide="eye" class="inline-block mr-1 size-4"></Eye> <span class="align-middle">Product Card Preview</span>
                    </h6>
                </div>
                <div class="bg-gray-100 card-body dark:bg-dark-850">
                    <div class="mb-0 card">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { categoryData, type CategoryType } from './category-data';
import { Plus, RotateCcw, Upload } from 'lucide-vue-next';

const props = defineProps({
    isAddProductForm: {
        type: Boolean,
        default: true
    },
    getData: Object,
    setAddModuleValue: Function,
})

// const showAddProductForm = ref(true); // Show add form by default
const showAddProductForm = ref(props.isAddProductForm); // Show add form by default

interface Errors {
    [key: string]: string | null;
}
const productForm = ref<CategoryType>({
    productID: '',
    image: '',
    category: '',
    description: '',
    status: '',
    products: '',
});
watch(() => props.getData, (newData) => {
    if (newData) {
        productForm.value = props.getData as CategoryType
    }
})
watch(() => props.isAddProductForm, (newData) => {
    showAddProductForm.value = newData
})

const errors = ref<Errors>({
    categoryName: null,
    description: null,
    status: null,
});

// Handle image file input
const fileChosen = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files[0]) {
        const file = input.files[0];
        productForm.value.image = URL.createObjectURL(file); // Set the image URL for preview
    }
};

// Validate form fields
const validateField = (fieldName: string, fieldValue: string, errorMessage: string) => {
    if (!fieldValue || (Array.isArray(fieldValue) && fieldValue.length === 0)) {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
};

// Validate the entire form
const validateForm = () => {
    errors.value = {};
    validateField('categoryName', productForm.value.category, 'Category Name is required');
    validateField('description', productForm.value.description, 'Description is required');
    validateField('status', productForm.value.status, 'Status is required');
    return Object.keys(errors.value).length === 0;
};

// Reset the form
const resetForm = () => {
    errors.value = {};
    productForm.value = {
        productID: '',
        image: '',
        category: '',
        description: '',
        status: '',
        products: '',
    };
};

// Add new category
const addCategory = () => {
    const productID = (19115 + categoryData.value.length); // Generate a new category ID
    const products = 0
    const newCategory = { ...productForm.value, productID, products };
    categoryData.value.unshift(newCategory); // Insert the new category at the beginning
    resetForm(); // Reset the form after adding
};

// Edit existing category (to be used if editing is enabled)
const updateCategory = () => {
    const index = categoryData.value.findIndex(cat => cat.productID === productForm.value.productID);
    if (index !== -1) {
        categoryData.value[index] = { ...productForm.value }; // Update the existing category
    }
    resetForm(); // Reset the form after updating
};
// Submit the form
const submitForm = () => {
    if (validateForm()) {
        if (showAddProductForm.value) {
            addCategory();
        } else {
            updateCategory();
        }
        if (props.setAddModuleValue) props.setAddModuleValue(true)
    }
};
</script>
<template>
    <div class="col-span-12 lg:col-span-5 xl:col-span-4">
        <div class="sticky top-24 card">
            <div class="card-header">
                <h6 class="card-title">{{ showAddProductForm ? 'Add New Category' : 'Edit Category' }}</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <!-- Image Upload -->
                    <div class="col-span-12">
                        <div>
                            <label for="logo" class="flex items-center justify-center p-2 mx-auto overflow-hidden bg-gray-100 border border-gray-200 rounded cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-32">
                                <img v-if="productForm.image" :src="productForm.image" class="object-cover w-full h-full" />
                                <span v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <Upload data-lucide="upload"></upload>
                                    <span class="block mt-2">Upload Images</span>
                                </span>
                            </label>
                            <div class="hidden mt-4">
                                <label class="block">
                                    <span class="sr-only">Choose profile photo</span>
                                    <input type="file" name="logo" id="logo" @change="fileChosen" class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Category Name -->
                    <div class="col-span-12">
                        <label for="categoryNameInput" class="form-label">Category Name</label>
                        <input type="text" id="categoryNameInput" class="form-input" placeholder="Category name" v-model="productForm.category" @input="validateField('categoryName', productForm.category, 'Category Name is required')" />
                        <span v-if="errors.categoryName" class="text-red-500">{{ errors.categoryName }}</span>
                    </div>

                    <!-- Description -->
                    <div class="col-span-12">
                        <label for="descriptionTextarea" class="form-label">Description</label>
                        <textarea name="descriptionTextarea" id="descriptionTextarea" rows="3" class="h-auto form-input" placeholder="Enter your description" v-model="productForm.description" @input="validateField('description', productForm.description, 'Description is required')"></textarea>
                        <span v-if="errors.description" class="text-red-500">{{ errors.description }}</span>
                    </div>

                    <!-- Status -->
                    <div class="col-span-12">
                        <label for="statusSelect" class="form-label">Status</label>
                        <select id="statusSelect" v-model="productForm.status" @change="validateField('status', productForm.status, 'Status is required.')" class="form-select" placeholder="Select">
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                    </div>

                    <!-- Buttons -->
                    <div class="flex items-center justify-end col-span-12 gap-2">
                        <button class="btn btn-sub-gray" @click="resetForm()">
                            <RotateCcw class="inline-block ltr:!mr-1 rtl:!ml-1 align-center size-4" /> <span class="align-middle">Reset</span>
                        </button>
                        <button class="btn btn-primary" @click="submitForm">
                            <span class="align-middle">{{ showAddProductForm ? 'Add Category' : 'Edit Category'
                            }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

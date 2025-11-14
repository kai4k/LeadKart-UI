<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    addPageVisible: Boolean,
    setAddPageVisibleValue: Function
})
interface Book {
    title: string;
    author: string;
    image: string;
    rating: number;
    reviewCount: number;
    price: number | string;
    type: string;
}

// const addBookModal = ref(false);
const books = ref<Book[]>([]);
const bookForm = ref<Book>({
    title: '',
    author: '',
    image: '',
    rating: 0,
    reviewCount: 0,
    price: '',
    type: 'Newest',
});
const errors = ref<Record<string, string>>({});
const imageUrl = ref<string | null>(null);

const closeModal = () => {
    if (props.setAddPageVisibleValue) props.setAddPageVisibleValue(false)
    resetForm();
};

const resetForm = () => {
    bookForm.value = {
        title: '',
        author: '',
        image: '',
        rating: 0,
        reviewCount: 0,
        price: '',
        type: 'Newest',
    };
    errors.value = {};
    imageUrl.value = null;
};

const validateField = (field: keyof Book, value: string | number, errorMessage: string) => {
    if (!value) {
        errors.value[field] = errorMessage;
    } else {
        delete errors.value[field];
    }
};

const validateForm = () => {
    validateField('title', bookForm.value.title, 'Title is required.');
    validateField('author', bookForm.value.author, 'Author is required.');
    validateField('price', bookForm.value.price, 'Price is required.');
    validateField('image', bookForm.value.image, 'Image is required.');
    return Object.keys(errors.value).length === 0;
};

const addBook = () => {
    if (validateForm()) {
        books.value.unshift({ ...bookForm.value });
        closeModal();
    }
};

const fileChosen = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        bookForm.value.image = URL.createObjectURL(file);
        imageUrl.value = bookForm.value.image;
        validateField('image', bookForm.value.image, 'Image is required.');
    }
};
</script>
<template>
    <div id="addBookModal" v-if="addPageVisible" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Add Book</h6>
                <button @click="closeModal" class="link link-red">
                    <i data-lucide="x" class="size-5"></i>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="addBook">
                    <div class="grid grid-cols-12 gap-space">
                        <!-- Book Image Upload -->
                        <div class="col-span-12">
                            <div class="text-center">
                                <label for="logo">
                                    <div
                                        class="flex items-center justify-center bg-gray-100 border rounded-md cursor-pointer h-44 dark:bg-dark-850 dark:border-dark-800">
                                        <img v-if="imageUrl" :src="imageUrl" alt="Book Poster"
                                            class="object-cover w-full h-full" />
                                        <div v-else class="text-gray-500 dark:text-dark-500">
                                            <i data-lucide="upload"></i>
                                            <p class="mt-2">Book Poster</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="file" id="logo" class="hidden" @change="fileChosen" />
                                <span v-if="errors.image" class="text-red-500">{{ errors.image }}</span>
                            </div>
                        </div>

                        <!-- Book Title -->
                        <div class="col-span-12">
                            <label for="bookTitleInput" class="form-label">Book Title</label>
                            <input type="text" id="bookTitleInput" class="form-input" placeholder="Enter book title"
                                v-model="bookForm.title"
                                @input="validateField('title', bookForm.title, 'Title is required.')" />
                            <span v-if="errors.title" class="text-red-500">{{ errors.title }}</span>
                        </div>

                        <!-- Writer Name -->
                        <div class="col-span-12">
                            <label for="writerNameInput" class="form-label">Writer Name</label>
                            <input type="text" id="writerNameInput" class="form-input" placeholder="Enter writer name"
                                v-model="bookForm.author"
                                @input="validateField('author', bookForm.author, 'Author is required.')" />
                            <span v-if="errors.author" class="text-red-500">{{ errors.author }}</span>
                        </div>

                        <!-- Price -->
                        <div class="col-span-12">
                            <label for="priceInput" class="form-label">Price</label>
                            <input type="number" id="priceInput" class="form-input" placeholder="$00.00"
                                v-model="bookForm.price"
                                @input="validateField('price', bookForm.price, 'Price is required.')" />
                            <span v-if="errors.price" class="text-red-500">{{ errors.price }}</span>
                        </div>

                        <!-- Buttons -->
                        <div class="col-span-12">
                            <div class="flex justify-end gap-2">
                                <button type="button" class="btn btn-active-red" @click="closeModal">
                                    <i data-lucide="x" class="size-4"></i>
                                    Close
                                </button>
                                <button type="submit" class="btn btn-primary">Add Book</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
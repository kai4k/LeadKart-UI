<script setup lang="ts">
import { Mail, MoveLeft, MoveRight, Phone } from 'lucide-vue-next';
import { ref } from 'vue';

interface FormData {
    name: string;
    place: string;
    email: string;
    product: string;
    reply: string;
}

const formData = ref<FormData>({
    name: '',
    place: '',
    email: '',
    product: '',
    reply: ''
});

const handleSubmit = () => {
    // Handle form submission (could be an API call, validation, etc.)
};
</script>
<template>
    <div
        class="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <!-- Left Section: Form -->
        <div class="col-span-12 lg:col-span-7">
            <div
                class="flex items-center h-screen border-gray-200 lg:ltr:border-r lg:rtl:border-l dark:border-dark-800">
                <div class="flex items-center h-full py-10 overflow-y-auto">
                    <div class="px-8 md:px-20">
                        <h1 class="mb-3 leading-normal xl:w-2/3">Before we start, we'd like to get to know you better
                        </h1>
                        <form @submit.prevent="handleSubmit" class="mb-5 xl:w-2/3">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12">
                                    <label for="nameInput" class="form-label">Your Name</label>
                                    <input type="text" id="nameInput" v-model="formData.name"
                                        class="bg-transparent form-input dark:bg-transparent"
                                        placeholder="Enter your name" required />
                                </div>
                                <div class="col-span-6">
                                    <label for="yourPlaceInput" class="form-label">Your Place</label>
                                    <input type="text" id="yourPlaceInput" v-model="formData.place"
                                        class="bg-transparent form-input dark:bg-transparent" placeholder="Your Place"
                                        required />
                                </div>
                                <div class="col-span-6">
                                    <label for="emailAddressInput" class="form-label">Email Address</label>
                                    <input type="email" id="emailAddressInput" v-model="formData.email"
                                        class="bg-transparent form-input dark:bg-transparent"
                                        placeholder="support@example.com" required />
                                </div>
                                <div class="col-span-12">
                                    <label for="productCompanyInput" class="form-label">Product Or Company</label>
                                    <input type="text" id="productCompanyInput" v-model="formData.product"
                                        class="bg-transparent form-input dark:bg-transparent"
                                        placeholder="What is the name of your product or company?" required />
                                </div>
                                <div class="col-span-12">
                                    <label for="textareaInput2" class="form-label">Your Reply</label>
                                    <textarea id="textareaInput2" v-model="formData.reply" rows="3"
                                        class="h-auto bg-transparent form-input dark:bg-transparent"
                                        placeholder="Enter your description" required></textarea>
                                </div>
                            </div>
                        </form>
                        <div class="flex flex-wrap gap-2">
                            <router-link to="pages-contact-us" class="btn btn-outline-gray">
                                <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></MoveLeft>
                                <MoveRight class="ml-1 ltr:hidden rtl:inline-block size-4"></MoveRight>
                                Back
                            </router-link>
                            <router-link to="pages-contact-us-three" class="btn btn-primary">
                                Start Your Own
                                <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                                <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></MoveLeft>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Section: Contact Information -->
        <div class="col-span-12 lg:col-span-5">
            <div class="flex flex-col justify-center w-full px-8 pb-10 md:px-20 lg:pb-0 lg:h-screen">
                <div class="mx-auto xl:w-2/3">
                    <img src="@/assets/images/avatar/user-16.png" alt=""
                        class="mx-auto rounded-md shadow-lg size-32 shrink-0">
                    <div class="mt-5 text-center grow">
                        <h5 class="mb-1">SRBThemes Infotech LLP</h5>
                        <p class="mb-3 text-gray-500 dark:text-dark-500">IT Company</p>
                        <p class="mb-6">But most of all, I have been a Product Designer & Development for nearly 8+
                            years.</p>
                        <ul class="space-y-2">
                            <li>
                                <Mail class="inline-block mr-1 text-gray-500 dark:text-dark-500 size-4"></Mail>
                                <a href="mailto:support@example.com"
                                    class="ml-1 transition duration-200 ease-linear hover:text-primary-500">support@example.com</a>
                            </li>
                            <li>
                                <Phone class="inline-block mr-1 text-gray-500 dark:text-dark-500 size-4"></Phone> +(231)
                                12345
                                67890
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
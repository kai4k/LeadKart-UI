<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref } from 'vue';
const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function,
})
// Reactive modal visibility
// const isModalVisible = ref(true);

// Form state
interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    description: string;
}

const form = ref<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    description: '',
});

// Close modal function
const closeModal = () => {
    // isModalVisible.value = false;
    if (props.setShowModuleValue) props.setShowModuleValue(false)
};

// Form submission
const submitForm = () => {
    alert('Message Sent!');
    closeModal();
};
</script>
<template>
    <div v-if="showModule" id="contactModal" class="modal">
        <div class="modal-wrap modal-center modal-2xl">
            <div class="p-0 modal-content">
                <div class="grid grid-cols-12">
                    <!-- Left Section -->
                    <div class="relative flex flex-col justify-end col-span-4 p-8 bg-gray-50 h-100 rounded-l-md">
                        <img src="@/assets/images/others/mail.png" alt="" class="absolute left-0 top-10" />
                        <div>
                            <img src="@/assets/images/main-logo.png" alt="" class="h-8" />
                            <p class="mt-3 text-gray-500">
                                Whether you need help with customization, troubleshooting, or general inquiries, don't
                                hesitate to reach out to us.
                            </p>
                        </div>
                    </div>

                    <!-- Right Section -->
                    <div class="col-span-8 p-8">
                        <button @click="closeModal" class="link link-red float-end">
                            <X data-lucide="x" class="size-5"></X>
                        </button>
                        <h5 class="mb-1">Feel free to connect with us.</h5>
                        <p class="text-gray-500">
                            Our team is here to assist you with any questions or issues you may encounter while using
                            our admin template.
                        </p>

                        <form @submit.prevent="submitForm">
                            <div class="grid grid-cols-12 gap-5 mt-5">
                                <div class="col-span-6">
                                    <label for="firstNameInput" class="block mb-2 text-sm font-medium">First
                                        Name</label>
                                    <input type="text" id="firstNameInput" v-model="form.firstName" class="form-input"
                                        required />
                                </div>
                                <div class="col-span-6">
                                    <label for="lastNameInput" class="block mb-2 text-sm font-medium">Last Name</label>
                                    <input type="text" id="lastNameInput" v-model="form.lastName" class="form-input"
                                        required />
                                </div>
                                <div class="col-span-12">
                                    <label for="emailInput" class="block mb-2 text-sm font-medium">Email</label>
                                    <input type="email" id="emailInput" v-model="form.email" class="form-input"
                                        required />
                                </div>
                                <div class="col-span-12">
                                    <label for="phomenoInput" class="block mb-2 text-sm font-medium">Phone No</label>
                                    <input type="tel" id="phomenoInput" v-model="form.phoneNo" class="form-input"
                                        required />
                                </div>
                                <div class="col-span-12">
                                    <label for="descriptionInput"
                                        class="block mb-2 text-sm font-medium">Description</label>
                                    <textarea id="descriptionInput" v-model="form.description" rows="3"
                                        class="h-auto form-input" required></textarea>
                                </div>
                                <div class="col-span-12">
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>
</template>
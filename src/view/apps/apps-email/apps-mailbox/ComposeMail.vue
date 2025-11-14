<script setup lang="ts">
import { ref } from 'vue';

const showComposeModal = ref(false)
const emailForm = ref({
    email: '',
    subject: '',
    message: '',
});
const sendNewMail = () => {
    // You can replace this with actual email sending logic
    // Reset the form after sending
    emailForm.value = {
        email: '',
        subject: '',
        message: '',
    };
};
</script>
<template>
    <div id="addComposeModals" class="modal" v-if="showComposeModal">
        <div class="modal-wrap modal-top modal-lg">
            <div class="modal-content">
                <div>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-500 dark:text-dark-500">To:</p>
                        <input type="email" class="h-auto px-0 border-0 form-input" placeholder="Type email"
                            v-model="emailForm.email" />
                        <a href="#!" class="link link-primary">Cc</a>
                        <a href="#!" class="link link-primary">Bcc</a>
                    </div>
                </div>
                <div class="py-2 border-gray-200 dark:border-dark-800 border-y">
                    <input type="text" class="h-auto p-0 border-0 form-input" placeholder="Subject"
                        v-model="emailForm.subject" />
                </div>
                <div>
                    <textarea class="h-auto px-0 border-0 resize-none form-input" rows="3"
                        placeholder="Type something ..." v-model="emailForm.message"></textarea>
                    <div class="flex items-center gap-3 mt-2">
                        <div class="shrink-0">
                            <label for="sendImages" class="btn btn-active-gray btn-icon">
                                <i data-lucide="image" class="size-5"></i>
                            </label>
                            <input type="file" id="sendImages" class="hidden" />
                        </div>
                        <button type="button" class="link link-primary shrink-0">
                            <i data-lucide="link" class="size-5"></i>
                        </button>
                        <button type="button" class="link link-primary shrink-0">
                            <i data-lucide="pencil" class="size-5"></i>
                        </button>
                        <button type="button" class="mr-auto link link-yellow shrink-0">
                            <i data-lucide="smile" class="size-5"></i>
                        </button>
                        <button type="button" class="btn btn-sub-gray shrink-0">Draft</button>
                        <button type="button" class="btn btn-primary shrink-0" @click="sendNewMail">Send
                            Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="showComposeModal = false"></div>
    </div>
</template>
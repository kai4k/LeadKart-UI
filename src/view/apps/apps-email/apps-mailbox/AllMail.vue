<script setup lang="ts">
import { ref, defineProps, } from 'vue';
import { Archive, ArrowLeft, ChevronLeft, ChevronRight, Clock3, Download, FileText, Image, OctagonAlert, Reply, Trash2 } from 'lucide-vue-next';
import simplebar from 'simplebar-vue';
import { emailData, type Email } from './email-data'; // Assume this imports your email data

const props = defineProps({
    showMailModal: Boolean,
    setMailModal: Function,
    dataOfMail: {
        type: Object,
        default: () => ({}),
    },
    showDeleteModal: Function,
});

// Reactive variables
const activeEmail = ref<null | Email>(emailData.value[0]); // Initially set to null
const mailform = ref({ email: '', message: '' });

// Set the active email when the component is mounted
const setActiveEmail = (id: number) => {
    const email = emailData.value.find(e => e.id === id) || null;
    activeEmail.value = email;
};

// Back to list function
const BackToList = (state: boolean) => {
    if (props.setMailModal) {
        props.setMailModal(state);
    }
};

function showDeleteCom(state: boolean) {
    if (props.showDeleteModal) {
        props.showDeleteModal(state)
    }
}

// Navigation functions
const prevButton = () => {
    const currentIndex = emailData.value.findIndex(email => email.id === activeEmail.value?.id);
    if (currentIndex > 0) {
        setActiveEmail(emailData.value[currentIndex - 1].id);
    }
};

const nextButton = () => {
    const currentIndex = emailData.value.findIndex(email => email.id === activeEmail.value?.id);
    if (currentIndex < emailData.value.length - 1) {
        setActiveEmail(emailData.value[currentIndex + 1].id);
    }
};

// Send email reply function
const sendEmailReply = () => {
    // Logic to send email reply
};

</script>
<template>
    <div class="ltr:xl:rounded-l-none rtl:xl:rounded-r-none card grow" v-show="showMailModal">
        <div class="flex flex-col gap-2 md:items-center md:flex-row card-header">
            <div class="flex items-center gap-1">
                <a href="#!" class="btn btn-icon btn-active-gray" @click="BackToList(false)">
                    <ArrowLeft data-lucide="arrow-left" class="size-4"></ArrowLeft>
                </a>
                <a href="#!" class="btn btn-icon btn-active-gray">
                    <Archive data-lucide="archive" class="size-4"></Archive>
                </a>
                <a href="#!" class="btn btn-icon btn-active-gray">
                    <OctagonAlert data-lucide="octagon-alert" class="size-4"></OctagonAlert>
                </a>
            </div>
            <div class="flex items-center gap-1 text-gray-500 md:mx-auto dark:text-dark-500">
                <a href="#!" @click="prevButton()">
                    <ChevronLeft data-lucide="chevron-left" class="size-4"></ChevronLeft>
                </a>
                <p>
                    <span>{{ activeEmail?.id || 1 }}</span> of <span>{{ emailData.length }}</span>
                </p>
                <a href="#!" @click="nextButton()">
                    <ChevronRight data-lucide="chevron-right" class="size-4"></ChevronRight>
                </a>
            </div>
            <div class="flex items-center gap-1">
                <a href="#!" class="btn btn-icon btn-active-gray">
                    <Reply data-lucide="reply" class="size-4"></Reply>
                </a>
                <a href="#!" class="btn btn-icon btn-active-gray">
                    <Clock3 data-lucide="clock-3" class="size-4"></Clock3>
                </a>
                <a href="#!" class="btn btn-icon btn-active-red" v-on:click="showDeleteCom(true)">
                    <Trash2 data-lucide="trash-2" class="size-4"></Trash2>
                </a>
            </div>
        </div>

        <simplebar data-simplebar class="h-[27rem]">
            <div class="card-body" v-if="activeEmail">
                <div>
                    <div class="flex items-center gap-2">
                        <div
                            class="flex items-center justify-center text-red-500 rounded-full bg-red-500/10 shrink-0 size-10">
                            <template v-if="activeEmail.avatarImage">
                                <img :src="activeEmail.avatarImage" alt="" class="rounded-full">
                            </template>
                            <template v-else>
                                <span>{{ activeEmail.avatarText }}</span>
                            </template>
                        </div>
                        <div class="grow">
                            <h6>{{ activeEmail.sender }}</h6>
                            <a href="#!" class="link link-primary">{{ activeEmail.email }}</a>
                        </div>
                        <p class="text-xs text-gray-500 dark:text-dark-500 shrink-0">{{ activeEmail.date }}</p>
                    </div>
                    <div class="mt-5">
                        <h6 class="mb-3">{{ activeEmail.subject }}</h6>
                        <div class="space-y-2">
                            <p>{{ activeEmail.message }}</p>
                        </div>
                        <div class="grid grid-cols-1 gap-5 mt-4 md:grid-cols-2" v-if="activeEmail.attachments">
                            <div v-for="(attachment, index) in activeEmail.attachments" :key="index">
                                <a href="#!"
                                    class="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                                    <div
                                        class="flex items-center justify-center font-semibold text-gray-500 transition duration-200 ease-linear bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 shrink-0 size-10">
                                        <FileText data-lucide="file-text" class="size-4"></FileText>
                                    </div>
                                    <div class="grow">
                                        <h6>{{ attachment.name }}</h6>
                                        <p class="text-sm text-gray-500 dark:text-dark-500">{{ attachment.size }}</p>
                                    </div>
                                    <div class="shrink-0">
                                        <Download data-lucide="download"
                                            class="text-gray-500 dark:text-dark-500 dark:fill-dark-850 size-5 fill-gray-200">
                                        </Download>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <p class="mt-4">Best regards,</p>
                        <p>{{ activeEmail.sender }}</p>
                    </div>
                </div>

                <div>
                    <template v-for="reply in activeEmail.replies" :key="reply.id">
                        <div class="mt-4">
                            <div class="flex items-center gap-2">
                                <div
                                    class="flex items-center justify-center text-green-500 bg-green-100 rounded-full shrink-0 size-10">
                                    <template v-if="reply.avatarImage">
                                        <img :src="reply.avatarImage" alt="" class="rounded-full">
                                    </template>
                                    <template v-else>
                                        <span>{{ reply.avatarText }}</span>
                                    </template>
                                </div>
                                <div class="grow">
                                    <h6>{{ reply.sender }}</h6>
                                    <a href="#!" class="link link-primary">{{ reply.email }}</a>
                                </div>
                                <p class="text-xs text-gray-500 shrink-0">{{ reply.date }}</p>
                            </div>
                            <div class="mt-5">
                                <h6 class="mb-3">{{ reply.subject }}</h6>
                                <div class="space-y-2">
                                    <p>{{ reply.message }}</p>
                                </div>
                                <p class="mt-4">Best regards,</p>
                                <p>{{ reply.sender }}</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </simplebar>

        <!-- Mail form for reply -->
        <div class="card-body">
            <div class="mb-0 shadow-none card">
                <form @submit.prevent="sendEmailReply">
                    <div class="p-4">
                        <div class="flex items-center gap-2">
                            <p class="text-gray-500 dark:text-dark-500">To:</p>
                            <input type="text" class="h-auto p-0 border-0 form-input" placeholder="Type email"
                                v-model="mailform.email">
                            <a href="#!" class="link link-primary">Cc</a>
                            <a href="#!" class="link link-primary">Bcc</a>
                        </div>
                    </div>
                    <div class="p-4 pt-1 card-body">
                        <textarea class="h-auto p-0 border-0 resize-none form-input" rows="3"
                            placeholder="Type something ..." v-model="mailform.message"></textarea>
                        <div class="flex flex-wrap items-center gap-3">
                            <div class="shrink-0">
                                <label for="sendImages" class="btn btn-active-gray btn-icon">
                                    <Image data-lucide="image" class="size-5"></Image>
                                </label>
                                <input type="file" id="sendImages" class="hidden">
                            </div>
                            <button type="button" class="link link-primary">Attach</button>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
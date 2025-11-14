<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import userImage from '@/assets/images/avatar/user-1.png'
const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function,
    overviewData: Object
})
// Define the structure of a contact
interface Contact {
    image: string;
    contactName: string;
    company: string;
    role: string;
    email: string;
    phoneNumber: string;
    website: string;
    status: string;
}

// Reactive state
const isActive = ref(false);  // For follow/unfollow state
const loadingButton = ref(false);  // For loading state of the button

// Example contact data (this would typically come from props, an API call, or be dynamic)
const selectedContact = ref<Contact>({
    image: userImage,
    contactName: 'Chris Wilson',
    company: 'TechCorp',
    role: 'Software Engineer',
    email: 'chris.wilson@gmail.com',
    phoneNumber: '+1234567890',
    website: 'www.chrisw.com',
    status: 'Active'
});

watch(() => props.overviewData, (newData) => {
    selectedContact.value = { ...newData } as Contact
})

const closeModal = () => {
    if (props.setShowModuleValue) props.setShowModuleValue(false);
};

const openEditModal = () => {
};

const toggleFollowStatus = () => {
    loadingButton.value = true;
    setTimeout(() => {
        loadingButton.value = false;
        isActive.value = !isActive.value;
    }, 2000);  // Simulate a network delay
};

// Computed properties for contact information
const contactInfo = computed(() => ({
    company: selectedContact.value.company,
    role: selectedContact.value.role,
    email: selectedContact.value.email,
    phoneNumber: selectedContact.value.phoneNumber,
    website: selectedContact.value.website,
    status: selectedContact.value.status,
}));

// Icons and labels mapping
const contactInfoIcons = {
    company: 'briefcase',
    role: 'building-2',
    email: 'mail',
    phoneNumber: 'phone',
    website: 'globe',
    status: 'gem'
};

const contactInfoLabels = {
    company: 'Company Name',
    role: 'Role',
    email: 'Email',
    phoneNumber: 'Phone Number',
    website: 'Website',
    status: 'Status'
};
</script>
<template>
    <div>
        <!-- Contact Overview Modal -->
        <div id="contactOverviewModal" class="modal" :class="{ 'd-block': showModule }" v-show="showModule">
            <div class="modal-wrap modal-center">
                <div class="p-2 modal-content">
                    <div
                        class="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20">
                    </div>
                    <div class="p-4">
                        <div class="flex">
                            <div class="relative inline-block -mt-16 rounded-full ltr:mr-auto rtl:ml-auto shrink-0">
                                <img :src="selectedContact.image || userImage" alt="" class="rounded-full size-24" />
                                <div
                                    class="absolute bg-green-500 border-2 border-white dark:border-dark-900 rounded-full bottom-2.5 size-4 ltr:right-2.5 rtl:left-2.5">
                                </div>
                            </div>
                            <div class="shrink-0">
                                <button @click="toggleFollowStatus" :class="['btn', 'btn-pink', 'btn-icon-text']">
                                    <span class="flex items-center gap-2" v-if="!isActive">
                                        <i class="ri-user-add-line"></i> Follow
                                    </span>
                                    <span class="flex items-center gap-2" v-if="isActive">
                                        <i class="ri-user-unfollow-line"></i> UnFollow
                                    </span>
                                    <svg v-if="loadingButton" class="text-white size-4 animate-spin"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h6 class="mt-3">{{ selectedContact.contactName }}</h6>
                        <span class="mb-3 text-gray-500 dark:text-dark-500">{{ selectedContact.role }}</span> at
                        <span href="#!" class="text-primary-500">{{ selectedContact.company }}</span>

                        <p class="mb-3 text-gray-500 dark:text-dark-500">Overview</p>

                        <div class="space-y-3">
                            <div class="flex items-center gap-2" v-for="(value, key) in contactInfo" :key="key">
                                <div class="w-48 font-medium shrink-0">
                                    <i :data-lucide="contactInfoIcons[key]"
                                        class="inline-block text-gray-500 dark:text-dark-500 size-4"></i>
                                    <span class="align-baseline">{{ contactInfoLabels[key] }}</span>
                                </div>
                                <p v-if="key === 'email'">
                                    <a :href="'mailto:' + selectedContact.email">{{ selectedContact.email }}</a>
                                </p>
                                <p v-else-if="key === 'website'">
                                    <a :href="'https://' + selectedContact.website">{{ selectedContact.website }}</a>
                                </p>
                                <p v-else>{{ value }}</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-2 mt-5">
                            <button type="button" class="btn btn-active-red" @click="closeModal">
                                <i data-lucide="x" class="inline-block size-4"></i> <span
                                    class="align-baseline">Close</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="openEditModal">
                                <i data-lucide="pencil" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></i> Edit Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
        </div>
    </div>
</template>
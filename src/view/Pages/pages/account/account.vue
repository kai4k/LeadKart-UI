<script setup lang="ts">
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import { tabs } from './user-personal-details';
import { ref } from 'vue';
import currentPhoto from '@/assets/images/avatar/user-17.png'
import { Upload } from 'lucide-vue-next';
import { userProfileDetails } from '@/store/defaultDetails';

const activeTab = ref('account')
// const currentPhoto = '@/assets/images/avatar/user-17.png';
const photoPreview = ref<string | null>(null);

const handlePhotoChange = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        photoPreview.value = URL.createObjectURL(file);
    }
};

const updateProfile = () => {
};
// Reactive state for the switches
const isPublicProfile = ref(false);
const isContactInfoPublic = ref(false);
const firstName = ref(userProfileDetails.value.name.split(" ")[0] || "");
const lastName = ref(userProfileDetails.value.name.split(" ").slice(1).join(" "))

// State to track confirmation modal or action
const isDeleting = ref(false);

// Method to handle delete action
const confirmDelete = () => {
    const confirmed = window.confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
    );
    if (confirmed) {
        isDeleting.value = true;
        deleteAccount();
    }
};

// Simulate delete action
const deleteAccount = () => {
    // Add your API call or deletion logic here
    setTimeout(() => {
        isDeleting.value = false;
    }, 2000); // Simulating a delay
};
</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" :activeTab="activeTab" />
    <div class="mt-5 card">
        <div class="card-body">
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 xl:col-span-3">
                    <h6 class="card-title">Personal Information</h6>
                </div>
                <!--end col-->
                <div class="col-span-12 xl:col-span-9">
                    <form @submit.prevent="updateProfile">
                        <div class="grid grid-cols-12 gap-5">
                            <div class="col-span-12">
                                <div>
                                    <div class="shrink-0" v-if="!photoPreview">
                                        <img class="object-cover rounded-md size-20" :src="currentPhoto" alt="Current profile photo" />
                                    </div>
                                    <div class="shrink-0" v-if="photoPreview">
                                        <img :src="photoPreview" class="object-cover rounded-md size-20" alt="Selected profile photo" />
                                    </div>
                                    <label class="block mt-4">
                                        <span class="sr-only">Choose profile photo</span>
                                        <input type="file" @change="handlePhotoChange" class="hidden" />
                                        <span class="btn btn-sub-primary">
                                            <Upload class="inline-block size-4 me-1"></Upload>
                                            <span class="ml-1 align-middle">Upload Profile</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6">
                                <label for="firstNameInput" class="form-label">First Name</label>
                                <input type="text" id="firstNameInput" class="form-input" v-model="firstName" placeholder="Enter your first name" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6">
                                <label for="lastNameInput" class="form-label">Last Name</label>
                                <input type="text" id="lastNameInput" class="form-input" v-model="lastName" placeholder="Enter your last name" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                                <label for="roleInput" class="form-label">Role</label>
                                <input type="text" id="roleInput" class="form-input" v-model="userProfileDetails.designation" placeholder="Enter your role" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                                <label for="birthDateInput" class="form-label">Birth of Date</label>
                                <input type="date" id="birthDateInput" class="form-input" v-model="userProfileDetails.DOB" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                                <label for="joiningDateInput" class="form-label">Joining Date</label>
                                <input type="date" id="joiningDateInput" class="form-input" v-model="userProfileDetails.DOJ" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                                <label for="emailInput" class="form-label">Email Address</label>
                                <input type="email" id="emailInput" class="form-input" v-model="userProfileDetails.email" placeholder="example@domain.com" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                                <label for="phoneNumberInput" class="form-label">Phone Number</label>
                                <input type="number" id="phoneNumberInput" class="form-input" v-model="userProfileDetails.phoneNumber" placeholder="+(00) 00000 00000" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                                <label for="locationInput" class="form-label">Location</label>
                                <input type="text" id="locationInput" class="form-input" v-model="userProfileDetails.location" placeholder="Enter location" />
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6">
                                <label for="languageSelect" class="form-label">Language</label>
                                <select id="languageSelect" class="form-select" v-model="userProfileDetails.language">
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                </select>
                            </div>
                            <!--end col-->
                            <div class="col-span-12 md:col-span-6">
                                <label for="currencySelect" class="form-label">Currency</label>
                                <select id="currencySelect" class="form-select" v-model="userProfileDetails.currency">
                                    <option value="USD">USD</option>
                                    <option value="ARS">ARS</option>
                                </select>
                            </div>
                            <!--end col-->
                            <div class="col-span-12">
                                <label for="textareaInput2" class="form-label">Objective</label>
                                <textarea name="textareaInput2" id="textareaInput2" rows="3" class="h-auto form-input" v-model="userProfileDetails.objective" placeholder="Write your objective"></textarea>
                            </div>
                            <!--end col-->
                            <div class="col-span-12 text-right">
                                <button type="submit" class="btn btn-primary">
                                    Update Profile
                                </button>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end grid-->
                    </form>
                </div>
                <!--end col-->
            </div>
            <!--end grid-->
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="grid grid-cols-12 gap-3 lg:gap-0">
                <div class="col-span-12 xl:col-span-3">
                    <h6 class="card-title">Public Account</h6>
                </div>
                <!--end col-->
                <div class="col-span-12 xl:col-span-9">
                    <div class="items-center gap-3 md:flex">
                        <div class="grow">
                            <h6 class="mb-1">Publish your contact information publicly.</h6>
                            <p class="text-gray-500 dark:text-dark-500">
                                Allow anyone viewing your profile to access your contact information.
                            </p>
                        </div>
                        <label class="switch-group">
                            <div class="relative">
                                <input type="checkbox" id="publicProfile" class="hidden sr-only peer" v-model="isPublicProfile" />
                                <div class="switch-wrapper"></div>
                                <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary">
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="items-center gap-3 mt-4 md:flex">
                        <div class="grow">
                            <h6 class="mb-1">Make Contact Info Public</h6>
                            <p class="text-gray-500 dark:text-dark-500">
                                Allow anyone viewing your profile to access your contact information.
                            </p>
                        </div>
                        <label class="switch-group">
                            <div class="relative">
                                <input type="checkbox" id="publicProfile2" class="hidden sr-only peer" v-model="isContactInfoPublic" />
                                <div class="switch-wrapper"></div>
                                <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary">
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end grid-->
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Delete Account</h6>
        </div>
        <div class="card-body">
            <p class="mb-3 text-gray-500 dark:text-dark-500">
                Please proceed with caution, as deleting your account and all associated data from our organization is a
                permanent action and cannot be undone.
            </p>
            <button class="btn btn-red" @click="confirmDelete">
                Delete Account
            </button>
        </div>
    </div>
</template>
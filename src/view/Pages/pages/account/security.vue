<script setup lang="ts">
import UserProfileHEader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import QrComponent from './QrComponent.vue';
import { tabs } from './user-personal-details';
import { ref } from 'vue';
import { CircleCheckBig, Eye, EyeOff, MoveLeft, MoveRight } from 'lucide-vue-next';


const activeTab = ref('security')

// Reactive state
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

// Toggle visibility for each input
const toggleVisibility = (field: string) => {
    switch (field) {
        case 'current':
            showCurrentPassword.value = !showCurrentPassword.value;
            break;
        case 'new':
            showNewPassword.value = !showNewPassword.value;
            break;
        case 'confirm':
            showConfirmPassword.value = !showConfirmPassword.value;
            break;
    }
};

// Handle form submission
const updatePassword = () => {
    if (newPassword.value !== confirmPassword.value) {
        alert('New password and confirm password do not match.');
        return;
    }
};
// Reactive state for modal visibility and OTP
const showQrModule = ref(false);
const setQrModuleValue = (stats: boolean) => {
    showQrModule.value = stats
}

</script>
<template>
    <UserProfileHEader />
    <ProfileTapBar :tabs=tabs :activeTab=activeTab />
    <h6 class="mt-5 mb-1 text-16">Security</h6>
    <p class="mb-5 text-gray-500 dark:text-dark-500"><a href="#!" class="underline transition duration-300 ease-linear text-primary-500 hover:text-primary-600">Learn More</a>
        about securing your account from external and unknown intrusion.
    </p>
    <div class="card">
        <div class="grid grid-cols-12 card-body">
            <div class="col-span-12 md:col-span-9">
                <h6 class="mb-1">Account Security</h6>
                <p class="mb-2 text-gray-500 dark:text-dark-500">
                    Secured Account means any account for which the related obligor has pledged assets or made a cash
                    collateral deposit as security for payment of receivables that arise in such an account.
                </p>
                <a href="#!" class="underline link text-primary-500 dark:text-primary-500 hover:text-primary-600">
                    Learn More
                    <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                    <MoveLeft class="ml-1 ltr:hidden rtl:inline-block size-4"></MoveLeft>
                </a>
            </div>
            <div class="col-span-12 md:col-span-3">
                <img src="@/assets/images/others/security.png" alt="Security" class="block h-24 mx-auto mt-5 md:mt-0 ltr:md:ml-auto rtl:md:mr-auto" />
            </div>
        </div>
    </div>
    <div class="card">
        <div class="gap-3 md:flex card-body">
            <div class="flex-shrink-0">
                <div class="flex items-center gap-2">
                    <img src="@/assets/images/others/google.png" alt="Google" class="size-5" />
                    <h6>Google Authentication</h6>
                </div>
            </div>
            <div class="flex-grow my-3 md:my-0">
                <p class="mb-3 text-gray-500 dark:text-dark-500">
                    If you set up 2-Step Verification, you can use the Google Authenticator app to generate codes. You
                    can still generate codes without internet connection or mobile service. Learn more about
                    <a href="#!" class="transition duration-300 ease-linear text-primary-500 hover:text-primary-600">
                        2-Step Verification.
                    </a>
                </p>
                <span class="badge badge-green">
                    <CircleCheckBig class="inline-block ltr:mr-1 rtl:ml-1 size-3" /> <span class="align-middle">Connected</span>
                </span>
            </div>
            <div class="flex-shrink-0">
                <button type="button" @click="showQrModule = true" class="btn btn-sub-gray">
                    Enable
                </button>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Update Password</h6>
        </div>
        <div class="card-body">
            <p class="mb-3 text-gray-500 dark:text-dark-500">
                To change your password, please enter your current password.
            </p>
            <form @submit.prevent="updatePassword">
                <!-- Current Password -->
                <div class="mb-5">
                    <label for="currentPasswordInput" class="form-label">Current Password</label>
                    <div class="relative">
                        <input :type="showCurrentPassword ? 'text' : 'password'" id=" currentPasswordInput" v-model="currentPassword" class="ltr:pr-8 rtl:pl-8 form-input" autocomplete="off" placeholder="Enter current password" />
                        <button type="button" @click="toggleVisibility('current')" title="password" class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-none">
                            <Eye v-if="showCurrentPassword" class="size-5"></Eye>
                            <EyeOff v-else class="size-5"></EyeOff>
                        </button>
                    </div>
                </div>

                <!-- New Password -->
                <div class="mb-5">
                    <label for="newPasswordInput" class="form-label">New Password</label>
                    <div class="relative">
                        <input :type="showNewPassword ? 'text' : 'password'" id="newPasswordInput" v-model="newPassword" class="ltr:pr-8 rtl:pl-8 form-input" autocomplete="off" placeholder="New password" />
                        <button type="button" @click="toggleVisibility('new')" title="new-password" class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-none">
                            <Eye v-if="showNewPassword" class="size-5"></Eye>
                            <EyeOff v-else class="size-5"></EyeOff>
                        </button>
                    </div>
                </div>

                <!-- Confirm New Password -->
                <div class="mb-5">
                    <label for="confirmPasswordInput" class="form-label">Confirm New Password</label>
                    <div class="relative">
                        <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPasswordInput" v-model="confirmPassword" class="ltr:pr-8 rtl:pl-8 form-input" autocomplete="off" placeholder="Confirm password" />
                        <button type="button" @click="toggleVisibility('confirm')" title="confirm password" class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-none">
                            <Eye v-if="showConfirmPassword" class="size-5"></Eye>
                            <EyeOff v-else class="size-5"></EyeOff>
                        </button>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="flex items-center justify-end gap-2">
                    <button type="submit" class="btn btn-primary">Update Password</button>
                </div>
            </form>
        </div>
    </div>
    <!-- QR Component  -->
    <QrComponent :showModule="showQrModule" :setModuleValue="setQrModuleValue" />
</template>
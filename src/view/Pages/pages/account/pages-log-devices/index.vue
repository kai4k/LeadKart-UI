<script setup lang="ts">
//@ts-ignore
import { ref } from 'vue';
import { tabs, devices } from '../user-personal-details';
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import LogoutModal from './LogoutModal.vue';
//@ts-ignore
import { ChevronRight, MoveRight } from 'lucide-vue-next';
const showLogoutModal = ref<boolean>(false);
const setLogoutModalValue = (stats: boolean) => {
    showLogoutModal.value = stats;
}

</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="logs" />
    <div class="mt-5 card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Device and active sessions</h6>
            <button type="button" @click="showLogoutModal = true" class="flex px-3 py-1.5 text-xs font-medium btn-sub-gray btn">
                All Logouts
                <MoveRight class="inline-block ml-2 size-4"/>
            </button>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
                <div v-for="device in devices" :key="device.id" class="mb-0 card">
                    <div class="flex items-center gap-3 card-body">
                        <div class="flex items-center justify-center size-12 shrink-0">
                            <component :is="device.icon" :class="device.status === 'Online' ? 'text-green-500 fill-green-500/10' : 'text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850'">
                            </component>
                        </div>
                        <div class="grow">
                            <h6 class="mb-1">
                                {{ device.name }}
                                <span :class="['!text-xs ltr:ml-1 rtl:mr-1', device.status === 'Online' ? 'badge badge-green' : 'badge badge-gray']">
                                    {{ device.status }}
                                </span>
                            </h6>
                            <p class="text-sm text-gray-500 dark:text-dark-500">{{ device.location }} - {{ device.ip }}
                            </p>
                        </div>
                        <div class="dropdown shrink-0">
                            <button x-ref="button" x-on:click="toggle()" type="button" class="flex link link-primary">
                                <ChevronRight></ChevronRight>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <LogoutModal :showModule="showLogoutModal" :setShowModuleValue="setLogoutModalValue" title="All Devices Logout" description="Are you sure you want to log out from all device?" />
</template>
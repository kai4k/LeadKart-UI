<script setup lang="ts">
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import { tabs } from './user-personal-details';
import { reactive } from 'vue';

interface Notification {
    id: string;
    label: string;
    checked: boolean;
}

const notificationsType = reactive<any>([
    {
        notificationsTitle: "Receive notifications about new activities in projects you're involved in",
        notificationTime: [
            { id: 'notification1', label: 'New comments by others comments', checked: true },
            { id: 'notification2', label: 'Comments for your tasks', checked: false },
            { id: 'notification3', label: 'New tasks assigned to you', checked: false },
            { id: 'notification4', label: 'Tasks completed (For tasks you created or assigned to)', checked: false },
            { id: 'notification5', label: 'You are mentioned in a project, task, etc.', checked: false },
            { id: 'notification6', label: "Change in status of a task you're", checked: false },
            { id: 'notification7', label: 'Added new projects', checked: false },
        ],
    },
    {
        notificationsTitle: "Get notified wherever you are",
        notificationTime: [
            { id: 'notification11', label: 'Email notifications', checked: true },
            { id: 'notification12', label: 'Notifications via domiex', checked: true },
            { id: 'notification13', label: 'Browser push notifications', checked: true },
        ],
    },


]);
</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="notification" />
    <div class="items-center gap-3 mt-5 md:flex">
        <div class="grow">
            <h6 class="mb-1 text-16 grow">Notifications</h6>
            <p class="text-gray-500 dark:text-dark-500">Where would you like to receive notifications?</p>
        </div>
        <div class="shrink-0">
            <a href="#!" class="font-medium underline link link-primary">Reset to Default Settings</a>
        </div>
    </div>
    <template v-for="(notifications, index) in notificationsType" :key="index">
        <div class="mt-5 card">
            <div class="card-header">
                <h6 class="card-title">{{ notifications.notificationsTitle }}</h6>
            </div>
            <div class="space-y-4 card-body">
                <div v-for="(notification, index) in notifications.notificationTime" :key="notification.id"
                    class="flex items-center gap-2">
                    <label :for="notification.id" class="mb-0 cursor-pointer form-label grow">
                        {{ notification.label }}
                    </label>
                    <label :for="notification.id" class="switch-group">
                        <div class="relative">
                            <input type="checkbox" :id="notification.id" class="sr-only peer"
                                v-model="notification.checked" />
                            <div class="switch-wrapper"></div>
                            <div
                                class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary">
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </template>
</template>
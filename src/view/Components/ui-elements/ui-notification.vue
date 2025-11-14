<script setup lang="ts">
import { ref } from 'vue';

interface Toast {
    id: number;
    type: 'success' | 'info' | 'warning' | 'error';
    text: string;
}

const toasts = ref<Toast[]>([]);

const showToast = (type: 'success' | 'info' | 'warning' | 'error', text: string) => {
    const newToast: Toast = { id: Date.now(), type, text };
    toasts.value.push(newToast);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
        removeToast(newToast.id);
    }, 3000);
};

const removeToast = (id: number) => {
    const index = toasts.value.findIndex((toast) => toast.id === id);
    if (index !== -1) {
        toasts.value.splice(index, 1);
    }
};

interface Notification {
    id: number;
    position: string;
    message: string;
}

const notifications = ref<Notification[]>([]);

const triggerNotification = (position: string, message: string) => {
    const newNotification: Notification = { id: Date.now(), position, message };
    notifications.value.push(newNotification);

    // Auto-remove notification after 1.5 seconds
    setTimeout(() => {
        dismissNotification(newNotification.id);
    }, 1500);
};

const dismissNotification = (id: number) => {
    const index = notifications.value.findIndex((notification) => notification.id === id);
    if (index !== -1) {
        notifications.value.splice(index, 1);
    }
};


interface ToastNotification {
    id: number;
    title: string;
    details: string;
}

const toastList = ref<ToastNotification[]>([]);

const addToastNotification = (title: string, details: string) => {
    const toast: ToastNotification = {
        id: Date.now(),
        title,
        details,
    };
    toastList.value.push(toast);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        removeToastNotification(toast.id);
    }, 5000);
};

const removeToastNotification = (id: number) => {
    const index = toastList.value.findIndex((toast) => toast.id === id);
    if (index !== -1) {
        toastList.value.splice(index, 1);
    }
};
</script>
<template>
    <pageHeading title="Notification" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic Notification</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <button @click="showToast('success', '🔥 Your success message!')" class="btn btn-green">
                        Success
                    </button>
                    <button @click="showToast('info', 'Your Info message!')" class="btn btn-sky">
                        Info
                    </button>
                    <button @click="showToast('warning', '🪄 Your Warning message!')" class="btn btn-yellow">
                        Warning
                    </button>
                    <button @click="showToast('error', '😵 Your error message!')" class="btn btn-red">
                        Error
                    </button>
                </div>

                <!-- Toast Notifications -->
                <div class="fixed z-50 space-y-2 bottom-10 right-10">
                    <div v-for="toast in toasts" :key="toast.id" class="cursor-pointer alert" :class="{
                        'alert-solid-green': toast.type === 'success',
                        'alert-solid-sky': toast.type === 'info',
                        'alert-solid-yellow': toast.type === 'warning',
                        'alert-solid-red': toast.type === 'error',
                    }" @click="removeToast(toast.id)">
                        {{ toast.text }}
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Position Notification</h6>
            </div>
            <div class="flex flex-wrap items-center gap-2 card-body">
                <!-- Top Left Button -->
                <button @click="triggerNotification('top-left', 'You have successfully completed this task!')" class="btn btn-primary">
                    Top Left
                </button>

                <!-- Top Center Button -->
                <button @click="triggerNotification('top-center', 'You have successfully completed this task!')" class="btn btn-primary">
                    Top Center
                </button>

                <!-- Top Right Button -->
                <button @click="triggerNotification('top-right', 'You have successfully completed this task!')" class="btn btn-primary">
                    Top Right
                </button>

                <!-- Bottom Left Button -->
                <button @click="triggerNotification('bottom-left', 'You have successfully completed this task!')" class="btn btn-primary">
                    Bottom Left
                </button>

                <!-- Bottom Center Button -->
                <button @click="triggerNotification('bottom-center', 'You have successfully completed this task!')" class="btn btn-primary">
                    Bottom Center
                </button>

                <!-- Bottom Right Button -->
                <button @click="triggerNotification('bottom-right', 'You have successfully completed this task!')" class="btn btn-primary">
                    Bottom Right
                </button>
            </div>

            <!-- Notification Messages -->
            <div class="fixed z-[9999] space-y-2" :class="{
                'top-5 left-5': notification.position === 'top-left',
                'top-5 left-1/2 transform -translate-x-1/2': notification.position === 'top-center',
                'top-5 right-5': notification.position === 'top-right',
                'bottom-5 left-5': notification.position === 'bottom-left',
                'bottom-5 left-1/2 transform -translate-x-1/2': notification.position === 'bottom-center',
                'bottom-5 right-5': notification.position === 'bottom-right'
            }" v-for="notification in notifications" :key="notification.id">
                <div class="py-3 text-sm text-white transition-all duration-300 ease-in-out transform rounded-md ltr:pl-5 rtl:pr-5 bg-gradient-to-r from-primary-500 to-primary-600 ltr:pr-9 rtl:pl-9 max-w-96">
                    <span>{{ notification.message }}</span>
                    <a href="javascript:void(0);" @click="dismissNotification(notification.id)" class="absolute text-lg transition duration-200 ease-linear text-primary-300 hover:text-primary-50 ltr:right-4 rtl:left-4 top-2">
                        <i class="ri-close-fill"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Content Toast</h6>
            </div>
            <div class="flex items-center gap-2 card-body">
                <button @click="addToastNotification(
                    'You have successfully completed this thing!',
                    'Those who successfully complete the programme will be awarded a certificate of achievement. You can concentrate and successfully complete a project that just days ago would have looked too difficult.'
                )" class="btn btn-purple">
                    Content Toast
                </button>

                <!-- Toast Notifications -->
                <div v-for="toast in toastList" :key="toast.id" class="fixed text-sm transition-all duration-300 ease-in-out transform bg-white rounded-md shadow-lg top-5 z-[1055] ltr:right-5 rtl:left-5 max-w-96 shadow-gray-300 dark:bg-dark-900 dark:shadow-dark-900">
                    <div class="flex items-center p-3 border-b border-gray-200 dark:border-dark-800 ltr:pr-9 rtl:pl-9">
                        <h6>{{ toast.title }}</h6>
                        <a href="javascript:void(0);" @click="removeToastNotification(toast.id)" class="absolute text-lg link link-red ltr:right-4 rtl:left-4 top-2">
                            <i class="ri-close-fill"></i>
                        </a>
                    </div>
                    <div class="p-3">
                        <p class="text-gray-500 dark:text-dark-500">{{ toast.details }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

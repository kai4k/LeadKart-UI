<script setup lang="ts">
import { AlertTriangle, CheckSquare } from 'lucide-vue-next';
import pageHeading from '@/components/common/PageHeading.vue';
import { ref, shallowRef } from 'vue';
import { RiCloseFill, RiAlertLine, RiCheckboxLine, RiSpam2Line } from "vue-remix-icons";

interface Alert {
    text: string;
    color: string;
    closeBtn: string;
}

const alerts = ref<Alert[]>([
    { text: 'Primary Alerts', color: 'alert-primary', closeBtn: 'text-primary-400 hover:text-primary-500' },
    { text: 'Purple Alerts', color: 'alert-purple', closeBtn: 'text-purple-400 hover:text-purple-500' },
    { text: 'Green Alerts', color: 'alert-green', closeBtn: 'text-green-400 hover:text-green-500' },
    { text: 'Red Alerts', color: 'alert-red', closeBtn: 'text-red-400 hover:text-red-500' },
    { text: 'Yellow Alerts', color: 'alert-yellow', closeBtn: 'text-yellow-400 hover:text-yellow-500' },
    { text: 'Sky Alerts', color: 'alert-sky', closeBtn: 'text-sky-400 hover:text-sky-500' },
    { text: 'Pink Alerts', color: 'alert-pink', closeBtn: 'text-pink-400 hover:text-pink-500' },
    { text: 'Indigo Alerts', color: 'alert-indigo', closeBtn: 'text-indigo-400 hover:text-indigo-500' },
    { text: 'Orange Alerts', color: 'alert-orange', closeBtn: 'text-orange-400 hover:text-orange-500' },
    { text: 'Dark Alerts', color: 'alert-gray', closeBtn: 'text-gray-400 hover:text-gray-500' },
]);

const removeAlert = (index: number) => {
    alerts.value.splice(index, 1);
};

const softAlerts = ref<Alert[]>([
    { text: 'Primary Alerts', color: 'alert-sub-primary', closeBtn: 'text-primary-400 hover:text-primary-500' },
    { text: 'Purple Alerts', color: 'alert-sub-purple', closeBtn: 'text-purple-400 hover:text-purple-500' },
    { text: 'Green Alerts', color: 'alert-sub-green', closeBtn: 'text-green-400 hover:text-green-500' },
    { text: 'Red Alerts', color: 'alert-sub-red', closeBtn: 'text-red-400 hover:text-red-500' },
    { text: 'Yellow Alerts', color: 'alert-sub-yellow', closeBtn: 'text-yellow-400 hover:text-yellow-500' },
    { text: 'Sky Alerts', color: 'alert-sub-sky', closeBtn: 'text-sky-400 hover:text-sky-500' },
    { text: 'Pink Alerts', color: 'alert-sub-pink', closeBtn: 'text-pink-400 hover:text-pink-500' },
    { text: 'Indigo Alerts', color: 'alert-sub-indigo', closeBtn: 'text-indigo-400 hover:text-indigo-500' },
    { text: 'Orange Alerts', color: 'alert-sub-orange', closeBtn: 'text-orange-400 hover:text-orange-500' },
    { text: 'Dark Alerts', color: 'alert-sub-gray', closeBtn: 'text-gray-400 hover:text-gray-500' },
]);
const removeSoftAlerts = (index: number) => {
    softAlerts.value.splice(index, 1);
}

const outlineAlerts = ref<Alert[]>([
    { text: 'Primary Alerts', color: 'alert-outline-primary', closeBtn: 'text-primary-400 hover:text-primary-500' },
    { text: 'Purple Alerts', color: 'alert-outline-purple', closeBtn: 'text-purple-400 hover:text-purple-500' },
    { text: 'Green Alerts', color: 'alert-outline-green', closeBtn: 'text-green-400 hover:text-green-500' },
    { text: 'Red Alerts', color: 'alert-outline-red', closeBtn: 'text-red-400 hover:text-red-500' },
    { text: 'Yellow Alerts', color: 'alert-outline-yellow', closeBtn: 'text-yellow-400 hover:text-yellow-500' },
    { text: 'Sky Alerts', color: 'alert-outline-sky', closeBtn: 'text-sky-400 hover:text-sky-500' },
    { text: 'Pink Alerts', color: 'alert-outline-pink', closeBtn: 'text-pink-400 hover:text-pink-500' },
    { text: 'Indigo Alerts', color: 'alert-outline-indigo', closeBtn: 'text-indigo-400 hover:text-indigo-500' },
    { text: 'Orange Alerts', color: 'alert-outline-orange', closeBtn: 'text-orange-400 hover:text-orange-500' },
    { text: 'Dark Alerts', color: 'alert-outline-gray', closeBtn: 'text-gray-400 hover:text-gray-500' },
]);
const removeOutlineAlerts = (index: number) => {
    outlineAlerts.value.splice(index, 1);
}

interface solidAlerts {
    text: string;
    color: string;
}
const solidAlerts = ref<solidAlerts[]>([
    { text: 'Primary Alerts', color: 'alert-solid-primary' },
    { text: 'Purple Alerts', color: 'alert-solid-purple' },
    { text: 'Green Alerts', color: 'alert-solid-green' },
    { text: 'Red Alerts', color: 'alert-solid-red' },
    { text: 'Yellow Alerts', color: 'alert-solid-yellow' },
    { text: 'Sky Alerts', color: 'alert-solid-sky' },
    { text: 'Pink Alerts', color: 'alert-solid-pink' },
    { text: 'Indigo Alerts', color: 'alert-solid-indigo' },
    { text: 'Orange Alerts', color: 'alert-solid-orange' },
    { text: 'Dark Alerts', color: 'alert-solid-gray' },
]);

const removeSolidAlert = (index: number) => {
    solidAlerts.value.splice(index, 1);
};

interface IconsAlerts {
    text: string;
    icon: string | unknown;
    class: string;
    iconBorder: string;
    closeColor: string;
    isOpen: boolean;
}

const iconsAlerts = shallowRef<IconsAlerts[]>([
    {
        text: 'Primary Alerts',
        icon: AlertTriangle,
        class: 'alert-primary',
        iconBorder: 'border-primary-200 dark:border-primary-500/30',
        closeColor: 'text-primary-400 hover:text-primary-500',
        isOpen: true,
    },
    {
        text: 'Green Alerts',
        icon: CheckSquare,
        class: 'alert-green',
        iconBorder: 'border-green-200 dark:border-green-500/30',
        closeColor: 'text-green-400 hover:text-green-500',
        isOpen: true,
    },
    {
        text: 'Purple Alerts',
        icon: CheckSquare,
        class: 'alert alert-solid-purple',
        iconBorder: 'border-purple-400/50',
        closeColor: 'text-purple-400 hover:text-purple-200',
        isOpen: true,
    },
    {
        text: 'Yellow Alerts',
        icon: CheckSquare,
        class: 'alert alert-sub-yellow',
        iconBorder: 'border-yellow-200 dark:border-yellow-500/30',
        closeColor: 'text-yellow-400 hover:text-yellow-500',
        isOpen: true,
    },
]);

const iconsAlertClose = (index: number) => {
    iconsAlerts.value[index].isOpen = false;
};

const gradientAlerts = ref([
    {
        text: 'Primary Gradient Alerts',
        gradient: 'from-primary-500 to-primary-700',
        closeColor: 'text-primary-400 hover:text-primary-200',
        isOpen: true,
    },
    {
        text: 'Purple Gradient Alerts',
        gradient: 'from-purple-500 to-purple-700',
        closeColor: 'text-purple-400 hover:text-purple-200',
        isOpen: true,
    },
    {
        text: 'Gradient Alerts',
        gradient: 'from-primary-500 to-green-500',
        closeColor: 'text-green-300 hover:text-green-100',
        isOpen: true,
    },
    {
        text: 'Gradient Alerts',
        gradient: 'from-primary-950 to-red-950',
        closeColor: 'text-red-400 hover:text-red-200',
        isOpen: true,
    },
]);

const gradientAlertsClose = (index: number) => {
    gradientAlerts.value[index].isOpen = false;
};


const isOpen = ref(false);

const showAlert = () => {
    isOpen.value = true;
    setTimeout(() => {
        isOpen.value = false;
    }, 7000);
};
interface AlertData {
    isOpen: boolean
    title: string
    message: string
    color: 'sky' | 'green' | 'yellow' | 'red'
    colorDark: string
    icon: Object
    actionText: string
}

const cardAlerts = ref<AlertData[]>([
    {
        isOpen: true,
        title: 'New update available!',
        message:
            'Some new updates are available. Refresh this page to get the new updates now. It is recommended to always have the latest version available.',
        color: 'sky',
        colorDark: 'fill-sky-900',
        icon: AlertTriangle,
        actionText: 'Refresh'
    },
    {
        isOpen: true,
        title: 'Ready to publish?',
        message:
            'Publishing this project will make it publicly visible. You can reverse this action anytime here.',
        color: 'green',
        colorDark: 'fill-green-900',
        icon: AlertTriangle,
        actionText: 'Publish Now'
    },
    {
        isOpen: true,
        title: 'Are you sure?',
        message:
            'This will bulk update all the names of the tasks selected. You can reverse this action in the activity log.',
        color: 'yellow',
        colorDark: 'fill-yellow-900',
        icon: AlertTriangle,
        actionText: 'Yes, Update'
    },
    {
        isOpen: true,
        title: 'Are you sure?',
        message:
            'This will delete all your latest tasks and other important information. If you don’t want this you can always archive this.',
        color: 'red',
        colorDark: 'fill-red-950',
        icon: AlertTriangle,
        actionText: 'Yes, Delete'
    }
]);
const cardAlertClose = (index: number) => {
    cardAlerts.value[index].isOpen = false;
};


interface basicAlert {
    title: string;
    message: string;
    icon: string | unknown;
    colorClass: string;
    actionText: string;
    action: () => void;
}

const basicAlerts = ref<basicAlert[]>([
    {
        title: 'Info',
        message: 'The pdf is getting ready for you, just sit back and relax.',
        icon: 'ri-spam-2-line',
        colorClass: 'bg-sky-500',
        actionText: 'Great',
        action: () => console.log('Great action performed'),
    },
    {
        title: 'Attention',
        message: 'Your are about to delete 40 Posts are you sure ?',
        icon: 'ri-spam-2-line',
        colorClass: 'bg-red-500',
        actionText: 'Delete Now',
        action: () => console.log('Delete action performed'),
    },
    {
        title: 'Success',
        message: 'The action that you done was a success! great success.',
        icon: 'ri-alert-line',
        colorClass: 'bg-green-500',
        actionText: 'Successful Login',
        action: () => console.log('Login success action performed'),
    },
    {
        title: 'Warning',
        message: 'The action you are doing will change the process in some ways.',
        icon: 'ri-alert-line',
        colorClass: 'bg-yellow-500',
        actionText: 'Warning',
        action: () => console.log('Warning action performed'),
    },
]);

const handleClose = (index: number) => {
    alerts.value.splice(index, 1);
};

const handleAction = (action: () => void) => {
    action();
};
</script>
<template>
    <pageHeading title="Alerts" sub-title="UI" />
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-space">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Basic Alerts</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-2">
                    <div v-for="(alert, index) in alerts" :key="index" :class="`${alert.color} alert`">
                        <span>{{ alert.text }}</span>
                        <a href="javascript:void(0);" @click="removeAlert(index)" class="btn-close">
                            <i class="ri-close-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Soft Alerts</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-2 ">
                    <div v-for="(alert, index) in softAlerts" :key="index" :class="`${alert.color} alert`">
                        <span>{{ alert.text }}</span>
                        <a href="javascript:void(0);" @click="removeSoftAlerts(index)" :class="`${alert.closeBtn} btn-close`">
                            <i class="ri-close-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Outline Alerts</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-2">
                    <div v-for="(alert, index) in outlineAlerts" :key="index" :class="`${alert.color} alert`">
                        <span>{{ alert.text }}</span>
                        <a href="javascript:void(0);" @click="removeOutlineAlerts(index)" :class="`${alert.closeBtn} btn-close`">
                            <i class="ri-close-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Solid Alerts</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-2">
                    <div v-for="(alert, index) in solidAlerts" :key="index" :class="`${alert.color} alert`">
                        <span>{{ alert.text }}</span>
                        <a href="javascript:void(0);" @click="removeSolidAlert(index)" class="btn-close">
                            <i class="ri-close-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Icons with Alerts</h6>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
                <div v-for="(alert, index) in iconsAlerts" :key="index" v-show="alert.isOpen" :class="`alert alert-icon ${alert.class}`">
                    <div :class="`icon ${alert.iconBorder}`">
                        <component :is="alert.icon" :class="`size-4`" />
                    </div>
                    <span>{{ alert.text }}</span>
                    <a href="javascript:void(0);" @click="iconsAlertClose(index)" :class="`${alert.closeColor} btn-close`">
                        <i class="ri-close-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Gradient Alerts</h6>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
                <div v-for="(alert, index) in gradientAlerts" :key="index" v-show="alert.isOpen" :class="`text-white border-none bg-gradient-to-r ${alert.gradient} alert`">
                    <span>{{ alert.text }}</span>
                    <a href="javascript:void(0);" @click="gradientAlertsClose(index)" :class="`${alert.closeColor} btn-close`">
                        <i class="ri-close-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Live Alerts</h6>
        </div>
        <div class="card-body">
            <div>
                <button @click="showAlert" class="text-white bg-primary-500 border-primary-500 btn hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600">
                    Live Alert
                </button>
                <div v-if="isOpen" class="fixed -translate-x-1/2 alert alert-primary top-5 z-[1055] left-1/2">
                    <span>You have successfully completed this thing!</span>
                    <a href="javascript:void(0);" @click="isOpen = false" class="text-primary-400 hover:text-primary-500 btn-close">
                        <i class="ri-close-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Icons Alerts</h6>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-2 xl:grid-cols-2">
                <div v-for="(alert, index) in cardAlerts" v-show="alert.isOpen" :key="index" :class="[
                    'border-gray-200 alert alert-border dark:border-dark-800',
                    `!border-t-${alert.color}-500`,
                    `dark:!border-t-${alert.color}-500`
                ]">
                    <button @click="alert.isOpen = false" :class="`btn-close link link-${alert.color}`">
                        <i class="ri-close-fill"></i>
                    </button>

                    <div :class="[
                        'flex items-center justify-center border rounded-full size-11 shrink-0',
                        `border-${alert.color}-500/20`
                    ]">
                        <component :is="alert.icon" :class="`size-5 text-${alert.color}-500 fill-${alert.color}-100 dark:fill-${alert.colorDark}`"></component>
                    </div>

                    <div class="mt-3 grow sm:mt-0">
                        <h6 class="mb-1">{{ alert.title }}</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            {{ alert.message }}
                        </p>
                        <div class="flex items-center justify-end gap-3 mt-3">
                            <button @click="alert.isOpen = false" class="btn btn-active-gray">
                                Close
                            </button>
                            <button :class="`btn btn-${alert.color}`">
                                {{ alert.actionText }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Basic Alerts</h6>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
                <div v-for="(alert, index) in basicAlerts" :key="index" class="relative overflow-hidden text-sm border border-gray-200 rounded-md dark:border-dark-800">
                    <div :class="['h-9', alert.colorClass]"></div>
                    <div class="relative p-5 text-center">
                        <div :class="['absolute flex items-center justify-center w-10 h-10 text-lg text-white -translate-x-1/2 border-4 border-white rounded-full dark:border-dark-900', alert.colorClass, '-top-5 left-1/2']">
                            <i :class="alert.icon"></i>
                        </div>
                        <h6 class="mt-4 mb-1">{{ alert.title }}</h6>
                        <p class="mb-4 text-gray-500 dark:text-dark-500">{{ alert.message }}</p>
                        <div class="flex items-center justify-center gap-3">
                            <button class="btn btn-active-gray" @click="handleClose(index)">Close</button>
                            <button :class="['btn text-white', alert.colorClass]" @click="handleAction(alert.action)">{{
                                alert.actionText }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.pl0 {
    padding-left: 0 !important;
}
</style>
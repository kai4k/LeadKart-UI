<script setup lang="ts">
import { RiFacebookFill, RiInstagramLine, RiTwitchLine, RiTwitterLine, RiUserAddLine, RiUserUnfollowLine } from 'vue-remix-icons';
import pageHeading from '@/components/common/PageHeading.vue';
import { ref, shallowRef } from 'vue';
import { Trash, User, Wrench } from 'lucide-vue-next';

interface Button {
    text: string;
    color: string;
}

const baseButtons = ref<Button[]>([
    { text: 'Primary', color: 'btn-primary' },
    { text: 'Purple', color: 'btn-purple' },
    { text: 'Green', color: 'btn-green' },
    { text: 'Red', color: 'btn-red' },
    { text: 'Yellow', color: 'btn-yellow' },
    { text: 'Sky', color: 'btn-sky' },
    { text: 'Pink', color: 'btn-pink' },
    { text: 'Indigo', color: 'btn-indigo' },
    { text: 'Orange', color: 'btn-orange' },
    { text: 'Dark', color: 'btn-gray' },
    { text: 'Light', color: 'bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 hover:text-gray-800 hover:border-gray-300 focus:bg-gray-300 focus:text-gray-800 focus:border-gray-300' },
]);

const outlineButtons = ref<Button[]>([
    { text: 'Primary', color: 'btn-outline-primary' },
    { text: 'Purple', color: 'btn-outline-purple' },
    { text: 'Green', color: 'btn-outline-green' },
    { text: 'Red', color: 'btn-outline-red' },
    { text: 'Yellow', color: 'btn-outline-yellow' },
    { text: 'Sky', color: 'btn-outline-sky' },
    { text: 'Pink', color: 'btn-outline-pink' },
    { text: 'Indigo', color: 'btn-outline-indigo' },
    { text: 'Orange', color: 'btn-outline-orange' },
    { text: 'Dark', color: 'btn-outline-gray' },
    { text: 'Light', color: 'bg-transparent text-gray-500 border-gray-200 hover:bg-gray-200 hover:text-gray-500 hover:border-gray-200 focus:bg-gray-200 focus:text-gray-500 focus:border-gray-200' },
]);

const softButtons = ref<Button[]>([
    { text: 'Primary', color: 'btn-sub-primary' },
    { text: 'Purple', color: 'btn-sub-purple' },
    { text: 'Green', color: 'btn-sub-green' },
    { text: 'Red', color: 'btn-sub-red' },
    { text: 'Yellow', color: 'btn-sub-yellow' },
    { text: 'Sky', color: 'btn-sub-sky' },
    { text: 'Pink', color: 'btn-sub-pink' },
    { text: 'Indigo', color: 'btn-sub-indigo' },
    { text: 'Orange', color: 'btn-sub-orange' },
    { text: 'Dark', color: 'btn-sub-gray' },
]);


const DButtons = ref<Button[]>([
    { text: 'Primary', color: 'btn-3d-primary' },
    { text: 'Purple', color: 'btn-3d-purple' },
    { text: 'Green', color: 'btn-3d-green' },
    { text: 'Red', color: 'btn-3d-red' },
    { text: 'Yellow', color: 'btn-3d-yellow' },
    { text: 'Sky', color: 'btn-3d-sky' },
    { text: 'Pink', color: 'btn-3d-pink' },
    { text: 'Dark', color: 'btn-3d-gray' },
    { text: 'Indigo', color: 'btn-3d-indigo' },
    { text: 'Orange', color: 'btn-3d-orange' },
    { text: 'Light', color: 'bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 hover:text-gray-800 hover:border-gray-300 focus:bg-gray-300 focus:text-gray-800 focus:border-gray-300 shadow-gray-400' },
]);
const outlineDashedButtons = ref<Button[]>([
    { text: 'Primary', color: 'btn-dashed-primary' },
    { text: 'Purple', color: 'btn-dashed-purple' },
    { text: 'Green', color: 'btn-dashed-green' },
    { text: 'Red', color: 'btn-dashed-red' },
    { text: 'Yellow', color: 'btn-dashed-yellow' },
    { text: 'Sky', color: 'btn-dashed-sky' },
    { text: 'Pink', color: 'btn-dashed-pink' },
    { text: 'Indigo', color: 'btn-dashed-indigo' },
    { text: 'Orange', color: 'btn-dashed-orange' },
    { text: 'Dark', color: 'btn-dashed-gray' },
    { text: 'Light', color: 'bg-transparent text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-500 hover:border-gray-200 focus:bg-gray-50 focus:text-gray-500 focus:border-gray-200' },
]);

const activeStyleButtons = ref<Button[]>([
    { text: 'Primary', color: 'btn-active-primary' },
    { text: 'Purple', color: 'btn-active-purple' },
    { text: 'Green', color: 'btn-active-green' },
    { text: 'Red', color: 'btn-active-red' },
    { text: 'Yellow', color: 'btn-active-yellow' },
    { text: 'Sky', color: 'btn-active-sky' },
    { text: 'Pink', color: 'btn-active-pink' },
    { text: 'Indigo', color: 'btn-active-indigo' },
    { text: 'Orange', color: 'btn-active-orange' },
    { text: 'Dark', color: 'btn-active-gray' },
]);

interface iconButton {
    text: string;
    icon: string | unknown;
    color: string;
}

const iconButton = shallowRef<iconButton[]>([
    {
        text: 'Facebook',
        icon: RiFacebookFill,
        color: 'btn-primary',
    },
    {
        text: 'Instagram',
        icon: RiInstagramLine,
        color: 'btn-pink',
    },
])
interface overlayButton {
    text: string;
    icon: string | unknown;
    color: string;
    reverse: boolean
}

const overlayButtons = shallowRef<overlayButton[]>([
    {
        text: 'Twitch',
        icon: RiTwitchLine,
        color: 'btn-purple',
        reverse: false,
    },
    {
        text: 'Twitter',
        icon: RiTwitterLine,
        color: 'btn-sky',
        reverse: false
    },
    {
        text: 'Twitter',
        icon: RiTwitterLine,
        color: 'btn-red',
        reverse: true
    }
]);

const buttonSizes = [
    { label: 'Extra Small', sizeClass: 'btn-xs' },
    { label: 'Small', sizeClass: 'btn-sm' },
    { label: 'Medium', sizeClass: 'btn-md' },
    { label: 'Default', sizeClass: '' }, // No specific size class
    { label: 'Large', sizeClass: 'btn-lg' }
];

const buttons = ref([
    {
        text: 'Active',
        activeText: 'Unactive',
        color: 'btn-primary',
        loading: false,
        isActive: false,
        icon: false,
    },
    {
        text: 'Launching',
        activeText: 'Welcome to Domiex 😍',
        color: 'btn-purple',
        loading: false,
        isActive: false,
        icon: false,
    },
    {
        text: 'Follow',
        activeText: 'UnFollow',
        color: 'btn-pink',
        loading: false,
        isActive: false,
        icon: true,
    },
]);

function toggleLoading(index: number) {
    const button = buttons.value[index];
    button.loading = true;
    setTimeout(() => {
        button.loading = false;
        button.isActive = !button.isActive;
    }, 2000);
}

const roundedButtons = ref([
    { text: 'Primary', color: 'btn-primary' },
    { text: 'Primary', color: 'btn-sub-primary' },
    { text: 'Primary', color: 'btn-outline-primary' },
    { text: 'Primary', color: 'btn-dashed-primary border-dashed' },
]);

const hoverEffectButtons = shallowRef([
    { text: 'Button Up', color: 'btn-primary hover:-translate-y-0.5' },
    { text: 'Button Down', color: 'btn-green hover:translate-y-0.5' },
    { text: 'Scale', color: 'btn-purple hover:scale-105' },
]);


const iconButtons = shallowRef([
    { icon: Trash, color: 'btn-red' },
    { icon: Wrench, color: 'btn-outline-green' },
    { icon: User, color: 'btn-sub-sky' },
]);

interface HoverEffectButton {
    text: string;
    baseClass: string;
}
const hoverEffect2Buttons = shallowRef<HoverEffectButton[]>([
    {
        text: 'Lets get started',
        baseClass: 'relative text-white group/effect bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600 btn'
    },
    {
        text: 'Lets get started',
        baseClass: 'relative text-white bg-gray-700 border-gray-700 group/effect hover:bg-gray-800 hover:text-white hover:border-gray-800 focus:bg-gray-800 focus:text-white focus:border-gray-800 btn'
    },
]);

interface DisabledButton {
    text: string;
    baseClass: string;
}

const disabledButtons = ref<DisabledButton[]>([
    { text: 'Disabled', baseClass: 'btn btn-primary' },
    { text: 'Disabled', baseClass: 'btn btn-sub-primary' },
    { text: 'Disabled', baseClass: 'btn btn-outline-primary' },
    { text: 'Disabled', baseClass: 'border-dashed btn btn-dashed-primary' },
]);
</script>
<template>
    <pageHeading title="Buttons" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Base Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in baseButtons" :key="index" :class="button.color + ' btn'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Outline Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in outlineButtons" :key="index" :class="button.color + ' btn'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Soft Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in softButtons" :key="index" :class="button.color + ' btn'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">3D Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in DButtons" :key="index" :class="button.color + ' btn'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Outline Dashed Style</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in outlineDashedButtons" :key="index"
                        :class="button.color + ' btn border-dashed'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Active Style</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in activeStyleButtons" :key="index" :class="button.color + ' btn'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Icon with Text</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button class="btn btn-icon-text" v-for="(button, index) in iconButton" :key="index"
                        :class="button.color">
                        <component :is="button.icon" class="w-4 size-4" /> {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Icon Overlay with Text</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in overlayButtons" :key="index" :class="[button.color,button.reverse ? 'right' : '']"
                        class="btn btn-icon-overlay">
                        <span class="icon">
                            <component :is="button.icon" class="w-5" />
                        </span>
                        <span>
                            {{ button.text }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Button Size</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <button v-for="(button, index) in buttonSizes" :key="index"
                        :class="['btn', 'btn-primary', button.sizeClass]">
                        {{ button.label }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Loading Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <div v-for="(button, index) in buttons" :key="index">
                        <button @click="toggleLoading(index)" :class="['btn', button.color, 'btn-icon-text']">
                            <!-- <RiUserAddLine class="w-4" /> -->
                            <component :is="button.icon ? !button.isActive ? RiUserAddLine : RiUserUnfollowLine : ''"
                                class="w-4" />
                            <span v-if="!button.isActive">{{ button.text }}</span>
                            <span v-if="button.isActive">{{ button.activeText }}</span>
                            <svg v-if="button.loading" class="text-white size-4 animate-spin"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Rounded Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in roundedButtons" :key="index"
                        :class="['rounded-full', 'btn', button.color]">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Hover Effect</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in hoverEffectButtons" :key="index" :class="button.color + ' btn'">
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Icon Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in iconButtons" :key="index" :class="button.color + ' btn btn-icon'">
                        <component :is="button.icon" class="w-4" />
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Hover Effect Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in hoverEffect2Buttons" :key="index" :class="button.baseClass">
                        <span class="absolute inset-0 overflow-hidden rounded-xl">
                            <span
                                class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/effect:opacity-100">
                            </span>
                        </span>
                        <span>{{ button.text }}</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Disabled Buttons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <button v-for="(button, index) in disabledButtons" :key="index" :class="button.baseClass" disabled>
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
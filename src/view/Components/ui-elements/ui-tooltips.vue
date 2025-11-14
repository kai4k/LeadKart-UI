<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

const activeTooltip = ref('');

const showTooltip = (tooltip: any) => {
    activeTooltip.value = tooltip;
};

const hideTooltip = () => {
    activeTooltip.value = '';
};


const visible = ref(false);
const tooltipText = ref('');
const tooltipStyle = ref({ left: '0px', top: '0px' });

const showTooltipFollow = (event: MouseEvent, text: string) => {
    visible.value = true;
    tooltipText.value = text;
    updatePosition(event);
};

const hideTooltipFollow = () => {
    visible.value = false;
};

const updatePosition = (event: MouseEvent) => {
    const tooltipElement = document.querySelector('.tooltip');
    if (tooltipElement) {
        const tooltipWidth = tooltipElement.clientWidth;
        const tooltipHeight = tooltipElement.clientHeight;

        tooltipStyle.value = {
            left: `${event.pageX - tooltipWidth / 2}px`,
            top: `${event.pageY - tooltipHeight - 10}px`, // Adjust for the arrow
        };
    }
};


const message = ref<string>('Hello, world!');
const tooltipVisible = ref<boolean>(false);

const customShowTooltip = () => {
    tooltipVisible.value = true;
};

const customHideTooltip = () => {
    tooltipVisible.value = false;
};

interface Tooltip {
    label: string;
    text: string;
    animation: string;
}

const tooltips: Tooltip[] = [
    { label: 'Scale', text: 'I am a Tooltip', animation: 'scale' },
    { label: 'Scale-subtle', text: 'I am a Tooltip', animation: 'scale-subtle' },
    { label: 'Scale-extreme', text: 'I am a Tooltip', animation: 'scale-extreme' },
];

const animationActiveTooltip = ref<number | null>(null);

const animationShowTooltip = (index: number) => {
    animationActiveTooltip.value = index;
};

const animationHideTooltip = () => {
    animationActiveTooltip.value = null;
};
</script>
<template>
    <pageHeading title="UI Tooltip" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Default Behaviour Tooltip</h6>
            </div>
            <div class=" card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <div @mouseenter="showTooltip('Hover Tooltip')" class="relative" @mouseleave="hideTooltip">
                        <button class="btn btn-primary" @mouseenter="showTooltip('Hover Tooltip')"
                            @mouseleave="hideTooltip">
                            Hover for Button!
                        </button>
                        <div v-if="activeTooltip === 'Hover Tooltip'"
                            class="w-full tooltip tooltip-arrow -top-10 after:left-1/2 after:-bottom-[16px] after:-translate-x-1/2">
                            {{
                                activeTooltip }}
                        </div>
                    </div>

                    <div class="relative">
                        <button class="btn btn-primary" @click="showTooltip('Click Tooltip')">
                            Click Me
                        </button>
                        <div v-if="activeTooltip === 'Click Tooltip'"
                            class="tooltip -top-10 tooltip-arrow after:left-1/2 after:-bottom-[16px] after:-translate-x-1/2">
                            {{
                                activeTooltip }}
                        </div>
                    </div>

                    <div @mouseenter="showTooltip('Mouseenter Tooltip')" class="relative" @mouseleave="hideTooltip">
                        <button class=" btn btn-primary">
                            Mouseenter
                        </button>
                        <div v-if="activeTooltip === 'Mouseenter Tooltip'"
                            class="tooltip tooltip-arrow -top-10 after:left-1/2 after:-bottom-[16px] after:-translate-x-1/2">
                            {{
                                activeTooltip }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Follow Cursor</h6>
            </div>
            <div class="card-body">
                <div class="relative flex flex-wrap items-center gap-2">
                    <button class="btn btn-green" @mouseover="showTooltipFollow($event, 'I am a Tooltip')"
                        @mouseleave="hideTooltipFollow" @mousemove="updatePosition">
                        Default
                    </button>
                    <button class="btn btn-green" @mouseover="showTooltipFollow($event, 'I am a Tooltip')"
                        @mouseleave="hideTooltipFollow" @mousemove="updatePosition">
                        Horizontal
                    </button>
                    <button class="btn btn-green" @mouseover="showTooltipFollow($event, 'I am a Tooltip')"
                        @mouseleave="hideTooltipFollow" @mousemove="updatePosition">
                        Initial
                    </button>
                </div>
                <div v-if="visible" :style="tooltipStyle"
                    class="tooltip -top-10 tooltip-arrow after:left-1/2 after:-bottom-[16px] after:-translate-x-1/2">
                    {{ tooltipText }}
                    <span class=""></span>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Arrowless Tooltip</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <div @mouseenter="showTooltip('I am a Tooltip')" class="relative" @mouseleave="hideTooltip">
                        <button class="btn btn-purple" @mouseenter="showTooltip('I am a Tooltip')"
                            @mouseleave="hideTooltip">
                            Arrowless
                        </button>
                        <div v-if="activeTooltip === 'I am a Tooltip'" class="tooltip -top-10">{{ activeTooltip }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">No Flip Tooltip</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <div @mouseenter="showTooltip('I am a  Tooltip')" class="relative" @mouseleave="hideTooltip">
                        <button class="btn btn-primary" @mouseenter="showTooltip('I am a  Tooltip')"
                            @mouseleave="hideTooltip">
                            No Flip
                        </button>
                        <div v-if="activeTooltip === 'I am a  Tooltip'"
                            class="-ml-3 -translate-x-1/2 -translate-y-1/2 -left-1/2 tooltip top-1/2 tooltip-arrow after:rotate-[270deg] after:-right-[15px]">
                            {{ activeTooltip
                            }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Custom HTML Input with Tooltip</h6>
            </div>
            <div class="card-body">
                <input type="text" class="form-input" v-model="message" />
                <button class="mt-3 btn btn-primary" @mouseover="customShowTooltip" @mouseleave="customHideTooltip">
                    Dynamic HTML Content
                </button>
                <div class="relative">
                    <div v-if="tooltipVisible"
                        class=" tooltip tooltip-arrow -top-20 ml-14 after:left-1/2 after:-bottom-[16px] after:-translate-x-1/2">
                        <span class="text-red-500" v-html="message"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Animation Tooltip</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <div v-for="(tooltip, index) in tooltips" :key="index">
                        <button class="btn btn-purple" @mouseover="animationShowTooltip(index)"
                            @mouseleave="animationHideTooltip">
                            {{ tooltip.label }}
                        </button>
                        <div class="relative">
                            <div v-if="animationActiveTooltip === index"
                                class="tooltip tooltip-arrow -top-20 after:left-1/2 after:-bottom-[16px] after:-translate-x-1/2 scale"
                                :class="tooltip.animation">
                                {{ tooltip.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tooltip {
    position: absolute;
    background-color: #4B5563;
    color: #fff;
    padding: 5px;
    border-radius: 6px;
    z-index: 10;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
}

.tooltip-arrow::after {
    content: '▼';
    position: absolute;
    border-width: 8px;
    border-style: solid;
    border-color: #4B5563 transparent transparent transparent;
    /* color: #4B5563; */
    font-size: 1px;
}
</style>
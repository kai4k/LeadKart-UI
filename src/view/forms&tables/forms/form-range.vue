<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import RangeInput from './common-components/RangeInput.vue';
import noUiSlider from "nouislider";
import { ref, onMounted, onBeforeUnmount } from "vue";
// import wNumb from "wNumb";
const rangeInput = [
    { value: 1, css: "", },
    { value: 2, css: "range-purple", },
    { value: 3, css: "range-green", },
    { value: 4, css: "range-red", },
    { value: 5, css: "range-yellow", },
    { value: 6, css: "range-sky", },
    { value: 7, css: "range-orange", },
    { value: 8, css: "range-pink", },
    { value: 9, css: "range-indigo", },
    { value: 10, css: "range-dark", },
]
const sliderRef = ref<HTMLElement | null>(null);
const customSliderRef = ref<HTMLDivElement | null>(null);
let customSliderInstance: any | null = null;
let arbitraryValuesSliderInstance: any | null = null;
const arbitraryValuesSliderRef = ref<HTMLDivElement | null>(null);
const sliderColorRef = ref<HTMLDivElement | null>(null);
let sliderColorInstance: any | null = null;
let toggleSliderInstance: any | null = null;
const softLimitSliderRef = ref<HTMLDivElement | null>(null);
let softLimitSliderInstance: any | null = null;
const overlappingTooltipSliderRef = ref<HTMLDivElement | null>(null);
let mergingTooltipSliderInstance: any | null = null;

// Colors array to store RGB values
const colors = [0, 0, 0];
const customSliderValues = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32];
const customSliderFormat = {
    to: (value: number) => customSliderValues[Math.round(value)],
    from: (value: string | number) => customSliderValues.indexOf(Number(value)),
};

const arbitraryValuesForSlider = ["128MB", "256MB", "1GB", "8GB", "16GB", "32GB"];
const format = {
    to: (value: number) => arbitraryValuesForSlider[Math.round(value)],
    from: (value: string) => arbitraryValuesForSlider.indexOf(value),
};

const classes = ["c-1-color", "c-2-color", "c-3-color", "c-4-color", "c-5-color"];


onMounted(() => {
    if (sliderRef.value) {
        // Create the slider when the component is mounted
        noUiSlider.create(sliderRef.value as any, {
            start: [20, 80],
            connect: true,
            range: {
                min: 0,
                max: 100,
            },
        });
    }
    if (customSliderRef.value) {
        // Initialize the slider
        customSliderInstance = noUiSlider.create(customSliderRef.value as unknown as HTMLElement, {
            start: [8, 24], // Initial values from `customSliderValues`
            range: {
                min: 0,
                max: customSliderValues.length - 1, // Use indices as range
            },
            step: 1, // Move one step at a time
            tooltips: true, // Display values in tooltips
            format: customSliderFormat, // Format slider values
            pips: <any>{
                mode: "steps",
                format: customSliderFormat, // Format pips as well
            },
        });

        // Example: Programmatically set slider values
        customSliderInstance.set(["7", "28"]);
    }
    if (arbitraryValuesSliderRef.value) {
        // Create the slider
        arbitraryValuesSliderInstance = noUiSlider.create(arbitraryValuesSliderRef.value  as unknown as HTMLElement, {
            start: ["1GB", "16GB"], // Initial slider values
            range: {
                min: 0,
                max: arbitraryValuesForSlider.length - 1, // Index-based range
            },
            step: 1, // Step between indices
            tooltips: true, // Show tooltips
            format: format, // Apply the format
            pips: <any>{
                mode: "steps",
                format: format, // Format the pips
                density: 50, // Pip density
            },
        });
    }
    if (sliderColorRef.value) {
        // Create the slider
        sliderColorInstance = noUiSlider.create(sliderColorRef.value as unknown as HTMLElement, {
            start: [4000, 8000, 12000, 16000], // Initial positions
            connect: [false, true, true, true, true], // Connection rules
            range: {
                min: [2000], // Minimum value
                max: [20000], // Maximum value
            },
        });

        // Add custom classes to the connect elements
        const connectElements = sliderColorRef.value.querySelectorAll(".noUi-connect");
        for (let i = 0; i < connectElements.length; i++) {
            connectElements[i].classList.add(classes[i]);
        }
    }
    if (softLimitSliderRef.value) {
        // Create the slider
        softLimitSliderInstance = noUiSlider.create(softLimitSliderRef.value  as unknown as HTMLElement, {
            start: 50, // Initial value
            range: {
                min: 0,
                max: 100, // Slider range
            },
            pips: <any>{
                mode: "values",
                values: [20, 80], // Add pips at 20 and 80
                density: 4, // Density of pips
            },
        });

        // Add 'change' event listener to handle soft limits
        softLimitSliderInstance.on("change", (values: any, handle: any) => {
            if (values[handle] < 20) {
                softLimitSliderInstance.set(20); // Soft lower limit
            } else if (values[handle] > 80) {
                softLimitSliderInstance.set(80); // Soft upper limit
            }
        });
    }
    if (overlappingTooltipSliderRef.value) {
        // Create the slider
        mergingTooltipSliderInstance = noUiSlider.create(overlappingTooltipSliderRef.value as unknown as HTMLElement, {
            start: [20, 32, 50, 70, 80, 90],
            connect: true,
            tooltips: [false, true, true, true, true, true],
            range: {
                min: 0,
                max: 100,
            },
        });

        // Call the function to merge tooltips
        mergeTooltips(mergingTooltipSliderInstance);
    }
});
function mergeTooltips(slider: any) {
    const textIsRtl = getComputedStyle(slider.target).direction === 'rtl';
    const isRtl = slider.options.direction === 'rtl';
    const isVertical = slider.options.orientation === 'vertical';
    const tooltips = slider.getTooltips();
    const origins = slider.getOrigins();

    // Move tooltips into the origin element. The default stylesheet handles this.
    tooltips.forEach((tooltip: any, index: number) => {
        if (tooltip) {
            origins[index].appendChild(tooltip);
        }
    });

    slider.on('update', (values: any, handle: number, unencoded: number, tap: number, positions: any) => {
        const pools: number[][] = [[]];
        const poolPositions: number[][] = [[]];
        const poolValues: number[][] = [[]];
        let atPool = 0;

        // Assign the first tooltip to the first pool if configured
        if (tooltips[0]) {
            pools[0][0] = 0;
            poolPositions[0][0] = positions[0];
            poolValues[0][0] = values[0];
        }

        for (let i = 1; i < positions.length; i++) {
            if (!tooltips[i] || (positions[i] - positions[i - 1]) > 15) {
                atPool++;
                pools[atPool] = [];
                poolValues[atPool] = [];
                poolPositions[atPool] = [];
            }
            if (tooltips[i]) {
                pools[atPool].push(i);
                poolValues[atPool].push(values[i]);
                poolPositions[atPool].push(positions[i]);
            }
        }

        pools.forEach((pool, poolIndex) => {
            const handlesInPool = pool.length;
            for (let j = 0; j < handlesInPool; j++) {
                const handleNumber = pool[j];
                if (j === handlesInPool - 1) {
                    let offset = 0;
                    poolPositions[poolIndex].forEach(value => {
                        offset += 1000 - value;
                    });
                    const direction = isVertical ? 'bottom' : 'right';
                    const last = isRtl ? 0 : handlesInPool - 1;
                    const lastOffset = 1000 - poolPositions[poolIndex][last];
                    offset = (textIsRtl && !isVertical ? 100 : 0) + (offset / handlesInPool) - lastOffset;

                    // Center this tooltip over the affected handles
                    if (tooltips[handleNumber]) {
                        tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(' - ');
                        tooltips[handleNumber].style.display = 'block';
                        tooltips[handleNumber].style[direction] = `${offset}%`;
                    }
                } else {
                    // Hide this tooltip if it's not the last handle in the pool
                    if (tooltips[handleNumber]) {
                        tooltips[handleNumber].style.display = 'none';
                    }
                }
            }
        });
    });
}
onBeforeUnmount(() => {
    // Destroy the slider instance to avoid memory leaks
    if (sliderColorInstance) {
        sliderColorInstance.destroy();
        sliderColorInstance = null;
    }
    if (toggleSliderInstance) {
        toggleSliderInstance.destroy();
        toggleSliderInstance = null;
    }
    if (softLimitSliderInstance) {
        softLimitSliderInstance.destroy();
        softLimitSliderInstance = null;
    }
    if (mergingTooltipSliderInstance) {
        mergingTooltipSliderInstance.destroy();
        mergingTooltipSliderInstance = null;
    }
});

</script>
<template>
    <PageHeading title="Range Slider" sub-title="Forms" />
    <div class="grid grid-cols-12 gap-x-space">
        <RangeInput title="Default Example">
            <template v-for="(range, index) in rangeInput" :key="index">
                <input type="range" min="0" max="10" step="1" :value="range.value" class="input-range"
                    :class="range.css">
            </template>
        </RangeInput>

        <RangeInput title="Basic">
            <div ref="sliderRef" class="noui-custom"></div>
        </RangeInput>

        <RangeInput title="Using an array of values">
            <div class="flex flex-col items-center justify-center h-20 space-y-4">
                <div ref="customSliderRef" class="w-full noui-custom"></div>
            </div>
        </RangeInput>

        <RangeInput title="Using arbitrary (string) values">
            <div class="flex items-center justify-center h-20">
                <div ref="arbitraryValuesSliderRef" class="w-full noui-custom"></div>
            </div>
        </RangeInput>

        <RangeInput title="Slider Color">
            <div class="flex items-center justify-center h-20">
                <div ref="sliderColorRef" class="w-full noui-custom"></div>
            </div>
        </RangeInput>

        <RangeInput title="Soft Limit">
            <div class="flex items-center justify-center h-20">
                <div ref="softLimitSliderRef" class="w-full noui-custom"></div>
            </div>
        </RangeInput>

        <RangeInput title="Overlapping Tooltip">
            <div class="flex items-center justify-center h-20">
                <div ref="overlappingTooltipSliderRef" class="w-full noui-custom"></div>
            </div>
        </RangeInput>

    </div>

</template>

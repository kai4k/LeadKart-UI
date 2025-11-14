<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { getColorCodes } from '@/utils/color-converter';

//@ts-ignore
import { useStore } from 'vuex'
const store = useStore();
interface Props {
    type: 'donut' | 'bar' | 'line' | string;
    width?: number | string;
    height?: number | string;
    series: Object;
    options: any;
    colorClasses?: string;
}

const props = defineProps<Props>();
const chartRef = ref<HTMLElement | null>(null);
const localOptions = ref();

const updateOptions = () => {
    if (!chartRef.value) return;
    const colors = props.colorClasses && chartRef.value instanceof HTMLElement
        ? getColorCodes(chartRef.value)
        : props.options.colors;
    localOptions.value = {
        ...props.options,
        colors: colors ?? props.options.colors,
    };
};

onMounted(() => {
    nextTick(() => {
        updateOptions();
        window.addEventListener('resize', updateOptions);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateOptions);
});

// In case props.options or props.colorClasses change
watch(() => [props.options, props.colorClasses], updateOptions, { deep: true });

watch(
    () => store.getters.primaryColor,
    () => {
        nextTick(updateOptions); // Fully re-render chart
    }
);
</script>

<template>
    <div class="!min-h-full" ref="chartRef" :data-chart-colors="colorClasses">
        <VueApexCharts v-if="localOptions" :type="type" :width="width" :height="height" :options="localOptions" :series="series" class="!min-h-full" />
    </div>
</template>

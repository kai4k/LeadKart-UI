<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue';
const props = defineProps({
    setTitle: Function
})
import Apexchart from '@/components/common/Apexchart.vue';
import { taskActivityChart, workingHoursChart } from './overview-data';
//@ts-ignore
import { useStore } from 'vuex'
const store = useStore()

// ---------- Chart Color change Dynamically ---------- //
const workingHoursChartRef = ref(workingHoursChart())
const taskActiveChart = ref(taskActivityChart())
watch(() => store.getters.primaryColor, () => {
    workingHoursChartRef.value = workingHoursChart()
    taskActiveChart.value = taskActivityChart()
})
// Data arrays for Objectives and Deliverables
const objectives = [
    'Customer Behavior Analysis',
    'Sales Forecasting',
    'Marketing Optimization',
    'Personalized Recommendations',
    'Performance Monitoring and Evaluation'
];

const deliverables = [
    'Data Requirements Document',
    'Data Extraction Scripts',
    'Cleaned and Transformed Datasets',
    'Data Quality Report',
    'Data Storage Setup'
];
onMounted(() => {
    if (props.setTitle) props.setTitle('Overview');
});
</script>
<template>
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Project Overview</h6>
            </div>
            <div class="card-body">
                <p class="mb-3 text-gray-500 dark:text-dark-500">
                    The goal of this project is to develop an advanced AI model capable of predictive analytics within
                    the e-commerce domain. This model will leverage machine learning techniques to analyze customer
                    behavior, forecast sales trends, and optimize marketing strategies, ultimately enhancing the overall
                    customer experience and boosting revenue for e-commerce platforms.
                </p>

                <!-- Objectives Section with v-for Loop -->
                <h6 class="mb-2">Objectives:</h6>
                <ul class="mb-5 space-y-2 list-inside list-circle">
                    <li v-for="(objective, index) in objectives" :key="index">
                        {{ objective }}
                    </li>
                </ul>

                <!-- Deliverables Section with v-for Loop -->
                <h6 class="mb-2">Deliverables:</h6>
                <ul class="space-y-2 list-inside list-circle">
                    <li v-for="(deliverable, index) in deliverables" :key="index">
                        {{ deliverable }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-8 card">
            <div class="card-header">
                <h6 class="card-title">Working Hours</h6>
            </div>
            <div class="card-body">
                <Apexchart :series="workingHoursChartRef.series" :options="workingHoursChartRef.chartOptions" :height="300" class="-ml-space !min-h-full" />
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Task Activities</h6>
            </div>
            <div class="card-body">
                <Apexchart :series="taskActiveChart.series" :options="taskActiveChart.chartOptions" :height="300" class="-ml-space !min-h-full" />
            </div>
        </div>
    </div>
</template>
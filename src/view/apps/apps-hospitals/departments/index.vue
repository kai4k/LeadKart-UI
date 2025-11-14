<script setup lang="ts">
import Apexchart from '@/components/common/Apexchart.vue';
import { employeeChart } from './department-data';
import PageHeading from '@/components/common/PageHeading.vue';
import DepartmentTable from './DepartmentTable.vue';
</script>
<template>
    <PageHeading title="Departments" sub-title="Hospital" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Employee</h6>
                <p class="text-gray-500 shrink-0 dark:text-dark-500">Number of Staff according to department</p>
            </div>
            <div class="card-body">
                <Apexchart :series="employeeChart.series" :options="employeeChart.chartOptions" :height="300" class="!min-h-full" />
            </div>
        </div>
        <DepartmentTable />
    </div>
</template>
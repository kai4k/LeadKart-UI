<script setup lang="ts">
import { data } from './analytics-data'
</script>
<template>
    <table class="table flush whitespace-nowrap">
        <thead>
            <tr>
                <th class="!font-medium text-gray-500 dark:text-dark-500">Order Date</th>
                <th class="!font-medium text-gray-500 dark:text-dark-500">Product</th>
                <th class="!font-medium text-gray-500 dark:text-dark-500">Price</th>
                <th class="!font-medium text-gray-500 dark:text-dark-500">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td>{{ item.date }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <span :class="{
                        'badge badge-red': item.status === 'Cancel',
                        'badge badge-green': item.status === 'Success'
                    }">
                        {{ item.status }}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
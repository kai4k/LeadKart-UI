<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import TableHead from '../TableHead.vue';
import ListTable from './ListTable.vue';
import { Download, Plus, } from 'lucide-vue-next';
</script>
<template>
    <PageHeading title="Products List" sub-title="Ecommerce" />
    <div class="card">
        <div class="card-header">
            <TableHead :firstIcon="Download" :secondIcon="Plus" />
        </div>
        <ListTable />
    </div>
</template>

<style scoped>
.drop-down-list {
    min-width: 114px !important;
    border: 1px !important;
    color: rgb(107 114 128 / var(--tw-text-opacity)) !important;
    font-size: 0.9063rem !important;
}
</style>
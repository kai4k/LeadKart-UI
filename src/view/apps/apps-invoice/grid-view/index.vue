<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import InvoiceCard from '../InvoiceCard.vue';
import GridTable from './GridTable.vue';
</script>
<template>
    <PageHeading title="Grid View" sub-title="Invoice" />
    <InvoiceCard />
    <GridTable />
</template>
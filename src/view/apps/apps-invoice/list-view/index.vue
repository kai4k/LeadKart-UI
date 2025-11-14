<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import InvoiceTable from './InvoiceTable.vue';
import InvoiceCard from '../InvoiceCard.vue';
</script>
<template>
    <PageHeading title="List View" sub-title="Invoice" />
    <InvoiceCard />
    <InvoiceTable />
</template>
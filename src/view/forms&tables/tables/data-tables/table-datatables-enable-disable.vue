<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../../forms/common-components/CardComponent.vue';
import TableStyleBody from './TableStyleBody.vue';
</script>
<template>
    <PageHeading title="Basic" sub-title="Datatables" />
    <CardBody title="Basic">
        <TableStyleBody table-head-css="bg-gray-100 dark:bg-[#0F172A]" :set-pagination="false"></TableStyleBody>
    </CardBody>
</template>
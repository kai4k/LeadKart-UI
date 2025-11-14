<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../../forms/common-components/CardComponent.vue';
import TableStyleBody from './TableStyleBody.vue';
</script>
<template>
    <PageHeading title="Hover Effect" sub-title="Datatables" />
    <CardBody title="Hover Effect">
        <TableStyleBody table-css="display group hovered" table-head-css="bg-gray-100 bg-gray-100 dark:bg-[#0F172A]" />
    </CardBody>
</template>
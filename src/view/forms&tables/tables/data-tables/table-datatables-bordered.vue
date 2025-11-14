<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../../forms/common-components/CardComponent.vue';
import TableStyleBody from './TableStyleBody.vue';
</script>
<template>
    <PageHeading title="Bordered" sub-title="Datatables" />
    <CardBody title="Bordered">
        <TableStyleBody table-css="display group bordered"></TableStyleBody>
    </CardBody>
</template>
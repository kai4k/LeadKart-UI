<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../../forms/common-components/CardComponent.vue';
import TableStyleBody from './TableStyleBody.vue';
</script>
<template>
    <PageHeading title="Stripe" sub-title="Datatables" />
    <CardBody title="Stripe">
        <TableStyleBody table-css="display group even-striped " tableHeadCss="bg-gray-100 dark:bg-[#0F172A]">

        </TableStyleBody>
    </CardBody>
</template>
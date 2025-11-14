<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import TableStyleBody from '../TableStyleBody.vue';
</script>
<template>
    <PageHeading title="Basic" sub-title="Datatables" />
    <!-- <CardBody title="Basic" :full-width="true">
    </CardBody> -->
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <TableStyleBody></TableStyleBody>
            </div>
        </div>
    </div>
</template>
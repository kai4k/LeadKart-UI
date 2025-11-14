<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import BooksTable from './BooksTable.vue';
</script>
<template>
    <PageHeading title="Book Library" sub-title="School" />
    <div>
        <BooksTable />
    </div>
</template>
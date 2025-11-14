<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import QuestionsTable from './QuestionsTable.vue';
</script>
<template>
    <PageHeading title="Question" sub-title="Exam" />
    <div>
        <QuestionsTable />
    </div>
</template>
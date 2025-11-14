<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import ProjectHeader from '../ProjectHeader.vue';
import { ref } from 'vue';
const title = ref<string | number>("Overview")
const subTitle = ref<string | number>("Projects")
const setTitle = (state: string | number) => {
    title.value = state
}
</script>
<template>
    <PageHeading :title="title" :subTitle="subTitle" />
    <ProjectHeader />
    <RouterView :setTitle=setTitle />
</template>
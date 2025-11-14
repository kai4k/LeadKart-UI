<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    title: String | Number;
    subTitle: String | Number;
}>();
</script>

<template>
    <div class="flex-col items-start page-heading sm:flex-row sm:items-center">
        <h6 class="grow group-data-[nav-type=pattern]:text-white">{{ title }}</h6>
        <ul class="breadcrumb *:before:content-['\EA6E']">
            <li class="breadcrumb-item">
                <a href="#!">{{ subTitle }}</a>
            </li>
            <li class="breadcrumb-item active">{{ title }}</li>
        </ul>
    </div>
</template>
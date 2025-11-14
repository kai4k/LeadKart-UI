<script setup lang="ts">
defineProps<{
    data: {
        icon: any;
        title: string;
        description: string;
    }
}>();
</script>
<template>
    <div class="col-span-12 p-6 border border-gray-200 rounded-sm lg:p-8 md:col-span-6 bg-gradient-to-br dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5">
        <div class="gap-4 md:flex">
            <div class="flex items-center justify-center size-10 shrink-0">
                <component :is="data.icon" class="text-purple-500 stroke-1 size-7"/>
            </div>
            <div class="grow text-16">
                <h6 class="mb-1 text-16">{{ data.title }}</h6>
                <p class="text-gray-500">{{ data.description }}</p>
            </div>
        </div>
    </div>
</template>
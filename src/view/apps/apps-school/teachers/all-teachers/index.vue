<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import TeacherTable from './TeacherTable.vue';
import { Archive, Blend, Container, Cross } from 'lucide-vue-next';

interface Teacher {
    title: string;
    name: string;
    avatar: string;
    icon: string | object;
    iconBgClass: string;
    iconColor: string;
}

const teachers = ref<Teacher[]>([
    {
        title: 'English teacher of the month',
        name: 'Ronnie Gunderson',
        avatar: new URL('@/assets/images/avatar/user-11.png', import.meta.url).href,
        icon: Archive,
        iconBgClass: 'border-yellow-500/20 bg-yellow-500/10',
        iconColor: 'yellow-500'
    },
    {
        title: 'Physics teacher of the month',
        name: 'April Lovell',
        avatar: new URL('@/assets/images/avatar/user-15.png', import.meta.url).href,
        icon: Blend,
        iconBgClass: 'border-sky-500/20 bg-sky-500/10',
        iconColor: 'sky-500'
    },
    {
        title: 'History teacher of the month',
        name: 'Elisa Harris',
        avatar: new URL('@/assets/images/avatar/user-16.png', import.meta.url).href,
        icon: Container,
        iconBgClass: 'border-green-500/20 bg-green-500/10',
        iconColor: 'green-500'
    },
    {
        title: 'Biology teacher of the month',
        name: 'Jeanne Lane',
        avatar: new URL('@/assets/images/avatar/user-17.png', import.meta.url).href,
        icon: Cross,
        iconBgClass: 'border-red-500/20 bg-red-500/20',
        iconColor: 'red-500'
    }
]);
</script>
<template>
    <PageHeading title="List View" sub-title="Teachers" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-3 card" v-for="(teacher, index) in teachers" :key="index">
            <div class="card-body">
                <div :class="['flex items-center justify-center border rounded-full size-12', teacher.iconBgClass]">
                    <component :is="teacher.icon"
                        :class="['text-' + teacher.iconColor, 'size-5', 'fill-' + teacher.iconColor + '/20']">
                    </component>
                </div>
                <div class="mt-4">
                    <h6 class="mb-2">{{ teacher.title }}</h6>
                    <div class="flex items-center gap-2">
                        <img :src="teacher.avatar" alt="" class="rounded-full size-6" />
                        <p class="text-gray-500 dark:text-dark-500">{{ teacher.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-x-space">
        <TeacherTable />
    </div>
</template>
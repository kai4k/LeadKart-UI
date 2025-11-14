<script setup lang="ts">
import { ref } from 'vue';
import { Mail, SquareArrowOutUpRight, SquareMousePointer, UserRoundCheck, UserX,MousePointer2 } from 'lucide-vue-next';

const monthlyCampaignStats = ref([
    {
        label: 'Campaign',
        value: '48',
        change: '0.9%',
        changeClass: 'text-green-500',
        icon: Mail,
        iconText: 'green-100',
        iconBg: 'bg-green-500',
    },
    {
        label: 'Clicked',
        value: '48.69%',
        change: '2.9%',
        changeClass: 'text-green-500',
        icon: SquareMousePointer,
        iconText: 'sky-100',
        iconBg: 'bg-sky-500',
    },
    {
        label: 'Emails',
        value: '47,899',
        change: '0.5%',
        changeClass: 'text-green-500',
        icon: Mail,
        iconText: 'gray-200',
        iconBg: 'bg-orange-500',
    },
    {
        label: 'Opened',
        value: '71.12%',
        change: '1.7%',
        changeClass: 'text-red-500',
        icon: SquareArrowOutUpRight,
        iconText: 'yellow-100',
        iconBg: 'bg-yellow-500',
    },
    {
        label: 'Subscribe',
        value: '47,165',
        change: '0.8%',
        changeClass: 'text-green-500',
        icon: UserRoundCheck,
        iconText: 'primary-100',
        iconBg: 'bg-primary-500',
    },
    {
        label: 'Unsubscribe',
        value: '287',
        change: '0.4%',
        changeClass: 'text-red-500',
        icon: UserX,
        iconText: 'red-100',
        iconBg: 'bg-red-500',
    },
    {
        label: 'Click-Through Rate',
        value: '45.00%',
        change: '5.0%',
        changeClass: 'text-green-500',
        icon: MousePointer2,
        iconText: 'red-100',
        iconBg: 'bg-purple-500',
    },
]);
</script>
<template>
    <table class="table flush table-sm">
        <tbody>
            <tr v-for="item in monthlyCampaignStats" :key="item.label">
                <td class="w-12">
                    <div
                        :class="`flex items-center justify-center text-${item.iconText} ${item.iconBg} rounded-md size-9`">
                        <component :is="item.icon" class="size-5" />
                    </div>
                </td>
                <td class="">{{ item.label }}</td>
                <td class="">{{ item.value }}</td>
                <td :class="`font-medium ${item.changeClass}`">{{ item.change }}</td>
            </tr>
        </tbody>
    </table>
</template>
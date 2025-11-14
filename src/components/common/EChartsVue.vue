<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import VueECharts from 'vue-echarts';
import 'echarts';
//@ts-ignore
import { useStore } from 'vuex'
const store = useStore();

defineProps({
    options: Object,
    height: {
        type: Number,
        default: 300
    },
})

</script>
<template>
    <VueECharts  :option="options" autoresize :style="`height: ${height}px`" />
</template>
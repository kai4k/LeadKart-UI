<script setup lang="ts">
import { RiFolder3Line, RiFolder2Line, RiFileLine } from 'vue-remix-icons'

const props = defineProps<{
    node: any
}>()

function toggle() {
    if (props.node.children) {
        props.node.isOpen = !props.node.isOpen
    }
}
</script>

<template>
    <li>
        <a href="#" class="flex px-5 py-1 hover:text-gray-900 dark:hover:text-dark-100" @click.prevent="toggle">
            <component v-if="node.children" :is="node.isOpen ? RiFolder2Line : RiFolder3Line" class="w-[15px] text-yellow-500 mr-2" />
            <RiFileLine v-else class="w-[15px] mr-2" />
            {{ node.title }}
        </a>
        <ul v-if="node.isOpen && node.children" class="pb-1 transition-all duration-1000 ltr:pl-5 rtl:pr-5">
            <TreeItem v-for="(child, index) in node.children" :key="index" :node="child" />
        </ul>
    </li>
</template>

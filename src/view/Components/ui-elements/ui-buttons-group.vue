<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

interface Button {
    label: string;
    class: string;
}

interface ButtonGroup {
    buttons: Button[];
}

const buttonGroups = ref<ButtonGroup[]>([
    {
        buttons: [
            { label: 'Left', class: 'btn btn-primary' },
            { label: 'Middle', class: 'btn btn-primary' },
            { label: 'Right', class: 'btn btn-primary' },
        ],
    },
    {
        buttons: [
            { label: 'Left', class: 'btn btn-outline-primary' },
            { label: 'Middle', class: 'btn btn-outline-primary' },
            { label: 'Right', class: 'btn btn-outline-primary' },
        ],
    },
    {
        buttons: [
            { label: 'Left', class: 'btn btn-sub-purple' },
            { label: 'Middle', class: 'btn btn-sub-purple' },
            { label: 'Right', class: 'btn btn-sub-purple' },
        ],
    },
    {
        buttons: [
            { label: 'Left', class: 'btn btn-purple' },
            { label: 'Middle', class: 'btn btn-green' },
            { label: 'Right', class: 'btn btn-primary' },
        ],
    },
]);

const verticalButtonGroups = ref<ButtonGroup[]>([
    {
        buttons: [
            { label: 'Button', class: 'btn btn-primary' },
            { label: 'Button', class: 'btn btn-primary' },
            { label: 'Button', class: 'btn btn-primary' },
        ],
    },
    {
        buttons: [
            { label: 'Button', class: 'btn btn-outline-primary' },
            { label: 'Button', class: 'btn btn-outline-primary' },
            { label: 'Button', class: 'btn btn-outline-primary' },
        ],
    },
]);
</script>
<template>
    <pageHeading title="Buttons Group" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Horizontal Group</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-space sm:grid-cols-2">
                    <div v-for="(group, index) in buttonGroups" :key="index" class="btn-group">
                        <button v-for="(button, btnIndex) in group.buttons" :key="btnIndex"
                            :class="[button.class, btnIndex == 0 ? 'rounded-lg' : 'rounded-none']">
                            {{ button.label }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 card">
        <div class="card-header">
            <h6 class="card-title">Vertical Group</h6>
        </div>
        <div class="card-body">
            <div class="grid grid-cols-2 gap-5">
                <div v-for="(group, index) in verticalButtonGroups" :key="index" class="btn-group-vertical">
                    <button v-for="(button, btnIndex) in group.buttons" :key="btnIndex" :class="button.class">
                        {{ button.label }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.rounded-2 {
    border-radius: 4px !important;
}
</style>
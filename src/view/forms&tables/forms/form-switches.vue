<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import SwitchButton from './common-components/SwitchButton.vue';
import { ref } from 'vue';

// Reactive state for toggle switches
const toggleStates = ref<Record<string, boolean>>({
    primary: false,
    purple: false,
    green: false,
    red: false,
    yellow: false,
    sky: false,
    pink: false,
    gray: false,
});


// List of colors used in the switch buttons
const colors = ['switch-primary', 'switch-purple', 'switch-green', 'switch-red', 'switch-yellow', 'switch-sky', 'switch-pink', 'switch-gray'];

const softColor = [
    {
        bgColor: 'peer-checked:!bg-primary-500/15',
        pointerColor: "peer-checked:!bg-primary-500"
    },
    {
        bgColor: 'peer-checked:!bg-purple-500/15',
        pointerColor: "peer-checked:!bg-purple-500"
    }
]

const solidColor = [
    { bgColor: 'peer-checked:bg-primary-500', pointerColor: 'peer-checked:bg-primary-50' },
    { bgColor: 'peer-checked:bg-purple-500', pointerColor: 'peer-checked:bg-purple-50' },
    { bgColor: 'peer-checked:bg-green-500', pointerColor: 'peer-checked:bg-green-50' },
    { bgColor: 'peer-checked:bg-red-500', pointerColor: 'peer-checked:bg-red-50' },
    { bgColor: 'peer-checked:bg-yellow-500', pointerColor: 'peer-checked:bg-yellow-50' },
    { bgColor: 'peer-checked:bg-sky-500', pointerColor: 'peer-checked:bg-sky-50' },
    { bgColor: 'peer-checked:bg-pink-500', pointerColor: 'peer-checked:bg-pink-50' },
    { bgColor: 'peer-checked:bg-orange-500', pointerColor: 'peer-checked:bg-orange-50' },
    { bgColor: 'peer-checked:bg-indigo-500', pointerColor: 'peer-checked:bg-indigo-50' },
];

const switchItems = [
    {
        checked: true,
        wrapperClass: '',
        dotClass: 'switch-primary peer-checked:bg-primary-500 peer-checked:after:text-primary-50',
    },
    {
        checked: true,
        wrapperClass: 'peer-checked:!bg-purple-500/15',
        dotClass: 'peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:!bg-purple-500 peer-checked:after:text-purple-50',
    },
    {
        checked: true,
        wrapperClass: 'peer-checked:!bg-purple-500/15',
        dotClass: 'peer-checked:!bg-purple-500  after:font-remix after:!content-["\\ea64"] peer-checked:after:!content-["\\ea6e"] peer-checked:after:text-purple-50',
    },
];

const squareCheckbox = [
    {
        checked: true,
        wrapperClass: '!rounded-md',
        dotClass: 'switch-primary',
    },
    {
        checked: true,
        wrapperClass: '!rounded-md',
        dotClass: 'peer-checked:!bg-primary-500 peer-checked:translate-x-full rtl:peer-checked:-translate-x-full !rounded-md',
    },
    {
        checked: true,
        wrapperClass: 'peer-checked:bg-primary-500/15 !rounded-md',
        dotClass: 'peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:!bg-primary-500 !rounded-md',
    },
    {
        checked: true,
        wrapperClass: '!rounded-md peer-checked:bg-primary-500 peer-checked:border-primary-500',
        dotClass: '!rounded-md peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:bg-primary-50',
    },
];

const switch3D = [
    { checked: true, dotClass: 'switch-primary' },
    { checked: false, dotClass: 'switch-purple' },
    { checked: false, dotClass: 'switch-green' },
    { checked: false, dotClass: 'switch-red' },
    { checked: false, dotClass: 'switch-yellow' },
    { checked: false, dotClass: 'switch-sky' },
    { checked: false, dotClass: 'switch-pink' },
    { checked: false, dotClass: 'switch-orange' },
    { checked: false, dotClass: 'switch-indigo' },
];
</script>
<template>
    <PageHeading title="Switches" sub-title="Forms" />
    <div class="grid grid-cols-12 gap-x-space">
        <SwitchButton title="Default">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(color, index) in colors" :key="index" :for="'toggle' + color" class="switch-group">
                    <div class="relative">
                        <input type="checkbox" :id="'toggle' + color" class="sr-only peer"
                            v-model="toggleStates[color]" />
                        <div class="switch-wrapper"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="colors[index]">
                        </div>
                    </div>
                </label>
            </div>
        </SwitchButton>

        <SwitchButton title="Soft Switches">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(color, index) in colors" :key="index" :for="'toggle' + (index + 1)"
                    class="switch-group switch-soft">
                    <div class="relative">
                        <input type="checkbox" :id="'toggle' + (index + 1)" class="sr-only peer" />
                        <div class="switch-wrapper"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="colors[index]">
                        </div>
                    </div>
                </label>
            </div>
        </SwitchButton>
        <SwitchButton title="Soft Colored Switches">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(color, index) in softColor" :key="index" :for="'soft' + index"
                    class="switch-group switch-soft">
                    <div class="relative">
                        <input type="checkbox" :id="'soft' + index" class="sr-only peer" />
                        <div class="switch-wrapper" :class="color.bgColor"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="color.pointerColor">
                        </div>
                    </div>
                </label>
            </div>
        </SwitchButton>
        <SwitchButton title="Solid Examples">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(color, index) in solidColor" :key="index" :for="'solid' + index" class="switch-group">
                    <div class="relative">
                        <input type="checkbox" :id="'solid' + index" class="sr-only peer" />
                        <div class="switch-wrapper peer-checked:border-[color]-500 peer-checked:bg-[color]-500"
                            :class="color.bgColor"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="color.pointerColor"></div>
                    </div>
                </label>
            </div>
        </SwitchButton>
        <SwitchButton title="Text or Icon with Switches Examples" extraClass="md:col-span-6">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(item, index) in switchItems" :key="index" :for="'icon' + index"
                    class="switch-group switch-soft switch-text">
                    <div class="relative">
                        <input type="checkbox" :id="'icon' + index" class="sr-only peer" :checked="item.checked">
                        <div class="switch-wrapper" :class="item.wrapperClass"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="item.dotClass"></div>
                    </div>
                </label>
            </div>
        </SwitchButton>

        <SwitchButton title="Square Examples" extraClass="md:col-span-6">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(item, index) in squareCheckbox" :key="index" :for="'toggleSquare' + index"
                    class="switch-group">
                    <div class="relative">
                        <input type="checkbox" :id="'toggleSquare' + index" class="sr-only peer"
                            :checked="item.checked" />
                        <div class="switch-wrapper" :class="item.wrapperClass"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="item.dotClass"></div>
                    </div>
                </label>
            </div>

        </SwitchButton>

        <SwitchButton title="3D Switches">
            <div class="flex flex-wrap items-center gap-3">
                <label v-for="(color, index) in switch3D" :key="index" :for="'toggle3D' + (index + 1)"
                    class="switch-group switch-3d">
                    <div class="relative">
                        <input type="checkbox" :id="'toggle3D' + (index + 1)" class="sr-only peer"
                            :checked="color.checked" />
                        <div class="switch-wrapper"></div>
                        <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
                            :class="color.dotClass"></div>
                    </div>
                </label>
            </div>
        </SwitchButton>
    </div>
</template>
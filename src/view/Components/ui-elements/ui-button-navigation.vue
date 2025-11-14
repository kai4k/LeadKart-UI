<script setup lang="ts">
import { shallowRef } from 'vue';
import pageHeading from '@/components/common/PageHeading.vue';
import { BarChartBig, Box, Clapperboard, Home, PencilRuler, Settings, User, Zap } from 'lucide-vue-next';
interface NavigationItem {
    link: string;
    icon: Object;
    active: boolean;
}

const navigationItems = shallowRef<NavigationItem[]>([
    { link: '#!', icon: Home, active: false },
    { link: '#!', icon: Zap, active: true },
    { link: '#!', icon: BarChartBig, active: false },
    { link: '#!', icon: Settings, active: false },
]);


const firstNavigationItems = shallowRef<NavigationItem[]>([
    { link: '#!', icon: Home, active: false },
    { link: '#!', icon: Zap, active: true },
    { link: '#!', icon: BarChartBig, active: false },
    { link: '#!', icon: Settings, active: false },
]);

const secondNavigationItems = shallowRef<NavigationItem[]>([
    { link: '#!', icon: User, active: false },
    { link: '#!', icon: Box, active: true },
    { link: '#!', icon: Clapperboard, active: false },
    { link: '#!', icon: PencilRuler, active: false },
]);
</script>
<template>
    <pageHeading title="Button Navigation" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Bottom Navigation</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-space lg:grid-cols-2">
                    <div class="btn-navigation">
                        <a v-for="(item, index) in navigationItems" :key="index" :href="item.link" :class="['!navigation-primary', { active: item.active }]">
                            <component :is="item.icon" class="mx-auto w-7" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Animation Navigation</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-space lg:grid-cols-2">
                    <div class="btn-navigation animate-navigation">
                        <a v-for="(item, index) in navigationItems" :key="index" :href="item.link" :class="['!navigation-animation-purple', { active: item.active }]">
                            <component :is="item.icon" class="mx-auto" />

                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Border Navigation</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-space lg:grid-cols-2">
                    <div class="btn-navigation navigation-border">
                        <a v-for="(item, index) in firstNavigationItems" :key="index" :href="item.link" :class="['!navigation-animation-green', { active: item.active }]">
                            <component :is="item.icon" class="mx-auto w-7" />
                        </a>
                    </div>
                    <div class="btn-navigation navigation-border border-top">
                        <a v-for="(item, index) in secondNavigationItems" :key="index" :href="item.link" :class="['!navigation-animation-sky', { active: item.active }]">
                            <component :is="item.icon" class="mx-auto w-7" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
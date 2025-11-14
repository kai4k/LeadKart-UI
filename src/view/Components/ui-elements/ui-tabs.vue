<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import { RiHomeLine, RiAirplayLine, RiContactsBook2Line, RiRecordMailLine } from 'vue-remix-icons';
import { Airplay, Home, SquareUser, Tangent } from 'lucide-vue-next';

// Reactive state for the currently open tab
const openTab = ref<number>(1);

// CSS classes for active and inactive tabs
const activeClasses = 'active text-primary-500 activeClasses';
const inactiveClasses = 'text-gray-500 hover:text-primary-500 dark:text-dark-500 dark:hover:text-primary-500';

// Array of tab definitions
const tabs = ref([
    { id: 1, name: 'Home', content: 'The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.' },
    { id: 2, name: 'Service', content: 'A service administrator is responsible for overseeing all aspects of the work order for a service department. Your job duties include coordinating with the service manager on the completion of customer work orders, putting together billing for work completed, and reviewing time cards for service employees.' },
    { id: 3, name: 'Contact Us', content: 'The official business definition of a Contact Administrator is an individual responsible for managing the contact database of an organization. This includes the maintenance of contact information, the creation of contact groups, and the organization of contact information into categories.' },
]);

const currentTab = ref<number>(1);
const activeClassNames = 'active activeClasses';
const inactiveClassNames = 'text-gray-500 hover:text-primary-500 dark:text-dark-500 dark:hover:text-primary-500';

// Array of tab definitions
const tabItems = ref(
    [
        { id: 1, label: 'Home', description: 'The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.' },
        { id: 2, label: 'Service', description: 'A service administrator is responsible for overseeing all aspects of the work order for a service department. Your job duties include coordinating with the service manager on the completion of customer work orders, putting together billing for work completed, and reviewing time cards for service employees.' },
        { id: 3, label: 'Contact Us', description: 'The official business definition of a Contact Administrator is an individual responsible for managing the contact database of an organization. This includes the maintenance of contact information, the creation of contact groups, and the organization of contact information into categories.' },
    ]
);

interface PillTab {
    id: number;
    title: string;
    content: string;
}
const pillOpenTab = ref<number>(1);
const activeTab = ref<number>(1);
const IconActiveTab = ref<number>(2);
const iconTextTab = ref<number>(2);

const pillActiveClasses = 'active';
const pillInactiveClasses = 'text-gray-500 hover:text-primary-500 dark:text-dark-500 dark:hover:text-primary-500';

const pillTabs = ref<PillTab[]>([
    {
        id: 1,
        title: 'Home',
        content: 'The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.',
    },
    {
        id: 2,
        title: 'Service',
        content: 'A service administrator is responsible for overseeing all aspects of the work order for a service department. Your job duties include coordinating with the service manager on the completion of customer work orders, putting together billing for work completed, and reviewing time cards for service employees.',
    },
    {
        id: 3,
        title: 'Contact Us',
        content: 'The official business definition of a Contact Administrator is an individual responsible for managing the contact database of an organization. This includes the maintenance of contact information, the creation of contact groups, and the organization of contact information into categories.',
    },
]);

interface IconTab {
    id: number;
    icon: string | unknown;
    content: string;
}
const iconTabs = ref<IconTab[]>([
    {
        id: 1,
        icon: Home,
        content: 'The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.',
    },
    {
        id: 2,
        icon: Airplay,
        content: 'A service administrator is responsible for overseeing all aspects of the work order for a service department. Your job duties include coordinating with the service manager on the completion of customer work orders, putting together billing for work completed, and reviewing time cards for service employees.',
    },
    {
        id: 3,
        icon: SquareUser,
        content: 'The official business definition of a Contact Administrator is an individual responsible for managing the contact database of an organization. This includes the maintenance of contact information, the creation of contact groups, and the organization of contact information into categories.',
    },
]);

interface TextTab {
    id: number;
    icon: string | unknown;
    title: string;
    content: string;
}

const textTabs: TextTab[] = [
    {
        id: 1,
        icon: Home,
        title: 'Home',
        content: 'The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.',
    },
    {
        id: 2,
        icon: Tangent,
        title: 'Service',
        content: 'A service administrator is responsible for overseeing all aspects of the work order for a service department. Your job duties include coordinating with the service manager on the completion of customer work orders, putting together billing for work completed, and reviewing time cards for service employees.',
    },
    {
        id: 3,
        icon: Home,
        title: 'Contact Us',
        content: 'The official business definition of a Contact Administrator is an individual responsible for managing the contact database of an organization. This includes the maintenance of contact information, the creation of contact groups, and the organization of contact information into categories.',
    },
];

interface AnimationTab {
    id: number;
    icon: string | unknown;
    title: string;
    content: string;
}

const animationTab = ref<number>(2);

const activeTabClasses = 'active';
const inactiveTabClasses = 'text-gray-500 hover:text-green-500 dark:text-dark-500 dark:hover:text-green-500';


const animationTabs = ref<AnimationTab[]>([
    {
        id: 1,
        icon: Home,
        title: 'Home',
        content: 'The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.',
    },
    {
        id: 2,
        icon: Tangent,
        title: 'Service',
        content: 'A service administrator is responsible for overseeing all aspects of the work order for a service department. Your job duties include coordinating with the service manager on the completion of customer work orders, putting together billing for work completed, and reviewing time cards for service employees.',
    },
    {
        id: 3,
        icon: Home,
        title: 'Contact Us',
        content: 'The official business definition of a Contact Administrator is an individual responsible for managing the contact database of an organization. This includes the maintenance of contact information, the creation of contact groups, and the organization of contact information into categories.',
    },
])

</script>
<template>
    <PageHeading title="Tabs" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Basic</h6>
                </div>
                <div class="card-body">
                    <div>
                        <ul class="tabs">
                            <li v-for="tab in tabs" :key="tab.id" @click="openTab = tab.id">
                                <a href="#" :class="openTab === tab.id ? activeClasses : inactiveClasses"
                                    class="nav-item">
                                    {{ tab.name }}
                                </a>
                            </li>
                        </ul>
                        <div class="mt-4">
                            <div v-for="tab in tabs" :key="tab.id" v-show="openTab === tab.id">
                                <p class="text-gray-500 dark:text-dark-500">{{ tab.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Basic Justify</h6>
                </div>
                <div class="card-body">
                    <div>
                        <ul class="tabs *:grow">
                            <li v-for="tabItem in tabItems" :key="tabItem.id" @click="currentTab = tabItem.id">
                                <a href="#" :class="currentTab === tabItem.id ? activeClassNames : inactiveClassNames"
                                    class="nav-item" @click.prevent>
                                    {{ tabItem.label }}
                                </a>
                            </li>
                        </ul>
                        <div class="mt-4 ">
                            <div v-for="tabItem in tabItems" :key="tabItem.id" v-show="currentTab === tabItem.id">
                                <p class="text-gray-500 dark:text-dark-500">{{ tabItem.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Pill Tabs</h6>
                </div>
                <div class="card-body">
                    <ul class="tabs-pills">
                        <li v-for="pillTab in pillTabs" :key="pillTab.id" @click="pillOpenTab = pillTab.id">
                            <a href="javascript:void(0)"
                                :class="pillOpenTab === pillTab.id ? pillActiveClasses : pillInactiveClasses"
                                class="nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50">
                                {{ pillTab.title }}
                            </a>
                        </li>
                    </ul>
                    <div class="mt-4">
                        <div v-for="pillTab in pillTabs" :key="pillTab.id" v-show="pillOpenTab === pillTab.id">
                            <p class="text-gray-500 dark:text-dark-500">{{ pillTab.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Pill Justify Tabs</h6>
                </div>
                <div class="card-body">
                    <ul class="tabs-pills *:grow">
                        <li v-for="pillTab in pillTabs" :key="pillTab.id" @click="activeTab = pillTab.id">
                            <a href="javascript:void(0)"
                                :class="activeTab === pillTab.id ? pillActiveClasses : pillInactiveClasses"
                                class="nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50">
                                {{ pillTab.title }}
                            </a>
                        </li>
                    </ul>
                    <div class="mt-4">
                        <div v-for="pillTab in pillTabs" :key="pillTab.id" v-show="activeTab === pillTab.id">
                            <p class="text-gray-500 dark:text-dark-500">{{ pillTab.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Icon with Animation Tabs</h6>
                </div>
                <div class="card-body">
                    <ul class="tabs-pills tabs-icon">
                        <li v-for="tab in iconTabs" :key="tab.id" @click="IconActiveTab = tab.id">
                            <a href="javascript:void(0)"
                                :class="IconActiveTab === tab.id ? pillActiveClasses : pillInactiveClasses"
                                class="nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50 group/item">
                                <component :is="tab.icon"
                                    class="w-5 transition duration-200 ease-linear size-4 group-hover/item:animate-pulse" />
                            </a>
                        </li>
                    </ul>
                    <div class="mt-4">
                        <div v-for="tab in iconTabs" :key="tab.id" v-show="IconActiveTab === tab.id">
                            <p class="text-gray-500 dark:text-dark-500">{{ tab.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Icon with Text Tabs</h6>
                </div>
                <div class="card-body">
                    <ul class="tabs-pills">
                        <li v-for="tab in textTabs" :key="tab.id" @click="iconTextTab = tab.id">
                            <a href="javascript:void(0)"
                                :class="iconTextTab === tab.id ? pillActiveClasses : pillInactiveClasses"
                                class="nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50">
                                <component :is="tab.icon" class="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span class="align-middle">{{ tab.title }}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="mt-4">
                        <div v-for="tab in textTabs" :key="tab.id" v-show="iconTextTab === tab.id">
                            <p class="text-gray-500 dark:text-dark-500">{{ tab.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Animation Tabs</h6>
                </div>
                <div class="card-body">
                    <ul class="tabs-animation">
                        <li class="w-32" v-for="tab in animationTabs" :key="tab.id" @click="animationTab = tab.id">
                            <a href="javascript:void(0)"
                                :class="animationTab === tab.id ? activeTabClasses : inactiveTabClasses"
                                class="nav-item group/item [&.active]:bg-green-500 [&.active]:text-green-50">
                                <component :is="tab.icon" class="w-5 icon group-hover/item:translate-y-11" />
                                <span class="content group-hover/item:visible group-hover/item:-translate-y-3">{{
                                    tab.title }}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="mt-4">
                        <div v-for="tab in animationTabs" :key="tab.id" v-show="animationTab === tab.id">
                            <p class="text-gray-500 dark:text-dark-500">{{ tab.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.activeClasses {
    color: #358FFC;
    border-bottom: 1px solid #358FFC !important;

}
</style>
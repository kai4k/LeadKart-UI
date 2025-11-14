<script setup lang="ts">
import { onMounted, ref, type HtmlHTMLAttributes } from 'vue';
import simplebar from 'simplebar-vue'
import PageHeading from '@/components/common/PageHeading.vue';
import RecentMenuList from '../../recent-menu-list.vue';
import { updateCounter } from '@/view/dashboards/dashboard-page/email/email-data'
import Apexchart from '@/components/common/Apexchart.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';
import ClientListCard from './ClientListsCard.vue';
import NavTabBar from '@/components/common/NavTabBar.vue';
import {
    projectStatusChart,
    donutWithPatternChart,
    users,
    projects,
    myTasks,
    tasks,
    notifications
} from './project-data'
import {
    Coins,
    Ellipsis,
} from 'lucide-vue-next';
const totalEarnings = ref(0)
onMounted(() => {
    updateCounter(21589, totalEarnings);
    updateCounter(311, completedTasks);
    updateCounter(594, assignedTasks);
})



// Define the items array with labels and colors
const items = ref([
    { label: 'Afternoon', percentage: '54%', color: 'text-primary-500' },
    { label: 'Evening', percentage: '19%', color: 'text-purple-500' },
    { label: 'Morning', percentage: '27%', color: 'text-green-500' },
]);

const completedTasks = ref(0);
const assignedTasks = ref(0);

const tabs = ref([
    { id: 1, name: 'Active' },
    { id: 2, name: 'Completed' },
]);

interface Item {
    title: string;
    comments: number;
    files: string;
    icon: string | any;
    bgClass: string;
    iconClass: string;
    series: number;
    chartColors: string[];
}

const getChartOptions = (item: Item) => {
    return {
        chart: {
            height: 60,
            type: "radialBar",
            sparkline: { enabled: true },
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    show: false,
                },
                hollow: {
                    size: "20%",
                },
            },
        },
        colors: item.chartColors,
        labels: ["[Progress]"],
    };
};

interface TaskList {
    label: string;
    checked: boolean;
}

const tasksList = ref<TaskList[]>([
    { label: 'Start work on Shot Dribble', checked: false },
    { label: 'Create wireframes for the new landing page', checked: false },
    { label: 'Run usability tests on the latest design iteration', checked: true },
    { label: 'Create more options for navbar', checked: false },
    { label: 'Create foundation color', checked: true },
    { label: 'Redesign Homepage + details product', checked: false },
    { label: 'Landing page animations', checked: false },
    { label: 'Update review for Client', checked: true },
    { label: 'Creating App design System', checked: false },
]);

</script>
<template>
    <PageHeading title="Projects" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="order-2 col-span-12 2xl:order-1 lg:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Project Status</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="card-body">
                <div class="flex gap-3 mb-2">
                    <div class="flex items-center justify-center rounded-md bg-primary-500/15 size-10">
                        <Coins class="size-6 text-primary-500 fill-primary-500/20"></Coins>
                    </div>
                    <div class="grow">
                        <h6>$<span>{{ totalEarnings }}</span></h6>
                        <p class="text-gray-500 dark:text-dark-500">Total Earnings</p>
                    </div>
                    <div class="shrink-0">
                        <span class="font-medium text-green-500"><i class="align-baseline ri-arrow-up-line"></i>
                            4.5%</span>
                    </div>
                </div>
                <VueApexCharts type="area" :series="projectStatusChart.series" :options="projectStatusChart.chartOptions" :height="125" class="!min-h-full" color-classes="[bg-primary-500]" />
                <div class="flex items-center gap-3 mt-3">
                    <p class="text-gray-500 dark:text-dark-500 grow">Expense</p>
                    <h6>$748.99</h6>
                    <span class="font-medium badge badge-red"><i class="align-baseline ri-arrow-down-line"></i>
                        4.5%</span>
                </div>
                <div class="flex items-center gap-3 mt-3">
                    <p class="text-gray-500 dark:text-dark-500 grow">Profit</p>
                    <h6>$8721.74</h6>
                    <span class="font-medium badge badge-green"><i class="align-baseline ri-arrow-up-line"></i>
                        11.41%</span>
                </div>
            </div>
        </div>
        <div class="order-1 col-span-12 2xl:order-2 lg:col-span-12 2xl:col-span-4">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 gap-x-space">
                <div v-for="(task, index) in tasks" :key="index" class="card">
                    <div class="card-body">
                        <div class="flex items-center justify-center rounded-md dark:bg-dark-850 dark:text-dark-500 size-12" :class="task.extraCss">
                            <component :is="task.icon" />
                        </div>
                        <h6 class="mt-6 mb-1.5">{{ task.title }}</h6>
                        <p :class="`font-medium ${task.change > 0 ? 'text-green-500' : 'text-red-500'}`">
                            <i class="align-baseline ri-arrow-up-line" v-if="task.change > 0"></i>
                            <i class="align-baseline ri-arrow-down-line" v-else></i>
                            {{ task.changePercentage }}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-3 col-span-12 lg:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Daily Working Reports</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="card-body">
                <VueApexCharts type="donut" :series="donutWithPatternChart.series" :options="donutWithPatternChart.chartOptions" :height="190" class="!min-h-full" color-classes="[bg-primary-500,bg-purple-500,bg-green-500]" />
                <div class="grid grid-cols-12">
                    <div v-for="(item, index) in items" :key="index" class="col-span-4">
                        <a href="#!" class="flex items-center gap-2">
                            <i :class="['text-xs align-baseline ri-circle-fill', item.color, 'shrink-0']"></i>
                            <div class="grow">
                                <h6 class="font-normal">
                                    {{ item.label }}
                                    <span class="text-gray-500 dark:text-dark-500">({{ item.percentage }})</span>
                                </h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-4 col-span-12 2xl:col-span-9">
            <div class="flex items-center gap-3 mb-3">
                <h6 class="grow">Clients List</h6>
                <a href="#!" class="link link-primary">
                    View All
                    <i class="align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                    <i class="align-baseline ri-arrow-left-line ltr:hidden rtl:inline-block"></i>
                </a>
            </div>
            <div class="grid grid-cols-12 gap-x-space">
                <ClientListCard />
            </div>
        </div>
        <div class="relative order-5 col-span-12 overflow-hidden lg:col-span-12 2xl:col-span-3 card">
            <div class="absolute top-0 ltr:right-0 rtl:left-0 bg-primary-500/20 blur-2xl size-32"></div>
            <img src="@/assets/images/dashboards/projects/asssign.png" loading="lazy" alt="" class="absolute bottom-0 ltr:right-3 rtl:left-3">
            <div class="relative card-body">
                <h6 class="mb-3 card-title">Assign a Project</h6>
                <div class="mb-3">
                    <h6><span x-init="updateCounter">{{ completedTasks }}</span>+</h6>
                    <p class="text-gray-500 dark:text-dark-500">Completed Task</p>
                </div>
                <div class="mb-3">
                    <h6>
                        <span>{{ assignedTasks }}</span>
                    </h6>
                    <p class="text-gray-500 dark:text-dark-500">Assigned</p>
                </div>
                <a href="#!" class="btn btn-primary">Start Now</a>
            </div>
        </div>
        <div class="order-6 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Active Projects</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="card-body">
                <p class="mb-3 text-gray-500 dark:text-dark-500">Average 64% completed</p>
                <div class="space-y-4">
                    <div v-for="(project, index) in projects" :key="index" class="flex items-center gap-3">
                        <img :src="project.image" loading="lazy" alt="" class="size-8 shrink-0" />
                        <div class="overflow-hidden grow">
                            <h6 class="truncate">{{ project.title }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">{{ project.category }}</p>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                            <div class="w-20 overflow-hidden grow progress-bar progress-1">
                                <div :style="{ width: project.percentage + '%' }" class="text-white progress-bar-wrap" :class="project.progressClass"></div>
                            </div>
                            <h6 class="shrink-0">{{ project.percentage }}%</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-7 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Team Members</h6>
                <a href="#!" class="link link-primary shrink-0">
                    See All
                    <i class="align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                    <i class="align-baseline ri-arrow-left-line rtl:inline-block ltr:hidden"></i>
                </a>
            </div>
            <div class="card-body">
                <simplebar data-simplebar class="h-[375px] -mx-space px-space">
                    <div class="flex flex-col gap-3">
                        <div v-for="(user, index) in users" :key="index" class="p-3 mb-0 card">
                            <div class="flex items-center gap-2">
                                <img :src="user.image" loading="lazy" alt="" class="rounded-md size-10" />
                                <div class="grow">
                                    <h6 class="mb-1">
                                        <a href="#!">{{ user.name }}</a>
                                    </h6>
                                    <p class="text-gray-500 dark:text-dark-500">{{ user.role }}</p>
                                </div>
                                <p class="text-gray-500 dark:text-dark-500">{{ user.tasks }} Task</p>
                            </div>
                        </div>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="order-8 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Task Activity</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="card-body">
                <div class="relative flex items-center justify-center h-64 space-x-4" dir="ltr">
                    <!-- Task Activity Circle -->
                    <div class="absolute left-28 top-12">
                        <svg class="drop-shadow-xl size-40" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50" class="fill-green-500/80" />
                            <text x="50%" y="45%" text-anchor="middle" class="font-semibold fill-green-50" font-size="15px" dy=".3em">56.8%</text>
                            <text x="50%" y="62%" text-anchor="middle" class="fill-green-50" font-size="10px" dy=".3em">UI Design</text>
                        </svg>
                    </div>
                    <div class="absolute left-0 top-5">
                        <svg class="size-32 drop-shadow-xl" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50" class="fill-sky-500/80" />
                            <text x="50%" y="45%" text-anchor="middle" class="font-semibold fill-sky-50" font-size="15px" dy=".3em">29.3%</text>
                            <text x="50%" y="62%" text-anchor="middle" class="fill-sky-50" font-size="10px" dy=".3em">Development</text>
                        </svg>
                    </div>
                    <div class="absolute left-28 bottom-2">
                        <svg class="size-24 drop-shadow-xl" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50" class="fill-yellow-500/80" />
                            <text x="50%" y="45%" text-anchor="middle" class="font-semibold fill-yellow-50" font-size="15px" dy=".3em">12%</text>
                            <text x="50%" y="65%" text-anchor="middle" class="fill-yellow-50" font-size="10px" dy=".3em">Web Design</text>
                        </svg>
                    </div>
                </div>
                <div class="grid grid-cols-12 mt-4 divide-y divide-gray-200 md:divide-y-0 md:divide-x rtl:divide-x-reverse dark:divide-dark-800 divide-dashed">
                    <div class="col-span-12 p-3 text-center md:col-span-4">
                        <h6 class="mb-1">56.8%</h6>
                        <p class="text-gray-500 dark:text-dark-500">UI Design</p>
                    </div>
                    <div class="col-span-12 p-3 text-center md:col-span-4">
                        <h6 class="mb-1">29.3%</h6>
                        <p class="text-gray-500 dark:text-dark-500">Development</p>
                    </div>
                    <div class="col-span-12 p-3 text-center md:col-span-4">
                        <h6 class="mb-1">12%</h6>
                        <p class="text-gray-500 dark:text-dark-500">Web Design</p>
                    </div>
                </div>
                <p class="mt-3 text-center text-gray-500 dark:text-dark-500">This week task activity by department</p>
            </div>

        </div>
        <div class="order-9 col-span-12 xl:col-span-6 2xl:col-span-4">
            <h6 class="mb-3">My Tasks</h6>
            <div class="mb-space">
                <NavTabBar :tabs="tabs" cssClass="flex border-b border-gray-200 mb-space dark:border-dark-800" liStyle="relative block px-4 text-center py-2 font-medium after:absolute after:h-[1px] transition duration-200 ease-linear after:w-0 hover:after:w-full after:transition-all after:duration-200 after:opacity-0 after:-bottom-[1px] hover:after:opacity-100 [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500 after:mx-auto after:bg-primary-500 after:rounded-full after:inset-x-0" activeClasses="active">
                    <li class="hidden ltr:ml-auto rtl:mr-auto md:inline-block">
                        <a href="#!" class="btn btn-primary py-1.5 px-3.5">
                            <i class="align-baseline ri-add-line ltr:mr-1 rtl:ml-1"></i> Create
                        </a>
                    </li>
                </NavTabBar>
            </div>
            <div class="flex flex-col gap-3">
                <div v-for="(item, index) in myTasks" :key="index" class="mb-0 card">
                    <div class="flex flex-col gap-3 md:items-center card-body md:flex-row">
                        <div :class="['flex items-center justify-center rounded-md', item.bgClass, 'size-12 shrink-0']">
                            <component :is="item.icon" :class="[item.iconClass]"></component>
                        </div>
                        <div class="grow">
                            <h6 class="mb-1"><a href="#!">{{ item.title }}</a></h6>
                            <div class="flex divide-x divide-gray-200 divide-dashed dark:divide-dark-800">
                                <a href="#!" class="pr-3 link link-primary">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-message-3-line"></i> {{ item.comments
                                    }} Comments
                                </a>
                                <a href="#!" class="pl-3 link link-primary">
                                    <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-file-list-3-line"></i> {{ item.files
                                    }} Files
                                </a>
                            </div>
                        </div>
                        <div class="shrink-0">
                            <apexchart type="radialBar" class="w-[50PX]" :height="60" :series="[item.series]" :options="getChartOptions(item)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-10 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Task Lists</h6>
                <div class="shrink-0">
                    <a href="#!" class="link link-primary"><i class="align-baseline ltr:mr-1 rtl:ml-1 ri-add-line"></i>
                        Create Task</a>
                </div>
            </div>
            <div class="card-body">
                <div class="space-y-2">
                    <div v-for="(task, index) in tasksList" :key="index" class="relative">
                        <input :id="'projectTask' + (index + 1)" class="absolute top-2.5 ltr:left-2 rtl:right-2 input-check peer input-check-primary" type="checkbox" v-model="task.checked" />
                        <label :for="'projectTask' + (index + 1)" class="p-2 font-medium rounded-md cursor-pointer ltr:pl-8 rtl:pr-8 bg-gray-50 input-check-group dark:bg-dark-850 peer-checked:bg-primary-500/10">
                            {{ task.label }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-11 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Activities</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex items-center text-gray-500 dark:text-dark-500" extraClass="set-position" />
            </div>
            <div class="card-body">
                <simplebar class="h-[25rem] -mx-space px-space">
                    <ul class="*:before:absolute *:before:w-0.5 *:before:bg-gray-200 dark:*:before:bg-dark-800 *:before:top-5 *:before:-bottom-5 *:relative ltr:*:before:left-[3px] rtl:*:before:right-[3px] flex flex-col *:pb-5 ltr:*:pl-5 rtl:*:pr-5 *:after:absolute *:after:bg-white dark:*:after:bg-dark-900 *:after:size-2 *:after:border *:after:border-gray-300 dark:*:after:border-dark-700 ltr:*:after:left-0 rtl:*:after:right-0 *:after:top-5 *:after:rounded-sm">
                        <li v-for="(notification, index) in notifications" :key="index" class="last:before:hidden last:pb-0 [&.active]:before:bg-purple-500 [&.active]:after:border-purple-500">
                            <div class="flex items-center gap-3 mb-3">
                                <img :src="notification.avatar" loading="lazy" alt="" class="rounded-md size-10" />
                                <div class="grow">
                                    <h6 class="mb-0.5">{{ notification.name }}</h6>
                                    <p class="text-gray-500 dark:text-dark-500 text-13">
                                        {{ notification.time }}
                                    </p>
                                </div>
                            </div>
                            <h6 class="mb-1">
                                {{ notification.title }}
                                <a v-if="notification.link" :href="notification.link" class="text-primary-500">
                                    {{ notification.linkText }}
                                </a>
                            </h6>
                            <p class="text-gray-500 dark:text-dark-500">
                                {{ notification.description }}
                            </p>
                            <div v-if="notification.file" class="flex items-center gap-3 p-3 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                <img :src="notification.file.image" loading="lazy" alt="" class="size-9 shrink-0" />
                                <div class="grow">
                                    <h6 class="mb-1">{{ notification.file.name }}</h6>
                                    <p class="text-xs text-gray-500 dark:text-dark-500">
                                        {{ notification.file.size }} MB
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </simplebar>
            </div>
        </div>
    </div>
</template>
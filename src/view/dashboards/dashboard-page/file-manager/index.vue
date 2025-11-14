<script setup lang="ts">
import { ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import FileManagerTable from './FileManagertable.vue';
import PageHeading from '@/components/common/PageHeading.vue';
import FileManagerCard from './FilesManagerCard.vue';
import { AudioLines, Ellipsis, FileText, FolderOpen, Image, MoveLeft, MoveRight, Video } from 'lucide-vue-next';
import { overviewStorageChart, slides, files, fileAnalyticsChart } from './file-manager-data'
import RecentMenuList from '../../recent-menu-list.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

const modules = [Autoplay, Pagination, Navigation];
const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
};
const storageUsage = ref(74);
</script>
<template>
    <PageHeading title="File Manager" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <FileManagerCard :bgClass="'bg-orange-100 border-orange-200 dark:bg-orange-500/15 dark:border-orange-500/20'" :iconBgColor="'bg-orange-500/20'" :iconClass="'text-orange-500'" title="Images" count="245" :icon="Image" />
        <FileManagerCard :bgClass="'bg-primary-100 border-primary-200 dark:bg-primary-500/15 dark:border-primary-500/20'" :iconBgColor="'bg-primary-500/20'" :iconClass="'text-primary-500'" title="Documents" count="1472" :icon="Image" />
        <FileManagerCard :bgClass="'bg-yellow-100 border-yellow-200 dark:bg-yellow-500/15 dark:border-yellow-500/20'" :iconBgColor="'bg-yellow-500/20'" :iconClass="'text-yellow-500'" title="PDF Files" count="98" :icon="FileText" />
        <FileManagerCard :bgClass="'bg-purple-100 border-purple-200 dark:bg-purple-500/15 dark:border-purple-500/20'" :iconBgColor="'bg-purple-500/20'" :iconClass="'text-purple-500'" title="Video" count="159" :icon="Video" />
        <FileManagerCard :bgClass="'bg-sky-100 border-sky-200 dark:bg-sky-500/15 dark:border-sky-500/20'" :iconBgColor="'bg-sky-500/20'" :iconClass="'text-sky-500'" title="Audio" count="208" :icon="AudioLines" />
        <FileManagerCard :bgClass="'bg-green-100 border-green-200 dark:bg-green-500/15 dark:border-green-500/20'" :iconBgColor="'bg-green-500/20'" :iconClass="'text-green-500'" title="Others Files" count="1569" :icon="FolderOpen" />
        <div class="col-span-12 2xl:col-span-6 card">
            <div class="flex items-center card-header">
                <h6 class="card-title grow">Analytics</h6>
                <RecentMenuList :title="() => 'Last Week'" :list="['Weekly', 'Monthly', 'Yearly']" className="flex px-3 py-1.5 text-xs border-gray-200 dark:border-dark-800 link link-primary border rounded-md" extraClass="file-position" />
            </div>
            <div class="card-body">
                <VueApexCharts :series="fileAnalyticsChart.series" :options="fileAnalyticsChart.options" :height="300" color-classes="[bg-primary-500, bg-gray-100]" type="bar" class="!min-h-full" />
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-3 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Recent Files</h6>
                <a href="#!" class="link link-primary shrink-0">
                    View All
                    <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                    <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4" />
                </a>
            </div>
            <div class="card-body">
                <div class="space-y-3">
                    <div v-for="file in files" :key="file.name" class="flex items-center gap-3">
                        <div class="flex items-center justify-center p-2 rounded-md shrink-0 size-10 bg-slate-100 dark:bg-dark-850">
                            <img :src="file.icon" loading="lazy" alt="">
                        </div>
                        <div class="grow">
                            <h6 class="mb-0.5">
                                <a href="#!" class="!text-current link link-primary">{{ file.name }}</a>
                            </h6>
                            <p class="text-sm text-gray-500 dark:text-dark-500">{{ file.date }}</p>
                        </div>
                        <p>{{ file.size }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-3 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Overview Storage</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']" extraClass="set-position" />
            </div>
            <div class="card-body">
                <VueApexCharts type="donut" :series="overviewStorageChart.series" :options="overviewStorageChart.options" :height="260" class="!min-h-full" color-classes="[bg-primary-400, bg-green-400, bg-yellow-400, bg-purple-400, bg-red-400]" />
                <div class="mt-5">
                    <div class="flex items-center gap-3 mb-2">
                        <h6 class="text-xs grow">Use Storage</h6>
                        <h6 class="text-xs font-semibold text-red-500">{{ storageUsage }}%</h6>
                    </div>
                    <div class="progress-bar progress-2">
                        <div :style="{ width: storageUsage + '%' }" class="text-white progress-bar-wrap bg-primary-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--  Quick Access Table  -->
        <FileManagerTable />
        <!-- Swiper -->
        <div class="col-span-12 xl:col-span-4">
            <h6 class="mb-3">My Favorites</h6>
            <div class=" mySwiper swiper group/swiper" dir="ltr">
                <Swiper class="swiper-wrapper" :loop="true" :modules="modules" :autoplay="true" :grab-cursor="true" :navigation="navigation">
                    <swiper-slide class="swiper-slide" v-for="(item, index) in slides" :key="index">
                        <div :class="['flex items-center gap-3 p-3 card', item.bgClass]">
                            <div class="grow">
                                <h6 class="mb-1">
                                    <a href="#!">{{ item.title }}</a>
                                </h6>
                                <p class="text-sm text-gray-500 dark:text-dark-500">{{ item.fileCount }} Files</p>
                            </div>
                            <div>
                                <div class="flex ml-3 -space-x-3 grow">
                                    <a v-for="(user, userIndex) in item.users" :key="userIndex" href="#!" class="transition duration-300 ease-linear hover:z-10 hover:-translate-y-1">
                                        <img class="border-2 border-white rounded-full dark:border-dark-900 size-8" :src="user.avatar.href" alt="" loading="lazy">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-next after:font-remix after:text-2xl after:text-primary-500 size-6 bg-white rounded-full opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']"></div>
                    <div class="swiper-button-prev after:font-remix after:text-2xl after:text-primary-500 size-6 bg-white rounded-full opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea64']"></div>
                </Swiper>
            </div>
            <div class="relative card">
                <div class="absolute bottom-0 right-0 opacity-45">
                    <div class="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-900"></div>
                    <img src="@/assets/images/dashboards/ecommerce/pattern.png" loading="lazy" alt="" class="h-40">
                </div>
                <div class="relative card-body">
                    <img src="@/assets/images/dashboards/file-manager.png" loading="lazy" alt="" class="h-32 mx-auto">
                    <h6 class="mt-5 mb-1">Upgrade to Pro</h6>
                    <p class="mb-5 text-gray-500 dark:text-dark-500">Unlock your plan to Pro to get access all
                        features!
                    </p>
                    <a href="pages-pricing" type="button" class="w-full btn btn-primary">Upgrade Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

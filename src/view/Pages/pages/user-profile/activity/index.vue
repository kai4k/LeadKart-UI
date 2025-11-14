<script setup lang="ts">
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import { tabs } from '@/view/apps/app-ecommerce/customers/overview/overview-data';



import { ref, watch } from 'vue';
import { File, FileText, Github, MessageSquareText, MonitorDot, ScrollText, ShoppingBag, Smile } from 'lucide-vue-next';

// Define the types and contributors as arrays
const types = [
    'Comments',
    'Uploaded Files',
    'Queries',
    'Sales & Products',
    'Projects',
    'Flags'
];

const contributors = [
    'SRBThemes',
    'Thomas Hayes'
];

// State variables to track selected checkboxes
const selectedTypes = ref<string[]>([]);
const selectedContributors = ref<string[]>([]);

// State variables to handle "All Select" functionality
const allTypesSelected = ref(false);
const allContributorsSelected = ref(false);

// Watch for changes in selectedTypes to handle "All Select" checkbox for types
watch(selectedTypes, (newSelectedTypes) => {
    allTypesSelected.value = newSelectedTypes.length === types.length;
});

// Watch for changes in selectedContributors to handle "All Select" checkbox for contributors
watch(selectedContributors, (newSelectedContributors) => {
    allContributorsSelected.value = newSelectedContributors.length === contributors.length;
});

// Toggle all types when "All Select" checkbox for types is clicked
const toggleAllTypes = () => {
    if (allTypesSelected.value) {
        selectedTypes.value = [...types];
    } else {
        selectedTypes.value = [];
    }
};

// Toggle all contributors when "All Select" checkbox for contributors is clicked
const toggleAllContributors = () => {
    if (allContributorsSelected.value) {
        selectedContributors.value = [...contributors];
    } else {
        selectedContributors.value = [];
    }
};


</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="activity" />
    <div class="grid grid-cols-12 mt-5 gap-x-5">
        <div class="col-span-12 md:col-span-4 xl:col-span-3">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Filter Activity</h6>
                </div>
                <div class="card-body">
                    <!-- Type Section -->
                    <p class="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-dark-500">Type</p>
                    <div class="space-y-3">
                        <!-- 'All Select' Checkbox -->
                        <div class="input-check-group">
                            <input type="checkbox" v-model="allTypesSelected" class="input-check input-check-primary" @change="toggleAllTypes" id="selectAll" />
                            <label class="input-check-label" for="selectAll">All Select</label>
                        </div>

                        <!-- Dynamically Generate Type Checkboxes -->
                        <div v-for="(type, index) in types" :key="index" class="input-check-group">
                            <input type="checkbox" v-model="selectedTypes" :value="type" class="input-check input-check-primary" :id="'typeCheckbox' + index" />
                            <label :for="'typeCheckbox' + index" class="input-check-label">{{ type }}</label>
                        </div>
                    </div>

                    <!-- Contributor Section -->
                    <p class="mt-5 mb-3 text-sm font-medium text-gray-500 uppercase dark:text-dark-500">Contributor</p>
                    <div class="space-y-3">
                        <!-- 'All Select' Checkbox for Contributors -->
                        <div class="input-check-group">
                            <input type="checkbox" v-model="allContributorsSelected" class="input-check input-check-primary" @change="toggleAllContributors" id="contributorAllSelect" />
                            <label class="input-check-label" for="contributorAllSelect">All Select</label>
                        </div>

                        <!-- Dynamically Generate Contributor Checkboxes -->
                        <div v-for="(contributor, index) in contributors" :key="index" class="input-check-group">
                            <input type="checkbox" v-model="selectedContributors" :value="contributor" class="input-check input-check-primary" :id="'contributorCheckbox' + index" />
                            <label :for="'contributorCheckbox' + index" class="input-check-label">{{ contributor
                                }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <div class="flex items-center pb-1 border-b border-gray-200 dark:border-dark-800">
                <h6 class="grow">Today</h6>
                <p class="text-sm text-gray-500 dark:text-dark-500">Monday, May 20, 2024</p>
            </div>
            <div>
                <ul class="*:before:absolute *:before:w-[1px] *:before:bg-gray-200 dark:*:before:bg-gray-800 *:before:-inset-y-5 *:relative ltr:*:before:left-4 rtl:*:before:right-4 flex flex-col mt-5">
                    <li class="last:before:hidden last:pb-0">
                        <div class="relative">
                            <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                                <div class="relative shrink-0">
                                    <div class="flex items-center justify-center text-green-500 rounded-full bg-green-500/10 size-8 ring-4 ring-white dark:ring-dark-900">
                                        <ShoppingBag data-lucide="shopping-bag" class="size-4"></ShoppingBag>
                                    </div>
                                </div>
                                <div class="card card-body grow">
                                    <span class="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">02:35
                                        PM</span>
                                    <h6>New Sale</h6>
                                    <p class="text-gray-500 dark:text-dark-500">A returning visitor from thomas, Italy
                                        just bought a new <a href="#!" class="text-primary-500">Mackbook Pro</a> for
                                        <span class="font-medium">$1999.99</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="last:before:hidden last:pb-0">
                        <div class="relative">
                            <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                                <div class="relative shrink-0">
                                    <img src="@/assets/images/avatar/user-12.png" alt="" class="rounded-full size-8 ring-4 ring-white dark:ring-dark-900">
                                </div>
                                <div class="card card-body grow">
                                    <span class="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">12:59
                                        PM</span>
                                    <h6>Jerome send message</h6>
                                    <p class="mb-3 text-gray-500 dark:text-dark-500"><span class="font-medium">@jerome</span> send message to thread in channel <span class="font-medium">#show-tell</span></p>

                                    <div class="mb-2 space-x-1">
                                        <span class="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 dark:text-dark-500 badge">#marketing</span>
                                        <span class="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 dark:text-dark-500 badge">#promotion</span>
                                    </div>
                                    <p>Hello Everyone</p>
                                    <p>I have a question regarding email marketing. What are some strategies or
                                        techniques to prevent automated marketing emails from being flagged as
                                        promotions, spam, or junk?</p>

                                    <div class="flex flex-wrap items-center gap-2 mt-3">
                                        <p class="text-gray-500 dark:text-dark-500">
                                            <Smile class="inline-block size-4"></Smile> <span class="align-middle whitespace-nowrap"><b>2</b> reactions</span>
                                        </p>
                                        <p class="text-gray-500 dark:text-dark-500">
                                            <MessageSquareText class="inline-block size-4"></MessageSquareTExt> <span class="align-middle whitespace-nowrap"><b>6</b> replies</span>
                                        </p>
                                        <p class="text-gray-500 dark:text-dark-500">Last Today at 07:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="last:before:hidden last:pb-0">
                        <div class="relative">
                            <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                                <div class="relative shrink-0">
                                    <div class="flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 size-8 ring-4 ring-white dark:ring-dark-900">
                                        <MonitorDot data-lucide="monitor-dot" class="size-4"></MonitorDot>
                                    </div>
                                </div>
                                <div class="card card-body grow">
                                    <span class="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">10:27
                                        AM</span>
                                    <h6>Project status updated</h6>
                                    <p class="text-gray-500 dark:text-dark-500"><span class="align-middle whitespace-nowrap">Marked</span> <a href="#!" class="link link-primary">
                                            <Github class="inline-block size-4"></Github> <span class="align-middle whitespace-nowrap">#25 Marge</span>
                                        </a> as <span class="badge badge-sub-green">Completed</span></p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex items-center pb-1 border-b border-gray-200 dark:border-dark-800">
                <h6 class="grow">Yesterday</h6>
                <p class="text-sm text-gray-500 dark:text-dark-500">Sunday, May 19, 2024</p>
            </div>
            <ul class="*:before:absolute *:before:w-[1px] *:before:bg-gray-200 dark:*:before:bg-dark-800 *:before:-inset-y-5 *:relative ltr:*:before:left-4 rtl:*:before:right-4 flex flex-col mt-5">
                <li class="last:before:hidden last:pb-0">
                    <div class="relative">
                        <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                            <div class="relative shrink-0">
                                <img src="@/assets/images/avatar/user-18.png" alt="" class="rounded-full size-8 ring-4 ring-white dark:ring-dark-900">
                            </div>
                            <div class="card card-body grow">
                                <span class="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">03:41
                                    AM</span>
                                <h6>Paul Stirling commented on @domiex</h6>
                                <div class="p-3 mt-3 bg-gray-100 rounded-md dark:bg-dark-850">
                                    <p class="text-gray-500 dark:text-dark-500">Paul, I believe we should seriously
                                        consider removing this column altogether. It seems redundant as it duplicates
                                        content we already have. Additionally, consolidating information into a single
                                        source ensures accuracy and avoids having disparate information spread across
                                        multiple sources. What do you think about this?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="last:before:hidden last:pb-0">
                    <div class="relative">
                        <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                            <div class="relative shrink-0">
                                <div class="flex items-center justify-center rounded-full text-sky-500 bg-sky-500/10 size-8 ring-4 ring-white dark:ring-dark-900">
                                    <File class="size-4"></File>
                                </div>
                            </div>
                            <div class="card card-body grow">
                                <span class="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">11:59
                                    AM</span>
                                <h6>Task Report - uploaded weekly reports</h6>
                                <p class="text-gray-500 dark:text-dark-500">Added <b>2</b> files to task report by <a href="#!" class="font-medium text-primary-500">domiex</a></p>

                                <div class="grid grid-cols-1 gap-5 mt-3 md:grid-cols-2 xl:grid-cols-3">
                                    <a href="#!" class="flex items-center gap-3 p-4 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                        <div>
                                            <FileText class="text-red-500 stroke-1 size-8 fill-red-500/10"></FileText>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">task-reports.pdf</h6>
                                            <p class="text-xs text-gray-500 dark:text-dark-500">45 KB</p>
                                        </div>
                                    </a>
                                    <a href="#!" class="flex items-center gap-3 p-4 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                        <div>
                                            <ScrollText class="text-yellow-500 stroke-1 size-8 fill-yellow-500/10">
                                            </ScrollTExt>
                                        </div>
                                        <div>
                                            <h6 class="mb-1">requirement-research.txt</h6>
                                            <p class="text-xs text-gray-500 dark:text-dark-500">1.5 MB</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="last:before:hidden last:pb-0">
                    <div class="relative">
                        <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                            <div class="relative shrink-0">
                                <img src="@/assets/images/avatar/user-9.png" alt="" class="rounded-full size-8 ring-4 ring-white dark:ring-dark-900">
                            </div>
                            <div class="card card-body grow">
                                <span class="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">04:21
                                    PM</span>
                                <h6>John Brown request joined <a href="#!" class="text-primary-500">#domiex-project</a>
                                    channel</h6>
                                <div class="flex items-center gap-2 mt-3">
                                    <button type="button" class="btn btn-primary">Accept</button>
                                    <button type="button" class="btn btn-sub-gray">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>
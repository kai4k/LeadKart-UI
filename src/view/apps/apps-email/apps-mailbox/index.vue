<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import MailSideBar from './MailSideBar.vue';
import simplebar from 'simplebar-vue';
import { Ellipsis, RotateCcw, Search, Trash } from 'lucide-vue-next';
import { emailData, type Email } from './email-data';
import AllMail from './AllMail.vue';
import DeleteModal from './DeleteModule.vue';
import MailTopbar from './MailTopbar.vue';
import ComposeMail from './ComposeMail.vue';
import SearchingMail from './SearchingMail.vue';
import recentMenuList from '@/view/dashboards/recent-menu-list.vue';

// Reactive state for filtering emails
const showMailModal = ref(false);
const showMailList = ref(true);
const selectAll = ref(false);
const selectedItems = ref<Email[]>([]);
const filteredEmails = ref<Email[]>(emailData.value); // Initially, show all emails
const dataOfMail = ref({});
const selectedType = ref('all');
const selectedBadge = ref<string | null>('Developers');
const handleFilterSelected = ({ type, badge }: { type: string; badge: string | null }) => {
    selectedType.value = type;
    selectedBadge.value = badge;
    selectAll.value = false
    selectedItems.value = []
    filteredEmails.value = emailData.value.filter(email => {
        const matchesType = type === 'all' || email.type === type;
        const matchesBadge = !badge || email.badges.includes(badge);
        return matchesType && matchesBadge;
    });
};

const toggleAll = () => {
    if (selectAll.value) {
        selectedItems.value = [...filteredEmails.value];
    } else {
        selectedItems.value = [];
    }
};

function deleteSelectedItems() {
    selectedItems.value.forEach((item: any) => {
        const index = emailData.value.findIndex(
            (email) => email.id === item.id
        );
        emailData.value.splice(index, 1);
    });
    selectedItems.value = [];
    selectAll.value = false;
}
// search
const showSearchBar = ref(false)
function toggleSearchBar(state: boolean) {
    showSearchBar.value = state
}

const toggleItem = (email: Email) => {
    const index = selectedItems.value.indexOf(email);
    if (index >= 0) {
        selectedItems.value.splice(index, 1);
    } else {
        selectedItems.value.push(email);
    }
};

const setActiveMail = (email: Email) => {
    showMailModal.value = true;
    dataOfMail.value = email;
};

const setShowMailModal = (data: object, status: boolean) => {
    showMailModal.value = status;
};


const getBadgeClass = (label: string) => {
    switch (label) {
        case 'Application':
        case 'Scheduled':
        case 'Important':
            return 'badge-green';
        case 'Inbox':
        case 'Drafts':
            return 'badge-gray';
        case 'Developers':
            return 'badge-yellow';
        case 'Photographer':
            return 'badge-sky';
        default:
            return 'badge-red';
    }
};

// Reactive state for search terms and recent searches
const isDeleteModalVisible = ref(false);

// Function to show the modal
const showDeleteModal = (state: boolean) => {
    isDeleteModalVisible.value = state;
};

const dropdownList = ['show more messages', 'Hide section when empty', 'Manage Inbox settings', 'Mark all as read']


// -------------------------------------------
// Reactive states
const showChatWrapper = ref(false);
const windowWidth = ref(window.innerWidth);

// Function to update window width on resize
const handleResize = () => {
    windowWidth.value = window.innerWidth;
};
// Lifecycle hooks for window resize handling
onMounted(() => {
    window.addEventListener('resize', handleResize);
});

// Cleanup event listener when component unmounts
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});

// Computed property to determine when to show the sidebar
const showSidebar = computed(() => {
    return windowWidth.value > 1480 || showChatWrapper.value;
});

// Toggle sidebar visibility
const toggleMenu = () => {
    showChatWrapper.value = !showChatWrapper.value;
};

// -------------------------------------------------------------
// Determine when to show simplebar
const shouldShowSimplebar = computed(() => {
    if (windowWidth.value >= 1280) {
        return true; // Always show simplebar on large screens
    }
    return !showMailModal.value; // Toggle when windowWidth < 1280
});

// Determine when to show AllMail
const shouldShowAllMail = computed(() => {
    if (windowWidth.value >= 1280) {
        return showMailModal.value; // Show both components when modal is open
    }
    return showMailModal.value; // Toggle normally when width < 1280
});
</script>

<template>
    <PageHeading title="Mailbox" sub-title="Apps" />
    <div class="flex flex-col xl:flex-row" x-data="emailApp">
        <MailSideBar @filter-selected="handleFilterSelected" :showModule="showSidebar" @toggle-menu="toggleMenu" />
        <div class="xl:!rounded-none xl:!border-x-0 card grow" :class="showMailModal ? 'w-full xl:max-w-md' : 'w-full'"
            v-show="showMailList">
            <div class="card-body">
                <simplebar>
                    <MailTopbar />
                </simplebar>

                <div class="mt-3">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="input-check-group shrink-0">
                            <input id="checkboxBasic1" class="input-check input-check-primary" type="checkbox"
                                v-model="selectAll" @change="toggleAll" />
                        </div>
                        <h6 class="grow">
                            Main Inbox
                            <small class="font-normal text-gray-500 ltr:ml-1 rtl:mt-1 dark:text-dark-500 text-14">
                                {{ filteredEmails.length }} messages
                            </small>
                            <span v-show="selectedItems.length > 0" class="text-gray-400 ltr:ml-2 rtl:mr-2 text-14">
                                {{ selectedItems.length !== 0 ? `${selectedItems.length} Rows Selected` : '' }}
                            </span>
                        </h6>
                        <div class="flex items-center gap-4 shrink-0">
                            <a href="#!" v-show="selectedItems.length > 0" @click="deleteSelectedItems"
                                class="link link-red">
                                <Trash class="size-4"></Trash>
                            </a>

                            <recentMenuList :title="Ellipsis" :show-arrow="false" className="" :list="dropdownList" />

                            <a href="#!" class="link link-primary">
                                <RotateCcw class="size-4"></RotateCcw>
                            </a>
                            <a href="#!" class="link link-primary" data-modal-target="searchMailModals"
                                @click="toggleSearchBar(true)">
                                <Search class="size-4"></Search>
                            </a>
                        </div>
                    </div>
                    <simplebar data-simplebar class="-mx-5 h-[35rem]" v-if="shouldShowSimplebar">
                        <div
                            class="border-t border-gray-200 divide-y divide-gray-200 dark:border-dark-800 dark:divide-dark-800">
                            <template v-for="email in filteredEmails" :key="email.id">
                                <div class="flex gap-3 p-5 transition duration-300 ease-linear hover:bg-gray-50 dark:hover:bg-dark-850"
                                    @click="setActiveMail(email)">
                                    <div class="self-start mt-3 input-check-group shrink-0">
                                        <input id="checkboxBasic1" class="input-check input-check-primary"
                                            type="checkbox" @click.stop="toggleItem(email)"
                                            :checked="selectedItems.includes(email)" />
                                    </div>
                                    <div
                                        class="flex items-center justify-center text-red-500 rounded-full bg-red-500/10 shrink-0 size-10">
                                        <template v-if="email.avatarImage">
                                            <img :src="email.avatarImage" alt="" class="rounded-full">
                                        </template>
                                        <template v-else>
                                            <span x-text="email.avatarText">{{ email.avatarText }}</span>
                                        </template>
                                    </div>
                                    <div class="overflow-hidden grow">
                                        <p class="mb-1 md:float-end md:mb-0 text-14" x-text="email.date">{{
                                            email.date }} <span class="text-gray-500 dark:text-dark-500"></span>
                                        </p>
                                        <h6 class="mb-1" x-text="email.sender">{{ email.sender }}</h6>
                                        <a href="#!" class="link link-primary" x-text="email.email">{{ email.email
                                            }}</a>
                                        <a href="#!" class="block mt-3">
                                            <h6 class="mb-1" x-text="email.subject">{{ email.subject }}</h6>
                                            <p class="truncate" x-text="email.message">{{ email.message }}</p>
                                        </a>
                                        <div class="flex flex-wrap justify-end gap-2 mt-2">
                                            <template v-for="label in email.badges" :key="label">
                                                <a href="#!" class="badge" :class="getBadgeClass(label)" x-text="label">
                                                    {{ label }}
                                                </a>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </simplebar>
                </div>
            </div>
        </div>
        <!-- main services Toggle page -->
        <AllMail v-if="shouldShowAllMail" :showMailModal="showMailModal" :setMailModal="setShowMailModal"
            :dataOfMail="dataOfMail" :showDeleteModal="showDeleteModal" />
        <!-- Top Search Bar  -->
        <SearchingMail :set-show-module-value="toggleSearchBar" :show-module="showSearchBar" />
        <!-- Add compose modals -->
        <ComposeMail />
        <!--delete modals-->
        <DeleteModal :showDeletePop="isDeleteModalVisible" :setDeleteModal="showDeleteModal" />
    </div>
</template>

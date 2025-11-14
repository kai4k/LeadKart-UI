<script setup lang="ts">
import simplebar from 'simplebar-vue';
import { ref, computed } from 'vue';
import { groups } from './group-data'
import { Search } from 'lucide-vue-next';
import { defineProps } from 'vue';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
const props = defineProps({
    showGroupModel: {
        type: Function
    },
    activeStatus: {
        type: Function,
    },
    showChart: Boolean,
})

const showGroupAddModal = ref(false);
const searchTerms = ref('');
const filteredGroups = computed(() => {
    if (!searchTerms.value) return groups.value;
    return groups.value.filter(group =>
        group.name.toLowerCase().includes(searchTerms.value.toLowerCase())
    );
});

function showGroupModelFun() {
    if (props.showGroupModel) {
        props.showGroupModel(!showGroupAddModal.value); // Call the function safely
    }
}
const emit = defineEmits(['showChart'])
const activeBar = ref(0)
const setActiveChat = (data: object, index: number) => {
    // Your logic for setting the active chat
    if (props.activeStatus) {
        activeBar.value = index
        props.activeStatus(data, index)
        emit('showChart')
    }
};
</script>
<template>

    <div class="col-span-12 2xl:col-span-3 card" id="chat-list" v-show="!showChart">
        <div class="card-body">
            <button type="button" title="create group btn" @click="showGroupModelFun" class="w-full btn btn-primary">
                Create New Group
            </button>
            <div class="relative my-4 group/form">
                <input type="text"
                    class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                    placeholder="Search for ..." v-model="searchTerms" />
                <button title="search btn"
                    class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                    <Search data-lucide="search" class="size-4">
                    </Search>
                </button>
            </div>
            <simplebar class="max-h-[calc(100vh_-_22.5rem)] -mx-space" data-simplebar>
                <ul class="space-y-3">
                    <template v-if="filteredGroups.length > 0">
                        <template v-for="(group, index) in filteredGroups" :key="index">
                            <li>
                                <a href="#!"
                                    class="flex items-center gap-2 px-space py-2.5 hover:bg-gray-50 dark:hover:bg-dark-850 [&.active]:bg-primary-500/10 transition ease-linear duration-300 group/item unread"
                                    @click="setActiveChat(group, index)"
                                    :class="{ active: activeBar == index, unread: group.unread }">
                                    <div
                                        class="relative flex items-center justify-center p-2 font-semibold transition duration-200 ease-linear bg-green-500/10 [&.active]:bg-white dark:[&.active]:bg-dark-900 rounded-full size-11 shrink-0 group-[&.unread]/item:bg-white dark:group-[&.unread]/item:bg-dark-900">
                                        <img :src="group.image" alt="" class="rounded-full" />
                                    </div>
                                    <div class="overflow-hidden grow">
                                        <h6 class="mb-0.5 truncate">{{ group.name }}</h6>
                                        <p class="text-sm group-[&.unread]/item:font-medium truncate group-[&.unread]/item:text-gray-950 dark:group-[&.unread]/item:text-dark-50 text-gray-500 dark:text-dark-500 unread"
                                            x-text="group.message"
                                            :class="{ 'font-medium text-gray-950': group.unread }">
                                            {{ group.message }}
                                        </p>
                                    </div>
                                    <div class="ltr:text-right rtl:text-left shrink-0">
                                        <p class="mb-1 text-xs text-gray-500 dark:text-dark-500">
                                            {{ group.time }}
                                        </p>
                                        <template v-if="group.badge">
                                            <span class="badge-sub-red badge-square size-5">{{ group.badge }}</span>
                                        </template>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </template>
                    <template v-else>
                        <div class="flex justify-center">
                            <TableDataNotFount />
                        </div>
                    </template>
                </ul>
            </simplebar>
        </div>
    </div>
</template>
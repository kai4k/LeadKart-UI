<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function,
})
const searchTerms = ref('');

const recentSearches = ref<string[]>([
    'Chat Management',
    'Projects Discuss',
    'Subscriber',
    'Reports',
]);

// Method to remove a recent search
const removeSearch = (index: number) => {
    recentSearches.value.splice(index, 1);
};

const closeBar = () => {
    if (props.setShowModuleValue) props.setShowModuleValue(false);
}
</script>

<template>
    <div id="searchMailModals" class="modal " v-if="showModule">
        <div class="modal-wrap modal-top">
            <div class="modal-content">
                <div class="relative group/form grow">
                    <input type="email"
                        class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        placeholder="Search anythings ..." v-model="searchTerms" />
                    <button
                        class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search data-lucide="search"
                            class="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850">
                        </Search>
                    </button>
                    <template v-if="searchTerms">
                        <div
                            class="absolute inset-x-0 bg-white border border-gray-200 rounded-md top-full dark:bg-dark-900 dark:border-dark-800">
                            <div data-simplebar class="p-5 max-h-72">
                                <p class="mb-2 text-sm text-gray-500 dark:text-dark-500">Last Search</p>
                                <div class="flex flex-wrap gap-2">
                                    <div v-for="(search, index) in recentSearches" :key="index"
                                        class="badge badge-gray">
                                        <span>{{ search }}</span>
                                        <a href="javascript:void(0);" @click="removeSearch(index)">
                                            <i class="ml-1 align-middle ri-close-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeBar"></div>
    </div>
</template>
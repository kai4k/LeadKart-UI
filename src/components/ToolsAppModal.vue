<script setup lang="ts">
import { Search, X } from "lucide-vue-next";
import { ref, computed } from "vue";
import { tools } from "@/layout/main-layout/layout-topbar-data";
const props = defineProps({
    showModule: Boolean,
    setVisibleModuleValue: Function,
})
// Search query
const searchQuery = ref("");

// Selected tools
const selectedTools = ref<string[]>([]);

// Filter tools based on search query
const filteredTools = computed(() =>
    tools.filter((tool) =>
        tool.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

// Close modal handler
const closeModal = () => {
    if (props.setVisibleModuleValue) props.setVisibleModuleValue(false)
};

// Save changes handler
const saveChanges = () => {
    closeModal();
};
</script>
<template>
    <div v-if="showModule" id="toolsAppsModal" class="modal">
        <div class="modal-wrap modal-center modal-lg">
            <div class="modal-header">
                <h6 class="text-15">Enhance your tech stack with additional tools</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="relative w-full mb-5 group/form grow">
                    <input v-model="searchQuery" type="text"
                        class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        placeholder="Search for ..." />
                    <button
                        class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search class="size-4"></Search>
                    </button>
                </div>

                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="tool in filteredTools" :key="tool.id" class="relative w-full input-check-group">
                        <input :id="'toolsCheckbox' + tool.id" v-model="selectedTools" :value="tool.name"
                            type="checkbox"
                            class="absolute bg-white rounded-full input-check -top-2 size-5 -right-2 dark:bg-dark-900 input-check-primary dark:checked:bg-primary-500 peer" />
                        <label :for="'toolsCheckbox' + tool.id"
                            class="flex items-center w-full gap-3 p-3 font-medium border border-gray-200 rounded-md dark:border-dark-800 input-check-label peer-checked:border-primary-500">
                            <img :src="tool.image" alt="" class="h-7" />
                            {{ tool.name }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end gap-2 modal-footer">
                <button type="button" class="btn btn-active-red" @click="closeModal">
                    Close
                </button>
                <button type="button" class="btn btn-primary" @click="saveChanges">
                    Save Changes
                </button>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
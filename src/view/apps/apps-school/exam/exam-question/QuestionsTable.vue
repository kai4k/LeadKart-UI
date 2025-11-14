<script setup lang="ts">
import { ref, computed } from "vue";
import questionsData, { type Question } from "./exam-question-data";
import OverviewQuestion from "./OverviewQuestion.vue";
import AddQuestionModule from "./AddQuestionModule.vue";
import DeleteModule from "@/view/apps/apps-email/apps-mailbox/DeleteModule.vue";
import TableDataNotFount from "@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue";
import { Ellipsis, Search, Trash } from "lucide-vue-next";
import RecentMenuList from "@/view/dashboards/recent-menu-list.vue";
import { dropdownOption } from "@/view/apps/app-ecommerce/products/grid-view/grid-data-list";


const searchTerm = ref("");
const sortBy = ref("");
const selectAll = ref(false);
const selectedItems = ref<Question[]>([]);
const expandedQuestion = ref<number | null>(null);

const displayedQuestions = computed(() => {
    let filtered = [...questionsData.value];

    // Filter by search term
    if (searchTerm.value) {
        const term = searchTerm.value.toLowerCase();
        filtered = filtered.filter((q) =>
            Object.values(q).some((value) =>
                value.toString().toLowerCase().includes(term)
            )
        );
    }
    // Sort by type or difficulty
    if (sortBy.value) {
        if (["MCQ", "Q & A"].includes(sortBy.value)) {
            filtered = filtered.filter((q) => q.type === sortBy.value);
        } else if (["Hard", "Normal", "Medium"].includes(sortBy.value)) {
            filtered = filtered.filter((q) => q.difficulty === sortBy.value);
        }
    }

    return filtered;
});

const toggleAll = () => {
    if (selectAll.value) {
        selectedItems.value = [...displayedQuestions.value];
    } else {
        selectedItems.value = [];
    }
};

const deleteSelectedItems = () => {
    questionsData.value.splice(
        0,
        questionsData.value.length,
        ...questionsData.value.filter((q) => !selectedItems.value.includes(q))
    );
    selectedItems.value = [];
    selectAll.value = false;
};

const filterQuestions = () => {
    // Filtering logic is handled in `displayedQuestions`
};

const toggleDetails = (id: number) => {
    expandedQuestion.value = expandedQuestion.value === id ? null : id;
};

// -------------------------------------------
const showAddExamForm = ref(false);
const previewQuestion = ref(false);
const showDeleteModule = ref(false)
const showEditForm = ref(false)
const previewQuestionData = ref();
const selectedQuestion = ref()
const setShowAddExamFormValue = (stats: boolean) => {
    showAddExamForm.value = stats
}

const setShowEditExamFormValue = (stats: boolean, data?: Question) => {
    showAddExamForm.value = stats;
    selectedQuestion.value = data;
}
const setPreviewModuleValue = (stats: boolean, data?: Question) => {
    previewQuestion.value = stats;
    previewQuestionData.value = data;
}
const setDeleteModuleValue = (stats: boolean, data?: Question) => {
    showDeleteModule.value = stats
    selectedQuestion.value = data;
}

const deleteQuestion = () => {
    const findIndex = questionsData.value.findIndex((question) => question.id == selectedQuestion.value.id)
    questionsData.value.splice(findIndex, 1)
}

const handleTableActivity = (option: string, data?: Question) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        setPreviewModuleValue(true, data)
    }
    if (activity == 'edit') {
        setShowEditExamFormValue(true, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data)
    }
}
</script>
<template>
    <div class="grid grid-cols-12 gap-5 gap-x-space mb-space">
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="relative flex items-center">
                <input type="text" class="!border-r-0 !rounded-r-none form-input grow focus:!border-green-500/20" placeholder="Search for ..." v-model="searchTerm" @input="filterQuestions" />
                <button class="border-green-200 rounded-l-none btn btn-sub-green btn-icon shrink-0">
                    <Search class="size-5"></Search>
                </button>
            </div>
        </div>
        <button class="btn btn-red btn-icon" v-if="selectedItems.length > 0" @click="deleteSelectedItems">
            <Trash class="inline-block size-4"></Trash>
        </button>
        <div class="col-span-12 sm:col-span-6 md:col-span-2 xl:col-start-9">
            <select id="sortBySelect" class="form-select" v-model="sortBy" @change="filterQuestions">
                <option value="">All</option>
                <option value="MCQ">MCQ</option>
                <option value="Q & A">Q & A</option>
                <option value="Hard">Hard</option>
                <option value="Normal">Normal</option>
                <option value="Medium">Medium</option>
            </select>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-2">
            <button type="button" class="w-full btn btn-primary" @click="setShowAddExamFormValue(true)">
                Create New Question
            </button>
        </div>
    </div>
    <div class="overflow-x-auto">
        <table class="table border-separate border-spacing-y-2 whitespace-nowrap">
            <thead>
                <tr class="font-medium text-gray-500">
                    <th class="w-11">
                        <!-- <input type="checkbox" /> -->
                        <div class="input-check-group">
                            <label for="checkboxAll" class="hidden input-check-label"></label>
                            <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" @change="toggleAll">
                        </div>
                    </th>
                    <th>Questions</th>
                    <th>Option</th>
                    <th>Item Type</th>
                    <th>Difficult</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="question in displayedQuestions" :key="question.id">
                    <td class="self-start align-top border-t ltr:last:border-r rtl:last:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        <input type="checkbox" class="input-check input-check-primary" :value="question" v-model="selectedItems" />
                    </td>
                    <td class="border-t ltr:last:border-r rtl:last:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        <h6>
                            <a href="#" @click.prevent="toggleDetails(question.id)">
                                {{ question.question }}
                            </a>
                        </h6>
                        <div v-if="expandedQuestion === question.id" class="mt-3 space-y-2">
                            <div class="input-radio-group" v-for="(option, index) in question.options" :key="index">
                                <input :id="'qOption' + question.id + index" class="hidden input-radio peer" type="radio" :name="'optionQ' + question.id" />
                                <label :for="'qOption' + question.id + index" class="flex items-center justify-center border border-gray-200 rounded-md text-15 size-9 peer-checked:bg-primary-500 peer-checked:border-primary-500 peer-checked:text-white">
                                    {{ String.fromCharCode(65 + index) }}
                                </label>
                                <label :for="'qOption' + question.id + index" class="py-1.5 px-3 rounded-md border border-gray-200 input-radio-label grow">
                                    {{ option }}
                                </label>
                            </div>
                        </div>
                    </td>
                    <td class="align-top border-t ltr:last:border-r rtl:last:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        <a href="#" class="link link-primary" @click.prevent="toggleDetails(question.id)">
                            {{ expandedQuestion === question.id ? "Hide All" : "Show All" }}
                        </a>
                    </td>
                    <td class="align-top border-t ltr:last:border-r rtl:last:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        {{ question.type }}</td>
                    <td class="align-top border-t ltr:last:border-r rtl:last:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        {{ question.difficulty }}</td>
                    <td class="align-top border-t ltr:last:border-r rtl:last:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        <span :class="question.status === 'New' ? 'badge-green' : 'badge-gray'" class="badge">
                            {{ question.status }}
                        </span>
                    </td>
                    <td class="align-top border-t ltr:last:border-r rtl:border-l ltr:first:border-l rtl:first:border-r ltr:last:rounded-r-md rtl:last:rounded-l-md ltr:first:rounded-l-md rtl:first:rounded-r-md">
                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, question)" />
                    </td>
                </tr>

                <tr v-if="displayedQuestions.length === 0">
                    <TableDataNotFount />
                </tr>
            </tbody>
        </table>
    </div>
    <OverviewQuestion :setModuleValue="setPreviewModuleValue" :showModule="previewQuestion" :showData="previewQuestionData" />

    <AddQuestionModule :showModule="showAddExamForm" :setModuleValue="setShowAddExamFormValue" :getData="selectedQuestion" :showEditModule="showEditForm" :setEditModuleValue="setShowEditExamFormValue" />

    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteQuestion" />

</template>
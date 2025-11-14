<script setup lang="ts">

import { ChevronLeft, ChevronRight, Ellipsis, } from 'lucide-vue-next';
import { onMounted, ref, computed, nextTick } from 'vue';
import { tasksData, tasks, todoTasksData } from './task-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../../app-ecommerce/products/grid-view/grid-data-list';
const props = defineProps({
    setTitle: Function
})


// Sorting & Pagination Logic
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref(1);
const pageSize = 5;

const sort = (column: string) => {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection.value = 'asc';
        sortBy.value = column;
    }

    tasksData.value.sort((a: any, b: any) => {
        const valueA = a[column];
        const valueB = b[column];
        let comparison = 0;

        if (valueA > valueB) comparison = 1;
        else if (valueA < valueB) comparison = -1;

        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
};

const displayedProjects = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    const end = currentPage.value * pageSize;
    return tasksData.value.slice(start, end);
});

const showingStart = computed(() => (currentPage.value - 1) * pageSize + 1);
const showingEnd = computed(() => Math.min(currentPage.value * pageSize, tasksData.value.length));

const totalPages = computed(() => Math.ceil(tasksData.value.length / pageSize));

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};

// --------------------To do list -----------------------
// Define the Task type
interface Task {
    text: string;
    completed: boolean;
    editing: boolean;
    date: string;
}
// Get today's and yesterday's date
const today = new Date().toISOString().split('T')[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

// Reactive state for tasks and the new task input
const todoList = ref<Task[]>([]); // Changed name from `tasks` to `todoList`
const newTask = ref<string>('');

// Add new task
const addTask = () => {
    if (newTask.value.trim() !== '') {
        todoList.value.unshift({ text: newTask.value, completed: false, editing: false, date: today });
        newTask.value = ''; // Reset input after adding
    }
};

// Delete task
const deleteTask = (task: Task) => {
    todoList.value.splice(todoList.value.indexOf(task), 1);
};

// Enable editing mode
const enableEditing = (task: Task) => {
    task.editing = true;
    // Use nextTick to focus the input after it becomes visible
    nextTick(() => {
        const editInput = document.querySelector<HTMLInputElement>(`#edit-${todoList.value.indexOf(task)}`);
        if (editInput) editInput.focus();
    });
};

// Disable editing mode
const disableEditing = (task: Task) => {
    task.editing = false;
};

// Filter tasks by date
const todayTasks = computed(() => todoList.value.filter((task) => task.date === today));
const yesterdayTasks = computed(() => todoList.value.filter((task) => task.date === yesterday));

// Count tasks by date
const todayTasksCount = computed(() => todayTasks.value.length);
const yesterdayTasksCount = computed(() => yesterdayTasks.value.length);

onMounted(() => {
    if (props.setTitle) props.setTitle('task');
    todoTasksData.forEach((task) => {
        if (task.date === 'today') task.date = today;
        else if (task.date === 'yesterday') task.date = yesterday;
    });
    todoList.value = todoTasksData;
});
</script>
<template>
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 lg:col-span-6 xl:col-span-8">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-space">
                <div v-for="(task, index) in tasks" :key="index" class="card">
                    <div class="card-body">
                        <div class="relative">
                            <div :class="task.bgColor" class="absolute top-0 z-0 size-11 blur-md"></div>
                            <!-- Dynamically setting the icon and its color -->
                            <component :is="task.icon" class="relative stroke-1 size-10" :class="task.iconColor">
                            </component>
                        </div>
                        <h6 class="mt-6">{{ task.count }}</h6>
                        <p class="text-gray-500 dark:text-dark-500">{{ task.label }}</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-space">
                <h6 class="grow">Project Tasks</h6>
                <button type="button" class="btn btn-primary shrink-0">Add Task</button>
            </div>
            <div class="my-5">
                <div class="overflow-x-auto">
                    <table class="table flush whitespace-nowrap">
                        <tbody>
                            <tr class="text-gray-500 dark:text-dark-500">
                                <th @click="sort('taskName')" class="!font-medium cursor-pointer">
                                    Task Name
                                    <span v-if="sortBy === 'taskName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('createDate')" class="!font-medium cursor-pointer">
                                    Create Date
                                    <span v-if="sortBy === 'createDate'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                        }}</span>
                                </th>
                                <th class="!font-medium cursor-pointer">Assigned To</th>
                                <th @click="sort('status')" class="!font-medium cursor-pointer">
                                    Status
                                    <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('priority')" class="!font-medium cursor-pointer">
                                    Priority
                                    <span v-if="sortBy === 'priority'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th class="!font-medium cursor-pointer">Action</th>
                            </tr>
                            <template v-for="(project, index) in displayedProjects" :key="index">
                                <tr>
                                    <td>{{ project.taskName }}</td>
                                    <td>{{ project.createDate }}</td>
                                    <td>
                                        <div class="flex ml-3 -space-x-3 grow">
                                            <template v-for="assignee in project.assignees" :key="assignee">
                                                <a href="#!" class="transition duration-300 ease-linear hover:z-10" title="avatar link">
                                                    <img class="border-2 border-white rounded-full dark:border-dark-900 size-8" :src="assignee" alt="" />
                                                </a>
                                            </template>
                                        </div>
                                    </td>
                                    <td>
                                        <span :class="{
                                            'badge badge-purple': project.status === 'New',
                                            'badge badge-yellow': project.status === 'Pending',
                                            'badge badge-green': project.status === 'Completed'
                                        }">{{ project.status }}</span>
                                    </td>
                                    <td>
                                        <span :class="{
                                            'badge badge-red': project.priority === 'High',
                                            'badge badge-green': project.priority === 'Low'
                                        }">{{ project.priority }}</span>
                                    </td>
                                    <td>
                                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" menuIconCss="size-4" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" />
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ tasksData.length }}</b>
                            Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage()" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <template v-for="page in totalPages" :key="page">
                                <button @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                    <span>{{ page }}</span>
                                </button>
                            </template>
                            <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination-next">
                                Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">To Do Lists</h6>
                </div>
                <div class="card-body">
                    <div class="space-y-3">
                        <fieldset class="space-y-3">
                            <h6>
                                Today (<span>{{ todayTasksCount }}</span>)
                            </h6>
                            <div v-for="(task, index) in todayTasks" :key="'today-' + index" class="grid grid-cols-[1fr_36px] items-center gap-6">
                                <div class="input-check-group">
                                    <input type="checkbox" class="input-check input-check-primary" v-model="task.completed" />
                                    <span v-show="!task.editing" @dblclick="enableEditing(task)" class="!text-gray-800 select-none ltr:ml-3 rtl:mr-3 dark:text-dark-50" :class="{
                                        'line-through text-gray-500 dark:text-dark-500': task.completed,
                                    }">
                                        {{ task.text }}
                                    </span>
                                    <input v-show="task.editing" v-model="task.text" @blur="disableEditing(task)" @keydown.enter="disableEditing(task)" class="ml-3 form-input" :ref="'edit-' + index" />
                                </div>
                                <div class="flex items-center gap-2">
                                    <a href="#!" @click="enableEditing(task)" class="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-yellow-500 dark:hover:text-yellow-500">
                                        <i class="ri-pencil-line"></i>
                                    </a>
                                    <a href="#!" @click="deleteTask(task)" class="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-red-500 dark:hover:text-red-500">
                                        <i class="ri-close-line"></i>
                                    </a>
                                </div>
                            </div>

                            <h6 class="mt-4">
                                Yesterday (<span>{{ yesterdayTasksCount }}</span>)
                            </h6>
                            <div v-for="(task, index) in yesterdayTasks" :key="'yesterday-' + index" class="grid grid-cols-[1fr_36px] items-center gap-6">
                                <div class="input-check-group">
                                    <input type="checkbox" class="input-check input-check-primary" v-model="task.completed" />
                                    <span v-show="!task.editing" @dblclick="enableEditing(task)" class="!text-gray-800 select-none ltr:ml-3 rtl:mr-3 dark:text-dark-50" :class="{
                                        'line-through text-gray-500 dark:text-dark-500': task.completed,
                                    }">
                                        {{ task.text }}
                                    </span>
                                    <input v-show="task.editing" v-model="task.text" @blur="disableEditing(task)" @keydown.enter="disableEditing(task)" class="ml-3 form-input" :ref="'edit-' + index" />
                                </div>
                                <div class="flex items-center gap-2">
                                    <a href="#!" @click="enableEditing(task)" class="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-yellow-500 dark:hover:text-yellow-500">
                                        <i class="ri-pencil-line"></i>
                                    </a>
                                    <a href="#!" @click="deleteTask(task)" class="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-red-500 dark:hover:text-red-500">
                                        <i class="ri-close-line"></i>
                                    </a>
                                </div>
                            </div>
                        </fieldset>

                        <div class="mt-4">
                            <input type="text" placeholder="Add new task..." v-model="newTask" @keydown.enter="addTask" class="form-input" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
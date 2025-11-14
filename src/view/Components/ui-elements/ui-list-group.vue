<script setup lang="ts">
import { ref } from 'vue';
import pageHeading from '@/components/common/PageHeading.vue';
const items = ref([
    'Build functional APIs with zero coding.',
    'Resources with permissions.',
    'Built in user authentication.',
    'Easy Integration with existing apps and tools.'
]);

const borderedItems = ref([
    { text: 'Build functional APIs with zero coding.', active: false },
    { text: 'Resources with permissions.', active: true },
    { text: 'Built in user authentication.', active: false },
    { text: 'Easy Integration with existing apps and tools.', active: false }
]);

// Function to toggle the active state
const toggleActive = (index: number) => {
    borderedItems.value.forEach((item, idx) => {
        item.active = idx === index; // Only the clicked item becomes active
    });
};

const checkboxItems = ref([
    { text: 'Build functional APIs with zero coding.', checked: false },
    { text: 'Resources with permissions.', checked: false },
    { text: 'Built in user authentication.', checked: false },
    { text: 'Easy Integration with existing apps and tools.', checked: false },
]);

const radioItems = ref([
    { text: 'Build functional APIs with zero coding.' },
    { text: 'Resources with permissions.' },
    { text: 'Built in user authentication.' },
    { text: 'Easy Integration with existing apps and tools.' },
]);

const listItems = ref([
    {
        title: 'Item 1',
        description: 'Description for Item 1',
        status: 'Active',
        statusClass: 'text-green-500',
    },
    {
        title: 'Item 2',
        description: 'Description for Item 2',
        status: 'Inactive',
        statusClass: 'text-red-500',
    },
    {
        title: 'Item 3',
        description: 'Description for Item 3',
        status: 'Pending',
        statusClass: 'text-yellow-500',
    },
]);

interface userType {
    name: string;
    points: number;
    avatar: string | any
}

const users = ref<userType[]>([
    {
        name: 'Emily Jones',
        points: 1234,
        avatar: new URL('@/assets/images/avatar/user-11.png', import.meta.url),
    },
    {
        name: 'David Lee',
        points: 987,
        avatar: new URL('@/assets/images/avatar/user-12.png', import.meta.url),
    },
    {
        name: 'Sophia Williams',
        points: 876,
        avatar: new URL('@/assets/images/avatar/user-13.png', import.meta.url),
    },
    {
        name: 'Michael Chen',
        points: 765,
        avatar: new URL('@/assets/images/avatar/user-14.png', import.meta.url),
    },
    {
        name: 'Mia Davis',
        points: 654,
        avatar: new URL('@/assets/images/avatar/user-15.png', import.meta.url),
    },
]);
const selected = ref('');
</script>
<template>
    <pageHeading title="List Group" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Basic List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Disc List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-disc list-inside">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Number List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-decimal list-inside">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Square List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-inside list-square">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Roman Upper List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-inside list-roman">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Circle List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-inside list-circle">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Disc Color List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-disc list-inside marker:text-primary-500">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Marker Color List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-inside list-circle marker:text-green-500">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Number Color List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-decimal list-inside marker:text-purple-500">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Images List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 list-image-[url('../images/others/arrow-right.png')] list-inside">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Flush List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800 *:p-2">
                    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Bordered List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col *:border *:border-gray-200 dark:*:border-dark-800 *:border-b-0 *:p-2">
                    <li v-for="(item, index) in borderedItems " :key="index" :class="['last:border-b [&.active]:bg-primary-500', item.active ? 'bg-primary-500 text-white border-primary-500' : ''
                    ]" @click="toggleActive(index)">
                        {{ item.text }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Hovered List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800 *:p-2">
                    <li v-for="(item, index) in items" :key="index"
                        class="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Link List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800">
                    <li v-for="(item, index) in items" :key="index"
                        class="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
                        <a href="#!" class="block p-2">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Checkbox List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800 *:p-2">
                    <li v-for="(item, index) in checkboxItems" :key="index">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" :id="'checkboxList' + (index + 1)" v-model="item.checked"
                                class="flex-shrink-0 border rounded appearance-none cursor-pointer size-5 checked:bg-primary-500 checked:border-primary-500" />
                            <label :for="'checkboxList' + (index + 1)" class="cursor-pointer select-none">
                                {{ item.text }}
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Radio List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800 *:p-2">
                    <li v-for="(item, index) in radioItems" :key="index">
                        <div class="flex items-center gap-2">
                            <input type="radio" :id="'radioList' + (index + 1)" name="radioListGroup" v-model="selected"
                                :value="item.text"
                                class="flex-shrink-0 border rounded-full appearance-none cursor-pointer size-5 checked:bg-primary-500 checked:border-primary-500" />
                            <label :for="'radioList' + (index + 1)" class="cursor-pointer select-none">
                                {{ item.text }}
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Boxed List</h6>
            </div>
            <div class="card-body">
                <ul class="flex flex-col gap-2 *:border *:rounded-md *:border-gray-200 dark:*:border-dark-800 *:p-2">
                    <li v-for="(item, index) in items" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Content List</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                        <ul class="overflow-hidden border border-gray-200 dark:border-dark-800 sm:rounded-md">
                            <li v-for="(item, index) in listItems" :key="index"
                                :class="{ 'border-t border-gray-200 dark:border-dark-800': index > 0 }">
                                <div class="p-5">
                                    <div class="flex items-center justify-between">
                                        <h6>{{ item.title }}</h6>
                                        <p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-dark-500">{{
                                            item.description }}</p>
                                    </div>
                                    <div class="flex items-center justify-between mt-3">
                                        <p class="text-sm font-medium text-gray-500 dark:text-dark-500">Status:
                                            <span :class="item.statusClass">{{ item.status }}</span>
                                        </p>
                                        <a href="#" class="font-medium text-primary-500 hover:text-primary-500">Edit</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                        <div class="overflow-hidden border border-gray-200 rounded-md dark:border-dark-800">
                            <div class="px-4 py-2 border-b border-gray-200 dark:border-dark-800">
                                <h6>Top Users</h6>
                            </div>
                            <ul class="divide-y divide-gray-200 dark:divide-dark-800">
                                <li v-for="(user, index) in users" :key="index"
                                    class="flex items-center gap-3 px-6 py-4">
                                    <img :src="user.avatar" alt="user"
                                        class="object-cover rounded-full size-10 shrink-0" />
                                    <div class="grow">
                                        <h6>{{ user.name }}</h6>
                                        <p class="text-gray-500 dark:text-dark-500">{{ user.points }} points</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { Eye, EyeOff, Mail } from 'lucide-vue-next';
import { ref } from "vue";
import CommonInput from './common-components/CommonInput.vue';
const defaultInput = ref("");
const floatLabel = ref("");
const placeholderInput = ref("");
const valueInput = ref("Input value");
const disabledInput = ref("Disabled Input");
const validInput = ref("examplegmail.com");
const invalidInput = ref("example.com");
const passwordInput = ref("");
const textareaInput = ref("");
const textareaInputWithPlaceholder = ref("");
const textareaInputWithPlaceholderDefaultValue = ref("Admin dashboard is a single screen that includes all crucial information. In contrast, an admin or control panel allows for certain actions.");
const iconInput = ref("");

const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>
<template>
    <PageHeading title="Basic Input" sub-title="Forms" />
    <div class="grid grid-cols-12 gap-x-space">
        <CommonInput header="Default" title="Default Input" />
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Float Label</h6>
            </div>
            <div class="card-body">
                <div class="relative group" :class="{ show: floatLabel !== '' }">
                    <input v-model="floatLabel" type="text" id="floating_outlined" class="pt-4 form-input peer"
                        placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-dark-500 duration-300 transform z-10 origin-[0] bg-white dark:bg-dark-900 px-2 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 peer-focus:scale-[0.85] peer-focus:-translate-y-4 start-1 group-[&.show]:top-2 group-[&.show]:scale-[0.85] group-[&.show]:-translate-y-4 group-[&.show]:px-2">
                        Float Label
                    </label>
                </div>
            </div>
        </div>
        <CommonInput header="Placeholder" title="Input" placeholder="Placeholder" extra-css="xl:col-span-4" />

        <CommonInput header="Value" title="Input" placeholder="Placeholder" extra-css="xl:col-span-4"
            :value="valueInput" />

        <!-- Disabled -->
        <CommonInput header="Disabled" title="Input" placeholder="Placeholder" extra-css="xl:col-span-4"
            :value="disabledInput" :disabled="true" />

        <!-- Valid Field -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Valid Field</h6>
            </div>
            <div class="card-body">
                <label for="validInput" class="form-label">Email</label>
                <input v-model="validInput" type="email" id="validInput"
                    class="form-input invalid:border-red-500 valid:border-green-500" placeholder="Placeholder" />
            </div>
        </div>

        <!-- Invalid Field -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Invalid Field</h6>
            </div>
            <div class="card-body">
                <label for="invalidInput" class="form-label">Email</label>
                <input v-model="invalidInput" type="email" id="invalidInput"
                    class="form-input invalid:border-red-500 valid:border-green-500" placeholder="Placeholder" />
            </div>
        </div>

        <!-- Password Input -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Password Input</h6>
            </div>
            <div class="card-body">
                <div>
                    <label for="passwordInput" class="form-label">Password</label>
                    <div class="relative">
                        <input v-model="passwordInput" :type="showPassword ? 'text' : 'password'" id="passwordInput"
                            class="form-input" placeholder="Placeholder" />
                        <button type="button" @click="togglePasswordVisibility"
                            class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-none">
                            <Eye v-if="showPassword" class="size-5"></Eye>
                            <EyeOff v-else class="size-5"></EyeOff>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Textarea -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Textarea</h6>
            </div>
            <div class="card-body">
                <label for="textareaInput" class="form-label">Textarea Input</label>
                <textarea v-model="textareaInput" id="textareaInput" rows="3" class="h-auto form-input"></textarea>
            </div>
        </div>

        <!-- Textarea Placeholder -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Textarea Placeholder</h6>
            </div>
            <div class="card-body">
                <label for="textareaInput2" class="form-label">Textarea Placeholder</label>
                <textarea v-model="textareaInputWithPlaceholder" id="textareaInput2" rows="3" class="h-auto form-input"
                    placeholder="Enter your description"></textarea>
            </div>
        </div>

        <!-- Textarea Placeholder -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Textarea Placeholder</h6>
            </div>
            <div class="card-body">
                <label for="textareaInput2" class="form-label">Textarea Placeholder</label>
                <textarea v-model="textareaInputWithPlaceholderDefaultValue" id="textareaInput2" rows="3"
                    class="h-auto form-input" placeholder="Enter your description"></textarea>
            </div>
        </div>

        <!-- Icon with Input -->
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Icon with Input</h6>
            </div>
            <div class="card-body">
                <label for="iconInput" class="form-label">Email</label>
                <div class="relative group/form">
                    <input v-model="iconInput" type="email" id="iconInput"
                        class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        placeholder="Placeholder" />
                    <button
                        class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Mail data-lucide="mail" class="size-4"></Mail>
                    </button>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Icon with Input (Right)</h6>
            </div>
            <div class="card-body">
                <label for="iconInput" class="form-label">Email</label>
                <div class="relative group/form right">
                    <input v-model="iconInput" type="email" id="iconInput"
                        class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        placeholder="Placeholder" />
                    <button
                        class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Mail data-lucide="mail" class="size-4"></Mail>
                    </button>
                </div>
            </div>
        </div>

        <!-- Input Sizes -->
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Input Sizes</h6>
            </div>
            <div class="card-body">
                <div class="grid items-center grid-cols-12 gap-5">
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                        <label for="smallInput" class="form-label">Small Input</label>
                        <input type="text" id="smallInput" class="form-input input-sm">
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                        <label for="mediumInput" class="form-label">Medium Input</label>
                        <input type="text" id="mediumInput" class="form-input input-md">
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                        <label for="defaultInput" class="form-label">Default Input</label>
                        <input type="text" id="defaultInput" class="form-input">
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                        <label for="largeInput" class="form-label">Large Input</label>
                        <input type="text" id="largeInput" class="form-input input-lg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
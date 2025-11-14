<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { Upload } from 'lucide-vue-next';
import { ref } from "vue";

const imageUrl1 = ref<string | null>(null);
const imageUrl2 = ref<string | null>(null);

function onFileChange(event: Event, targetImageUrl: string) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            if (targetImageUrl === "imageUrl1") {
                imageUrl1.value = reader.result as string;
            } else if (targetImageUrl === "imageUrl2") {
                imageUrl2.value = reader.result as string;
            }
        };
        reader.readAsDataURL(file);
    }
}
</script>
<template>
    <PageHeading title="File Input" sub-title="Forms" />
    <div class="grid grid-cols-12 gap-x-space">
        <!-- Basic Inputs -->
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <label for="basicInput1" class="form-label">Light File Input</label>
                        <input type="file" id="basicInput1" class="form-file form-file-light" />
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <label for="basicInput2" class="form-label">Dark File Input</label>
                        <input type="file" id="basicInput2" class="form-file" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <label for="basicInput3" class="form-label">Small File Input</label>
                        <input type="file" id="basicInput3" class="form-file form-file-sm form-file-light" />
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <label for="basicInput4" class="form-label">Medium File Input</label>
                        <input type="file" id="basicInput4" class="form-file form-file-md form-file-light" />
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <label for="basicInput5" class="form-label">Default File Input</label>
                        <input type="file" id="basicInput5" class="form-file form-file-light" />
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <label for="basicInput6" class="form-label">Large File Input</label>
                        <input type="file" id="basicInput6" class="form-file form-file-lg form-file-light" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Upload User Profile 1 -->
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Upload User Profile</h6>
            </div>
            <div class="card-body">
                <div class="text-sm">
                    <div>
                        <label for="logo">
                            <div
                                class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border border-gray-200 rounded cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-32">
                                <img v-if="imageUrl1" :src="imageUrl1" class="object-cover w-full h-full" />
                                <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <Upload data-lucide="upload"></Upload>
                                    <div class="mt-2">User Profile</div>
                                </div>
                            </div>
                        </label>
                        <div class="mt-4">
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" id="logo" @change="onFileChange($event, 'imageUrl1')"
                                    class="block w-full text-sm file:cursor-pointer file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-500/10 file:text-violet-700 hover:file:bg-violet-500/15" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Upload User Profile 2 -->
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Upload User Profile</h6>
            </div>
            <div class="card-body">
                <form class="flex items-center space-x-6">
                    <div class="shrink-0">
                        <img v-if="imageUrl2" :src="imageUrl2" class="object-cover w-16 h-16 rounded-full"
                            alt="Current profile photo" />
                        <img v-else class="object-cover w-16 h-16 rounded-full" src="@/assets/images/avatar/user-13.png"
                            alt="Current profile photo" />
                    </div>
                    <label class="block">
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" @change="onFileChange($event, 'imageUrl2')"
                            class="block w-full text-sm file:cursor-pointer text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-500/10 file:text-violet-700 hover:file:bg-violet-500/15" />
                    </label>
                </form>
            </div>
        </div>
    </div>
</template>
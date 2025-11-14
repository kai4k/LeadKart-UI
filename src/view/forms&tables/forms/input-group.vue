<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

const basicInput1 = ref('');
const basicInput2 = ref('');
const basicInput3 = ref('');
const basicInput4 = ref('');
const basicInput5 = ref('');
const basicInput6 = ref('');
const basicInput7 = ref('');
const basicInput8 = ref('');
const basicInput9 = ref('');

const buttonInput1 = ref('');
const buttonInput2 = ref('');
const buttonInput3 = ref('');
const buttonInput4 = ref('');
const buttonInput5 = ref('');
</script>
<template>
    <PageHeading title="Group Input" sub-title="Forms" />
    <div class="grid grid-cols-12 gap-x-space">
        <!-- Basic Section -->
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group">
                            <label for="basicInput1" class="input-label-group">@</label>
                            <input v-model="basicInput1" type="text" id="basicInput1"
                                class="ltr:rounded-l-none rtl:rounded-r-none form-input" />
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group right">
                            <input v-model="basicInput2" type="text" id="basicInput2"
                                class="ltr:rounded-r-none rtl:rounded-l-none form-input" />
                            <label for="basicInput2" class="input-label-group">@</label>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group">
                            <label for="basicInput3" class="input-label-group">$</label>
                            <input v-model="basicInput3" type="number" id="basicInput3"
                                class="ltr:rounded-l-none rtl:rounded-r-none form-input" />
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group right">
                            <input v-model="basicInput4" type="number" id="basicInput4"
                                class="ltr:rounded-r-none rtl:rounded-l-none form-input" />
                            <label for="basicInput4" class="input-label-group">$</label>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group">
                            <label for="basicInput5" class="input-label-group">Label</label>
                            <input v-model="basicInput5" type="text" id="basicInput5"
                                class="ltr:rounded-l-none rtl:rounded-r-none form-input" />
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group right">
                            <input v-model="basicInput6" type="text" id="basicInput6"
                                class="ltr:rounded-r-none rtl:rounded-l-none form-input" />
                            <label for="basicInput6" class="input-label-group">Label</label>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group">
                            <label for="basicInput7"
                                class="ltr:rounded-r-none rtl:rounded-l-none input-label-group">https://</label>
                            <input v-model="basicInput7" type="text" id="basicInput7"
                                class="ltr:rounded-none rtl:rounded-none form-input" />
                            <label for="basicInput7"
                                class="ltr:border-l-0 rtl:border-r-0 ltr:border-r rtl:border-l input-label-group ltr:rounded-r-md rtl:rounded-l-md">
                                .com
                            </label>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group right">
                            <input v-model="basicInput8" type="text" id="basicInput8"
                                class="ltr:rounded-r-none rtl:rounded-l-none form-input" />
                            <label for="basicInput8" class="input-label-group">@gmail.com</label>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex group">
                            <label for="basicInput9" class="input-label-group">
                                <img src="@/assets/images/payment/mastercard.png" alt="" class="h-[23px]" />
                            </label>
                            <input v-model="basicInput9" type="number" id="basicInput9"
                                class="ltr:rounded-l-none rtl:rounded-r-none form-input"
                                placeholder="0000 0000 0000 0000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Button with Input Group -->
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Button with Input Group</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex">
                            <button type="button"
                                class="ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">Button</button>
                            <input v-model="buttonInput1" type="text" id="buttonInput1"
                                class="ltr:rounded-l-none rtl:rounded-r-none form-input" />
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex">
                            <input v-model="buttonInput2" type="text" id="buttonInput2"
                                class="ltr:rounded-r-none rtl:rounded-l-none form-input" />
                            <button type="button"
                                class="ltr:rounded-l-none rtl:rounded-r-none btn btn-primary">Button</button>
                        </div>
                    </div>
                    <div class="col-span-12">
                        <div class="flex">
                            <button type="button"
                                class="ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">Button</button>
                            <input v-model="buttonInput3" type="text" id="buttonInput3"
                                class="ltr:rounded-none rtl:rounded-none form-input" />
                            <button type="button"
                                class="ltr:rounded-l-none rtl:rounded-r-none btn btn-primary">Button</button>
                        </div>
                    </div>
                    <div class="col-span-12">
                        <div class="flex">
                            <button type="button"
                                class="ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">Button</button>
                            <input v-model="buttonInput4" type="text" id="buttonInput4"
                                class="ltr:rounded-none rtl:rounded-none form-input" />
                            <button type="button"
                                class="ltr:rounded-l-none rtl:rounded-r-none btn btn-primary">Button</button>
                            <input v-model="buttonInput5" type="text" id="buttonInput5"
                                class="ltr:rounded-l-none rtl:rounded-r-none form-input" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
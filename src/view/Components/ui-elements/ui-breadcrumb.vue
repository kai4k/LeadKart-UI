<script setup lang="ts">
import { RiArrowRightDoubleLine, RiArrowRightSLine, RiHome4Line } from 'vue-remix-icons'
import { ref } from 'vue';
import pageHeading from '@/components/common/PageHeading.vue';

</script>
<template>
    <pageHeading title="Breadcrumb" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Base Example</h6>
            </div>
            <div class="flex flex-col gap-4 card-body">
                <ul class="flex items-center gap-2">
                    <li class=""><a href="#!">Domiex</a></li>
                    <li>
                        <RiArrowRightDoubleLine class="w-4 text-gray-500" />
                    </li>
                    <li class=""><a href="#!">UI</a></li>
                    <li>
                        <RiArrowRightDoubleLine class="w-4 text-gray-500" />
                    </li>
                    <li class="">Breadcrumb</li>
                </ul>

                <ul class="flex gap-1 breadcrumb">
                    <li class="breadcrumb-item"><a href="#!">
                            <RiHome4Line class="w-4" />
                        </a></li>
                    <li>
                        <RiArrowRightDoubleLine class="w-4 text-gray-500" />
                    </li>
                    <li class="breadcrumb-item"><a href="#!">UI</a></li>
                    <li>
                        <RiArrowRightDoubleLine class="w-4 text-gray-500" />
                    </li>
                    <li class="breadcrumb-item active">Breadcrumb</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Arrow Example</h6>
            </div>
            <div class="card-body">
                <ul class="flex gap-1 breadcrumb">
                    <li class="breadcrumb-item"><a href="#!">Domiex</a></li>
                    <li>
                        <RiArrowRightSLine class="w-4 text-gray-500" />
                    </li>
                    <li class="breadcrumb-item"><a href="#!">UI</a></li>
                    <li>
                        <RiArrowRightSLine class="w-4 text-gray-500" />
                    </li>
                    <li class="breadcrumb-item active">Breadcrumb</li>
                </ul>

                <ul class="flex gap-1 breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#!">
                            <RiHome4Line class="w-4" />
                        </a>
                    </li>
                    <li>
                        <RiArrowRightSLine class="w-4 text-gray-500" />
                    </li>
                    <li class="breadcrumb-item"><a href="#!">Advance UI</a></li>
                    <li>
                        <RiArrowRightSLine class="w-4 text-gray-500" />
                    </li>
                    <li class="breadcrumb-item active">Scrollbar</li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Line Example</h6>
            </div>
            <div class="card-body">
                <ul class="flex gap-2">
                    <li class="breadcrumb-item"><a href="#!">Domiex</a></li>
                    <li><span class="text-gray-400">-</span> </li>
                    <li class="breadcrumb-item"><a href="#!">UI</a></li>
                    <li><span class="text-gray-400">-</span> </li>
                    <li class="breadcrumb-item active">Breadcrumb</li>
                </ul>

                <ul class="flex items-center gap-2">
                    <li class=" breadcrumb-item">
                        <a href="#!">
                            <RiHome4Line class="w-4 align-middle"></RiHome4Line>
                        </a>
                    </li>
                    <li><span class="text-gray-400">-</span> </li>
                    <li class="breadcrumb-item"><a href="#!">Advance UI</a></li>
                    <li><span class="text-gray-400">-</span> </li>
                    <li class="breadcrumb-item active">Scrollbar</li>
                </ul>
            </div>
        </div>
    </div>
</template>
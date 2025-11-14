<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import pageHeading from '@/components/common/PageHeading.vue';
import HighLights from '@/components/common/HighLights.vue';
import { MoveRight } from 'lucide-vue-next'
onMounted(() => {
    Prism.highlightAll();
})

interface Icon {
    iconClass: string;
    class: string;
}

const icons = ref<Icon[]>([
    { iconClass: 'las la-battery-three-quarters', class: 'text-primary-500' },
    { iconClass: 'las la-radiation', class: 'text-gray-500 dark:text-dark-500' },
    { iconClass: 'las la-angle-double-right', class: 'text-green-500' },
    { iconClass: 'las la-photo-video', class: 'text-purple-500' },
    { iconClass: 'las la-campground', class: 'text-yellow-500' },
    { iconClass: 'lab la-modx', class: 'text-sky-500' },
]);

interface Size {
    class: string;
}

const sizes: Size[] = [
    { class: 'text-xs' },
    { class: 'text-14' },
    { class: '' }, // Default size
    { class: 'text-16' },
    { class: 'text-lg' },
    { class: 'text-xl' },
    { class: 'text-2xl' },
    { class: 'text-3xl' },
    { class: 'text-4xl' },
    { class: 'text-5xl' },
    { class: 'text-6xl' },
    { class: 'text-8xl' },
];
</script>
<template>
    <pageHeading title="Line Awesome" sub-title="Icons" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="flex flex-col gap-2 md:items-center md:flex-row card-header">
                <h6 class="text-15 grow">Line Awesome Icons</h6>
                <a href="https://icons8.com/line-awesome" target="_blank"
                    class="font-medium text-red-500 underline transition duration-200 ease-linear hover:text-red-600 shrink-0">View
                    All Icons
                    <MoveRight class="inline-block ml-1 size-4" />
                </a>
            </div>
            <div class="card-body">
                <p class="mb-3 text-gray-500 dark:text-dark-500">Line Awesome can be loaded via CDN or downloaded as zip
                    archive. You can read more about this options on Line Awesome how-to page.</p>

                <h6 class="mb-2 text-16">Installation</h6>
                <p class="text-gray-500 dark:text-dark-500">Alternatively, Line Awesome can be installed as npm package:
                </p>

                <pre class="relative"><HighLights/>
<code slot="code" class="language-js">yarn add line-awesome</code></pre>

                <p class="text-gray-500 dark:text-dark-500">import CSS to your <code
                        class="text-pink-500">icons.scss</code></p>

                <pre class="relative"><HighLights/>
<code slot="code" class="language-js">@import 'line-awesome/dist/line-awesome/css/line-awesome.css';</code></pre>

                <h6 class="mb-1">CDN</h6>
                <p class="text-gray-500 dark:text-dark-500">If you already have Font Awesome installed, simply switch
                    out the link to start using Line Awesome:</p>

                <pre class="relative"><HighLights/>
<code slot="code" class="language-js">&lt;link href=&quot;https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre>

                <h6 class="mb-1">Usage</h6>
                <p class="text-gray-500 dark:text-dark-500">Use the preview page to quickly find the name of the icon
                    you want to use.</p>

                <pre class="relative"><HighLights/>
<code slot="code" class="language-js">&lt;i class=&quot;las la-battery-three-quarters&quot;&gt;&lt;/i&gt;</code></pre>

                <p class="mb-0 text-gray-500 dark:text-dark-500">For more details, see the <a
                        href="https://icons8.com/line-awesome/howto" target="_blank"
                        class="transition duration-200 ease-linear hover:text-primary-600 text-primary-500">documentation</a>.
                </p>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Color Icons</h6>
            </div>
            <div class="card-body">
                <div
                    class="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md text-xl flex-wrap">
                    <div v-for="icon in icons" :key="icon.class" :class="icon.class">
                        <i :class="icon.iconClass"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Sizes Icons</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div v-for="size in sizes" :key="size.class">
                        <i :class="['las la-battery-three-quarters', size.class, 'text-primary-500']"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
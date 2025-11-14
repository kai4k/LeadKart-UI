<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { onMounted, ref } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import hightLights from '@/components/common/HighLights.vue';
import { Apple, Award, Bell, Bot, Box, Building2, CalendarDays, Camera, ChefHat, FileText, Globe, Heart, ShoppingBag, ShoppingCart } from 'lucide-vue-next';
onMounted(() => {
  Prism.highlightAll()
})
let iconSize = ref(20)

</script>
<template>
  <pageHeading title="Lucide" sub-title="Icons" />
  <div class="grid grid-cols-12 gap-x-space">
    <div class="col-span-12 card">
      <div class="flex items-center card-header">
        <h6 class="text-15 grow">Lucide Icons</h6>
        <a href="https://lucide.dev/icons" target="_blank"
          class="font-medium text-red-500 underline transition duration-200 ease-linear hover:text-red-600 shrink-0">
          View All Icons
        </a>
      </div>
      <div class="card-body">
        <p class="mb-3 text-gray-500 dark:text-dark-500">
          Lucide is an open-source icon library that provides
          <code class="text-pink-500">1000+</code> vector (svg) files for
          displaying icons and symbols in digital and non-digital projects. The
          library aims to make it easier for designers and developers to
          incorporate icons into their projects by providing several official
          packages to make it easier to use these icons in your project.
        </p>

        <h6 class="mb-2 text-16">Installation</h6>

        <h6 class="mb-1">Package Managers</h6>
        <p class="text-gray-500 dark:text-dark-500">
          Implementation of the lucide icon library for web applications.
        </p>
        <pre class="relative">
          <hightLights/>
<code class="language-js">yarn add remixicon --save</code></pre>

        <h6 class="mb-1">CDN</h6>
        <p class="text-gray-500">
          Implementation of the lucide icon library for web applications.
        </p>

        <pre class="relative">
          <hightLights/><code class="language-js">
&lt;!-- Development version --&gt;
&lt;script src=&quot;https://unpkg.com/lucide@latest/dist/umd/lucide.js&quot;&gt;&lt;/script&gt;

&lt;!-- Production version --&gt;
&lt;script src=&quot;https://unpkg.com/lucide@latest&quot;&gt;&lt;/script&gt;</code></pre>

        <h6 class="mb-1">Usage</h6>
        <p class="text-gray-500 dark:text-dark-500">
          Here is a complete example with unpkg
        </p>

        <pre class="relative"><hightLights/><code class="language-js">
&lt;script setup land="ts"&quot;&gt;&lt;/script&gt;
  import { Volume2, X, Star, Menu } from 'lucide-vue-next';
&lt;/script&gt;

&lt;template&gt;
  &lt;Volume2 class=&quot;size-5&quot;&gt;&lt;/i&gt;
  &lt;X class=&quot;size-5&quot;&gt;&lt;/i&gt;
  &lt;Menu class=&quot;size-5&quot;&gt;&lt;/i&gt;
&lt;/template&gt;</code>
      </pre>

        <p class="mb-0 text-gray-500 dark:text-dark-500">
          For more details, see the
          <a href="#!" class="link hover:text-primary-600 text-primary-500">documentation</a>.
        </p>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 card">
      <div class="card-header">
        <h6 class="card-title">Color Icons</h6>
      </div>
      <div class="card-body">
        <div
          class="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md flex-wrap">
          <div>
            <Award :size="iconSize" class="text-gray-500 dark:text-dark-500" />
          </div>
          <div>
            <Box :size="iconSize" class=" text-primary-500" />
          </div>
          <div>
            <Bot :size="iconSize" class="text-green-500 " />
          </div>
          <div>
            <ChefHat :size="iconSize" class="text-yellow-500 " />
          </div>
          <div>
            <Camera :size="iconSize" class="text-purple-500 " />
          </div>
          <div>
            <FileText :size="iconSize" class="text-red-500 " />
          </div>
          <div>
            <Globe :size="iconSize" class=" text-sky-500" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 card">
      <div class="card-header">
        <h6 class="card-title">Stroke Width</h6>
      </div>
      <div class="card-body">
        <div
          class="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md">
          <div>
            <Box :stroke-width="1" class="size-5 text-primary-500" />
          </div>
          <div>
            <Box :stroke-width="2" class="size-5 text-primary-500" />
          </div>
          <div>
            <Box :stroke-width="3" class="size-5 text-primary-500" />
          </div>
          <div>
            <Box :stroke-width="4" class="size-5 text-primary-500" />
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
          <div>
            <Box class="size-2 text-primary-500" />
          </div>
          <div>
            <Box class="size-2.5 text-primary-500" />
          </div>
          <div>
            <Box class="size-3 text-primary-500" />
          </div>
          <div>
            <Box class="size-3.5 text-primary-500" />
          </div>
          <div>
            <Box class="size-4 text-primary-500" />
          </div>
          <div>
            <Box class="size-5 text-primary-500" />
          </div>
          <div>
            <Box class="size-6 text-primary-500" />
          </div>
          <div>
            <Box class="size-7 text-primary-500" />
          </div>
          <div>
            <Box class="size-8 text-primary-500" />
          </div>
          <div>
            <Box class="size-9 text-primary-500" />
          </div>
          <div>
            <Box class="size-10 text-primary-500" />
          </div>
          <div>
            <Box class="size-11 text-primary-500" />
          </div>
          <div>
            <Box class="size-12 text-primary-500" />
          </div>
          <div>
            <Box class="size-14 text-primary-500" />
          </div>
          <div>
            <Box class="size-16 text-primary-500" />
          </div>
          <div>
            <Box class="size-20 text-primary-500" />
          </div>
          <div>
            <Box class="size-24 text-primary-500" />
          </div>
          <div>
            <Box class="size-28 text-primary-500" />
          </div>
          <div>
            <Box class="size-32 text-primary-500" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 card">
      <div class="card-header">
        <h6 class="card-title">Duotune Icons</h6>
      </div>
      <div class="card-body">
        <div class="flex flex-wrap items-center gap-5">
          <div>
            <Apple class="size-6 text-primary-500 fill-primary-500/20" />
          </div>
          <div>
            <Heart class="text-red-500 size-6 fill-red-500/20" />
          </div>
          <div>
            <ShoppingCart class="text-green-500 size-6 fill-green-500/20" />
          </div>
          <div>
            <Bell class="size-6 text-sky-500 fill-sky-500/20" />
          </div>
          <div>
            <ShoppingBag class="text-purple-500 size-6 fill-purple-500/20" />
          </div>
          <div>
            <CalendarDays class="text-yellow-500 size-6 fill-yellow-500/20" />
          </div>
          <div>
            <Building2 class="text-pink-500 size-6 fill-pink-500/20" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 card">
      <div class="card-header">
        <h6 class="card-title">Hover Duotune Icons</h6>
      </div>
      <div class="card-body">
        <div class="flex flex-wrap items-center gap-5">
          <a href="#!">
            <Apple class="transition duration-300 ease-linear size-6 text-primary-500 hover:fill-primary-500/20" />
          </a>
          <a href="#!">
            <Heart class="text-red-500 transition duration-300 ease-linear size-6 hover:fill-red-500/20" />
          </a>
          <a href="#!">
            <ShoppingCart class="text-green-500 transition duration-300 ease-linear size-6 hover:fill-green-500/20" />
          </a>
          <a href="#!">
            <Bell class="transition duration-300 ease-linear size-6 text-sky-500 hover:fill-sky-500/20" />
          </a>
          <a href="#!">
            <ShoppingBag class="text-purple-500 transition duration-300 ease-linear size-6 hover:fill-purple-500/20" />
          </a>
          <a href="#!">
            <CalendarDays class="text-yellow-500 transition duration-300 ease-linear size-6 hover:fill-yellow-500/20" />
          </a>
          <a href="#!">
            <Building2 class="text-pink-500 transition duration-300 ease-linear size-6 hover:fill-pink-500/20" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
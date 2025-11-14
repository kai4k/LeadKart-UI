<script setup lang="ts">
import { onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import pageHeading from '@/components/common/PageHeading.vue';
import HighLights from '@/components/common/HighLights.vue';
onMounted(() => {
    Prism.highlightAll()
})
</script>
<template>
    <pageHeading title="Highlight Code" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">HTML Highlight Code</h6>
            </div>
            <div class="card-body">
                <pre class="relative">
                    <HighLights/><code class="language-js" >
&lt;div x-data=&quot;{ 
    baseButtons: [
            { text: 'Primary', color: 'btn-primary'}, 
            { text: 'Purple', color: 'btn-purple'}, 
            { text: 'Green', color: 'btn-green'}, 
            { text: 'Red', color: 'btn-red'}, 
            { text: 'Yellow', color: 'btn-yellow'}, 
            { text: 'Sky', color: 'btn-sky'}, 
            { text: 'Pink', color: 'btn-pink'}, 
            { text: 'Indigo', color: 'btn-indigo'}, 
            { text: 'Orange', color: 'btn-orange'}, 
            { text: 'Dark', color: 'btn-gray'}, 
            { text: 'Light', color: 'bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 hover:text-gray-800 hover:border-gray-300 
focus:bg-gray-300 focus:text-gray-800 focus:border-gray-300'}, 
        ] 
}&quot; class=&quot;flex flex-wrap gap-4&quot;&gt;
    &lt;template x-for=&quot;(button, index) in baseButtons&quot; :key=&quot;index&quot;&gt;
        &lt;button :class=&quot;button.color + ' btn'&quot; x-text=&quot;button.text&quot;&gt;
        &lt;/button&gt;
    &lt;/template&gt;
&lt;/div&gt;</code></pre>
            </div>
        </div><!--end col-->
    </div>
</template>
<style scoped>
/* Add your styles here */
</style>
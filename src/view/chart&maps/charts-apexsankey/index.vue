<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import ApexSankeyChart from './ApexSankeyChart.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import NodeCustomization from './NodeCustomization.vue';
import EdgeCustomization from './EdgeCustomization.vue';
import FontOptions from './FontOptions.vue';
</script>
<template>
    <PageHeading title="ApexSankey" sub-title="Charts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :full-width="true">
            <ApexSankeyChart />
        </Card>
        <Card :full-width="true" title="Node Customization">
            <NodeCustomization />
        </Card>
        <Card :full-width="true" title="Node Customization">
            <EdgeCustomization />
        </Card>
        <Card :full-width="true" title="Font Options">
            <FontOptions />
        </Card>
    </div>
</template>
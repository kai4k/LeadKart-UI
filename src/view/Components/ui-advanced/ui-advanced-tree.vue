<script setup lang="ts">
import { ref } from 'vue';
import pageHeading from '@/components/common/PageHeading.vue';
import TreeItem from '@/components/common/TreeItem.vue';
const folderTree = ref([
    {
        title: 'Domiex-Vue Folders',
        isOpen: false,
        children: [
            {
                title: 'plugins',
                isOpen: false,
                children: [
                    {
                        title: 'plugins',
                        isOpen: false,
                        children: [
                            { title: 'layouts', isOpen: false, children: [{ title: 'Layouts Plugins' }] },
                            { title: 'Plugins', isOpen: false, children: [{ title: 'Plugins' }] },
                        ],
                    },
                    { title: 'buttons.js' },
                    { title: 'cards.js' },
                    { title: 'forms.js' },
                    { title: 'headings.js' },
                ],
            },
            {
                title: 'public',
                isOpen: false,
                children: [
                    { title: 'favicon.ico' },
                ],
            },
            {
                title: 'src',
                isOpen: false,
                children: [
                    {
                        title: 'assets',
                        isOpen: false,
                        children: [
                            { title: 'fonts', isOpen: false, children: [{ title: 'All Fonts' }] },
                            { title: 'images', isOpen: false, children: [{ title: 'ALL Images' }] },
                            { title: 'js', isOpen: false, children: [{ title: 'All JS Files' }] },
                            { title: 'libs', isOpen: false, children: [{ title: 'All Libs Files' }] },
                            { title: 'scss', isOpen: false, children: [{ title: 'All Scss Files' }] },
                        ],
                    },
                    {
                        title: 'components',
                        isOpen: false,
                        children: [
                            { title: 'common', isOpen: false, children: [{ title: 'All common component' }] },
                            { title: 'SidebarDropDown.vue' },
                            { title: 'All component file' }
                        ],
                    },
                    {
                        title: 'layout',
                        isOpen: false,
                        children: [
                            {
                                title: 'main-layout', isOpen: false,
                                children: [
                                    { title: 'Footer.vue' },
                                    { title: 'index.vue' },
                                    { title: 'layout.common.faction.ts' },
                                    { title: 'nav-menu-list.ts' },
                                    { title: 'NavbarList.vue' },
                                    { title: 'Topbar.vue' },
                                ]
                            },
                        ],
                    },
                    {
                        title: 'store',
                        isOpen: false,
                        children: [
                            { title: 'defaultDetails.ts' },
                            { title: 'layout.d.ts' }
                        ],
                    },
                    {
                        title: 'utils',
                        isOpen: false,
                        children: [
                            { title: 'color-converter.ts' },
                            { title: 'helper-functions.ts' }
                        ],
                    },
                    {
                        title: 'view',
                        isOpen: false,
                        children: [
                            { title: 'apps', isOpen: false, children: [{ title: 'All apps component' }] },
                            { title: 'chart&maps', isOpen: false, children: [{ title: 'All chart&maps component' }] },
                            { title: 'dashboards', isOpen: false, children: [{ title: 'All dashboards component' }] },
                            { title: 'form&tables', isOpen: false, children: [{ title: 'All form&tables component' }] },
                        ],
                    },
                    { title: 'App.vue' },
                    { title: 'i18n.ts' },
                    { title: 'main.ts' },
                ],
            },
            { title: '.gitignore' },
            { title: 'evn.d.ts' },
            { title: 'index.html' },
            { title: 'package.json' },
            { title: 'postcss.config.js' },
            { title: 'README.md' },
            { title: 'tailwind.config.js' },
            { title: 'tsconfig.app.json' },
            { title: 'vite.config.js' },
            { title: 'yarn.lock' },
        ],
    },
]);

</script>
<template>
    <pageHeading title="Tree" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Folder Structure Tree</h6>
            </div>
            <div class="card-body">
                <div class="-mx-5">
                    <ul>
                        <TreeItem v-for="(item, index) in folderTree" :key="index" :node="item" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
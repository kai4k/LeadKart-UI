<script setup lang="ts">
import UserProfileHeader from '@/components/common/UserProfileHeader.vue';
import ProfileTapBar from '@/view/apps/ProfileTapBar.vue';
import { tabs } from '../user-personal-details';
import StatementTable from './StatementTable.vue';
</script>
<template>
    <UserProfileHeader />
    <ProfileTapBar :tabs="tabs" active-tab="statement" />
    <StatementTable />
</template>
<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import PatientDetailsForm from './PatientDetailsForm.vue';
import InsuranceForm from './InsuranceForm.vue';

</script>
<template>
    <PageHeading title="Create Patient" sub-title="Patients" />
    <PatientDetailsForm />
    <InsuranceForm />
</template>
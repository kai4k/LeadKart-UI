<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { computed } from 'vue';

interface EmployeeInfo {
    id: string;
    name: string;
    designation: string;
    payPeriod: string;
    department: string;
    month: string;
    workedDays: string;
}

interface Finance {
    type: string;
    amount: string;
}

const employeeInfo: EmployeeInfo = {
    id: 'PE-A14E0112',
    name: 'Sophia Mia',
    designation: 'Accounts Specialist',
    payPeriod: 'February',
    department: 'Finance',
    month: 'Nov - Dec, 2024',
    workedDays: '24 Days',
};

const earnings: Finance[] = [
    { type: 'Basic Salary', amount: '$17,500' },
    { type: 'Incentive Pay', amount: '$900' },
    { type: 'Other Allowance', amount: '$450' },
];

const deductions: Finance[] = [
    { type: 'Tax', amount: '$700' },
    { type: 'Health Insurance', amount: '$1,100' },
    { type: 'Absences (3)', amount: '$1,245.22' },
];

const totalEarnings = computed(() =>
    earnings.reduce((acc, curr) => acc + parseFloat(curr.amount.replace(/[$,]/g, '')), 0)
);
const totalDeductions = computed(() =>
    deductions.reduce((acc, curr) => acc + parseFloat(curr.amount.replace(/[$,]/g, '')), 0)
);
const netPay = computed(() => (totalEarnings.value - totalDeductions.value).toLocaleString());

const printPage = () => {
    window.print();
};
</script>
<template>
    <PageHeading title="Payslip" sub-title="Payroll" />
    <div class="grid grid-cols-12 mb-space">
        <div
            class="relative col-span-12 xl:col-span-8 xl:col-start-3 card print:col-span-12 print:border-0 print:shadow-none">
            <img src="../../../../../../src/assets/images/favicon.ico" alt=""
                class="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-64 opacity-15" />
            <div class="card-body">
                <div class="grid grid-cols-12 pb-4 mb-4 border-b border-gray-200 dark:border-dark-800">
                    <div class="col-span-12 md:col-span-5">
                        <div class="mb-5">
                            <img src="../../../../../../src/assets/images/main-logo.png" alt=""
                                class="inline-block h-8 dark:hidden" />
                            <img src="../../../../../../src/assets/images/logo-white.png" alt=""
                                class="hidden h-8 dark:inline-block" />
                        </div>
                        <h6 class="mb-1">Domiex - Multispeciality Hospital</h6>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">
                            1960 Squaw Valley Rd, Olympic Valley, California, United States -
                            96146
                        </p>
                        <p class="text-gray-500 dark:text-dark-500">
                            <a href="mailto:domiex@example.com">domiex@example.com</a>
                        </p>
                    </div>
                </div>

                <h6 class="mb-3">Employee Information:</h6>
                <div class="grid grid-cols-12 gap-2">
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Employee ID:</span>
                        {{ employeeInfo.id }}
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Employee Name:</span>
                        {{ employeeInfo.name }}
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Designation:</span>
                        {{ employeeInfo.designation }}
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Pay Period:</span>
                        {{ employeeInfo.payPeriod }}
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Department:</span>
                        {{ employeeInfo.department }}
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Month:</span>
                        {{ employeeInfo.month }}
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <span class="text-gray-500 dark:text-dark-500">Worked Days:</span>
                        {{ employeeInfo.workedDays }}
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-space">
                    <div class="col-span-12 md:col-span-6">
                        <div class="mt-5 overflow-x-auto">
                            <table class="table bordered">
                                <tbody>
                                    <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                        <th>Earnings</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr v-for="earning in earnings" :key="earning.type">
                                        <td>{{ earning.type }}</td>
                                        <td>{{ earning.amount }}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Earnings</td>
                                        <td>${{ totalEarnings.toLocaleString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="mt-5 overflow-x-auto">
                            <table class="table bordered">
                                <tbody>
                                    <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                        <th>Deduction</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr v-for="deduction in deductions" :key="deduction.type">
                                        <td>{{ deduction.type }}</td>
                                        <td>{{ deduction.amount }}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Deduction</td>
                                        <td>${{ totalDeductions.toLocaleString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="p-3 mt-3 text-center border border-gray-200 rounded-md dark:border-dark-800">
                            <h6>Net Pay: ${{ netPay.toLocaleString() }}</h6>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-2 mt-10">
                    <div class="col-span-12">
                        <p class="mb-2 text-gray-500 dark:text-dark-500">
                            For any Queries, Please mail us at
                            <span class="font-medium">domiex@example.com</span>
                        </p>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Regards</p>
                        <p>SRBThemes</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 text-right xl:col-span-8 xl:col-start-3 print:hidden">
            <button type="button" @click="printPage" class="btn btn-primary">
                Print Now
            </button>
        </div>
    </div>
</template>
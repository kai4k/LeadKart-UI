<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { Printer, RotateCcw, Upload } from 'lucide-vue-next';
import { reactive, ref } from 'vue';

const imageUrl = ref("")
interface Product {
    name: string;
    category: string;
    quantity: number;
    unitPrice: string;
    discountPercentage: string;
    totalAmount: string;
    nameError?: string;
    categoryError?: string;
    unitPriceError?: string;
    discountError?: string;
}

const companyName = ref('');
const companyNameError = ref('');
const companyEmail = ref('');
const emailError = ref('');
const companyPhone = ref('');
const phoneError = ref('');

const products = reactive<Product[]>([
    {
        name: '',
        category: '',
        quantity: 1,
        unitPrice: '',
        discountPercentage: '',
        totalAmount: '',
    },
]);

const subtotal = ref('0.00');
const grandTotal = ref('0.00');
const vatAmount = ref('0.00');
const shippingCharge = ref('0.00');
const additionalDiscount = ref('0');


const validateProductName = (index: number) => {
    const product = products[index];
    product.nameError = product.name.trim() === '' ? 'Product name is required.' : '';
};

// Validate Product Category
const validateCategory = (index: number) => {
    const product = products[index];
    product.categoryError = product.category.trim() === '' ? 'Category is required.' : '';
};

// Increment Product Quantity
const incrementQuantity = (index: number) => {
    products[index].quantity++;
    calculateTotal(index);
};

// Decrement Product Quantity
const decrementQuantity = (index: number) => {
    if (products[index].quantity > 1) {
        products[index].quantity--;
        calculateTotal(index);
    }
};

// Validate Unit Price
const validateUnitPrice = (index: number) => {
    const product = products[index];
    const unitPrice = parseFloat(product.unitPrice);
    product.unitPriceError =
        isNaN(unitPrice) || unitPrice <= 0
            ? 'Unit price must be a positive number.'
            : '';
};

// Validate Discount Percentage
const validateDiscountPercentage = (index: number) => {
    const product = products[index];
    const discountPercentage = parseFloat(product.discountPercentage);
    product.discountError =
        isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100
            ? 'Discount must be between 0% and 100%.'
            : '';
};

// Calculate Total Amount for a Product
const calculateTotal = (index: number) => {
    const product = products[index];
    const unitPrice = parseFloat(product.unitPrice) || 0;
    const quantity = product.quantity;
    const discountPercentage = parseFloat(product.discountPercentage) || 0;

    const discountAmount = (unitPrice * quantity) * (discountPercentage / 100);
    const totalAmount = (unitPrice * quantity) - discountAmount;

    product.totalAmount = totalAmount.toFixed(2);

    // Recalculate subtotal and grand total
    calculateTotals();
};

// Calculate Subtotal and Grand Total
const calculateTotals = () => {
    const total = products.reduce((sum, product) => {
        return sum + (parseFloat(product.totalAmount) || 0);
    }, 0);

    subtotal.value = total.toFixed(2);
    grandTotal.value = total.toFixed(2); // Can add other charges if needed
};

// Add a New Product Row
const addItem = () => {
    products.push({
        name: '',
        category: '',
        quantity: 1,
        unitPrice: '',
        discountPercentage: '',
        totalAmount: '',
    });
};

// Delete a Product Row
const deleteItem = (index: number) => {
    products.splice(index, 1);
    calculateTotals();
};

// Reset the Form
const resetForm = () => {
    companyName.value = '';
    companyNameError.value = '';
    companyEmail.value = '';
    emailError.value = '';
    companyPhone.value = '';
    phoneError.value = '';
    products.splice(0, products.length, {
        name: '',
        category: '',
        quantity: 1,
        unitPrice: '',
        discountPercentage: '',
        totalAmount: '',
    });
    subtotal.value = '0.00';
    grandTotal.value = '0.00';
    cardHolderNameError.value = "";
    cardNumberError.value = "";
    expiryDateError.value = "";
    cvvError.value = "";

};

// Validate Company Name
const validateCompanyName = () => {
    companyNameError.value = companyName.value.trim() === '' ? 'Company name is required' : '';
};

// Validate Email
const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = !emailPattern.test(companyEmail.value) ? 'Invalid email format' : '';
};

// Validate Phone Number
const validatePhone = () => {
    const phonePattern = /^[0-9]*$/;
    phoneError.value = !phonePattern.test(companyPhone.value) ? 'Phone number must be numeric' : '';
};

// Create Invoice
const createInvoice = () => {
    if (isFormValid()) {
        alert('Invoice created successfully!');
    }
};

// Check if the Form is Valid
const isFormValid = () => {
    validateCompanyName();
    validateEmail();
    validatePhone();
    validateCardHolderName();
    formatCardNumber();
    validateExpiryDate();
    validateCVV()
    products.forEach((product, index) => {
        validateProductName(index);
        validateCategory(index);
        validateUnitPrice(index);
        validateDiscountPercentage(index);
    });

    const hasProductErrors = products.some(
        (product) =>
            product.nameError ||
            product.categoryError ||
            product.unitPriceError ||
            product.discountError
    );

    return (
        !companyNameError.value &&
        !emailError.value &&
        !phoneError.value &&
        !hasProductErrors
    );
};

// -----------Payment validation -------------

// Form fields and validation errors
const cardHolderName = ref('');
const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');

const cardHolderNameError = ref('');
const cardNumberError = ref('');
const expiryDateError = ref('');
const cvvError = ref('');

// Validation methods
const validateCardHolderName = () => {
    cardHolderNameError.value = cardHolderName.value.trim() === '' ? 'Card holder name is required.' : '';
};

const validateCardNumber = () => {
    const regex = /^[0-9]{16}$/;
    cardNumberError.value = !regex.test(cardNumber.value.replace(/\s/g, '')) ? 'Card number must be 16 digits.' : '';
};

const formatCardNumber = () => {
    let formatted = cardNumber.value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    cardNumber.value = formatted;
    validateCardNumber();
};

const formatExpiryDate = () => {
    let formatted = expiryDate.value.replace(/[^0-9]/g, '').slice(0, 6);
    if (formatted.length > 2) {
        formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
    }
    expiryDate.value = formatted;
};

const validateExpiryDate = () => {
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    expiryDateError.value = !regex.test(expiryDate.value) ? 'Invalid expiry date. Format MM/YYYY' : '';
};

const validateCVV = () => {
    const regex = /^[0-9]{3}$/;
    cvvError.value = !regex.test(cvv.value) ? 'CVV must be 3 digits.' : '';
};

</script>
<template>
    <PageHeading title="Create Invoice" sub-title="Invoices" />
    <div>
        <div class="card">
            <div class="card-header">
                <div class="items-center gap-3 space-y-3 md:flex md:space-y-0">
                    <h6 class="grow">Create Invoice</h6>
                    <div class="flex flex-wrap items-center gap-2 shrink-0">
                        <button class="btn btn-sub-gray" @click="resetForm">
                            <RotateCcw class="inline-block size-4"></RotateCcw> Reset
                        </button>
                        <button class="btn btn-sub-green">
                            <Printer class="inline-block size-4"></Printer> Print Invoice
                        </button>
                        <button class="btn btn-primary" @click="createInvoice">
                            Save Invoice
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form>
                    <h6 class="mb-3">Company Information</h6>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <h6 class="form-label">Company Logo</h6>
                            <div>
                                <label for="logo">
                                    <span class="inline-flex items-center justify-center w-full h-32 overflow-hidden bg-gray-100 border border-gray-200 rounded-md cursor-pointer dark:bg-dark-850 dark:border-dark-800">
                                        <img v-if="imageUrl" :src="imageUrl" class="object-cover h-24" />
                                        <span v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                            <Upload data-lucide="upload"></Upload>
                                            <span class="block mt-3">Upload Your Company Logo</span>
                                        </span>
                                    </span>
                                </label>
                                <!-- @change="fileChosen" -->
                                <input type="file" name="logo" id="logo" class="hidden" />
                            </div>
                        </div>
                        <!-- Company Name -->
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <label for="companyNameInput" class="form-label">Company Name</label>
                            <input type="text" id="companyNameInput" v-model="companyName" @input="validateCompanyName" class="form-input" />
                            <p v-if="companyNameError" class="text-red-500">{{ companyNameError }}</p>
                        </div>
                        <!-- Email -->
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <label for="companyEmailInput" class="form-label">Email</label>
                            <input type="email" id="companyEmailInput" v-model="companyEmail" @input="validateEmail" class="form-input" />
                            <p v-if="emailError" class="text-red-500">{{ emailError }}</p>
                        </div>
                        <!-- Phone Number -->
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <label for="companyPhoneNumberInput" class="form-label">Phone Number</label>
                            <input type="text" id="companyPhoneNumberInput" v-model="companyPhone" @input="validatePhone" class="form-input" />
                            <p v-if="phoneError" class="text-red-500">{{ phoneError }}</p>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3">
                            <label for="invoiceIDInput" class="form-label">Invoice ID</label>
                            <input type="text" id="invoiceIDInput" class="form-input" disabled value="#PEI-15485">
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3">
                            <label for="invoiceDateInput" class="form-label">Invoice Date</label>
                            <input type="date" id="invoiceDateInput" class="form-input">
                            <p x-show="invoiceDateError" class="text-red-500" x-text="invoiceDateError"></p>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3">
                            <label for="dueDateInput" class="form-label">Payment Due Date</label>
                            <input type="date" id="dueDateInput" class="form-input">
                            <p x-show="dueDateError" class="text-red-500" x-text="dueDateError"></p>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3">
                            <label for="invoiceStatus" class="form-label">Invoice Status</label>
                            <select name="" id="" placeholder="Invoice Type" class="form-select">
                                <option value=""></option>
                                <option value="">Paid</option>
                                <option value="">Unpaid</option>
                                <option value="">Pending</option>
                                <option value="">Overdue</option>
                            </select>
                        </div>
                        <!-- Other Inputs -->
                        <!-- Add more fields similar to above -->
                    </div>
                    <!-- Products Info -->
                    <h6 class="mt-5 mb-3">Products Info</h6>
                    <div class="overflow-x-auto">
                        <table class="table flush">
                            <tbody>
                                <tr>
                                    <th class="w-12 whitespace-nowrap">#</th>
                                    <th class="whitespace-nowrap">Product Name</th>
                                    <th class="w-52 whitespace-nowrap">Quantity</th>
                                    <th class="w-52 whitespace-nowrap">Unit Price</th>
                                    <th class="w-52 whitespace-nowrap">Discount (%)</th>
                                    <th class="w-52 whitespace-nowrap">Total Amount</th>
                                </tr>
                                <tr v-for="(product, index) in products" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <input type="text" v-model="product.name" @input="validateProductName(index)" class="form-input" placeholder="Enter product name" />
                                        <p v-if="product.nameError" class="text-red-500">{{ product.nameError }}</p>
                                        <input type="text" v-model="product.category" @input="validateCategory(index)" class="mt-2 mb-3 form-input" placeholder="Category" />
                                        <p v-if="product.categoryError" class="text-red-500">{{ product.categoryError }}
                                        </p>
                                        <a href="#!" @click="deleteItem(index)" class="link link-red">
                                            <i class="align-baseline ri-delete-bin-line"></i> Delete Item
                                        </a>
                                    </td>
                                    <td>
                                        <div class="flex input-spin-group">
                                            <button @click.prevent="decrementQuantity(index)" class="input-spin-minus">
                                                <i class="ri-subtract-line"></i>
                                            </button>
                                            <input type="text" v-model="product.quantity" class="input-spin form-input" readonly />
                                            <button @click.prevent="incrementQuantity(index)" class="input-spin-plus">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" v-model="product.unitPrice" @input="validateUnitPrice(index); calculateTotal(index)" class="form-input" placeholder="$0.00" />
                                        <p v-if="product.unitPriceError" class="text-red-500">
                                            {{ product.unitPriceError }}
                                        </p>
                                    </td>
                                    <td>
                                        <input type="number" v-model="product.discountPercentage" @input="validateDiscountPercentage(index); calculateTotal(index)" class="form-input" placeholder="0%" />
                                        <p v-if="product.discountError" class="text-red-500">
                                            {{ product.discountError }}
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" v-model="product.totalAmount" class="form-input" readonly placeholder="$0.00" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="6">
                                        <button @click="addItem" class="btn btn-primary">
                                            <i class="align-bottom ri-add-line"></i> Add Item
                                        </button>
                                    </td>
                                </tr>
                                <!-- Subtotal and other calculations -->
                                <tr>
                                    <td colspan="5" class="text-right">Sub Total</td>
                                    <td>
                                        <input type="text" v-model="subtotal" class="form-input" readonly placeholder="$0.00" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-right">Vat Amount (6%)</td>
                                    <td>
                                        <input type="text" v-model="vatAmount" class="form-input" readonly placeholder="$0.00">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-right">Discount (10%)</td>
                                    <td>
                                        <input type="number" v-model="additionalDiscount" class="form-input" placeholder="10%">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-right">Shipping Charge</td>
                                    <td>
                                        <input type="text" v-model="shippingCharge" class="form-input" placeholder="$0.00">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-right">Total Amount</td>
                                    <td>
                                        <input type="text" v-model="grandTotal" class="form-input" readonly placeholder="$0.00" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Payment Methods -->
                    <h6 class="mt-5 mb-3">Payment Method</h6>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <label for="cardHolderNameInput" class="form-label">Card Holder Name</label>
                            <input type="text" id="cardHolderNameInput" v-model="cardHolderName" @input="validateCardHolderName" class="form-input" placeholder="Card holder name" />
                            <p v-if="cardHolderNameError" class="text-red-500">{{ cardHolderNameError }}</p>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <label for="cardNumberInput" class="form-label">Card Number</label>
                            <input type="text" id="cardNumberInput" v-model="cardNumber" @input="formatCardNumber" class="form-input" placeholder="0000 0000 0000 0000" maxlength="19" />
                            <p v-if="cardNumberError" class="text-red-500">{{ cardNumberError }}</p>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <label for="expiryInput" class="form-label">Expiry Date</label>
                            <input type="text" id="expiryInput" v-model="expiryDate" @input="formatExpiryDate" class="form-input" placeholder="MM/YYYY" maxlength="7" />
                            <p v-if="expiryDateError" class="text-red-500">{{ expiryDateError }}</p>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <label for="cvvInput" class="form-label">CVV</label>
                            <input type="text" id="cvvInput" v-model="cvv" @input="validateCVV" class="form-input" placeholder="000" maxlength="3" />
                            <p v-if="cvvError" class="text-red-500">{{ cvvError }}</p>
                        </div>
                    </div>
                    <!-- Add similar fields for payment methods and T&Cs -->
                    <div class="mt-5">
                        <label for="textareaInput2" class="form-label">Terms & Conditions</label>
                        <textarea name="textareaInput2" id="textareaInput2" rows="3" class="h-auto form-input" placeholder="Enter your terms"></textarea>
                    </div>
                    <div class="mt-5">
                        <div class="flex flex-wrap items-center justify-end gap-2">
                            <button @click.prevent="resetForm" class="btn btn-sub-gray">
                                <RotateCcw data-lucide="rotate-ccw" class="inline-block size-4"></RotateCcw> Reset
                            </button>
                            <button @click.prevent="createInvoice" class="btn btn-primary">Save Invoice</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
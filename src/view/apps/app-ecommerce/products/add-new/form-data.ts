import { ref } from "vue";

const categoryOptions = [
  { label: "Fashion", value: "Fashion" },
  { label: "Fruits", value: "fruits" },
  { label: "Footwear", value: "Footwear" },
  { label: "Bags", value: "Bags" },
  { label: "Watch", value: "Watch" },
];

const brandOptions = [
  { label: "Gucci", value: "Gucci" },
  { label: "Rolex", value: "Rolex" },
  { label: "Calvin Klein", value: "Calvin Klein" },
  { label: "Zara", value: "Zara" },
  { label: "Nike", value: "Nike" },
  { label: "Adidas", value: "Adidas" },
];

const sizeOptions = ref([
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "2XL", value: "2XL" },
]);

const colorOptions = ref([
  { label: "Blue", value: "Blue" },
  { label: "Green", value: "Green" },
  { label: "Yellow", value: "Yellow" },
  { label: "Sky", value: "Sky" },
  { label: "Red", value: "Red" },
  { label: "Pink", value: "Pink" },
  { label: "Gray", value: "Gray" },
  { label: "Purple", value: "Purple" },
]);

const paymentMethods = ref([
  {
    id: "cashOnDelivery",
    label: "Cash on Delivery",
    imgSrc: new URL("@/assets/images/others/money.png", import.meta.url).href,
    checked: false,
  },
  {
    id: "masterVisaCard",
    label: "Visa & Master Card",
    imgSrc: new URL("@/assets/images/payment/mastercard.png", import.meta.url)
      .href,
    checked: false,
  },
  {
    id: "bankCard",
    label: "Bank Transfer",
    imgSrc: new URL("@/assets/images/others/bank.png", import.meta.url).href,
    checked: false,
  },
]);

const productCardImage = ref([
  {
    images: new URL("@/assets/images/products/img-06.png", import.meta.url)
      .href,
  },
  {
    images: new URL("@/assets/images/products/img-07.png", import.meta.url)
      .href,
  },
  {
    images: new URL("@/assets/images/products/img-08.png", import.meta.url)
      .href,
  },
]);

export {
  categoryOptions,
  brandOptions,
  sizeOptions,
  colorOptions,
  paymentMethods,
  productCardImage,
};

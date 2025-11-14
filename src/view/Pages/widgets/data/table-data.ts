import product1 from "@/assets/images/products/img-01.png";
import product2 from "@/assets/images/products/img-02.png";
import product3 from "@/assets/images/products/img-03.png";
import product4 from "@/assets/images/products/img-04.png";
import product5 from "@/assets/images/products/img-05.png";
import { ref } from "vue";
interface Product {
  productName: string;
  salesUnit: number;
  price: string;
  stock: number;
  revenue: string;
  rating: number;
  image: string;
}
const products = ref<Product[]>([
  {
    productName: "Dribbble",
    salesUnit: 145,
    price: "$14.99",
    stock: 10,
    revenue: "$15,236",
    rating: 2.5,
    image: product1,
  },
  {
    productName: "Figma",
    salesUnit: 569,
    price: "$19.99",
    stock: 36,
    revenue: "$8,563",
    rating: 4.8,
    image: product2,
  },
  {
    productName: "Snapchat",
    salesUnit: 541,
    price: "$22.49",
    stock: 49,
    revenue: "$7,986",
    rating: 4.9,
    image: product3,
  },
  {
    productName: "Telegram",
    salesUnit: 126,
    price: "$31.78",
    stock: 29,
    revenue: "$36,322",
    rating: 3.7,
    image: product4,
  },
  {
    productName: "Ripple",
    salesUnit: 154,
    price: "$49.99",
    stock: 0,
    revenue: "$11,741",
    rating: 4.6,
    image: product5,
  },
]);

interface Invoice {
  invoiceID: string;
  client: string;
  dateDue: string;
  totalAmount: string;
  status: string;
}

const invoiceData: Invoice[] = [
  {
    invoiceID: "PE-10015",
    client: "Joyce Perry",
    dateDue: "03 May, 2024",
    totalAmount: "$15,236",
    status: "Pending",
  },
  {
    invoiceID: "PE-10016",
    client: "Marilyn Ecklund",
    dateDue: "04 May, 2024",
    totalAmount: "$8,563",
    status: "New",
  },
  {
    invoiceID: "PE-10017",
    client: "Todd Day",
    dateDue: "08 May, 2024",
    totalAmount: "$7,986",
    status: "Successful",
  },
  {
    invoiceID: "PE-10018",
    client: "Mary Diaz",
    dateDue: "11 May, 2024",
    totalAmount: "$36,322",
    status: "Successful",
  },
  {
    invoiceID: "PE-10019",
    client: "Betty Gilliam",
    dateDue: "27 May, 2024",
    totalAmount: "$11,741",
    status: "Pending",
  },
  {
    invoiceID: "PE-10020",
    client: "Robert Olsen",
    dateDue: "05 June, 2024",
    totalAmount: "$13,465",
    status: "Successful",
  },
];

export { products, invoiceData };

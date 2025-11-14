import product9 from "@/assets/images/products/img-09.png";
import { ref } from "vue";
interface InvoiceItem {
  productNumber: string;
  image: string | any;
  name: string;
  color: string;
  size: string;
  price: number;
  qty: number;
  subTotal: number;
}
interface Invoice {
  number: string;
  supportEmail: string;
  invoiceDate: string;
  dueDate: string;
  from: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  billing: {
    name: string;
    address: {
      street: string;
      city: string;
    };
    phone: string;
    email: string;
  };
  items: InvoiceItem[];
  payment: {
    cardHolderName: string;
    cardNumber: string;
    expiryDate: string;
  };
}

const invoicesData = ref<Invoice>({
  number: "PEI-15485",
  supportEmail: "support@example.com",
  invoiceDate: "28 May, 2024",
  dueDate: "02 June, 2024",
  from: {
    name: "Martin Riedel",
    address:
      "Emma-Köhler-Allee 4c, Germering, Nordrhein-Westfalen, Germany - 13907",
    phone: "0068829546",
    email: "thiele.hanspeter@web.de",
  },
  billing: {
    name: "Jana Timmermans",
    address: {
      street: "place Denis 11, Chimay,",
      city: "Fosses-la-Ville, Belgium - 4823",
    },
    phone: "03 7327843",
    email: "axelle.dewinter@willems.net",
  },
  items: [
    {
      productNumber: "01",
      image: new URL("@/assets/images/products/img-04.png", import.meta.url)
        .href,
      name: "Crop top Sweater Clothing",
      color: "Pink",
      size: "L",
      price: 22.12,
      qty: 1,
      subTotal: 22.12,
    },
    {
      productNumber: "02",
      image: new URL("@/assets/images/products/img-03.png", import.meta.url)
        .href,
      name: "Spar Men Black Running Shoes",
      color: "Black",
      size: "8",
      price: 35.78,
      qty: 3,
      subTotal: 71.56,
    },
    {
      image: product9,
      name: "Hoodie Jacket Letterman Sleeve Coat",
      color: "Blue",
      size: "M",
      productNumber: "03",
      price: 44.49,
      qty: 1,
      subTotal: 44.49,
    },
  ],
  payment: {
    cardHolderName: "Karen Reich",
    cardNumber: "XXXX XXXX XXXX 8741",
    expiryDate: "08/2035",
  },
});
export default invoicesData;

import product4 from "@/assets/images/products/img-04.png";
import product3 from "@/assets/images/products/img-03.png";
import product9 from "@/assets/images/products/img-09.png";
import { Percent, ShieldCheck, Truck } from "lucide-vue-next";
import { ref } from "vue";

export interface ShopCartType {
  id: number;
  image: string;
  category: string;
  name: string;
  price: number;
  discount: number;
  colors: string[];
  sizes: string[];
  count: number;
  activeColor?: string;
  activeSize?: number | string;
}

const shopCartData = ref<Array<ShopCartType>>([
  {
    id: 1,
    image: product4,
    category: "Fashion",
    name: "Crop top Sweater Clothing",
    price: 29.49,
    discount: 0.25,
    colors: ["blue", "gray", "pink", "green", "red"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    count: 1,
    activeSize: "S",
  },
  {
    id: 2,
    image: product3,
    category: "Footwear",
    name: "Spar Men Black Running Shoes",
    price: 35.78,
    discount: 0,
    colors: ["gray", "pink"],
    sizes: ["6", "7", "8", "9", "10"],
    count: 2,
    activeSize: "6",
  },
  {
    id: 3,
    image: product9,
    category: "Fashion",
    name: "Hoodie Jacket Letterman Sleeve Coat",
    price: 44.49,
    discount: 0,
    colors: ["blue"],
    sizes: ["M", "L", "XL"],
    count: 1,
    activeSize: "M",
  },
]);

const productDescription = [
  {
    title: "Free delivery on May 24",
    description:
      "To the address, by courier - with fitting, free of charge for purchases over $500.",
    icon: Truck,
  },
  {
    title: "Safety",
    description:
      "The security of payments is guaranteed through the use of the SSL protocol. Your bank card details are securely protected during online transactions.",
    icon: ShieldCheck,
  },
  {
    title: "5% discount",
    description:
      "When paying online, you receive a 5% discount on your next purchase.",
    icon: Percent,
  },
];
export { shopCartData, productDescription };

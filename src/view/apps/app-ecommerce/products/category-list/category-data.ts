import product1 from "@/assets/images/products/img-01.png";
import product3 from "@/assets/images/products/img-03.png";
import product14 from "@/assets/images/products/img-14.png";
import product15 from "@/assets/images/products/img-15.png";
import product16 from "@/assets/images/products/img-16.png";
import product17 from "@/assets/images/products/img-17.png";
import product18 from "@/assets/images/products/img-18.png";
import product19 from "@/assets/images/products/img-19.png";
import product20 from "@/assets/images/products/img-20.png";
import product21 from "@/assets/images/products/img-21.png";
import product22 from "@/assets/images/products/img-22.png";
import product23 from "@/assets/images/products/img-23.png";
import product24 from "@/assets/images/products/img-24.png";
import { ref } from "vue";

export interface CategoryType {
  productID: number | string;
  image: string;
  category: string;
  products: string | number;
  status: string;
  description: string;
  price?: string | number;
  revenue?: string | number;
}

const categoryData = ref<CategoryType[]>([
  {
    productID: 19115,
    category: "Fashion",
    products: 154,
    image: product1,
    status: "Active",
    description: "Trendy apparel for all seasons.",
  },
  {
    productID: 19116,
    category: "Electronics",
    products: 187,
    image: product24,
    status: "Active",
    description: "Latest gadgets and tech devices.",
  },
  {
    productID: 19117, // Added productID
    category: "Footwear",
    price: "$35.78",
    revenue: "$0",
    products: 487,
    image: product3,
    status: "Inactive",
    description: "Comfortable and stylish shoes.",
  },
  {
    productID: 19118, // Added productID
    category: "Furniture",
    price: "$29.49",
    revenue: "$4,265",
    products: 177,
    image: product23,
    status: "Inactive",
    description: "Modern and classic furniture pieces.",
  },
  {
    productID: 19119, // Added productID
    category: "Groceries",
    price: "$22.00",
    revenue: "$7,465",
    products: 183,
    image: product20,
    status: "Active",
    description: "Everyday essentials for your pantry.",
  },
  {
    productID: 19120, // Added productID
    category: "Books",
    price: "$29.99",
    revenue: "$9,613",
    products: 326,
    image: product21,
    status: "Active",
    description: "Wide range of books across genres.",
  },
  {
    productID: 19121, // Added productID
    category: "Food and beverage",
    price: "$36.87",
    revenue: "$11,074",
    products: 147,
    image: product22,
    status: "Inactive",
    description: "Delicious snacks and drinks.",
  },
  {
    productID: 19122, // Added productID
    category: "Jewellery",
    price: "$79.99",
    revenue: "$19,803",
    products: 98,
    image: product19,
    status: "Active",
    description: "Elegant and stylish jewellery pieces.",
  },
  {
    productID: 19123, // Added productID
    category: "Sports",
    price: "$44.49",
    revenue: "$9,961",
    products: 246,
    image: product18,
    status: "Active",
    description: "Sports equipment and accessories.",
  },
  {
    productID: 19124, // Added productID
    category: "Accessories",
    price: "$24.99",
    revenue: "$6,087",
    products: 213,
    image: product17,
    status: "Inactive",
    description: "Fashionable accessories for all outfits.",
  },
  {
    productID: 19125, // Added productID
    category: "Cosmetics",
    price: "$32.00",
    revenue: "$14,872",
    products: 198,
    image: product16,
    status: "Active",
    description: "High-quality beauty products.",
  },
  {
    productID: 19126, // Added productID
    category: "Toys and games",
    price: "$24.87",
    revenue: "$5,108",
    products: 54,
    image: product15,
    status: "Inactive",
    description: "Fun toys and engaging games.",
  },
  {
    productID: 19127, // Added productID
    category: "Stationery",
    price: "$39.49",
    revenue: "$9,780",
    products: 119,
    image: product14,
    status: "Active",
    description: "Office and school supplies.",
  },
]);
export { categoryData };

import product1 from "@/assets/images/ecommerce/landing/products/img-01.png";
import product2 from "@/assets/images/ecommerce/landing/products/img-02.png";
import product3 from "@/assets/images/ecommerce/landing/products/img-03.png";
import product4 from "@/assets/images/ecommerce/landing/products/img-04.png";
import product5 from "@/assets/images/ecommerce/landing/products/img-05.png";
import product6 from "@/assets/images/ecommerce/landing/products/img-06.png";
import product7 from "@/assets/images/ecommerce/landing/products/img-07.png";
import product8 from "@/assets/images/ecommerce/landing/products/img-08.png";
import product9 from "@/assets/images/ecommerce/landing/products/img-09.png";
import product10 from "@/assets/images/ecommerce/landing/products/img-10.png";
import product11 from "@/assets/images/ecommerce/landing/products/img-11.png";
import product12 from "@/assets/images/ecommerce/landing/products/img-12.png";
interface productDataType {
  image: any;
  name: string;
  price: string;
  originalPrice: null | unknown;
  category: string;
  brand: string;
}

const productsData: productDataType[] = [
  {
    image: product1,
    name: "Black Coloured Knitted Lycra Dress",
    price: "$49.99",
    originalPrice: null,
    category: "Women",
    brand: "Fashionista",
  },
  {
    image: product2,
    name: "Fashion Hub Women Peach Net Dress",
    price: "$97.00",
    originalPrice: null,
    category: "Women",
    brand: "Alamode",
  },
  {
    image: product3,
    name: "Alamode Label Sanya bodycon Knitted Mini Dress",
    price: "$119.36",
    originalPrice: null,
    category: "Women",
    brand: "Alamode",
  },
  {
    image: product4,
    name: "Fashion portrait of young elegant woman",
    price: "$62.97",
    originalPrice: "$82.45",
    category: "Children",
    brand: "Alamode",
  },
  {
    image: product5,
    name: "Demonstrating winter Clothes",
    price: "$88.99",
    originalPrice: null,
    category: "Women",
    brand: "Alamode",
  },
  {
    image: product6,
    name: "Alamode Label Sanya bodycon Knitted Mini Dress",
    price: "$27.49",
    originalPrice: "$49.79",
    category: "Woman",
    brand: "KidzFashion",
  },
  {
    image: product7,
    name: "Y2K Trending Korean Fashion Aesthetic Shirt",
    price: "$109.00",
    originalPrice: null,
    category: "Men",
    brand: "Alamode",
  },
  {
    image: product8,
    name: "Alamode Label Sanya bodycon Knitted Mini Dress",
    price: "$87.99",
    originalPrice: "$99.99",
    category: "Men",
    brand: "UrbanWear",
  },
];

const featuredProducts = [
  {
    image: product9,
    name: "Fashion Hub Women Peach Net Dress",
    price: "$74.99",
    originalPrice: "$149.99",
    discount: "50%",
    link: "apps-ecommerce-product-overview",
  },
  {
    image: product10,
    name: "Fashion portrait of young elegant woman",
    price: "$187.00",
    originalPrice: null,
    discount: null,
    link: "apps-ecommerce-product-overview",
  },
  {
    image: product11,
    name: "Demonstrating winter Clothes",
    price: "$59.99",
    originalPrice: "$79.99",
    discount: "25%",
    link: "apps-ecommerce-product-overview",
  },
  {
    image: product12,
    name: "Y2K Trending Korean Fashion Aesthetic Shirt",
    price: "$79.99",
    originalPrice: null,
    discount: null,
    link: "apps-ecommerce-product-overview",
  },
];

export { productsData, featuredProducts };

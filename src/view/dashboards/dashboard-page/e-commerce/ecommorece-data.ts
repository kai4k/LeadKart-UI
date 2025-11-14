import { getColorCodesHash } from "@/utils/reusable-functions";
import { ref } from "vue";

const donutChart = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    colors: [],
    legend: {
      show: false,
      position: "bottom",
    },
    grid: {
      padding: {
        top: -6,
        right: 0,
        bottom: -10,
        left: 0,
      },
    },
  },
};

const barDemo = () => {
  return {
    series: [
      {
        name: "Profit",
        data: [5, 4, 7, 2, 8, 6, 3],
      },
    ],
    options: {
      chart: {
        height: 130,
        type: "bar",
        toolbar: {
          show: false,
        },
        sparkline: { enabled: true },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: "rounded",
        },
      },
      yaxis: {
        tickAmount: 10,
      },
      grid: {
        padding: {
          top: 0,
          right: -10,
          bottom: 0,
          left: -10,
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: getColorCodesHash(["bg-primary-500", "bg-red-500"]), // Customize colors as needed
    },
  };
};

const productSalesChart = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  options: {
    chart: {
      height: 280,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: [10],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      lineCap: "round",
      colors: ["transparent"],
    },
    colors: ["#FED2D2", "#32B2EC"],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val}k`,
      },
    },
  },
};

const trafficChart = {
  series: [
    {
      name: "Sales",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5,
      ],
    },
    {
      name: "Visit",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1,
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#1E90FF", "#6A5ACD"], // Example colors; replace with your color logic if needed
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: -20,
        bottom: 0,
      },
      row: {
        opacity: 0,
      },
    },
    yaxis: {
      min: -5,
      max: 5,
    },
    tooltip: {
      shared: false,
      x: {
        formatter: (val: string) => val,
      },
      y: {
        formatter: (val: number) => Math.abs(val) + "%",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tickAmount: 10,
      labels: {
        formatter: (val: number) => Math.abs(Math.round(val)) + "%",
      },
    },
  },
};

const productStock = ref([
  {
    product_id: "PEP-1478",
    product_name: "Blouse Ruffle Tube top",
    stock: 145,
    stock_status: "Low Stock",
    price: "$14.99",
  },
  {
    product_id: "PEP-1481",
    product_name: "Sleeve Clothing Leggings",
    stock: 126,
    stock_status: "Low Stock",
    price: "$31.78",
  },
  {
    product_id: "PEP-1482",
    product_name: "Yellow women shoes",
    stock: 0,
    stock_status: "Out of Stock",
    price: "$49.99",
  },
  {
    product_id: "PEP-1483",
    product_name: "Straw hat Cap Cowboy",
    stock: 571,
    stock_status: "In Stock",
    price: "$49.99",
  },
  {
    product_id: "PEP-1484",
    product_name: "Sneakers Shoe Nike Basketball",
    stock: 0,
    stock_status: "Out of Stock",
    price: "$49.99",
  },

  {
    product_id: "PEP-1485",
    product_name: "Modern Fashion T shirt",
    stock: 321,
    stock_status: "In Stock",
    price: "$49.99",
  },
  {
    product_id: "PEP-1486",
    product_name: "Fashionable T shirt",
    stock: 321,
    stock_status: "In Stock",
    price: "$49.99",
  },
  {
    product_id: "PEP-1487",
    product_name: "Intelligent Wooden Ball",
    stock: 54,
    stock_status: "Low Stock",
    price: "$59.79",
  },
  {
    product_id: "PEP-1488",
    product_name: "Rustic Soft Computer",
    stock: 0,
    stock_status: "Out of Stock",
    price: "$49.99",
  },
]);

interface Product {
  id: number;
  name: string;
  image: string | any;
  price: string;
  link: string;
  rating: number;
}
const products = ref<Product[]>([
  {
    id: 1,
    name: "Sleeve Clothing Leggings",
    image: new URL("@/assets/images/products/img-05.png", import.meta.url),
    price: "$22.00",
    link: "apps-ecommerce-product-overview",
    rating: 4.4,
  },
  {
    id: 2,
    name: "Bra Lace Crop top",
    image: new URL("@/assets/images/products/img-06.png", import.meta.url),
    price: "$29.99",
    link: "apps-ecommerce-product-overview",
    rating: 5,
  },
  {
    id: 3,
    name: "Tote bag Leather Handbag Dolce",
    image: new URL("@/assets/images/products/img-08.png", import.meta.url),
    price: "$79.99",
    link: "apps-ecommerce-product-overview",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneakers Shoe Nike Basketball",
    image: new URL("@/assets/images/products/img-11.png", import.meta.url),
    price: "$32.00",
    link: "apps-ecommerce-product-overview",
    rating: 4.5,
  },
]);

const topLocation = {
  markers: [
    {
      name: "Brazil",
      coords: [-14.235, -51.9253],
    },
    {
      name: "Russia",
      coords: [61.524, 105.3188],
    },
    {
      name: "China",
      coords: [35.8617, 104.1954],
    },
  ],
};

interface Message {
  avatar: string | any;
  name: string;
  text: string;
  time: string;
}

const messages = ref<Message[]>([
  {
    avatar: new URL("@/assets/images/avatar/user-11.png", import.meta.url),
    name: "John Davis",
    text: "Hello, How are you?",
    time: "04:25 PM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-3.png", import.meta.url).href,
    name: "Jordan Davis",
    text: "Here are some very cute illustrations.",
    time: "11:20 AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-4.png", import.meta.url).href,
    name: "Taylor Wilson",
    text: "Use tools like Trello, Asana, or Jira for task management and progress tracking.",
    time: "10:49 AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-5.png", import.meta.url).href,
    name: "Jane Brown",
    text: "Regularly review and improve communication practices based on team feedback and project needs.",
    time: "03:32 AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-6.png", import.meta.url).href,
    name: "Cameron Wilson",
    text: "Schedule regular check-ins to address any roadblocks and keep everyone aligned.",
    time: "11:05 PM",
  },
]);

const allMessages = ref<Message[]>([
  {
    avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url).href,
    name: "Sirkka Hakola",
    text: "Hello, How are you?",
    time: "04:25 PM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-15.png", import.meta.url).href,
    name: "Jordan Davis",
    text: "Here are some very cute illustrations.",
    time: "11:20 AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-16.png", import.meta.url).href,
    name: "Nicholas Hope",
    text: "Use tools like Trello, Asana, or Jira for task management and progress tracking.",
    time: "10:49 AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-17.png", import.meta.url).href,
    name: "Susan Liles",
    text: "Regularly review and improve communication practices based on team feedback and project needs.",
    time: "03:44 AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-18.png", import.meta.url).href,
    name: "David Johnson",
    text: "Schedule regular check-ins to address any roadblocks and keep everyone aligned.",
    time: "09:57 PM",
  },
]);
export {
  barDemo,
  productSalesChart,
  donutChart,
  trafficChart,
  productStock,
  products,
  topLocation,
  messages,
  allMessages,
};

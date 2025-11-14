import { ref } from "vue";
import { getColorCodes } from "@/utils/reusable-functions";
import {
  MessagesSquare,
  Presentation,
  ShoppingBag,
  CircleCheckBig,
  LayoutList,
  PackageOpen,
  PanelsTopLeft,
  Droplets,
} from "lucide-vue-next";
//basic Charts Project Status
const projectStatusChart = {
  series: [
    {
      name: "Earnings",
      data: [67, 48, 85, 51, 93, 109, 116],
    },
  ],
  chartOptions: {
    chart: {
      defaultLocale: "en",
      type: "area",
      sparkline: { enabled: true },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
      dashArray: 2,
    },
    legend: {
      tooltipHoverFormatter: (val: string, opts: any) => {
        return `${val} - <strong>${
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
        }</strong>`;
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    yaxis: {
      title: {
        text: "Growth",
      },
      tickAmount: 10,
      labels: {
        formatter: (y: number) => `$${y.toFixed(0)}k`,
      },
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
  },
};

//Donut with Pattern Chart
const donutWithPatternChart = {
  series: [55, 33, 46],
  chartOptions: {
    labels: ["Afternoon", "Evening", "Morning"],
    chart: {
      height: 240,
      sparkline: { enabled: true },
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "pattern",
      pattern: {
        style: "squares",
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    theme: {
      palette: "palette2",
    },
    legend: {
      show: false,
    },
  },
};

//My Task 1
const getChartOptions = (item: any) => {
  return {
    chart: {
      height: 60,
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        hollow: {
          size: "20%",
        },
      },
    },
    colors: JSON.parse(item.chartColors),
    labels: ["Progress"],
  };
};

const projects = ref([
  {
    title: "Domiex Admin & Dashboards",
    category: "Project Management",
    image: new URL("@/assets/images/brands/img-02.png", import.meta.url).href,
    percentage: 64,
    progressClass: "bg-green-500",
  },
  {
    title: "Shopify Ecommerce",
    category: "Website",
    image: new URL("@/assets/images/brands/img-08.png", import.meta.url).href,
    percentage: 27,
    progressClass: "bg-red-500",
  },
  {
    title: "Email Management",
    category: "Apps & Web",
    image: new URL("@/assets/images/brands/img-07.png", import.meta.url).href,
    percentage: 43,
    progressClass: "bg-yellow-500",
  },
  {
    title: "Norton Mobile App",
    category: "Application",
    image: new URL("@/assets/images/brands/img-06.png", import.meta.url).href,
    percentage: 100,
    progressClass: "bg-purple-500",
  },
  {
    title: "React",
    category: "Calendar Apps",
    image: new URL("@/assets/images/brands/img-11.png", import.meta.url).href,
    percentage: 0,
    progressClass: "bg-yellow-500",
  },
  {
    title: "Email Management",
    category: "Apps & Web",
    image: new URL("@/assets/images/brands/img-13.png", import.meta.url).href,
    percentage: 72,
    progressClass: "bg-green-500",
  },
]);

const users = ref([
  {
    name: "Savion Bogan",
    role: "Web Designer",
    image: new URL("@/assets/images/avatar/user-20.png", import.meta.url).href,
    tasks: 15,
  },
  {
    name: "Ella Legros",
    role: "UI / UX Designer",
    image: new URL("@/assets/images/avatar/user-2.png", import.meta.url).href,
    tasks: 74,
  },
  {
    name: "Jayce Green",
    role: "React Developer",
    image: new URL("@/assets/images/avatar/user-3.png", import.meta.url).href,
    tasks: 54,
  },
  {
    name: "Americo Donnelly",
    role: "Asp .Net Developer",
    image: new URL("@/assets/images/avatar/user-4.png", import.meta.url).href,
    tasks: 98,
  },
  {
    name: "Sage Kohler",
    role: "Laravel Developer",
    image: new URL("@/assets/images/avatar/user-5.png", import.meta.url).href,
    tasks: 119,
  },
  {
    name: "Alvina Powlowski",
    role: "Web Designer",
    image: new URL("@/assets/images/avatar/user-6.png", import.meta.url).href,
    tasks: 32,
  },
]);

interface Item {
  title: string;
  comments: number;
  files: string;
  icon: string | any;
  bgClass: string;
  iconClass: string;
  series: number;
  chartColors: string[];
}

const myTasks: Item[] = [
  {
    title: "Ecommerce HTML Template",
    comments: 154,
    files: "2+",
    icon: ShoppingBag,
    bgClass: "bg-primary-500/10",
    iconClass: "text-primary-500 fill-primary-500/15",
    series: 32,
    chartColors: ["#3b82f6"],
  },
  {
    title: "Project Management Admin",
    comments: 321,
    files: "16+",
    icon: Presentation,
    bgClass: "bg-purple-500/10",
    iconClass: "text-purple-500 fill-purple-500/15",
    series: 45,
    chartColors: ["#22C55E"],
  },
  {
    title: "Dropbox Development",
    comments: 29,
    files: "3+",
    icon: Droplets,
    bgClass: "bg-green-500/10",
    iconClass: "text-green-500 fill-green-500/15",
    series: 79,
    chartColors: ["#EF4444"],
  },
  {
    title: "Real Chat Application with Socket",
    comments: 8,
    files: "1+",
    icon: MessagesSquare,
    bgClass: "bg-sky-500/10",
    iconClass: "text-sky-500 fill-sky-500/15",
    series: 100,
    chartColors: ["#F59E0B"],
  },
];

// Define the task data structure
interface Task {
  title: string;
  icon: string | any;
  change: number;
  changePercentage: number;
  extraCss?: string;
}

// Sample tasks data
const tasks = ref<Task[]>([
  {
    title: "6 Opened Tasks",
    icon: PackageOpen,
    change: -4.32,
    changePercentage: 4.32,
    extraCss: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "15 Completed Tasks",
    icon: CircleCheckBig,
    change: 47.73,
    changePercentage: 47.73,
    extraCss: "text-sky-500 bg-sky-500/10",
  },
  {
    title: "148 Total Tasks",
    icon: LayoutList,
    change: 21.57,
    changePercentage: 21.57,
    extraCss: "text-orange-500 bg-orange-500/10",
  },
  {
    title: "10 Projects",
    icon: PanelsTopLeft,
    change: 3.91,
    changePercentage: 3.91,
    extraCss: "text-yellow-500 bg-yellow-500/10",
  },
]);

interface Notification {
  avatar: string | any;
  name: string;
  time: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  file?: {
    image: string | any;
    name: string;
    size: number;
  };
}
const notifications: Notification[] = [
  {
    avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url),
    name: "Josefina Dach",
    time: "09:32 AM - Today",
    title: "Client Meeting",
    description: "Project meeting with sophia @11:00AM",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-16.png", import.meta.url),
    name: "Zara Russell",
    time: "11:57 AM - Yesterday",
    title: "Commented on",
    description:
      '"Great product but only if you end up using the exact examples in the demos provided."',
    link: "#!",
    linkText: "Chat App",
  },
  {
    avatar: new URL("@/assets/images/avatar/user-11.png", import.meta.url),
    name: "Matthew Warner",
    time: "04:55 AM - 19 July, 2024",
    title: "Add a file to",
    description: "",
    link: "#!",
    linkText: "domiex",
    file: {
      image: new URL("@/assets/images/brands/img-22.png", import.meta.url),
      name: "Domiex Figma File",
      size: 21,
    },
  },
  {
    avatar: new URL("@/assets/images/avatar/user-13.png", import.meta.url),
    name: "Nicole Bentley",
    time: "04:11 PM - 16 July, 2024",
    title: "Create a new project for client",
    description: "Add files to new design folder",
  },
];
export {
  projectStatusChart,
  donutWithPatternChart,
  getChartOptions,
  projects,
  users,
  myTasks,
  tasks,
  notifications,
};

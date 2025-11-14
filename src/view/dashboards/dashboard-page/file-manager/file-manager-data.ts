import document from "@/assets/images/file-manager/icons/document.png";
import picture from "@/assets/images/file-manager/icons/picture.png";
import video from "@/assets/images/file-manager/icons/video.png";
import aiFileFormat from "@/assets/images/file-manager/icons/ai-file-format.png";
import pdf from "@/assets/images/file-manager/icons/pdf.png";

export const fileAnalyticsChart = {
  series: [
    {
      name: "Total GB",
      data: [44, 55, 41, 67, 22],
    },
  ],
  options: {
    chart: {
      height: 315,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    grid: {
      padding: {
        right: -12,
        top: -18,
        bottom: -8,
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: ["Dropbox", "Cloud", "Mega", "Google", "Drive"],
      tickPlacement: "on",
    },
    yaxis: {
      tickAmount: 8,
      labels: {
        formatter: (val: number) => Math.round(val),
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        inverseColors: ["#358FFC", "#358FFC"],
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  },
};

export const overviewStorageChart = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      height: 260,
      type: "donut",
    },
    labels: ["Docs", "Images", "Video", "Audio", "Others"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 5,
      },
      dataLabels: {
        offset: 0,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      position: "bottom",
    },
  },
};

interface User {
  avatar: URL;
}

interface Slide {
  title: string;
  fileCount: number;
  bgClass: string;
  users: User[];
}
const slides: Slide[] = [
  {
    title: "Images",
    fileCount: 2471,
    bgClass:
      "bg-sky-100 dark:bg-sky-500/15 dark:border-sky-500/20 border-sky-200",
    users: [
      {
        avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-16.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-17.png", import.meta.url),
      },
    ],
  },
  {
    title: "Download",
    fileCount: 547,
    bgClass:
      "bg-pink-100 border-pink-200 dark:border-pink-500/20 dark:bg-pink-500/15",
    users: [
      {
        avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-17.png", import.meta.url),
      },
    ],
  },
  {
    title: "Domiex Project",
    fileCount: 1479,
    bgClass:
      "bg-purple-100 border-purple-200 dark:border-purple-500/20 dark:bg-purple-500/15",
    users: [
      {
        avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-16.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-10.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-11.png", import.meta.url),
      },
      {
        avatar: new URL("@/assets/images/avatar/user-17.png", import.meta.url),
      },
    ],
  },
];

interface FileData {
  name: string;
  size: string;
  date: string;
  type: string;
  image: string;
}
const fileManagerData: FileData[] = [
  {
    name: "Animation Project",
    size: "24 MB",
    date: "21 July, 2024",
    type: "Document",
    image: document,
  },
  {
    name: "UI Design",
    size: "154 MB",
    date: "28 May, 2024",
    type: "Images",
    image: picture,
  },
  {
    name: "Admin Tutorial",
    size: "149 MB",
    date: "02 Feb, 2024",
    type: "Video",
    image: video,
  },
  {
    name: "Brand Identity",
    size: "17 MB",
    date: "11 Feb, 2024",
    type: "AI",
    image: aiFileFormat,
  },
  {
    name: "Resume",
    size: "11 MB",
    date: "20 May, 2024",
    type: "PDF",
    image: pdf,
  },
  {
    name: "Domiex_v1.3.0",
    size: "200 MB",
    date: "26 March, 2025",
    type: "Zip",
    image: document,
  },
];

interface File {
  name: string;
  date: string;
  size: string;
  icon: URL | any;
}
// Recent Files Data

const files: File[] = [
  {
    name: "Brand Logo.png",
    date: "14 June, 2024",
    size: "2.6 MB",
    icon: new URL(
      "@/assets/images/file-manager/icons/picture.png",
      import.meta.url
    ),
  },
  {
    name: "AI Chat Module.ai",
    date: "29 June, 2024",
    size: "29 MB",
    icon: new URL(
      "@/assets/images/file-manager/icons/ai-file-format.png",
      import.meta.url
    ).href,
  },
  {
    name: "Domiex Intro.mp4",
    date: "05 July, 2024",
    size: "44 MB",
    icon: new URL(
      "@/assets/images/file-manager/icons/video.png",
      import.meta.url
    ).href,
  },
  {
    name: "Project guidelines.txt",
    date: "09 July, 2024",
    size: "7 MB",
    icon: new URL(
      "@/assets/images/file-manager/icons/document.png",
      import.meta.url
    ).href,
  },
  {
    name: "List of invoice",
    date: "18 July, 2024",
    size: "4.1 MB",
    icon: new URL(
      "@/assets/images/file-manager/icons/office365.png",
      import.meta.url
    ).href,
  },
  {
    name: "Features Breakdown",
    date: "18 July, 2024",
    size: "3 MB",
    icon: new URL("@/assets/images/file-manager/icons/pdf.png", import.meta.url)
      .href,
  },
];
export { slides, fileManagerData, files };

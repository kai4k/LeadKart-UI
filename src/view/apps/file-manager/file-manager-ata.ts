import document from "@/assets/images/file-manager/icons/document.png";
import pdf from "@/assets/images/file-manager/icons/pdf.png";
import power from "@/assets/images/file-manager/icons/power.png";
import picture from "@/assets/images/file-manager/icons/picture.png";
import mp3 from "@/assets/images/file-manager/icons/mp3.png";
import csvFile from "@/assets/images/file-manager/icons/csv-file.png";
import office from "@/assets/images/file-manager/icons/office.png";
import folderImg from "@/assets/images/file-manager/icons/folder.png";
import { ref } from "vue";
export interface Folder {
  name: string;
  description: string;
  image: string;
}

const folders = ref<Array<Folder>>([
  {
    name: "My Documents",
    description: "154 Files",
    image: folderImg, // Add the path to your image here
  },
  {
    name: "Images",
    description: "547 Images",
    image: folderImg,
  },
  {
    name: "Design Templates File",
    description: "364 files",
    image: folderImg,
  },
  {
    name: "Others Files",
    description: "21 Folders",
    image: folderImg,
  },
]);

const videoFiles = ref([
  {
    title: "Profile Images",
    type: "image", // This could be 'image' or 'video'
    src: new URL("@/assets/images/avatar/user-17.png", import.meta.url).href,
    size: "245 KB",
  },
  {
    title: "The Utility-First Workflow",
    type: "video",
    src: "https://www.youtube.com/embed/UvF56fPGVt4?si=riMC3DQV0WQeBypD",
    size: "2.7 MB",
  },
  {
    title: "Email Features PDF",
    type: "image",
    src: new URL("@/assets/images/email/features-2.png", import.meta.url).href,
    size: "2.7 MB",
  },
  {
    title: "TailwindCSS Setup",
    type: "video",
    src: "https://www.youtube.com/embed/nOQyWbPO2Ds?si=pTFhrsaGUoSqMJ6g",
    size: "475 MB",
  },
]);

interface FileType {
  id?: string | number;
  image: string;
  type: string;
  documentName: string;
  size: string | number;
  lastEdit: string;
}
const files = ref<Array<FileType>>([
  {
    image: document,
    type: "txt",
    documentName: "Domiex docs",
    size: "8.9 MB",
    lastEdit: "28 June, 2024",
  },
  {
    image: pdf,
    type: "pdf",
    documentName: "Company of Certificate",
    size: "2.7 MB",
    lastEdit: "29 June, 2024",
  },
  {
    image: power,
    type: "ppt",
    documentName: "Hospital Management",
    size: "154 MB",
    lastEdit: "21 June, 2024",
  },
  {
    image: picture,
    type: "PNG",
    documentName: "Preview Images",
    size: "983 KB",
    lastEdit: "14 June, 2024",
  },
  {
    image: mp3,
    type: "MP3",
    documentName: "Sound Effects",
    size: "14.9 MB",
    lastEdit: "24 May, 2024",
  },
  {
    image: csvFile,
    type: "CSV",
    documentName: "Contact-list",
    size: "651 KB",
    lastEdit: "18 May, 2024",
  },
  {
    image: office,
    type: "Docs",
    documentName: "Admin Bugs",
    size: "1.9 MB",
    lastEdit: "07 May, 2024",
  },
]);

// basicChart
const chartOptions = ref({
  series: [
    {
      type: "gauge",
      axisLine: {
        lineStyle: {
          width: 20,
          color: [
            [0.3, "#67e0e3"],
            [0.7, "#37a2da"],
            [1, "#fd666d"],
          ],
        },
      },
      pointer: {
        itemStyle: {
          color: "auto",
        },
      },
      grid: {
        top: "0%",
        left: "0%",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      axisTick: {
        distance: -20,
        length: 8,
        lineStyle: {
          color: "#fff",
          width: 2,
        },
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: "#fff",
          width: 4,
        },
      },
      axisLabel: {
        color: "inherit",
        distance: 25,
        fontSize: 12,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value} GB",
        fontSize: 16,
        color: "inherit",
      },
      data: [
        {
          value: 80, // You can dynamically change this value
        },
      ],
    },
  ],
});

const docFiles = ref([
  {
    name: "547 Images",
    size: "24.8 GB",
    icon: new URL(
      "@/assets/images/file-manager/icons/picture.png",
      import.meta.url
    ).href,
    percentage: 24.7,
  },
  {
    name: "154 My Documents",
    size: "13.8 GB",
    icon: new URL(
      "@/assets/images/file-manager/icons/folder-03.png",
      import.meta.url
    ).href,
    percentage: 12.9,
  },
  {
    name: "29 Video",
    size: "19 GB",
    icon: new URL(
      "@/assets/images/file-manager/icons/video.png",
      import.meta.url
    ).href,
    percentage: 16.4,
  },
  {
    name: "86 Audio",
    size: "5.9 GB",
    icon: new URL("@/assets/images/file-manager/icons/mp3.png", import.meta.url)
      .href,
    percentage: 6.7,
  },
  {
    name: "364 Design Templates File",
    size: "6 GB",
    icon: new URL(
      "@/assets/images/file-manager/icons/folder-04.png",
      import.meta.url
    ).href,
    percentage: 7.3,
  },
]);
export { folders, files, videoFiles, chartOptions, docFiles };

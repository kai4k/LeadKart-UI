import { File, FolderClosed } from "lucide-vue-next";

interface Card {
  title: string;
  description: string;
  icon: string | object;
}

// Card data
const documentData: Card[] = [
  {
    title: "Projects 2024",
    description: "23 Files - 128 MB",
    icon: FolderClosed,
  },
  {
    title: "All Contact",
    description: "49 Files - 27 MB",
    icon: FolderClosed,
  },
  {
    title: "Marketing Analysis",
    description: "3 Files - 5.65 MB",
    icon: FolderClosed,
  },
  {
    title: "Images & Video",
    description: "163 Files - 0.9 GB",
    icon: FolderClosed,
  },
  {
    title: "Application",
    description: "149 Files - 68.83 GB",
    icon: FolderClosed,
  },
];

// Define file type
interface File {
  name: string;
  size: string;
  icon: string | object;
}

// File data
const filesData: File[] = [
  {
    name: "tailwind.config.js",
    size: "4 KB",
    icon: File,
  },
  {
    name: "package.json",
    size: "2 KB",
    icon: File,
  },
  {
    name: "vite.config.js",
    size: "5 KB",
    icon: File,
  },
  {
    name: "tailwind.scss",
    size: "5 KB",
    icon: File,
  },
  {
    name: "index.html",
    size: "129 KB",
    icon: File,
  },
];

interface MediaItem {
  type: "image" | "video"; // Type of media
  src: string; // Source URL
  title: string; // Title or description
  size: string; // File size
}

// Media items array
const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: new URL("@/assets/images/gallery/img-01.jpg", import.meta.url).href,
    title: "Adventure is a form of self care",
    size: "15.6 KB",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/eSzNNYk7nVU?si=EHJjJ8BjAsp6yMgx",
    title: "Rebuilding iOS 15 with Tailwind CSS",
    size: "23.98 MB",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/Tmkr2kKUEgU?si=g6q_jn3gzqxK_CMj",
    title: "Building Blurry, Animated Background Shapes with Tailwind CSS",
    size: "46.32 MB",
  },
  {
    type: "image",
    src: new URL("@/assets/images/gallery/img-02.jpg", import.meta.url).href,
    title: "Cuteness in every bloom",
    size: "1.97 KB",
  },
  {
    type: "image",
    src: new URL("@/assets/images/gallery/img-03.jpg", import.meta.url).href,
    title: "Finding paradise wherever I go",
    size: "0.587 KB",
  },
];
export { documentData, filesData, mediaItems };

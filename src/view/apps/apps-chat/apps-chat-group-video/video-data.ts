import { ref } from "vue";
import user4 from "@/assets/images/avatar/user-4.png";
import user12 from "@/assets/images/avatar/user-12.png";
import user11 from "@/assets/images/avatar/user-11.png";
import user15 from "@/assets/images/avatar/user-15.png";
import user17 from "@/assets/images/avatar/user-17.png";

interface User {
  id: number;
  name: string;
  image: string | any;
}

// User data
const users = ref<User[]>([
  {
    id: 1,
    name: "You",
    image: new URL("@/assets/images/chat/video-7.png", import.meta.url),
  },
  {
    id: 2,
    name: "Michaela Sutton",
    image: new URL("@/assets/images/chat/video-2.png", import.meta.url).href,
  },
  {
    id: 3,
    name: "James Davis",
    image: new URL("@/assets/images/chat/video-3.png", import.meta.url).href,
  },
  {
    id: 4,
    name: "Wendy Dugan",
    image: new URL("@/assets/images/chat/video-4.png", import.meta.url).href,
  },
  {
    id: 5,
    name: "Carlos Garcia",
    image: new URL("@/assets/images/chat/video-5.png", import.meta.url).href,
  },
  {
    id: 6,
    name: "Lorna Yancey",
    image: new URL("@/assets/images/chat/video-6.png", import.meta.url).href,
  },
]);
interface Pin {
  time: string;
  text: string;
}
const pins = ref<Pin[]>([
  { time: "00:01:48", text: "Weekly Update" },
  { time: "00:02:48", text: "Design Issue" },
  { time: "00:03:01", text: "Deadline Discuses" },
]);

interface Message {
  avatar: string;
  name: string;
  message: string;
  time: string;
}
const videoChat: Message[] = [
  {
    avatar: user4, // Replace with actual user avatar path
    name: "Michaela Sutton",
    message: "I think this SRBThemes will provide us with some great insights.",
    time: "02:14",
  },
  {
    avatar: user12,
    name: "John Powers",
    message: "How about our problem last week?",
    time: "03:47",
  },
  {
    avatar: user11,
    name: "James Davis",
    message: "It's all clear, no worries😊",
    time: "04:32",
  },
  {
    avatar: user15,
    name: "Wendy Dugan",
    message: "Great tips thank you!",
    time: "08:47",
  },
  {
    avatar: user17,
    name: "Sophia Mia",
    message: "Love this conversation",
    time: "08:52",
  },
];
export { users, pins, videoChat };

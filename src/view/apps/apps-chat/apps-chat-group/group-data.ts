import brand1 from "@/assets/images/brands/img-01.png";
import brand8 from "@/assets/images/brands/img-08.png";
import brand12 from "@/assets/images/brands/img-12.png";
import brand2 from "@/assets/images/brands/img-02.png";
import brand22 from "@/assets/images/brands/img-22.png";

import user15 from "@/assets/images/avatar/user-15.png";
import user17 from "@/assets/images/avatar/user-17.png";
import user11 from "@/assets/images/avatar/user-11.png";
import user19 from "@/assets/images/avatar/user-19.png";
import user04 from "@/assets/images/avatar/user-4.png";
import user20 from "@/assets/images/avatar/user-20.png";
import user5 from "@/assets/images/avatar/user-5.png";
import user6 from "@/assets/images/avatar/user-6.png";
import user37 from "@/assets/images/avatar/user-37.png";
import user36 from "@/assets/images/avatar/user-36.png";
import user9 from "@/assets/images/avatar/user-9.png";
import user29 from "@/assets/images/avatar/user-29.png";
import user31 from "@/assets/images/avatar/user-31.png";
import user12 from "@/assets/images/avatar/user-12.png";
import user21 from "@/assets/images/avatar/user-21.png";
import user14 from "@/assets/images/avatar/user-14.png";
import { ref } from "vue";
import { FileArchive, FileText, Image } from "lucide-vue-next";

interface Group {
  name: string;
  image: string;
  message: string;
  time: string;
  badge?: string;
  unread?: boolean;
  active?: boolean;
}

const groups = ref<Group[]>([
  {
    name: "Shopify Developers",
    image: brand8,
    message: "Hello, How are you?",
    time: "11:48AM",
    badge: "2",
    unread: true,
  },
  {
    name: "Social Medium Team",
    image: brand12,
    message: "Hello, How are you?",
    time: "11:48AM",
    badge: "2",
    unread: true,
  },
  {
    name: "Deployment Disruptor",
    image: brand2,
    message: "Hello, How are you?",
    time: "11:48AM",
    unread: false,
  },
  {
    name: "Full-Stack Crew",
    image: brand22,
    message: "Hello, How are you?",
    time: "11:48AM",
    unread: false,
  },
  {
    name: "UX/UI Avengers",
    image: brand1,
    message: "Hello, How are you?",
    time: "11:48AM",
    unread: false,
  },
]);
const selectOptions = [
  { label: "Auli Ahokas", value: "Auli Ahokas" },
  { label: "Sirpa Kolkka", value: "Sirpa Kolkka" },
  { label: "Leena Laine", value: "Leena Laine" },
  { label: "Risto Saraste", value: "Risto Saraste" },
  { label: "Mikko Virtanen", value: "Mikko Virtanen" },
  { label: "Tuula Nieminen", value: "Tuula Nieminen" },
  { label: "Rosa Lynch", value: "Rosa Lynch" },
  { label: "Meagan Snow", value: "Meagan Snow" },
  { label: "Jessica Perry", value: "Jessica Perry" },
  { label: "Julie Lawson", value: "Julie Lawson" },
  { label: "Fiona Smith", value: "Fiona Smith" },
  { label: "Linda Stucky", value: "Linda Stucky" },
];

export interface User {
  name: string;
  avatar: string;
  status: string;
}
export interface Message {
  user: User;
  timestamp: string;
  message: string;
  type: "sent" | "received";
}

const messages = ref<Array<Message>>([
  {
    user: {
      name: "User 15",
      avatar: user15,
      status: "online",
    },
    timestamp: "Today, 09:59 AM",
    message:
      "Hey team, I hope everyone is doing well. Let's do a quick standup. What are everyone's updates for today?",
    type: "received",
  },
  {
    user: {
      name: "User 17",
      avatar: user17,
      status: "online",
    },
    timestamp: "Today, 10:00 AM",
    message:
      "Morning! I’m working on the new theme design. Almost done with the homepage. I'll move on to the product pages next. Could use some feedback on the hero section if anyone has time.",
    type: "sent",
  },
  {
    user: {
      name: "User 11",
      avatar: user11,
      status: "online",
    },
    timestamp: "Today, 10:11 AM",
    message:
      "Hey all. I’m debugging an issue with the checkout process. There seems to be a problem with the payment gateway integration. I'll keep you posted.",
    type: "received",
  },
  {
    user: {
      name: "User 19",
      avatar: user19,
      status: "online",
    },
    timestamp: "Today, 10:11 AM",
    message:
      "Hi team! I’m working on integrating the third-party review system. I’ve run into a small issue with the API limits, but I’m handling it. Should have it sorted by the end of the day.",
    type: "received",
  },
  {
    user: {
      name: "User 4",
      avatar: user04,
      status: "online",
    },
    timestamp: "Today, 10:11 AM",
    message:
      "Hi team. I’m testing the recent updates on the staging server. Found a couple of minor bugs in the user registration flow. Jamie, I’ll share the details with you in a bit.",
    type: "received",
  },
  {
    user: {
      name: "User 20",
      avatar: user20,
      status: "online",
    },
    timestamp: "Today, 10:11 AM",
    message:
      "Thanks, Sarah. Casey, I’ll ping you when I start on the product pages. Your mockups look great!",
    type: "received",
  },
  {
    user: {
      name: "User 17",
      avatar: user17,
      status: "online",
    },
    timestamp: "Today, 10:11 AM",
    message:
      "Sure thing, Sarah. I might need a second pair of eyes on the checkout flow once you're done with the gateway integration.",
    type: "sent",
  },
]);

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface Attachment {
  name: string;
  size: string;
  icon: string | any;
}
const members = ref<Member[]>([
  { id: 1, name: "Auli Ahokas", role: "Admin", avatar: user5 },
  { id: 2, name: "Sirpa Kolkka", role: "Team Leader", avatar: user6 },
  { id: 3, name: "Risto Saraste", role: "Manager", avatar: user37 },
  { id: 4, name: "Leena Laine", role: "Developer", avatar: user36 },
  { id: 5, name: "Mikko Virtanen", role: "Developer", avatar: user9 },
  { id: 6, name: "Tuula Nieminen", role: "Developer", avatar: user29 },
  { id: 7, name: "Jari Mäkinen", role: "Developer", avatar: user31 },
  { id: 8, name: "Heidi Kinnunen", role: "Developer", avatar: user12 },
  { id: 9, name: "Pekka Heikkinen", role: "Designer", avatar: user21 },
  { id: 10, name: "Kati Laakso", role: "Developer", avatar: user14 },
]);

// Attachments data
const attachments = ref<Attachment[]>([
  { name: "shopify-docs.txt", size: "154 kb", icon: FileText },
  { name: "main-logo.png", size: "467 kb", icon: Image },
  { name: "chat.zip", size: "48 mb", icon: FileArchive },
]);
export { groups, selectOptions, messages, members, attachments };

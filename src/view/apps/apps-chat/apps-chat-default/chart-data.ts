import user13 from "@/assets/images/avatar/user-13.png";
import user11 from "@/assets/images/avatar/user-11.png";
import user18 from "@/assets/images/avatar/user-18.png";
import user20 from "@/assets/images/avatar/user-20.png";
import user3 from "@/assets/images/avatar/user-3.png";
import user6 from "@/assets/images/avatar/user-6.png";
import user17 from "@/assets/images/avatar/user-17.png";
import gallery1 from "@/assets/images/gallery/img-01.jpg";
import gallery2 from "@/assets/images/gallery/img-05.jpg";
import user5 from "@/assets/images/avatar/user-5.png";
import user9 from "@/assets/images/avatar/user-9.png";
import user12 from "@/assets/images/avatar/user-12.png";
import user14 from "@/assets/images/avatar/user-14.png";
import user21 from "@/assets/images/avatar/user-21.png";
import user29 from "@/assets/images/avatar/user-29.png";
import user31 from "@/assets/images/avatar/user-31.png";
import user36 from "@/assets/images/avatar/user-36.png";
import user37 from "@/assets/images/avatar/user-37.png";
import { ref } from "vue";
const chatAvatar = ref(
  new URL("@/assets/images/avatar/user-13.png", import.meta.url)
);

interface Item {
  link: string;
  title: string;
  image?: string | any; // Optional for items without images
  label?: string; // Optional for text labels
}
// Sample data array for items
const items: Item[] = [
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-02.png", import.meta.url).href,
  },
  { link: "#!", title: "link", label: "PE" },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-06.png", import.meta.url).href,
  },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-05.png", import.meta.url).href,
  },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-01.png", import.meta.url).href,
  },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-07.png", import.meta.url).href,
  },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-08.png", import.meta.url).href,
  },
  { link: "#!", title: "link", label: "AI" },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-09.png", import.meta.url).href,
  },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-10.png", import.meta.url).href,
  },
  {
    link: "#!",
    title: "link",
    image: new URL("@/assets/images/brands/img-12.png", import.meta.url).href,
  },
];

export interface ChatType {
  name: String;
  avatar?: any;
  avatarText?: String;
  status: String;
  lastMessage: String;
  timestamp: String;
  unread: number;
}

const displayChatlist = ref<Array<ChatType>>([
  {
    name: "Dawn Teague",
    avatar: user13,
    status: "online",
    lastMessage: "Hello, How are you?",
    timestamp: "Just Now",
    unread: 2,
  },
  {
    name: "David Johnson",
    avatar: user11,
    status: "online",
    lastMessage: "Here are some very cute illustrations.",
    timestamp: "30 min",
    unread: 0,
  },
  {
    name: "Andrew Gilbert",
    avatar: user18,
    status: "offline",
    lastMessage:
      "Use tools like Trello, Asana, or Jira for task management and progress tracking.",
    timestamp: "Just Now",
    unread: 2,
  },
  {
    name: "Tyron Derby",
    avatar: user20,
    status: "offline",
    lastMessage:
      "Regularly review and improve communication practices based on team feedback and project needs.",
    timestamp: "Just Now",
    unread: 0,
  },
  {
    name: "Susan Liles",
    avatarText: "SL",
    status: "online",
    lastMessage:
      "Schedule regular check-ins to address any roadblocks and keep everyone aligned.",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    name: "Josh Doyle",
    avatarText: "JD",
    status: "online",
    lastMessage: "No further questions.",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    name: "Nicholas Hope",
    avatar: user3,
    status: "offline",
    lastMessage:
      "Sure, I can help with that. Let's have a quick call after this meeting to debug the issue.",
    timestamp: "Monday",
    unread: 1,
  },
  {
    name: "Louise Bryan",
    avatarText: "LB",
    status: "offline",
    lastMessage: "I'll share the meeting minutes and action items shortly.",
    timestamp: "Monday",
    unread: 0,
  },
  {
    name: "Sirkka Hakola",
    avatar: user6,
    status: "offline",
    lastMessage:
      "Let's reconvene next week for our regular check-in. Have a productive week!",
    timestamp: "Saturday",
    unread: 0,
  },
]);

// Messages data
const messages = ref([
  {
    sender: "David Johnson",
    time: "Today, 09:59 AM",
    text: "We need a new website that allows users to create accounts, browse products, and make purchases. Can you provide a rough timeline and cost estimate?",
    avatar: user13, // Update with actual path
    avatarText: "DJ", // Added avatar text
    type: "received",
  },
  {
    sender: "You",
    time: "Today, 10:00 AM",
    text: "Sure, we can help with that. To provide an accurate estimate, we'll need more details on the features you want. Let's schedule a call this week to discuss the specifics, such as the types of products, payment methods, and any design preferences.",
    avatar: user17, // Update with actual path
    avatarText: "U", // Added avatar text
    type: "sent",
  },
  {
    sender: "You",
    time: "Today, 10:15 AM",
    text: 'Got it. I’ll investigate and update you shortly. <a href="#" class="text-red-500">#bug</a>',
    avatar: user17, // Update with actual path
    avatarText: "U",
    type: "sent",
  },
  {
    sender: "David Johnson",
    time: "Today, 10:11 AM",
    text: 'Hi <a href="#" class="text-primary-500">@Shopia</a>, can you add the new search feature by Friday? Details are in the #features channel. Thanks! <a href="#" class="text-primary-500">#task</a>',
    avatar: user13, // Update with actual path
    avatarText: "DJ",
    type: "received",
  },
  {
    sender: "You",
    time: "Today, 10:12 AM",
    text: 'Sure, starting on it today. Will update you on the progress. <a href="#" class="text-primary-500">#task154</a>',
    avatar: user17, // Update with actual path
    avatarText: "U",
    type: "sent",
  },
  {
    sender: "David Johnson",
    time: "Today, 02:39 PM",
    text: 'Hi Shopia, there’s a problem with the mobile view on the homepage. Images aren’t scaling right. Can someone check? <a href="#" class="text-red-500">#bug</a>',
    avatar: user13, // Update with actual path
    avatarText: "DJ",
    type: "received",
    images: [gallery1, gallery2], // Update with actual paths
    extraImagesCount: "2+",
  },
]);

export interface ContactsType {
  id: string | number;
  name: string;
  avatar: any;
  status?: string;
  lastMessage?: string;
  timestamp?: string;
}

const contacts = ref<Array<ContactsType>>([
  { id: 1, name: "Auli Ahokas", avatar: user5 },
  { id: 2, name: "Sirpa Kolkka", avatar: user6 },
  { id: 3, name: "Risto Saraste", avatar: user37 },
  { id: 4, name: "Leena Laine", avatar: user36 },
  { id: 5, name: "Mikko Virtanen", avatar: user9 },
  { id: 6, name: "Tuula Nieminen", avatar: user29 },
  { id: 7, name: "Jari Mäkinen", avatar: user31 },
  { id: 8, name: "Heidi Kinnunen", avatar: user12 },
  { id: 9, name: "Pekka Heikkinen", avatar: user21 },
  { id: 10, name: "Kati Laakso", avatar: user14 },
]);
export { items, displayChatlist, messages, contacts, chatAvatar };

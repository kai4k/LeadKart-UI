const notificationList = [
  {
    image: new URL("@/assets/images/avatar/user-10.png", import.meta.url).href,
    name: "Donna Berlin",
    title: "Wants to edit Domiex Admin & dashboards",
    description: "",
    time: "5 min ago",
    extraCss: "unread",
  },
  {
    image: new URL("@/assets/images/avatar/user-11.png", import.meta.url).href,
    name: "Liam Clark",
    title: "Commented in domiex",
    description:
      ' "Greetings, I \'m making blazor web assembly app / MAUI.Does your template available for this ? "',
    time: "8 min ago",
    extraCss: "",
  },
  {
    image: "",
    name: "Lucas Nguyen",
    title: "Commented in domiex",
    description: "competed create new components",
    time: "01:15 PM",
    extraCss: "",
  },
  {
    image: new URL("@/assets/images/avatar/user-18.png", import.meta.url).href,
    name: "James Taylor",
    title: "Marked your order",
    description: "",
    time: "03:57 AM",
    badge: "Completed",
    extraCss: "",
  },
];

interface LayoutOption {
  id: string;
  value: string;
  label: string;
  template: string;
  extraCss?: string;
}
// Define the layout options
const layoutOptions: LayoutOption[] = [
  {
    id: "defaultLayout",
    value: "default",
    label: "Default",
    template: `
      <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
        <span class="h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850"></span>
        <span class="h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block">
          <span class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
        </span>
      </span>
    `,
  },
  {
    id: "horizontalLayout",
    value: "horizontal",
    label: "Horizontal",
    template: `
      <span class="block h-2 bg-gray-50 dark:bg-dark-850"></span>
      <span class="grid grid-cols-12 gap-0">
        <span class="inline-block col-span-12 p-2">
          <span class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
        </span>
      </span>
    `,
  },
  {
    id: "modernLayout",
    value: "modern",
    label: "Modern",
    template: `
      <span class="flex h-full">
        <span class="w-3 h-full shrink-0 bg-gray-50 dark:bg-dark-850 "></span>
        <span class="grow">
          <span class="p-1.5 block">
            <span class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
            <span class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
            <span class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
            <span class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
            <span class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          </span>
        </span>
      </span>
    `,
  },
  {
    id: "boxedLayout",
    value: "boxed",
    label: "Boxed",
    template: `
      <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
        <span class="h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850"></span>
        <span class="h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block">
          <span class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
        </span>
      </span>
    `,
    extraCss: "p-1.5",
  },
  {
    id: "semiboxLayout",
    value: "semibox",
    label: "Semibox",
    template: `
      <span class="grid h-[calc(100%_-_8px)] grid-cols-12">
        <span class="h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850"></span>
        <span class="h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block">
          <span class="block w-1/3 h-1.5 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/2 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-full h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-1/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
          <span class="block w-2/3 h-1.5 mt-1 bg-gray-100 rounded-md dark:bg-dark-850"></span>
        </span>
      </span>
    `,
    extraCss: "p-1.5",
  },
];

interface Tool {
  id: number;
  name: string;
  image: string;
}
const tools: Tool[] = [
  {
    id: 1,
    name: "X Twitter",
    image: new URL("@/assets/images/brands/img-30.png", import.meta.url).href,
  },
  {
    id: 2,
    name: "Slack",
    image: new URL("@/assets/images/brands/img-29.png", import.meta.url).href,
  },
  {
    id: 3,
    name: "GitHub",
    image: new URL("@/assets/images/brands/img-26.png", import.meta.url).href,
  },
  {
    id: 4,
    name: "YouTube",
    image: new URL("@/assets/images/brands/img-15.png", import.meta.url).href,
  },
  {
    id: 5,
    name: "Windows 11",
    image: new URL("@/assets/images/brands/img-06.png", import.meta.url).href,
  },
  {
    id: 6,
    name: "PayPal",
    image: new URL("@/assets/images/brands/img-20.png", import.meta.url).href,
  },
  {
    id: 7,
    name: "Twitch",
    image: new URL("@/assets/images/brands/img-11.png", import.meta.url).href,
  },
  {
    id: 8,
    name: "Snapchat",
    image: new URL("@/assets/images/brands/img-31.png", import.meta.url).href,
  },
  {
    id: 9,
    name: "Linux",
    image: new URL("@/assets/images/brands/img-04.png", import.meta.url).href,
  },
];
const darkModeColorOptions = [
  {
    id: "noneColors",
    name: "darkModeColors",
    value: "default",
    labelClass:
      "border border-gray-200 rounded-full dark:border-dark-800 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400",
    icon: "size-4",
  },
  {
    id: "zincColors",
    name: "darkModeColors",
    value: "zinc",
    labelClass:
      "rounded-full bg-zinc-950 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400",
  },
  {
    id: "stoneColors",
    name: "darkModeColors",
    value: "stone",
    labelClass:
      "rounded-full bg-stone-950 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400",
  },
  {
    id: "neutralColors",
    name: "darkModeColors",
    value: "neutral",
    labelClass:
      "rounded-full bg-neutral-950 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400",
  },
  {
    id: "defaultColors",
    name: "darkModeColors",
    value: "gray",
    labelClass:
      "rounded-full bg-gray-950 peer-checked:ring-1 peer-checked:ring-offset-2 dark:peer-checked:ring-offset-dark-900 peer-checked:ring-primary-400",
  },
];

// Layout mode options
const layoutModeOptions = [
  {
    id: "lightMode",
    value: "light",
    name: "layoutMode",
    label: "Light",
    labelClass: "peer-checked:border-primary-500",
    bgClass: "bg-gray-200/50 dark:bg-dark-800/50",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block",
  },
  {
    id: "darkMode",
    value: "dark",
    name: "layoutMode",
    label: "Dark",
    labelClass: "peer-checked:border-primary-500 border-dark-700 bg-dark-950",
    bgClass: "bg-dark-700/50",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-2 bg-dark-900 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block",
    spanTextCss: "opacity-10",
  },
  {
    id: "autoMode",
    value: "",
    name: "layoutMode",
    label: "Default System",
    labelClass:
      "relative peer-checked:border-primary-500 before:absolute before:bg-gray-950 before:w-1/2 before:inset-y-0 before:right-0  ",
    bgClass: "bg-gray-200/50 dark:bg-dark-800/50",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block",
    spanTextCss: "opacity-50",
  },
  {
    id: "blackWhiteMode",
    value: "black-white",
    name: "layoutMode",
    label: "Black & White",
    labelClass: "peer-checked:border-primary-500 grayscale",
    bgClass: "bg-gray-200/50 dark:bg-dark-800/50",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-10 p-1.5 inline-block",
  },
];

// Define an interface for sidebar options
interface SidebarOption {
  id: string;
  value: string;
  label: string;
  name: string;
  sidebarColClass: string;
  contentColClass: string;
}
// Sidebar options
const sidebarOptions: SidebarOption[] = [
  {
    id: "defaultSidebar",
    value: "default",
    label: "Default (Large)",
    name: "sidebar",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-3 bg-gray-50 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-9",
  },
  {
    id: "mediumSidebar",
    value: "medium",
    label: "Medium",
    name: "sidebar",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-2 bg-gray-50 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-10",
  },
  {
    id: "smallSidebar",
    value: "small",
    label: "Small",
    name: "sidebar",
    sidebarColClass:
      "h-[calc(100%_-_8px)] col-span-1 bg-gray-50 dark:bg-dark-850",
    contentColClass: "h-[calc(100%_-_8px)] col-span-11",
  },
];

// Sidebar color options
const sidebarColorOptions = [
  {
    id: "lightSidebarColors",
    name: "sidebarColors",
    value: "light",
    labelClass: "bg-gray-100",
  },
  {
    id: "darkSidebarColors",
    name: "sidebarColors",
    value: "dark",
    labelClass: "bg-gray-800",
  },
  {
    id: "brandSidebarColors",
    name: "sidebarColors",
    value: "brand",
    labelClass: "bg-primary-900",
  },
  {
    id: "purpleSidebarColors",
    name: "sidebarColors",
    value: "purple",
    labelClass: "bg-purple-950",
  },
  {
    id: "skySidebarColors",
    name: "sidebarColors",
    value: "sky",
    labelClass: "bg-sky-950",
  },
];

// TypeScript type for color option
interface ColorOption {
  id: string;
  name: string;
  value: string;
  labelClass: string;
}

// Primary color options
const primaryColorOptions: ColorOption[] = [
  {
    id: "defaultPrimaryColors",
    name: "primaryColors",
    value: "default",
    labelClass: "bg-[#358ffc]",
  },
  {
    id: "greenPrimaryColors",
    name: "primaryColors",
    value: "green",
    labelClass: "bg-[#1acd81]",
  },
  {
    id: "violetPrimaryColors",
    name: "primaryColors",
    value: "violet",
    labelClass: "bg-violet-500",
  },
  {
    id: "orangePrimaryColors",
    name: "primaryColors",
    value: "orange",
    labelClass: "bg-[#f04b1f]",
  },
  {
    id: "tealPrimaryColors",
    name: "primaryColors",
    value: "teal",
    labelClass: "bg-teal-500",
  },
  {
    id: "fuchsiaPrimaryColors",
    name: "primaryColors",
    value: "fuchsia",
    labelClass: "bg-fuchsia-500",
  },
  {
    id: "limePrimaryColors",
    name: "primaryColors",
    value: "lime",
    labelClass: "bg-lime-500",
  },
  {
    id: "amberPrimaryColors",
    name: "primaryColors",
    value: "amber",
    labelClass: "bg-amber-500",
  },
];

const menu = [
  {
    title: "dashboard",
    icon: "",
    child: [
      {
        title: "e-com",
        icon: "",
      },
      {
        title: "Email",
        icon: "",
      },
      {
        title: "CRM",
        icon: "",
      },
      {
        title: "School",
        icon: "",
      },
    ],
  },
  {
    title: "settings",
    icon: "",
    child: [
      {
        title: "theme",
        icon: "",
      },
      {
        title: "language",
        icon: "",
      },
      {
        title: "logout",
        icon: "",
      },
      {
        title: "help",
        icon: "",
        child: [
          {
            title: "FAQ",
            icon: "",
          },
          {
            title: "Contact",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    title: "App",
    icon: "",
    child: [
      {
        title: "Chart",
        icon: "",
      },
      {
        title: "Event",
        icon: "",
      },
      {
        title: "Report",
        icon: "",
      },
      {
        title: "Hospital",
        icon: "",
        child: [
          {
            title: "Doctor",
            icon: "",
          },
          {
            title: "Patient",
            icon: "",
          },
          {
            title: "Staff",
            icon: "",
          },
        ],
      },
    ],
  },
];

export {
  notificationList,
  tools,
  darkModeColorOptions,
  layoutModeOptions,
  sidebarColorOptions,
  primaryColorOptions,
  sidebarOptions,
  layoutOptions,
};

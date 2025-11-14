import { ref } from "vue";

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const events = ref<any>([
  {
    id: 1,
    title: "Meeting",
    end: new Date(currentYear, currentMonth, 1),
    start: new Date(currentYear, currentMonth, 1),
    extendedProps: { guests: [], location: "surat" },
    classNames: ["bg-green-500", "hover:bg-green-500", "text-green-50", "!p-2"],
  },
  {
    id: 2,
    title: "Update Weekly",
    end: new Date(currentYear, currentMonth, 7),
    start: new Date(currentYear, currentMonth, 7),
    extendedProps: { location: "surat" },
    classNames: [
      "bg-primary-500",
      "hover:bg-primary-500",
      "text-primary-50",
      "!p-2",
    ],
  },
  {
    id: 3,
    title: "Family Dinner",
    end: new Date(currentYear, currentMonth, 14),
    start: new Date(currentYear, currentMonth, 14),
    extendedProps: { location: "surat" },
    classNames: [
      "bg-purple-500",
      "hover:bg-purple-500",
      "text-purple-50",
      "!p-2",
    ],
  },
  {
    id: 4,
    title: "School Reunion",
    end: new Date(currentYear, currentMonth, 10),
    start: new Date(currentYear, currentMonth, 10),
    extendedProps: { location: "surat" },
    classNames: ["bg-sky-500", "hover:bg-sky-500", "text-sky-50", "!p-2"],
  },

  {
    id: 5,
    title: "Holiday Tour",
    end: new Date(currentYear, currentMonth, 14),
    start: new Date(currentYear, currentMonth, 14),
    extendedProps: { location: "surat" },
    classNames: ["bg-green-500", "hover:bg-green-500", "text-green-50", "!p-2"],
  },
  {
    id: 6,
    title: "Meeting",
    end: new Date(currentYear, currentMonth, 23),
    start: new Date(currentYear, currentMonth, 23),
    extendedProps: { location: "surat" },
    classNames: ["bg-green-500", "hover:bg-green-500", "text-green-50", "!p-2"],
  },
  {
    id: 7,
    title: "Marrige Function",
    start: new Date(currentYear, currentMonth, 18),
    end: new Date(currentYear, currentMonth, 18),
    extendedProps: { location: "surat" },
    classNames: [
      "bg-purple-500",
      "hover:bg-purple-500",
      "text-purple-50",
      "!p-2",
    ],
  },
]);

export { events };

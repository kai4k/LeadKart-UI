import { ref } from "vue";

const attendanceRecords = ref([
  {
    date: "Thu, July 04, 2024",
    status: "On Time",
    checkIn: "9:00 AM",
    checkOut: "6:00 PM",
    total: "9hr",
    notes: "Well Done",
  },
  {
    date: "Wed, July 03, 2024",
    status: "On Time",
    checkIn: "9:15 AM",
    checkOut: "5:45 PM",
    total: "7:30hr",
    notes: "Well Done",
  },
  {
    date: "Tue, July 02, 2024",
    status: "Late",
    checkIn: "9:00 AM",
    checkOut: "5:00 PM",
    total: "8hr",
    notes: "Traffic Issue",
  },
  {
    date: "Mon, July 01, 2024",
    status: "On Time",
    checkIn: "8:45 AM",
    checkOut: "6:00 PM",
    total: "9:15hr",
    notes: "Well Done",
  },
  {
    date: "Sun, Jun 30, 2024",
    status: "Holiday",
    checkIn: "N/A",
    checkOut: "N/A",
    total: "0hr",
    notes: "Holiday",
  },
  {
    date: "Sat, Jun 29, 2024",
    status: "On Time",
    checkIn: "9:00 AM",
    checkOut: "6:00 PM",
    total: "9hr",
    notes: "Well Done",
  },
  {
    date: "Fri, Jun 28, 2024",
    status: "Late",
    checkIn: "9:30 AM",
    checkOut: "6:00 PM",
    total: "8:30hr",
    notes: "Traffic Issue",
  },
  {
    date: "Thu, Jun 27, 2024",
    status: "On Time",
    checkIn: "9:00 AM",
    checkOut: "5:00 PM",
    total: "8hr",
    notes: "Well Done",
  },
  {
    date: "Wed, Jun 26, 2024",
    status: "On Time",
    checkIn: "9:00 AM",
    checkOut: "6:00 PM",
    total: "9hr",
    notes: "Well Done",
  },
]);

export { attendanceRecords };

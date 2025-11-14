import user14 from "@/assets/images/avatar/user-14.png";
import user15 from "@/assets/images/avatar/user-15.png";
import user17 from "@/assets/images/avatar/user-17.png";
import user18 from "@/assets/images/avatar/user-18.png";
import user19 from "@/assets/images/avatar/user-19.png";
import user20 from "@/assets/images/avatar/user-20.png";
import user21 from "@/assets/images/avatar/user-21.png";
import user23 from "@/assets/images/avatar/user-23.png";
import user13 from "@/assets/images/avatar/user-13.png";
import { ref } from "vue";

export interface Appointment {
  image: string;
  patientName: string;
  treatment: string;
  date: string;
  time: string;
}

const todayAppointmentData = <Array<Appointment>>[
  {
    image: user14,
    patientName: "Laura Anderson",
    treatment: "Heart check-up",
    date: "24, Tue",
    time: "11:20AM - 12:30PM",
  },
  {
    image: user15,
    patientName: "Emily Johnson",
    treatment: "Kidney function test",
    date: "24, Tue",
    time: "12:35AM - 01:40PM",
  },
  {
    image: user17,
    patientName: "Sarah White",
    treatment: "Eye examination",
    date: "24, Tue",
    time: "01:50AM - 02:20PM",
  },
  {
    image: user18,
    patientName: "Michael Brown",
    treatment: "Diabetes check-up",
    date: "24, Tue",
    time: "02:30PM - 03:00PM",
  },
  {
    image: user19,
    patientName: "David Wilson",
    treatment: "Skin condition evaluation",
    date: "24, Tue",
    time: "03:10PM - 03:40PM",
  },
  {
    image: user20,
    patientName: "Jessica Lee",
    treatment: "Annual physical exam",
    date: "24, Tue",
    time: "03:50PM - 04:20PM",
  },
  {
    image: user21,
    patientName: "Paul Martinez",
    treatment: "Orthopedic consultation",
    date: "24, Tue",
    time: "04:30PM - 05:00PM",
  },
];

interface AppointmentDataType {
  id?: string | number;
  image?: string;
  date: string;
  time: string;
  patientName: string;
  doctor: string;
  treatmentType: string;
  status: string;
}
const appointmentsData = ref<AppointmentDataType[]>([
  {
    date: "07 June, 2024",
    time: "02:00PM - 03:00PM",
    patientName: "Sarah White",
    doctor: "Dr. Michael Johnson",
    treatmentType: "Routine check-up",
    status: "Pending",
  },
  {
    image: user14,
    date: "08 June, 2024",
    time: "03:00PM - 04:00PM",
    patientName: "Daniel Adams",
    doctor: "Dr. Sarah Evans",
    treatmentType: "Skin condition evaluation",
    status: "New",
  },
  {
    date: "09 June, 2024",
    time: "11:30AM - 12:30PM",
    patientName: "Olivia Lewis",
    doctor: "Dr. Sarah Evans",
    treatmentType: "Vision check-up",
    status: "New",
  },
  {
    date: "10 June, 2024",
    time: "10:00AM - 11:00AM",
    patientName: "James Brown",
    doctor: "Dr. Emily Carter",
    treatmentType: "Dental cleaning",
    status: "Pending",
  },
  {
    image: user18,
    date: "11 June, 2024",
    time: "01:00PM - 02:00PM",
    patientName: "Linda Taylor",
    doctor: "Dr. Robert Harris",
    treatmentType: "Cardiology consultation",
    status: "Confirmed",
  },
  {
    image: user17,
    date: "12 June, 2024",
    time: "09:00AM - 10:00AM",
    patientName: "Sophia Martinez",
    doctor: "Dr. Michael Johnson",
    treatmentType: "Blood test",
    status: "Completed",
  },
  {
    date: "13 June, 2024",
    time: "11:00AM - 12:00PM",
    patientName: "Liam Anderson",
    doctor: "Dr. Sarah Evans",
    treatmentType: "Skin biopsy",
    status: "Pending",
  },
  {
    image: user20,
    date: "14 June, 2024",
    time: "02:00PM - 03:00PM",
    patientName: "Emma Wilson",
    doctor: "Dr. Emily Carter",
    treatmentType: "Orthopedic consultation",
    status: "Confirmed",
  },
  {
    date: "15 June, 2024",
    time: "01:00PM - 02:00PM",
    patientName: "Noah Davis",
    doctor: "Dr. Robert Harris",
    treatmentType: "Heart check-up",
    status: "New",
  },
  {
    date: "16 June, 2024",
    time: "03:00PM - 04:00PM",
    patientName: "Ava Johnson",
    doctor: "Dr. Michael Johnson",
    treatmentType: "Physical therapy",
    status: "Pending",
  },
  {
    date: "17 June, 2024",
    time: "10:30AM - 11:30AM",
    patientName: "William Moore",
    doctor: "Dr. Sarah Evans",
    treatmentType: "Allergy test",
    status: "Completed",
  },
  {
    image: user15,
    date: "18 June, 2024",
    time: "11:00AM - 12:00PM",
    patientName: "Mia Taylor",
    doctor: "Dr. Emily Carter",
    treatmentType: "Dental filling",
    status: "Pending",
  },
  {
    date: "19 June, 2024",
    time: "01:00PM - 02:00PM",
    patientName: "Ethan Martinez",
    doctor: "Dr. Robert Harris",
    treatmentType: "Kidney function test",
    status: "Confirmed",
  },
  {
    image: user23,
    date: "20 June, 2024",
    time: "02:30PM - 03:30PM",
    patientName: "Isabella Hernandez",
    doctor: "Dr. Michael Johnson",
    treatmentType: "Routine check-up",
    status: "Pending",
  },
  {
    image: user13,
    date: "21 June, 2024",
    time: "09:00AM - 10:00AM",
    patientName: "Jackson Lee",
    doctor: "Dr. Sarah Evans",
    treatmentType: "Chest X-ray",
    status: "New",
  },
  {
    date: "22 June, 2024",
    time: "10:00AM - 11:00AM",
    patientName: "Aiden Clark",
    doctor: "Dr. Emily Carter",
    treatmentType: "Orthopedic follow-up",
    status: "Pending",
  },
  {
    date: "23 June, 2024",
    time: "11:00AM - 12:00PM",
    patientName: "Grace Martinez",
    doctor: "Dr. Robert Harris",
    treatmentType: "Cardiac stress test",
    status: "Confirmed",
  },
  {
    date: "24 June, 2024",
    time: "12:00PM - 01:00PM",
    patientName: "Lucas Johnson",
    doctor: "Dr. Michael Johnson",
    treatmentType: "Routine check-up",
    status: "Pending",
  },
  {
    date: "25 June, 2024",
    time: "01:00PM - 02:00PM",
    patientName: "Lily Davis",
    doctor: "Dr. Sarah Evans",
    treatmentType: "Allergy consultation",
    status: "New",
  },
  {
    date: "26 June, 2024",
    time: "02:00PM - 03:00PM",
    patientName: "Mason Brown",
    doctor: "Dr. Emily Carter",
    treatmentType: "Dental extraction",
    status: "Confirmed",
  },
  {
    date: "27 June, 2024",
    time: "03:00PM - 04:00PM",
    patientName: "Zoe Wilson",
    doctor: "Dr. Robert Harris",
    treatmentType: "Neurological examination",
    status: "Pending",
  },
]);
export { todayAppointmentData, appointmentsData };

import user1 from "@/assets/images/avatar/user-1.png";
import user2 from "@/assets/images/avatar/user-2.png";
import user3 from "@/assets/images/avatar/user-3.png";
import user4 from "@/assets/images/avatar/user-4.png";
import user5 from "@/assets/images/avatar/user-5.png";
import user6 from "@/assets/images/avatar/user-6.png";
import user7 from "@/assets/images/avatar/user-7.png";
import user8 from "@/assets/images/avatar/user-8.png";
import user9 from "@/assets/images/avatar/user-9.png";
import user10 from "@/assets/images/avatar/user-10.png";
import user11 from "@/assets/images/avatar/user-11.png";
import user12 from "@/assets/images/avatar/user-12.png";
import user13 from "@/assets/images/avatar/user-13.png";
import user14 from "@/assets/images/avatar/user-14.png";
import user15 from "@/assets/images/avatar/user-15.png";
import user16 from "@/assets/images/avatar/user-16.png";
import user17 from "@/assets/images/avatar/user-17.png";
import user18 from "@/assets/images/avatar/user-18.png";
import user19 from "@/assets/images/avatar/user-19.png";
import user20 from "@/assets/images/avatar/user-20.png";
import user21 from "@/assets/images/avatar/user-21.png";
import user22 from "@/assets/images/avatar/user-22.png";
import user23 from "@/assets/images/avatar/user-23.png";
import user24 from "@/assets/images/avatar/user-24.png";
import user25 from "@/assets/images/avatar/user-25.png";
import { ref } from "vue";

export interface Customer {
  image?: string;
  customersID?: string | number;
  customersName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  location: string;
  status: string;
  subscriber: string;
}
const customers = ref<Array<Customer>>([
  {
    customersID: 24151,
    image: user1,
    customersName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    subscriber: "Yes",
    gender: "Male",
    location: "New York",
    status: "Active",
  },
  {
    customersID: 24152,
    image: user2,
    customersName: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1987654321",
    subscriber: "Yes",
    gender: "Female",
    location: "Los Angeles",
    status: "Inactive",
  },
  {
    customersID: 24153,
    image: user3,
    customersName: "Michael Johnson",
    email: "michael.johnson@example.com",
    phoneNumber: "+1654321879",
    subscriber: "No",
    gender: "Male",
    location: "Chicago",
    status: "Active",
  },
  {
    customersID: 24154,
    image: user4,
    customersName: "Emily Brown",
    email: "emily.brown@example.com",
    phoneNumber: "+1789456123",
    subscriber: "Yes",
    gender: "Female",
    location: "Houston",
    status: "Inactive",
  },
  {
    customersID: 24155,
    image: user5,
    customersName: "Christopher Wilson",
    email: "christopher.wilson@example.com",
    phoneNumber: "+1324567890",
    subscriber: "No",
    gender: "Female",
    location: "Philadelphia",
    status: "Active",
  },
  {
    customersID: 24156,
    image: user6,
    customersName: "Elizabeth Martinez",
    email: "elizabeth.martinez@example.com",
    phoneNumber: "+1897654321",
    subscriber: "Yes",
    gender: "Female",
    location: "Phoenix",
    status: "Active",
  },
  {
    customersID: 24157,
    image: user7,
    customersName: "David Anderson",
    email: "david.anderson@example.com",
    phoneNumber: "+1654321789",
    subscriber: "Yes",
    gender: "Male",
    location: "San Antonio",
    status: "Inactive",
  },
  {
    customersID: 24158,
    image: user8,
    customersName: "Sarah Taylor",
    email: "sarah.taylor@example.com",
    phoneNumber: "+1789456321",
    subscriber: "Yes",
    gender: "Female",
    location: "San Diego",
    status: "Inactive",
  },
  {
    customersID: 24159,
    image: user9,
    customersName: "Matthew Thomas",
    email: "matthew.thomas@example.com",
    phoneNumber: "+1324567890",
    subscriber: "No",
    gender: "Male",
    location: "Dallas",
    status: "Active",
  },
  {
    customersID: 24160,
    image: user10,
    customersName: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    phoneNumber: "+1897654123",
    subscriber: "Yes",
    gender: "Female",
    location: "San Jose",
    status: "Active",
  },
  {
    customersID: 24161,
    image: user11,
    customersName: "Daniel Hernandez",
    email: "daniel.hernandez@example.com",
    phoneNumber: "+1654312789",
    subscriber: "No",
    gender: "Male",
    location: "Austin",
    status: "Inactive",
  },
  {
    customersID: 24162,
    image: user12,
    customersName: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    phoneNumber: "+1789456321",
    subscriber: "Yes",
    gender: "Female",
    location: "Jacksonville",
    status: "Active",
  },
  {
    customersID: 24163,
    image: user13,
    customersName: "Alexander Brown",
    email: "alexander.brown@example.com",
    phoneNumber: "+1324567890",
    subscriber: "Yes",
    gender: "Male",
    location: "Indianapolis",
    status: "Inactive",
  },
  {
    customersID: 24164,
    image: user14,
    customersName: "Emma Wilson",
    email: "emma.wilson@example.com",
    phoneNumber: "+1987654321",
    subscriber: "No",
    gender: "Female",
    location: "San Francisco",
    status: "Active",
  },
  {
    customersID: 24165,
    image: user15,
    customersName: "William Garcia",
    email: "william.garcia@example.com",
    phoneNumber: "+1234567890",
    subscriber: "No",
    gender: "Male",
    location: "Seattle",
    status: "Inactive",
  },
  {
    customersID: 24166,
    image: user16,
    customersName: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    phoneNumber: "+1987654321",
    subscriber: "Yes",
    gender: "Female",
    location: "Denver",
    status: "Active",
  },
  {
    customersID: 24167,
    image: user17,
    customersName: "Liam Martinez",
    email: "liam.martinez@example.com",
    phoneNumber: "+1654321879",
    subscriber: "Yes",
    gender: "Male",
    location: "Miami",
    status: "Inactive",
  },
  {
    customersID: 24168,
    image: user18,
    customersName: "Isabella Wilson",
    email: "isabella.wilson@example.com",
    phoneNumber: "+1324567890",
    subscriber: "No",
    gender: "Female",
    location: "Atlanta",
    status: "Active",
  },
  {
    customersID: 24169,
    image: user19,
    customersName: "Mason Taylor",
    email: "mason.taylor@example.com",
    phoneNumber: "+1789456123",
    subscriber: "No",
    gender: "Male",
    location: "Washington",
    status: "Inactive",
  },
  {
    customersID: 24170,
    image: user20,
    customersName: "Charlotte Garcia",
    email: "charlotte.garcia@example.com",
    phoneNumber: "+1897654321",
    subscriber: "Yes",
    gender: "Female",
    location: "Boston",
    status: "Active",
  },
  {
    customersID: 24171,
    image: user21,
    customersName: "Benjamin Brown",
    email: "benjamin.brown@example.com",
    phoneNumber: "+1654321789",
    subscriber: "No",
    gender: "Male",
    location: "Detroit",
    status: "Inactive",
  },
  {
    customersID: 24172,
    image: user22,
    customersName: "Amelia Hernandez",
    email: "amelia.hernandez@example.com",
    phoneNumber: "+1789456321",
    subscriber: "Yes",
    gender: "Female",
    location: "Memphis",
    status: "Active",
  },
  {
    customersID: 24173,
    image: user23,
    customersName: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    phoneNumber: "+1324567890",
    subscriber: "Yes",
    gender: "Male",
    location: "Nashville",
    status: "Inactive",
  },
  {
    customersID: 24174,
    image: user24,
    customersName: "Evelyn Johnson",
    email: "evelyn.johnson@example.com",
    phoneNumber: "+1897654123",
    subscriber: "Yes",
    gender: "Female",
    location: "Portland",
    status: "Active",
  },
  {
    customersID: 24175,
    image: user25,
    customersName: "James Smith",
    email: "james.smith@example.com",
    phoneNumber: "+1789456321",
    subscriber: "No",
    gender: "Male",
    location: "Las Vegas",
    status: "Inactive",
  },
]);
export { customers };

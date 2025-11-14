import {
  Brain,
  Fingerprint,
  HeartPulse,
  Microscope,
  Siren,
  Syringe,
  CalendarPlus,
  Headset,
  Pill,
  ShieldCheck,
  HeartCrack,
  Activity,
  Stethoscope,
} from "lucide-vue-next";
import { ref } from "vue";

const services = ref([
  { title: "Health Test", icon: Microscope },
  { title: "Bone and Joint Health", icon: HeartPulse },
  { title: "Brain Surgery", icon: Brain },
  { title: "Imaging Services", icon: Siren },
  { title: "Genetic Testing", icon: Fingerprint },
  { title: "Laboratory Testing", icon: Syringe },
]);

const features = [
  {
    icon: CalendarPlus,
    title: "Make an Appointment",
    description: "Schedule with your Favorite doctor anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Health Guarantee Forever",
    description:
      "We stand behind our puppies with a two year genetic health guarantee.",
  },
  {
    icon: Pill,
    title: "Pharmacy Marketplace",
    description: "Online pharmacy laws in India are still in nascent stage.",
  },
  {
    icon: Headset,
    title: "24/7 Emergency Service",
    description: "Expert team of doctors can handle any medical emergency.",
  },
];

const specialties = [
  {
    title: "Cardiology",
    description:
      "Cardiology, medical specialty dealing with the diagnosis and treatment of diseases and abnormalities involving the heart and blood vessels.",
    icon: HeartPulse,
    color: "text-red-500 fill-red-500/20",
    bgClass: "bg-red-500/15",
  },
  {
    title: "Ophthalmology",
    description:
      "Ophthalmology is a clinical and surgical specialty within medicine that deals with the diagnosis and treatment of eye disorders.",
    icon: Syringe,
    color: "yellow text-yellow-500 fill-yellow-500/20",
    bgClass: "bg-yellow-500/15",
  },
  {
    title: "Neurology",
    description:
      "Medical specialty concerned with the nervous system and its functional or organic disorders.",
    icon: Brain,
    color: "green text-green-500 fill-green-500/20",
    bgClass: "bg-green-500/15 ",
  },
  {
    title: "Psychiatrist",
    description:
      "Psychiatry is the branch of medicine focused on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.",
    icon: Activity,
    color: "sky text-sky-500 fill-sky-500/20",
    bgClass: "bg-sky-500/15",
  },
  {
    title: "Surgeon",
    description:
      "A surgeon is a doctor who specializes in evaluating and treating conditions that may require surgery.",
    icon: Stethoscope,
    color: "purple text-purple-500 fill-purple-500/20",
    bgClass: "bg-purple-500/15",
  },
  {
    title: "Hematologist",
    description:
      "A doctor who specializes in the treatment of blood disorders.",
    icon: Microscope,
    color: "primary text-primary-500 fill-primary-500/20",
    bgClass: "bg-primary-500/15",
  },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Clyde Hillmer",
    location: "Budapest, Hungary",
    specialty: "Neurologists",
    rating: "4.9",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-01.jpg",
      import.meta.url
    ),
  },
  {
    id: 2,
    name: "Dr. Walker Dantonio",
    location: "Damascus, Syria",
    specialty: "Orthopaedist",
    rating: "4.4",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-02.jpg",
      import.meta.url
    ),
  },
  {
    id: 3,
    name: "Dr. Archie Hylands",
    location: "Wellington, New Zealand",
    specialty: "Radiologist",
    rating: "4.5",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-03.jpg",
      import.meta.url
    ),
  },
  {
    id: 4,
    name: "Dr. Marshall Genova",
    location: "Nairobi, Kenya",
    specialty: "Cardiologist",
    rating: "4.7",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-05.jpg",
      import.meta.url
    ),
  },
  {
    id: 5,
    name: "Dr. Charlie Cornelia",
    location: "Warsaw, Poland",
    specialty: "Nephrologist",
    rating: "4.0",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-04.jpg",
      import.meta.url
    ),
  },
  {
    id: 6,
    name: "Dr. Sophia Hara",
    location: "Berlin, Germany",
    specialty: "Hematologist",
    rating: "4.8",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-06.jpg",
      import.meta.url
    ),
  },
  {
    id: 7,
    name: "Dr. Jason Locklin",
    location: "Bogota, Colombia",
    specialty: "Physician",
    rating: "4.4",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-07.jpg",
      import.meta.url
    ),
  },
  {
    id: 8,
    name: "Dr. Corbin Beason",
    location: "Canberra, Australia",
    specialty: "Psychiatrist",
    rating: "4.9",
    image: new URL(
      "@/assets/images/hospital/landing/doctors/img-08.jpg",
      import.meta.url
    ),
  },
];

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Matthew Dittman",
    location: "Vienna, Austria",
    image: new URL("@/assets/images/avatar/user-3.png", import.meta.url).href,
    review:
      "The staff at the hospital were incredibly attentive and kind. Dr. Sophia explained my condition thoroughly and answered all my questions. The nurses checked on me regularly and made sure I was comfortable. The facility was clean and well-organized. Overall, a very positive experience.",
  },
  {
    id: 2,
    name: "Matthew Dittman",
    location: "Brussels, Belgium",
    image: new URL("@/assets/images/avatar/user-9.png", import.meta.url).href,
    review:
      "I had to visit the ER for a sudden pain in my abdomen. The wait time was a bit long, but once I was seen, the care I received was excellent. The doctors quickly diagnosed my issue and started treatment right away.",
  },
  {
    id: 3,
    name: "Lisa",
    location: "Beijing, China",
    image: new URL("@/assets/images/avatar/user-17.png", import.meta.url).href,
    review:
      "My experience at the hospital was mixed. The medical care was top-notch, and the doctors were very knowledgeable. However, the administrative process was slow, and I had to wait a long time to get my paperwork sorted out.",
  },
  {
    id: 4,
    name: "Glen Walker",
    location: "Havana, Cuba",
    image: new URL("@/assets/images/avatar/user-20.png", import.meta.url).href,
    review:
      "I recently had surgery at the hospital, and I was very impressed with the level of care. The surgical team was professional and made me feel.",
  },
  {
    id: 5,
    name: "William Hoyle",
    location: "Bogota, Colombia",
    image: new URL("@/assets/images/avatar/user-21.png", import.meta.url).href,
    review:
      "The maternity ward at the hospital was wonderful. The midwives and nurses were extremely supportive throughout my labor and delivery. The postnatal care was excellent, with plenty of resources and support for new mothers.",
  },
  {
    id: 6,
    name: "James Lewis",
    location: "Helsinki, Finland",
    image: new URL("@/assets/images/avatar/user-11.png", import.meta.url).href,
    review:
      "I came in for a routine check-up and was impressed by how smoothly everything went. The check-in process was efficient, and I didn’t have to wait long to see the doctor.",
  },
  {
    id: 7,
    name: "Theresa Rice",
    location: "Copenhagen, Denmark",
    image: new URL("@/assets/images/avatar/user-10.png", import.meta.url).href,
    review:
      "I had a very positive experience during my physical therapy sessions. The therapists were knowledgeable and encouraging, helping me regain my strength after my knee surgery. They tailored the exercises to my needs and monitored my progress closely.",
  },
];
export { services, features, specialties, doctors, testimonials };

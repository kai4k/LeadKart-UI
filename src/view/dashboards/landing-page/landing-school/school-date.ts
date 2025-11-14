import { BriefcaseBusiness, Feather, Gem, Handshake } from "lucide-vue-next";
import { ref } from "vue";
const images = ref([
  {
    src: new URL("@/assets/images/school/landing/img-01.png", import.meta.url)
      .href,
    bgColor: "sky-500/10",
  },
  {
    src: new URL("@/assets/images/school/landing/img-02.png", import.meta.url)
      .href,

    bgColor: "purple-500/10",
  },
  {
    src: new URL("@/assets/images/school/landing/img-03.png", import.meta.url)
      .href,

    bgColor: "green-500/10",
  },
  {
    src: new URL("@/assets/images/school/landing/img-04.png", import.meta.url)
      .href,
    bgColor: "yellow-500/10",
  },
]);

interface Counter {
  target: number;
  duration: number;
  current: number;
  suffix: string;
  label: string;
}

const counters = ref<Counter[]>([
  {
    target: 250,
    duration: 500,
    current: 0,
    suffix: "k",
    label: "Total Student",
  },
  {
    target: 300,
    duration: 500,
    current: 0,
    suffix: "+",
    label: "Expert Teacher Teams",
  },
  {
    target: 170,
    duration: 500,
    current: 0,
    suffix: "+",
    label: "Conducive Class Room",
  },
  {
    target: 7546,
    duration: 500,
    current: 0,
    suffix: "",
    label: "Online Tutorial",
  },
  { target: 65, duration: 500, current: 0, suffix: "+", label: "Career Guide" },
]);

interface Feature {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    title: "Online Classes",
    description:
      "An online class is a course conducted over the Internet. They are generally conducted through a learning management.",
    image: new URL(
      "@/assets/images/school/landing/feature/online-education.png",
      import.meta.url
    ).href,
    bgColor: "bg-purple-500/10",
  },
  {
    title: "New Skills",
    description:
      "These life skills include problem solving, critical thinking, communication skills, decision-making, creative thinking.",
    image: new URL(
      "@/assets/images/school/landing/feature/self-improvement.png",
      import.meta.url
    ).href,
    bgColor: "bg-10low-500/410",
  },
  {
    title: "Best Trainer",
    description:
      "The Skills Trainer helps individuals develop the knowledge and abilities necessary to do their jobs effectively and efficiently.",
    image: new URL(
      "@/assets/images/school/landing/feature/coach.png",
      import.meta.url
    ).href,
    bgColor: "bg-sky-500/10",
  },
  {
    title: "Easy to Learn",
    description:
      "A fast learner is someone who embodies the skills of being a strategic a good listener and applies them to learning quickly.",
    image: new URL(
      "@/assets/images/school/landing/feature/learning.png",
      import.meta.url
    ).href,
    bgColor: "bg-emerald-500/10",
  },
];

interface Advantage {
  icon: any;
  text: string;
}

const advantages: Advantage[] = [
  {
    icon: Gem,
    text: "Highlight Unique Programs and Curriculum",
  },
  {
    icon: Feather,
    text: "Qualified and Passionate Staff",
  },
  {
    icon: BriefcaseBusiness,
    text: "Modern Facilities and Technology",
  },
  {
    icon: Handshake,
    text: "Safe and Supportive Environment",
  },
];

const slides = ref([
  {
    image: new URL("@/assets/images/avatar/user-14.png", import.meta.url).href,
    title: "A Truly Transformation Experience",
    text: "“ Attending this school has been a life-changing journey. The supportive teachers and enriching curriculum have helped me discover my passions and excel in ways I never imagined. ”",
  },
  {
    image: new URL("@/assets/images/avatar/user-15.png", import.meta.url).href,
    title: "A Nurturing Environment",
    text: "“ From the moment I joined, I felt welcomed and valued. The sense of community here is incredible, and the opportunities for growth are endless. ”",
  },
  {
    image: new URL("@/assets/images/avatar/user-17.png", import.meta.url).href,
    title: "Exceptional Learning and Growth",
    text: "“ The challenging academic programs, combined with the amazing extracurricular activities, have allowed me to grow both intellectually and personally. This school truly prepares you for the future. ”",
  },
  {
    image: new URL("@/assets/images/avatar/user-11.png", import.meta.url).href,
    title: "Incredible Support and Guidance",
    text: "“ The dedication of the teachers is unmatched. They go above and beyond to ensure every student succeeds, providing constant support and guidance. ”",
  },
]);

const instructors = ref([
  {
    image: new URL("@/assets/images/school/landing/img-06.png", import.meta.url)
      .href,
    name: "John B. Gilliam",
    position: "Senior Instructor",
  },
  {
    image: new URL("@/assets/images/school/landing/img-07.png", import.meta.url)
      .href,
    name: "Patricia J. Dillon",
    position: "Junior Instructor",
  },
  {
    image: new URL("@/assets/images/school/landing/img-08.png", import.meta.url)
      .href,
    name: "Marian J. Martin",
    position: "Senior Instructor",
  },
  {
    image: new URL("@/assets/images/school/landing/img-09.png", import.meta.url)
      .href,
    name: "Theresa W. Berry",
    position: "Senior Instructor",
  },
  {
    image: new URL("@/assets/images/school/landing/img-10.png", import.meta.url)
      .href,
    name: "Jacklyn A. Keith",
    position: "Junior Instructor",
  },
]);

const blogs = ref([
  {
    image: new URL("@/assets/images/school/blog/img-01.jpg", import.meta.url)
      .href,
    date: "28 May, 2024",
    title: "3 Lessons Learned From X",
    excerpt:
      "He boosted the self-esteem of Black Americans due to his advocacy for black empowerment and self-determination.",
  },
  {
    image: new URL("@/assets/images/school/blog/img-02.jpg", import.meta.url)
      .href,
    date: "29 May, 2024",
    title: "Edu-tainment: Fun and Engaging Lessons",
    excerpt:
      "He boosted the self-esteem of Black Americans due to his advocacy for black empowerment and self-determination.",
  },
  {
    image: new URL("@/assets/images/school/blog/img-03.jpg", import.meta.url)
      .href,
    date: "22 May, 2024",
    title: "The Power of Education: Changing Lives",
    excerpt:
      "He boosted the self-esteem of Black Americans due to his advocacy for black empowerment and self-determination.",
  },
  {
    image: new URL("@/assets/images/school/blog/img-04.jpg", import.meta.url)
      .href,
    date: "20 May, 2024",
    title: "Teaching with Purpose: Inspiring Lessons",
    excerpt:
      "He boosted the self-esteem of Black Americans due to his advocacy for black empowerment and self-determination.",
  },
]);
export { images, counters, features, advantages, slides, instructors, blogs };

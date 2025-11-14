import userImage from "@/assets/images/avatar/user-17.png";
import { ref } from "vue";
export const userProfileDetails = ref({
  userId: "150001",
  name: "Sophia Mia",
  email: "support@example.com",
  phoneNumber: "+(151) 1555 333 222",
  img: userImage,
  designation: "UI / UX Designer",
  location: "Argentina",
  DOB: "1998-06-24",
  DOJ: "2025-05-26",
  language: "en",
  currency: "USD",
  objective: "",
  languages: ["English", "Mandarin", "French"],
  website: "www.domiex.com",
  twitter: "SRBThemes",
});

export const defaultState = {
  layoutStyle: "modern", // default, boxed, horizontal, modern, semibox
  layoutTheme: "light", // light, dark, black-white
  sidebarColor: "dark", // dark, light, brand, purple, sky
  layoutDir: "ltr", // rtl, ltr
  contentWidth: "default", // default, fluid
  sidebarSize: "default", // default, small, medium
  primaryColor: "default", // default, green, violet, orange, teal, fuchsia, lime, amber
  navigationType: "default", // default, floating, boxed, pattern
  darkModeColor: "default", //default, zinc, stone, neutral, gray
};

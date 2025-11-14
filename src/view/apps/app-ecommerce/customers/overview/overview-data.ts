import {
  Eye,
  FileText,
  List,
  Monitor,
  Sparkles,
  UserRound,
} from "lucide-vue-next";

interface Tab {
  name: string;
  label: string;
  icon: string | Function;
  link: string;
}

// List of tabs
const tabs: Tab[] = [
  {
    name: "overview",
    label: "Overview",
    icon: Eye,
    link: "pages-user",
  },
  {
    name: "activity",
    label: "Activity",
    icon: Sparkles,
    link: "pages-user-activity",
  },
  {
    name: "followers",
    label: "Followers",
    icon: UserRound,
    link: "pages-user-followers",
  },
  {
    name: "documents",
    label: "Documents",
    icon: FileText,
    link: "pages-user-documents",
  },
  {
    name: "notes",
    label: "Notes",
    icon: List,
    link: "pages-user-notes",
  },
  {
    name: "projects",
    label: "Projects",
    icon: Monitor,
    link: "pages-user-projects",
  },
];

export { tabs };

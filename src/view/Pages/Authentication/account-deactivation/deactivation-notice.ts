import { EyeOff, Trash2 } from "lucide-vue-next";
import { ref } from "vue";

const handleTemporaryDisable = (): void => {
  alert("Your account has been temporarily disabled.");
};

const handlePermanentDelete = (): void => {
  alert("Your account has been permanently deleted.");
};

const deactivateNotice = ref([
  {
    title: "Temporary Disable",
    description:
      "The customer is very important and will be followed up with care. Everyone's needs are expected to be met. It is not just about the process, but about benefiting everyone, with an emphasis on ecological mindfulness.",
    icon: EyeOff,
  },
  {
    title: "Permanent Delete",
    description:
      "The customer is very important and will receive dedicated attention. Everyone's needs and expectations are considered. This process is undertaken for the benefit of all, with a focus on ecological responsibility.",
    icon: Trash2,
  },
]);

export { handleTemporaryDisable, handlePermanentDelete, deactivateNotice };

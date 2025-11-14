import { ref } from "vue";

interface FormData {
  emailOrUsername: string;
  password: string;
}

interface Alert {
  isVisible: boolean;
  message: string;
  type: string;
}

const formData = ref<FormData>({
  emailOrUsername: "admin@example.com",
  password: "admin@123",
});

const allowedCredentials = ref<FormData>({
  emailOrUsername: "admin@example.com",
  password: "admin@123",
});

const alert = ref<Alert>({
  isVisible: false,
  message: "",
  type: "bg-red-100 text-red-500",
});

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const showAlert = (message: string, type: string) => {
  // alert.value.message = message;
  // alert.value.type = type;
  // alert.value.isVisible = true;
  alert.value = { isVisible: true, message, type };
};

const validateForm = () => {
  alert.value.isVisible = false;

  if (
    formData.value.emailOrUsername !==
      allowedCredentials.value.emailOrUsername ||
    formData.value.password !== allowedCredentials.value.password
  ) {
    showAlert("Invalid email or password", "bg-red-100 text-red-500");
    return;
  }
  showAlert(
    "You've successfully signed in to Domiex!",
    "bg-green-100 text-green-500"
  );

  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
};

const login = (role: string) => {
  if (role === "admin") {
    formData.value.emailOrUsername = "admin@example.com";
    formData.value.password = "admin@123";
  }
};
export {
  validateForm,
  showAlert,
  togglePasswordVisibility,
  formData,
  alert,
  showPassword,
  login,
};

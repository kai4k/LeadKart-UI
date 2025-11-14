import { reactive, ref } from "vue";
const errors = reactive<Record<string, string>>({});
const password = ref<string>("");
const confirmPassword = ref<string>("");
const validateForm = () => {
  errors.password = "";
  errors.confirmPassword = "";

  if (!password.value) {
    errors.password = "Password is required.";
  } else if (password.value.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  if (!confirmPassword.value) {
    errors.confirmPassword = "Confirm Password is required.";
  } else if (confirmPassword.value !== password.value) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!errors.password && !errors.confirmPassword) {
    submitForm();
  }
};

const submitForm = () => {
  const currentLocation = window.location.href;
  if (currentLocation.includes("auth-reset-password-basic")) {
    window.location.href = "auth-successful-password-basic";
  } else if (currentLocation.includes("auth-reset-password-modern")) {
    window.location.href = "auth-successful-password-modern";
  } else if (currentLocation.includes("auth-reset-password-creative")) {
    window.location.href = "auth-successful-password-creative";
  }
};
export { validateForm, confirmPassword, password, errors };

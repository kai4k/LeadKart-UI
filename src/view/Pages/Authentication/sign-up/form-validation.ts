import { reactive } from "vue";

interface Errors {
  [key: string]: string | null;
}
const errors = reactive<Errors>({});

interface Form {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}
const form = reactive<Form>({
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

const validateField = (field: keyof Form, errorMessage: string) => {
  if (!form[field]) {
    errors[field] = errorMessage;
  } else {
    errors[field] = null;
  }
};

const validateEmailField = () => {
  if (!form.email) {
    errors.email = "Email is required.";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(form.email)
  ) {
    errors.email = "Email is invalid.";
  } else {
    errors.email = null;
  }
};

const validateConfirmPasswordField = () => {
  if (!form.confirmPassword) {
    errors.confirmPassword = "Confirm password is required.";
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  } else {
    errors.confirmPassword = null;
  }
};

const validateForm = () => {
  validateField("firstName", "First name is required.");
  validateField("lastName", "Last name is required.");
  validateField("userName", "Username is required.");
  validateEmailField();
  validateField("password", "Password is required.");
  validateConfirmPasswordField();
  validateField("terms", "You must agree to the terms and conditions.");

  if (Object.values(errors).every((error) => error === null)) {
    alert("Form submitted successfully!");
    resetForm();
  }
};

const resetForm = () => {
  Object.assign(form, {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
};

export {
  validateField,
  validateEmailField,
  form,
  errors,
  resetForm,
  validateForm,
  validateConfirmPasswordField,
};

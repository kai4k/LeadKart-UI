import { ref } from "vue";

const otpLength = 6;
const otpInputs = ref<string[]>(Array(otpLength).fill(""));

// Handle input movement
const handleInput = (index: number) => {
  if (otpInputs.value[index] && index < otpLength - 1) {
    const nextInput = document.querySelectorAll("input")[
      index + 1
    ] as HTMLInputElement;
    nextInput?.focus();
  }
};

// Handle keyboard events
const handleKeyDown = (event: KeyboardEvent, index: number) => {
  if (
    !/^[0-9]$/.test(event.key) &&
    event.key !== "Backspace" &&
    event.key !== "Delete"
  ) {
    event.preventDefault();
  }

  if ((event.key === "Backspace" || event.key === "Delete") && index > 0) {
    otpInputs.value[index] = "";
    const prevInput = document.querySelectorAll("input")[
      index - 1
    ] as HTMLInputElement;
    prevInput?.focus();
  }
};

// Select input on focus
const handleFocus = (event: FocusEvent) => {
  (event.target as HTMLInputElement).select();
};

// Handle pasting of OTP
const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pastedData = event.clipboardData?.getData("text") ?? "";
  if (pastedData.length === otpLength && /^[0-9]+$/.test(pastedData)) {
    otpInputs.value = pastedData.split("");
  }
};

// Handle form submission
const submitOtp = () => {
  const otpCode = otpInputs.value.join("");
};

export {
  submitOtp,
  otpInputs,
  handleInput,
  handleKeyDown,
  handleFocus,
  handlePaste,
};

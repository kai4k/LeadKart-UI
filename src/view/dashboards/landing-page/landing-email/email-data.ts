interface FAQItem {
  question: string;
  answer: string;
  orderedList?: string[];
}

const faqs: FAQItem[] = [
  {
    question: "What are the features of email?",
    answer:
      "Emails are automatically date and time stamped. Signatures can be attached. Files, graphics, or sound can be sent as attachments.",
  },
  {
    question: "How do you use email features?",
    answer: "Change smart features & personalization settings.",
    orderedList: [
      "On your Android phone or tablet, open Gmail.",
      "Tap Menu. Settings. The account you want to change.",
      "Scroll to the 'General' section.",
    ],
  },
  {
    question: "What is the main use of email?",
    answer:
      "Email is a beneficial way to communicate with individuals or small groups. It enables users to easily send and receive documents, images, and links.",
  },
  {
    question: "How email really works?",
    answer:
      "The email client connects to the Outgoing SMTP server. The email client hands over the email in MIME format to the Outgoing SMTP server.",
  },
  {
    question: "What are emails used for?",
    answer:
      "Email is used for many purposes, including contacting friends, communicating with professors, and applying for jobs.",
  },
];

const plans = [
  {
    title: "Free",
    description: "Explore domiex mail together, for the",
    price: "$0",
    features: [
      { icon: "corner-down-right", text: "500 Emails" },
      { icon: "corner-down-right", text: "5 Automation Action" },
      { icon: "corner-down-right", text: "1 Products & Projects" },
      { icon: "x", text: "Custom Permissions" },
      { icon: "x", text: "Some Basic Integration" },
      { icon: "x", text: "Up to 5 Team Members" },
      { icon: "x", text: "24/7 Support" },
    ],
    link: "pages-pricing",
    button: "Get Start for free",
  },
  {
    title: "Professional",
    description: "For professionals & small teams",
    price: "$29.99",
    features: [
      { icon: "corner-down-right", text: "2000 Emails" },
      { icon: "corner-down-right", text: "20 Automation Action" },
      { icon: "corner-down-right", text: "1 Products & Projects" },
      { icon: "corner-down-right", text: "Custom Permissions" },
      { icon: "x", text: "Some Basic Integration" },
      { icon: "x", text: "Up to 5 Team Members" },
      { icon: "x", text: "24/7 Support" },
    ],
    isPopular: true,
    link: "pages-pricing",
    button: "Get Start",
  },
  {
    title: "Organization",
    description: "Ideal for fastest growing businesses",
    price: "Let's Chat",
    features: [
      { icon: "corner-down-right", text: "Unlimited Emails" },
      { icon: "corner-down-right", text: "Unlimited automation" },
      { icon: "corner-down-right", text: "1 Products & Projects" },
      { icon: "corner-down-right", text: "Access All Features" },
      { icon: "corner-down-right", text: "Flexible Contract" },
      { icon: "corner-down-right", text: "Advanced Integration" },
      { icon: "corner-down-right", text: "24/7 Support" },
    ],
    link: "pages-contact-us",
    button: "Contact Us",
  },
];

export { faqs, plans };

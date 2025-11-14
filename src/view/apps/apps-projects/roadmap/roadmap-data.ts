import { ref } from "vue";

interface Task {
  title: string;
  items: string[];
}

interface Phase {
  title: string;
  tasks: Task[];
}

// Define the phases with their associated tasks
const phases = ref<Phase[]>([
  {
    title: "Phase 1: Data Collection and Preparation (Month 1-2)",
    tasks: [
      {
        title: "Define Data Requirements:",
        items: [
          "Identify the specific data needed for the project, including customer demographics, transaction history, web interaction logs, marketing campaign data, and product catalog details.",
          "Collaborate with stakeholders to understand their data needs and ensure all relevant information is collected.",
        ],
      },
      {
        title: "Data Source Identification and Access:",
        items: [
          "Determine the internal and external data sources that will provide the required data.",
          "Ensure access to databases, data warehouses, and third-party data providers.",
          "Set up necessary data pipelines for continuous data flow if required.",
        ],
      },
      {
        title: "Data Extraction:",
        items: [
          "Extract data from identified sources using appropriate tools and techniques.",
          "Use SQL, APIs, web scraping, or ETL (Extract, Transform, Load) tools to gather the data.",
          "Ensure extraction processes are efficient and minimize disruptions to live systems.",
        ],
      },
      {
        title: "Data Cleaning:",
        items: [
          "Remove duplicates, correct errors, and handle missing values in the datasets.",
          "Standardize data formats and units to ensure consistency.",
          "Identify and resolve any discrepancies or anomalies in the data.",
        ],
      },
      {
        title: "Data Quality Assurance:",
        items: [
          "Conduct thorough quality checks to ensure the integrity and reliability of the data.",
          "Implement validation rules and perform audits to confirm data accuracy.",
          "Document the data cleaning and transformation processes for transparency and reproducibility.",
        ],
      },
      {
        title: "Data Privacy and Security:",
        items: [
          "Implement data encryption and access control mechanisms to protect sensitive information.",
          "Ensure compliance with relevant data protection regulations such as GDPR or CCPA.",
          "Anonymize or pseudonymize personal data where necessary to safeguard user privacy.",
        ],
      },
    ],
  },
  {
    title: "Phase 2: Model Development (Month 3-5)",
    tasks: [
      {
        title: "Define Problem Statements:",
        items: [
          "Clearly define the specific problems each model aims to solve (e.g., customer behavior prediction, sales forecasting, recommendation system).",
        ],
      },
      {
        title: "Select Appropriate Algorithms:",
        items: [
          "Research and select suitable machine learning algorithms for each problem statement.",
          "Consider a variety of models such as regression, classification, clustering, and recommendation algorithms.",
        ],
      },
      {
        title: "Design Model Architecture:",
        items: [
          "Design the architecture for each model, including input features, layers (for neural networks), and output formats.",
          "Document the rationale behind the chosen architectures.",
        ],
      },
      {
        title: "Prepare Training and Validation Datasets:",
        items: [
          "Split the preprocessed data into training, validation, and test sets.",
          "Ensure data splits maintain representative distributions and avoid data leakage.",
        ],
      },
      {
        title: "Develop Model Training Pipelines:",
        items: [
          "Implement training pipelines using selected machine learning frameworks (e.g., TensorFlow, PyTorch, Scikit-Learn).",
          "Automate data preprocessing steps within the training pipelines.",
        ],
      },
      {
        title: "Tools and Technologies:",
        items: [
          "Machine Learning Frameworks (e.g., TensorFlow, PyTorch, Scikit-Learn)",
          "Data Processing Tools (e.g., Pandas, NumPy)",
          "Model Training Infrastructure (e.g., GPUs, cloud computing resources)",
          "Version Control Systems (e.g., Git)",
        ],
      },
    ],
  },
  {
    title: "Phase 3: Integration and Deployment (Month 6-7)",
    tasks: [
      {
        title: "Integration Planning and Initial Setup",
        items: [
          "Develop Integration Plan",
          "Collaborate with Development Team",
          "Setup Development and Testing Environments",
          "API Development",
        ],
      },
      {
        title: "Model Integration and Testing",
        items: [
          "Integrate Models into the Platform",
          "Functional Testing",
          "User Interface Integration",
          "Security and Access Control",
        ],
      },
      {
        title: "Deployment in Staging Environment",
        items: [
          "Deploy Models in Staging",
          "Conduct Performance Testing",
          "User Acceptance Testing (UAT)",
          "Finalize Documentation",
        ],
      },
      {
        title: "Production Deployment and Monitoring",
        items: [
          "Final Review and Approval",
          "Production Deployment",
          "Monitoring and Maintenance Setup",
          "Post-Deployment Support",
          "Iterative Improvements",
        ],
      },
    ],
  },
  {
    title: "Phase 4: User Interface and Reporting (Month 8-9)",
    tasks: [
      {
        title: "Requirements Gathering and Design Planning",
        items: [
          "Stakeholder Interviews and Surveys",
          "Define UI/UX Requirements",
          "Design Mockups and Prototypes",
          "Review and Feedback",
        ],
      },
      {
        title: "User Interface Development",
        items: [
          "Front-End Development",
          "Integration with AI Models",
          "User Authentication and Access Control",
          "UI Testing",
        ],
      },
    ],
  },
]);
export { phases };

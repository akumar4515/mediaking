export const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "💻",
      priceRange: "$999 - $4999",
      shortDesc: "Build modern, responsive websites",
      features: [
        {
          name: "SEO Optimized",
          description: "Your website will be optimized for search engines to improve visibility and ranking.",
        },
        {
          name: "Mobile-First",
          description: "We design websites with a mobile-first approach to ensure a seamless experience on all devices.",
        },
        {
          name: "CMS Integration",
          description: "Easily manage your website content with integrated content management systems like WordPress.",
        },
      ],
      packages: [
        { name: "Basic", price: 999, features: ["5 Pages", "Contact Form", "Responsive Design"] },
        { name: "Pro", price: 1999, features: ["E-commerce", "SEO Setup", "Blog Integration"] },
      ],
      faqs: [
        { question: "Timeline?", answer: "2-4 weeks" },
        { question: "Support?", answer: "1 year included" },
      ],
    },
    {
      id: 2,
      title: "App Development",
      icon: "📱",
      priceRange: "$1999 - $9999",
      shortDesc: "Native & cross-platform mobile apps",
      features: [
        {
          name: "iOS & Android",
          description: "We develop apps for both iOS and Android platforms to reach a wider audience.",
        },
        {
          name: "API Integration",
          description: "Seamlessly integrate your app with third-party APIs for enhanced functionality.",
        },
        {
          name: "App Store Deployment",
          description: "We handle the entire process of deploying your app to the Apple App Store and Google Play Store.",
        },
      ],
      packages: [
        { name: "Startup", price: 1999, features: ["Basic Features", "1 Platform", "6 Months Support"] },
        { name: "Enterprise", price: 8999, features: ["Advanced Features", "Both Platforms", "2 Years Support"] },
      ],
      faqs: [
        { question: "Native vs Cross-Platform?", answer: "We do both!" },
        { question: "Maintenance?", answer: "Optional packages available" },
      ],
    },
    {
      id: 3,
      title: "Cloud Solutions",
      icon: "☁️",
      priceRange: "$499/month+",
      shortDesc: "Scalable cloud infrastructure",
      features: [
        {
          name: "AWS/Azure",
          description: "We provide cloud solutions using industry-leading platforms like AWS and Azure.",
        },
        {
          name: "DevOps",
          description: "Implement DevOps practices to streamline development and deployment processes.",
        },
        {
          name: "24/7 Monitoring",
          description: "Ensure your cloud infrastructure is always up and running with 24/7 monitoring.",
        },
      ],
      packages: [
        { name: "Basic", price: 499, features: ["Monthly Monitoring", "Basic Support"] },
        { name: "Full", price: 1499, features: ["Full Management", "Priority Support"] },
      ],
    },
  ];
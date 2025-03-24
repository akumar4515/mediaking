export const services = [
    {
        s_name: "web-development",
        title: "Web Development",
        icon: "💻",
        priceRange: "$999 - $4999",
        shortDesc: "Build modern, responsive websites",
        features: [
            { name: "SEO Optimized", description: "Your website will be optimized for search engines to improve visibility and ranking." },
            { name: "Mobile-First", description: "We design websites with a mobile-first approach to ensure a seamless experience on all devices." },
            { name: "CMS Integration", description: "Easily manage your website content with integrated CMS solutions like WordPress." },
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
        s_name: "app-development",
        title: "App Development",
        icon: "📱",
        priceRange: "$1999 - $9999",
        shortDesc: "Native & cross-platform mobile apps",
        features: [
            { name: "iOS & Android", description: "We develop apps for both iOS and Android platforms to reach a wider audience." },
            { name: "API Integration", description: "Seamlessly integrate your app with third-party APIs for enhanced functionality." },
            { name: "App Store Deployment", description: "We handle the entire process of deploying your app to the Apple App Store and Google Play Store." },
        ],
        packages: [
            { name: "Startup", price: 1999, features: ["Basic Features", "1 Platform", "6 Months Support"] },
            { name: "Enterprise", price: 8999, features: ["Advanced Features", "Both Platforms", "2 Years Support"] },
        ],
    },
    {
        s_name: "software-development",
        title: "Software Development",
        icon: "🖥️",
        priceRange: "$2999 - $14999",
        shortDesc: "Custom software solutions for businesses",
        features: [
            { name: "Custom Applications", description: "Tailored software solutions to fit your business needs." },
            { name: "Automation", description: "Automate processes and improve efficiency with custom software." },
            { name: "Integration", description: "Seamlessly integrate with your existing systems and third-party services." },
        ],
        packages: [
            { name: "Basic", price: 2999, features: ["Single Module", "Basic Support", "3-Month Maintenance"] },
            { name: "Enterprise", price: 9999, features: ["Full Suite", "Advanced Support", "1-Year Maintenance"] },
        ],
    },
    {
        s_name: "seo-optimization",
        title: "SEO Optimization",
        icon: "🔍",
        priceRange: "$499 - $4999",
        shortDesc: "Enhance your website's ranking and visibility",
        features: [
            { name: "Keyword Research", description: "Find high-ranking keywords for your niche to increase organic traffic." },
            { name: "On-Page SEO", description: "Optimize your website structure, content, and meta tags for better rankings." },
            { name: "Off-Page SEO", description: "Build quality backlinks and improve domain authority." },
        ],
        packages: [
            { name: "Starter", price: 499, features: ["Basic SEO Audit", "Keyword Research", "Meta Tag Optimization"] },
            { name: "Advanced", price: 2999, features: ["Full SEO Strategy", "Backlink Building", "Content Optimization"] },
        ],
    },
    {
        s_name: "social-media-marketing",
        title: "Social Media Marketing (SMM)",
        icon: "📱",
        priceRange: "$499 - $4999",
        shortDesc: "Boost your online presence with social media",
        features: [
            { name: "Platform Management", description: "Engage with your audience across Facebook, Instagram, LinkedIn, and more." },
            { name: "Ad Campaigns", description: "Target the right audience with strategic ad placements." },
            { name: "Content Strategy", description: "Create and post engaging content to grow your brand." },
        ],
        packages: [
            { name: "Basic", price: 499, features: ["1 Social Media Platform", "Content Scheduling", "Monthly Reports"] },
            { name: "Pro", price: 2999, features: ["Multi-Platform Management", "Paid Ads Strategy", "Bi-Weekly Analytics"] },
        ],
    },
    {
        s_name: "ppc-advertising",
        title: "Pay-Per-Click (PPC) Advertising",
        icon: "💰",
        priceRange: "$499 - $9999",
        shortDesc: "Maximize ROI with paid advertising",
        features: [
            { name: "Google Ads", description: "Run high-performing campaigns on Google Search and Display Networks." },
            { name: "Social Media Ads", description: "Launch targeted ads on Facebook, Instagram, and LinkedIn." },
            { name: "A/B Testing", description: "Optimize ad performance with split testing and audience targeting." },
        ],
        packages: [
            { name: "Starter", price: 499, features: ["Google Ads Setup", "Keyword Research", "Monthly Performance Report"] },
            { name: "Premium", price: 4999, features: ["Advanced PPC Strategy", "Multi-Channel Ads", "Weekly Optimization"] },
        ],
    },
    {
        s_name: "ecommerce-marketing",
        title: "E-commerce Marketplace Marketing",
        icon: "🛒",
        priceRange: "$999 - $9999",
        shortDesc: "Optimize your presence on Amazon, Flipkart, Shopify, and more",
        features: [
            { name: "Product Optimization", description: "Enhance listings with optimized titles, descriptions, and keywords." },
            { name: "Marketplace Ads", description: "Run ads on Amazon, Flipkart, and other platforms to increase sales." },
            { name: "Conversion Tracking", description: "Monitor sales and improve ad performance." },
        ],
        packages: [
            { name: "Starter", price: 999, features: ["Product Listing Optimization", "Basic Ads Management"] },
            { name: "Enterprise", price: 6999, features: ["Advanced Strategy", "Competitor Analysis", "Multi-Marketplace Support"] },
        ],
    },
    {
        s_name: "branding-reputation",
        title: "Branding & Reputation Management",
        icon: "🏆",
        priceRange: "$999 - $9999",
        shortDesc: "Build, manage, and protect your brand's reputation",
        features: [
            { name: "Brand Identity", description: "Develop logos, color schemes, and brand messaging." },
            { name: "Crisis Management", description: "Monitor and respond to negative reviews effectively." },
            { name: "Online PR", description: "Promote your brand through strategic public relations campaigns." },
        ],
        packages: [
            { name: "Basic", price: 999, features: ["Brand Analysis", "Social Media Monitoring"] },
            { name: "Elite", price: 7999, features: ["Reputation Repair", "Crisis Management", "Influencer Collaboration"] },
        ],
    },
    {
        s_name: "content-creation",
        title: "Content Creation",
        icon: "✍️",
        priceRange: "$299 - $1999",
        shortDesc: "Engaging content for websites and marketing",
        features: [
            { name: "SEO Content", description: "Optimized content to improve search engine rankings." },
            { name: "Social Media Content", description: "Create engaging posts and articles for your brand." },
            { name: "Copywriting", description: "Persuasive content to drive sales and engagement." },
        ],
        packages: [
            { name: "Starter", price: 299, features: ["5 Blog Posts", "Basic SEO", "Social Media Copy"] },
            { name: "Premium", price: 1499, features: ["20 Blog Posts", "Advanced SEO", "Email Campaigns"] },
        ],
    },
];
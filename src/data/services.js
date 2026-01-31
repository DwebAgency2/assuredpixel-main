import {
    Brush,
    Globe,
    Search,
    FileText,
    MessageCircle,
    Cloud,
} from "lucide-react";

export const services = [
    {
        id: 1,
        title: "Business Branding & Strategy",
        slug: "business-branding-strategy",
        description:
            "Your brand is more than a logo. It’s how people recognize, trust, and remember your business. We help startups and small businesses define a clear brand voice, visual identity, and positioning that reflects your value and connects with the right audience.",
        longDescription: "In today's crowded market, a strong brand is your most valuable asset. Our Business Branding & Strategy service goes beyond aesthetics to uncover the core identity of your business. We work closely with you to define your mission, vision, and values, translating them into a cohesive visual and verbal identity. From logo design and color palettes to tone of voice guidelines and market positioning, we ensure every touchpoint communicates your unique value proposition effectively. Whether you're launching a new startup or rebranding an established business, we build brands that resonate, inspire trust, and drive long-term loyalty.",
        icon: Brush,
        features: [
            "Logo & visual identity design",
            "Brand voice & messaging strategy",
            "Brand identity for startups",
            "Market positioning & analysis",
            "Brand style guides",
            "Rebranding consultation"
        ],
    },
    {
        id: 2,
        title: "Responsive Web Design Services",
        slug: "responsive-web-design",
        description:
            "Your website is your 24/7 salesperson. We design and develop conversion-focused, responsive websites that look great on any device. From fast-loading WordPress sites to custom builds, we ensure your site turns visitors into leads.",
        longDescription: "A website should be more than just a digital brochure; it should be a powerful engine for growth. Our Responsive Web Design service focuses on creating user-centric experiences that look stunning and perform flawlessly across all devices—desktops, tablets, and smartphones. We prioritize speed, accessibility, and conversion optimization, ensuring that visitors not only stay on your site but also take action. Whether you need a sleek brochure site, a robust e-commerce platform, or a custom web application, our designs are built to scale with your business and deliver measurable results.",
        icon: Globe,
        features: [
            "Custom responsive web design",
            "Fast-loading performance optimized",
            "Conversion-focused layouts (UI/UX)",
            "Mobile-first development",
            "WordPress & Custom React builds",
            "Accessibility compliance (WCAG)"
        ],
    },
    {
        id: 3,
        title: "Technical SEO & Audit Services",
        slug: "technical-seo-audit",
        description:
            "Stop guessing why you aren't ranking. Our comprehensive SEO services include technical audits, keyword optimization, and on-page strategy to help your small business rank higher on Google and attract organic traffic.",
        longDescription: "Search Engine Optimization (SEO) is the backbone of online visibility. Our Technical SEO & Audit services dig deep into the architecture of your website to identify and fix issues that are holding you back from ranking. We conduct comprehensive audits covering site speed, mobile usability, crawlability, and indexability. Beyond just fixing errors, we implement strategic on-page optimizations, including meta tag improvements, schema markup, and internal linking strategies. Our goal is to ensure search engines can fully understand and prioritize your content, driving sustainable organic traffic to your business.",
        icon: Search,
        features: [
            "Comprehensive technical SEO audits",
            "On-page keyword optimization",
            "Local SEO for small business",
            "Core Web Vitals optimization",
            "Schema markup implementation",
            "Competitor analysis & tracking"
        ],
    },
    {
        id: 4,
        title: "SEO Content Writing & Strategy",
        slug: "seo-content-writing",
        description:
            "Content that ranks and converts. We create clear, engaging content that explains your value and satisfies user intent. From website copy to SEO-optimized blog posts, we help you build authority in your niche.",
        longDescription: "Content is King, but only when it aligns with what your audience is searching for. Our SEO Content Writing & Strategy service bridges the gap between creativity and data. We start with in-depth keyword research to understand user intent, then craft compelling, high-quality content that answers questions and solves problems. From persuasive landing page copy to educational blog posts and whitepapers, every piece we write is optimized to rank well on Google while engaging human readers. We help you establish authority in your industry, build trust with your audience, and drive conversions through the power of words.",
        icon: FileText,
        features: [
            "Website copywriting that converts",
            "SEO-friendly blog content & articles",
            "Content strategy & editorial planning",
            "Keyword research & topic clustering",
            "Meta description & title tag writing",
            "Existing content optimization"
        ],
    },
    {
        id: 5,
        title: "Social Media Management",
        slug: "social-media-management",
        description:
            "Social media is about building real relationships, not just posting content. We manage your social presence by creating and sharing content that drives engagement, strengthens brand awareness, and supports your broader marketing goals.",
        longDescription: "In a connected world, your business needs to be where your customers are. Our Social Media Management service takes the stress out of maintaining an active online presence. We develop tailored strategies for platforms like Instagram, LinkedIn, Facebook, and X (Twitter) that align with your brand voice. We handle everything from content creation and graphic design to community management and scheduling. By consistently sharing valuable content and engaging with your followers, we help you build a loyal community, increase brand awareness, and drive traffic back to your website.",
        icon: MessageCircle,
        features: [
            "Custom content creation & graphics",
            "Multi-platform scheduling & posting",
            "Audience engagement & community management",
            "Performance tracking & analytics reporting",
            "Social media strategy development",
            "Paid social ad campaign management"
        ],
    },
    {
        id: 6,
        title: "Cloud Integration & DevOps",
        slug: "cloud-integration",
        description:
            "Modern businesses rely on connected, flexible systems. Our cloud integration services help streamline workflows, improve collaboration, and ensure your tools work seamlessly together, creating a scalable foundation for growth.",
        longDescription: "Efficiency is the key to scaling your business. Our Cloud Integration & DevOps services focus on connecting your disparate software tools and systems into a unified, automated ecosystem. We help you migrate to the cloud, set up secure infrastructure, and integrate apps like CRMs, marketing automation platforms, and analytics tools. Whether you need to streamline internal workflows, improve data security, or ensure high availability for your applications, our technical experts build the robust, scalable foundation your business needs to grow without technical debt.",
        icon: Cloud,
        features: [
            "App & software tool integration",
            "Secure cloud data migration",
            "Scalable cloud infrastructure setup",
            "Workflow automation & optimization",
            "DevOps best practices implementation",
            "API development & connection"
        ],
    },
];

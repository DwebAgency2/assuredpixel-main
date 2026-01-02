// Mock data for ElevateRank Digital agency website

export const mockData = {
  // Hero Section
  heroContent: {
    headline: "We Don't Just Drive Traffic — We Transform Businesses",
    subheadline:
      "AssuredPixel specializes in SEO ranking and website restructuring that helps USA businesses rank higher, convert better, and grow faster.",
    ctaText: "Book a Free SEO Audit",
    ctaSubtext: "Discover how we can boost your online presence",
  },

  // Services
  services: [
    {
      id: 1,
      title: "Business Branding",
      description:
        "Your brand is more than just a logo - the identity shapes how people see and connect with your business.In assuredPixed, we help you define a clear brand voice,visual identity, and strategy that reflect your value and resonate with your audience.",
      icon: "Brush",
      features: [
        "Logo & visual identity design",
        "Brand voice & messaging strategy",
        "Comprehensive brand guidelines",
      ],
    },
    {
      id: 2,
      title: "Website Creation",
      description:
        "Your website often gives customers the first impression of your brand. We design and develop visually engaging website that are easy to navigate and build to convert visitors into customers. Every site we create is responsive,fast and aligned with your business goals.",
      icon: "Globe",
      features: [
        "Custom responsive web design",
        "Fast-loading performance",
        "Conversion-focused layouts",
      ],
    },
    {
      id: 3,
      title: "Search Engine Optimization(SEO)",
      description:
        "Getting found online starts with your website itself. Our on-page SEO strategy focus on the elements you can control, such as keywords, headings, metadata, and site structure. By aligning these pieces with what your audience is searching for, we help your business rank higher and attract qualified visitors,and build lasting visibility without relying on outside factor.",
      icon: "Search",
      features: [
        "On-page keyword optimization",
        "Technical site audit",
        "Improved site structure & metadata",
      ],
    },
    {
      id: 4,
      title: "Content Writing",
      description:
        "Strong content is the foundation of effective digital marketing. We create clear, engaging,and purposeful content authority,and connects with your audience. From blogs to web copy, Our writing is designed to inform,inspire and convert.",
      icon: "FileText",
      features: [
        "UX/UI redesign",
        "Conversion optimization",
        "Site architecture",
        "Performance enhancement",
      ],
    },
    {
      id: 5,
      title: "Social Media Management",
      description:
        "Social platforms are powerful tools for building relationships with your audience. We manage your social presence by creating and sharing content that sparks engagement,strengthens your brand and drives measurable results. Our approach ensures your voice is consistent and community grows.",
      icon: "MessageCircle",
      features: [
        "Content creation & scheduling",
        "Community engagement & growth",
        "Performance tracking & reporting",
      ],
    },
    {
      id: 6,
      title: "Cloud Integration",
      description:
        "Modern businesses need systems that are connected,flexible and efficient. Our cloud integration services help streamline your collaboration,and ensure your digital tools work seamlessly. This creates a scalable foundation for growth and innovation",
      icon: "Cloud",
      features: [
        "Seamless app & tool integration",
        "Secure data migration",
        "Scalable cloud architecture",
      ],
    },
  ],

  // Case Studies
  caseStudies: [
    {
      id: 1,
      clientName: "Local Home Services Co.",
      industry: "Home Services",
      challenge: "Low local visibility and poor mobile experience",
      solution: "Complete website restructure + local SEO optimization",
      results: {
        organicTraffic: "+187%",
        keywordRankings: "+45 first-page keywords",
        leadGeneration: "+234%",
        timeframe: "6 months",
      },
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      clientName: "E-commerce Fashion Brand",
      industry: "E-commerce",
      challenge: "Poor search rankings and low conversion rates",
      solution: "Technical SEO + conversion-focused redesign",
      results: {
        organicTraffic: "+156%",
        keywordRankings: "+62 first-page keywords",
        leadGeneration: "+189%",
        timeframe: "4 months",
      },
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      clientName: "Professional Services Firm",
      industry: "Professional Services",
      challenge: "Limited online presence and outdated website",
      solution: "Complete digital transformation + SEO strategy",
      results: {
        organicTraffic: "+298%",
        keywordRankings: "+73 first-page keywords",
        leadGeneration: "+267%",
        timeframe: "8 months",
      },
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      company: "Mitchell's Home Solutions",
      role: "Business Owner",
      content:
        "AssuredPixel completely transformed our online presence. We went from invisible to dominating local search results. Our leads increased by over 200% in just 6 months!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "David Chen",
      company: "Chen Consulting Group",
      role: "Managing Director",
      content:
        "The team at AssuredPixel doesn't just talk about results - they deliver them. Our website now ranks on the first page for our most important keywords, and our conversion rate has doubled.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Jennifer Rodriguez",
      company: "Rodriguez Legal Services",
      role: "Attorney & Founder",
      content:
        "Professional, results-driven, and transparent. AssuredPixel helped us restructure our entire digital strategy. We're now getting qualified leads every single day through organic search.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    },
  ],

  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "10 SEO Mistakes That Are Killing Your Rankings in 2024",
      excerpt:
        "Discover the most common SEO mistakes businesses make and learn how to fix them to improve your search rankings dramatically.",
      author: "ElevateRank Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "SEO Tips",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "How Website Speed Affects Your SEO Rankings",
      excerpt:
        "Learn why site speed is crucial for SEO success and discover actionable strategies to make your website lightning-fast.",
      author: "ElevateRank Team",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Technical SEO",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Local SEO Strategies for Small Businesses",
      excerpt:
        "Master local SEO with proven strategies that help small businesses dominate their local market and attract more customers.",
      author: "ProRank Team",
      date: "2025-08-25",
      readTime: "12 min read",
      category: "Local SEO",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
  ],

  // Company Info
  companyInfo: {
    name: "Assuredpixel",
    tagline: "Transform Your Online Presence",
    description:
      "We specialize in SEO ranking and website restructuring services for USA-based businesses, helping them rank higher, convert better, and grow faster.",
    founded: "2020",
    clientsServed: "150+",
    averageGrowth: "180%",
  },

  // Contact Info
  contactInfo: {
    email: "hello@prorankrankdigital.com",
    phone: "+1 (555) 123-4567",
    address: "123 Digital Avenue, Austin, TX 78701",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM CST",
  },

  teamMembers: [
    {
      id: 1,
      name: "Alice Johnson",
      role: "SEO Specialist",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Digital Strategist",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      name: "Carol Lee",
      role: "Content Manager",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
    },
  ],
};

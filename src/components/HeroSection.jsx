
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

// Mock data for demo
const mockData = {
  heroContent: {
    headline: "Grow Your Business with Strategy-Led Digital Marketing",
    subheadline:
      "We help small businesses and startups in the USA attract the right audience, improve conversions, and scale with SEO, web design, and data-driven marketing strategy.",
    ctaText: "Get Your Free SEO Audit",
    ctaSubtext: "✨ No pressure • Clear next steps • Practical recommendations",
  },
};

export const HeroSection = () => {
  const { heroContent } = mockData;

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "SEO, paid ads, and content that drive real leads",
    "High-converting websites and funnels",
    "Clear reporting, measurable growth, no guesswork",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.4))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Content - Left Side */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mx-auto lg:mx-0"
              >
                🚀 Growth Partner for Modern Businesses
              </motion.div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                {heroContent.headline}
              </h1>

              <p
                className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
              >
                {heroContent.subheadline}
              </p>
            </div>

            {/* Features List */}
            <motion.div className="space-y-3 inline-block lg:block text-left" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                {heroContent.ctaText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#case-studies")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-teal-600 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                See How We Drive Results
              </Button>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-sm text-slate-500 dark:text-slate-400"
            >
              {heroContent.ctaSubtext}
            </motion.p>
          </motion.div>

          {/* Visual Element - Right Side */}
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.5,
                    },
                  },
                }}
              >
                {[
                  {
                    value: "150+",
                    label: "Clients Served",
                    color: "text-teal-600 dark:text-teal-400",
                  },
                  {
                    value: "180%",
                    label: "Avg Growth",
                    color: "text-slate-800 dark:text-white",
                  },
                  {
                    value: "98%",
                    label: "Success Rate",
                    color: "text-emerald-600 dark:text-emerald-400",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5 },
                      },
                    }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mock Dashboard */}
              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8,
                    },
                  },
                }}
              >
                {[
                  {
                    label: "Organic Traffic",
                    value: "+187%",
                    color: "text-emerald-600 dark:text-emerald-400",
                  },
                  {
                    label: "Keyword Rankings",
                    value: "+45 Page 1",
                    color: "text-teal-600 dark:text-teal-400",
                  },
                  {
                    label: "Lead Generation",
                    value: "+234%",
                    color: "text-emerald-600 dark:text-emerald-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                    <span className={`text-sm font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={floatingAnimation}
              className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-teal-600 dark:bg-teal-500 rounded-full"></div>
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

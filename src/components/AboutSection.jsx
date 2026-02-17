
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Target, Users, Award } from "lucide-react";

// Mock data for demo
const mockData = {
  companyInfo: {
    description:
      "AssuredPixel transforms underperforming websites into high-converting digital assets, giving USA businesses a competitive advantage through exclusive lead generation and search dominance.",
    founded: "2020",
    clientsServed: "150+",
  },
};

export const AboutSection = () => {
  const { companyInfo } = mockData;
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We prioritize measurable outcomes that directly drive your business growth and ROI.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our mission. We build long-term partnerships based on transparency and trust.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Years of experience helping USA businesses increase visibility, traffic, and revenue online.",
    },
  ];

  const achievements = [
    "150+ successful digital campaigns",
    "180% average ROI growth",
    "98% client retention rate",
    "4+ years of proven results",
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };


  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Left Side */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4"
              >
                About Assuredpixel
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              >
                Your Competitive Advantage
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
              >
                {companyInfo.description}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                Founded in {companyInfo.founded}, we've helped over{" "}
                {companyInfo.clientsServed} businesses dominate their local
                markets through integrated branding, conversion-focused design, and
                results-driven SEO. On average, our clients experience{" "}
                {companyInfo.averageGrowth} and online visibility.
              </motion.p>
            </div>

            {/* Achievements */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Why Choose Us?
              </h3>
              <motion.div
                className="grid grid-cols-1 gap-3"
                variants={staggerContainer}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    variants={fadeInLeft}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div className="pt-4" variants={fadeInUp}>
              <motion.button
                onClick={() => navigate("/#book-call")}
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us Today
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Values Cards - Right Side */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-slate-900 dark:text-white text-center lg:text-left"
            >
              Our Core Values
            </motion.h3>

            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInRight}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-600 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center group-hover:bg-teal-600 dark:group-hover:bg-teal-500 transition-colors duration-300 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-900 dark:group-hover:text-teal-300 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

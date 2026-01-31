
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Brush,
  Globe,
  Search,
  FileText,
  MessageCircle,
  Cloud,
  CheckCircle,
} from "lucide-react";

const iconMap = {
  Brush,
  Globe,
  Search,
  FileText,
  MessageCircle,
  Cloud,
};

import { Link } from "react-router-dom";
import { services } from "../data/services";

export const ServicesSection = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={headerVariants}
            className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Full-Spectrum Digital Marketing Solutions
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            At AssuredPixel, we deliver more than just SEO — we offer a complete
            suite of digital marketing services.Every service is designed to
            increase visibility, attract qualified leads, and turn visitors into
            loyal customers.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Link to={`/services/${service.slug}`} className="block h-full">
                  <Card className="relative group h-full hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-600 bg-white dark:bg-slate-900">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                          className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center group-hover:bg-teal-600 dark:group-hover:bg-teal-500 transition-colors duration-300"
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          <IconComponent className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                        <motion.div
                          className="w-8 h-1 bg-teal-600 dark:bg-teal-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: 32 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>

                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-900 dark:group-hover:text-teal-300 transition-colors duration-300">
                        {service.title}
                      </CardTitle>

                      <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <motion.ul
                        className="space-y-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.08,
                              delayChildren: 0.2,
                            },
                          },
                        }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  duration: 0.4,
                                },
                              },
                            }}
                            whileHover={{
                              x: 5,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </CardContent>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-lg opacity-0 group-hover:opacity-10 dark:group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-transparent dark:from-teal-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0, rotate: 45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={ctaVariants}
        >
          <motion.div
            className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-slate-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Online Presence?
            </motion.h3>

            <motion.p
              className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how our comprehensive SEO and website restructuring
              services can help your business rank higher and grow faster.
            </motion.p>

            <motion.button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get Your Free SEO Audit
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

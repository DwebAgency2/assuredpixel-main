import React from "react";
import { CheckCircle, Target, Users, Award } from "lucide-react";
import { mockData } from "../data/mock";

export const AboutSection = () => {
  const { companyInfo } = mockData;

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on measurable outcomes that directly impact your business growth and revenue.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We build long-term partnerships based on trust and transparency.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Years of experience helping USA businesses dominate their local and national markets.",
    },
  ];

  const achievements = [
    "150+ successful SEO campaigns",
    "180% average traffic growth",
    "98% client retention rate",
    "4+ years of proven results",
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                About Assuredpixel
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Your Partner in Digital Success
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in {companyInfo.founded}, we've helped over{" "}
                {companyInfo.clientsServed} businesses transform their online
                presence through strategic SEO optimization and comprehensive
                website restructuring. Our data-driven approach consistently
                delivers an average of {companyInfo.averageGrowth} growth in
                organic traffic and lead generation.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Partner With Us Today
              </button>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 text-center lg:text-left">
              Our Core Values
            </h3>

            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-teal-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Team Image Placeholder */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">

              <div className="w-full h-32 bg-gradient-to-r from-teal-100 via-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4">
                {/* Small round images in one card */}
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                  {mockData.teamMembers.map((member, index) => (
                    <img
                      key={index}
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-teal-200"
                    />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 text-sm">
                Meet our dedicated team of SEO experts and digital strategists
                committed to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const posts = [
  {
    title: "Understanding TDS Levels: What Your Water Quality Numbers Mean",
    excerpt: "Total Dissolved Solids (TDS) is one of the most important indicators of water quality. Learn what TDS levels mean for your health and how treatment systems reduce them effectively.",
    category: "Water Science",
    readTime: "5 min",
    date: "Dec 2024",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/dfabb3168_generated_42ba559b.png"
  },
  {
    title: "RO vs UV: Choosing the Right Purification Technology for Abu Dhabi",
    excerpt: "Both Reverse Osmosis and UV purification have their strengths. We break down which technology suits your specific water conditions in the UAE.",
    category: "Technology",
    readTime: "7 min",
    date: "Nov 2024",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/9f33754b7_generated_1ad6ca38.png"
  },
  {
    title: "Why Commercial Buildings in UAE Need Water Softening Systems",
    excerpt: "Hard water in Abu Dhabi causes significant damage to plumbing, HVAC, and appliances. Discover how softening systems save thousands in maintenance costs.",
    category: "Commercial",
    readTime: "4 min",
    date: "Oct 2024",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/abb4a7452_generated_a6c7be56.png"
  },
  {
    title: "Water Treatment Compliance: UAE Regulations You Need to Know",
    excerpt: "A comprehensive guide to Abu Dhabi Municipality water quality standards and how your facility can achieve and maintain compliance.",
    category: "Compliance",
    readTime: "8 min",
    date: "Sep 2024",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/8ef054555_generated_95eb3e53.png"
  },
  {
    title: "The Hidden Cost of Ignoring Water Quality in Hotels",
    excerpt: "From guest complaints to equipment failures, poor water quality impacts your hospitality business in ways you might not expect.",
    category: "Hospitality",
    readTime: "6 min",
    date: "Aug 2024",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/82fe96be2_generated_748e4d9f.png"
  },
  {
    title: "Sustainable Water Management: Reducing Waste in Industrial Operations",
    excerpt: "How modern water recycling and treatment technologies help manufacturing facilities cut water consumption by up to 70%.",
    category: "Sustainability",
    readTime: "5 min",
    date: "Jul 2024",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/2e1ce8eda_generated_1c08cf17.png"
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">Blog & Resources</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Insights & Expertise
            </h1>
            <p className="text-lg font-body text-white/60 leading-relaxed">
              Stay informed with the latest in water treatment technology, UAE regulations, and industry best practices from our engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="rounded-2xl shadow-xl shadow-blue-500/10 w-full object-cover aspect-[4/3]"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-xs font-body text-[#0A192F]/50">
                <span className="px-3 py-1 rounded-full bg-[#0077FF]/10 text-[#0077FF] font-semibold">{posts[0].category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                <span>{posts[0].date}</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">{posts[0].title}</h2>
              <p className="text-base font-body text-[#0A192F]/60 leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div>
                <span className="inline-flex items-center gap-2 text-[#0077FF] font-body font-semibold text-sm cursor-pointer hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs font-body text-[#0A192F]/50">
                  <span className="px-2 py-0.5 rounded-full bg-[#0077FF]/10 text-[#0077FF] font-semibold">{post.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-[#0A192F] mb-2 group-hover:text-[#0077FF] transition-colors">{post.title}</h3>
                <p className="text-sm font-body text-[#0A192F]/50 leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
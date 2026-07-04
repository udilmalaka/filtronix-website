import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-display font-bold text-[#0077FF]">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-body text-white/50 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

const stats = [
  { end: 2500, suffix: "+", label: "Projects Completed" },
  { end: 15, suffix: "+", label: "Years Experience" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
  { end: 500, suffix: "M+", label: "Liters Purified" },
];

export default function StatsCounter() {
  return (
    <section className="bg-[#0A192F] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0077FF]/5 via-transparent to-[#0077FF]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
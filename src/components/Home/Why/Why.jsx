import { motion } from "framer-motion";
import { Leaf, Droplets, Sprout, Recycle } from "lucide-react";

const features = [
  {
    icon: <Leaf size={40} />,
    title: "100% Organic & Natural",
    desc: "Made from earthworms and organic waste, completely chemical-free and safe for crops.",
  },
  {
    icon: <Sprout size={40} />,
    title: "Improves Soil Fertility",
    desc: "Enhances soil structure, increases microbial activity, and boosts plant growth naturally.",
  },
  {
    icon: <Droplets size={40} />,
    title: "Better Water Retention",
    desc: "Helps soil retain moisture, reducing water usage and improving drought resistance.",
  },
  {
    icon: <Recycle size={40} />,
    title: "Eco-Friendly Farming",
    desc: "Recycles organic waste into nutrient-rich khaad, protecting nature and soil health.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyVermicompost = () => {
  return (
    <section
      className="py-16 bg-white/5"
      aria-label="Why choose vermicompost"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Why Choose Vermicompost?
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            A natural solution for healthy soil, stronger crops, and sustainable farming.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyVermicompost;

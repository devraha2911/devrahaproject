import { motion } from "framer-motion";

const benefits = [
  {
    title: "Improves Soil Fertility",
    description:
      "Vermicompost enriches the soil with essential nutrients and beneficial microorganisms, improving long-term soil health."
  },
  {
    title: "Increases Crop Yield",
    description:
      "Regular use enhances root development and nutrient absorption, resulting in healthier plants and higher yields."
  },
  {
    title: "100% Organic & Chemical-Free",
    description:
      "Safe for crops, farmers, and consumers, vermicompost contains no harmful chemicals or synthetic additives."
  },
  {
    title: "Enhances Water Retention",
    description:
      "Improves soil structure and moisture-holding capacity, reducing irrigation needs and water wastage."
  },
  {
    title: "Eco-Friendly Farming",
    description:
      "Recycles organic waste naturally and reduces dependency on chemical fertilizers, protecting the environment."
  },
  {
    title: "Suitable for All Crops",
    description:
      "Ideal for vegetables, fruits, grains, flowers, and plantations across all soil types and seasons."
  }
];

const Benefits = () => {
  return (
    <section
      className="py-20 bg-white overflow-hidden"
      aria-label="Benefits of vermicompost for organic farming"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Benefits of Vermicompost
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Discover how vermicompost helps farmers grow healthier crops while protecting the soil and environment.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-green-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold shadow mb-6">
                🌱
              </div>

              <h3 className="text-xl font-semibold text-green-800">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-green-800 font-medium text-base md:text-lg">
            🌾 Healthy soil is the foundation of sustainable farming — vermicompost makes it possible naturally.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;

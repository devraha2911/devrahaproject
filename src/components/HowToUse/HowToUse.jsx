import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Prepare the Soil",
    description:
      "Loosen the soil properly before applying vermicompost. Ensure the field or pot is free from chemical residues for best results."
  },
  {
    step: "02",
    title: "Apply Vermicompost",
    description:
      "Mix vermicompost evenly with the topsoil or spread it near the root zone of crops, plants, or trees."
  },
  {
    step: "03",
    title: "Water the Area",
    description:
      "Lightly water the soil after application to activate beneficial microorganisms and nutrients."
  },
  {
    step: "04",
    title: "Repeat as Needed",
    description:
      "Apply vermicompost every 20–30 days for sustained soil fertility and healthy crop growth."
  }
];

const HowToUse = () => {
  return (
    <section
      className="py-20 bg-green-50 overflow-hidden"
      aria-label="How to use vermicompost for crops and plants"
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
            How to Use Vermicompost
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Simple and effective steps to improve soil health and boost crop yield naturally.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-green-800">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 text-center max-w-2xl mx-auto"
        >
          <p className="text-green-800 font-medium text-base md:text-lg">
            🌱 Tip: Vermicompost works best when used regularly and combined with proper irrigation.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HowToUse;

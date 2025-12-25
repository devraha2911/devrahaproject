import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="py-20 bg-white overflow-hidden"
      aria-label="About VermiKhaad organic vermicompost"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            About VermiKhaad
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Building healthier soil and stronger crops through 100% natural
            vermicompost solutions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT – Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-green-100 rounded-3xl blur-2xl opacity-50"></div>
            <img
              src="/farmImage.jpg"
              alt="Organic farming using vermicompost for sustainable agriculture"
              className="relative w-full h-auto rounded-3xl shadow-xl object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT – Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-gray-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-800">
              Nourishing Soil. Naturally.
            </h3>

            <p className="mt-5 leading-relaxed text-base md:text-lg">
              VermiKhaad is dedicated to promoting sustainable and eco-friendly
              farming practices. Our vermicompost is produced using natural
              decomposition processes driven by earthworms, transforming organic
              waste into nutrient-rich khaad.
            </p>

            <p className="mt-4 leading-relaxed text-base md:text-lg">
              By improving soil structure, increasing microbial activity, and
              enhancing nutrient availability, VermiKhaad helps farmers achieve
              better yields while preserving long-term soil health.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                100% organic & chemical-free production
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                Improves crop quality and soil fertility
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                Safe for farmers, consumers & environment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                Supports sustainable and natural farming
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

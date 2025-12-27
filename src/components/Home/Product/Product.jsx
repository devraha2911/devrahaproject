// import { motion } from "framer-motion";

// const OurProduct = () => {
//   return (
//     <section
//       className="py-20 bg-green-50"
//       aria-label="Our vermicompost product showcase"
//     >
//         <h2 className="text-center text-[3rem] mb-10 text-green-800 font-medium">Our Product</h2>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT SIDE – Product Visual */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative flex items-center justify-center"
//           >
//             {/* Background Leaf + Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-100 rounded-3xl shadow-inner">
//               <img
//                 src="https://www.transparenttextures.com/patterns/leaves.png"
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover opacity-10"
//                 aria-hidden="true"
//               />
//             </div>

//             {/* Product Card */}
//             <div className="relative bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center w-full max-w-md lg:max-w-full">
              
//               {/* Logo */}
//               <div className="text-4xl font-extrabold text-green-700 mb-6">
//                 🌱 VermiKhaad
//               </div>

//               {/* Product Image */}
//               <img
//                 src="public/farmaImage1.jpg"
//                 alt="Vermicompost organic fertilizer packaging"
//                 className="w-80 md:w-96 object-contain"
//                 loading="lazy"
//               />

//               {/* Tagline */}
//               <p className="mt-6 text-center text-green-800 font-semibold text-lg">
//                 100% Organic • Chemical-Free • Eco-Friendly
//               </p>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE – Description */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
//               Our Vermicompost Khaad
//             </h2>

//             <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
//               Our vermicompost is carefully produced using earthworms to convert
//               organic waste into nutrient-rich manure. It improves soil structure,
//               enhances microbial activity, and supports healthy crop growth naturally.
//             </p>

//             <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
//               This organic khaad is perfect for all types of crops, reduces
//               dependency on chemical fertilizers, and ensures long-term soil fertility.
//             </p>

//             {/* Highlights */}
//             <ul className="mt-6 space-y-3 text-gray-700">
//               <li>✔ Improves soil health naturally</li>
//               <li>✔ Safe for crops, soil, and environment</li>
//               <li>✔ Suitable for all seasons</li>
//               <li>✔ Ideal for sustainable farming</li>
//             </ul>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProduct;


import { motion } from "framer-motion";

const OurProduct = () => {
  return (
    <section
      className="py-20 bg-green-50 overflow-hidden"
      aria-label="Our vermicompost product showcase"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-[3rem] mb-10 text-green-800 font-medium">
        Our Product
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE – Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center overflow-hidden"
          >
            {/* Background Leaf + Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-100 rounded-3xl shadow-inner overflow-hidden">
              <img
                src="https://www.transparenttextures.com/patterns/leaves.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                aria-hidden="true"
              />
            </div>

            {/* Product Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col items-center justify-center w-full max-w-md lg:max-w-full">
              
              {/* Logo */}
              <div className="text-xl sm:text-4xl font-extrabold text-green-700 mb-6">
                <p className=" text-green-600">DEVRAHA <span className="text-orange-600">Bio-Genesis</span></p>
              </div>

              {/* Product Image */}
              <img
                src="/image-1.png"
                alt="Vermicompost organic fertilizer packaging"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
                loading="lazy"
              />

              {/* Tagline */}
              <p className="mt-6 text-center text-green-800 font-semibold text-lg">
                100% Organic • Chemical-Free • Eco-Friendly
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE – Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
              Our Vermicompost Khaad
            </h2>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              Our vermicompost is carefully produced using earthworms to convert
              organic waste into nutrient-rich manure. It improves soil structure,
              enhances microbial activity, and supports healthy crop growth naturally.
            </p>

            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              This organic khaad is perfect for all types of crops, reduces
              dependency on chemical fertilizers, and ensures long-term soil fertility.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Improves soil health naturally</li>
              <li>✔ Safe for crops, soil, and environment</li>
              <li>✔ Suitable for all seasons</li>
              <li>✔ Ideal for sustainable farming</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>



  );
};

export default OurProduct;


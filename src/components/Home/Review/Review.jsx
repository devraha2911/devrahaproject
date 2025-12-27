// import { motion } from "framer-motion";

// const reviews = [
//   {
//     name: "Ramesh Patel",
//     role: "Organic Farmer",
//     review:
//       "This vermicompost has completely improved my soil quality. My crop yield increased naturally without chemicals.",
//     rating: 5,
//   },
//   {
//     name: "Sunita Verma",
//     role: "Home Gardener",
//     review:
//       "Very effective and easy to use. My plants look greener and healthier within weeks.",
//     rating: 4,
//   },
//   {
//     name: "Amit Singh",
//     role: "Agro Business Owner",
//     review:
//       "High-quality organic product. Packaging is clean and delivery was on time. Highly recommended!",
//     rating: 5,
//   },
// ];

// const Reviews = () => {
//   return (
//     <section
//       className="py-20 bg-green-50"
//       aria-label="Customer reviews and testimonials"
//     >
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
//             What Our Customers Say
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Trusted by farmers and gardeners who believe in sustainable and organic farming.
//           </p>
//         </motion.div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((item, index) => (
//             <motion.article
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
//             >
//               {/* Stars */}
//               <div className="flex mb-4">
//                 {Array.from({ length: item.rating }).map((_, i) => (
//                   <span key={i} className="text-green-600 text-lg">★</span>
//                 ))}
//               </div>

//               {/* Review Text */}
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 “{item.review}”
//               </p>

//               {/* User Info */}
//               <div className="border-t pt-4">
//                 <h3 className="font-semibold text-green-800">
//                   {item.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{item.role}</p>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;





// import { motion } from "framer-motion";

// const reviews = [
//   {
//     name: "Ramesh Patel",
//     role: "Organic Farmer",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: 5,
//     color: "from-green-100 to-green-50",
//     accent: "text-green-700",
//     review:
//       "This vermicompost has completely improved my soil quality. Crop yield increased naturally without chemicals.",
//   },
//   {
//     name: "Sunita Verma",
//     role: "Home Gardener",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 4.5,
//     color: "from-emerald-100 to-emerald-50",
//     accent: "text-emerald-700",
//     review:
//       "Very effective and easy to use. My plants look greener and healthier within weeks.",
//   },
//   {
//     name: "Amit Singh",
//     role: "Agro Business Owner",
//     image: "https://randomuser.me/api/portraits/men/65.jpg",
//     rating: 4.8,
//     color: "from-lime-100 to-lime-50",
//     accent: "text-lime-700",
//     review:
//       "Premium quality organic product. Packaging is clean and delivery was on time.",
//   },
// ];

// const Reviews = () => {
//   return (
//     <section className="py-20 bg-green-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
//             Customer Reviews
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Real feedback from farmers and gardeners who trust organic farming.
//           </p>
//         </motion.div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative rounded-2xl p-8 bg-gradient-to-br ${item.color} shadow-lg hover:shadow-2xl transition`}
//             >
//               {/* Profile Image */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
//               />

//               {/* Rating */}
//               <div className={`text-lg font-semibold ${item.accent} mb-2`}>
//                 ⭐ {item.rating} / 5
//               </div>

//               {/* Review Text */}
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 “{item.review}”
//               </p>

//               {/* User Info */}
//               <div className="border-t pt-4">
//                 <h3 className="font-semibold text-green-800">
//                   {item.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{item.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;


import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Patel",
    role: "Organic Farmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    color: "from-green-100 to-green-50",
    starColor: "text-green-600",
    review:
      "This vermicompost has completely improved my soil quality. Crop yield increased naturally without chemicals.",
  },
  {
    name: "Sunita Verma",
    role: "Home Gardener",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
    color: "from-emerald-100 to-emerald-50",
    starColor: "text-emerald-600",
    review:
      "Very effective and easy to use. My plants look greener and healthier within weeks.",
  },
  {
    name: "Amit Singh",
    role: "Agro Business Owner",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 4,
    color: "from-lime-100 to-lime-50",
    starColor: "text-lime-600",
    review:
      "Premium quality organic product. Packaging is clean and delivery was on time.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Customer Reviews
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by farmers and gardeners across the country.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => {
            const fullStars = Math.floor(item.rating);
            const hasHalfStar = item.rating % 1 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 bg-gradient-to-br ${item.color} shadow-lg hover:shadow-2xl transition`}
              >
                {/* Profile Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                />

                {/* Rating Section */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => {
                      if (i < fullStars) {
                        return (
                          <Star
                            key={i}
                            size={18}
                            className={`${item.starColor} fill-current`}
                          />
                        );
                      } else if (i === fullStars && hasHalfStar) {
                        return (
                          <Star
                            key={i}
                            size={18}
                            className={`${item.starColor} fill-current opacity-50`}
                          />
                        );
                      } else {
                        return (
                          <Star
                            key={i}
                            size={18}
                            className="text-gray-300"
                          />
                        );
                      }
                    })}
                  </div>

                  <span className={`font-semibold ${item.starColor}`}>
                    {item.rating} / 5
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  “{item.review}”
                </p>

                {/* User Info */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-green-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;


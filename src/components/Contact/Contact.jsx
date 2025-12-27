// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

// const Contact = () => {
//   return (
//     <section
//       className="py-20 bg-green-50 overflow-hidden"
//       aria-label="Contact VermiKhaad for organic vermicompost"
//     >
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
//             Get in Touch with Us
//           </h2>
//           <p className="mt-4 text-gray-700 text-base md:text-lg">
//             Have questions about vermicompost or sustainable farming? We’re here to help you.
//           </p>
//         </motion.div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

//           {/* LEFT – Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-green-800 mb-6">
//                 Contact Details
//               </h3>

//               {/* Email */}
//               <div className="flex items-start gap-4 mb-6">
//                 <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
//                   <Mail size={18} />
//                 </div>
//                 <div>
//                   <p className="font-medium text-green-800">Email</p>
//                   <a
//                     href="mailto:info@vermikhaad.com"
//                     className="text-gray-700 hover:text-green-600 transition"
//                   >
//                     info@vermikhaad.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-4 mb-6">
//                 <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
//                   <Phone size={18} />
//                 </div>
//                 <div>
//                   <p className="font-medium text-green-800">Phone</p>
//                   <a
//                     href="tel:+911234567890"
//                     className="text-gray-700 hover:text-green-600 transition"
//                   >
//                     +91 12345 67890
//                   </a>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
//                   <MapPin size={18} />
//                 </div>
//                 <div>
//                   <p className="font-medium text-green-800">Address</p>
//                   <p className="text-gray-700 leading-relaxed">
//                     VermiKhaad Organic Farms,<br />
//                     Village Greenfield,<br />
//                     District XYZ, State – 123456,<br />
//                     India
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="mt-10 flex gap-6">
//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/911234567890?text=Hello%20VermiKhaad"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition transform hover:scale-110"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.297-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.21-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01s-.521.075-.794.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.261.489 1.692.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
//                   <path d="M12.004 2c-5.514 0-9.998 4.486-9.998 10.002 0 1.759.46 3.396 1.263 4.795l-1.337 4.879 5.011-1.317c1.366.745 2.93 1.14 4.61 1.14 5.514 0 9.998-4.486 9.998-10.002S17.518 2 12.004 2z" />
//                 </svg>
//               </a>

//               {/* Facebook */}
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110"
//               >
//                 <Facebook size={22} />
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition transform hover:scale-110"
//               >
//                 <Instagram size={22} />
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT – Map */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="rounded-3xl overflow-hidden shadow-xl"
//           >
//             <iframe
//               title="VermiKhaad Location Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55921.63644873351!2d77.53066007161823!3d28.83581483213394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8aaeec09f0cf%3A0xb1471116544b1093!2sModinagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1766672030871!5m2!1sen!2sin"
//               className="w-full h-full min-h-[400px] border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  Leaf,
  Tractor,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      className="py-20 bg-green-50"
      aria-label="Contact VermiKhaad organic vermicompost"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Contact VermiKhaad
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Get reliable guidance for organic farming and vermicompost usage.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT – Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-8">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex gap-4 mb-6">
              <div className="w-11 h-11 bg-green-600 text-white rounded-full flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold text-green-800">Email</p>
                <a
                  href="mailto:info@vermikhaad.com"
                  className="text-gray-700 hover:text-green-600"
                >
                  sharmanishant08751@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-6">
              <div className="w-11 h-11 bg-green-600 text-white rounded-full flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-semibold text-green-800">Phone</p>
                <a
                  href="tel:+911234567890"
                  className="text-gray-700 hover:text-green-600"
                >
                  +91 9410677716
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 mb-6">
              <div className="w-11 h-11 bg-green-600 text-white rounded-full flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-semibold text-green-800">Address</p>
                <p className="text-gray-700 leading-relaxed">
                  VermiKhaad Organic Farms,<br />
                  Village Greenfield,<br />
                  District XYZ, India – 123456
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4">
              <div className="w-11 h-11 bg-green-600 text-white rounded-full flex items-center justify-center">
                <Clock size={18} />
              </div>
              <div>
                <p className="font-semibold text-green-800">Working Hours</p>
                <p className="text-gray-700">
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – Quick Actions + Trust */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

              <a
                href="tel:+911234567890"
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition"
              >
                <Phone className="mx-auto text-green-600 mb-3" />
                <p className="font-semibold text-green-800">Call Now</p>
              </a>

              <a
                href="https://wa.me/911234567890?text=Hello%20VermiKhaad"
                target="_blank"
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition"
              >
                <i className="fa-brands fa-whatsapp text-[1.5em] text-green-500"></i>
                <p className="font-semibold text-green-800 mt-2">
                  WhatsApp Chat
                </p>
              </a>

              <a
                href="mailto:info@vermikhaad.com"
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition"
              >
                <Mail className="mx-auto text-green-600 mb-3" />
                <p className="font-semibold text-green-800">Email Us</p>
              </a>
            </div>

            {/* Why Contact Us */}
            <div className="bg-green-100 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Why Contact VermiKhaad?
              </h4>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <Leaf className="text-green-600" />
                  Expert guidance for organic farming
                </li>
                <li className="flex gap-3">
                  <Tractor className="text-green-600" />
                  Suitable for all crop types
                </li>
                <li className="flex gap-3">
                  🌱
                  Trusted by local farmers
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-5 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="w-11 h-11 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;



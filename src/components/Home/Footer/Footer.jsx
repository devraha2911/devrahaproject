import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How to Use", path: "/how-to-use" },
    { name: "Benefits", path: "/benefits" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.footer
      className="bg-green-50 text-green-900 py-16 overflow-hidden"
      aria-label="Footer section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 items-start">

        {/* LEFT - Logo + Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 w-full md:w-1/3"
        >
          <div className="text-3xl font-extrabold text-green-700 flex items-center gap-2">
            🌱 VermiKhaad
          </div>
          <p className="text-green-800 text-sm md:text-base">
            Empowering sustainable farming with natural vermicompost for healthy crops and soil.
          </p>
        </motion.div>

        {/* CENTER - Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-label="Footer navigation"
          className="flex flex-col items-start gap-2 w-full md:w-1/3"
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-green-900 hover:text-green-600 transition-colors break-words"
            >
              {link.name}
            </NavLink>
          ))}
        </motion.nav>

        {/* RIGHT - Contact + Social */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-4 w-full md:w-1/3"
        >
          <h3 className="text-lg font-semibold">Contact Us</h3>
          
          {/* Email */}
          <div className="flex items-center gap-2 text-green-900 break-words">
            <Mail size={18} />
            <a
              href="mailto:info@vermikhaad.com"
              className="hover:text-green-600 transition-colors"
            >
              info@vermikhaad.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-green-900 break-words">
            <Phone size={18} />
            <a
              href="tel:+911234567890"
              className="hover:text-green-600 transition-colors"
            >
              +91 12345 67890
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-transform transform hover:scale-110 text-blue-400"
            >
              <Facebook size={24} />
            </a>

            <a
              href="https://wa.me/9410677716?text=Hello%20VermiKhaad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-600 transition-transform transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.297-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.21-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01s-.521.075-.794.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.261.489 1.692.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.004 2c-5.514 0-9.998 4.486-9.998 10.002 0 1.759.46 3.396 1.263 4.795l-1.337 4.879 5.011-1.317c1.366.745 2.93 1.14 4.61 1.14 5.514 0 9.998-4.486 9.998-10.002s-4.484-9.997-9.997-9.997z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-600 transition-transform transform hover:scale-110 text-red-400"
            >
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-green-200 pt-6 text-center text-green-700 text-sm md:text-base break-words">
        © {new Date().getFullYear()} VermiKhaad. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;











// import { Facebook, Instagram, Phone, Mail } from "lucide-react";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "How to Use", path: "/how-to-use" },
//     { name: "Benefits", path: "/benefits" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <motion.footer
//       className="bg-white text-green-900 py-16"
//       aria-label="Footer section"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

//         {/* LEFT - Logo + Tagline */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col gap-4"
//         >
//           <div className="text-3xl font-extrabold text-green-700 flex items-center gap-2">
//             🌱 VermiKhaad
//           </div>
//           <p className="text-green-800 text-sm md:text-base">
//             Empowering sustainable farming with natural vermicompost for healthy crops and soil.
//           </p>
//         </motion.div>

//         {/* CENTER - Navigation Links */}
//         <motion.nav
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           aria-label="Footer navigation"
//           className="flex flex-col items-center md:items-start gap-2"
//         >
//           <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//           {links.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className="text-green-900 hover:text-green-600 transition-colors"
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </motion.nav>

//         {/* RIGHT - Contact + Social */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex flex-col gap-4"
//         >
//           <h3 className="text-lg font-semibold">Contact Us</h3>
          
//           {/* Email */}
//           <div className="flex items-center gap-2 text-green-900">
//             <Mail size={18} />
//             <a
//               href="mailto:info@vermikhaad.com"
//               className="hover:text-green-600 transition-colors"
//             >
//               info@vermikhaad.com
//             </a>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-2 text-green-900">
//             <Phone size={18} />
//             <a
//               href="tel:+911234567890"
//               className="hover:text-green-600 transition-colors"
//             >
//               +91 12345 67890
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 mt-2">
//             <a
//               href="https://facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="hover:text-blue-600 transition-transform transform hover:scale-110 text-blue-400"
//             >
//               <Facebook size={24} />
//             </a>

//             <a
//               href="https://wa.me/9410677716?text=Hello%20VermiKhaad"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="WhatsApp"
//               className="hover:text-green-600 transition-transform transform hover:scale-110"
//             >
//               {/* WhatsApp SVG */}
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.297-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.21-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01s-.521.075-.794.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.261.489 1.692.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                 <path d="M12.004 2c-5.514 0-9.998 4.486-9.998 10.002 0 1.759.46 3.396 1.263 4.795l-1.337 4.879 5.011-1.317c1.366.745 2.93 1.14 4.61 1.14 5.514 0 9.998-4.486 9.998-10.002s-4.484-9.997-9.997-9.997z"/>
//               </svg>
//             </a>

//             {/* Repeat WhatsApp icon (optional second) */}
//             {/* <a
//               href="https://wa.me/1234567890?text=I%20want%20more%20information"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="WhatsApp Message"
//               className="hover:text-green-600 transition-transform transform hover:scale-110"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.297-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.21-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01s-.521.075-.794.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.261.489 1.692.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                 <path d="M12.004 2c-5.514 0-9.998 4.486-9.998 10.002 0 1.759.46 3.396 1.263 4.795l-1.337 4.879 5.011-1.317c1.366.745 2.93 1.14 4.61 1.14 5.514 0 9.998-4.486 9.998-10.002s-4.484-9.997-9.997-9.997z"/>
//               </svg>
//             </a> */}

//             <a
//               href="https://instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="hover:text-red-600 transition-transform transform hover:scale-110 text-red-400"
//             >
//               <Instagram size={24} />
//             </a>
//           </div>
//         </motion.div>

//       </div>

//       {/* Bottom Text */}
//       <div className="mt-12 border-t border-green-200 pt-6 text-center text-green-700 text-sm md:text-base">
//         © {new Date().getFullYear()} VermiKhaad. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;


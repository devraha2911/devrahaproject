import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How to Use", path: "/how-to-use" },
    { name: "Benefits", path: "/benefits" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-green-700">
            🌱 VermiKhaad
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 font-medium hover:text-green-700 transition ${
                    isActive ? "text-green-700" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setOpen(true)}>
              <Menu size={28} className="text-green-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed w-full bg-white z-50 flex flex-col">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center px-4 py-4 shadow">
            <div className="text-2xl font-bold text-green-700">
              🌱 VermiKhaad
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={28} className="text-green-700" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-6 mt-10">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-green-700"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;






// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "How to Use", path: "/how-to-use" },
//     { name: "Benefits", path: "/benefits" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <motion.nav
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
//       >
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-bold text-green-700 cursor-pointer"
//           >
//             🌱 VermiKhaad
//           </motion.div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex gap-8">
//             {links.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className="relative text-gray-700 font-medium group"
//               >
//                 <span className="transition group-hover:text-green-700">
//                   {link.name}
//                 </span>
//                 {/* Underline animation */}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile Menu Icon */}
//           <div className="md:hidden">
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setOpen(true)}
//             >
//               <Menu size={28} className="text-green-700" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed inset-0 bg-white z-50 flex flex-col"
//           >
//             {/* Top Bar */}
//             <div className="flex justify-between items-center px-4 py-4 shadow">
//               <div className="text-2xl font-bold text-green-700">
//                 🌱 VermiKhaad
//               </div>
//               <motion.button
//                 whileTap={{ rotate: 90 }}
//                 onClick={() => setOpen(false)}
//               >
//                 <X size={28} className="text-green-700" />
//               </motion.button>
//             </div>

//             {/* Links */}
//             <div className="flex flex-col items-center gap-6 mt-12">
//               {links.map((link, index) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <NavLink
//                     to={link.path}
//                     onClick={() => setOpen(false)}
//                     className="text-xl font-medium text-gray-700 hover:text-green-700"
//                   >
//                     {link.name}
//                   </NavLink>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



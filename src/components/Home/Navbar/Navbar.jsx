// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // install lucide-react

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
//       <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
//           {/* Logo */}
//           <div className="h-[5rem] w-[10rem] text-2xl font-bold text-green-700">
//               <img src="/logo.jpg" alt="" className="h-full w-full object-fill" />
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex gap-8">
//             {links.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `text-gray-700 font-medium hover:text-green-700 transition ${
//                     isActive ? "text-green-700" : ""
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile Menu Icon */}
//           <div className="md:hidden">
//             <button onClick={() => setOpen(true)}>
//               <Menu size={28} className="text-green-700" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {open && (
//         <div className="fixed w-full bg-white z-50 flex flex-col">
          
//           {/* Top Bar */}
//           <div className="flex justify-between items-center px-4 py-4 shadow">
//             <div className="text-2xl font-bold text-green-700">
//               🌱 VermiKhaad
//             </div>
//             <button onClick={() => setOpen(false)}>
//               <X size={28} className="text-green-700" />
//             </button>
//           </div>

//           {/* Links */}
//           <div className="flex flex-col items-center gap-6 mt-10">
//             {links.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setOpen(false)}
//                 className="text-lg font-medium text-gray-700 hover:text-green-700"
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

          {/* ✅ Responsive Logo */}
          <div className="flex items-center">
            {/* <img
              src="/logo.png"
              alt="VermiKhaad Organic Vermicompost Logo"
              className="h-[7rem] w-[9rem]"
            /> */}
             <p className="text-[1.3em] text-green-600">DEVRAHA <span className="text-orange-600">Bio-Genesis</span></p>
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
            {/* <img
              src="/logo.jpg"
              alt="VermiKhaad Logo"
              className="h-10 w-auto object-contain"
            /> */}
            <p className="text-[1.3em] text-green-600">DEVRAHA <span className="text-orange-600">Bio-Genesis</span></p>
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
                className="text-lg font-medium text-gray-700 hover:text-green-700 pb-2"
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






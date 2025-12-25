

// const Hero = () => {
//   return (
//     <section
//       className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden"
//       aria-label="Organic farming and vermicompost hero section"
//     >
//       {/* Background Image (Use this if NOT using video) */}
//       <img
//         src="/farmImage.jpg"
//         alt="Harvesting crops using organic vermicompost for healthy soil"
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="eager"
//       />

//       {/* OR Background Video (comment image above if using video) */}
//       {/*
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         aria-hidden="true"
//       >
//         <source src={farmVideo} type="video/mp4" />
//       </video>
//       */}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//         <div className="max-w-3xl">
//           <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
//             Grow Healthy Crops with  
//             <span className="text-green-400"> Natural Vermicompost</span>
//           </h1>

//           <p className="mt-6 text-base md:text-lg text-gray-100">
//             Improve soil fertility, increase crop yield, and protect the environment
//             using 100% organic vermicompost khaad.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;







// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden"
//       aria-label="Organic farming and vermicompost hero section"
//     >
//       {/* Background Image with subtle zoom */}
//       <motion.img
//         src="/farmImage.jpg"
//         alt="Harvesting crops using organic vermicompost for healthy soil"
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="eager"
//         initial={{ scale: 1.05 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//         <div className="max-w-3xl">

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
//           >
//             Grow Healthy Crops with  
//             <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
//               {" "}Natural Vermicompost
//             </span>
//           </motion.h1>

//           {/* Paragraph */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//             className="mt-6 text-base md:text-lg text-gray-100"
//           >
//             Improve soil fertility, increase crop yield, and protect the environment
//             using 100% organic vermicompost khaad.
//           </motion.p>

//           {/* CTA Button (optional but recommended) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="mt-8"
//           >
//             <a
//               href="/how-to-use"
//               className="inline-block px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
//             >
//               Learn How to Use
//             </a>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/farmImage.jpg",
    "/farmaImage1.jpg",
    "/farmImage2.jpg",

];

const Hero = () => {
    const [index, setIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // change every 5 sec

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <section
            className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden"
            aria-label="Organic farming and vermicompost hero slider"
        >
            {/* Background Slider */}
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Organic farming and vermicompost harvesting"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                    >
                        Grow Healthy Crops with
                        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            {" "}Natural Vermicompost
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="mt-6 text-base md:text-lg text-gray-100"
                    >
                        Improve soil fertility, boost crop yield, and protect the environment
                        with 100% organic vermicompost khaad.
                    </motion.p>

                    <motion.a
                        href="/how-to-use"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="inline-block mt-8 px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
                    >
                        Learn How to Use
                    </motion.a>
                </div>
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20
             bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur"
                aria-label="Previous slide"
            >
                <ChevronLeft className="text-white" size={28} />
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20
             bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur"
                aria-label="Next slide"
            >
                <ChevronRight className="text-white" size={28} />
            </button>
        </section>
    );
};

export default Hero;



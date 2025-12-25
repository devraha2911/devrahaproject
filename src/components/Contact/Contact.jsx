import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="py-20 bg-green-50 overflow-hidden"
      aria-label="Contact VermiKhaad for organic vermicompost"
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
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Have questions about vermicompost or sustainable farming? We’re here to help you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

          {/* LEFT – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-medium text-green-800">Email</p>
                  <a
                    href="mailto:info@vermikhaad.com"
                    className="text-gray-700 hover:text-green-600 transition"
                  >
                    info@vermikhaad.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-medium text-green-800">Phone</p>
                  <a
                    href="tel:+911234567890"
                    className="text-gray-700 hover:text-green-600 transition"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-medium text-green-800">Address</p>
                  <p className="text-gray-700 leading-relaxed">
                    VermiKhaad Organic Farms,<br />
                    Village Greenfield,<br />
                    District XYZ, State – 123456,<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/911234567890?text=Hello%20VermiKhaad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.297-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.21-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01s-.521.075-.794.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.261.489 1.692.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.004 2c-5.514 0-9.998 4.486-9.998 10.002 0 1.759.46 3.396 1.263 4.795l-1.337 4.879 5.011-1.317c1.366.745 2.93 1.14 4.61 1.14 5.514 0 9.998-4.486 9.998-10.002S17.518 2 12.004 2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110"
              >
                <Facebook size={22} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition transform hover:scale-110"
              >
                <Instagram size={22} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT – Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              title="VermiKhaad Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55921.63644873351!2d77.53066007161823!3d28.83581483213394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8aaeec09f0cf%3A0xb1471116544b1093!2sModinagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1766672030871!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

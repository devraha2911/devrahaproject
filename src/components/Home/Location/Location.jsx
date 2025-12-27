function Location() {
    return (
        <>
            <h1 className="text-center text-[2rem] sm:text-[3rem] font-medium text-green-700 py-5">Find Us Here</h1>
            <div className="mt-8 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    title="Modinagar"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55921.63644873351!2d77.53066007161823!3d28.83581483213394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8aaeec09f0cf%3A0xb1471116544b1093!2sModinagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1766672030871!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default Location;
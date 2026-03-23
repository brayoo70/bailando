import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background Image Placeholder */}
      <img
        src="https://picsum.photos/seed/service/1920/1080?blur=2"
        alt="Bailando Hero"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Send us anything, <br className="hidden sm:block" />
          anywhere, anytime
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-gray-200 mb-10 font-light"
        >
          Reliable errands & lifestyle services in Awasi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg soft-shadow"
          >
            <Phone size={20} />
            Request Service
          </a>
          <a
            href="https://wa.me/254112571170"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg soft-shadow"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-60"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}

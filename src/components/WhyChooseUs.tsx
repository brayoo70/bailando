import { motion } from 'motion/react';
import { Zap, DollarSign, ShieldCheck, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Fast & Reliable',
      icon: <Zap className="text-accent" size={32} />,
      description: 'We prioritize speed without compromising quality, ensuring your errands are completed on time.',
    },
    {
      title: 'Affordable',
      icon: <DollarSign className="text-accent" size={32} />,
      description: 'Premium lifestyle services at competitive rates, making luxury living accessible to everyone.',
    },
    {
      title: 'Trusted Locally',
      icon: <ShieldCheck className="text-accent" size={32} />,
      description: 'Deeply rooted in the Awasi community, we are known for our integrity and commitment to excellence.',
    },
    {
      title: 'Available Anytime',
      icon: <Clock className="text-accent" size={32} />,
      description: 'Our team is ready to assist you whenever you need us, providing round-the-clock support.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience the BAILANDO difference in Awasi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-6 p-3 bg-white/10 rounded-xl w-fit group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

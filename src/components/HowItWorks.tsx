import { motion } from 'motion/react';
import { ClipboardList, Truck, Coffee } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Request Service',
      icon: <ClipboardList className="text-white" size={32} />,
      description: 'Contact us via phone or WhatsApp to tell us what you need.',
    },
    {
      title: 'We Handle It',
      icon: <Truck className="text-white" size={32} />,
      description: 'Our reliable team takes care of the errand or service efficiently.',
    },
    {
      title: 'You Relax',
      icon: <Coffee className="text-white" size={32} />,
      description: 'Enjoy your free time while we deliver results to your doorstep.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-primary mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Simple, transparent, and hassle-free process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 soft-shadow group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

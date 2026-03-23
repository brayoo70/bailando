import { motion } from 'motion/react';
import { ShoppingBag, Home, Briefcase, Star, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Personal Errands',
      icon: <ShoppingBag className="text-accent" size={40} />,
      items: ['Grocery shopping', 'Pharmacy pickups', 'Dry cleaning', 'Parcel delivery'],
      description: 'We handle your daily chores so you can focus on what matters most.',
    },
    {
      title: 'Home Services',
      icon: <Home className="text-accent" size={40} />,
      items: ['Home cleaning', 'Grass cutting'],
      description: 'Keep your living space pristine and your lawn perfectly manicured.',
    },
    {
      title: 'Business Services',
      icon: <Briefcase className="text-accent" size={40} />,
      items: ['Sourcing wholesale stock','Products Pickup'],
      description: 'Streamline your business operations with our reliable sourcing services.',
    },
    {
      title: 'Specialized Services',
      icon: <Star className="text-accent" size={40} />,
      items: ['Standing in long lines', 'Chaperone services'],
      description: 'Unique solutions for your specific needs, handled with care and patience.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-primary mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive lifestyle solutions tailored to your needs in Awasi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl soft-shadow hover:scale-105 transition-transform duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
              <ul className="space-y-3 text-left w-full">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

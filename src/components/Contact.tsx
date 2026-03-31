import { motion } from 'motion/react';
import { Phone, MessageCircle, Send, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Personal Errands',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Request sent successfully!");
      } else {
        alert("Failed to send request");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-bold text-primary mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Ready to simplify your life? Contact us today for reliable errands and lifestyle services in Awasi. We're just a call or message away.
            </motion.p>

            <div className="space-y-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary soft-shadow group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold mb-1">Call Us Directly</p>
                  <a href="tel:0112571170" className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-200">
                    0112571170
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white soft-shadow group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold mb-1">Chat on WhatsApp</p>
                  <a 
                    href="https://wa.me/254112571170" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold text-primary hover:text-green-500 transition-colors duration-200"
                  >
                    Start a Conversation
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white soft-shadow group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-2xl font-bold text-primary">Awasi, Kenya</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-12 rounded-3xl soft-shadow border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">Send a Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all duration-200 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all duration-200 outline-none appearance-none cursor-pointer"
                >
                  <option>Personal Errands</option>
                  <option>Home Services</option>
                  <option>Business Services</option>
                  <option>Specialized Services</option>
                  <option>Extended Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe what you need..."
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all duration-200 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg soft-shadow group"
              >
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

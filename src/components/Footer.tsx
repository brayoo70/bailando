import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-wider">BAILANDO</h2>
            <p className="text-gray-400 leading-relaxed">
              Premium errands and lifestyle services in Awasi. We handle the small details so you can enjoy the big moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-200">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors duration-200">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors duration-200">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Personal Errands</li>
              <li>Home Cleaning</li>
              <li>Grass Cutting</li>
              <li>Wholesale Sourcing</li>
              <li>Chaperone Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>+254112571170</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>info@bailando.co.ke</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>Awasi Branch, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {currentYear} BAILANDO – Errands & Lifestyle Services. All rights reserved.</p>
          <p className="mt-2">Designed for excellence in Awasi.</p>
        </div>
      </div>
    </footer>
  );
}

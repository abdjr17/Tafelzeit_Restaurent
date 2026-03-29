import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Clock, Instagram, Facebook, Twitter, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reservations', href: '#reservations' },
];

const menuItems = [
  {
    category: 'Starters',
    items: [
      { name: 'Truffle Arancini', description: 'Crispy risotto balls filled with mozzarella and black truffle', price: '$14' },
      { name: 'Beef Carpaccio', description: 'Thinly sliced tenderloin, arugula, parmesan, lemon vinaigrette', price: '$18' },
      { name: 'Burrata & Heirloom Tomato', description: 'Fresh burrata, basil pesto, balsamic glaze, toasted pine nuts', price: '$16' },
    ]
  },
  {
    category: 'Mains',
    items: [
      { name: 'Pan-Seared Scallops', description: 'Cauliflower purée, crispy pancetta, brown butter caper sauce', price: '$34' },
      { name: 'Herb-Crusted Lamb Rack', description: 'Roasted root vegetables, mint chimichurri, red wine jus', price: '$42' },
      { name: 'Wild Mushroom Risotto', description: 'Arborio rice, porcini mushrooms, parmesan crisp, truffle oil', price: '$28' },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Dark Chocolate Fondant', description: 'Molten center, vanilla bean ice cream, raspberry coulis', price: '$12' },
      { name: 'Lemon Basil Tart', description: 'Shortbread crust, torched meringue, candied lemon zest', price: '$10' },
    ]
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-secondary)] text-[var(--color-primary)] selection:bg-[var(--color-accent)] selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 text-[var(--color-primary)]' : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-2xl font-serif font-bold tracking-wider uppercase">
            Tafelzeit
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              className={`px-6 py-2 border transition-colors text-sm font-medium tracking-widest uppercase ${
                isScrolled 
                  ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-[var(--color-primary)]'
              }`}
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2940&auto=format&fit=crop"
            alt="Dark aesthetic restaurant interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
          >
            A Culinary Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            Taste the <br className="hidden md:block" />
            <span className="italic">Moment</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#reservations"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000&auto=format&fit=crop"
              alt="Beautifully plated beef steak"
              className="w-full h-[600px] object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-accent)] hidden md:block -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Story</h2>
            <div className="w-12 h-1 bg-[var(--color-accent)] mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Tafelzeit, we believe that dining is more than just eating; it's an experience that engages all the senses. Founded in 2015, our restaurant has been a beacon of culinary innovation, blending traditional techniques with modern flavors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our ingredients are sourced locally, ensuring the freshest and highest quality produce. Every dish is crafted with passion, precision, and a deep respect for the art of cooking.
            </p>
            <a href="#menu" className="inline-flex items-center text-[var(--color-accent)] font-medium tracking-widest uppercase hover:text-[var(--color-accent-hover)] transition-colors">
              Discover Our Menu <ChevronRight size={20} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Menu</h2>
            <div className="w-12 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A carefully curated selection of seasonal dishes, designed to delight and inspire.
            </p>
          </div>

          <div className="space-y-16">
            {menuItems.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-serif italic text-center mb-8 text-[var(--color-accent)]">
                  {section.category}
                </h3>
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex flex-col md:flex-row justify-between items-baseline border-b border-gray-100 pb-6">
                      <div className="md:w-3/4">
                        <h4 className="text-xl font-medium mb-2">{item.name}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-xl font-serif text-[var(--color-accent)]">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">
              Download Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <section className="h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2940&auto=format&fit=crop"
            alt="Chocolate brownie with ice cream"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white italic max-w-4xl leading-relaxed drop-shadow-lg">
            "Cooking is an art, but all art requires knowing something about the techniques and the materials."
          </h2>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Make a Reservation</h2>
            <div className="w-12 h-1 bg-[var(--color-accent)] mb-8"></div>
            <p className="text-gray-600 mb-10">
              Join us for an unforgettable dining experience. For parties of 6 or more, please contact us directly.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[var(--color-accent)] bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input type="time" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[var(--color-accent)] bg-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[var(--color-accent)] bg-transparent">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[var(--color-accent)] bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" placeholder="Phone Number" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[var(--color-accent)] bg-transparent" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[var(--color-primary)] text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-black transition-colors mt-8">
                Book Table
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-16 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-[var(--color-accent)] mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium mb-1 uppercase tracking-wider text-sm">Location</h4>
                  <p className="text-gray-600">Friedrich-Muller Str. 11<br />Wismar 23966, Germany</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-[var(--color-accent)] mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium mb-1 uppercase tracking-wider text-sm">Reservations</h4>
                  <p className="text-gray-600">+49 3841 5550123<br />hello@tafelzeit.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-[var(--color-accent)] mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium mb-1 uppercase tracking-wider text-sm">Opening Hours</h4>
                  <p className="text-gray-600">
                    Mon - Sun: 12:00 PM - 20:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-wider uppercase mb-4">Tafelzeit</h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              A modern dining experience celebrating seasonal ingredients and culinary craftsmanship.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
          
          <div className="md:text-right text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Tafelzeit Restaurant.</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

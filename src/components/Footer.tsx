import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'Quick Links': ['Home', 'Features', 'Why Us', 'Community', 'Contact'],
    'Services': ['Period Tracking', 'PCOS Management', 'TeleConsultation', 'AI Chat Support', 'Community'],
    'Resources': ['Health Articles', 'Meditation Music', 'Personal Diary', 'Expert Support', 'FAQ']
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              She & Soul
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering women through comprehensive health and wellness solutions.
              Your trusted companion for a healthier, happier life.
            </p>
            <div className="flex items-center gap-2 text-pink-300">
              <Heart size={20} fill="currentColor" />
              <span className="font-semibold">Made with love for women</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-4 text-pink-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="text-pink-400 mt-1" size={20} />
              <div>
                <p className="font-semibold text-pink-400">Email</p>
                <a href="mailto:support@sheandsoul.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                  support@sheandsoul.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-pink-400 mt-1" size={20} />
              <div>
                <p className="font-semibold text-pink-400">Phone</p>
                <a href="tel:+911234567890" className="text-gray-300 hover:text-pink-400 transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-pink-400 mt-1" size={20} />
              <div>
                <p className="font-semibold text-pink-400">Location</p>
                <p className="text-gray-300">India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 She & Soul. All rights reserved. Your health, our priority.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

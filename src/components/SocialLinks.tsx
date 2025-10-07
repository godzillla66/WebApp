import { MessageCircle, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: MessageCircle,
      name: 'WhatsApp Community',
      description: 'Join our active WhatsApp community for daily tips and support',
      link: '#',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      description: 'Connect with us professionally and stay updated',
      link: '#',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Follow us for wellness tips and inspiring stories',
      link: '#',
      color: 'from-pink-500 via-purple-500 to-orange-500',
      hoverColor: 'hover:from-pink-600 hover:via-purple-600 hover:to-orange-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Get the latest updates and health news',
      link: '#',
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with us on social media and become part of a supportive community of empowered women
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} mb-6 transition-all group-hover:scale-110`}>
                    <Icon size={36} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {social.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {social.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-pink-500 font-semibold group-hover:text-purple-500 transition-colors">
                      Connect Now →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-gray-800 font-bold">1000+ Women</p>
              <p className="text-gray-600 text-sm">Already Connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, Smartphone, Shield, Sparkles, HeartHandshake, Zap } from 'lucide-react';

export default function Solution() {
  const solutions = [
    {
      icon: Smartphone,
      title: 'All-in-One Platform',
      description: 'Everything you need for women\'s health - tracking, consultation, community, and wellness - in one easy-to-use app',
      image: 'https://images.pexels.com/photos/4474036/pexels-photo-4474036.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Expert-Backed Care',
      description: 'Access to certified doctors, nutritionists, and mental health professionals who understand women\'s unique needs',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Insights',
      description: 'Smart tracking and personalized recommendations based on your health patterns and lifestyle',
      image: 'https://images.pexels.com/photos/7233350/pexels-photo-7233350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Community',
      description: 'Connect with thousands of women sharing similar experiences in a safe, moderated environment',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Tracking',
      description: 'Monitor periods, symptoms, moods, medications, and health goals all in one place with smart reminders',
      image: 'https://images.pexels.com/photos/6942070/pexels-photo-6942070.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Get immediate answers, book consultations in minutes, and access resources 24/7 from anywhere',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Our Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            She & Soul brings comprehensive, accessible, and personalized women's health solutions right to your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                    <Icon size={24} className="text-pink-500" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SOLVED
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

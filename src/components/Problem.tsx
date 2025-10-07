import { AlertCircle, Brain, Heart, Clock, Users, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Lack of Awareness',
      description: 'Many women lack proper knowledge about menstrual health, PCOS, and reproductive wellness',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Brain,
      title: 'Mental Health Stigma',
      description: 'Women hesitate to discuss mental health issues and hormonal imbalances due to social stigma',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Limited Access to Care',
      description: 'Difficulty in accessing quality healthcare and expert consultation for women\'s health issues',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Clock,
      title: 'Time Constraints',
      description: 'Busy schedules prevent women from prioritizing their health and seeking timely medical advice',
      image: 'https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'No Support System',
      description: 'Absence of a safe, supportive community to share experiences and seek guidance',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingDown,
      title: 'Inconsistent Tracking',
      description: 'Difficulty maintaining regular health tracking and understanding body patterns',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              The Problem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Women face numerous challenges in managing their health and wellness in today's fast-paced world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <Icon size={24} className="text-pink-500" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Users, Heart, Award, TrendingUp } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'Women Connected',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Heart,
      value: '500+',
      label: 'Success Stories',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Health Experts',
      color: 'from-rose-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Satisfaction Rate',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a thriving community of women taking charge of their health and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>

                  <p className="text-gray-700 font-medium text-lg">
                    {stat.label}
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

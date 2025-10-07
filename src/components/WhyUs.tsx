import { Shield, Heart, Users, Sparkles, Clock, Lock } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Your health data is encrypted and protected with industry-leading security standards. Your privacy is our top priority.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'We care for your complete well-being - physical, mental, and emotional health in one comprehensive platform.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access certified health professionals, counselors, and a supportive community whenever you need guidance.',
      color: 'from-rose-500 to-orange-500'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Insights',
      description: 'Get personalized recommendations and insights based on your unique health patterns and lifestyle.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access your health companion anytime, anywhere. Track, learn, and connect at your convenience.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Lock,
      title: 'Complete Privacy',
      description: 'Your personal diary, health records, and conversations remain completely private and confidential.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just an app - we're your trusted partner in health and wellness,
            designed specifically for women by women who care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${reason.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

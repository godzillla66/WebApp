import { Calendar, Activity, Music, BookOpen, MessageCircle, Users, Video, UserPlus, Eye, BookHeart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Period Tracking',
      description: 'Track your menstrual cycle with precision. Get predictions, reminders, and insights about your cycle patterns.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Activity,
      title: 'PCOS & PCOD Management',
      description: 'Specialized tools and guidance for managing PCOS and PCOD. Track symptoms, get dietary recommendations, and monitor progress.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Music,
      title: 'Meditation Music',
      description: 'Access a curated collection of soothing meditation music and guided sessions to reduce stress and enhance mental well-being.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Health Articles',
      description: 'Stay informed with expert-written articles on women\'s health, wellness tips, nutrition, and lifestyle guidance.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Support',
      description: 'Get instant answers to your health questions with our AI-powered chatbot trained on women\'s health data.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with other women, share experiences, and find support in a safe, moderated community environment.',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'TeleConsultation',
      description: 'Book video consultations with certified gynecologists, nutritionists, and mental health professionals.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: UserPlus,
      title: 'Add Your Partner',
      description: 'Include your partner in your health journey. Share updates and help them understand your needs better.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Parental Dashboard',
      description: 'Parents can monitor and support their daughter\'s health journey with appropriate access and privacy controls.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      icon: BookHeart,
      title: 'Personal Diary',
      description: 'Maintain a private diary to record your thoughts, feelings, and health observations in a secure space.',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              What We Provide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for complete health and wellness management in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity" />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

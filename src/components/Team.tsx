import { Linkedin, Mail, Award } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Board-certified gynecologist with 15+ years of experience in women\'s health',
      expertise: 'Reproductive Health, PCOS Management',
      email: 'priya@sheandsoul.com',
      linkedin: '#'
    },
    {
      name: 'Ananya Verma',
      role: 'Head of Community',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Mental health advocate and community builder passionate about women\'s wellness',
      expertise: 'Community Building, Mental Wellness',
      email: 'ananya@sheandsoul.com',
      linkedin: '#'
    },
    {
      name: 'Dr. Meera Reddy',
      role: 'Wellness Director',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Nutritionist and wellness expert specializing in hormonal health and lifestyle medicine',
      expertise: 'Nutrition, Holistic Wellness',
      email: 'meera@sheandsoul.com',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated experts committed to empowering women's health and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="perspective-1000">
              <div className="group relative w-full h-[480px] transition-transform duration-700 transform-style-3d hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-pink-500 font-semibold">
                            {member.role}
                          </p>
                        </div>
                        <Award className="text-purple-500" size={24} />
                      </div>

                      <div className="flex gap-3 mt-4">
                        <a
                          href={member.linkedin}
                          className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin size={20} className="text-blue-600" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
                        >
                          <Mail size={20} className="text-pink-600" />
                        </a>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500 italic">
                          Hover to see more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-rose-500 rounded-2xl shadow-xl h-full p-8 flex flex-col justify-center text-white">
                    <h3 className="text-2xl font-bold mb-4">{member.name}</h3>

                    <div className="mb-6">
                      <p className="text-white/90 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold mb-2 text-lg">Expertise:</h4>
                      <p className="text-white/90">{member.expertise}</p>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <a
                        href={member.linkedin}
                        className="flex-1 bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                      >
                        <Linkedin size={20} />
                        <span className="text-sm font-semibold">LinkedIn</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail size={20} />
                        <span className="text-sm font-semibold">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

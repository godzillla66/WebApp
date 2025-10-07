import { useState } from 'react';
import { Mail, User, Phone, GraduationCap, Calendar, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function AmbassadorForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    whyJoin: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/ambassador-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Application submitted successfully! We\'ll review your application and get back to you soon.');
        setFormData({ name: '', email: '', phone: '', college: '', year: '', whyJoin: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Become a Campus Ambassador
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lead the change in your campus. Help spread awareness about women's health and wellness.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
              <p className="text-gray-600 mb-8">{message}</p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="your.email@college.edu"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    College/University *
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Your college name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Current Year *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Select your year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Postgraduate">Postgraduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Why do you want to be a Campus Ambassador? *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                  <textarea
                    required
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us your motivation, ideas, and how you plan to make an impact..."
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3">What You'll Get:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Certificate of Recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Exclusive Ambassador Merchandise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Direct Mentorship from Health Experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Leadership & Communication Skills Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Incentives & Rewards for Performance</span>
                  </li>
                </ul>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle size={20} />
                  <p>{message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

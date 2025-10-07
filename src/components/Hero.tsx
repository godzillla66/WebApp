import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Empowering Women
          </span>
          <br />
          <span className="text-gray-800">Through Wellness</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your complete companion for period tracking, health management, and holistic wellness.
          Join thousands of women taking control of their health journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all">
            Learn More
          </button>
        </div>

        <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-pink-500 border-b-8 border-b-transparent ml-1" />
              </div>
              <p className="text-gray-700 font-medium">Place your video file in the project folder</p>
              <p className="text-sm text-gray-500 mt-2">Then update the video source in Hero.tsx</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

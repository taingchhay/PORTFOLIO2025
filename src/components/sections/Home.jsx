import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-blue-400/30 to-transparent animate-connection-line"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(0, 6, 124, 0.2) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Existing Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-blue/30 z-0"></div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Profile Section */}
          <div className="relative group mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/50 shadow-2xl 
                       transform transition-all duration-500 hover:scale-105 hover:border-cyan-400/30 
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent 
                          group-hover:border-blue-500/20 group-hover:animate-pulse-slow" />
          </div>

          {/* Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Kunieda Tech
            </h1>

            <p className="text-gray-300 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Full-stack developer specializing in modern web solutions.
              Crafting digital experiences that combine beauty & functionality.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-8 rounded-lg font-medium transition-all 
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                View Projects
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-500/40 text-blue-600 py-3 px-8 rounded-lg 
                         font-medium transition-all hover:bg-blue-50 hover:-translate-y-1 
                         hover:shadow-lg hover:shadow-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
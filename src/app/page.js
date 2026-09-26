import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-500/20">
            🌴
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Explore <span className="text-emerald-600">LK</span>
            </h1>
            <p className="text-[9px] text-slate-400 tracking-wider uppercase font-semibold">
              DISCOVER • EXPLORE • EXPERIENCE
            </p>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-7 font-medium text-sm text-slate-600">
          <Link href="/" className="text-emerald-600 font-semibold flex items-center gap-1.5 hover:text-emerald-600 transition">
            🏠 Home
          </Link>
          <Link href="/destinations" className="flex items-center gap-1.5 hover:text-emerald-600 transition">
            📍 Destinations
          </Link>
          <Link href="/ai-planner" className="flex items-center gap-1.5 hover:text-emerald-600 transition">
            ✨ AI Planner
          </Link>
          <Link href="/map" className="flex items-center gap-1.5 hover:text-emerald-600 transition">
            🗺️ Map
          </Link>
          <Link href="/calculator" className="flex items-center gap-1.5 hover:text-emerald-600 transition">
            🧮 Cost Calculator
          </Link>
        </div>

        {/* Right Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition flex items-center gap-1.5">
            👤 Login
          </Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition flex items-center gap-1.5">
            ✨ Register
          </Link>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative min-h-[calc(100vh-73px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* Background Resort Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.55]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000&auto=format&fit=crop')` }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <p className="text-emerald-400 font-medium text-sm md:text-base tracking-wide mb-3">
            Welcome to Sri Lanka
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Your Next Adventure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Starts Here
            </span>
          </h1>
          
          <p className="text-slate-200 text-sm md:text-base mt-5 max-w-2xl font-normal leading-relaxed">
            Explore breathtaking destinations, plan your trips using AI, and experience the real beauty of Sri Lanka.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link 
              href="/destinations" 
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/30 transition flex items-center gap-2 text-sm"
            >
              📍 Explore Destinations
            </Link>
            <Link 
              href="/ai-planner" 
              className="px-8 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-semibold shadow-lg transition flex items-center gap-2 text-sm"
            >
              ✨ Try AI Planner
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
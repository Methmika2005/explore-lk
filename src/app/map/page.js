'use client';

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">🌴</div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Explore<span className="text-emerald-600">LK</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
          <a href="/" className="hover:text-emerald-600 transition">🏠 Home</a>
          <a href="/destinations" className="hover:text-emerald-600 transition">📍 Destinations</a>
          <a href="/ai-planner" className="hover:text-emerald-600 transition">✨ AI Planner</a>
          <a href="/map" className="text-emerald-600 font-semibold pb-1 border-b-2 border-emerald-600">🗺️ Map</a>
          <a href="/calculator" className="hover:text-emerald-600 transition">🧮 Cost Calculator</a>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <span className="text-emerald-600">🗺️</span> Interactive Map
          </h2>
          <p className="text-slate-500 text-sm mt-1">Explore all tourist destinations across Sri Lanka on the map.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-8 h-[500px] flex items-center justify-center">
          <p className="text-slate-400 font-medium">Interactive Map Component will load here...</p>
        </div>
      </div>
    </div>
  );
}
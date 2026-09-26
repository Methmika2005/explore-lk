'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Destinations() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState({
    title: "Adventure & Hiking",
    desc: "Trek mountains, explore nature, feel the thrill.",
    icon: "⛰️"
  });

  const styles = [
    { title: "Adventure & Hiking", desc: "Trek mountains, explore nature, feel the thrill.", icon: "⛰️" },
    { title: "Beaches & Relaxation", desc: "Sunny beaches, calm vibes, pure relaxation.", icon: "🏖️" },
    { title: "Wildlife & Safaris", desc: "Meet amazing wildlife, explore national parks.", icon: "🦁" },
    { title: "History & Culture", desc: "Ancient cities, temples, rich heritage.", icon: "🏛️" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
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

        <div className="hidden md:flex items-center space-x-6 font-medium text-sm text-slate-600">
          <Link href="/" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🏠 Home</Link>
          <Link href="/destinations" className="text-emerald-600 font-semibold flex items-center gap-1.5 hover:text-emerald-600 transition">📍 Destinations</Link>
          <Link href="/ai-planner" className="flex items-center gap-1.5 hover:text-emerald-600 transition">✨ AI Planner</Link>
          <Link href="/map" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🗺️ Map</Link>
          <Link href="/calculator" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🧮 Cost Calculator</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition">Login</Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition">Register</Link>
        </div>
      </nav>

      {/* Hero Banner with Sigiriya Background */}
      <div className="relative mx-6 md:mx-12 mt-6 rounded-3xl overflow-hidden shadow-2xl bg-slate-900 text-white p-8 md:p-14">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.5]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000&auto=format&fit=crop')` }}
        ></div>

        <div className="relative z-10 max-w-3xl">
          <p className="text-emerald-400 font-medium text-sm md:text-base italic mb-2">Discover Amazing</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Sri Lanka <span className="text-emerald-400">Destinations</span>
          </h2>
          <p className="text-slate-200 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
            Explore the most beautiful places in Sri Lanka, from golden beaches to misty mountains, ancient temples and more.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="relative z-10 mt-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-900">
          
          {/* Province Filter */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1">Province</span>
            <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-emerald-600">
              <option>Select Province (All)</option>
              <option>Western Province</option>
              <option>Central Province</option>
              <option>Southern Province</option>
              <option>Uva Province</option>
            </select>
          </div>

          {/* Interactive Travel Style Dropdown */}
          <div className="flex flex-col relative">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1">Travel Style</span>
            
            {/* Clickable Header Box */}
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer hover:border-emerald-600 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-base">{selectedStyle.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">{selectedStyle.title}</h4>
                  <p className="text-[11px] text-slate-500">{selectedStyle.desc}</p>
                </div>
              </div>
              <span className={`text-slate-400 text-xs transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>

            {/* Dropdown Options List */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-100">
                {styles.map((style, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setSelectedStyle(style);
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3 hover:bg-emerald-50/50 cursor-pointer transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-lg">{style.icon}</div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{style.title}</h4>
                        <p className="text-[11px] text-slate-500">{style.desc}</p>
                      </div>
                    </div>
                    {selectedStyle.title === style.title && (
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

        {/* Search Button Row */}
        <div className="relative z-10 mt-4 flex justify-end">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition flex items-center gap-2 text-sm shadow-lg">
            🔍 Search Destinations
          </button>
        </div>

      </div>

    </div>
  );
}
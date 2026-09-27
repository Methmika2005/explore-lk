'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MapPage() {
  const [selectedSpot, setSelectedSpot] = useState({
    name: "Sigiriya Rock Fortress",
    province: "Central Province",
    category: "History & Culture",
    desc: "An ancient rock fortress and palace ruin surrounded by extensive networks of gardens, reservoirs, and other structures.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000&auto=format&fit=crop",
    coords: "7.9570° N, 80.7603° E"
  });

  const spots = [
    {
      name: "Sigiriya Rock Fortress",
      province: "Central Province",
      category: "History & Culture",
      desc: "An ancient rock fortress and palace ruin surrounded by extensive networks of gardens, reservoirs, and other structures.",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000&auto=format&fit=crop",
      coords: "7.9570° N, 80.7603° E"
    },
    {
      name: "Ella Nine Arch Bridge",
      province: "Uva Province",
      category: "Adventure & Hiking",
      desc: "A massive bridge built entirely of brick, stone, and cement without steel, nestled amidst lush green tea gardens.",
      image: "https://images.unsplash.com/photo-1546708986-34f378033621?q=80&w=1000&auto=format&fit=crop",
      coords: "6.8767° N, 81.0466° E"
    },
    {
      name: "Mirissa Beach",
      province: "Southern Province",
      category: "Beaches & Relaxation",
      desc: "Famous for whale watching, golden sandy beaches, and vibrant seaside cafes with relaxed tropical vibes.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      coords: "5.9483° N, 80.4551° E"
    },
    {
      name: "Yala National Park",
      province: "Southern Province",
      category: "Wildlife & Safaris",
      desc: "The most visited national park in Sri Lanka, renowned for having one of the highest leopard densities in the world.",
      image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop",
      coords: "6.3725° N, 81.5173° E"
    }
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
          <Link href="/destinations" className="flex items-center gap-1.5 hover:text-emerald-600 transition">📍 Destinations</Link>
          <Link href="/ai-planner" className="flex items-center gap-1.5 hover:text-emerald-600 transition">✨ AI Planner</Link>
          <Link href="/map" className="text-emerald-600 font-semibold flex items-center gap-1.5 hover:text-emerald-600 transition">🗺️ Map</Link>
          <Link href="/calculator" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🧮 Cost Calculator</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition">Login</Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition">Register</Link>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4">
          🗺️ Interactive Tourist Map
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
          Explore Sri Lanka <span className="text-emerald-600">By Location</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Click on any popular destination from the list below to view its key highlights, coordinates, and details.
        </p>
      </div>

      {/* Main Map & Details Layout */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Destinations List Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Featured Destinations</h3>
          {spots.map((spot, index) => (
            <div 
              key={index}
              onClick={() => setSelectedSpot(spot)}
              className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                selectedSpot.name === spot.name 
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20' 
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm">{spot.name}</h4>
                <p className={`text-xs mt-0.5 ${selectedSpot.name === spot.name ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {spot.province}
                </p>
              </div>
              <span className="text-lg">📍</span>
            </div>
          ))}
        </div>

        {/* Selected Spot Details Box / Visual Map Area */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md mb-6">
              <img 
                src={selectedSpot.image} 
                alt={selectedSpot.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                {selectedSpot.category}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{selectedSpot.province}</span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">{selectedSpot.name}</h3>
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 self-start md:self-auto">
                🧭 {selectedSpot.coords}
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedSpot.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Ready to visit this location?</span>
            <Link 
              href="/ai-planner" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition shadow-md shadow-emerald-600/20"
            >
              Plan Trip Here ✨
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
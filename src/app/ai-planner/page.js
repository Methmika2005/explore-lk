'use client';
import { useState } from 'react';

export default function AIPlannerPage() {
  const [duration, setDuration] = useState(3);

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
          <a href="/ai-planner" className="text-emerald-600 font-semibold pb-1 border-b-2 border-emerald-600">✨ AI Planner</a>
          <a href="/map" className="hover:text-emerald-600 transition">🗺️ Map</a>
          <a href="/calculator" className="hover:text-emerald-600 transition">🧮 Cost Calculator</a>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">✨ AI Trip Planner</h2>
          <p className="text-slate-500 text-sm">Customize your trip preferences below to generate your personal AI itinerary.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Duration (Days): {duration}</label>
            <input 
              type="range" 
              min="1" 
              max="14" 
              value={duration} 
              onChange={(e) => setDuration(e.target.value)}
              className="w-full accent-emerald-600"
            />
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition">
            ✨ Generate AI Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}
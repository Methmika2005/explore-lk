'use client';
import { useState } from 'react';

export default function CalculatorPage() {
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);

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
          <a href="/map" className="hover:text-emerald-600 transition">🗺️ Map</a>
          <a href="/calculator" className="text-emerald-600 font-semibold pb-1 border-b-2 border-emerald-600">🧮 Cost Calculator</a>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
            <span className="text-emerald-600">🧮</span> Trip Cost Calculator
          </h2>
          <p className="text-slate-500 text-sm mt-1">Estimate your travel budget easily based on days and travelers.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Number of Days</label>
            <input 
              type="number" 
              value={days} 
              onChange={(e) => setDays(e.target.value)}
              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Number of Travelers</label>
            <input 
              type="number" 
              value={travelers} 
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-700">Estimated Total Budget:</span>
            <span className="text-2xl font-extrabold text-emerald-600">LKR {(days * travelers * 15000).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
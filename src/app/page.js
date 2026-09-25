'use client';
import { useState } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">🌴</div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
              Explore<span className="text-emerald-600">LK</span>
            </h1>
            <p className="text-[10px] text-slate-400 tracking-wider uppercase">Discover • Explore • Experience</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
          <a href="/" className="text-emerald-600 font-semibold pb-1 border-b-2 border-emerald-600">🏠 Home</a>
          <a href="/destinations" className="hover:text-emerald-600 transition">📍 Destinations</a>
          <a href="/ai-planner" className="hover:text-emerald-600 transition">✨ AI Planner</a>
          <a href="/map" className="hover:text-emerald-600 transition">🗺️ Map</a>
          <a href="/calculator" className="hover:text-emerald-600 transition">🧮 Cost Calculator</a>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-full font-semibold text-slate-700 hover:bg-slate-50 transition text-sm">
            👤 Login
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition text-sm">
            ✨ Register
          </button>
        </div>
      </nav>

      {/* Pure Home Page Hero Section (No other sections below this) */}
      <header className="relative bg-emerald-900 text-white py-32 px-6 text-center flex flex-col justify-center items-center min-h-[85vh]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-300 font-medium italic text-xl mb-3">Welcome to Sri Lanka</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Next Adventure<br />
            <span className="text-emerald-400">Starts Here</span>
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            Explore breathtaking destinations, plan your trips using AI, and experience the real beauty of Sri Lanka.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/destinations" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition">
              📍 Explore Destinations
            </a>
            <a href="/ai-planner" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl font-bold shadow-lg transition">
              ✨ Try AI Planner
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
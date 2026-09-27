'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIPlanner() {
  const [loading, setLoading] = useState(false);
  const [planGenerated, setPlanGenerated] = useState(false);
  
  // Form States
  const [destination, setDestination] = useState('Sigiriya & Kandy');
  const [days, setDays] = useState('3 Days');
  const [budget, setBudget] = useState('Mid-range ($50-$100/day)');
  const [travelStyle, setTravelStyle] = useState('Adventure & Hiking');

  const handleGeneratePlan = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate AI loading/generating time
    setTimeout(() => {
      setLoading(false);
      setPlanGenerated(true);
    }, 2000);
  };

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
          <Link href="/ai-planner" className="text-emerald-600 font-semibold flex items-center gap-1.5 hover:text-emerald-600 transition">✨ AI Planner</Link>
          <Link href="/map" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🗺️ Map</Link>
          <Link href="/calculator" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🧮 Cost Calculator</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition">Login</Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4">
          ✨ Powered by Advanced AI
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
          Your Personal <span className="text-emerald-600">Sri Lanka Trip Planner</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Tell us what you like, and our AI will instantly craft a customized day-by-day travel itinerary just for you.
        </p>
      </div>

      {/* Main Content Form & Results */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl">
          
          <form onSubmit={handleGeneratePlan} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Destination Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Where do you want to explore?</label>
                <input 
                  type="text" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Ella, Kandy, Mirissa"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Trip Duration</label>
                <select 
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-emerald-600"
                >
                  <option>1 Day Trip</option>
                  <option>3 Days</option>
                  <option>5 Days</option>
                  <option>7 Days (Full Island)</option>
                  <option>10+ Days Explorer</option>
                </select>
              </div>

              {/* Budget Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Budget Range</label>
                <select 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-emerald-600"
                >
                  <option>Backpacker / Budget (&lt; $30/day)</option>
                  <option>Mid-range ($50-$100/day)</option>
                  <option>Luxury ($150+/day)</option>
                </select>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Travel Style</label>
                <select 
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-emerald-600"
                >
                  <option>Adventure & Hiking ⛰️</option>
                  <option>Beaches & Relaxation 🏖️</option>
                  <option>Wildlife & Safaris 🦁</option>
                  <option>History & Culture 🏛️</option>
                </select>
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <span className="animate-spin text-xl">⏳</span> Generating Your Custom Itinerary...
                  </>
                ) : (
                  <>✨ Generate AI Itinerary</>
                )}
              </button>
            </div>
          </form>

          {/* Generated Result Section */}
          {planGenerated && (
            <div className="mt-10 pt-10 border-t border-slate-100 animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Custom Itinerary Ready</span>
                  <h3 className="text-2xl font-black text-slate-900">Your {days} in {destination}</h3>
                </div>
                <button 
                  onClick={() => alert("Itinerary saved successfully!")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
                >
                  💾 Save Trip
                </button>
              </div>

              {/* Day 1 Itinerary Card */}
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-600 text-white font-bold text-xs rounded-lg">Day 01</span>
                    <h4 className="font-bold text-slate-800 text-base">Arrival & Exploring Ancient Wonders</h4>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 pl-4 list-disc">
                    <li><strong className="text-slate-800">08:00 AM:</strong> Arrive at the destination and check-in to your eco-hotel.</li>
                    <li><strong className="text-slate-800">10:30 AM:</strong> Begin morning exploration of the main historical landmark. Enjoy guided trekking.</li>
                    <li><strong className="text-slate-800">01:00 PM:</strong> Traditional Sri Lankan rice and curry lunch at a local scenic restaurant.</li>
                    <li><strong className="text-slate-800">04:30 PM:</strong> Sunset viewpoints photography and evening relaxation.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-teal-600 text-white font-bold text-xs rounded-lg">Day 02</span>
                    <h4 className="font-bold text-slate-800 text-base">Nature Trails & Cultural Immersion</h4>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 pl-4 list-disc">
                    <li><strong className="text-slate-800">07:00 AM:</strong> Early morning nature walk or wildlife safari session.</li>
                    <li><strong className="text-slate-800">11:00 AM:</strong> Visit local handicraft workshops and ancient temples.</li>
                    <li><strong className="text-slate-800">03:00 PM:</strong> Tea plantation visit and fresh Ceylon tea tasting experience.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center text-xs text-emerald-800 font-medium">
                💡 Tip: Book your entrance tickets and transport in advance through our partner services for a seamless trip!
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CostCalculator() {
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [budgetStyle, setBudgetStyle] = useState('mid'); // budget, mid, luxury

  // Rates per day per person in USD
  const rates = {
    budget: { hotel: 25, food: 15, transport: 20, activities: 15 },
    mid: { hotel: 70, food: 35, transport: 45, activities: 30 },
    luxury: { hotel: 180, food: 80, transport: 100, activities: 70 }
  };

  const currentRate = rates[budgetStyle];
  const dailyTotalPerPerson = currentRate.hotel + currentRate.food + currentRate.transport + currentRate.activities;
  const totalUSD = dailyTotalPerPerson * days * travelers;
  const totalLKR = totalUSD * 305; // Approximate exchange rate 1 USD = 305 LKR

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
          <Link href="/map" className="flex items-center gap-1.5 hover:text-emerald-600 transition">🗺️ Map</Link>
          <Link href="/calculator" className="text-emerald-600 font-semibold flex items-center gap-1.5 hover:text-emerald-600 transition">🧮 Cost Calculator</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition">Login</Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition">Register</Link>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4">
          🧮 Trip Budget Estimator
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
          Calculate Your <span className="text-emerald-600">Sri Lanka Trip Cost</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Customize your travel preferences below to instantly calculate an estimated breakdown of your expenses.
        </p>
      </div>

      {/* Main Calculator Container */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Controls Column */}
          <div className="space-y-6">
            
            {/* Days Slider / Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Trip Duration (Days)</label>
                <span className="text-emerald-600 font-bold text-sm">{days} Days</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Travelers Count */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Number of Travelers</label>
                <span className="text-emerald-600 font-bold text-sm">{travelers} Person(s)</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Budget Tier Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Travel Comfort Level</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setBudgetStyle('budget')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition ${
                    budgetStyle === 'budget' 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🎒 Budget
                </button>
                <button
                  type="button"
                  onClick={() => setBudgetStyle('mid')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition ${
                    budgetStyle === 'mid' 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  ⭐ Mid-Range
                </button>
                <button
                  type="button"
                  onClick={() => setBudgetStyle('luxury')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition ${
                    budgetStyle === 'luxury' 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  👑 Luxury
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500 leading-relaxed">
              ℹ️ Estimates include accommodation, three meals, local transport (tuktuk/private car), and entrance fees for attractions.
            </div>

          </div>

          {/* Results Column */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">Estimated Total Cost</span>
              <div className="mt-2 mb-6">
                <h3 className="text-3xl md:text-4xl font-black">${totalUSD.toLocaleString()} <span className="text-lg font-normal text-slate-400">USD</span></h3>
                <p className="text-xs text-slate-400 mt-1">≈ Rs. {totalLKR.toLocaleString()} LKR</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>🏨 Accommodation ({days} nights):</span>
                  <span className="font-bold">${(currentRate.hotel * days * travelers).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>🍽️ Food & Dining:</span>
                  <span className="font-bold">${(currentRate.food * days * travelers).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>🚗 Transport:</span>
                  <span className="font-bold">${(currentRate.transport * days * travelers).toLocaleString()}</span>
                </div>
                <div className="flex justify-none justify-between text-slate-300">
                  <span>🎫 Activities & Tickets:</span>
                  <span className="font-bold">${(currentRate.activities * days * travelers).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/ai-planner"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                ✨ Plan Custom Trip Based on Budget
              </Link>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
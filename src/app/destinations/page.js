'use client';
import { useState } from 'react';

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sri Lanka Provinces & Tourist Places Data with updated images
  const destinations = [
    // Western Province
    { id: 1, title: 'Galle Face Green', province: 'Western Province', district: 'Colombo District', desc: 'Popular ocean-side urban park in the heart of Colombo.', category: 'Beaches & Relaxation', rating: '4.7 (5.2k reviews)', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Gangaramaya Temple', province: 'Western Province', district: 'Colombo District', desc: 'One of the most important temples in Colombo featuring eclectic architecture.', category: 'History & Culture', rating: '4.6 (3.8k reviews)', image: 'https://images.unsplash.com/photo-1588599377076-d0a2e04dbac7?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Negombo Beach', province: 'Western Province', district: 'Gampaha District', desc: 'Famous golden sandy beach close to the international airport.', category: 'Beaches & Relaxation', rating: '4.5 (2.9k reviews)', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Negombo_Beach%2C_Sri_Lanka.jpg' }, // Added Negombo Beach photo[cite: 9]
    { id: 4, title: 'Brief Garden by Bevis Bawa', province: 'Western Province', district: 'Kalutara District', desc: 'Enchanting landscape garden created by renowned artist Bevis Bawa.', category: 'Mountains & Nature', rating: '4.8 (1.2k reviews)', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80' },

    // Central Province
    { id: 5, title: 'Sigiriya Rock Fortress', province: 'Central Province', district: 'Matale District', desc: 'Ancient palace and fortress with stunning frescoes and water gardens.', category: 'History & Culture', rating: '4.7 (3.1k reviews)', image: 'https://images.unsplash.com/photo-1578593141490-4488820f4b30?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Kandy Temple of Tooth', province: 'Central Province', district: 'Kandy District', desc: 'Sacred Buddhist temple situated around the scenic Kandy lake.', category: 'History & Culture', rating: '4.8 (3.9k reviews)', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Sri_Lanka_-_029_-_Kandy_Temple_of_the_Tooth.jpg' }, // Added Kandy Temple photo[cite: 5]
    { id: 7, title: 'Nuwara Eliya Tea Plantations', province: 'Central Province', district: 'Nuwara Eliya District', desc: 'Known as Little England, surrounded by misty hills and lush tea estates.', category: 'Mountains & Nature', rating: '4.9 (4.1k reviews)', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Tea_plantation_near_Kandy%2C_Sri_Lanka.jpg' }, // Added Nuwara Eliya Tea Plantations photo[cite: 8]
    { id: 8, title: 'Horton Plains & World\'s End', province: 'Central Province', district: 'Nuwara Eliya District', desc: 'Protected national park featuring a stunning cliff drop and waterfalls.', category: 'Adventure', rating: '4.8 (2.7k reviews)', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80' },

    // Southern Province
    { id: 9, title: 'Mirissa Beach', province: 'Southern Province', district: 'Matara District', desc: 'Famous for golden sands and world-class whale watching.', category: 'Beaches & Relaxation', rating: '4.8 (2.4k reviews)', image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Matara_Beach%2C_Sri_Lanka.jpg' }, // Added Matara Beach photo[cite: 7]
    { id: 10, title: 'Galle Fort', province: 'Southern Province', district: 'Galle District', desc: 'Historical colonial fort with cobblestone streets and ocean views.', category: 'History & Culture', rating: '4.6 (3.2k reviews)', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Galle_Beach%2C_Sri_Lanka.jpg' }, // Added Galle Beach/Fort photo[cite: 6]
    { id: 11, title: 'Yala National Park', province: 'Southern Province', district: 'Hambantota District', desc: 'Premier wildlife safari park famous for leopards and elephants.', category: 'Wildlife & Safaris', rating: '4.9 (4.8k reviews)', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80' },

    // Uva Province
    { id: 12, title: 'Ella', province: 'Uva Province', district: 'Badulla District', desc: 'Scenic hills, Nine Arch Bridge, tea plantations and breathtaking views.', category: 'Adventure', rating: '4.7 (2.6k reviews)', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80' },
    { id: 13, title: 'Diyaluma Falls', province: 'Uva Province', district: 'Badulla District', desc: 'Sri Lanka’s second highest waterfall with gorgeous natural swimming pools.', category: 'Adventure', rating: '4.9 (1.5k reviews)', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80' },

    // Northern Province
    { id: 14, title: 'Nallur Kandaswamy Temple', province: 'Northern Province', district: 'Jaffna District', desc: 'A magnificent and prominent Hindu temple with ornate gopurams.', category: 'History & Culture', rating: '4.8 (1.9k reviews)', image: 'https://images.unsplash.com/photo-1578593141490-4488820f4b30?auto=format&fit=crop&w=800&q=80' },
    { id: 15, title: 'Jaffna Fort', province: 'Northern Province', district: 'Jaffna District', desc: 'Historic colonial fortification built by the Portuguese and Dutch.', category: 'History & Culture', rating: '4.6 (1.1k reviews)', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80' },

    // Eastern Province
    { id: 16, title: 'Nilaveli Beach', province: 'Eastern Province', district: 'Trincomalee District', desc: 'Pristine white sand beach ideal for snorkeling and scuba diving.', category: 'Beaches & Relaxation', rating: '4.7 (2.1k reviews)', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80' },
    { id: 17, title: 'Arugam Bay', province: 'Eastern Province', district: 'Ampara District', desc: 'World-renowned surfing destination with vibrant beach culture.', category: 'Adventure', rating: '4.8 (3.0k reviews)', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80' },

    // North Western Province
    { id: 18, title: 'Wilpattu National Park', province: 'North Western Province', district: 'Puttalam District', desc: 'Largest national park known for its unique natural lakes (Willu) and leopards.', category: 'Wildlife & Safaris', rating: '4.8 (2.2k reviews)', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80' },
    { id: 19, title: 'Kalpitiya Peninsula', province: 'North Western Province', district: 'Puttalam District', desc: 'Famous hotspot for dolphin and whale watching, and kitesurfing.', category: 'Beaches & Relaxation', rating: '4.6 (1.4k reviews)', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80' },

    // North Central Province
    { id: 20, title: 'Anuradhapura Ancient City', province: 'North Central Province', district: 'Anuradhapura District', desc: 'UNESCO World Heritage site featuring ancient ruins, stupas, and Bodhi tree.', category: 'History & Culture', rating: '4.8 (3.5k reviews)', image: 'https://images.unsplash.com/photo-1578593141490-4488820f4b30?auto=format&fit=crop&w=800&q=80' },
    { id: 21, title: 'Polonnaruwa Archaeological Park', province: 'North Central Province', district: 'Polonnaruwa District', desc: 'Well-preserved medieval capital featuring royal palaces and stone shrines.', category: 'History & Culture', rating: '4.8 (2.9k reviews)', image: 'https://images.unsplash.com/photo-1578593141490-4488820f4b30?auto=format&fit=crop&w=800&q=80' },

    // Sabaragamuwa Province
    { id: 22, title: 'Adam\'s Peak (Sri Pada)', province: 'Sabaragamuwa Province', district: 'Ratnapura District', desc: 'Sacred mountain peak famous for the sacred footprint and sunrise hikes.', category: 'Adventure', rating: '4.9 (3.8k reviews)', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Adam%27s_Peak_-_February_2020_%2810%29.jpg' }, // Added Adam's Peak photo[cite: 10]
    { id: 23, title: 'Sinharaja Forest Reserve', province: 'Sabaragamuwa Province', district: 'Ratnapura / Galle District', desc: 'UNESCO biosphere tropical rainforest rich in endemic flora and fauna.', category: 'Mountains & Nature', rating: '4.8 (1.8k reviews)', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80' }
  ];

  const categories = ['All', 'Beaches & Relaxation', 'Mountains & Nature', 'Wildlife & Safaris', 'History & Culture', 'Adventure'];

  const filteredDestinations = destinations.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    
    const matchesLocationDropdown = selectedLocation === 'All' || 
      item.province.toLowerCase().includes(selectedLocation.toLowerCase()) || 
      item.district.toLowerCase().includes(selectedLocation.toLowerCase());

    const query = searchQuery.toLowerCase().trim();
    const matchesSearchInput = query === '' || 
      item.title.toLowerCase().includes(query) ||
      item.province.toLowerCase().includes(query) ||
      item.district.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesCategory && matchesLocationDropdown && matchesSearchInput;
  });

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
          <a href="/" className="hover:text-emerald-600 transition">🏠 Home</a>
          <a href="/destinations" className="text-emerald-600 font-semibold pb-1 border-b-2 border-emerald-600">📍 Destinations</a>
          <a href="/ai-planner" className="hover:text-emerald-600 transition">✨ AI Planner</a>
          <a href="/map" className="hover:text-emerald-600 transition">🗺️ Map</a>
          <a href="/calculator" className="hover:text-emerald-600 transition">🧮 Cost Calculator</a>
        </div>

        <div className="flex items-center space-x-3">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition text-sm">
            ✨ Register
          </button>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <header className="relative bg-emerald-900 text-white py-20 px-6 mx-6 mt-6 rounded-3xl shadow-xl" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-emerald-300 font-medium italic text-lg mb-2">Discover Amazing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Sri Lanka <span className="text-emerald-400">Destinations</span>
          </h2>
          <p className="text-slate-200 text-sm md:text-base mb-8 max-w-xl">
            Explore all 9 provinces and the most beautiful tourist places in Sri Lanka.
          </p>

          {/* Search Filter Box inside Banner */}
          <div className="bg-white text-slate-800 rounded-2xl p-4 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative z-20">
            
            {/* Province / Location Selector Dropdown */}
            <div className="relative p-2 border-b md:border-b-0 md:border-r border-slate-200 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="block text-[10px] font-bold text-slate-400 uppercase">Select Province / Place</span>
              <div className="font-semibold text-sm text-slate-700 flex justify-between items-center mt-0.5">
                <span className="truncate">{selectedLocation === 'All' ? 'Select Location' : selectedLocation}</span>
                <span className="text-xs text-slate-400">{isDropdownOpen ? '▲' : '▼'}</span>
              </div>

              {/* Dropdown Menu Modal */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 text-slate-800">
                  <div className="max-h-72 overflow-y-auto space-y-1 text-xs">
                    <div 
                      onClick={() => { setSelectedLocation('All'); setIsDropdownOpen(false); }}
                      className="p-2 hover:bg-emerald-50 rounded-xl font-semibold cursor-pointer text-emerald-600"
                    >
                      🌐 All Locations
                    </div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Western Province</div>
                    <div onClick={() => { setSelectedLocation('Western Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Western Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Colombo District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Colombo District</div>
                    <div onClick={() => { setSelectedLocation('Gampaha District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Gampaha District</div>
                    <div onClick={() => { setSelectedLocation('Kalutara District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Kalutara District</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Central Province</div>
                    <div onClick={() => { setSelectedLocation('Central Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Central Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Kandy District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Kandy District</div>
                    <div onClick={() => { setSelectedLocation('Matale District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Matale District</div>
                    <div onClick={() => { setSelectedLocation('Nuwara Eliya District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Nuwara Eliya District</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Southern Province</div>
                    <div onClick={() => { setSelectedLocation('Southern Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Southern Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Galle District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Galle District</div>
                    <div onClick={() => { setSelectedLocation('Matara District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Matara District</div>
                    <div onClick={() => { setSelectedLocation('Hambantota District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Hambantota District</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Uva Province</div>
                    <div onClick={() => { setSelectedLocation('Uva Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Uva Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Badulla District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Badulla & Ella</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Northern Province</div>
                    <div onClick={() => { setSelectedLocation('Northern Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Northern Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Jaffna District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Jaffna District</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Eastern Province</div>
                    <div onClick={() => { setSelectedLocation('Eastern Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Eastern Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Trincomalee District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Trincomalee District</div>
                    <div onClick={() => { setSelectedLocation('Ampara District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Ampara & Arugam Bay</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">North Western Province</div>
                    <div onClick={() => { setSelectedLocation('North Western Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 North Western Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Puttalam District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Puttalam & Wilpattu</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">North Central Province</div>
                    <div onClick={() => { setSelectedLocation('North Central Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 North Central Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Anuradhapura District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Anuradhapura</div>
                    <div onClick={() => { setSelectedLocation('Polonnaruwa District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Polonnaruwa</div>

                    <div className="font-bold text-slate-400 uppercase text-[10px] px-2 pt-2">Sabaragamuwa Province</div>
                    <div onClick={() => { setSelectedLocation('Sabaragamuwa Province'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-4">📍 Sabaragamuwa Province (All)</div>
                    <div onClick={() => { setSelectedLocation('Ratnapura District'); setIsDropdownOpen(false); }} className="p-2 hover:bg-emerald-50 rounded-xl cursor-pointer pl-6 text-slate-600">🔹 Ratnapura & Adam's Peak</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Direct Search Input Field */}
            <div className="p-2 border-b md:border-b-0 border-slate-200">
              <span className="block text-[10px] font-bold text-slate-400 uppercase">Search Place / Keyword</span>
              <div className="mt-0.5">
                <input 
                  type="text"
                  placeholder="Type place name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm font-semibold text-slate-700 bg-transparent focus:outline-none placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>
            
            <div>
              <button 
                onClick={() => { setSelectedLocation('All'); setSelectedCategory('All'); setSearchQuery(''); }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
              >
                🔍 Reset Filter
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter Pills */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm transition flex items-center gap-2 ${selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
            >
              <span>{cat === 'All' ? '🗂️' : '🌴'}</span> {cat}
            </button>
          ))}
        </div>
        <button onClick={() => { setSelectedCategory('All'); setSelectedLocation('All'); setSearchQuery(''); }} className="text-xs font-bold text-emerald-600 hover:underline">View All Destinations →</button>
      </div>

      {/* Destinations Grid Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-sm mb-2">No destinations found for this search.</p>
            <button onClick={() => { setSelectedCategory('All'); setSelectedLocation('All'); setSearchQuery(''); }} className="text-emerald-600 font-bold text-xs underline">Clear filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredDestinations.map((place) => (
              <div key={place.id} className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition group">
                <div className="h-52 relative overflow-hidden">
                  <img src={place.image} alt={place.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    🌴 {place.category}
                  </span>
                  <span className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-rose-500 shadow-md cursor-pointer hover:bg-white">
                    ❤️
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition">{place.title}</h4>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">⭐ {place.rating}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-6 line-clamp-2">{place.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      📍 {place.district}, {place.province}
                    </span>
                    <button className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl hover:bg-emerald-100 transition">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
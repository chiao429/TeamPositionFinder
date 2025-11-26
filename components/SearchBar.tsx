'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear?: () => void;
}

export default function SearchBar({ onSearch, onClear }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear?.();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="請輸入座位號碼..."
          className="w-full px-6 py-4 pr-44 text-lg border-2 border-xmas-gold-400/30 rounded-2xl 
                     bg-xmas-deepGreen-600/80 backdrop-blur-sm text-white placeholder-xmas-gold-200/60
                     focus:outline-none focus:border-xmas-gold-400 focus:ring-4 focus:ring-xmas-gold-400/20
                     transition-all duration-200 shadow-lg"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-32 p-2 text-xmas-gold-200 hover:text-white hover:bg-xmas-deepRed-500/50 rounded-lg
                       active:scale-95 transition-all duration-200"
          >
            <X size={20} />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-2 px-6 py-2.5 bg-xmas-deepRed-500 text-xmas-gold-100 rounded-xl
                     hover:bg-xmas-deepRed-600 active:scale-95 transition-all duration-200
                     flex items-center gap-2 font-medium shadow-lg hover:shadow-xl border border-xmas-gold-500/30"
        >
          <Search size={20} />
          搜尋
        </button>
      </div>
    </form>
  );
}

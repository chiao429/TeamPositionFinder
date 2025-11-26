'use client';

import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import PreschoolSeatMap from '@/components/PreschoolSeatMap';
import TeamInfo from '@/components/TeamInfo';
import { Team } from '@/types/team';
import preschoolTeams from '@/data/preschool-teams.json';

export default function PreschoolPage() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [highlightedSeats, setHighlightedSeats] = useState<string[]>([]);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSelectedTeam(null);
      setHighlightedSeats([]);
      setNotFound(false);
      return;
    }

    const searchQuery = query.toLowerCase().trim();

    const team = preschoolTeams.find((t) => {
      if (t.team_name.toLowerCase().includes(searchQuery)) {
        return true;
      }

      return t.positions.some((pos) => {
        const posLower = pos.toLowerCase();
        if (posLower.includes(searchQuery)) {
          return true;
        }
        if (posLower.replace('d', '') === searchQuery) {
          return true;
        }
        return false;
      });
    });

    if (team) {
      setSelectedTeam(team);
      setHighlightedSeats(team.positions);
      setNotFound(false);
    } else {
      setSelectedTeam(null);
      setHighlightedSeats([]);
      setNotFound(true);
    }
  };

  const handleSeatClick = (seatId: string) => {
    const team = preschoolTeams.find((t) => t.positions.includes(seatId));

    if (team) {
      if (selectedTeam?.team_name === team.team_name) {
        setSelectedTeam(null);
        setHighlightedSeats([]);
        setNotFound(false);
      } else {
        setSelectedTeam(team);
        setHighlightedSeats(team.positions);
        setNotFound(false);
      }
    } else {
      setSelectedTeam(null);
      setHighlightedSeats([]);
      setNotFound(false);
    }
  };

  const handleClear = () => {
    setSelectedTeam(null);
    setHighlightedSeats([]);
    setNotFound(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-xmas-deepGreen-800 via-xmas-deepGreen-700 to-xmas-deepRed-800 py-2 md:py-4 px-2 md:px-3">
      <div className="max-w-7xl mx-auto space-y-2 md:space-y-3">
        {/* Header */}
        <div className="text-center space-y-0.5 md:space-y-1">
          <h1 className="text-xl md:text-3xl font-bold text-xmas-gold-200 tracking-tight drop-shadow-lg">
            學齡前小隊查詢
          </h1>
          <p className="text-xs md:text-sm text-xmas-gold-100">
            輸入小隊，快速查詢隊伍位置及隊長資訊
          </p>
        </div>

        {/* Tabs: 國小 / 學齡前 */}
        <div className="flex justify-center gap-2 md:gap-3 pt-1 md:pt-2">
          <a
            href="/"
            className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold
                       border border-xmas-gold-400/60 text-xmas-gold-200/80 hover:text-white hover:border-xmas-gold-300
                       hover:bg-xmas-deepGreen-700/60 transition-colors duration-200"
          >
            國小
          </a>
          <div
            className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold
                       bg-xmas-gold-400 text-xmas-deepRed-700 shadow-md"
          >
            學齡前
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} onClear={handleClear} />

        {/* Team Info */}
        <TeamInfo team={selectedTeam} notFound={notFound} />

        {/* Seat Map */}
        <PreschoolSeatMap highlightedSeats={highlightedSeats} onSeatClick={handleSeatClick} />

        {/* Footer */}
        <div className="text-center text-xs md:text-sm text-xmas-gold-200 pt-1 md:pt-2 px-2">
          <p>⭐ 提示：輸入小隊(如「001」、「010」)或直接點擊小隊查詢隊長資訊</p>
        </div>
      </div>
    </main>
  );
}

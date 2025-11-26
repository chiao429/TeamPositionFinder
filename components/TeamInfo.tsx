'use client';

import React from 'react';
import { Team } from '@/types/team';
import { Users, MapPin, Crown } from 'lucide-react';

interface TeamInfoProps {
  team: Team | null;
  notFound: boolean;
}

export default function TeamInfo({ team, notFound }: TeamInfoProps) {
  if (notFound) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 bg-xmas-deepRed-700/60 backdrop-blur-sm border-2 border-xmas-gold-400/30 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3 text-xmas-gold-200">
          <div className="text-3xl">🔍</div>
          <div>
            <h3 className="font-bold text-lg text-white">查無此小隊</h3>
            <p className="text-sm text-xmas-gold-100">請確認小隊編號是否正確</p>
          </div>
        </div>
      </div>
    );
  }

  if (!team) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-3 md:p-5 bg-xmas-deepGreen-700/70 backdrop-blur-md
                    border-2 border-xmas-gold-400/40 rounded-2xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
        <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-start">
          <div className="p-2 md:p-3 bg-xmas-deepRed-600/80 backdrop-blur-sm rounded-2xl border border-xmas-gold-400/30 shadow-lg">
            <MapPin className="text-xmas-gold-200" size={32} />
          </div>
          <div className="text-center md:text-left">
            <div className="text-xs md:text-sm text-xmas-gold-200 font-medium mb-1 md:mb-2">小隊編號</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{team.team_name}</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-br from-xmas-warmYellow-300 to-xmas-gold-400 rounded-2xl shadow-xl border-2 border-xmas-gold-500 w-full md:w-auto justify-center">
          <Crown className="text-xmas-deepRed-700" size={28} />
          <div>
            <div className="text-xs text-xmas-deepRed-700 font-bold mb-1">隊長</div>
            <div className="text-xl md:text-2xl font-bold text-xmas-deepRed-800">{team.leader}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

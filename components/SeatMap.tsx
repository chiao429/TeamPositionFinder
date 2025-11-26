'use client';

import React from 'react';
import { SeatPosition } from '@/types/team';

interface SeatMapProps {
  highlightedSeats: string[];
  onSeatClick?: (seatId: string) => void;
}

export default function SeatMap({ highlightedSeats, onSeatClick }: SeatMapProps) {
  // 定義座位佈局 - 根據您的座位圖設計
  const seatLayout: SeatPosition[][] = [
    // 第一排 (最下方)
    [
      { id: 'S111', row: 0, col: 0, label: 'S111' },
      { id: 'S112', row: 0, col: 1, label: 'S112' },
      { id: 'S113', row: 0, col: 2, label: 'S113' },
      { id: 'S114', row: 0, col: 3, label: 'S114' },
      { id: 'S115', row: 0, col: 4, label: 'S115' },
      { id: 'S116', row: 0, col: 5, label: 'S116' },
    ],
    // 第二排
    [
      { id: 'S222', row: 1, col: 0, label: 'S222' },
      { id: 'S221', row: 1, col: 1, label: 'S221' },
      { id: 'S220', row: 1, col: 2, label: 'S220' },
      { id: 'S219', row: 1, col: 3, label: 'S219' },
      { id: 'S218', row: 1, col: 4, label: 'S218' },
      { id: 'S117', row: 1, col: 5, label: 'S117' },
    ],
    // 第三排
    [
      { id: 'S223', row: 2, col: 0, label: 'S223' },
      { id: 'S224', row: 2, col: 1, label: 'S224' },
      { id: 'S325', row: 2, col: 2, label: 'S325' },
      { id: 'S326', row: 2, col: 3, label: 'S326' },
      { id: 'S327', row: 2, col: 4, label: 'S327' },
      { id: 'S328', row: 2, col: 5, label: 'S328' },
    ],
    // 第四排
    [
      { id: 'S534', row: 3, col: 0, label: 'S534' },
      { id: 'S533', row: 3, col: 1, label: 'S533' },
      { id: 'S432', row: 3, col: 2, label: 'S432' },
      { id: 'S431', row: 3, col: 3, label: 'S431' },
      { id: 'S430', row: 3, col: 4, label: 'S430' },
      { id: 'S429', row: 3, col: 5, label: 'S429' },
    ],
    // 第五排 (最上方)
    [
      { id: '', row: 4, col: 0, label: '' },
      { id: '', row: 4, col: 1, label: '' },
      { id: '', row: 4, col: 2, label: '' },
      { id: 'S535', row: 4, col: 3, label: 'S535' },
      { id: 'S636', row: 4, col: 4, label: 'S636' },
      { id: 'S637', row: 4, col: 5, label: 'S637' },
    ],
  ];

  const isHighlighted = (seatId: string) => highlightedSeats.includes(seatId);

  return (
    <div className="w-full max-w-2xl mx-auto py-2 md:py-3 bg-xmas-deepGreen-800/60 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-xmas-gold-400/30">
      <div className="mb-2 md:mb-3 text-center">
        <div className="inline-block px-2 md:px-4 py-1 md:py-1.5 bg-xmas-deepRed-600/80 backdrop-blur-sm rounded-xl text-xmas-gold-100 text-xs md:text-sm font-bold shadow-xl border border-xmas-gold-400/40">
          📍 報到桌 ↑
        </div>
      </div>
      
      <div className="space-y-1 md:space-y-1.5">
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2 md:gap-3">
            {row.map((seat) => {
              // 空座位不顯示
              if (!seat.id) {
                return (
                  <div
                    key={`empty-${seat.row}-${seat.col}`}
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                );
              }
              
              return (
                <div
                  key={seat.id}
                  onClick={() => onSeatClick?.(seat.id)}
                  className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl flex flex-col items-center justify-center
                    transition-all duration-500 cursor-pointer backdrop-blur-sm
                    ${
                      isHighlighted(seat.id)
                        ? 'bg-xmas-deepRed-600/90 text-white shadow-2xl scale-110 ring-2 md:ring-4 ring-xmas-gold-400/50 border-2 border-xmas-gold-400 shadow-xmas-gold-400/50'
                        : 'bg-xmas-deepGreen-600/70 text-white active:bg-xmas-deepGreen-500/80 border border-xmas-gold-400/20 active:border-xmas-gold-400/40 shadow-lg'
                    }
                  `}
                >
                  <div className="text-xs md:text-sm font-medium opacity-70">小隊</div>
                  <div className={`font-bold ${isHighlighted(seat.id) ? 'text-lg md:text-2xl text-xmas-gold-100' : 'text-sm md:text-lg'}`}>{seat.label}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-2 md:mt-3 flex justify-center gap-2 md:gap-4 text-xs md:text-sm">
        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-xmas-deepGreen-600/70 border border-xmas-gold-400/20 rounded-lg backdrop-blur-sm"></div>
          <span className="text-xmas-gold-200 font-medium">一般小隊</span>
        </div>
        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-xmas-deepRed-600/90 rounded-lg border-2 border-xmas-gold-400 shadow-lg shadow-xmas-gold-400/30"></div>
          <span className="text-xmas-gold-200 font-medium">已選小隊</span>
        </div>
      </div>
    </div>
  );
}

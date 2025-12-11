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
    // 第一排 (最下方)  S108 → S212 → S316 → S420 → S624
    [
      { id: 'S108', row: 0, col: 0, label: 'S108' },
      { id: 'S212', row: 0, col: 1, label: 'S212' },
      { id: 'S316', row: 0, col: 2, label: 'S316' },
      { id: 'S420', row: 0, col: 3, label: 'S420' },
      { id: 'S624', row: 0, col: 4, label: 'S624' },
    ],
    // 第二排          S109 → S213 → S317 → S421 → S625
    [
      { id: 'S109', row: 1, col: 0, label: 'S109' },
      { id: 'S213', row: 1, col: 1, label: 'S213' },
      { id: 'S317', row: 1, col: 2, label: 'S317' },
      { id: 'S421', row: 1, col: 3, label: 'S421' },
      { id: 'S625', row: 1, col: 4, label: 'S625' },
    ],
    // 第三排          S110 → S214 → S318 → S522 → 空
    [
      { id: 'S110', row: 2, col: 0, label: 'S110' },
      { id: 'S214', row: 2, col: 1, label: 'S214' },
      { id: 'S318', row: 2, col: 2, label: 'S318' },
      { id: 'S522', row: 2, col: 3, label: 'S522' },
      { id: '', row: 2, col: 4, label: '' },
    ],
    // 第四排 (最上方)  S111 → S215 → S419 → S523 → 空
    [
      { id: 'S111', row: 3, col: 0, label: 'S111' },
      { id: 'S215', row: 3, col: 1, label: 'S215' },
      { id: 'S419', row: 3, col: 2, label: 'S419' },
      { id: 'S523', row: 3, col: 3, label: 'S523' },
      { id: '', row: 3, col: 4, label: '' },
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
          <span className="text-xmas-gold-200 font-medium">未選小隊</span>
        </div>
        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-xmas-deepRed-600/90 rounded-lg border-2 border-xmas-gold-400 shadow-lg shadow-xmas-gold-400/30"></div>
          <span className="text-xmas-gold-200 font-medium">已選小隊</span>
        </div>
      </div>
    </div>
  );
}

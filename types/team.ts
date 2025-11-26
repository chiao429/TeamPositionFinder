export interface Team {
  team_name: string;
  positions: string[];
  leader: string;
}

export interface SeatPosition {
  id: string;
  row: number;
  col: number;
  label: string;
}

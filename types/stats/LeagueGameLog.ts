export default interface LeagueGameLog {
  resource: string;
  parameters: Parameters;
  resultSets?: (ResultSetsEntity)[] | null;
}
export interface Parameters {
  LeagueID: string;
  Season: string;
  SeasonType: string;
  PlayerOrTeam: string;
  Counter: number;
  Sorter: string;
  Direction: string;
  DateFrom?: null;
  DateTo?: null;
}
export interface ResultSetsEntity {
  name: string;
  headers?: (string)[] | null;
  rowSet?: ((string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number | string | number)[] | null)[] | null;
}

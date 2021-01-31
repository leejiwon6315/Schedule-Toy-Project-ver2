export interface IData {
  id: number;
  name: string;
  place?: string;
  schedule: ISchedule[];
}
export interface ISchedule {
  index: number;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

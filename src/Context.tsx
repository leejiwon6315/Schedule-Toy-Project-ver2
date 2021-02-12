export type IInput = {
  name: string;
  place: string;
};

export type ISchedule = {
  index: number;
  date: number;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
};

export type Schedule = Array<ISchedule>;

export type IData = {
  id: number;
  name: string;
  place: string;
  schedule: Schedule;
};

export type AllData = Array<IData>;

export type DataProps = {
  addData: Function;
  allData: AllData;
};

// type Action =
//   | { type: "ADD_SCHEDULE"; data: AllData }
//   | { type: "REMOVE_SCHEDULE"; id: number; index: number };

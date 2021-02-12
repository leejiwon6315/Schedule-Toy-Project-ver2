import ScheduleItem from "./ScheduleItem";
import style from "./ScheduleStyle.module.scss";
import { AllData } from "../../Context";

interface Props {
  allData: AllData;
  removeData: Function;
}

const ScheduleList: React.FC<Props> = ({ allData, removeData }) => {
  return (
    <div className={style.schedule_list}>
      {allData.map((item) =>
        item.schedule.map((scheduleItem) => (
          <ScheduleItem
            id={item.id}
            name={item.name}
            place={item.place}
            {...scheduleItem}
            key={scheduleItem.index}
            removeData={removeData}
          />
        ))
      )}
    </div>
  );
};

export default ScheduleList;

import { useRef, useState } from "react";
import { IData } from "./Components/dataBundle";
import style from "./App.module.scss";

function App() {
  const [allData, setAllData] = useState<IData[]>([]);
  const nextId = useRef<number>(1);

  return (
    <div className="App">
      <div className={style.time_line_wrapper}></div>
    </div>
  );
}

export default App;

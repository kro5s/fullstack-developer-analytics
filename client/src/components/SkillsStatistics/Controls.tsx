import styles from "./SkillsStatistics.module.css";
import {Dispatch, SetStateAction} from "react";
import {ISkillsStatistics} from "../../types/types.ts";

interface Props {
  currentYear: number;
  setCurrentYear: Dispatch<SetStateAction<number>>;
  data: ISkillsStatistics[];
}

function Controls({currentYear, setCurrentYear, data}: Props) {
  function handlePrevYear() {
    if (currentYear === 0) return;

    setCurrentYear(prev => prev - 1);
  }

  function handleNextYear() {
    if (currentYear === data.length - 1) return;

    setCurrentYear(prev => prev + 1)
  }

  return (
    <div className={styles.controls}>
      <button onClick={handlePrevYear}>≪</button>
      <span>{data[currentYear].year}</span>
      <button onClick={handleNextYear}>≫</button>
    </div>
  );
}

export default Controls;

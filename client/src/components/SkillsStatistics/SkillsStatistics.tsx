import styles from "./SkillsStatistics.module.css";
import AnalyticsTable from "../AnalyticsTable/AnalyticsTable.tsx";
import {ISkillsStatistics} from "../../types/types.ts";
import {prepareSkillsGraphicData, prepareTableData} from "../../utils/utils.ts";
import AnalyticsBar from "../AnalyticsBar/AnalyticsBar.tsx";
import Controls from "./Controls.tsx";
import {useState} from "react";

interface Props {
  data: ISkillsStatistics[];
}

function SkillsStatistics({data}: Props) {
  const [currentYear, setCurrentYear] = useState(data.length - 1)

  const tableData = data.map(item => {
    return {
      year: item.year,
      data: item.skills.map((skill) => skill.skill).join(", ")
    }
  })

  return (
    <section className="analytics">
      <h2 className="title-xl">Самые востребованные навыки по годам: Все профессии</h2>
      <div className={styles.container}>
        <AnalyticsBar data={prepareSkillsGraphicData(data[currentYear])} />

        <Controls data={data} currentYear={currentYear} setCurrentYear={setCurrentYear} />

        <AnalyticsTable
          className={styles.table}
          columns="max-content 1fr"
          data={
            prepareTableData(
              ["Год", "Навыки (в порядке убывания популярности)"],
              tableData.reverse()
            )
          }
        />
      </div>
    </section>
  );
}

export default SkillsStatistics;

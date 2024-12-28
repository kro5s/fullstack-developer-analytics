import styles from "./AnalyticsTable.module.css";
import classNames from "classnames";

interface Props {
  data: (string | number)[][]
}

function AnalyticsTable({data}: Props) {
  return (
    <div className={styles.grid} style={{
      gridTemplateColumns: `repeat(${data[0].length}, max-content)`
    }}>
      {
        data[0].map((key, i) => (
          <div
            key={i}
            className={classNames(styles.cell, styles.highlighted)}
          >
            {key}
          </div>
        ))
      }
      {
        data.slice(1).map(row => row.map((cell, i) => (
          <div
            key={i}
            className={styles.cell}
          >
            {cell}
          </div>
        )))
      }
    </div>
  );
}

export default AnalyticsTable;

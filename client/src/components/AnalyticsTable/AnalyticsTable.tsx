import styles from "./AnalyticsTable.module.css";
import classNames from "classnames";

interface Props {
  data: (string | number)[][];
  className?: string;
  columns?: string;
}

function AnalyticsTable({data, className, columns}: Props) {
  const classes = classNames(styles.grid, {
    [String(className)]: className
  })

  return (
    <div
      className={classes}
      style={
        {
          gridTemplateColumns: !columns ? `max-content repeat(${data[0].length - 1}, min-content)` : columns
        }
      }
    >
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

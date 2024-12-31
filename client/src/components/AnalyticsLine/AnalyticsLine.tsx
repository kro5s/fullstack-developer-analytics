import styles from "./AnalyticsLine.module.css";
import {Line} from "react-chartjs-2";
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: (string | number)[][];
}

function AnalyticsLine({data}: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const graphicData = {
    labels: data.map(row => row[0]),
    datasets: [
      {
        data: data.map(row => row[1]),
        borderColor: '#2C3E50',
        backgroundColor: '#2C3E50',
      },
    ],
  };

  return (
    <div className={styles.graphic}>
      <Line options={options} data={graphicData}/>
    </div>
  );
}

export default AnalyticsLine;

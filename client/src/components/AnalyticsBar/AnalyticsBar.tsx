import styles from "./AnalyticsBar.module.css";
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: (string | number)[][];
}

function AnalyticsBar({ data }: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const analyticsData = {
    labels: data.map(row => row[0]),
    datasets: [
      {
        data: data.map(row => row[1]),
        backgroundColor: '#F1C40F',
      }
    ],
  };

  return (
    <div className={styles.graphic}>
      <Bar data={analyticsData} options={options} />
    </div>
  );
}

export default AnalyticsBar;

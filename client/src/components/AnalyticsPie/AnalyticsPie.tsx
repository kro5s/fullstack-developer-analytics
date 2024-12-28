import styles from "./AnalyticsPie.module.css";
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

interface Props {
  data: (string | number)[][];
}

ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticsPie({ data }: Props) {
  const analyticsData = {
    labels: data.slice(1).map(row => row[0]),
    datasets: [
      {
        label: '% всех вакансий',
        data: data.slice(1).map(row => row[1]),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.graphic}>
      <Pie data={analyticsData} />
    </div>
  );
}

export default AnalyticsPie;

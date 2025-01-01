import styles from "./AnalyticsPie.module.css";
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chroma from "chroma-js";

interface Props {
  data: (string | number)[][];
}

ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticsPie({ data }: Props) {
  const colorScale = chroma.scale('Set3').mode('lab').colors(data.length);
  const values = data.map(row => row[1]);
  const rest = 100 - values.reduce((acc: number, item) => acc + Number(item), 0);

  const analyticsData = {
    labels: [...data.map(row => row[0]), "Остальные города"],
    datasets: [
      {
        label: '% всех вакансий',
        data: [...values, rest],
        backgroundColor: [...colorScale, "#dddddd"],
        borderColor: [
          ...colorScale.map(color => chroma(color).darken(0.5).hex()),
          chroma("#dddddd").darken(0.5).hex()
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.graphic}>
      <Pie data={analyticsData} options={{responsive: true}}/>
    </div>
  );
}

export default AnalyticsPie;

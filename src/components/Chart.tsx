import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useSelector } from "react-redux";
import { getMonthlyBillAmount } from "../util";
import { monthList } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const billInfo = useSelector((bills) => bills);

  const chartData = {
    labels: monthList.map((month) => month.name),
    datasets: [
      {
        label: "Amount",
        data: getMonthlyBillAmount(billInfo),
        backgroundColor: "blue"
      }
    ]
  };
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Monthly Bill Report</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Data shows Total Bill Amount per month"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ChartsPanel() {
  useEffect(() => {}, []);

  const barData = {
    labels: ["Kino", "Origins", "Mob", "Buried", "Die Rise"],
    datasets: [
      {
        label: "Active Players",
        data: [14, 22, 9, 12, 18],
        backgroundColor: [
          "rgba(251, 146, 60, 0.6)",
          "rgba(245, 158, 11, 0.6)",
          "rgba(253, 186, 116, 0.6)",
          "rgba(234, 179, 8, 0.6)",
          "rgba(217, 119, 6, 0.6)",
        ],
        borderColor: "rgba(250, 204, 21, 0.9)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["10m", "20m", "30m", "40m", "50m", "60m"],
    datasets: [
      {
        label: "Peak Players",
        data: [40, 58, 72, 64, 88, 91],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.25)",
        tension: 0.35,
        pointRadius: 2,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: { color: "#fef3c7" },
      },
    },
    scales: {
      x: { ticks: { color: "#f59e0b" }, grid: { color: "rgba(245,158,11,0.1)" } },
      y: { ticks: { color: "#f59e0b" }, grid: { color: "rgba(245,158,11,0.1)" } },
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-amber-500/20 bg-black/40 p-4 backdrop-blur"
      >
        <div className="text-sm font-semibold text-amber-200 mb-2">Players by Map</div>
        <Bar data={barData} options={options} height={140} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-amber-500/20 bg-black/40 p-4 backdrop-blur"
      >
        <div className="text-sm font-semibold text-amber-200 mb-2">Live Peak</div>
        <Line data={lineData} options={options} height={140} />
      </motion.div>
    </div>
  );
}

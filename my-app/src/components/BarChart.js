import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false
    },
  },
};

export function BarChart() {
  const [conditionData, setConditionData] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      axios
        .get(`http://localhost:4000/view/get-conditions`)
        .then(({ data }) => {
            let initdata = [];
            let labels = [];

            (data.data).map((item) => {
              initdata.push(item.Price)
              labels.push(item.Condition)
              return ({
                Price: item.Price,
                Condition: item.Condition
              });
            })

            const bardata = {
              labels,
              datasets: [
                {
                  label: 'Price',
                  data: initdata,
                  backgroundColor: '#0095A0',
                  barPercentage: 0.2
                },
              ],
            };

        setConditionData(bardata)
        setLoaded(true);
      });
  }, [])

  return (
    <>
      {conditionData && loaded && (
        <Bar options={options} data={conditionData} />
      )}
    </>
  )
}

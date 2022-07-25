import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
            font: {
                size: 20
            }
        }
      },
    },
};

export function PieChart() {
  const [sourceData, setSourceData] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      axios
        .get(`http://localhost:4000/view/get-sources`)
        .then(({ data }) => {
            let initdata = [];
            let labels = [];

            (data.data).map((item) => {
              initdata.push(item.Percentage)
              labels.push(item.Source)
              return ({
                Source: item.Source,
                Percentage: item.Percentage
              });
            })

            let customLabels = labels.map((label,index) =>`${label}: ${initdata[index]}%`)

            const piedata = {
              labels: customLabels,
              datasets: [
                {
                  label: 'Percentage',
                  data: initdata,
                  backgroundColor: [
                    '#84AF27',
                    '#0095A0',
                    '#FFC239',
                  ],
                  borderColor: [
                    '#84AF27',
                    '#0095A0',
                    '#FFC239',
                  ],
                  borderWidth: 1,
                },
              ],
            };

        setSourceData(piedata)
        setLoaded(true);
      });
  }, [])

  return (
    <>
      {sourceData && loaded && (
        <Pie options={options} data={sourceData} />
      )}
    </>
  )
}

export default PieChart;
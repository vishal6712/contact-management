import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
chartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale,LinearScale,PointElement)


const ChartsAndMaps = () =>
{
  const [casesData, setCasesData] = useState(null
    // {
        //     labels:["jan","feb","march","april","may","june","july"],
        //     datasets:[{
        //         label:"Cases",
        //         data:[10,20,30,42,51,82,31],
        //         backgroundColor:'green',
        //         borderColor:'yellow',
        //         tension:0.4,
        // }
    );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const data = await response.json();
        setCasesData(data.cases);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!casesData) {
    return <div>Wait Loading...</div>;
  }

  const chartData = {
    labels: Object.keys(casesData),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(casesData),
        backgroundColor:'green',
        borderColor:'yellow',
        tension:0.4,
      },
    ],
  };

  return (
    <div>
        <h1 className="page_name">Charts And Maps</h1>
        <h2 className="heading1">Corona Cases Chart :</h2>
      <Line data={chartData}></Line>
    </div>
  );
}

export default ChartsAndMaps;

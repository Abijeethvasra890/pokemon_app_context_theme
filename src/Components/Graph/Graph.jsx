import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../Graph/Graph.css'
import ThemeContext from '@/context/ThemeContext';

const Graph = ({ data }) => {
    //console.log(data);
  // Extract labels and data values from the provided stats
  const labels = data.stats.map(item => item.stat.name);
  const values = data.stats.map(item => item.base_stat);
    //console.log(labels);
   // console.log(values);

  // Define chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Base Stats',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: values,
      },
    ],
  };

  const {darkMode} = useContext(ThemeContext);
  const colorr = darkMode ? 'white' : 'black';

  return (
    <div className='graph-container'>
        <div className='graph'>
        <Bar
            data={chartData}
            options={{
            scales: {
                x: {
                    color: colorr,
                    title: {
                        display: true,
                        text: 'Stats',
                        color: colorr
                    },
                    ticks:{
                        color: colorr
                    },
                    
                },
                y: {
                    title: {
                        display: true,
                        text: 'Points',
                        color: colorr
                    },
                    ticks: {
                        beginAtZero: true,
                        color: colorr
                    },
                    
                },
                
            },
            }}
        />
        </div>
    </div>
  );
};

export default Graph;

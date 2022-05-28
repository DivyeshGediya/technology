import React from 'react';
import { Pie } from 'react-chartjs-2';
// import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
// Chart.register(CategoryScale);
// Chart.defaults.font.size=25;
Chart.defaults.color = 'black';
type dataBarType ={
  labels:string[];
  datasets : {
    label:string;
    backgroundColor:string[];
    data:number[]
  }[];
}
const dataBar:dataBarType = {
  labels: ['Android', 'Windows', 'iOS', 'OS X', 'Linux', 'Chrome OS', 'Other'],
  datasets: [
    {
      label: 'Opreting Syatem',
      backgroundColor: [
        'green',
        'skyblue',
        'orange',
        'black',
        'yellow',
        'red',
        'tan',
      ],
      data: [40.39, 32.34, 16.51, 7.13, 0.85, 0.85, 1.93],
    },
  ],
};

const Demo = () => {
  return (
    <div className="chart">
      <div data-aos="zoom-in" className="chart_text order-lg-2 ">
        <Pie data={dataBar} />
      </div>
      <div data-aos="zoom-in" className="chart_text order-lg-1">
        <h1 className="chart_title">Opreting Syatem</h1>
        <p className="mt-5 lead">
          Through the 1950s, many major features were pioneered in the field of
          operating systems on mainframe computers, including batch processing,
          input/output interrupting, buffering, multitasking, spooling, runtime
          libraries, link-loading, and programs for sorting records in files.
          These features were included or not included in application software
          at the option of application programmers, rather than in a separate
          operating system used by all applications. In 1959, the SHARE
          Operating System was released as an integrated utility for the IBM
          704, and later in the 709 and 7090 mainframes, although it was quickly
          supplanted by IBSYS/IBJOB on the 709, 7090 and 7094. During the 1960s,
          IBM's OS/360 introduced the concept of a single OS spanning an entire
          product line, which was crucial for the success of the System/360
          machines. IBM's current mainframe operating systems are distant
          descendants of this original system and modern machines are
          backwards-compatible with applications written for OS/360.[citation
          needed]
        </p>
      </div>
    </div>
  );
};

export default Demo;

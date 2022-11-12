import React, { useState } from 'react';
// import {LineChart, Line, XAxis, CartesianGrid, }
import './chart.css'

export default function Chart() {
    const [chartData, setChartData]=useState ([])
    return (
        <div className='chart'>
            <h3 className='chart-title'>Sales Analytics</h3>
            {chartData}
        </div>
    )
}

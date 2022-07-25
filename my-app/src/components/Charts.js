import React from 'react'
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";

export default function Charts() {

    return (
        <div className='row charts my-5 py-5'>
            <div className='col-sm-5'>
                <div className='pie-chart-container'>
                    <h4 className='chart-title'>Sources</h4>
                    <div className="chart-container" style={{position: 'relative', height:'350px'}}>
                        <PieChart className='pie-chart' />
                    </div>
                </div>
            </div>
            <div className='col-sm-7'>
                <div className='bar-chart-container'>
                    <h4 className='chart-title'>Conditions</h4>
                    <div className="chart-container" style={{position: 'relative', height:'350px'}}>
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}
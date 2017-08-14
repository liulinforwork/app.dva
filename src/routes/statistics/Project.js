import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip,Legend } from 'recharts';

const data = [
    {name: '星期一', uv: 4000, pv: 2400, amt: 2400},
    {name: '星期二', uv: 3000, pv: 1398, amt: 2210},
    {name: '星期三', uv: 2000, pv: 9800, amt: 2290},
    {name: '星期四', uv: 2780, pv: 3908, amt: 2000},
    {name: '星期五', uv: 1890, pv: 4800, amt: 2181},
    {name: '星期六', uv: 2390, pv: 3800, amt: 2500},
    {name: '星期日', uv: 3490, pv: 4300, amt: 2100},
];


const Project = () => {
    return (
        <div>
            <h2>项目统计</h2>
            <BarChart width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>

    )
}

export default Project;
import React from "react";
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
margin:20px;
padding:20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.1);
box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
`

const ChartTitle = styled.h3`
margin-bottom: 20px;
`

export const AdminChart = ({title,data,dataKey,grid}) =>{
    return(
       <ChartContainer>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
           <LineChart data={data}>
             <XAxis dataKey="name" stroke="#5550bd" />
             <YAxis domain={[0, 30000]} stroke="#5550bd" />
             <Line type="monotone" dataKey={dataKey} stroke="#483D8B" strokeDasharray="3 4 5 2" />
             <Tooltip />
             {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
           </LineChart>
        </ResponsiveContainer>
       </ChartContainer>
    )
};
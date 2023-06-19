import React from 'react'
import AdminSidebar from '../../Components/AdminComponents/adminSidebar'
import { styled } from 'styled-components'
import { Chart } from "react-google-charts";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";

interface UserData {
  students: number;
  country:string
}
export const AdminAnalitytics = () => {


  const dispatch = useDispatch();
  const universities = useAppSelector((store) => store.universitiesReducer.data);
console.log(universities)
  const userata: UserData[] = universities.map((university) => ({
    
    students: university.students,
    country: university.country,
  }));
  const expectedData: (string | number)[][] = [
    ["Country", "Popularity"],
    ...userata.map((data) => [data.country, data.students]),
  ];
  console.log(userata)
  return (
    <Div>
      <Wrapper>
      <AdminSidebar/>
      </Wrapper>
      

      <ChartWrapper>
      <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = expectedData[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={expectedData}
      options={{
        colorAxis: {
          colors: ['yellow', 'orange', 'red'], // Set custom colors for the chart
        },
      }}
    />

      </ChartWrapper>
      
    </Div>
  )
}
const Div=styled.div`
display:flex
`
const ChartWrapper=styled.div`
padding:40px
`
const Wrapper=styled.div`
width:25%

`

import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Legend, } from 'recharts';
import Title from './Title';
import {Item,ChartProps} from '../Interfaces'

function prepareData (items:Item[]){
 
  return items;
}

export default function Chart({ items, isReady }: ChartProps) {
  const theme = useTheme();
let lineChartBody: any;
  if (isReady) {
    lineChartBody=      
    <ResponsiveContainer height={360}>
    <LineChart 
      data={prepareData(items)}margin={{top: 16, right: 16, bottom: 0, left: 24,}} >
      <CartesianGrid strokeDasharray="3 3"/><Tooltip/><Legend />
      <XAxis dataKey="dateString" stroke={theme.palette.text.secondary} />
      <YAxis stroke={theme.palette.text.secondary}>
        <Label angle={270} position="left"
          style={{ textAnchor: 'middle', fill: theme.palette.text.primary }} 
        >
        </Label>
      </YAxis>
      <Line type="monotone" dataKey="humidity" stroke="#1966e0" dot={true} />
      <Line type="monotone" dataKey="temperature" stroke="#bce019" dot={true}  />
    </LineChart>
  </ResponsiveContainer>;
  }
  else{
    lineChartBody="Loading...";
  }

  return (
    <React.Fragment>
      <Title>Graph humidity and temperature</Title>
      {lineChartBody}

    </React.Fragment>
  );
}

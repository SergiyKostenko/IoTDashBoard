import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import {Item,ChartProps} from '../Interfaces'

// Generate Sales Data
function createData(time: any, amount: any) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('26:00', undefined),
];

function prepareData (items:Item[]){
 
  return items;
}

export default function Chart({ items, value }: ChartProps) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Graph {value}</Title>
      <ResponsiveContainer>
        <LineChart
          data={prepareData(items)}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="rowKey" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              {value}
            </Label>
          </YAxis>
          <Line type="monotone" dataKey={value} stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

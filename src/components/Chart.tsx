import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import {Item,ChartProps} from '../Interfaces'

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
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
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

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {Item,TableProps} from '../Interfaces'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

// Generate Order Data

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function getData(): number{
  return 5;
}

function displayRecord(record: Item) {
 
  return( 
    <React.Fragment>
    <TableCell component="th" scope="row">{record.rowKey}</TableCell>
    <TableCell align="right">{record.humidity}</TableCell>
    <TableCell align="right">{record.temperature}</TableCell>
    <TableCell align="right">{String(record.isFlameDetected)}</TableCell>
    </React.Fragment>
    
    )
}

function generateTable(items: Item[]){

  return(
    <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell align="right">Humidity</TableCell>
          <TableCell align="right">Temperature</TableCell>
          <TableCell align="right">Flame detected</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {items.map((item) => ( <TableRow> {displayRecord(item)}</TableRow>))}
      </TableBody>
    </Table>
  </TableContainer>

  )
}

//export default function Orders(props: {message: Item[] }, {isReady: boolean}) {
export default function Orders({ items, isReady }: TableProps) {
  const classes = useStyles();
  return (
    <React.Fragment>
    Records: {items.length}
    {generateTable(items)}
</React.Fragment>
  );
}

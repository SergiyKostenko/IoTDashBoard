import React from 'react';
import * as ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/styles'

 export interface IAppProps{

 }

export interface Item {
  humidity: number;
  temperature: number;
  isFlameDetected: boolean;
  partitionKey: string;
  rowKey: Date;
   }

   export interface IState  {
    items:any[];

  }
  
 
  
   class App extends React.Component<IAppProps, IState>{
    constructor(props: IAppProps) {
      super(props);
      this.state = { 
        items: [], 

      }
  }
  



    public componentDidMount(): void {
     
     let url : string="https://myamazingiotbackend.azurewebsites.net/api/GetData?code=o97MlGa4Qo4zEKOW1bfG8Kh3ze0cUpdVZgbecHA0jQ4hGanvubCbFw==";
      axios.get(url).then(data => {
          this.setState({ items: data.data })
      })
  }

  
  private displayRecord(record: Item) {
 
    return( 
      <React.Fragment>
      <TableCell component="th" scope="row">{record.rowKey}</TableCell>
      <TableCell align="right">{record.humidity}</TableCell>
      <TableCell align="right">{record.temperature}</TableCell>
      <TableCell align="right">{String(record.isFlameDetected)}</TableCell>
      </React.Fragment>
      
      )
  }

  private generateTable(items: Item[]){

    return(
      <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Flame detected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {items.map((item) => ( <TableRow> {this.displayRecord(item)}</TableRow>))}
        </TableBody>
      </Table>
    </TableContainer>

    )
  }
  
  public render(){
    let items =this.state.items;
    
    return (
      <div>
      <p>Records:{items.length}</p> 
      {this.generateTable(items)}
      </div>
    );
    }


}

export default App;

// helpers

function getExclamationMarks(numChars: number) {
  return numChars;
}

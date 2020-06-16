import React from 'react';
import * as ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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

  private displayRecordName(colname:string, key:number){
    let record :Item = this.state.items[key];

    return( 
<React.Fragment>
<td>{record.rowKey}</td><td>{record.humidity}</td><td>{record.isFlameDetected}</td><td>{record.temperature}</td><td>{record.rowKey}</td>
</React.Fragment>

)
  }

  
  private displayRecords(key: number) {
    let items =this.state.items;
 
    return items.map((each_col) => 
      this.displayRecordName(each_col,key)
    ) 
  }
  
  public render(){
    let items =this.state.items;


      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
        <p>
         Number of records: {items.length}
         <table className="table table-bordered">
         <thead className="thead-light">   <tr>s</tr>   </thead>  
         <tbody> 

         {items && items.map((each_item, recordindex) =><tr> {this.displayRecords(recordindex)}</tr> )}
         </tbody>
         </table>
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
           
            </a>
            {getExclamationMarks(5)}
          </header>
        </div>
      );
    }


}

export default App;

// helpers

function getExclamationMarks(numChars: number) {
  return numChars;
}

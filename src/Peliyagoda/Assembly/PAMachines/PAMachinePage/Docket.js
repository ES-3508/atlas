import React, { Fragment } from 'react';
import axios from 'axios';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class Docket extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`http://192.168.8.110:4000/pa08/time`)
          .then(res => {
            const persons = res.data
            this.setState({ persons });
            console.log(persons);
           ;
           })
      }
  render() {
    return (
      <div>
        <Fragment>
      <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>Date</th>
            <th>Time from</th>
            <th>Time to</th>
            <th>Production Plan Quantity </th>
            <th>Production Plan Cumm  </th>
            <th>Final Output</th>
            <th>Cummilative Output</th>
            <th>Barrel</th>
            <th>Cap Rejection</th>
            <th>B/P</th>
            <th>Refill</th>
            
          </tr>
          </MDBTableHead>
      <MDBTableBody>
          {this.state.persons.map(item => {
            return (
              <tr key={item._id}>
                <td>{ item.Date }</td>
                <td>{ item.Time_from }</td>
                <td>{ item.Time_to}</td>
                <td>{item.Production_Plan_Quantity}</td>
                <td>{item.Cummilative_Pla}</td>
                <td>{item.Final_Output}</td>
                <td>{item.Cummilative_Output}</td>
                <td>{item.Cummilative_Output}</td>
                <td>{item.Refill_Rejection}</td>
                <td>{item.Plug_Rejection}</td>
                <td>{item.Cap_Rejection}</td>
              </tr>
            );
          })}
        </MDBTableBody>
    </MDBTable>
    </Fragment>

      </div>
    )
  }
}

import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/pa08`)
      .then(res => {
        const person = res.data;
        this.setState({ person });
        console.log(person);
      })
  }

  render() {
    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>Data</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map(item => {
            return (
              <tr key={item._id}>
                <td>{ item.Production_Plan_Quantity }</td>
                <td>{ item.Final_Output }</td>
                <td>{ item._id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
        
    )
  }
}
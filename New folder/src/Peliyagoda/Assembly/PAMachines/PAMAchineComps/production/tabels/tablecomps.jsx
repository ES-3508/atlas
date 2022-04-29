import React, { Component } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap"
import Data from './table'
import "./production.css"
// import PaginationX from './Pagination';

// let PageSize = 10;

export default class Prodcomps extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
            usersCollection: [],
            // currentPage: 1
        };
    }

    componentDidMount() {
        axios.get('http://192.168.8.110:5003/productionsPA04')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        // this.currentTableData();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.currentPage !== this.state.currentPage) {
    //       this.currentTableData();
    //     }
    // };

    // currentTableData = () => {

    //     const firstPageIndex = (this.currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     this.setState({ result: Data.splice(firstPageIndex, lastPageIndex) });
    //     // return data.slice(firstPageIndex, lastPageIndex);
    // }
      
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <Data obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div>

                 <span style={{padding: '10px', textAlign: 'center'}}><h2>ATLAS AXILLIA (PVT) LIMITED</h2></span>
                 <span style={{padding: '10px', textAlign: 'center'}}><h3>Machine Docket - PA04</h3></span>
                 {/* <span><h3>Production Details</h3></span> */}

             <div className="wrapper-users">
                 <div className="containertable">
                     <Table striped bordered hover size="lg">
                         <thead className="thead-dark">
                             <tr>
                                {/* <th>ID</th> */}
                                <th>Date</th>
                                <th>Time From</th>
                                <th>Time To</th>
                                <th>Production Plan Quantity</th>
                                <th>Cummilative Plan Quantity</th>
                                <th>Final Output</th>
                                <th>Cummilative Output</th>
                                <th>Refill Rejection</th>
                                <th>Plug Rejection</th>
                                <th>Cap Rejection </th>
                             </tr>
                         </thead>
                         <tbody>
                             {this.dataTable()}
                         </tbody>
                     </Table>
                    {/* <PaginationX/> */}
                    {/* <PaginationX className="pagination-bar"
                        currentPage={this.state.currentPage}
                        totalCount={Data.length}
                        pageSize={PageSize}
                        onPageChange={page => this.state.currentPage(page)}
                    /> */}
                 </div>
             </div>
             </div>
         )
     }
 }
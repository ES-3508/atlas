import React from 'react';
import axios from 'axios';
import { Table, Nav } from "react-bootstrap"
import "./tabels.css"
import { useEffect, useState} from 'react';
import _ from 'lodash';

const PageSize = 24;

const Prodcomps =() => {

    const [posts, setPosts] = useState();
    const [paginatedPosts, setPaginatedPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    // const [order, setOrder] = useState("ASC");
    const [searchItem, setSearchItem] = useState("");

    // const sorting = (col) => {
    //     if (order === "ASC"){
    //         const sorted = [...posts].sort((a,b) =>{
    //         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1})
    //         setPosts(sorted);
    //         setOrder("DSC");
    //     }
    //     if (order === "DSC"){
    //         const sorted = [...posts].sort((a,b) =>{
    //         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1})
    //         setPosts(sorted);
    //         setOrder("ASC");
    //     }
    // };


    useEffect(() => {

        axios.get("http://192.168.8.110:5003/productionsPA10").then((res) =>{
            console.log(res.data);
            setPosts(res.data);
            setPaginatedPosts(_(res.data).slice(0).take(PageSize).value());
        });

        },[]);

    const pageCount = posts? Math.ceil(posts.length/PageSize) :0;
    if (pageCount ===1) return null;
    const pages = _.range(1, pageCount + 1);

    const pagination = (pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1)*PageSize;
        const paginatedPosts = _(posts).slice(startIndex).take(PageSize).value()
        setPaginatedPosts(paginatedPosts)
    };

    return(   
    <div>
    <div>
        
    <span style={{padding: '10px', textAlign: 'center'}}><h2>ATLAS AXILLIA (PVT) LIMITED</h2></span>
    <span style={{padding: '10px', textAlign: 'center'}}><h3>Machine Docket - PA10</h3></span>
    {/* <span><h3>Production Details</h3></span> */}

    <div className="wrapper-users">
    <div className="containertable">
    <input 
        type = "text" placeholder = "Search ..." 
        className="form-control" 
        style = {{marginTop: 10, marginBottom: 20, width:"40%", minWidth:"20px" }}
        onChange = {(e) => {
            setSearchItem(e.target.value);
        }}
        />
    {!paginatedPosts ? ("No data found"):(
        <Table striped bordered hover size="lg">
            <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date
                            {/* <Button onClick={() => sorting("Date")}>Sort</Button> */}
                            </th>
                            <th scope="col">Time From
                            {/* <Button onClick={() => sorting("Time_from")}>Sort</Button> */}
                            </th>
                            <th scope="col">Time To
                            {/* <Button onClick={() => sorting("Time_to")}>Sort</Button> */}
                            </th>
                            <th scope="col">Production Plan Quantity
                            {/* <Button onClick={() => sorting("Production_Plan_Quantity")}>Sort</Button> */}
                            </th>
                            <th scope="col">Cummilative Plan Quantity
                            {/* <Button onClick={() => sorting("Cummilative_Plan_Quantity")}>Sort</Button> */}
                            </th>
                            <th scope="col">Final Output
                            {/* <Button onClick={() => sorting("Final_Output")}>Sort</Button> */}
                            </th>
                            <th scope="col">Cummilative Output
                            {/* <Button onClick={() => sorting("Cummilative_Output")}>Sort</Button> */}
                            </th>
                            <th scope="col">Refill Rejection
                            {/* <Button onClick={() => sorting("Refill_Rejection")}>Sort</Button> */}
                            </th>
                            <th scope="col">Plug Rejection
                            {/* <Button onClick={() => sorting("Plug_Rejection")}>Sort</Button> */}
                            </th>
                            <th scope="col">Cap Rejection
                            {/* <Button onClick={() => sorting("Cap_Rejection")}>Sort</Button> */}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedPosts.filter(val => {
                            if(searchItem === ""){
                                return val;
                            }else if (val.Date.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Time_from.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Time_to.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Production_Plan_Quantity.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Cummilative_Plan_Quantity.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Final_Output.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Cummilative_Output.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Refill_Rejection.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Pug_Rejection.toLowerCase().includes(searchItem.toLowerCase()) ||
                                    val.Cap_Rejection.toLowerCase().includes(searchItem.toLowerCase())
                            ){
                                return val;
                            }
                        }).map((post, index)=>(
                        <tr>
                            <th scope="row">{index}</th>

                            <td>
                            {post.Date}
                            </td>
                            <td>
                            {post.Time_from}
                            </td>
                            <td>
                            {post.Time_to}
                            </td>
                            <td>
                            {post.Production_Plan_Quantity}
                            </td>
                            <td>
                            {post.Cummilative_Plan_Quantity}
                            </td>
                            <td>
                            {post.Final_Output}
                            </td>
                            <td>
                            {post.Cummilative_Output}
                            </td>
                            <td>
                            {post.Refill_Rejection}
                            </td>
                            <td>
                            {post.Plug_Rejection}
                            </td>
                            <td>
                            {post.Cap_Rejection}
                            </td>

                        </tr>
                        ))}
                    </tbody>
        </Table>
    )}
    

    <Nav className="justify-content-center">
        <Nav.Item className="pagination">
            { pages.map((page)=>(
            <Nav.Link className={
                page === currentPage ? "page-item active" : "page-item"
            }><p className="page-link" onClick={()=> pagination(page)}>{page}</p></Nav.Link>
            ))}

        </Nav.Item>
    </Nav>

    {/* <div style={{padding: '10px', alignContent: 'center'}}> */}
    {/* <nav >
        <ul className="pagination">
            { pages.map((page)=>(
            <li className={
                page == currentPage ? "page-item active" : "page-item"
            }><p className="page-link" onClick={()=> pagination(page)}>{page}</p></li>
            ))}

        </ul>
    </nav> */}
    {/* </div> */}
    
    </div>
    </div>
    </div>
    </div>
        
    );

    };

export default Prodcomps;
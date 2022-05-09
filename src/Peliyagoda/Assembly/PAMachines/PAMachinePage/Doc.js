import axios from "axios";
import React,{ useEffect, useState,Fragment  } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Doc() {
    const  {machine}  = useParams();
    const [post, setPost] = useState([]);
    const [datex,setDate] =useState(new Date());
    // `http://192.168.8.110:4000/pa08/time`
    var url=2
    var str;

    const handleSubmit = (e) => {
        e.preventDefault();
        str=datex.getFullYear().toString()+"-0"+(datex.getMonth()+1).toString()+'-' +datex.getDate().toString()
        
        const data = {
            date: str
          };
        //formData.append('x',1)
        const url= 'http://localhost:5000/pa/time/'+machine+'/'+str
        // axios.post(url, data)
        //      .then(res => {
        //         console.log(res);
        //         setPost(res.json())
        //      })
        //      .catch(err => {
        //         console.log(err);
        //      });
        axios.get(url)
        .then(res =>setPost(res.data))
        //.then(data=> this.setPost({data}))
    }


  
  useEffect(() => {
    axios.get(`http://192.168.8.110:4000/pa08/time`).then((response) => {
      setPost(response.data);
      
    });

    axios.post(`http://192.168.8.110:4000/pa/time/machine`,{datex}).then((response) => {
      setPost(response.data);
      
    });

    
  }, [datex]);
  return (
    <>{machine} {datex.toDateString()}
    <div>
        <form onSubmit={handleSubmit} >
            <DatePicker selected={datex} onChange={(date:Date) => setDate(date) } />
            <button type="submit">check</button>

        </form>

        
    
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
            {post.map(item => {
        if(true){
          return (
            
              
            <>
            <tr key={item._id}>
            <td>{ item.Date }</td>
            <td>{ item.Time_from }</td>
            <td>{ item.Time_to}</td>
            <td>{item.Production_Plan_Quantity}</td>
            <td>{item.Cummilative_Pla}</td>
            <td>{item.Final_Output}</td>
            <td>{item.Cummilative_Outputj}</td>
            <td>{item.Cummilative_Output}</td>
            <td>{item.Refill_Rejection}</td>
            <td>{item.Plug_Rejection}</td>
            <td>{item.Cap_Rejection}</td>
          </tr>
          </>
              
            );

        }
          
        })}
            </MDBTableBody>
          </MDBTable>
        </Fragment>
      </div>
    </>
  )
}

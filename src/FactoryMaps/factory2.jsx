import React from 'react'
import { Link } from 'react-router-dom';
import './factorymaps.css'
import IMAX from '../FactoryMaps/2.png'
import { Row, Col } from 'react-bootstrap'

const topicsprint = [

    {id1: "pri01", name1: "pri01",
    // id2: "pri02", name2: "pri02", 
    // id3: "pri03", name3: "pri03", 
    // id4: "pri04", name4: "pri04",
    // id5: "pri05", name5: "pri05",
    // id6: "pri06", name6: "pri06",
    // id7: "pri07", name7: "pri07",
    // id8: "pri08", name8: "pri08", 
    // id9: "pri09", name9: "pri09",
    id29: "pri29", name3: "pri29", 
    id30: "pri30", name4: "pri30",
    id31: "pri31", name5: "pri31",
    id33: "pri33", name3: "pri33"}

];

export default function level2() {
    return (
        <div className= 'container'>

        <div className='mapx'>

        <Row>
            <Col>

            <div>
                <span>
                    <img src={IMAX} style={{ maxWidth: '100rem'}} alt="Printing Plant Map - Peliyagoda" useMap='#factory2map'/>
                </span>
                {topicsprint.map((print) => (
                <map name="factory2map">

                <div><Link to={{ pathname: `/machine/printing/fm08home/fm08`}}><area target="_blank" alt="FM08" title="FM08" href="1" coords="348,219,372,115" shape="rect"/></Link></div>
                {/* <div><Link to={{ pathname: `/pri02home/${print.id2}`}}><area target="_blank" alt="2" title="2" href="2" coords="390,220,413,117" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri03home/${print.id3}`}}><area target="_blank" alt="3" title="3" href="3" coords="432,225,459,120" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri04home/${print.id4}`}}><area target="_blank" alt="4" title="4" href="4" coords="475,224,500,120" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri05home/${print.id5}`}}><area target="_blank" alt="5" title="5" href="5" coords="518,222,543,117" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri06home/${print.id6}`}}><area target="_blank" alt="6" title="6" href="6" coords="562,221,586,116" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri07home/${print.id7}`}}><area target="_blank" alt="7" title="7" href="7" coords="725,302,771,356" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri08home/${print.id8}`}}><area target="_blank" alt="8" title="8" href="8" coords="599,220,624,114" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/pri09home/${print.id9}`}}><area target="_blank" alt="9" title="9" href="9" coords="637,218,661,116" shape="rect"/></Link></div> */}
                {/* <div><Link to={{ pathname: '/pri10home'}}><area target="_blank" alt="10" title="10" href="10" coords="200,131,163,97" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri11home'}}><area target="_blank" alt="11" title="11" href="11" coords="163,186,199,153" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri12home'}}><area target="_blank" alt="12" title="12" href="12" coords="162,236,198,202" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri13home'}}><area target="_blank" alt="13" title="13" href="13" coords="106,134,145,101" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="14" title="14" href="14" coords="109,185,144,153" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="15" title="15" href="15" coords="108,236,144,202" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="16" title="16" href="16" coords="217,105,256,187" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="17" title="17" href="17" coords="785,350,815,299" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="18" title="18" href="18" coords="218,245,254,222" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="19" title="19" href="19" coords="48,99,79,151" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="20" title="20" href="20" coords="53,306,93,348" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="21" title="21" href="21" coords="351,69,389,29" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="22" title="22" href="22" coords="433,67,471,29" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="23" title="23" href="23" coords="517,67,556,29" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="24" title="24" href="24" coords="586,66,624,27" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="25" title="25" href="25" coords="667,63,706,22" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="26" title="26" href="26" coords="366,292,487,328" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="27" title="27" href="27" coords="707,114,738,211" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="28" title="28" href="28" coords="621,317,668,367" shape="rect"/></Link></div> */}
                <div><Link to={{ pathname: `/machine/printing/web04home/web04`}}><area target="_blank" alt="WEB4" title="WEB4" href="29" coords="935,252,1051,294" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/machine/printing/web02home/web02`}}><area target="_blank" alt="WEB2" title="WEB2" href="30" coords="938,322,1052,358" shape="rect"/></Link></div>
                <div><Link to={{ pathname: `/machine/printing/bm02home/bm02`}}><area target="_blank" alt="BM02" title="BM02" href="31" coords="757,152,823,152,824,209,996,211,993,165,866,165,865,143,842,143,841,112,757,112" shape="poly"/></Link></div>
                {/* <div><Link to={{ pathname: '/pri32home'}}><area target="_blank" alt="BM01" title="BM01" href="32" coords="783,54,839,56,842,90,1021,88,1021,53,888,56,888,39,866,39,865,16,783,15" shape="poly"/></Link></div> */}
                <div><Link to={{ pathname: `/machine/uv01home/uv01`}}><area target="_blank" alt="UV1" title="UV1" href="33" coords="78,195,79,174,39,173,40,88,13,89,12,194" shape="poly"/></Link></div>
                {/* <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="34" title="34" href="34" coords="13,73,33,73,34,35,116,36,119,9,17,13" shape="poly"/></Link></div>
                <div><Link to={{ pathname: '/pri04home'}}><area target="_blank" alt="35" title="35" href="35" coords="412,366,556,360,556,314,541,315,537,334,484,342,478,329,429,331,426,342,412,342" shape="poly"/></Link></div> */}
               
                </map>
                 ))}
            </div>
            </Col>
            <Col>
            {/* <div><AssemblyCollection/></div> */}
            </Col>
        </Row>
        </div>
    </div>
        )
}    
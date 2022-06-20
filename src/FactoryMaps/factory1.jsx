import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
import './factorymaps.css'
import IMAX from '../FactoryMaps/1.png'


const topicsassem = [

    {id1: "pa01", name1: "pa01",
    id2: "pa02", name2: "pa02", 
    id3: "pa03", name3: "pa03", 
    id4: "pa04", name4: "pa04",
    id5: "pa05", name5: "pa05",
    id6: "pa06", name6: "pa06",
    id7: "pa07", name7: "pa07",
    id8: "pa08", name8: "pa08", 
    id9: "pa09", name9: "pa09"}

];

export default function UserList() {

    return (
        <div className= 'container'>

        <div className='map'>

        <Row>
            <Col>
            <div>
                <span>
                    <img src={IMAX} style={{ maxWidth: '100rem'}} alt="Assembly Plant Map - Peliyagoda" useMap='#factory1map'/>
                </span>
                {topicsassem.map((assem) => (
                <map name="factory1map">

                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa01home/${assem.id1}`}}><area target="_blank" alt="PA01" title="PA01" href="PA01" coords="754,69,628,34" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa02home/${assem.id2}`}}><area target="_blank" alt="PA02" title="PA02" href="PA02" coords="651,128,783,94" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa03home/${assem.id3}`}}><area target="_blank" alt="PA03" title="PA03" href="PA03" coords="642,218,776,179" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa06home/${assem.id6}`}}><area target="_blank" alt="PA06" title="PA06" href="PA06" coords="617,253,776,284" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa08home/${assem.id8}`}}><area target="_blank" alt="PA08" title="PA08" href="PA08" coords="621,360,777,394" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa04home/${assem.id4}`}}><area target="_blank" alt="PA04" title="PA04" href="PA04" coords="782,265,804,369" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa07home/${assem.id7}`}}><area target="_blank" alt="PA07" title="PA07" href="PA07" coords="629,487,770,520" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa05home/${assem.id5}`}}><area target="_blank" alt="PA05" title="PA05" href="PA05" coords="638,552,770,585" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/machine/assembly/pa09home/${assem.id9}`}}><area target="_blank" alt="PA09" title="PA09" href="PA09" coords="654,659,781,627" shape="rect"/></Link>
                    </div>
                    {/* <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_Cir1" title="PA_Cir1" href="PA_Cir1" coords="791,501,17" shape="circle"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_Cir2" title="PA_Cir2" href="PA_Cir2" coords="795,564,20" shape="circle"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_Cir3" title="PA_Cir3" href="PA_Cir3" coords="649,716,25" shape="circle"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_Cir4" title="PA_Cir4" href="PA_Cir4" coords="723,716,26" shape="circle"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_Cir5" title="PA_Cir5" href="PA_Cir5" coords="643,619,19" shape="circle"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_X1" title="PA_X1" href="PA_X1" coords="624,663,596,627" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_X2" title="PA_X2" href="PA_X2" coords="784,687,797,738" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_X3" title="PA_X3" href="PA_X3" coords="814,638,784,673" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_X4" title="PA_X4" href="PA_X4" coords="780,599,802,625" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_X5" title="PA_X5" href="PA_X5" coords="761,82,783,53" shape="rect"/></Link>
                    </div>
                    <div>
                        <Link to={{ pathname: `/pa06home/${assem.id3}`}}><area target="_blank" alt="PA_X6" title="PA_X6" href="PA_X6" coords="780,30,812,54" shape="rect"/></Link>
                    </div> */}

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
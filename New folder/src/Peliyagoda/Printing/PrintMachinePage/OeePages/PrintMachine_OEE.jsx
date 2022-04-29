import AvailabilityOEE from "../../PrintMAchineComps/AvailabilityOEE/Availability";
import PerformanceOEE from "../../PrintMAchineComps/PerformanceOEE/Performance";
import QualityOEE from "../../PrintMAchineComps/QualityOEE/QualtyOee";
import { Row, Col } from 'react-bootstrap'
import "./PrintMachine_OEE.css"
function pa04_OEE() {
    return (
        <div >
            <Row className="oee_main">
                <Col  xs={12} md={4} lg={4}> <AvailabilityOEE /></Col>
                <Col xs={12} md={4} lg={4}> <PerformanceOEE /></Col>
                <Col xs={12} md={4} lg={4}>  <QualityOEE /></Col>


            </Row>




        </div>















    )
}

export default pa04_OEE


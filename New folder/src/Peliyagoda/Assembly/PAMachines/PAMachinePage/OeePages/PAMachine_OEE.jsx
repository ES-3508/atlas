import AvailabilityOEE from "../../../PAMachines/PAMAchineComps/AvailabilityOEE/Availability";
import PerformanceOEE from "../../../PAMachines/PAMAchineComps/PerformanceOEE/Performance";
import QualityOEE from "../../../PAMachines/PAMAchineComps/QualityOEE/QualtyOee";
import { Row, Col } from 'react-bootstrap'
import "./PAMachine_OEE.css"
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


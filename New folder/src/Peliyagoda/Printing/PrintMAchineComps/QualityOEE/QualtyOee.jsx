import React from 'react'
import "./QualityOee.css"
import { Card, Row } from 'react-bootstrap'

function QualtyOee() {
    return (
        <div >
             <Card className="Quality_card">
                <Card.Body>
            <Row>
                <Card className="Quality_title">
                    <Card.Body>
                    <Card.Title>Quality</Card.Title>
                    </Card.Body>
                </Card>

            </Row>
            
            <Row>
            <Card className="gauge_chart">
                <Card.Body></Card.Body>
            </Card>
            </Row>
            
            <Row>
            <Card className="line_chart">
                <Card.Body></Card.Body>
            </Card>
            </Row>

            {/* <div className="availability_tile"> <span className="Title_1">Availability</span></div>
                <div className="gauge_chart"></div>
                <div className="line_chart"></div>
                 */}
           </Card.Body>
            </Card> 
        </div>
    )
}

export default QualtyOee

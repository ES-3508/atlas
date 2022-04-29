import React from 'react'
import "./performance.css"
import { Card, Row } from 'react-bootstrap'

function Performance() {
    return (
        <div >
            <Card className="Performance_card">
                <Card.Body>
            <Row>
                <Card className="Performance_title">
                    <Card.Body>
                    <Card.Title>Performance</Card.Title>
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

export default Performance

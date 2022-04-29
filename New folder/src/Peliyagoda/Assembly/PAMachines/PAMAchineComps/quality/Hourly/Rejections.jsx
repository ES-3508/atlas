import "./quality.css"
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

var topic

export default function Rejections(props) {

    const [refillrejection, setRefillrejection] = useState();
    const [plugrejection, setPlugrejection] = useState();
    const [caprejection, setCaprejection] = useState();
    

    if (props.pa01){

        console.log(props.pa01)
        topic = '+/pa01/pa01dash/0101'

    }
    if (props.pa02){

        console.log(props.pa02)
        topic = '+/pa02/pa02dash/0202'

    }
    if (props.pa03){

        console.log(props.pa03)
        topic = '+/pa03/pa03dash/0303'

    }
    if (props.pa04){

        console.log(props.pa04)
        topic = '+/pa04/pa04dash/0404'

    }
    if (props.pa05){

        console.log(props.pa05)
        topic = '+/pa05/pa05dash/0505'

    }
    if (props.pa06){

        console.log(props.pa06)
        topic = '+/pa06/pa06dash/0606'

    }
    if (props.pa07){

        console.log(props.pa07)
        topic = '+/pa07/pa07dash/0707'

    }
    if (props.pa08){

        console.log(props.pa08)
        topic = '+/pa08/pa08dash/0808'

    }
    if (props.pa09){

        console.log(props.pa09)
        topic = '+/pa09/pa09dash/0909'

    }

        useEffect(() => {
            
            const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')

            client.on("connect", () => {
                // console.log("connected");
                client.subscribe(topic);
            });

            client.on('message', (topic, message) => {
                
            handleJsonMessage(JSON.parse(message.toString()));
            //console.log(message);
            });


            return () => {
                if(client)
                client.end() 
            }
            },[])

            const handleJsonMessage = (json) => {
                setRefillrejection(json.refillShift)
                setPlugrejection(json.plugShift)
                setCaprejection(json.capShift)
                // console.log(json);
                }

    return (
        
        <div className="tile">
            <span className="rejectionCount">{Math.abs(refillrejection) + Math.abs(plugrejection) + Math.abs(caprejection)}</span>
            {/* <span className="playCircleOutIcon" > <PlayCircleOutlineIcon/></span> */}
        </div>
            
        
    )
}

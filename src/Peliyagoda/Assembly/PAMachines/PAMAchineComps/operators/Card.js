import React from 'react';
import {Link} from 'react-router-dom'

function Card({person}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={person.name} src={'/images/'+person.photo} />
      <div>
      <Link className="link" to={person.epfNum} >
                                
                            
        <h2>{person.name}</h2>
        </Link>
        <p>{person.epfNum}</p>
        
        <br/>
        
        <br/>
      </div>
    </div>
  );
}

export default Card;
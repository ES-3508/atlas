import React from 'react'
import { Link } from 'react-router-dom';
import './factorymaps.css'
import IMAX from '../FactoryMaps/3.png'

export default function level2() {
    return (
        <div className= 'container'>

        <div className='map'>

            <div>
                <span>
                    <img src={IMAX} style={{ maxWidth: '100rem'}} alt="INM Plant Map - Welisara" useMap='#factory3map'/>
                </span>

                <map name="factory3map">

                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="1" title="1" href="1" coords="57,158,91,24" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="2" title="2" href="2" coords="128,160,164,25" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="3" title="3" href="3" coords="200,159,235,25" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="4" title="4" href="4" coords="273,160,307,24" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="5" title="5" href="5" coords="346,158,380,23" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="6" title="6" href="6" coords="420,159,452,24" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="7" title="7" href="7" coords="490,160,524,24" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="8" title="8" href="8" coords="562,159,596,24" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="9" title="9" href="9" coords="56,378,90,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="10" title="10" href="10" coords="128,378,162,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="11" title="11" href="11" coords="201,379,235,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="12" title="12" href="12" coords="273,379,307,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="13" title="13" href="13" coords="345,378,379,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="14" title="14" href="14" coords="418,379,453,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="15" title="15" href="15" coords="491,380,525,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="16" title="16" href="16" coords="562,379,597,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="17" title="17" href="17" coords="636,378,669,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="18" title="18" href="18" coords="709,379,741,244" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="19" title="19" href="19" coords="55,561,90,426" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="20" title="20" href="20" coords="163,427,130,562" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="21" title="21" href="21" coords="203,561,235,427" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="22" title="22" href="22" coords="273,562,308,427" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="23" title="23" href="23" coords="347,562,381,427" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="24" title="24" href="24" coords="418,562,452,427" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="25" title="25" href="25" coords="491,561,524,427" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="26" title="26" href="26" coords="562,562,598,426" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="27" title="27" href="27" coords="635,561,669,427" shape="rect"/></Link></div>
                <div><Link to={{ pathname: '/inm04home'}}><area target="_blank" alt="28" title="28" href="28" coords="709,561,742,427" shape="rect"/></Link></div>

                </map>

            </div>

        </div>
        
            
        
        </div>
                    
    )
}
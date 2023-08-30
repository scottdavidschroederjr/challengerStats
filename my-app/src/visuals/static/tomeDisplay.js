import React, { useState } from 'react';


function TomeDisplay(){
    const [unitCount, setunitCount] = useState(0);

    
    return (
        <div id='tomeBox' className='component'>
            <div className='componentHeader'>Tome of Traits</div>
            <a href="https://www.metatft.com/tome-of-traits" target="_blank">Tome of Traits</a>
            <div>Tome of Traits will give you an Emblem based on your current traits.</div>
            <table>
                <th># Traits</th>
                <th>0-5 Traits</th>
                <th>6-7 Traits</th>
                <th>8-9 Traits</th>
                <th>10-11 Trait</th>
                <th>12+ Traits</th>
                <tr>
                <td>Emblems</td>
                <td>0 Tailored <br></br> 4 Random</td>
                <td>1 Tailored <br></br> 3 Random</td>
                <td>2 Tailored <br></br> 2 Random</td>
                <td>3 Tailored <br></br> 1 Random</td>
                <td>4 Tailored <br></br> 0 Random</td>
                </tr>
            </table>
            <br></br>
            
            Odds to hit 1: <br></br>
            Odds to hit 2: <br></br>
            Odds to hit 3: <br></br>
            Odds to hit 4: <br></br>
            

            
            
            
        </div>

    )
}

export default TomeDisplay
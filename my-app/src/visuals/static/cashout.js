import React, { useState } from 'react';

const cashoutTables = {
    "0": <table>
            <tr>
                <th>Probability</th>
                <th>Cashout</th>
            </tr>
            <tr>
                <td>100%</td>
                <td>1 Gold</td>
            </tr>
        </table>,

};

function Cashout() {
    const [lossStreak, setlossStreak] = useState("none");

        return (
            <div className="component"id=''>
                <div className="componentHeader">Piltover Cashout</div>

                <div>
                    <select onChange={(e) => setlossStreak(e.target.value)}>
                    <option value="none">Cashout Size</option>
                    <option value="0">0 Loss / 1 Energy</option>
                    <option value="1">1 Loss / 2 Energy</option>
                    <option value="2">2 Loss / 4 Energy</option>
                    <option value="3">3 Loss / 6 Energy</option>
                    <option value="4">4 Loss / 9 Energy</option>
                    <option value="5">5 Loss / 12 Energy</option>
                    <option value="6">6 Loss / 16 Energy</option>
                    <option value="7">7 Loss / 20 Energy</option>
                    <option value="8">8 Loss / 25 Energy</option>
                    </select>
                
                <br></br>
                {cashoutTables[lossStreak]}
                </div>
            </div>
        )

}


export default Cashout
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

    "1": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>50%</td>
        <td>2 Gold</td>
    </tr>
    <tr>
        <td>50%</td>
        <td>1x 2 Cost</td>
    </tr>
    </table>, 

    "2": <table>
            <tr>
                <th>Probability</th>
                <th>Cashout</th>
            </tr>
            <tr>
                <td>50%</td>
                <td>5 Gold</td>
            </tr>
            <tr>
                <td>25%</td>
                <td>1x 3 Cost + 2g</td>
            </tr>
            <tr>
                <td>25%</td>
                <td>2x 2 Cost + 1 Gold</td>
            </tr>
        </table>,    

    "3": <table>
            <tr>
                <th>Probability</th>
                <th>Cashout</th>
            </tr>
            <tr>
                <td>25%</td>
                <td>10 Gold</td>
            </tr>
            <tr>
                <td>50%</td>
                <td>Item Component + 2g</td>
            </tr>
            <tr>
                <td>25%</td>
                <td>2x 3 Cost + 4 Gold</td>
            </tr>
        </table>,         
   
    "4": <table>
            <tr>
                <th>Probability</th>
                <th>Cashout</th>
            </tr>
            <tr>
                <td>40%</td>
                <td>Item Component + 7 Gold</td>
            </tr>
            <tr>
                <td>30%</td>
                <td>Thieves Gloves + 4g</td>
            </tr>
            <tr>
                <td>30%</td>
                <td>4x 3 Cost + 3 Gold</td>
            </tr>
        </table>,
        
        "5": <table>
        <tr>
            <th>Probability</th>
            <th>Cashout</th>
        </tr>
        <tr>
            <td>40%</td>
            <td>2x Item Component + 6 Gold</td>
        </tr>
        <tr>
            <td>30%</td>
            <td>Tome of Traits + 4g</td>
        </tr>
        <tr>
            <td>30%</td>
            <td>Thieves Gloves + 11g</td>
        </tr>
    </table>,

        "6": <table>
        <tr>
            <th>Probability</th>
            <th>Cashout</th>
        </tr>
        <tr>
            <td>25%</td>
            <td>3x Item Component + 6 Gold</td>
        </tr>
        <tr>
            <td>25%</td>
            <td>Ornn Anvil + 12g</td>
        </tr>
        <tr>
            <td>30%</td>
            <td>Completed Item Anvil + 15g</td>
        </tr>
        <tr>
            <td>20%</td>
            <td>Ornn TG + 8g</td>
        </tr>
    </table>, 
    
    "7": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>35%</td>
        <td>2x Completed Item Anvil + 10 Gold</td>
    </tr>
    <tr>
        <td>20%</td>
        <td>Champ Duplicator + 30g</td>
    </tr>
    <tr>
        <td>20%</td>
        <td>Radient Item, 2x reforger + 12g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>5x component</td>
    </tr>
    </table>,

    "8": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>30%</td>
        <td>2x Ornn Anvil + 19 Gold</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>TaC + 25g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>Radient Item, 2x Reforger + 25g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>3x 5 cost + 40g</td>
    </tr>
    </table>, 
    
    "9": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>20%</td>
        <td>3x Thieves Gloves, Radiant Item + 5g</td>
    </tr>
    <tr>
        <td>15%</td>
        <td>2x Spatula + 6 Item Components</td>
    </tr>
    <tr>
        <td>20%</td>
        <td>4x Completed Anvils + 10g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>TaC + 4x 4 cost + 24g</td>
    </tr>
    <tr>
        <td>20%</td>
        <td>Radiant Item, Ornn Anvil, Completed Anvil, Reforger + 10g</td>
    </tr>
    </table>,    
    
    "10": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>30%</td>
        <td>2x Radient Item, 2x Reforgers, 2 Removers + 25g</td>
    </tr>
    <tr>
        <td>30%</td>
        <td>TaC, Ornn Anvil, Completed Anvil + 20g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>Radiant TG, TaC + 3x 5 cost</td>
    </tr>
    <tr>
        <td>15%</td>
        <td>Champ Duplicator, Radiant Item, Reforger, Remover  + 45g</td>
    </tr>
    </table>,  

    "11": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>30%</td>
        <td>TaC + 80g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>2x Ornn Anvil, Radiant Item, Reforger + 50g</td>
    </tr>
    <tr>
        <td>20%</td>
        <td>3x Radiant TG + 20g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>6x Item Components, TaC + 30g</td>
    </tr>
    </table>, 
    
    "12": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>25%</td>
        <td>75g + 4 Spatulas</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>3 Radiant Items + 50g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>Radiant Item, TaC, Ornn Anvil, Remover, Reforger + 55g</td>
    </tr>
    <tr>
        <td>25%</td>
        <td>Convert all regular items to Radiant + dynamic gold</td>
    </tr>
    </table>, 

        "13": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>30%</td>
        <td></td>
    </tr>
    <tr>
        <td>25%</td>
        <td></td>
    </tr>
    <tr>
        <td>25%</td>
        <td></td>
    </tr>
    <tr>
        <td>25%</td>
        <td></td>
    </tr>
    </table>, 

    "14": <table>
    <tr>
        <th>Probability</th>
        <th>Cashout</th>
    </tr>
    <tr>
        <td>%</td>
        <td></td>
    </tr>
    <tr>
        <td>%</td>
        <td></td>
    </tr>
    <tr>
        <td>%</td>
        <td></td>
    </tr>
    <tr>
        <td>%</td>
        <td></td>
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
                    <option value="9">9 Loss / 30 Energy</option>
                    <option value="10">10 Loss / 40 Energy</option>
                    <option value="11">11 Loss / 50 Energy</option>
                    <option value="12">12 Loss / 60 Energy</option>
                    <option value="13">13 Loss / 70 Energy</option>
                    <option value="14">14 Loss / 80 Energy</option>
                    </select>
                
                <br></br>
                {cashoutTables[lossStreak]}
                </div>
            </div>
        )

}


export default Cashout
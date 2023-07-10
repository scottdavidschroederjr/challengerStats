import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

//for handing data
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export function App() {
  return (
      <div>
        <Header />
        <Explainer />
        <InputBlock />
      </div>
  );
}

function InputBlock() {
  //TODO there has to be a better way to do this, need to learn more about React to fix this 
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [user1record, setUser1record] = useState([]);
  const [user2record, setUser2record] = useState([]);
  const [user1top4, setUser1top4] = useState([]);
  const [user2top4, setUser2top4] = useState([]);
  const [user1LPchange, setuser1LPchange] = useState([]);
  const [user2LPchange, setuser2LPchange] = useState([]);

  //AND there ESPECIALLY has to be a better way to do this!
  const [u1results, setu1results] = useState([]);
  const [u2results, setu2results] = useState([]);
  const [u2chart, setu2chart] = useState([])


  const handleSubmit = async (firstUser, secondUser, set) => {
      await axios.post('http://localhost:3001/api/data', { firstUser, secondUser, set}, config).then(response => {
        console.log(response['data'])
        
        //TODO figure out what makes this data sometimes populate in 0 and other times in 1, or could even right a function that takes care of the 0 / 1 so this doesn't have to be double written

        if (response['data'][0] !== null) {
          setUser1(firstUser)
          setUser1record(response['data'][0][firstUser]["duoWins"] + "-" + response['data'][0][firstUser]["duoLosses"])
          setUser1top4(response['data'][0][firstUser]["top4Rate"])
          setuser1LPchange(response['data'][0][firstUser]["duoLPChange"])

          setUser2(secondUser)
          setUser2top4(response['data'][0][secondUser]["top4Rate"])
          setUser2record(response['data'][0][secondUser]["duoWins"] + "-" + response['data'][0][secondUser]["duoLosses"]) 
          setuser2LPchange(response['data'][0][secondUser]["duoLPChange"])  
          
          for (let x = 1; x < 9; x++) {
            console.log(u1results)
            setu1results(u1results.push(response['data'][0][firstUser]["matchResults"][x]))
            setu2results(u2results.push(response['data'][0][secondUser]["matchResults"][x]))
          }


          
        }
        else if (response['data'][1] !== null){
          setUser1(firstUser)
          setUser1record(response['data'][1][firstUser]["duoWins"] + "-" + response['data'][1][firstUser]["duoLosses"])
          setUser1top4(response['data'][1][firstUser]["top4Rate"])
          setuser1LPchange(response['data'][1][firstUser]["duoLPChange"])
          

          setUser2(secondUser)
          setUser2top4(response['data'][1][secondUser]["top4Rate"])
          setUser2record(response['data'][1][secondUser]["duoWins"] + "-" + response['data'][1][secondUser]["duoLosses"])
          setuser2LPchange(response['data'][1][secondUser]["duoLPChange"])
            
          for (let x = 1; x < 9; x++) {
            console.log(u1results)
            setu1results(u1results.push(response['data'][1][firstUser]["matchResults"][x]))
            setu2results(u2results.push(response['data'][1][secondUser]["matchResults"][x]))
          }
        }
        
        
      })
  };
      
  

  const handleButtonClick = () => {
    const user1Input = document.getElementById('user1');
    const user2Input = document.getElementById('user2');
    const htmlSetInput = document.getElementById('htmlSet');

    const user1 = user1Input.value;
    const user2 = user2Input.value;
    const htmlSet = htmlSetInput.value;

    handleSubmit(user1, user2, htmlSet)
  };

  function Results(){

    //if (user1LPchange !== typeof Number) {
    //  return (<div></div>)
    //}

    
    return (
      <div id="results">
        <div className='username'>{user1}</div>

        <div className='resultsBody'>

            <div className='leftResults'>
              <div className='top4Results'>{user1top4} - Top4</div>
              <div className='recordResults'>{user1record}</div>
              <div className='lpTitle'>Est. LP Change</div>
              <div className='lpChange'>{user1LPchange}</div>
            </div>

            <div className='rightResults'>right results</div>

        </div>
        
        <div className='username'>{user2}</div>
        
        <div className='resultsBody'>

            <div className='leftResults'>
              <div className='top4Results'>{user2top4} - Top4</div>
              <div className='recordResults'>{user2record}</div>
              <div className='lpTitle'>Est. LP Change</div>
              <div className='lpChange'>{user2LPchange}</div>
            </div>

            <div className='rightResults'>
            </div>
            
        </div>
        
      </div>
    )
    
  }

  return (
    <div>
    <div>
      <div id="inputSection">
        <form>
          <input type="text" className="input" name="user1" id="user1" placeholder="Username #1" />
          <input type="text" className="input" name="user2" id="user2" placeholder="Username #2" />
          <br />

          <select className="input" name="htmlSet" id="htmlSet" required>
            <option value=""disabled>All Sets Included</option>
            <option value=""disabled>Set 1: TFT Beta Set</option>
            <option value=""disabled>Set 2: Rise of the Elements</option>
            <option value=""disabled>Set 3: Galaxies</option>
            <option value=""disabled>Set 3.5: Return to the Stars</option>
            <option value=""disabled>Set 4: Fates</option>
            <option value=""disabled>Set 4.5: Festival of Beasts</option>
            <option value=""disabled>Set 5: Reckoning</option>
            <option value=""disabled>Set 5.5: Dawn of Heroes</option>
            <option value=""disabled>Set 6: Gizmos & Gadgets</option>
            <option value=""disabled>Set 6.5: Neon Nights</option>
            <option value="TFTSet7" disabled>Set 7: Dragonlands</option>
            <option value="TFTSet7_2" disabled>Set 7.5: Uncharted Realms</option>
            <option value="TFTSet8" disabled>Set 8: Monsters Attack</option>
            <option value="TFTSet8_2" >Set 8.5: Glitched Out</option>
            <option value="TFTSet9" selected="selected">Set 9: Runeterra Reforged</option>
          </select>
        </form>
        <button onClick={handleButtonClick}>Get duo stats</button>
      </div>
    </div>
    <div>
      <Results />
    </div>
  </div>
  );
}

function Header() {
  return (
    <div id="header" className="box">TFT Duo Stats</div>
  )
}

function Explainer(){
  return (
    <div className="explainerText"><p>Use this tool to see how you perform when duoing with a friend in ranked TFT.</p></div>
  )
}


export default App()

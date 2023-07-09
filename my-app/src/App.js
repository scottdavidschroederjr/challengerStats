import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

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
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [user1results, setUser1results] = useState([]);
  const [user2results, setUser2results] = useState([]);
  
  
  const handleSubmit = async (firstUser, secondUser, set) => {
      await axios.post('http://localhost:3001/api/data', { firstUser, secondUser, set}, config).then(response => {
        console.log(response['data'])
        
        if (response['data'][0] !== null) {
          setUser1(firstUser)
          setUser2(secondUser)
          setUser1results(response['data'][0][firstUser]["duoWins"] + "-" + response['data'][0][firstUser]["duoLosses"])
          setUser2results(response['data'][0][secondUser]["duoWins"] + "-" + response['data'][0][secondUser]["duoLosses"])    
        }
        else if (response['data'][1] !== null){
          setUser1(firstUser)
          setUser2(secondUser)
          setUser1results(response['data'][1][firstUser]["duoWins"] + "-" + response['data'][1][firstUser]["duoLosses"])
          setUser2results(response['data'][1][secondUser]["duoWins"] + "-" + response['data'][1][secondUser]["duoLosses"]) 
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
    return (
      <div id="results">
        <div className='username'>{user1}</div>
        {user1results} <br></br> 
        <div className='username'>{user2}</div>
        {user2results} <br></br> 
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

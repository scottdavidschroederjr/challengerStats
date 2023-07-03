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

      <div className="box">
        <Header />
        <Explainer />
        <InputBlock />
      </div>

      <br/>

      <div className="box">
        <OutputBox />
      </div>


    </div>
  );
}

function InputBlock() {
  const handleSubmit = async (firstUser, secondUser, set) => {
    try {
      console.log("got here")
      console.log(set)
      console.log(firstUser)
      console.log(secondUser)
      const response = await axios.post('http://localhost:3001/api/data', { firstUser, secondUser, set}, config);
      console.log(response.data)
      return null

    } catch (error) {
      //TODO make more visual error
      console.log("error")
    }
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

  return (
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
          <option value="TFTSet7">Set 7: Dragonlands</option>
          <option value="TFTSet7_2">Set 7.5: Uncharted Realms</option>
          <option value="TFTSet8">Set 8: Monsters Attack</option>
          <option value="TFTSet8_2" >Set 8.5: Glitched Out</option>
          <option value="TFTSet9">Set 9: Runeterra Reforged</option>
        </select>
      </form>
      <button onClick={handleButtonClick}>Get duo stats</button>
    </div>
  );
}

function Header() {
  return (
    <div id="header">TFT Duo Stats</div>
  )
}

function Explainer(){
  return (
    <div className="explainerText"><p>Use this tool to see how you perform when duoing with a friend in ranked TFT.</p></div>
  )
}

function OutputBox(){
  return (
    <div className="explainerText">Here's where we'd output the results of the function being run.</div>
  )
}

  //requests the data using puppet


export default App()

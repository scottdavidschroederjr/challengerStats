function IxaocanTable(){

    const championData = [
        {staredUnits: "20", optionA: "Component Anvil", optionB: "8 Gold"},
        {staredUnits: "40", optionA: "12 Gold", optionB: "2 Random Components"},
        {staredUnits: "60", optionA: "Complete Item Anvil", optionB: ""},
        {staredUnits: "80", optionA: "Random Support Item + Reforger", optionB: "Random Radiant Item + Reforger"},
        {staredUnits: "100", optionA: "Random Radiant Item + Reforger", optionB: "Random Support Item + Reforger"},
        {staredUnits: "120", optionA: "Tactician's Crown", optionB: ""},
        {staredUnits: "140", optionA: "Masterwork (Radiant Convert Consumabel)", optionB: ""},
        {staredUnits: "160", optionA: "50 Gold", optionB: ""},
        {staredUnits: "180", optionA: "3 Champion Duplicators", optionB: ""},
        {staredUnits: "200", optionA: "ITS A SECRET (O_O)", optionB: ""},
    ]
    return (
        <div className="component">
            <div className="componentHeader">Ixaocan Table</div>
            <div id="ixaocanComp">
            <table id="ixaocanTable">
              <thead>
                <tr>
                  <th>Number of Starred Units</th>
                  <th>Option A</th>
                  <th>Option B</th>
                </tr>
              </thead>
              <tbody>
                {championData.map((champion, index) => (
                  <tr key={index}>
                    <td>{champion.staredUnits}</td>
                    <td>{champion.optionA}</td>
                    <td>{champion.optionB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
    )
    }
    
export default IxaocanTable;
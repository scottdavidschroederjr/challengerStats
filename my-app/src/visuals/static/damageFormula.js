function DamageFormula(){
    const data = [
        { units: 1, damage: 2 },
        { units: 2, damage: 4 },
        { units: 3, damage: 6 },
        { units: 4, damage: 8 },
        { units: 5, damage: 10 },
        { units: 6, damage: 11 },
        { units: 7, damage: 12 },
        { units: 8, damage: 13 },
        { units: 9, damage: 14 },
        { units: 10, damage: 15 },
      ];
    
      const data2 = [
        { stage: "Stage 1", damage: 0 },
        { stage: "Stage 2", damage: 0 },
        { stage: "Stage 3", damage: 3 },
        { stage: "Stage 4", damage: 4 },
        { stage: "Stage 5", damage: 6 },
        { stage: "Stage 6", damage: 9 },
        { stage: "Stage 7+", damage: 15 },
      ];

return (
    <div className="component">
        <div className="componentHeader">Damage Formula</div>
            <div id="damageTables">
                <div id='damageTABLE'>
      <table >
        <thead>
          <tr>
            <th>Units</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.units}</td>
              <td>{row.damage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
      
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr key={index}>
              <td>{row.stage}</td>
              <td>{row.damage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
)       
}


export default  DamageFormula;
import React, { useState } from "react";

function DemaciaItems() {
    const championData = [
        { unit: "Cho'gath", item: "Warmog" },
        { unit: "Graves", item: "HoJ" },
        { unit: "Illaoi", item: "Adaptive" },
        { unit: "Jhin", item: "Deathblade" },
        { unit: "Kayle", item: "Guinsoo" },
        { unit: "Milio", item: "Adaptive" },
        { unit: "Poppy", item: "Redemption" },
        { unit: "Renekton", item: "Warmog" },
        { unit: "Galio", item: "Warmog" },
        { unit: "Naafiri", item: "HoJ" },
        { unit: "Soraka", item: "Adaptive" },
        { unit: "Taliyah", item: "Shojin" },
        { unit: "Warwick", item: "Titan" },
        { unit: "Darius", item: "Sterak" },
        { unit: "Neeko", item: "Crownguard" },
        { unit: "Quinn", item: "Deathblade" },
        { unit: "Rek'Sai", item: "Sterak" },
        { unit: "Sona", item: "Shojin" },
        { unit: "Taric", item: "Redemption" },
        { unit: "Azir", item: "Nashor" },
        { unit: "Fiora", item: "Bloodthirster" },
        { unit: "Jarvan", item: "Protector" },
        { unit: "Kai'sa", item: "Guardbreaker" },
        { unit: "Mordekaiser", item: "Nashor" },
        { unit: "Shen", item: "Gargoyle" },
        { unit: "Aatrox", item: "Bloodthirster" },
        { unit: "Ahri", item: "Archangel" },
        { unit: "Bel'Veth", item: "Rapidfire" },
        { unit: "Heimerdinger", item: "Shojin" },
        { unit: "K'sante", item: "Protector" },
        { unit: "Ryze", item: "Shojin" }
      ];

      const [searchTerm, setSearchTerm] = useState("");

      const filteredChampionData = championData.filter((champion) =>
        champion.unit.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <div className="component" id="demaciaComponent">
          <div className="componentHeader">Demacia Items</div>
          <input
              type="text"
              placeholder="Search by unit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          <div id="demaciaTable">
            
            <div><br></br></div>
            <table>
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {filteredChampionData.map((champion, index) => (
                  <tr key={index}>
                    <td>{champion.unit}</td>
                    <td>{champion.item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    export default DemaciaItems;
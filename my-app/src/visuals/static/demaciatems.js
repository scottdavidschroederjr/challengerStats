import React, { useState } from "react";

function DemaciaItems() {
    const championData = [
        { unit: "Cho'gath", item: "Warmog's Armor" },
        { unit: "Graves", item: "Hand of Justice" },
        { unit: "Illaoi", item: "Redemption" },
        { unit: "Jhin", item: "Deathblade" },
        { unit: "Kayle", item: "Giant Slayer" },
        { unit: "Milio", item: "Adaptive Helm" },
        { unit: "Poppy", item: "Gargoyle Stoneplate" },
        { unit: "Renekton", item: "Redemption" },
        { unit: "Galio", item: "Redemption" },
        { unit: "Naafiri", item: "Hand of Justice" },
        { unit: "Soraka", item: "Adaptive Helm" },
        { unit: "Taliyah", item: "Shojin" },
        { unit: "Warwick", item: "Titan's Resolve" },
        { unit: "Darius", item: "Sterak's Gage" },
        { unit: "Neeko", item: "Crownguard" },
        { unit: "Quinn", item: "Deathblade" },
        { unit: "Rek'Sai", item: "Sterak's Gage" },
        { unit: "Sona", item: "Shojin" },
        { unit: "Taric", item: "Redemption" },
        { unit: "Azir", item: "Nashor's Tooth" },
        { unit: "Fiora", item: "Sterak's Gage" },
        { unit: "Jarvan", item: "Warmog's Armor" },
        { unit: "Kai'sa", item: "Guardbreaker" },
        { unit: "Mordekaiser", item: "Nashor's Tooth" },
        { unit: "Shen", item: "Gargoyle Stoneplate" },
        { unit: "Aatrox", item: "Bloodthirster" },
        { unit: "Ahri", item: "Archangel's" },
        { unit: "Bel'Veth", item: "Rapid Firecannon" },
        { unit: "Heimerdinger", item: "Shojin" },
        { unit: "K'sante", item: "Protector's Vow" },
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
const { sq } = require("../db.js")
const { DataTypes } = require("sequelize");

const User = sq.define("puiid", {
    puuid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  
    name: {
      type: DataTypes.STRING,
    },
    
    accountID: {
        type: DataTypes.STRING,
      },
  
    id: {
        type: DataTypes.STRING,
      },
  });

const matchUsers = sq.define("matchUsers", {
    matchID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  
    game_datetime: {
      type: DataTypes.INTEGER,
    },
    
    game_length: {
      type: DataTypes.FLOAT,
    },
  
    queue_id: {
      type: DataTypes.STRING,
      },
    
    tft_game_type: {
      type: DataTypes.STRING,
      },

    tft_set_core_name: {
      type: DataTypes.STRING,
      },  

    tft_set_number: {
      type: DataTypes.STRING,
      },
    player1: {
      type: DataTypes.STRING,
    },
    player2: {
      type: DataTypes.STRING,
    },    
    player3: {
      type: DataTypes.STRING,
    },    
    player4: {
      type: DataTypes.STRING,
    },    
    player5: {
      type: DataTypes.STRING,
    },    
    player6: {
      type: DataTypes.STRING,
    },    
    player7: {
      type: DataTypes.STRING,
    },    
    player8: {
      type: DataTypes.STRING,
    }        
  });

const matchData = sq.define("matchData", {
    matchID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    player1: {
      type: DataTypes.STRING,
    },
    p1_gold_left: {
      type: DataTypes.INTEGER,
    },
    p1_last_round: {
      type: DataTypes.INTEGER,
    },
    p1_level: {
      type: DataTypes.INTEGER,
    },
    p1_placement: {
      type: DataTypes.INTEGER,
    },
    p1_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p1_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p1_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p1_augment1: {
      type: DataTypes.STRING,
    },
    p1_augment2: {
      type: DataTypes.STRING,
    },
    p1_augment3: {
      type: DataTypes.STRING,
    },
    player2: {
      type: DataTypes.STRING,
    },
    p2_gold_left: {
      type: DataTypes.INTEGER,
    },
    p2_last_round: {
      type: DataTypes.INTEGER,
    },
    p2_level: {
      type: DataTypes.INTEGER,
    },
    p2_placement: {
      type: DataTypes.INTEGER,
    },
    p2_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p2_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p2_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p2_augment1: {
      type: DataTypes.STRING,
    },
    p2_augment2: {
      type: DataTypes.STRING,
    },
    p2_augment3: {
      type: DataTypes.STRING,
    },
    player3: {
      type: DataTypes.STRING,
    },
    p3_gold_left: {
      type: DataTypes.INTEGER,
    },
    p3_last_round: {
      type: DataTypes.INTEGER,
    },
    p3_level: {
      type: DataTypes.INTEGER,
    },
    p3_placement: {
      type: DataTypes.INTEGER,
    },
    p3_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p3_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p3_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p3_augment1: {
      type: DataTypes.STRING,
    },
    p3_augment2: {
      type: DataTypes.STRING,
    },
    p3_augment3: {
      type: DataTypes.STRING,
    },
    player4: {
      type: DataTypes.STRING,
    },
    p4_gold_left: {
      type: DataTypes.INTEGER,
    },
    p4_last_round: {
      type: DataTypes.INTEGER,
    },
    p4_level: {
      type: DataTypes.INTEGER,
    },
    p4_placement: {
      type: DataTypes.INTEGER,
    },
    p4_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p4_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p4_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p4_augment1: {
      type: DataTypes.STRING,
    },
    p4_augment2: {
      type: DataTypes.STRING,
    },
    p4_augment3: {
      type: DataTypes.STRING,
    },  
    player5: {
      type: DataTypes.STRING,
    },
    p5_gold_left: {
      type: DataTypes.INTEGER,
    },
    p5_last_round: {
      type: DataTypes.INTEGER,
    },
    p5_level: {
      type: DataTypes.INTEGER,
    },
    p5_placement: {
      type: DataTypes.INTEGER,
    },
    p5_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p5_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p5_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p5_augment1: {
      type: DataTypes.STRING,
    },
    p5_augment2: {
      type: DataTypes.STRING,
    },
    p5_augment3: {
      type: DataTypes.STRING,
    },
    player6: {
      type: DataTypes.STRING,
    },
    p6_gold_left: {
      type: DataTypes.INTEGER,
    },
    p6_last_round: {
      type: DataTypes.INTEGER,
    },
    p6_level: {
      type: DataTypes.INTEGER,
    },
    p6_placement: {
      type: DataTypes.INTEGER,
    },
    p6_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p6_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p6_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p6_augment1: {
      type: DataTypes.STRING,
    },
    p6_augment2: {
      type: DataTypes.STRING,
    },
    p6_augment3: {
      type: DataTypes.STRING,
    },    
    player7: {
      type: DataTypes.STRING,
    },    
    p7_gold_left: {
      type: DataTypes.INTEGER,
    },
    p7_last_round: {
      type: DataTypes.INTEGER,
    },
    p7_level: {
      type: DataTypes.INTEGER,
    },
    p7_placement: {
      type: DataTypes.INTEGER,
    },
    p7_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p7_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p7_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p7_augment1: {
      type: DataTypes.STRING,
    },
    p7_augment2: {
      type: DataTypes.STRING,
    },
    p7_augment3: {
      type: DataTypes.STRING,
    },
    player8: {
      type: DataTypes.STRING,
    },
    p8_gold_left: {
      type: DataTypes.INTEGER,
    },
    p8_last_round: {
      type: DataTypes.INTEGER,
    },
    p8_level: {
      type: DataTypes.INTEGER,
    },
    p8_placement: {
      type: DataTypes.INTEGER,
    },
    p8_players_eliminated: {
      type: DataTypes.INTEGER,
    },
    p8_time_eliminated: {
      type: DataTypes.FLOAT,
    },
    p8_total_damage_to_players: {
      type: DataTypes.INTEGER,
    },
    p8_augment1: {
      type: DataTypes.STRING,
    },
    p8_augment2: {
      type: DataTypes.STRING,
    },
    p8_augment3: {
      type: DataTypes.STRING,
    }    
  });

//matchData.sync().then(() => {console.log("User Model synced");});
//User.sync().then(() => {console.log("User Model synced");});
//matchUsers.sync().then(() => {console.log("User Model synced");});

//var puuidAdd = User.create({
  //puuid: "4y7U0S8KJEdONYlueYzI_BHK22nE93gPmA783axCNcNOzC0M0ldpdcRs8ON-OAkMUA__t9QQNhRrLA",
  //name: "saveasuntitled",
  //accountID: "L9V81fZ7FKkJFzmrGCdh-PVmgWU339M8kbE6e67rgNVyRfM",
  //id: "w5NWTI5sktMcXVpeUqtyofoNvhydyGcxk_e-9PDjofsgCRU"
//})





module.exports = {User}
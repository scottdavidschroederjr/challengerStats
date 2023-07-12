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
    p1_t1_name: {
      type: DataTypes.STRING,
    },
    p1_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t1_style: {
      type: DataTypes.INTEGER,
    },
    p1_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t2_name: {
      type: DataTypes.STRING,
    },
    p1_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t2_style: {
      type: DataTypes.INTEGER,
    },
    p1_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t3_name: {
      type: DataTypes.STRING,
    },
    p1_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t3_style: {
      type: DataTypes.INTEGER,
    },
    p1_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t4_name: {
      type: DataTypes.STRING,
    },
    p1_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t4_style: {
      type: DataTypes.INTEGER,
    },
    p1_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t5_name: {
      type: DataTypes.STRING,
    },
    p1_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t5_style: {
      type: DataTypes.INTEGER,
    },
    p1_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t6_name: {
      type: DataTypes.STRING,
    },
    p1_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t6_style: {
      type: DataTypes.INTEGER,
    },
    p1_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t7_name: {
      type: DataTypes.STRING,
    },
    p1_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t7_style: {
      type: DataTypes.INTEGER,
    },
    p1_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t8_name: {
      type: DataTypes.STRING,
    },
    p1_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t8_style: {
      type: DataTypes.INTEGER,
    },
    p1_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t9_name: {
      type: DataTypes.STRING,
    },
    p1_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t9_style: {
      type: DataTypes.INTEGER,
    },
    p1_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t10_name: {
      type: DataTypes.STRING,
    },
    p1_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t10_style: {
      type: DataTypes.INTEGER,
    },
    p1_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t11_name: {
      type: DataTypes.STRING,
    },
    p1_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t11_style: {
      type: DataTypes.INTEGER,
    },
    p1_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t12_name: {
      type: DataTypes.STRING,
    },
    p1_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t12_style: {
      type: DataTypes.INTEGER,
    },
    p1_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t13_name: {
      type: DataTypes.STRING,
    },
    p1_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t13_style: {
      type: DataTypes.INTEGER,
    },
    p1_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t14_name: {
      type: DataTypes.STRING,
    },
    p1_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t14_style: {
      type: DataTypes.INTEGER,
    },
    p1_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t15_name: {
      type: DataTypes.STRING,
    },
    p1_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t15_style: {
      type: DataTypes.INTEGER,
    },
    p1_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t16_name: {
      type: DataTypes.STRING,
    },
    p1_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t16_style: {
      type: DataTypes.INTEGER,
    },
    p1_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t17_name: {
      type: DataTypes.STRING,
    },
    p1_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t17_style: {
      type: DataTypes.INTEGER,
    },
    p1_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t18_name: {
      type: DataTypes.STRING,
    },
    p1_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t18_style: {
      type: DataTypes.INTEGER,
    },
    p1_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t19_name: {
      type: DataTypes.STRING,
    },
    p1_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t19_style: {
      type: DataTypes.INTEGER,
    },
    p1_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p1_t20_name: {
      type: DataTypes.STRING,
    },
    p1_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p1_t20_style: {
      type: DataTypes.INTEGER,
    },
    p1_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p1_t20_tier_total: {
      type: DataTypes.INTEGER,
    },

//p2 stats
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
    p2_t1_name: {
      type: DataTypes.STRING,
    },
    p2_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t1_style: {
      type: DataTypes.INTEGER,
    },
    p2_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t2_name: {
      type: DataTypes.STRING,
    },
    p2_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t2_style: {
      type: DataTypes.INTEGER,
    },
    p2_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t3_name: {
      type: DataTypes.STRING,
    },
    p2_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t3_style: {
      type: DataTypes.INTEGER,
    },
    p2_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t4_name: {
      type: DataTypes.STRING,
    },
    p2_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t4_style: {
      type: DataTypes.INTEGER,
    },
    p2_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t5_name: {
      type: DataTypes.STRING,
    },
    p2_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t5_style: {
      type: DataTypes.INTEGER,
    },
    p2_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t6_name: {
      type: DataTypes.STRING,
    },
    p2_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t6_style: {
      type: DataTypes.INTEGER,
    },
    p2_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t7_name: {
      type: DataTypes.STRING,
    },
    p2_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t7_style: {
      type: DataTypes.INTEGER,
    },
    p2_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t8_name: {
      type: DataTypes.STRING,
    },
    p2_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t8_style: {
      type: DataTypes.INTEGER,
    },
    p2_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t9_name: {
      type: DataTypes.STRING,
    },
    p2_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t9_style: {
      type: DataTypes.INTEGER,
    },
    p2_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t10_name: {
      type: DataTypes.STRING,
    },
    p2_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t10_style: {
      type: DataTypes.INTEGER,
    },
    p2_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t11_name: {
      type: DataTypes.STRING,
    },
    p2_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t11_style: {
      type: DataTypes.INTEGER,
    },
    p2_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t12_name: {
      type: DataTypes.STRING,
    },
    p2_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t12_style: {
      type: DataTypes.INTEGER,
    },
    p2_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t13_name: {
      type: DataTypes.STRING,
    },
    p2_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t13_style: {
      type: DataTypes.INTEGER,
    },
    p2_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t14_name: {
      type: DataTypes.STRING,
    },
    p2_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t14_style: {
      type: DataTypes.INTEGER,
    },
    p2_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t15_name: {
      type: DataTypes.STRING,
    },
    p2_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t15_style: {
      type: DataTypes.INTEGER,
    },
    p2_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t16_name: {
      type: DataTypes.STRING,
    },
    p2_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t16_style: {
      type: DataTypes.INTEGER,
    },
    p2_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t17_name: {
      type: DataTypes.STRING,
    },
    p2_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t17_style: {
      type: DataTypes.INTEGER,
    },
    p2_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t18_name: {
      type: DataTypes.STRING,
    },
    p2_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t18_style: {
      type: DataTypes.INTEGER,
    },
    p2_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t19_name: {
      type: DataTypes.STRING,
    },
    p2_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t19_style: {
      type: DataTypes.INTEGER,
    },
    p2_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p2_t20_name: {
      type: DataTypes.STRING,
    },
    p2_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p2_t20_style: {
      type: DataTypes.INTEGER,
    },
    p2_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p2_t20_tier_total: {
      type: DataTypes.INTEGER,
    },




//p3 stats
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

    p3_t1_name: {
      type: DataTypes.STRING,
    },
    p3_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t1_style: {
      type: DataTypes.INTEGER,
    },
    p3_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t2_name: {
      type: DataTypes.STRING,
    },
    p3_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t2_style: {
      type: DataTypes.INTEGER,
    },
    p3_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t3_name: {
      type: DataTypes.STRING,
    },
    p3_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t3_style: {
      type: DataTypes.INTEGER,
    },
    p3_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t4_name: {
      type: DataTypes.STRING,
    },
    p3_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t4_style: {
      type: DataTypes.INTEGER,
    },
    p3_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t5_name: {
      type: DataTypes.STRING,
    },
    p3_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t5_style: {
      type: DataTypes.INTEGER,
    },
    p3_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t6_name: {
      type: DataTypes.STRING,
    },
    p3_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t6_style: {
      type: DataTypes.INTEGER,
    },
    p3_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t7_name: {
      type: DataTypes.STRING,
    },
    p3_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t7_style: {
      type: DataTypes.INTEGER,
    },
    p3_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t8_name: {
      type: DataTypes.STRING,
    },
    p3_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t8_style: {
      type: DataTypes.INTEGER,
    },
    p3_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t9_name: {
      type: DataTypes.STRING,
    },
    p3_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t9_style: {
      type: DataTypes.INTEGER,
    },
    p3_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t10_name: {
      type: DataTypes.STRING,
    },
    p3_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t10_style: {
      type: DataTypes.INTEGER,
    },
    p3_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t11_name: {
      type: DataTypes.STRING,
    },
    p3_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t11_style: {
      type: DataTypes.INTEGER,
    },
    p3_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t12_name: {
      type: DataTypes.STRING,
    },
    p3_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t12_style: {
      type: DataTypes.INTEGER,
    },
    p3_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t13_name: {
      type: DataTypes.STRING,
    },
    p3_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t13_style: {
      type: DataTypes.INTEGER,
    },
    p3_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t14_name: {
      type: DataTypes.STRING,
    },
    p3_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t14_style: {
      type: DataTypes.INTEGER,
    },
    p3_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t15_name: {
      type: DataTypes.STRING,
    },
    p3_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t15_style: {
      type: DataTypes.INTEGER,
    },
    p3_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t16_name: {
      type: DataTypes.STRING,
    },
    p3_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t16_style: {
      type: DataTypes.INTEGER,
    },
    p3_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t17_name: {
      type: DataTypes.STRING,
    },
    p3_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t17_style: {
      type: DataTypes.INTEGER,
    },
    p3_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t18_name: {
      type: DataTypes.STRING,
    },
    p3_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t18_style: {
      type: DataTypes.INTEGER,
    },
    p3_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t19_name: {
      type: DataTypes.STRING,
    },
    p3_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t19_style: {
      type: DataTypes.INTEGER,
    },
    p3_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p3_t20_name: {
      type: DataTypes.STRING,
    },
    p3_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p3_t20_style: {
      type: DataTypes.INTEGER,
    },
    p3_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p3_t20_tier_total: {
      type: DataTypes.INTEGER,
    },

    //p4 stats
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
    p4_t1_name: {
      type: DataTypes.STRING,
    },
    p4_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t1_style: {
      type: DataTypes.INTEGER,
    },
    p4_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t2_name: {
      type: DataTypes.STRING,
    },
    p4_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t2_style: {
      type: DataTypes.INTEGER,
    },
    p4_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t3_name: {
      type: DataTypes.STRING,
    },
    p4_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t3_style: {
      type: DataTypes.INTEGER,
    },
    p4_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t4_name: {
      type: DataTypes.STRING,
    },
    p4_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t4_style: {
      type: DataTypes.INTEGER,
    },
    p4_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t5_name: {
      type: DataTypes.STRING,
    },
    p4_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t5_style: {
      type: DataTypes.INTEGER,
    },
    p4_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t6_name: {
      type: DataTypes.STRING,
    },
    p4_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t6_style: {
      type: DataTypes.INTEGER,
    },
    p4_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t7_name: {
      type: DataTypes.STRING,
    },
    p4_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t7_style: {
      type: DataTypes.INTEGER,
    },
    p4_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t8_name: {
      type: DataTypes.STRING,
    },
    p4_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t8_style: {
      type: DataTypes.INTEGER,
    },
    p4_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t9_name: {
      type: DataTypes.STRING,
    },
    p4_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t9_style: {
      type: DataTypes.INTEGER,
    },
    p4_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t10_name: {
      type: DataTypes.STRING,
    },
    p4_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t10_style: {
      type: DataTypes.INTEGER,
    },
    p4_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t11_name: {
      type: DataTypes.STRING,
    },
    p4_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t11_style: {
      type: DataTypes.INTEGER,
    },
    p4_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t12_name: {
      type: DataTypes.STRING,
    },
    p4_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t12_style: {
      type: DataTypes.INTEGER,
    },
    p4_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t13_name: {
      type: DataTypes.STRING,
    },
    p4_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t13_style: {
      type: DataTypes.INTEGER,
    },
    p4_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t14_name: {
      type: DataTypes.STRING,
    },
    p4_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t14_style: {
      type: DataTypes.INTEGER,
    },
    p4_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t15_name: {
      type: DataTypes.STRING,
    },
    p4_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t15_style: {
      type: DataTypes.INTEGER,
    },
    p4_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t16_name: {
      type: DataTypes.STRING,
    },
    p4_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t16_style: {
      type: DataTypes.INTEGER,
    },
    p4_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t17_name: {
      type: DataTypes.STRING,
    },
    p4_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t17_style: {
      type: DataTypes.INTEGER,
    },
    p4_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t18_name: {
      type: DataTypes.STRING,
    },
    p4_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t18_style: {
      type: DataTypes.INTEGER,
    },
    p4_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t19_name: {
      type: DataTypes.STRING,
    },
    p4_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t19_style: {
      type: DataTypes.INTEGER,
    },
    p4_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p4_t20_name: {
      type: DataTypes.STRING,
    },
    p4_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p4_t20_style: {
      type: DataTypes.INTEGER,
    },
    p4_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p4_t20_tier_total: {
      type: DataTypes.INTEGER,
    },

    //p5 stats
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

    p5_t1_name: {
      type: DataTypes.STRING,
    },
    p5_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t1_style: {
      type: DataTypes.INTEGER,
    },
    p5_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t2_name: {
      type: DataTypes.STRING,
    },
    p5_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t2_style: {
      type: DataTypes.INTEGER,
    },
    p5_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t3_name: {
      type: DataTypes.STRING,
    },
    p5_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t3_style: {
      type: DataTypes.INTEGER,
    },
    p5_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t4_name: {
      type: DataTypes.STRING,
    },
    p5_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t4_style: {
      type: DataTypes.INTEGER,
    },
    p5_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t5_name: {
      type: DataTypes.STRING,
    },
    p5_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t5_style: {
      type: DataTypes.INTEGER,
    },
    p5_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t6_name: {
      type: DataTypes.STRING,
    },
    p5_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t6_style: {
      type: DataTypes.INTEGER,
    },
    p5_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t7_name: {
      type: DataTypes.STRING,
    },
    p5_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t7_style: {
      type: DataTypes.INTEGER,
    },
    p5_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t8_name: {
      type: DataTypes.STRING,
    },
    p5_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t8_style: {
      type: DataTypes.INTEGER,
    },
    p5_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t9_name: {
      type: DataTypes.STRING,
    },
    p5_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t9_style: {
      type: DataTypes.INTEGER,
    },
    p5_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t10_name: {
      type: DataTypes.STRING,
    },
    p5_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t10_style: {
      type: DataTypes.INTEGER,
    },
    p5_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t11_name: {
      type: DataTypes.STRING,
    },
    p5_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t11_style: {
      type: DataTypes.INTEGER,
    },
    p5_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t12_name: {
      type: DataTypes.STRING,
    },
    p5_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t12_style: {
      type: DataTypes.INTEGER,
    },
    p5_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t13_name: {
      type: DataTypes.STRING,
    },
    p5_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t13_style: {
      type: DataTypes.INTEGER,
    },
    p5_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t14_name: {
      type: DataTypes.STRING,
    },
    p5_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t14_style: {
      type: DataTypes.INTEGER,
    },
    p5_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t15_name: {
      type: DataTypes.STRING,
    },
    p5_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t15_style: {
      type: DataTypes.INTEGER,
    },
    p5_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t16_name: {
      type: DataTypes.STRING,
    },
    p5_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t16_style: {
      type: DataTypes.INTEGER,
    },
    p5_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t17_name: {
      type: DataTypes.STRING,
    },
    p5_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t17_style: {
      type: DataTypes.INTEGER,
    },
    p5_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t18_name: {
      type: DataTypes.STRING,
    },
    p5_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t18_style: {
      type: DataTypes.INTEGER,
    },
    p5_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t19_name: {
      type: DataTypes.STRING,
    },
    p5_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t19_style: {
      type: DataTypes.INTEGER,
    },
    p5_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p5_t20_name: {
      type: DataTypes.STRING,
    },
    p5_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p5_t20_style: {
      type: DataTypes.INTEGER,
    },
    p5_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p5_t20_tier_total: {
      type: DataTypes.INTEGER,
    },


    //p6 stats
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
    p6_t1_name: {
      type: DataTypes.STRING,
    },
    p6_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t1_style: {
      type: DataTypes.INTEGER,
    },
    p6_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t2_name: {
      type: DataTypes.STRING,
    },
    p6_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t2_style: {
      type: DataTypes.INTEGER,
    },
    p6_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t3_name: {
      type: DataTypes.STRING,
    },
    p6_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t3_style: {
      type: DataTypes.INTEGER,
    },
    p6_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t4_name: {
      type: DataTypes.STRING,
    },
    p6_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t4_style: {
      type: DataTypes.INTEGER,
    },
    p6_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t5_name: {
      type: DataTypes.STRING,
    },
    p6_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t5_style: {
      type: DataTypes.INTEGER,
    },
    p6_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t6_name: {
      type: DataTypes.STRING,
    },
    p6_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t6_style: {
      type: DataTypes.INTEGER,
    },
    p6_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t7_name: {
      type: DataTypes.STRING,
    },
    p6_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t7_style: {
      type: DataTypes.INTEGER,
    },
    p6_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t8_name: {
      type: DataTypes.STRING,
    },
    p6_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t8_style: {
      type: DataTypes.INTEGER,
    },
    p6_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t9_name: {
      type: DataTypes.STRING,
    },
    p6_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t9_style: {
      type: DataTypes.INTEGER,
    },
    p6_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t10_name: {
      type: DataTypes.STRING,
    },
    p6_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t10_style: {
      type: DataTypes.INTEGER,
    },
    p6_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t11_name: {
      type: DataTypes.STRING,
    },
    p6_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t11_style: {
      type: DataTypes.INTEGER,
    },
    p6_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t12_name: {
      type: DataTypes.STRING,
    },
    p6_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t12_style: {
      type: DataTypes.INTEGER,
    },
    p6_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t13_name: {
      type: DataTypes.STRING,
    },
    p6_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t13_style: {
      type: DataTypes.INTEGER,
    },
    p6_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t14_name: {
      type: DataTypes.STRING,
    },
    p6_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t14_style: {
      type: DataTypes.INTEGER,
    },
    p6_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t15_name: {
      type: DataTypes.STRING,
    },
    p6_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t15_style: {
      type: DataTypes.INTEGER,
    },
    p6_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t16_name: {
      type: DataTypes.STRING,
    },
    p6_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t16_style: {
      type: DataTypes.INTEGER,
    },
    p6_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t17_name: {
      type: DataTypes.STRING,
    },
    p6_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t17_style: {
      type: DataTypes.INTEGER,
    },
    p6_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t18_name: {
      type: DataTypes.STRING,
    },
    p6_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t18_style: {
      type: DataTypes.INTEGER,
    },
    p6_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t19_name: {
      type: DataTypes.STRING,
    },
    p6_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t19_style: {
      type: DataTypes.INTEGER,
    },
    p6_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p6_t20_name: {
      type: DataTypes.STRING,
    },
    p6_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p6_t20_style: {
      type: DataTypes.INTEGER,
    },
    p6_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p6_t20_tier_total: {
      type: DataTypes.INTEGER,
    },


    //p7 stats
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
    p7_t1_name: {
      type: DataTypes.STRING,
    },
    p7_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t1_style: {
      type: DataTypes.INTEGER,
    },
    p7_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t2_name: {
      type: DataTypes.STRING,
    },
    p7_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t2_style: {
      type: DataTypes.INTEGER,
    },
    p7_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t3_name: {
      type: DataTypes.STRING,
    },
    p7_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t3_style: {
      type: DataTypes.INTEGER,
    },
    p7_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t4_name: {
      type: DataTypes.STRING,
    },
    p7_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t4_style: {
      type: DataTypes.INTEGER,
    },
    p7_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t5_name: {
      type: DataTypes.STRING,
    },
    p7_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t5_style: {
      type: DataTypes.INTEGER,
    },
    p7_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t6_name: {
      type: DataTypes.STRING,
    },
    p7_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t6_style: {
      type: DataTypes.INTEGER,
    },
    p7_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t7_name: {
      type: DataTypes.STRING,
    },
    p7_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t7_style: {
      type: DataTypes.INTEGER,
    },
    p7_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t8_name: {
      type: DataTypes.STRING,
    },
    p7_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t8_style: {
      type: DataTypes.INTEGER,
    },
    p7_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t9_name: {
      type: DataTypes.STRING,
    },
    p7_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t9_style: {
      type: DataTypes.INTEGER,
    },
    p7_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t10_name: {
      type: DataTypes.STRING,
    },
    p7_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t10_style: {
      type: DataTypes.INTEGER,
    },
    p7_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t11_name: {
      type: DataTypes.STRING,
    },
    p7_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t11_style: {
      type: DataTypes.INTEGER,
    },
    p7_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t12_name: {
      type: DataTypes.STRING,
    },
    p7_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t12_style: {
      type: DataTypes.INTEGER,
    },
    p7_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t13_name: {
      type: DataTypes.STRING,
    },
    p7_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t13_style: {
      type: DataTypes.INTEGER,
    },
    p7_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t14_name: {
      type: DataTypes.STRING,
    },
    p7_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t14_style: {
      type: DataTypes.INTEGER,
    },
    p7_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t15_name: {
      type: DataTypes.STRING,
    },
    p7_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t15_style: {
      type: DataTypes.INTEGER,
    },
    p7_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t16_name: {
      type: DataTypes.STRING,
    },
    p7_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t16_style: {
      type: DataTypes.INTEGER,
    },
    p7_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t17_name: {
      type: DataTypes.STRING,
    },
    p7_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t17_style: {
      type: DataTypes.INTEGER,
    },
    p7_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t18_name: {
      type: DataTypes.STRING,
    },
    p7_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t18_style: {
      type: DataTypes.INTEGER,
    },
    p7_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t19_name: {
      type: DataTypes.STRING,
    },
    p7_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t19_style: {
      type: DataTypes.INTEGER,
    },
    p7_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p7_t20_name: {
      type: DataTypes.STRING,
    },
    p7_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p7_t20_style: {
      type: DataTypes.INTEGER,
    },
    p7_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p7_t20_tier_total: {
      type: DataTypes.INTEGER,
    },


    //p8 stats
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
    },   
    p8_t1_name: {
      type: DataTypes.STRING,
    },
    p8_t1_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t1_style: {
      type: DataTypes.INTEGER,
    },
    p8_t1_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t1_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t2_name: {
      type: DataTypes.STRING,
    },
    p8_t2_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t2_style: {
      type: DataTypes.INTEGER,
    },
    p8_t2_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t2_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t3_name: {
      type: DataTypes.STRING,
    },
    p8_t3_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t3_style: {
      type: DataTypes.INTEGER,
    },
    p8_t3_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t3_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t4_name: {
      type: DataTypes.STRING,
    },
    p8_t4_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t4_style: {
      type: DataTypes.INTEGER,
    },
    p8_t4_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t4_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t5_name: {
      type: DataTypes.STRING,
    },
    p8_t5_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t5_style: {
      type: DataTypes.INTEGER,
    },
    p8_t5_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t5_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t6_name: {
      type: DataTypes.STRING,
    },
    p8_t6_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t6_style: {
      type: DataTypes.INTEGER,
    },
    p8_t6_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t6_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t7_name: {
      type: DataTypes.STRING,
    },
    p8_t7_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t7_style: {
      type: DataTypes.INTEGER,
    },
    p8_t7_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t7_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t8_name: {
      type: DataTypes.STRING,
    },
    p8_t8_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t8_style: {
      type: DataTypes.INTEGER,
    },
    p8_t8_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t8_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t9_name: {
      type: DataTypes.STRING,
    },
    p8_t9_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t9_style: {
      type: DataTypes.INTEGER,
    },
    p8_t9_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t9_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t10_name: {
      type: DataTypes.STRING,
    },
    p8_t10_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t10_style: {
      type: DataTypes.INTEGER,
    },
    p8_t10_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t10_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t11_name: {
      type: DataTypes.STRING,
    },
    p8_t11_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t11_style: {
      type: DataTypes.INTEGER,
    },
    p8_t11_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t11_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t12_name: {
      type: DataTypes.STRING,
    },
    p8_t12_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t12_style: {
      type: DataTypes.INTEGER,
    },
    p8_t12_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t12_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t13_name: {
      type: DataTypes.STRING,
    },
    p8_t13_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t13_style: {
      type: DataTypes.INTEGER,
    },
    p8_t13_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t13_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t14_name: {
      type: DataTypes.STRING,
    },
    p8_t14_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t14_style: {
      type: DataTypes.INTEGER,
    },
    p8_t14_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t14_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t15_name: {
      type: DataTypes.STRING,
    },
    p8_t15_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t15_style: {
      type: DataTypes.INTEGER,
    },
    p8_t15_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t15_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t16_name: {
      type: DataTypes.STRING,
    },
    p8_t16_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t16_style: {
      type: DataTypes.INTEGER,
    },
    p8_t16_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t16_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t17_name: {
      type: DataTypes.STRING,
    },
    p8_t17_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t17_style: {
      type: DataTypes.INTEGER,
    },
    p8_t17_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t17_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t18_name: {
      type: DataTypes.STRING,
    },
    p8_t18_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t18_style: {
      type: DataTypes.INTEGER,
    },
    p8_t18_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t18_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t19_name: {
      type: DataTypes.STRING,
    },
    p8_t19_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t19_style: {
      type: DataTypes.INTEGER,
    },
    p8_t19_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t19_tier_total: {
      type: DataTypes.INTEGER,
    },
    p8_t20_name: {
      type: DataTypes.STRING,
    },
    p8_t20_num_units: {
      type: DataTypes.INTEGER,
    },
    p8_t20_style: {
      type: DataTypes.INTEGER,
    },
    p8_t20_tier_current: {
      type: DataTypes.INTEGER,
    },
    p8_t20_tier_total: {
      type: DataTypes.INTEGER,
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





module.exports = {User, matchUsers, matchData}
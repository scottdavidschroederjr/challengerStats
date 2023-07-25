const { sq } = require("../db.js")
const { DataTypes } = require("sequelize");

sq.sync()

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

    rank: {
      type: DataTypes.STRING,
    },
    division: {
      type: DataTypes.STRING,
    }
  });

const matchUsers = sq.define("matchUsers", {
    matchID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  
    game_datetime: {
      type: DataTypes.BIGINT,
    },
    
    game_length: {
      type: DataTypes.FLOAT,
    },
  
    queue_id: {
      type: DataTypes.SMALLINT,
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

const generalMatchData = sq.define("generalMatchData", {
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
   
  });

const traitMatchData = sq.define("traitMatchData", {
      matchID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    //player 1
    p1_t1_name: {
      type: DataTypes.STRING,
    },
    p1_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t2_name: {
      type: DataTypes.STRING,
    },
    p1_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t3_name: {
      type: DataTypes.STRING,
    },
    p1_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t4_name: {
      type: DataTypes.STRING,
    },
    p1_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t5_name: {
      type: DataTypes.STRING,
    },
    p1_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t6_name: {
      type: DataTypes.STRING,
    },
    p1_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t7_name: {
      type: DataTypes.STRING,
    },
    p1_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t8_name: {
      type: DataTypes.STRING,
    },
    p1_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t9_name: {
      type: DataTypes.STRING,
    },
    p1_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t10_name: {
      type: DataTypes.STRING,
    },
    p1_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t11_name: {
      type: DataTypes.STRING,
    },
    p1_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t12_name: {
      type: DataTypes.STRING,
    },
    p1_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t13_name: {
      type: DataTypes.STRING,
    },
    p1_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t14_name: {
      type: DataTypes.STRING,
    },
    p1_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t15_name: {
      type: DataTypes.STRING,
    },
    p1_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t16_name: {
      type: DataTypes.STRING,
    },
    p1_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t17_name: {
      type: DataTypes.STRING,
    },
    p1_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t18_name: {
      type: DataTypes.STRING,
    },
    p1_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t19_name: {
      type: DataTypes.STRING,
    },
    p1_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t20_name: {
      type: DataTypes.STRING,
    },
    p1_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t21_name: {
      type: DataTypes.STRING,
    },
    p1_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t22_name: {
      type: DataTypes.STRING,
    },
    p1_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t23_name: {
      type: DataTypes.STRING,
    },
    p1_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t24_name: {
      type: DataTypes.STRING,
    },
    p1_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t25_name: {
      type: DataTypes.STRING,
    },
    p1_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t26_name: {
      type: DataTypes.STRING,
    },
    p1_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t27_name: {
      type: DataTypes.STRING,
    },
    p1_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t28_name: {
      type: DataTypes.STRING,
    },
    p1_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t29_name: {
      type: DataTypes.STRING,
    },
    p1_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p1_t30_name: {
      type: DataTypes.STRING,
    },
    p1_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p1_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p1_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p1_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },

    //player 2 
    p2_t1_name: {
      type: DataTypes.STRING,
    },
    p2_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t2_name: {
      type: DataTypes.STRING,
    },
    p2_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t3_name: {
      type: DataTypes.STRING,
    },
    p2_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t4_name: {
      type: DataTypes.STRING,
    },
    p2_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t5_name: {
      type: DataTypes.STRING,
    },
    p2_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t6_name: {
      type: DataTypes.STRING,
    },
    p2_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t7_name: {
      type: DataTypes.STRING,
    },
    p2_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t8_name: {
      type: DataTypes.STRING,
    },
    p2_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t9_name: {
      type: DataTypes.STRING,
    },
    p2_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t10_name: {
      type: DataTypes.STRING,
    },
    p2_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t11_name: {
      type: DataTypes.STRING,
    },
    p2_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t12_name: {
      type: DataTypes.STRING,
    },
    p2_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t13_name: {
      type: DataTypes.STRING,
    },
    p2_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t14_name: {
      type: DataTypes.STRING,
    },
    p2_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t15_name: {
      type: DataTypes.STRING,
    },
    p2_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t16_name: {
      type: DataTypes.STRING,
    },
    p2_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t17_name: {
      type: DataTypes.STRING,
    },
    p2_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t18_name: {
      type: DataTypes.STRING,
    },
    p2_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t19_name: {
      type: DataTypes.STRING,
    },
    p2_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t20_name: {
      type: DataTypes.STRING,
    },
    p2_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t21_name: {
      type: DataTypes.STRING,
    },
    p2_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t22_name: {
      type: DataTypes.STRING,
    },
    p2_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t23_name: {
      type: DataTypes.STRING,
    },
    p2_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t24_name: {
      type: DataTypes.STRING,
    },
    p2_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t25_name: {
      type: DataTypes.STRING,
    },
    p2_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t26_name: {
      type: DataTypes.STRING,
    },
    p2_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t27_name: {
      type: DataTypes.STRING,
    },
    p2_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t28_name: {
      type: DataTypes.STRING,
    },
    p2_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t29_name: {
      type: DataTypes.STRING,
    },
    p2_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p2_t30_name: {
      type: DataTypes.STRING,
    },
    p2_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p2_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p2_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p2_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t1_name: {
      type: DataTypes.STRING,
    },
    p3_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t2_name: {
      type: DataTypes.STRING,
    },
    p3_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t3_name: {
      type: DataTypes.STRING,
    },
    p3_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t4_name: {
      type: DataTypes.STRING,
    },
    p3_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t5_name: {
      type: DataTypes.STRING,
    },
    p3_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t6_name: {
      type: DataTypes.STRING,
    },
    p3_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t7_name: {
      type: DataTypes.STRING,
    },
    p3_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t8_name: {
      type: DataTypes.STRING,
    },
    p3_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t9_name: {
      type: DataTypes.STRING,
    },
    p3_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t10_name: {
      type: DataTypes.STRING,
    },
    p3_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t11_name: {
      type: DataTypes.STRING,
    },
    p3_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t12_name: {
      type: DataTypes.STRING,
    },
    p3_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t13_name: {
      type: DataTypes.STRING,
    },
    p3_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t14_name: {
      type: DataTypes.STRING,
    },
    p3_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t15_name: {
      type: DataTypes.STRING,
    },
    p3_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t16_name: {
      type: DataTypes.STRING,
    },
    p3_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t17_name: {
      type: DataTypes.STRING,
    },
    p3_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t18_name: {
      type: DataTypes.STRING,
    },
    p3_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t19_name: {
      type: DataTypes.STRING,
    },
    p3_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t20_name: {
      type: DataTypes.STRING,
    },
    p3_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t21_name: {
      type: DataTypes.STRING,
    },
    p3_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t22_name: {
      type: DataTypes.STRING,
    },
    p3_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t23_name: {
      type: DataTypes.STRING,
    },
    p3_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t24_name: {
      type: DataTypes.STRING,
    },
    p3_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t25_name: {
      type: DataTypes.STRING,
    },
    p3_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t26_name: {
      type: DataTypes.STRING,
    },
    p3_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t27_name: {
      type: DataTypes.STRING,
    },
    p3_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t28_name: {
      type: DataTypes.STRING,
    },
    p3_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t29_name: {
      type: DataTypes.STRING,
    },
    p3_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p3_t30_name: {
      type: DataTypes.STRING,
    },
    p3_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p3_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p3_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p3_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t1_name: {
      type: DataTypes.STRING,
    },
    p4_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t2_name: {
      type: DataTypes.STRING,
    },
    p4_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t3_name: {
      type: DataTypes.STRING,
    },
    p4_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t4_name: {
      type: DataTypes.STRING,
    },
    p4_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t5_name: {
      type: DataTypes.STRING,
    },
    p4_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t6_name: {
      type: DataTypes.STRING,
    },
    p4_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t7_name: {
      type: DataTypes.STRING,
    },
    p4_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t8_name: {
      type: DataTypes.STRING,
    },
    p4_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t9_name: {
      type: DataTypes.STRING,
    },
    p4_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t10_name: {
      type: DataTypes.STRING,
    },
    p4_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t11_name: {
      type: DataTypes.STRING,
    },
    p4_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t12_name: {
      type: DataTypes.STRING,
    },
    p4_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t13_name: {
      type: DataTypes.STRING,
    },
    p4_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t14_name: {
      type: DataTypes.STRING,
    },
    p4_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t15_name: {
      type: DataTypes.STRING,
    },
    p4_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t16_name: {
      type: DataTypes.STRING,
    },
    p4_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t17_name: {
      type: DataTypes.STRING,
    },
    p4_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t18_name: {
      type: DataTypes.STRING,
    },
    p4_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t19_name: {
      type: DataTypes.STRING,
    },
    p4_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t20_name: {
      type: DataTypes.STRING,
    },
    p4_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t21_name: {
      type: DataTypes.STRING,
    },
    p4_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t22_name: {
      type: DataTypes.STRING,
    },
    p4_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t23_name: {
      type: DataTypes.STRING,
    },
    p4_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t24_name: {
      type: DataTypes.STRING,
    },
    p4_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t25_name: {
      type: DataTypes.STRING,
    },
    p4_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t26_name: {
      type: DataTypes.STRING,
    },
    p4_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t27_name: {
      type: DataTypes.STRING,
    },
    p4_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t28_name: {
      type: DataTypes.STRING,
    },
    p4_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t29_name: {
      type: DataTypes.STRING,
    },
    p4_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p4_t30_name: {
      type: DataTypes.STRING,
    },
    p4_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p4_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p4_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p4_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t1_name: {
      type: DataTypes.STRING,
    },
    p5_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t2_name: {
      type: DataTypes.STRING,
    },
    p5_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t3_name: {
      type: DataTypes.STRING,
    },
    p5_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t4_name: {
      type: DataTypes.STRING,
    },
    p5_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t5_name: {
      type: DataTypes.STRING,
    },
    p5_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t6_name: {
      type: DataTypes.STRING,
    },
    p5_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t7_name: {
      type: DataTypes.STRING,
    },
    p5_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t8_name: {
      type: DataTypes.STRING,
    },
    p5_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t9_name: {
      type: DataTypes.STRING,
    },
    p5_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t10_name: {
      type: DataTypes.STRING,
    },
    p5_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t11_name: {
      type: DataTypes.STRING,
    },
    p5_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t12_name: {
      type: DataTypes.STRING,
    },
    p5_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t13_name: {
      type: DataTypes.STRING,
    },
    p5_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t14_name: {
      type: DataTypes.STRING,
    },
    p5_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t15_name: {
      type: DataTypes.STRING,
    },
    p5_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t16_name: {
      type: DataTypes.STRING,
    },
    p5_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t17_name: {
      type: DataTypes.STRING,
    },
    p5_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t18_name: {
      type: DataTypes.STRING,
    },
    p5_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t19_name: {
      type: DataTypes.STRING,
    },
    p5_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t20_name: {
      type: DataTypes.STRING,
    },
    p5_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t21_name: {
      type: DataTypes.STRING,
    },
    p5_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t22_name: {
      type: DataTypes.STRING,
    },
    p5_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t23_name: {
      type: DataTypes.STRING,
    },
    p5_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t24_name: {
      type: DataTypes.STRING,
    },
    p5_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t25_name: {
      type: DataTypes.STRING,
    },
    p5_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t26_name: {
      type: DataTypes.STRING,
    },
    p5_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t27_name: {
      type: DataTypes.STRING,
    },
    p5_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t28_name: {
      type: DataTypes.STRING,
    },
    p5_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t29_name: {
      type: DataTypes.STRING,
    },
    p5_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p5_t30_name: {
      type: DataTypes.STRING,
    },
    p5_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p5_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p5_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p5_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t1_name: {
      type: DataTypes.STRING,
    },
    p6_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t2_name: {
      type: DataTypes.STRING,
    },
    p6_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t3_name: {
      type: DataTypes.STRING,
    },
    p6_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t4_name: {
      type: DataTypes.STRING,
    },
    p6_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t5_name: {
      type: DataTypes.STRING,
    },
    p6_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t6_name: {
      type: DataTypes.STRING,
    },
    p6_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t7_name: {
      type: DataTypes.STRING,
    },
    p6_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t8_name: {
      type: DataTypes.STRING,
    },
    p6_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t9_name: {
      type: DataTypes.STRING,
    },
    p6_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t10_name: {
      type: DataTypes.STRING,
    },
    p6_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t11_name: {
      type: DataTypes.STRING,
    },
    p6_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t12_name: {
      type: DataTypes.STRING,
    },
    p6_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t13_name: {
      type: DataTypes.STRING,
    },
    p6_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t14_name: {
      type: DataTypes.STRING,
    },
    p6_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t15_name: {
      type: DataTypes.STRING,
    },
    p6_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t16_name: {
      type: DataTypes.STRING,
    },
    p6_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t17_name: {
      type: DataTypes.STRING,
    },
    p6_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t18_name: {
      type: DataTypes.STRING,
    },
    p6_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t19_name: {
      type: DataTypes.STRING,
    },
    p6_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t20_name: {
      type: DataTypes.STRING,
    },
    p6_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t21_name: {
      type: DataTypes.STRING,
    },
    p6_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t22_name: {
      type: DataTypes.STRING,
    },
    p6_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t23_name: {
      type: DataTypes.STRING,
    },
    p6_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t24_name: {
      type: DataTypes.STRING,
    },
    p6_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t25_name: {
      type: DataTypes.STRING,
    },
    p6_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t26_name: {
      type: DataTypes.STRING,
    },
    p6_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t27_name: {
      type: DataTypes.STRING,
    },
    p6_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t28_name: {
      type: DataTypes.STRING,
    },
    p6_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t29_name: {
      type: DataTypes.STRING,
    },
    p6_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p6_t30_name: {
      type: DataTypes.STRING,
    },
    p6_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p6_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p6_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p6_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t1_name: {
      type: DataTypes.STRING,
    },
    p7_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t2_name: {
      type: DataTypes.STRING,
    },
    p7_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t3_name: {
      type: DataTypes.STRING,
    },
    p7_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t4_name: {
      type: DataTypes.STRING,
    },
    p7_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t5_name: {
      type: DataTypes.STRING,
    },
    p7_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t6_name: {
      type: DataTypes.STRING,
    },
    p7_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t7_name: {
      type: DataTypes.STRING,
    },
    p7_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t8_name: {
      type: DataTypes.STRING,
    },
    p7_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t9_name: {
      type: DataTypes.STRING,
    },
    p7_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t10_name: {
      type: DataTypes.STRING,
    },
    p7_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t11_name: {
      type: DataTypes.STRING,
    },
    p7_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t12_name: {
      type: DataTypes.STRING,
    },
    p7_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t13_name: {
      type: DataTypes.STRING,
    },
    p7_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t14_name: {
      type: DataTypes.STRING,
    },
    p7_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t15_name: {
      type: DataTypes.STRING,
    },
    p7_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t16_name: {
      type: DataTypes.STRING,
    },
    p7_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t17_name: {
      type: DataTypes.STRING,
    },
    p7_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t18_name: {
      type: DataTypes.STRING,
    },
    p7_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t19_name: {
      type: DataTypes.STRING,
    },
    p7_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t20_name: {
      type: DataTypes.STRING,
    },
    p7_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t21_name: {
      type: DataTypes.STRING,
    },
    p7_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t22_name: {
      type: DataTypes.STRING,
    },
    p7_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t23_name: {
      type: DataTypes.STRING,
    },
    p7_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t24_name: {
      type: DataTypes.STRING,
    },
    p7_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t25_name: {
      type: DataTypes.STRING,
    },
    p7_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t26_name: {
      type: DataTypes.STRING,
    },
    p7_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t27_name: {
      type: DataTypes.STRING,
    },
    p7_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t28_name: {
      type: DataTypes.STRING,
    },
    p7_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t29_name: {
      type: DataTypes.STRING,
    },
    p7_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p7_t30_name: {
      type: DataTypes.STRING,
    },
    p7_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p7_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p7_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p7_t30_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t1_name: {
      type: DataTypes.STRING,
    },
    p8_t1_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t1_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t1_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t1_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t2_name: {
      type: DataTypes.STRING,
    },
    p8_t2_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t2_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t2_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t2_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t3_name: {
      type: DataTypes.STRING,
    },
    p8_t3_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t3_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t3_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t3_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t4_name: {
      type: DataTypes.STRING,
    },
    p8_t4_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t4_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t4_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t4_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t5_name: {
      type: DataTypes.STRING,
    },
    p8_t5_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t5_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t5_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t5_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t6_name: {
      type: DataTypes.STRING,
    },
    p8_t6_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t6_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t6_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t6_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t7_name: {
      type: DataTypes.STRING,
    },
    p8_t7_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t7_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t7_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t7_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t8_name: {
      type: DataTypes.STRING,
    },
    p8_t8_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t8_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t8_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t8_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t9_name: {
      type: DataTypes.STRING,
    },
    p8_t9_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t9_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t9_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t9_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t10_name: {
      type: DataTypes.STRING,
    },
    p8_t10_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t10_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t10_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t10_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t11_name: {
      type: DataTypes.STRING,
    },
    p8_t11_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t11_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t11_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t11_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t12_name: {
      type: DataTypes.STRING,
    },
    p8_t12_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t12_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t12_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t12_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t13_name: {
      type: DataTypes.STRING,
    },
    p8_t13_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t13_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t13_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t13_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t14_name: {
      type: DataTypes.STRING,
    },
    p8_t14_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t14_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t14_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t14_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t15_name: {
      type: DataTypes.STRING,
    },
    p8_t15_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t15_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t15_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t15_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t16_name: {
      type: DataTypes.STRING,
    },
    p8_t16_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t16_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t16_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t16_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t17_name: {
      type: DataTypes.STRING,
    },
    p8_t17_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t17_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t17_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t17_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t18_name: {
      type: DataTypes.STRING,
    },
    p8_t18_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t18_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t18_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t18_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t19_name: {
      type: DataTypes.STRING,
    },
    p8_t19_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t19_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t19_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t19_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t20_name: {
      type: DataTypes.STRING,
    },
    p8_t20_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t20_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t20_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t20_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t21_name: {
      type: DataTypes.STRING,
    },
    p8_t21_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t21_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t21_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t21_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t22_name: {
      type: DataTypes.STRING,
    },
    p8_t22_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t22_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t22_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t22_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t23_name: {
      type: DataTypes.STRING,
    },
    p8_t23_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t23_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t23_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t23_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t24_name: {
      type: DataTypes.STRING,
    },
    p8_t24_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t24_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t24_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t24_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t25_name: {
      type: DataTypes.STRING,
    },
    p8_t25_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t25_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t25_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t25_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t26_name: {
      type: DataTypes.STRING,
    },
    p8_t26_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t26_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t26_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t26_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t27_name: {
      type: DataTypes.STRING,
    },
    p8_t27_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t27_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t27_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t27_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t28_name: {
      type: DataTypes.STRING,
    },
    p8_t28_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t28_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t28_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t28_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t29_name: {
      type: DataTypes.STRING,
    },
    p8_t29_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t29_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t29_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t29_tier_total: {
      type: DataTypes.SMALLINT,
    },
    p8_t30_name: {
      type: DataTypes.STRING,
    },
    p8_t30_num_units: {
      type: DataTypes.SMALLINT,
    },
    p8_t30_style: {
      type: DataTypes.SMALLINT,
    },
    p8_t30_tier_current: {
      type: DataTypes.SMALLINT,
    },
    p8_t30_tier_total: {
      type: DataTypes.SMALLINT,
    } 
});

const unitMatchData = sq.define("unitMatchData", {
      matchID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    p1_u1_character_id: {
      type: DataTypes.STRING,
    },
    p1_u1_item1: {
      type: DataTypes.STRING,
      },
    p1_u1_item2: {
        type: DataTypes.STRING,
      },
    p1_u1_item3: {
        type: DataTypes.STRING,
      },
    p1_u1_rarity: {
        type: DataTypes.SMALLINT,
      },
    p1_u1_tier: {
        type: DataTypes.SMALLINT,
      },
    p1_u2_character_id: {
      type: DataTypes.STRING,
    },
    p1_u2_item1: {
      type: DataTypes.STRING,
      },
    p1_u2_item2: {
        type: DataTypes.STRING,
      },
    p1_u2_item3: {
        type: DataTypes.STRING,
      },
    p1_u2_rarity: {
        type: DataTypes.SMALLINT,
      },
    p1_u2_tier: {
        type: DataTypes.SMALLINT,
      },     
    p1_u3_character_id: {
      type: DataTypes.STRING,
    },
    p1_u3_item1: {
      type: DataTypes.STRING,
      },
    p1_u3_item2: {
        type: DataTypes.STRING,
      },
    p1_u3_item3: {
        type: DataTypes.STRING,
      },
    p1_u3_rarity: {
        type: DataTypes.SMALLINT,
      },
    p1_u3_tier: {
        type: DataTypes.SMALLINT,
      },
p1_u4_character_id: {
  type: DataTypes.STRING,
},
p1_u4_item1: {
  type: DataTypes.STRING,
},
p1_u4_item2: {
  type: DataTypes.STRING,
},
p1_u4_item3: {
  type: DataTypes.STRING,
},
p1_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u4_tier: {
  type: DataTypes.SMALLINT,
},
p1_u5_character_id: {
  type: DataTypes.STRING,
},
p1_u5_item1: {
  type: DataTypes.STRING,
},
p1_u5_item2: {
  type: DataTypes.STRING,
},
p1_u5_item3: {
  type: DataTypes.STRING,
},
p1_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u5_tier: {
  type: DataTypes.SMALLINT,
},
p1_u6_character_id: {
  type: DataTypes.STRING,
},
p1_u6_item1: {
  type: DataTypes.STRING,
},
p1_u6_item2: {
  type: DataTypes.STRING,
},
p1_u6_item3: {
  type: DataTypes.STRING,
},
p1_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u6_tier: {
  type: DataTypes.SMALLINT,
},
p1_u7_character_id: {
  type: DataTypes.STRING,
},
p1_u7_item1: {
  type: DataTypes.STRING,
},
p1_u7_item2: {
  type: DataTypes.STRING,
},
p1_u7_item3: {
  type: DataTypes.STRING,
},
p1_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u7_tier: {
  type: DataTypes.SMALLINT,
},
p1_u8_character_id: {
  type: DataTypes.STRING,
},
p1_u8_item1: {
  type: DataTypes.STRING,
},
p1_u8_item2: {
  type: DataTypes.STRING,
},
p1_u8_item3: {
  type: DataTypes.STRING,
},
p1_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u8_tier: {
  type: DataTypes.SMALLINT,
},
p1_u9_character_id: {
  type: DataTypes.STRING,
},
p1_u9_item1: {
  type: DataTypes.STRING,
},
p1_u9_item2: {
  type: DataTypes.STRING,
},
p1_u9_item3: {
  type: DataTypes.STRING,
},
p1_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u9_tier: {
  type: DataTypes.SMALLINT,
},
p1_u10_character_id: {
  type: DataTypes.STRING,
},
p1_u10_item1: {
  type: DataTypes.STRING,
},
p1_u10_item2: {
  type: DataTypes.STRING,
},
p1_u10_item3: {
  type: DataTypes.STRING,
},
p1_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u10_tier: {
  type: DataTypes.SMALLINT,
},
p1_u11_character_id: {
  type: DataTypes.STRING,
},
p1_u11_item1: {
  type: DataTypes.STRING,
},
p1_u11_item2: {
  type: DataTypes.STRING,
},
p1_u11_item3: {
  type: DataTypes.STRING,
},
p1_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u11_tier: {
  type: DataTypes.SMALLINT,
},
p1_u12_character_id: {
  type: DataTypes.STRING,
},
p1_u12_item1: {
  type: DataTypes.STRING,
},
p1_u12_item2: {
  type: DataTypes.STRING,
},
p1_u12_item3: {
  type: DataTypes.STRING,
},
p1_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u12_tier: {
  type: DataTypes.SMALLINT,
},
p1_u13_character_id: {
  type: DataTypes.STRING,
},
p1_u13_item1: {
  type: DataTypes.STRING,
},
p1_u13_item2: {
  type: DataTypes.STRING,
},
p1_u13_item3: {
  type: DataTypes.STRING,
},
p1_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u13_tier: {
  type: DataTypes.SMALLINT,
},
p1_u14_character_id: {
  type: DataTypes.STRING,
},
p1_u14_item1: {
  type: DataTypes.STRING,
},
p1_u14_item2: {
  type: DataTypes.STRING,
},
p1_u14_item3: {
  type: DataTypes.STRING,
},
p1_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u14_tier: {
  type: DataTypes.SMALLINT,
},
p1_u15_character_id: {
  type: DataTypes.STRING,
},
p1_u15_item1: {
  type: DataTypes.STRING,
},
p1_u15_item2: {
  type: DataTypes.STRING,
},
p1_u15_item3: {
  type: DataTypes.STRING,
},
p1_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u15_tier: {
  type: DataTypes.SMALLINT,
},
p1_u16_character_id: {
  type: DataTypes.STRING,
},
p1_u16_item1: {
  type: DataTypes.STRING,
},
p1_u16_item2: {
  type: DataTypes.STRING,
},
p1_u16_item3: {
  type: DataTypes.STRING,
},
p1_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u16_tier: {
  type: DataTypes.SMALLINT,
},
p1_u17_character_id: {
  type: DataTypes.STRING,
},
p1_u17_item1: {
  type: DataTypes.STRING,
},
p1_u17_item2: {
  type: DataTypes.STRING,
},
p1_u17_item3: {
  type: DataTypes.STRING,
},
p1_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u17_tier: {
  type: DataTypes.SMALLINT,
},
p1_u18_character_id: {
  type: DataTypes.STRING,
},
p1_u18_item1: {
  type: DataTypes.STRING,
},
p1_u18_item2: {
  type: DataTypes.STRING,
},
p1_u18_item3: {
  type: DataTypes.STRING,
},
p1_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u18_tier: {
  type: DataTypes.SMALLINT,
},
p1_u19_character_id: {
  type: DataTypes.STRING,
},
p1_u19_item1: {
  type: DataTypes.STRING,
},
p1_u19_item2: {
  type: DataTypes.STRING,
},
p1_u19_item3: {
  type: DataTypes.STRING,
},
p1_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u19_tier: {
  type: DataTypes.SMALLINT,
},
p1_u20_character_id: {
  type: DataTypes.STRING,
},
p1_u20_item1: {
  type: DataTypes.STRING,
},
p1_u20_item2: {
  type: DataTypes.STRING,
},
p1_u20_item3: {
  type: DataTypes.STRING,
},
p1_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u20_tier: {
  type: DataTypes.SMALLINT,
},
p1_u21_character_id: {
  type: DataTypes.STRING,
},
p1_u21_item1: {
  type: DataTypes.STRING,
},
p1_u21_item2: {
  type: DataTypes.STRING,
},
p1_u21_item3: {
  type: DataTypes.STRING,
},
p1_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u21_tier: {
  type: DataTypes.SMALLINT,
},
p1_u22_character_id: {
  type: DataTypes.STRING,
},
p1_u22_item1: {
  type: DataTypes.STRING,
},
p1_u22_item2: {
  type: DataTypes.STRING,
},
p1_u22_item3: {
  type: DataTypes.STRING,
},
p1_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u22_tier: {
  type: DataTypes.SMALLINT,
},
p1_u23_character_id: {
  type: DataTypes.STRING,
},
p1_u23_item1: {
  type: DataTypes.STRING,
},
p1_u23_item2: {
  type: DataTypes.STRING,
},
p1_u23_item3: {
  type: DataTypes.STRING,
},
p1_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u23_tier: {
  type: DataTypes.SMALLINT,
},
p1_u24_character_id: {
  type: DataTypes.STRING,
},
p1_u24_item1: {
  type: DataTypes.STRING,
},
p1_u24_item2: {
  type: DataTypes.STRING,
},
p1_u24_item3: {
  type: DataTypes.STRING,
},
p1_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u24_tier: {
  type: DataTypes.SMALLINT,
},
p1_u25_character_id: {
  type: DataTypes.STRING,
},
p1_u25_item1: {
  type: DataTypes.STRING,
},
p1_u25_item2: {
  type: DataTypes.STRING,
},
p1_u25_item3: {
  type: DataTypes.STRING,
},
p1_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u25_tier: {
  type: DataTypes.SMALLINT,
},
p1_u26_character_id: {
  type: DataTypes.STRING,
},
p1_u26_item1: {
  type: DataTypes.STRING,
},
p1_u26_item2: {
  type: DataTypes.STRING,
},
p1_u26_item3: {
  type: DataTypes.STRING,
},
p1_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u26_tier: {
  type: DataTypes.SMALLINT,
},
p1_u27_character_id: {
  type: DataTypes.STRING,
},
p1_u27_item1: {
  type: DataTypes.STRING,
},
p1_u27_item2: {
  type: DataTypes.STRING,
},
p1_u27_item3: {
  type: DataTypes.STRING,
},
p1_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u27_tier: {
  type: DataTypes.SMALLINT,
},
p1_u28_character_id: {
  type: DataTypes.STRING,
},
p1_u28_item1: {
  type: DataTypes.STRING,
},
p1_u28_item2: {
  type: DataTypes.STRING,
},
p1_u28_item3: {
  type: DataTypes.STRING,
},
p1_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u28_tier: {
  type: DataTypes.SMALLINT,
},
p1_u29_character_id: {
  type: DataTypes.STRING,
},
p1_u29_item1: {
  type: DataTypes.STRING,
},
p1_u29_item2: {
  type: DataTypes.STRING,
},
p1_u29_item3: {
  type: DataTypes.STRING,
},
p1_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u29_tier: {
  type: DataTypes.SMALLINT,
},
p1_u30_character_id: {
  type: DataTypes.STRING,
},
p1_u30_item1: {
  type: DataTypes.STRING,
},
p1_u30_item2: {
  type: DataTypes.STRING,
},
p1_u30_item3: {
  type: DataTypes.STRING,
},
p1_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p1_u30_tier: {
  type: DataTypes.SMALLINT,
},
p2_u1_character_id: {
  type: DataTypes.STRING,
},
p2_u1_item1: {
  type: DataTypes.STRING,
},
p2_u1_item2: {
  type: DataTypes.STRING,
},
p2_u1_item3: {
  type: DataTypes.STRING,
},
p2_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u1_tier: {
  type: DataTypes.SMALLINT,
},
p2_u2_character_id: {
  type: DataTypes.STRING,
},
p2_u2_item1: {
  type: DataTypes.STRING,
},
p2_u2_item2: {
  type: DataTypes.STRING,
},
p2_u2_item3: {
  type: DataTypes.STRING,
},
p2_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u2_tier: {
  type: DataTypes.SMALLINT,
},
p2_u3_character_id: {
  type: DataTypes.STRING,
},
p2_u3_item1: {
  type: DataTypes.STRING,
},
p2_u3_item2: {
  type: DataTypes.STRING,
},
p2_u3_item3: {
  type: DataTypes.STRING,
},
p2_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u3_tier: {
  type: DataTypes.SMALLINT,
},
p2_u4_character_id: {
  type: DataTypes.STRING,
},
p2_u4_item1: {
  type: DataTypes.STRING,
},
p2_u4_item2: {
  type: DataTypes.STRING,
},
p2_u4_item3: {
  type: DataTypes.STRING,
},
p2_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u4_tier: {
  type: DataTypes.SMALLINT,
},
p2_u5_character_id: {
  type: DataTypes.STRING,
},
p2_u5_item1: {
  type: DataTypes.STRING,
},
p2_u5_item2: {
  type: DataTypes.STRING,
},
p2_u5_item3: {
  type: DataTypes.STRING,
},
p2_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u5_tier: {
  type: DataTypes.SMALLINT,
},
p2_u6_character_id: {
  type: DataTypes.STRING,
},
p2_u6_item1: {
  type: DataTypes.STRING,
},
p2_u6_item2: {
  type: DataTypes.STRING,
},
p2_u6_item3: {
  type: DataTypes.STRING,
},
p2_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u6_tier: {
  type: DataTypes.SMALLINT,
},
p2_u7_character_id: {
  type: DataTypes.STRING,
},
p2_u7_item1: {
  type: DataTypes.STRING,
},
p2_u7_item2: {
  type: DataTypes.STRING,
},
p2_u7_item3: {
  type: DataTypes.STRING,
},
p2_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u7_tier: {
  type: DataTypes.SMALLINT,
},
p2_u8_character_id: {
  type: DataTypes.STRING,
},
p2_u8_item1: {
  type: DataTypes.STRING,
},
p2_u8_item2: {
  type: DataTypes.STRING,
},
p2_u8_item3: {
  type: DataTypes.STRING,
},
p2_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u8_tier: {
  type: DataTypes.SMALLINT,
},
p2_u9_character_id: {
  type: DataTypes.STRING,
},
p2_u9_item1: {
  type: DataTypes.STRING,
},
p2_u9_item2: {
  type: DataTypes.STRING,
},
p2_u9_item3: {
  type: DataTypes.STRING,
},
p2_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u9_tier: {
  type: DataTypes.SMALLINT,
},
p2_u10_character_id: {
  type: DataTypes.STRING,
},
p2_u10_item1: {
  type: DataTypes.STRING,
},
p2_u10_item2: {
  type: DataTypes.STRING,
},
p2_u10_item3: {
  type: DataTypes.STRING,
},
p2_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u10_tier: {
  type: DataTypes.SMALLINT,
},
p2_u11_character_id: {
  type: DataTypes.STRING,
},
p2_u11_item1: {
  type: DataTypes.STRING,
},
p2_u11_item2: {
  type: DataTypes.STRING,
},
p2_u11_item3: {
  type: DataTypes.STRING,
},
p2_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u11_tier: {
  type: DataTypes.SMALLINT,
},
p2_u12_character_id: {
  type: DataTypes.STRING,
},
p2_u12_item1: {
  type: DataTypes.STRING,
},
p2_u12_item2: {
  type: DataTypes.STRING,
},
p2_u12_item3: {
  type: DataTypes.STRING,
},
p2_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u12_tier: {
  type: DataTypes.SMALLINT,
},
p2_u13_character_id: {
  type: DataTypes.STRING,
},
p2_u13_item1: {
  type: DataTypes.STRING,
},
p2_u13_item2: {
  type: DataTypes.STRING,
},
p2_u13_item3: {
  type: DataTypes.STRING,
},
p2_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u13_tier: {
  type: DataTypes.SMALLINT,
},
p2_u14_character_id: {
  type: DataTypes.STRING,
},
p2_u14_item1: {
  type: DataTypes.STRING,
},
p2_u14_item2: {
  type: DataTypes.STRING,
},
p2_u14_item3: {
  type: DataTypes.STRING,
},
p2_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u14_tier: {
  type: DataTypes.SMALLINT,
},
p2_u15_character_id: {
  type: DataTypes.STRING,
},
p2_u15_item1: {
  type: DataTypes.STRING,
},
p2_u15_item2: {
  type: DataTypes.STRING,
},
p2_u15_item3: {
  type: DataTypes.STRING,
},
p2_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u15_tier: {
  type: DataTypes.SMALLINT,
},
p2_u16_character_id: {
  type: DataTypes.STRING,
},
p2_u16_item1: {
  type: DataTypes.STRING,
},
p2_u16_item2: {
  type: DataTypes.STRING,
},
p2_u16_item3: {
  type: DataTypes.STRING,
},
p2_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u16_tier: {
  type: DataTypes.SMALLINT,
},
p2_u17_character_id: {
  type: DataTypes.STRING,
},
p2_u17_item1: {
  type: DataTypes.STRING,
},
p2_u17_item2: {
  type: DataTypes.STRING,
},
p2_u17_item3: {
  type: DataTypes.STRING,
},
p2_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u17_tier: {
  type: DataTypes.SMALLINT,
},
p2_u18_character_id: {
  type: DataTypes.STRING,
},
p2_u18_item1: {
  type: DataTypes.STRING,
},
p2_u18_item2: {
  type: DataTypes.STRING,
},
p2_u18_item3: {
  type: DataTypes.STRING,
},
p2_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u18_tier: {
  type: DataTypes.SMALLINT,
},
p2_u19_character_id: {
  type: DataTypes.STRING,
},
p2_u19_item1: {
  type: DataTypes.STRING,
},
p2_u19_item2: {
  type: DataTypes.STRING,
},
p2_u19_item3: {
  type: DataTypes.STRING,
},
p2_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u19_tier: {
  type: DataTypes.SMALLINT,
},
p2_u20_character_id: {
  type: DataTypes.STRING,
},
p2_u20_item1: {
  type: DataTypes.STRING,
},
p2_u20_item2: {
  type: DataTypes.STRING,
},
p2_u20_item3: {
  type: DataTypes.STRING,
},
p2_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u20_tier: {
  type: DataTypes.SMALLINT,
},
p2_u21_character_id: {
  type: DataTypes.STRING,
},
p2_u21_item1: {
  type: DataTypes.STRING,
},
p2_u21_item2: {
  type: DataTypes.STRING,
},
p2_u21_item3: {
  type: DataTypes.STRING,
},
p2_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u21_tier: {
  type: DataTypes.SMALLINT,
},
p2_u22_character_id: {
  type: DataTypes.STRING,
},
p2_u22_item1: {
  type: DataTypes.STRING,
},
p2_u22_item2: {
  type: DataTypes.STRING,
},
p2_u22_item3: {
  type: DataTypes.STRING,
},
p2_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u22_tier: {
  type: DataTypes.SMALLINT,
},
p2_u23_character_id: {
  type: DataTypes.STRING,
},
p2_u23_item1: {
  type: DataTypes.STRING,
},
p2_u23_item2: {
  type: DataTypes.STRING,
},
p2_u23_item3: {
  type: DataTypes.STRING,
},
p2_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u23_tier: {
  type: DataTypes.SMALLINT,
},
p2_u24_character_id: {
  type: DataTypes.STRING,
},
p2_u24_item1: {
  type: DataTypes.STRING,
},
p2_u24_item2: {
  type: DataTypes.STRING,
},
p2_u24_item3: {
  type: DataTypes.STRING,
},
p2_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u24_tier: {
  type: DataTypes.SMALLINT,
},
p2_u25_character_id: {
  type: DataTypes.STRING,
},
p2_u25_item1: {
  type: DataTypes.STRING,
},
p2_u25_item2: {
  type: DataTypes.STRING,
},
p2_u25_item3: {
  type: DataTypes.STRING,
},
p2_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u25_tier: {
  type: DataTypes.SMALLINT,
},
p2_u26_character_id: {
  type: DataTypes.STRING,
},
p2_u26_item1: {
  type: DataTypes.STRING,
},
p2_u26_item2: {
  type: DataTypes.STRING,
},
p2_u26_item3: {
  type: DataTypes.STRING,
},
p2_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u26_tier: {
  type: DataTypes.SMALLINT,
},
p2_u27_character_id: {
  type: DataTypes.STRING,
},
p2_u27_item1: {
  type: DataTypes.STRING,
},
p2_u27_item2: {
  type: DataTypes.STRING,
},
p2_u27_item3: {
  type: DataTypes.STRING,
},
p2_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u27_tier: {
  type: DataTypes.SMALLINT,
},
p2_u28_character_id: {
  type: DataTypes.STRING,
},
p2_u28_item1: {
  type: DataTypes.STRING,
},
p2_u28_item2: {
  type: DataTypes.STRING,
},
p2_u28_item3: {
  type: DataTypes.STRING,
},
p2_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u28_tier: {
  type: DataTypes.SMALLINT,
},
p2_u29_character_id: {
  type: DataTypes.STRING,
},
p2_u29_item1: {
  type: DataTypes.STRING,
},
p2_u29_item2: {
  type: DataTypes.STRING,
},
p2_u29_item3: {
  type: DataTypes.STRING,
},
p2_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u29_tier: {
  type: DataTypes.SMALLINT,
},
p2_u30_character_id: {
  type: DataTypes.STRING,
},
p2_u30_item1: {
  type: DataTypes.STRING,
},
p2_u30_item2: {
  type: DataTypes.STRING,
},
p2_u30_item3: {
  type: DataTypes.STRING,
},
p2_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p2_u30_tier: {
  type: DataTypes.SMALLINT,
},
p3_u1_character_id: {
  type: DataTypes.STRING,
},
p3_u1_item1: {
  type: DataTypes.STRING,
},
p3_u1_item2: {
  type: DataTypes.STRING,
},
p3_u1_item3: {
  type: DataTypes.STRING,
},
p3_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u1_tier: {
  type: DataTypes.SMALLINT,
},
p3_u2_character_id: {
  type: DataTypes.STRING,
},
p3_u2_item1: {
  type: DataTypes.STRING,
},
p3_u2_item2: {
  type: DataTypes.STRING,
},
p3_u2_item3: {
  type: DataTypes.STRING,
},
p3_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u2_tier: {
  type: DataTypes.SMALLINT,
},
p3_u3_character_id: {
  type: DataTypes.STRING,
},
p3_u3_item1: {
  type: DataTypes.STRING,
},
p3_u3_item2: {
  type: DataTypes.STRING,
},
p3_u3_item3: {
  type: DataTypes.STRING,
},
p3_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u3_tier: {
  type: DataTypes.SMALLINT,
},
p3_u4_character_id: {
  type: DataTypes.STRING,
},
p3_u4_item1: {
  type: DataTypes.STRING,
},
p3_u4_item2: {
  type: DataTypes.STRING,
},
p3_u4_item3: {
  type: DataTypes.STRING,
},
p3_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u4_tier: {
  type: DataTypes.SMALLINT,
},
p3_u5_character_id: {
  type: DataTypes.STRING,
},
p3_u5_item1: {
  type: DataTypes.STRING,
},
p3_u5_item2: {
  type: DataTypes.STRING,
},
p3_u5_item3: {
  type: DataTypes.STRING,
},
p3_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u5_tier: {
  type: DataTypes.SMALLINT,
},
p3_u6_character_id: {
  type: DataTypes.STRING,
},
p3_u6_item1: {
  type: DataTypes.STRING,
},
p3_u6_item2: {
  type: DataTypes.STRING,
},
p3_u6_item3: {
  type: DataTypes.STRING,
},
p3_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u6_tier: {
  type: DataTypes.SMALLINT,
},
p3_u7_character_id: {
  type: DataTypes.STRING,
},
p3_u7_item1: {
  type: DataTypes.STRING,
},
p3_u7_item2: {
  type: DataTypes.STRING,
},
p3_u7_item3: {
  type: DataTypes.STRING,
},
p3_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u7_tier: {
  type: DataTypes.SMALLINT,
},
p3_u8_character_id: {
  type: DataTypes.STRING,
},
p3_u8_item1: {
  type: DataTypes.STRING,
},
p3_u8_item2: {
  type: DataTypes.STRING,
},
p3_u8_item3: {
  type: DataTypes.STRING,
},
p3_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u8_tier: {
  type: DataTypes.SMALLINT,
},
p3_u9_character_id: {
  type: DataTypes.STRING,
},
p3_u9_item1: {
  type: DataTypes.STRING,
},
p3_u9_item2: {
  type: DataTypes.STRING,
},
p3_u9_item3: {
  type: DataTypes.STRING,
},
p3_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u9_tier: {
  type: DataTypes.SMALLINT,
},
p3_u10_character_id: {
  type: DataTypes.STRING,
},
p3_u10_item1: {
  type: DataTypes.STRING,
},
p3_u10_item2: {
  type: DataTypes.STRING,
},
p3_u10_item3: {
  type: DataTypes.STRING,
},
p3_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u10_tier: {
  type: DataTypes.SMALLINT,
},
p3_u11_character_id: {
  type: DataTypes.STRING,
},
p3_u11_item1: {
  type: DataTypes.STRING,
},
p3_u11_item2: {
  type: DataTypes.STRING,
},
p3_u11_item3: {
  type: DataTypes.STRING,
},
p3_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u11_tier: {
  type: DataTypes.SMALLINT,
},
p3_u12_character_id: {
  type: DataTypes.STRING,
},
p3_u12_item1: {
  type: DataTypes.STRING,
},
p3_u12_item2: {
  type: DataTypes.STRING,
},
p3_u12_item3: {
  type: DataTypes.STRING,
},
p3_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u12_tier: {
  type: DataTypes.SMALLINT,
},
p3_u13_character_id: {
  type: DataTypes.STRING,
},
p3_u13_item1: {
  type: DataTypes.STRING,
},
p3_u13_item2: {
  type: DataTypes.STRING,
},
p3_u13_item3: {
  type: DataTypes.STRING,
},
p3_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u13_tier: {
  type: DataTypes.SMALLINT,
},
p3_u14_character_id: {
  type: DataTypes.STRING,
},
p3_u14_item1: {
  type: DataTypes.STRING,
},
p3_u14_item2: {
  type: DataTypes.STRING,
},
p3_u14_item3: {
  type: DataTypes.STRING,
},
p3_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u14_tier: {
  type: DataTypes.SMALLINT,
},
p3_u15_character_id: {
  type: DataTypes.STRING,
},
p3_u15_item1: {
  type: DataTypes.STRING,
},
p3_u15_item2: {
  type: DataTypes.STRING,
},
p3_u15_item3: {
  type: DataTypes.STRING,
},
p3_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u15_tier: {
  type: DataTypes.SMALLINT,
},
p3_u16_character_id: {
  type: DataTypes.STRING,
},
p3_u16_item1: {
  type: DataTypes.STRING,
},
p3_u16_item2: {
  type: DataTypes.STRING,
},
p3_u16_item3: {
  type: DataTypes.STRING,
},
p3_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u16_tier: {
  type: DataTypes.SMALLINT,
},
p3_u17_character_id: {
  type: DataTypes.STRING,
},
p3_u17_item1: {
  type: DataTypes.STRING,
},
p3_u17_item2: {
  type: DataTypes.STRING,
},
p3_u17_item3: {
  type: DataTypes.STRING,
},
p3_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u17_tier: {
  type: DataTypes.SMALLINT,
},
p3_u18_character_id: {
  type: DataTypes.STRING,
},
p3_u18_item1: {
  type: DataTypes.STRING,
},
p3_u18_item2: {
  type: DataTypes.STRING,
},
p3_u18_item3: {
  type: DataTypes.STRING,
},
p3_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u18_tier: {
  type: DataTypes.SMALLINT,
},
p3_u19_character_id: {
  type: DataTypes.STRING,
},
p3_u19_item1: {
  type: DataTypes.STRING,
},
p3_u19_item2: {
  type: DataTypes.STRING,
},
p3_u19_item3: {
  type: DataTypes.STRING,
},
p3_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u19_tier: {
  type: DataTypes.SMALLINT,
},
p3_u20_character_id: {
  type: DataTypes.STRING,
},
p3_u20_item1: {
  type: DataTypes.STRING,
},
p3_u20_item2: {
  type: DataTypes.STRING,
},
p3_u20_item3: {
  type: DataTypes.STRING,
},
p3_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u20_tier: {
  type: DataTypes.SMALLINT,
},
p3_u21_character_id: {
  type: DataTypes.STRING,
},
p3_u21_item1: {
  type: DataTypes.STRING,
},
p3_u21_item2: {
  type: DataTypes.STRING,
},
p3_u21_item3: {
  type: DataTypes.STRING,
},
p3_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u21_tier: {
  type: DataTypes.SMALLINT,
},
p3_u22_character_id: {
  type: DataTypes.STRING,
},
p3_u22_item1: {
  type: DataTypes.STRING,
},
p3_u22_item2: {
  type: DataTypes.STRING,
},
p3_u22_item3: {
  type: DataTypes.STRING,
},
p3_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u22_tier: {
  type: DataTypes.SMALLINT,
},
p3_u23_character_id: {
  type: DataTypes.STRING,
},
p3_u23_item1: {
  type: DataTypes.STRING,
},
p3_u23_item2: {
  type: DataTypes.STRING,
},
p3_u23_item3: {
  type: DataTypes.STRING,
},
p3_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u23_tier: {
  type: DataTypes.SMALLINT,
},
p3_u24_character_id: {
  type: DataTypes.STRING,
},
p3_u24_item1: {
  type: DataTypes.STRING,
},
p3_u24_item2: {
  type: DataTypes.STRING,
},
p3_u24_item3: {
  type: DataTypes.STRING,
},
p3_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u24_tier: {
  type: DataTypes.SMALLINT,
},
p3_u25_character_id: {
  type: DataTypes.STRING,
},
p3_u25_item1: {
  type: DataTypes.STRING,
},
p3_u25_item2: {
  type: DataTypes.STRING,
},
p3_u25_item3: {
  type: DataTypes.STRING,
},
p3_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u25_tier: {
  type: DataTypes.SMALLINT,
},
p3_u26_character_id: {
  type: DataTypes.STRING,
},
p3_u26_item1: {
  type: DataTypes.STRING,
},
p3_u26_item2: {
  type: DataTypes.STRING,
},
p3_u26_item3: {
  type: DataTypes.STRING,
},
p3_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u26_tier: {
  type: DataTypes.SMALLINT,
},
p3_u27_character_id: {
  type: DataTypes.STRING,
},
p3_u27_item1: {
  type: DataTypes.STRING,
},
p3_u27_item2: {
  type: DataTypes.STRING,
},
p3_u27_item3: {
  type: DataTypes.STRING,
},
p3_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u27_tier: {
  type: DataTypes.SMALLINT,
},
p3_u28_character_id: {
  type: DataTypes.STRING,
},
p3_u28_item1: {
  type: DataTypes.STRING,
},
p3_u28_item2: {
  type: DataTypes.STRING,
},
p3_u28_item3: {
  type: DataTypes.STRING,
},
p3_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u28_tier: {
  type: DataTypes.SMALLINT,
},
p3_u29_character_id: {
  type: DataTypes.STRING,
},
p3_u29_item1: {
  type: DataTypes.STRING,
},
p3_u29_item2: {
  type: DataTypes.STRING,
},
p3_u29_item3: {
  type: DataTypes.STRING,
},
p3_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u29_tier: {
  type: DataTypes.SMALLINT,
},
p3_u30_character_id: {
  type: DataTypes.STRING,
},
p3_u30_item1: {
  type: DataTypes.STRING,
},
p3_u30_item2: {
  type: DataTypes.STRING,
},
p3_u30_item3: {
  type: DataTypes.STRING,
},
p3_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p3_u30_tier: {
  type: DataTypes.SMALLINT,
},
p4_u1_character_id: {
  type: DataTypes.STRING,
},
p4_u1_item1: {
  type: DataTypes.STRING,
},
p4_u1_item2: {
  type: DataTypes.STRING,
},
p4_u1_item3: {
  type: DataTypes.STRING,
},
p4_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u1_tier: {
  type: DataTypes.SMALLINT,
},
p4_u2_character_id: {
  type: DataTypes.STRING,
},
p4_u2_item1: {
  type: DataTypes.STRING,
},
p4_u2_item2: {
  type: DataTypes.STRING,
},
p4_u2_item3: {
  type: DataTypes.STRING,
},
p4_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u2_tier: {
  type: DataTypes.SMALLINT,
},
p4_u3_character_id: {
  type: DataTypes.STRING,
},
p4_u3_item1: {
  type: DataTypes.STRING,
},
p4_u3_item2: {
  type: DataTypes.STRING,
},
p4_u3_item3: {
  type: DataTypes.STRING,
},
p4_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u3_tier: {
  type: DataTypes.SMALLINT,
},
p4_u4_character_id: {
  type: DataTypes.STRING,
},
p4_u4_item1: {
  type: DataTypes.STRING,
},
p4_u4_item2: {
  type: DataTypes.STRING,
},
p4_u4_item3: {
  type: DataTypes.STRING,
},
p4_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u4_tier: {
  type: DataTypes.SMALLINT,
},
p4_u5_character_id: {
  type: DataTypes.STRING,
},
p4_u5_item1: {
  type: DataTypes.STRING,
},
p4_u5_item2: {
  type: DataTypes.STRING,
},
p4_u5_item3: {
  type: DataTypes.STRING,
},
p4_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u5_tier: {
  type: DataTypes.SMALLINT,
},
p4_u6_character_id: {
  type: DataTypes.STRING,
},
p4_u6_item1: {
  type: DataTypes.STRING,
},
p4_u6_item2: {
  type: DataTypes.STRING,
},
p4_u6_item3: {
  type: DataTypes.STRING,
},
p4_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u6_tier: {
  type: DataTypes.SMALLINT,
},
p4_u7_character_id: {
  type: DataTypes.STRING,
},
p4_u7_item1: {
  type: DataTypes.STRING,
},
p4_u7_item2: {
  type: DataTypes.STRING,
},
p4_u7_item3: {
  type: DataTypes.STRING,
},
p4_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u7_tier: {
  type: DataTypes.SMALLINT,
},
p4_u8_character_id: {
  type: DataTypes.STRING,
},
p4_u8_item1: {
  type: DataTypes.STRING,
},
p4_u8_item2: {
  type: DataTypes.STRING,
},
p4_u8_item3: {
  type: DataTypes.STRING,
},
p4_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u8_tier: {
  type: DataTypes.SMALLINT,
},
p4_u9_character_id: {
  type: DataTypes.STRING,
},
p4_u9_item1: {
  type: DataTypes.STRING,
},
p4_u9_item2: {
  type: DataTypes.STRING,
},
p4_u9_item3: {
  type: DataTypes.STRING,
},
p4_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u9_tier: {
  type: DataTypes.SMALLINT,
},
p4_u10_character_id: {
  type: DataTypes.STRING,
},
p4_u10_item1: {
  type: DataTypes.STRING,
},
p4_u10_item2: {
  type: DataTypes.STRING,
},
p4_u10_item3: {
  type: DataTypes.STRING,
},
p4_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u10_tier: {
  type: DataTypes.SMALLINT,
},
p4_u11_character_id: {
  type: DataTypes.STRING,
},
p4_u11_item1: {
  type: DataTypes.STRING,
},
p4_u11_item2: {
  type: DataTypes.STRING,
},
p4_u11_item3: {
  type: DataTypes.STRING,
},
p4_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u11_tier: {
  type: DataTypes.SMALLINT,
},
p4_u12_character_id: {
  type: DataTypes.STRING,
},
p4_u12_item1: {
  type: DataTypes.STRING,
},
p4_u12_item2: {
  type: DataTypes.STRING,
},
p4_u12_item3: {
  type: DataTypes.STRING,
},
p4_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u12_tier: {
  type: DataTypes.SMALLINT,
},
p4_u13_character_id: {
  type: DataTypes.STRING,
},
p4_u13_item1: {
  type: DataTypes.STRING,
},
p4_u13_item2: {
  type: DataTypes.STRING,
},
p4_u13_item3: {
  type: DataTypes.STRING,
},
p4_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u13_tier: {
  type: DataTypes.SMALLINT,
},
p4_u14_character_id: {
  type: DataTypes.STRING,
},
p4_u14_item1: {
  type: DataTypes.STRING,
},
p4_u14_item2: {
  type: DataTypes.STRING,
},
p4_u14_item3: {
  type: DataTypes.STRING,
},
p4_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u14_tier: {
  type: DataTypes.SMALLINT,
},
p4_u15_character_id: {
  type: DataTypes.STRING,
},
p4_u15_item1: {
  type: DataTypes.STRING,
},
p4_u15_item2: {
  type: DataTypes.STRING,
},
p4_u15_item3: {
  type: DataTypes.STRING,
},
p4_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u15_tier: {
  type: DataTypes.SMALLINT,
},
p4_u16_character_id: {
  type: DataTypes.STRING,
},
p4_u16_item1: {
  type: DataTypes.STRING,
},
p4_u16_item2: {
  type: DataTypes.STRING,
},
p4_u16_item3: {
  type: DataTypes.STRING,
},
p4_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u16_tier: {
  type: DataTypes.SMALLINT,
},
p4_u17_character_id: {
  type: DataTypes.STRING,
},
p4_u17_item1: {
  type: DataTypes.STRING,
},
p4_u17_item2: {
  type: DataTypes.STRING,
},
p4_u17_item3: {
  type: DataTypes.STRING,
},
p4_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u17_tier: {
  type: DataTypes.SMALLINT,
},
p4_u18_character_id: {
  type: DataTypes.STRING,
},
p4_u18_item1: {
  type: DataTypes.STRING,
},
p4_u18_item2: {
  type: DataTypes.STRING,
},
p4_u18_item3: {
  type: DataTypes.STRING,
},
p4_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u18_tier: {
  type: DataTypes.SMALLINT,
},
p4_u19_character_id: {
  type: DataTypes.STRING,
},
p4_u19_item1: {
  type: DataTypes.STRING,
},
p4_u19_item2: {
  type: DataTypes.STRING,
},
p4_u19_item3: {
  type: DataTypes.STRING,
},
p4_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u19_tier: {
  type: DataTypes.SMALLINT,
},
p4_u20_character_id: {
  type: DataTypes.STRING,
},
p4_u20_item1: {
  type: DataTypes.STRING,
},
p4_u20_item2: {
  type: DataTypes.STRING,
},
p4_u20_item3: {
  type: DataTypes.STRING,
},
p4_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u20_tier: {
  type: DataTypes.SMALLINT,
},
p4_u21_character_id: {
  type: DataTypes.STRING,
},
p4_u21_item1: {
  type: DataTypes.STRING,
},
p4_u21_item2: {
  type: DataTypes.STRING,
},
p4_u21_item3: {
  type: DataTypes.STRING,
},
p4_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u21_tier: {
  type: DataTypes.SMALLINT,
},
p4_u22_character_id: {
  type: DataTypes.STRING,
},
p4_u22_item1: {
  type: DataTypes.STRING,
},
p4_u22_item2: {
  type: DataTypes.STRING,
},
p4_u22_item3: {
  type: DataTypes.STRING,
},
p4_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u22_tier: {
  type: DataTypes.SMALLINT,
},
p4_u23_character_id: {
  type: DataTypes.STRING,
},
p4_u23_item1: {
  type: DataTypes.STRING,
},
p4_u23_item2: {
  type: DataTypes.STRING,
},
p4_u23_item3: {
  type: DataTypes.STRING,
},
p4_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u23_tier: {
  type: DataTypes.SMALLINT,
},
p4_u24_character_id: {
  type: DataTypes.STRING,
},
p4_u24_item1: {
  type: DataTypes.STRING,
},
p4_u24_item2: {
  type: DataTypes.STRING,
},
p4_u24_item3: {
  type: DataTypes.STRING,
},
p4_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u24_tier: {
  type: DataTypes.SMALLINT,
},
p4_u25_character_id: {
  type: DataTypes.STRING,
},
p4_u25_item1: {
  type: DataTypes.STRING,
},
p4_u25_item2: {
  type: DataTypes.STRING,
},
p4_u25_item3: {
  type: DataTypes.STRING,
},
p4_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u25_tier: {
  type: DataTypes.SMALLINT,
},
p4_u26_character_id: {
  type: DataTypes.STRING,
},
p4_u26_item1: {
  type: DataTypes.STRING,
},
p4_u26_item2: {
  type: DataTypes.STRING,
},
p4_u26_item3: {
  type: DataTypes.STRING,
},
p4_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u26_tier: {
  type: DataTypes.SMALLINT,
},
p4_u27_character_id: {
  type: DataTypes.STRING,
},
p4_u27_item1: {
  type: DataTypes.STRING,
},
p4_u27_item2: {
  type: DataTypes.STRING,
},
p4_u27_item3: {
  type: DataTypes.STRING,
},
p4_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u27_tier: {
  type: DataTypes.SMALLINT,
},
p4_u28_character_id: {
  type: DataTypes.STRING,
},
p4_u28_item1: {
  type: DataTypes.STRING,
},
p4_u28_item2: {
  type: DataTypes.STRING,
},
p4_u28_item3: {
  type: DataTypes.STRING,
},
p4_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u28_tier: {
  type: DataTypes.SMALLINT,
},
p4_u29_character_id: {
  type: DataTypes.STRING,
},
p4_u29_item1: {
  type: DataTypes.STRING,
},
p4_u29_item2: {
  type: DataTypes.STRING,
},
p4_u29_item3: {
  type: DataTypes.STRING,
},
p4_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u29_tier: {
  type: DataTypes.SMALLINT,
},
p4_u30_character_id: {
  type: DataTypes.STRING,
},
p4_u30_item1: {
  type: DataTypes.STRING,
},
p4_u30_item2: {
  type: DataTypes.STRING,
},
p4_u30_item3: {
  type: DataTypes.STRING,
},
p4_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p4_u30_tier: {
  type: DataTypes.SMALLINT,
},
p5_u1_character_id: {
  type: DataTypes.STRING,
},
p5_u1_item1: {
  type: DataTypes.STRING,
},
p5_u1_item2: {
  type: DataTypes.STRING,
},
p5_u1_item3: {
  type: DataTypes.STRING,
},
p5_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u1_tier: {
  type: DataTypes.SMALLINT,
},
p5_u2_character_id: {
  type: DataTypes.STRING,
},
p5_u2_item1: {
  type: DataTypes.STRING,
},
p5_u2_item2: {
  type: DataTypes.STRING,
},
p5_u2_item3: {
  type: DataTypes.STRING,
},
p5_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u2_tier: {
  type: DataTypes.SMALLINT,
},
p5_u3_character_id: {
  type: DataTypes.STRING,
},
p5_u3_item1: {
  type: DataTypes.STRING,
},
p5_u3_item2: {
  type: DataTypes.STRING,
},
p5_u3_item3: {
  type: DataTypes.STRING,
},
p5_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u3_tier: {
  type: DataTypes.SMALLINT,
},
p5_u4_character_id: {
  type: DataTypes.STRING,
},
p5_u4_item1: {
  type: DataTypes.STRING,
},
p5_u4_item2: {
  type: DataTypes.STRING,
},
p5_u4_item3: {
  type: DataTypes.STRING,
},
p5_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u4_tier: {
  type: DataTypes.SMALLINT,
},
p5_u5_character_id: {
  type: DataTypes.STRING,
},
p5_u5_item1: {
  type: DataTypes.STRING,
},
p5_u5_item2: {
  type: DataTypes.STRING,
},
p5_u5_item3: {
  type: DataTypes.STRING,
},
p5_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u5_tier: {
  type: DataTypes.SMALLINT,
},
p5_u6_character_id: {
  type: DataTypes.STRING,
},
p5_u6_item1: {
  type: DataTypes.STRING,
},
p5_u6_item2: {
  type: DataTypes.STRING,
},
p5_u6_item3: {
  type: DataTypes.STRING,
},
p5_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u6_tier: {
  type: DataTypes.SMALLINT,
},
p5_u7_character_id: {
  type: DataTypes.STRING,
},
p5_u7_item1: {
  type: DataTypes.STRING,
},
p5_u7_item2: {
  type: DataTypes.STRING,
},
p5_u7_item3: {
  type: DataTypes.STRING,
},
p5_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u7_tier: {
  type: DataTypes.SMALLINT,
},
p5_u8_character_id: {
  type: DataTypes.STRING,
},
p5_u8_item1: {
  type: DataTypes.STRING,
},
p5_u8_item2: {
  type: DataTypes.STRING,
},
p5_u8_item3: {
  type: DataTypes.STRING,
},
p5_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u8_tier: {
  type: DataTypes.SMALLINT,
},
p5_u9_character_id: {
  type: DataTypes.STRING,
},
p5_u9_item1: {
  type: DataTypes.STRING,
},
p5_u9_item2: {
  type: DataTypes.STRING,
},
p5_u9_item3: {
  type: DataTypes.STRING,
},
p5_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u9_tier: {
  type: DataTypes.SMALLINT,
},
p5_u10_character_id: {
  type: DataTypes.STRING,
},
p5_u10_item1: {
  type: DataTypes.STRING,
},
p5_u10_item2: {
  type: DataTypes.STRING,
},
p5_u10_item3: {
  type: DataTypes.STRING,
},
p5_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u10_tier: {
  type: DataTypes.SMALLINT,
},
p5_u11_character_id: {
  type: DataTypes.STRING,
},
p5_u11_item1: {
  type: DataTypes.STRING,
},
p5_u11_item2: {
  type: DataTypes.STRING,
},
p5_u11_item3: {
  type: DataTypes.STRING,
},
p5_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u11_tier: {
  type: DataTypes.SMALLINT,
},
p5_u12_character_id: {
  type: DataTypes.STRING,
},
p5_u12_item1: {
  type: DataTypes.STRING,
},
p5_u12_item2: {
  type: DataTypes.STRING,
},
p5_u12_item3: {
  type: DataTypes.STRING,
},
p5_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u12_tier: {
  type: DataTypes.SMALLINT,
},
p5_u13_character_id: {
  type: DataTypes.STRING,
},
p5_u13_item1: {
  type: DataTypes.STRING,
},
p5_u13_item2: {
  type: DataTypes.STRING,
},
p5_u13_item3: {
  type: DataTypes.STRING,
},
p5_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u13_tier: {
  type: DataTypes.SMALLINT,
},
p5_u14_character_id: {
  type: DataTypes.STRING,
},
p5_u14_item1: {
  type: DataTypes.STRING,
},
p5_u14_item2: {
  type: DataTypes.STRING,
},
p5_u14_item3: {
  type: DataTypes.STRING,
},
p5_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u14_tier: {
  type: DataTypes.SMALLINT,
},
p5_u15_character_id: {
  type: DataTypes.STRING,
},
p5_u15_item1: {
  type: DataTypes.STRING,
},
p5_u15_item2: {
  type: DataTypes.STRING,
},
p5_u15_item3: {
  type: DataTypes.STRING,
},
p5_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u15_tier: {
  type: DataTypes.SMALLINT,
},
p5_u16_character_id: {
  type: DataTypes.STRING,
},
p5_u16_item1: {
  type: DataTypes.STRING,
},
p5_u16_item2: {
  type: DataTypes.STRING,
},
p5_u16_item3: {
  type: DataTypes.STRING,
},
p5_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u16_tier: {
  type: DataTypes.SMALLINT,
},
p5_u17_character_id: {
  type: DataTypes.STRING,
},
p5_u17_item1: {
  type: DataTypes.STRING,
},
p5_u17_item2: {
  type: DataTypes.STRING,
},
p5_u17_item3: {
  type: DataTypes.STRING,
},
p5_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u17_tier: {
  type: DataTypes.SMALLINT,
},
p5_u18_character_id: {
  type: DataTypes.STRING,
},
p5_u18_item1: {
  type: DataTypes.STRING,
},
p5_u18_item2: {
  type: DataTypes.STRING,
},
p5_u18_item3: {
  type: DataTypes.STRING,
},
p5_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u18_tier: {
  type: DataTypes.SMALLINT,
},
p5_u19_character_id: {
  type: DataTypes.STRING,
},
p5_u19_item1: {
  type: DataTypes.STRING,
},
p5_u19_item2: {
  type: DataTypes.STRING,
},
p5_u19_item3: {
  type: DataTypes.STRING,
},
p5_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u19_tier: {
  type: DataTypes.SMALLINT,
},
p5_u20_character_id: {
  type: DataTypes.STRING,
},
p5_u20_item1: {
  type: DataTypes.STRING,
},
p5_u20_item2: {
  type: DataTypes.STRING,
},
p5_u20_item3: {
  type: DataTypes.STRING,
},
p5_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u20_tier: {
  type: DataTypes.SMALLINT,
},
p5_u21_character_id: {
  type: DataTypes.STRING,
},
p5_u21_item1: {
  type: DataTypes.STRING,
},
p5_u21_item2: {
  type: DataTypes.STRING,
},
p5_u21_item3: {
  type: DataTypes.STRING,
},
p5_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u21_tier: {
  type: DataTypes.SMALLINT,
},
p5_u22_character_id: {
  type: DataTypes.STRING,
},
p5_u22_item1: {
  type: DataTypes.STRING,
},
p5_u22_item2: {
  type: DataTypes.STRING,
},
p5_u22_item3: {
  type: DataTypes.STRING,
},
p5_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u22_tier: {
  type: DataTypes.SMALLINT,
},
p5_u23_character_id: {
  type: DataTypes.STRING,
},
p5_u23_item1: {
  type: DataTypes.STRING,
},
p5_u23_item2: {
  type: DataTypes.STRING,
},
p5_u23_item3: {
  type: DataTypes.STRING,
},
p5_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u23_tier: {
  type: DataTypes.SMALLINT,
},
p5_u24_character_id: {
  type: DataTypes.STRING,
},
p5_u24_item1: {
  type: DataTypes.STRING,
},
p5_u24_item2: {
  type: DataTypes.STRING,
},
p5_u24_item3: {
  type: DataTypes.STRING,
},
p5_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u24_tier: {
  type: DataTypes.SMALLINT,
},
p5_u25_character_id: {
  type: DataTypes.STRING,
},
p5_u25_item1: {
  type: DataTypes.STRING,
},
p5_u25_item2: {
  type: DataTypes.STRING,
},
p5_u25_item3: {
  type: DataTypes.STRING,
},
p5_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u25_tier: {
  type: DataTypes.SMALLINT,
},
p5_u26_character_id: {
  type: DataTypes.STRING,
},
p5_u26_item1: {
  type: DataTypes.STRING,
},
p5_u26_item2: {
  type: DataTypes.STRING,
},
p5_u26_item3: {
  type: DataTypes.STRING,
},
p5_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u26_tier: {
  type: DataTypes.SMALLINT,
},
p5_u27_character_id: {
  type: DataTypes.STRING,
},
p5_u27_item1: {
  type: DataTypes.STRING,
},
p5_u27_item2: {
  type: DataTypes.STRING,
},
p5_u27_item3: {
  type: DataTypes.STRING,
},
p5_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u27_tier: {
  type: DataTypes.SMALLINT,
},
p5_u28_character_id: {
  type: DataTypes.STRING,
},
p5_u28_item1: {
  type: DataTypes.STRING,
},
p5_u28_item2: {
  type: DataTypes.STRING,
},
p5_u28_item3: {
  type: DataTypes.STRING,
},
p5_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u28_tier: {
  type: DataTypes.SMALLINT,
},
p5_u29_character_id: {
  type: DataTypes.STRING,
},
p5_u29_item1: {
  type: DataTypes.STRING,
},
p5_u29_item2: {
  type: DataTypes.STRING,
},
p5_u29_item3: {
  type: DataTypes.STRING,
},
p5_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u29_tier: {
  type: DataTypes.SMALLINT,
},
p5_u30_character_id: {
  type: DataTypes.STRING,
},
p5_u30_item1: {
  type: DataTypes.STRING,
},
p5_u30_item2: {
  type: DataTypes.STRING,
},
p5_u30_item3: {
  type: DataTypes.STRING,
},
p5_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p5_u30_tier: {
  type: DataTypes.SMALLINT,
},
p6_u1_character_id: {
  type: DataTypes.STRING,
},
p6_u1_item1: {
  type: DataTypes.STRING,
},
p6_u1_item2: {
  type: DataTypes.STRING,
},
p6_u1_item3: {
  type: DataTypes.STRING,
},
p6_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u1_tier: {
  type: DataTypes.SMALLINT,
},
p6_u2_character_id: {
  type: DataTypes.STRING,
},
p6_u2_item1: {
  type: DataTypes.STRING,
},
p6_u2_item2: {
  type: DataTypes.STRING,
},
p6_u2_item3: {
  type: DataTypes.STRING,
},
p6_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u2_tier: {
  type: DataTypes.SMALLINT,
},
p6_u3_character_id: {
  type: DataTypes.STRING,
},
p6_u3_item1: {
  type: DataTypes.STRING,
},
p6_u3_item2: {
  type: DataTypes.STRING,
},
p6_u3_item3: {
  type: DataTypes.STRING,
},
p6_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u3_tier: {
  type: DataTypes.SMALLINT,
},
p6_u4_character_id: {
  type: DataTypes.STRING,
},
p6_u4_item1: {
  type: DataTypes.STRING,
},
p6_u4_item2: {
  type: DataTypes.STRING,
},
p6_u4_item3: {
  type: DataTypes.STRING,
},
p6_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u4_tier: {
  type: DataTypes.SMALLINT,
},
p6_u5_character_id: {
  type: DataTypes.STRING,
},
p6_u5_item1: {
  type: DataTypes.STRING,
},
p6_u5_item2: {
  type: DataTypes.STRING,
},
p6_u5_item3: {
  type: DataTypes.STRING,
},
p6_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u5_tier: {
  type: DataTypes.SMALLINT,
},
p6_u6_character_id: {
  type: DataTypes.STRING,
},
p6_u6_item1: {
  type: DataTypes.STRING,
},
p6_u6_item2: {
  type: DataTypes.STRING,
},
p6_u6_item3: {
  type: DataTypes.STRING,
},
p6_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u6_tier: {
  type: DataTypes.SMALLINT,
},
p6_u7_character_id: {
  type: DataTypes.STRING,
},
p6_u7_item1: {
  type: DataTypes.STRING,
},
p6_u7_item2: {
  type: DataTypes.STRING,
},
p6_u7_item3: {
  type: DataTypes.STRING,
},
p6_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u7_tier: {
  type: DataTypes.SMALLINT,
},
p6_u8_character_id: {
  type: DataTypes.STRING,
},
p6_u8_item1: {
  type: DataTypes.STRING,
},
p6_u8_item2: {
  type: DataTypes.STRING,
},
p6_u8_item3: {
  type: DataTypes.STRING,
},
p6_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u8_tier: {
  type: DataTypes.SMALLINT,
},
p6_u9_character_id: {
  type: DataTypes.STRING,
},
p6_u9_item1: {
  type: DataTypes.STRING,
},
p6_u9_item2: {
  type: DataTypes.STRING,
},
p6_u9_item3: {
  type: DataTypes.STRING,
},
p6_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u9_tier: {
  type: DataTypes.SMALLINT,
},
p6_u10_character_id: {
  type: DataTypes.STRING,
},
p6_u10_item1: {
  type: DataTypes.STRING,
},
p6_u10_item2: {
  type: DataTypes.STRING,
},
p6_u10_item3: {
  type: DataTypes.STRING,
},
p6_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u10_tier: {
  type: DataTypes.SMALLINT,
},
p6_u11_character_id: {
  type: DataTypes.STRING,
},
p6_u11_item1: {
  type: DataTypes.STRING,
},
p6_u11_item2: {
  type: DataTypes.STRING,
},
p6_u11_item3: {
  type: DataTypes.STRING,
},
p6_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u11_tier: {
  type: DataTypes.SMALLINT,
},
p6_u12_character_id: {
  type: DataTypes.STRING,
},
p6_u12_item1: {
  type: DataTypes.STRING,
},
p6_u12_item2: {
  type: DataTypes.STRING,
},
p6_u12_item3: {
  type: DataTypes.STRING,
},
p6_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u12_tier: {
  type: DataTypes.SMALLINT,
},
p6_u13_character_id: {
  type: DataTypes.STRING,
},
p6_u13_item1: {
  type: DataTypes.STRING,
},
p6_u13_item2: {
  type: DataTypes.STRING,
},
p6_u13_item3: {
  type: DataTypes.STRING,
},
p6_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u13_tier: {
  type: DataTypes.SMALLINT,
},
p6_u14_character_id: {
  type: DataTypes.STRING,
},
p6_u14_item1: {
  type: DataTypes.STRING,
},
p6_u14_item2: {
  type: DataTypes.STRING,
},
p6_u14_item3: {
  type: DataTypes.STRING,
},
p6_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u14_tier: {
  type: DataTypes.SMALLINT,
},
p6_u15_character_id: {
  type: DataTypes.STRING,
},
p6_u15_item1: {
  type: DataTypes.STRING,
},
p6_u15_item2: {
  type: DataTypes.STRING,
},
p6_u15_item3: {
  type: DataTypes.STRING,
},
p6_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u15_tier: {
  type: DataTypes.SMALLINT,
},
p6_u16_character_id: {
  type: DataTypes.STRING,
},
p6_u16_item1: {
  type: DataTypes.STRING,
},
p6_u16_item2: {
  type: DataTypes.STRING,
},
p6_u16_item3: {
  type: DataTypes.STRING,
},
p6_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u16_tier: {
  type: DataTypes.SMALLINT,
},
p6_u17_character_id: {
  type: DataTypes.STRING,
},
p6_u17_item1: {
  type: DataTypes.STRING,
},
p6_u17_item2: {
  type: DataTypes.STRING,
},
p6_u17_item3: {
  type: DataTypes.STRING,
},
p6_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u17_tier: {
  type: DataTypes.SMALLINT,
},
p6_u18_character_id: {
  type: DataTypes.STRING,
},
p6_u18_item1: {
  type: DataTypes.STRING,
},
p6_u18_item2: {
  type: DataTypes.STRING,
},
p6_u18_item3: {
  type: DataTypes.STRING,
},
p6_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u18_tier: {
  type: DataTypes.SMALLINT,
},
p6_u19_character_id: {
  type: DataTypes.STRING,
},
p6_u19_item1: {
  type: DataTypes.STRING,
},
p6_u19_item2: {
  type: DataTypes.STRING,
},
p6_u19_item3: {
  type: DataTypes.STRING,
},
p6_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u19_tier: {
  type: DataTypes.SMALLINT,
},
p6_u20_character_id: {
  type: DataTypes.STRING,
},
p6_u20_item1: {
  type: DataTypes.STRING,
},
p6_u20_item2: {
  type: DataTypes.STRING,
},
p6_u20_item3: {
  type: DataTypes.STRING,
},
p6_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u20_tier: {
  type: DataTypes.SMALLINT,
},
p6_u21_character_id: {
  type: DataTypes.STRING,
},
p6_u21_item1: {
  type: DataTypes.STRING,
},
p6_u21_item2: {
  type: DataTypes.STRING,
},
p6_u21_item3: {
  type: DataTypes.STRING,
},
p6_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u21_tier: {
  type: DataTypes.SMALLINT,
},
p6_u22_character_id: {
  type: DataTypes.STRING,
},
p6_u22_item1: {
  type: DataTypes.STRING,
},
p6_u22_item2: {
  type: DataTypes.STRING,
},
p6_u22_item3: {
  type: DataTypes.STRING,
},
p6_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u22_tier: {
  type: DataTypes.SMALLINT,
},
p6_u23_character_id: {
  type: DataTypes.STRING,
},
p6_u23_item1: {
  type: DataTypes.STRING,
},
p6_u23_item2: {
  type: DataTypes.STRING,
},
p6_u23_item3: {
  type: DataTypes.STRING,
},
p6_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u23_tier: {
  type: DataTypes.SMALLINT,
},
p6_u24_character_id: {
  type: DataTypes.STRING,
},
p6_u24_item1: {
  type: DataTypes.STRING,
},
p6_u24_item2: {
  type: DataTypes.STRING,
},
p6_u24_item3: {
  type: DataTypes.STRING,
},
p6_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u24_tier: {
  type: DataTypes.SMALLINT,
},
p6_u25_character_id: {
  type: DataTypes.STRING,
},
p6_u25_item1: {
  type: DataTypes.STRING,
},
p6_u25_item2: {
  type: DataTypes.STRING,
},
p6_u25_item3: {
  type: DataTypes.STRING,
},
p6_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u25_tier: {
  type: DataTypes.SMALLINT,
},
p6_u26_character_id: {
  type: DataTypes.STRING,
},
p6_u26_item1: {
  type: DataTypes.STRING,
},
p6_u26_item2: {
  type: DataTypes.STRING,
},
p6_u26_item3: {
  type: DataTypes.STRING,
},
p6_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u26_tier: {
  type: DataTypes.SMALLINT,
},
p6_u27_character_id: {
  type: DataTypes.STRING,
},
p6_u27_item1: {
  type: DataTypes.STRING,
},
p6_u27_item2: {
  type: DataTypes.STRING,
},
p6_u27_item3: {
  type: DataTypes.STRING,
},
p6_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u27_tier: {
  type: DataTypes.SMALLINT,
},
p6_u28_character_id: {
  type: DataTypes.STRING,
},
p6_u28_item1: {
  type: DataTypes.STRING,
},
p6_u28_item2: {
  type: DataTypes.STRING,
},
p6_u28_item3: {
  type: DataTypes.STRING,
},
p6_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u28_tier: {
  type: DataTypes.SMALLINT,
},
p6_u29_character_id: {
  type: DataTypes.STRING,
},
p6_u29_item1: {
  type: DataTypes.STRING,
},
p6_u29_item2: {
  type: DataTypes.STRING,
},
p6_u29_item3: {
  type: DataTypes.STRING,
},
p6_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u29_tier: {
  type: DataTypes.SMALLINT,
},
p6_u30_character_id: {
  type: DataTypes.STRING,
},
p6_u30_item1: {
  type: DataTypes.STRING,
},
p6_u30_item2: {
  type: DataTypes.STRING,
},
p6_u30_item3: {
  type: DataTypes.STRING,
},
p6_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p6_u30_tier: {
  type: DataTypes.SMALLINT,
},
p7_u1_character_id: {
  type: DataTypes.STRING,
},
p7_u1_item1: {
  type: DataTypes.STRING,
},
p7_u1_item2: {
  type: DataTypes.STRING,
},
p7_u1_item3: {
  type: DataTypes.STRING,
},
p7_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u1_tier: {
  type: DataTypes.SMALLINT,
},
p7_u2_character_id: {
  type: DataTypes.STRING,
},
p7_u2_item1: {
  type: DataTypes.STRING,
},
p7_u2_item2: {
  type: DataTypes.STRING,
},
p7_u2_item3: {
  type: DataTypes.STRING,
},
p7_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u2_tier: {
  type: DataTypes.SMALLINT,
},
p7_u3_character_id: {
  type: DataTypes.STRING,
},
p7_u3_item1: {
  type: DataTypes.STRING,
},
p7_u3_item2: {
  type: DataTypes.STRING,
},
p7_u3_item3: {
  type: DataTypes.STRING,
},
p7_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u3_tier: {
  type: DataTypes.SMALLINT,
},
p7_u4_character_id: {
  type: DataTypes.STRING,
},
p7_u4_item1: {
  type: DataTypes.STRING,
},
p7_u4_item2: {
  type: DataTypes.STRING,
},
p7_u4_item3: {
  type: DataTypes.STRING,
},
p7_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u4_tier: {
  type: DataTypes.SMALLINT,
},
p7_u5_character_id: {
  type: DataTypes.STRING,
},
p7_u5_item1: {
  type: DataTypes.STRING,
},
p7_u5_item2: {
  type: DataTypes.STRING,
},
p7_u5_item3: {
  type: DataTypes.STRING,
},
p7_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u5_tier: {
  type: DataTypes.SMALLINT,
},
p7_u6_character_id: {
  type: DataTypes.STRING,
},
p7_u6_item1: {
  type: DataTypes.STRING,
},
p7_u6_item2: {
  type: DataTypes.STRING,
},
p7_u6_item3: {
  type: DataTypes.STRING,
},
p7_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u6_tier: {
  type: DataTypes.SMALLINT,
},
p7_u7_character_id: {
  type: DataTypes.STRING,
},
p7_u7_item1: {
  type: DataTypes.STRING,
},
p7_u7_item2: {
  type: DataTypes.STRING,
},
p7_u7_item3: {
  type: DataTypes.STRING,
},
p7_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u7_tier: {
  type: DataTypes.SMALLINT,
},
p7_u8_character_id: {
  type: DataTypes.STRING,
},
p7_u8_item1: {
  type: DataTypes.STRING,
},
p7_u8_item2: {
  type: DataTypes.STRING,
},
p7_u8_item3: {
  type: DataTypes.STRING,
},
p7_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u8_tier: {
  type: DataTypes.SMALLINT,
},
p7_u9_character_id: {
  type: DataTypes.STRING,
},
p7_u9_item1: {
  type: DataTypes.STRING,
},
p7_u9_item2: {
  type: DataTypes.STRING,
},
p7_u9_item3: {
  type: DataTypes.STRING,
},
p7_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u9_tier: {
  type: DataTypes.SMALLINT,
},
p7_u10_character_id: {
  type: DataTypes.STRING,
},
p7_u10_item1: {
  type: DataTypes.STRING,
},
p7_u10_item2: {
  type: DataTypes.STRING,
},
p7_u10_item3: {
  type: DataTypes.STRING,
},
p7_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u10_tier: {
  type: DataTypes.SMALLINT,
},
p7_u11_character_id: {
  type: DataTypes.STRING,
},
p7_u11_item1: {
  type: DataTypes.STRING,
},
p7_u11_item2: {
  type: DataTypes.STRING,
},
p7_u11_item3: {
  type: DataTypes.STRING,
},
p7_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u11_tier: {
  type: DataTypes.SMALLINT,
},
p7_u12_character_id: {
  type: DataTypes.STRING,
},
p7_u12_item1: {
  type: DataTypes.STRING,
},
p7_u12_item2: {
  type: DataTypes.STRING,
},
p7_u12_item3: {
  type: DataTypes.STRING,
},
p7_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u12_tier: {
  type: DataTypes.SMALLINT,
},
p7_u13_character_id: {
  type: DataTypes.STRING,
},
p7_u13_item1: {
  type: DataTypes.STRING,
},
p7_u13_item2: {
  type: DataTypes.STRING,
},
p7_u13_item3: {
  type: DataTypes.STRING,
},
p7_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u13_tier: {
  type: DataTypes.SMALLINT,
},
p7_u14_character_id: {
  type: DataTypes.STRING,
},
p7_u14_item1: {
  type: DataTypes.STRING,
},
p7_u14_item2: {
  type: DataTypes.STRING,
},
p7_u14_item3: {
  type: DataTypes.STRING,
},
p7_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u14_tier: {
  type: DataTypes.SMALLINT,
},
p7_u15_character_id: {
  type: DataTypes.STRING,
},
p7_u15_item1: {
  type: DataTypes.STRING,
},
p7_u15_item2: {
  type: DataTypes.STRING,
},
p7_u15_item3: {
  type: DataTypes.STRING,
},
p7_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u15_tier: {
  type: DataTypes.SMALLINT,
},
p7_u16_character_id: {
  type: DataTypes.STRING,
},
p7_u16_item1: {
  type: DataTypes.STRING,
},
p7_u16_item2: {
  type: DataTypes.STRING,
},
p7_u16_item3: {
  type: DataTypes.STRING,
},
p7_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u16_tier: {
  type: DataTypes.SMALLINT,
},
p7_u17_character_id: {
  type: DataTypes.STRING,
},
p7_u17_item1: {
  type: DataTypes.STRING,
},
p7_u17_item2: {
  type: DataTypes.STRING,
},
p7_u17_item3: {
  type: DataTypes.STRING,
},
p7_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u17_tier: {
  type: DataTypes.SMALLINT,
},
p7_u18_character_id: {
  type: DataTypes.STRING,
},
p7_u18_item1: {
  type: DataTypes.STRING,
},
p7_u18_item2: {
  type: DataTypes.STRING,
},
p7_u18_item3: {
  type: DataTypes.STRING,
},
p7_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u18_tier: {
  type: DataTypes.SMALLINT,
},
p7_u19_character_id: {
  type: DataTypes.STRING,
},
p7_u19_item1: {
  type: DataTypes.STRING,
},
p7_u19_item2: {
  type: DataTypes.STRING,
},
p7_u19_item3: {
  type: DataTypes.STRING,
},
p7_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u19_tier: {
  type: DataTypes.SMALLINT,
},
p7_u20_character_id: {
  type: DataTypes.STRING,
},
p7_u20_item1: {
  type: DataTypes.STRING,
},
p7_u20_item2: {
  type: DataTypes.STRING,
},
p7_u20_item3: {
  type: DataTypes.STRING,
},
p7_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u20_tier: {
  type: DataTypes.SMALLINT,
},
p7_u21_character_id: {
  type: DataTypes.STRING,
},
p7_u21_item1: {
  type: DataTypes.STRING,
},
p7_u21_item2: {
  type: DataTypes.STRING,
},
p7_u21_item3: {
  type: DataTypes.STRING,
},
p7_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u21_tier: {
  type: DataTypes.SMALLINT,
},
p7_u22_character_id: {
  type: DataTypes.STRING,
},
p7_u22_item1: {
  type: DataTypes.STRING,
},
p7_u22_item2: {
  type: DataTypes.STRING,
},
p7_u22_item3: {
  type: DataTypes.STRING,
},
p7_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u22_tier: {
  type: DataTypes.SMALLINT,
},
p7_u23_character_id: {
  type: DataTypes.STRING,
},
p7_u23_item1: {
  type: DataTypes.STRING,
},
p7_u23_item2: {
  type: DataTypes.STRING,
},
p7_u23_item3: {
  type: DataTypes.STRING,
},
p7_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u23_tier: {
  type: DataTypes.SMALLINT,
},
p7_u24_character_id: {
  type: DataTypes.STRING,
},
p7_u24_item1: {
  type: DataTypes.STRING,
},
p7_u24_item2: {
  type: DataTypes.STRING,
},
p7_u24_item3: {
  type: DataTypes.STRING,
},
p7_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u24_tier: {
  type: DataTypes.SMALLINT,
},
p7_u25_character_id: {
  type: DataTypes.STRING,
},
p7_u25_item1: {
  type: DataTypes.STRING,
},
p7_u25_item2: {
  type: DataTypes.STRING,
},
p7_u25_item3: {
  type: DataTypes.STRING,
},
p7_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u25_tier: {
  type: DataTypes.SMALLINT,
},
p7_u26_character_id: {
  type: DataTypes.STRING,
},
p7_u26_item1: {
  type: DataTypes.STRING,
},
p7_u26_item2: {
  type: DataTypes.STRING,
},
p7_u26_item3: {
  type: DataTypes.STRING,
},
p7_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u26_tier: {
  type: DataTypes.SMALLINT,
},
p7_u27_character_id: {
  type: DataTypes.STRING,
},
p7_u27_item1: {
  type: DataTypes.STRING,
},
p7_u27_item2: {
  type: DataTypes.STRING,
},
p7_u27_item3: {
  type: DataTypes.STRING,
},
p7_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u27_tier: {
  type: DataTypes.SMALLINT,
},
p7_u28_character_id: {
  type: DataTypes.STRING,
},
p7_u28_item1: {
  type: DataTypes.STRING,
},
p7_u28_item2: {
  type: DataTypes.STRING,
},
p7_u28_item3: {
  type: DataTypes.STRING,
},
p7_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u28_tier: {
  type: DataTypes.SMALLINT,
},
p7_u29_character_id: {
  type: DataTypes.STRING,
},
p7_u29_item1: {
  type: DataTypes.STRING,
},
p7_u29_item2: {
  type: DataTypes.STRING,
},
p7_u29_item3: {
  type: DataTypes.STRING,
},
p7_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u29_tier: {
  type: DataTypes.SMALLINT,
},
p7_u30_character_id: {
  type: DataTypes.STRING,
},
p7_u30_item1: {
  type: DataTypes.STRING,
},
p7_u30_item2: {
  type: DataTypes.STRING,
},
p7_u30_item3: {
  type: DataTypes.STRING,
},
p7_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p7_u30_tier: {
  type: DataTypes.SMALLINT,
},
p8_u1_character_id: {
  type: DataTypes.STRING,
},
p8_u1_item1: {
  type: DataTypes.STRING,
},
p8_u1_item2: {
  type: DataTypes.STRING,
},
p8_u1_item3: {
  type: DataTypes.STRING,
},
p8_u1_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u1_tier: {
  type: DataTypes.SMALLINT,
},
p8_u2_character_id: {
  type: DataTypes.STRING,
},
p8_u2_item1: {
  type: DataTypes.STRING,
},
p8_u2_item2: {
  type: DataTypes.STRING,
},
p8_u2_item3: {
  type: DataTypes.STRING,
},
p8_u2_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u2_tier: {
  type: DataTypes.SMALLINT,
},
p8_u3_character_id: {
  type: DataTypes.STRING,
},
p8_u3_item1: {
  type: DataTypes.STRING,
},
p8_u3_item2: {
  type: DataTypes.STRING,
},
p8_u3_item3: {
  type: DataTypes.STRING,
},
p8_u3_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u3_tier: {
  type: DataTypes.SMALLINT,
},
p8_u4_character_id: {
  type: DataTypes.STRING,
},
p8_u4_item1: {
  type: DataTypes.STRING,
},
p8_u4_item2: {
  type: DataTypes.STRING,
},
p8_u4_item3: {
  type: DataTypes.STRING,
},
p8_u4_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u4_tier: {
  type: DataTypes.SMALLINT,
},
p8_u5_character_id: {
  type: DataTypes.STRING,
},
p8_u5_item1: {
  type: DataTypes.STRING,
},
p8_u5_item2: {
  type: DataTypes.STRING,
},
p8_u5_item3: {
  type: DataTypes.STRING,
},
p8_u5_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u5_tier: {
  type: DataTypes.SMALLINT,
},
p8_u6_character_id: {
  type: DataTypes.STRING,
},
p8_u6_item1: {
  type: DataTypes.STRING,
},
p8_u6_item2: {
  type: DataTypes.STRING,
},
p8_u6_item3: {
  type: DataTypes.STRING,
},
p8_u6_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u6_tier: {
  type: DataTypes.SMALLINT,
},
p8_u7_character_id: {
  type: DataTypes.STRING,
},
p8_u7_item1: {
  type: DataTypes.STRING,
},
p8_u7_item2: {
  type: DataTypes.STRING,
},
p8_u7_item3: {
  type: DataTypes.STRING,
},
p8_u7_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u7_tier: {
  type: DataTypes.SMALLINT,
},
p8_u8_character_id: {
  type: DataTypes.STRING,
},
p8_u8_item1: {
  type: DataTypes.STRING,
},
p8_u8_item2: {
  type: DataTypes.STRING,
},
p8_u8_item3: {
  type: DataTypes.STRING,
},
p8_u8_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u8_tier: {
  type: DataTypes.SMALLINT,
},
p8_u9_character_id: {
  type: DataTypes.STRING,
},
p8_u9_item1: {
  type: DataTypes.STRING,
},
p8_u9_item2: {
  type: DataTypes.STRING,
},
p8_u9_item3: {
  type: DataTypes.STRING,
},
p8_u9_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u9_tier: {
  type: DataTypes.SMALLINT,
},
p8_u10_character_id: {
  type: DataTypes.STRING,
},
p8_u10_item1: {
  type: DataTypes.STRING,
},
p8_u10_item2: {
  type: DataTypes.STRING,
},
p8_u10_item3: {
  type: DataTypes.STRING,
},
p8_u10_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u10_tier: {
  type: DataTypes.SMALLINT,
},
p8_u11_character_id: {
  type: DataTypes.STRING,
},
p8_u11_item1: {
  type: DataTypes.STRING,
},
p8_u11_item2: {
  type: DataTypes.STRING,
},
p8_u11_item3: {
  type: DataTypes.STRING,
},
p8_u11_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u11_tier: {
  type: DataTypes.SMALLINT,
},
p8_u12_character_id: {
  type: DataTypes.STRING,
},
p8_u12_item1: {
  type: DataTypes.STRING,
},
p8_u12_item2: {
  type: DataTypes.STRING,
},
p8_u12_item3: {
  type: DataTypes.STRING,
},
p8_u12_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u12_tier: {
  type: DataTypes.SMALLINT,
},
p8_u13_character_id: {
  type: DataTypes.STRING,
},
p8_u13_item1: {
  type: DataTypes.STRING,
},
p8_u13_item2: {
  type: DataTypes.STRING,
},
p8_u13_item3: {
  type: DataTypes.STRING,
},
p8_u13_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u13_tier: {
  type: DataTypes.SMALLINT,
},
p8_u14_character_id: {
  type: DataTypes.STRING,
},
p8_u14_item1: {
  type: DataTypes.STRING,
},
p8_u14_item2: {
  type: DataTypes.STRING,
},
p8_u14_item3: {
  type: DataTypes.STRING,
},
p8_u14_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u14_tier: {
  type: DataTypes.SMALLINT,
},
p8_u15_character_id: {
  type: DataTypes.STRING,
},
p8_u15_item1: {
  type: DataTypes.STRING,
},
p8_u15_item2: {
  type: DataTypes.STRING,
},
p8_u15_item3: {
  type: DataTypes.STRING,
},
p8_u15_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u15_tier: {
  type: DataTypes.SMALLINT,
},
p8_u16_character_id: {
  type: DataTypes.STRING,
},
p8_u16_item1: {
  type: DataTypes.STRING,
},
p8_u16_item2: {
  type: DataTypes.STRING,
},
p8_u16_item3: {
  type: DataTypes.STRING,
},
p8_u16_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u16_tier: {
  type: DataTypes.SMALLINT,
},
p8_u17_character_id: {
  type: DataTypes.STRING,
},
p8_u17_item1: {
  type: DataTypes.STRING,
},
p8_u17_item2: {
  type: DataTypes.STRING,
},
p8_u17_item3: {
  type: DataTypes.STRING,
},
p8_u17_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u17_tier: {
  type: DataTypes.SMALLINT,
},
p8_u18_character_id: {
  type: DataTypes.STRING,
},
p8_u18_item1: {
  type: DataTypes.STRING,
},
p8_u18_item2: {
  type: DataTypes.STRING,
},
p8_u18_item3: {
  type: DataTypes.STRING,
},
p8_u18_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u18_tier: {
  type: DataTypes.SMALLINT,
},
p8_u19_character_id: {
  type: DataTypes.STRING,
},
p8_u19_item1: {
  type: DataTypes.STRING,
},
p8_u19_item2: {
  type: DataTypes.STRING,
},
p8_u19_item3: {
  type: DataTypes.STRING,
},
p8_u19_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u19_tier: {
  type: DataTypes.SMALLINT,
},
p8_u20_character_id: {
  type: DataTypes.STRING,
},
p8_u20_item1: {
  type: DataTypes.STRING,
},
p8_u20_item2: {
  type: DataTypes.STRING,
},
p8_u20_item3: {
  type: DataTypes.STRING,
},
p8_u20_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u20_tier: {
  type: DataTypes.SMALLINT,
},
p8_u21_character_id: {
  type: DataTypes.STRING,
},
p8_u21_item1: {
  type: DataTypes.STRING,
},
p8_u21_item2: {
  type: DataTypes.STRING,
},
p8_u21_item3: {
  type: DataTypes.STRING,
},
p8_u21_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u21_tier: {
  type: DataTypes.SMALLINT,
},
p8_u22_character_id: {
  type: DataTypes.STRING,
},
p8_u22_item1: {
  type: DataTypes.STRING,
},
p8_u22_item2: {
  type: DataTypes.STRING,
},
p8_u22_item3: {
  type: DataTypes.STRING,
},
p8_u22_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u22_tier: {
  type: DataTypes.SMALLINT,
},
p8_u23_character_id: {
  type: DataTypes.STRING,
},
p8_u23_item1: {
  type: DataTypes.STRING,
},
p8_u23_item2: {
  type: DataTypes.STRING,
},
p8_u23_item3: {
  type: DataTypes.STRING,
},
p8_u23_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u23_tier: {
  type: DataTypes.SMALLINT,
},
p8_u24_character_id: {
  type: DataTypes.STRING,
},
p8_u24_item1: {
  type: DataTypes.STRING,
},
p8_u24_item2: {
  type: DataTypes.STRING,
},
p8_u24_item3: {
  type: DataTypes.STRING,
},
p8_u24_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u24_tier: {
  type: DataTypes.SMALLINT,
},
p8_u25_character_id: {
  type: DataTypes.STRING,
},
p8_u25_item1: {
  type: DataTypes.STRING,
},
p8_u25_item2: {
  type: DataTypes.STRING,
},
p8_u25_item3: {
  type: DataTypes.STRING,
},
p8_u25_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u25_tier: {
  type: DataTypes.SMALLINT,
},
p8_u26_character_id: {
  type: DataTypes.STRING,
},
p8_u26_item1: {
  type: DataTypes.STRING,
},
p8_u26_item2: {
  type: DataTypes.STRING,
},
p8_u26_item3: {
  type: DataTypes.STRING,
},
p8_u26_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u26_tier: {
  type: DataTypes.SMALLINT,
},
p8_u27_character_id: {
  type: DataTypes.STRING,
},
p8_u27_item1: {
  type: DataTypes.STRING,
},
p8_u27_item2: {
  type: DataTypes.STRING,
},
p8_u27_item3: {
  type: DataTypes.STRING,
},
p8_u27_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u27_tier: {
  type: DataTypes.SMALLINT,
},
p8_u28_character_id: {
  type: DataTypes.STRING,
},
p8_u28_item1: {
  type: DataTypes.STRING,
},
p8_u28_item2: {
  type: DataTypes.STRING,
},
p8_u28_item3: {
  type: DataTypes.STRING,
},
p8_u28_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u28_tier: {
  type: DataTypes.SMALLINT,
},
p8_u29_character_id: {
  type: DataTypes.STRING,
},
p8_u29_item1: {
  type: DataTypes.STRING,
},
p8_u29_item2: {
  type: DataTypes.STRING,
},
p8_u29_item3: {
  type: DataTypes.STRING,
},
p8_u29_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u29_tier: {
  type: DataTypes.SMALLINT,
},
p8_u30_character_id: {
  type: DataTypes.STRING,
},
p8_u30_item1: {
  type: DataTypes.STRING,
},
p8_u30_item2: {
  type: DataTypes.STRING,
},
p8_u30_item3: {
  type: DataTypes.STRING,
},
p8_u30_rarity: {
  type: DataTypes.SMALLINT,
},
p8_u30_tier: {
  type: DataTypes.SMALLINT,
},
    
});

const analysisData = sq.define("analysisData", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  data: {
    type: DataTypes.TEXT
  }
})


//generalMatchData.sync().then(() => {console.log("User Model synced");});
//traitMatchData.sync().then(() => {console.log("User Model synced");});
//unitMatchData.sync().then(() => {console.log("User Model synced");});
//User.sync().then(() => {console.log("User Model synced");});
//matchUsers.sync().then(() => {console.log("User Model synced");});
analysisData.sync().then(() => {console.log("User Model synced");});

//generalMatchData.hasMany(matchUsers, { foreignKey: 'match_ID' });
//matchUsers.belongsTo(generalMatchData, { foreignKey: 'match_ID' });
module.exports = {User, matchUsers, generalMatchData, traitMatchData, unitMatchData}

//var puuidAdd = User.create({
  //puuid: "4y7U0S8KJEdONYlueYzI_BHK22nE93gPmA783axCNcNOzC0M0ldpdcRs8ON-OAkMUA__t9QQNhRrLA",
  //name: "saveasuntitled",
  //accountID: "L9V81fZ7FKkJFzmrGCdh-PVmgWU339M8kbE6e67rgNVyRfM",
  //id: "w5NWTI5sktMcXVpeUqtyofoNvhydyGcxk_e-9PDjofsgCRU"
//})






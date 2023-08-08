function unitFactory(unitData){
    const Units = []
    class Unit {
        constructor(name, cost, traits, itemStats, starStats) {
            this.name = name
            this.cost = cost
            this.traits = traits
            this.itemStats = itemStats
            this.starStats = starStats
        }
    }

    //get a list of all unique unit values from input data

    //loop over each value in that array, get the proper data and add them to Units
    Units.push(new Unit("Gwen", "4", ["Shadow Isles, Slayer"], {}, {}))

    
    console.log(Units)
    return Units;
    
}



var exampleUnit = {
    "temp": {
        "name": "",
        "cost": 0,
        "traits": [],
        "itemStats": {
            "distribution": {
                "zeroItems": {
                    "count": "",
                    "avgPlace": "",
                },
                "oneItem": {
                    "count": "",
                    "avgPlace": "",
                    "items": [],
                },
                "twoItems": {
                    "count": "",
                    "avgPlace": "",
                    "items": [],
                },
                "threeItems": {
                    "count": "",
                    "avgPlace": "",
                    "items": [],
                },
            },
            "overall": []
        },
        "starStats": {
            "oneStar": {
                "count": "",
                "avgPlace": "",
            },
            "twoStar": {
                "count": "",
                "avgPlace": "",
            },
            "threeStar": {
                "count": "",
                "avgPlace": "",
            },
           
        },
    }
}






console.log(Units[0])
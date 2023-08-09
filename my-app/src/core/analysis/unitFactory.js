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

    //get a list of all unique unit values from input data or pull from riot object
    var uniqueUnits = []

    //loop over each value in that array, get the proper data and add them to Units
    for (x = 0; x < uniqueUnits.length; x++){
        let name = ""
        let cost = ""
        let traits = ""
        let itemStats = ""
        let starStats = ""

        Units.push(new Unit(name, cost, traits, itemStats, starStats))
    }
    
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

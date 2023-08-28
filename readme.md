Last Readme Update: 8/27/23

The goal of this project is provide a customizable one site solution for all the additional reference data a high level player needs to play competitive TFT at the highest level.

Current TODOs:
- display itemStats on site
- allow items to be filtered by Radient, Ornn, Emblem etc
- add basic augment stats to project now that "ban" has been lifted


- create cashout table in Cashout page instead of just linking to site
- create tome chart instead of linking
- fix portal info to just show ryze spell


guide to unitData export
// 0 - unitName
// 1 - starLevel
// 2,3,4 - item1, item2, item3
// 5 - placement

Past TODOs
- switch data display to happen from one central data source being returned by an axios request
- send current count data to the analysisData table and set this to automatically run in the constantFunctions area
- switch data request to going to the static data stored in the analysisData table
- update having two places where patch epoch value has to be change just to one (8/10/23)
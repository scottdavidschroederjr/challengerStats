const tftAugmentData = require('../../../riotAssets/tft-augments');

async function augmentPlacement(augmentData) {
    const results = [];

    for (const data of augmentData) {
        const valueCounts = {};

        for (let i = 0; i < data.length - 1; i++) {
            const value = data[i];
            const count = data[data.length - 1];

            if (value !== null) {
                if (!valueCounts[value]) {
                    valueCounts[value] = {
                        totalCount: 0,
                        specificCount: 0,
                        totalAverage: 0,
                        specificAverage: 0,
                    };
                }

                valueCounts[value].totalCount += count;

                if (i === 0) {
                    valueCounts[value].specificCount += count;
                    valueCounts[value].specificAverage += count * data[3];
                } else {
                    valueCounts[value].specificAverage += count * data[3];
                }
            }
        }

        for (const value in valueCounts) {
            const totalCount = valueCounts[value].totalCount;
            const specificCount = valueCounts[value].specificCount;
            const totalAverage = valueCounts[value].totalAverage / totalCount;
            const specificAverage = specificCount > 0 ? valueCounts[value].specificAverage / specificCount : null;

            const entryName = tftAugmentData['data'][value]['name'];

            results.push([
                entryName,
                totalCount,
                totalAverage,
                specificCount,
                specificAverage,
                null, // Placeholder for count in augmentData[x][1]
                null, // Placeholder for average in augmentData[x][1]
                null, // Placeholder for count in augmentData[x][2]
                null, // Placeholder for average in augmentData[x][2]
            ]);
        }
    }

    return results;
}







testData = [['TFT9_Augment_AllThatShimmers', 'TFT9_Augment_CyberneticLeech3', 'TFT9_Augment_HealingOrbsII', 1], [null, 'TFT9_Augment_NoxusEmblem2', 'TFT9_Augment_LongDistanceRelationship2', 4], ['TFT9_Augment_ACutAbove', 'TFT9_Augment_GreaterJeweledLotus', 'TFT9_Augment_Martyr', 8]]


augmentPlacement(testData)












module.exports = { augmentPlacement };

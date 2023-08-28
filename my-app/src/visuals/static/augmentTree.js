import React, { useState } from 'react';

function AugmentTree() {
    const [augment1, setAugment1] = useState(null);
    const [augment2, setAugment2] = useState(null);
    const [values, setValues] = useState({
        silver: "Silver Augment",
        gold: "Gold Augment",
        prismatic: "Prismatic Augment"
    });

    const updateValues = () => {
        // Manually define your probability tree here
        const probabilityTree = {
            // Define probabilities and new values based on augment choices
            silver: {
                gold: { probability: 0.3, newValue: "New Silver+Gold Value" },
                prismatic: { probability: 0.5, newValue: "New Silver+Prismatic Value" }
            },
            gold: {
                silver: { probability: 0.4, newValue: "New Gold+Silver Value" },
                prismatic: { probability: 0.6, newValue: "New Gold+Prismatic Value" }
            },
            prismatic: {
                silver: { probability: 0.2, newValue: "New Prismatic+Silver Value" },
                gold: { probability: 0.7, newValue: "New Prismatic+Gold Value" }
            }
        };

        if (augment1 && augment2) {
            const { probability, newValue } = probabilityTree[augment1][augment2];
            const updatedValues = { ...values };
            updatedValues[augment1] = newValue;
            setValues(updatedValues);
        }
    };

    return (
        <div className="component" id=''>
            <div className="componentHeader">Augment Tree</div>
            <div>
                <select onChange={(e) => setAugment1(e.target.value)}>
                    <option value="">Choose Augment 1</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                </select>
                <select onChange={(e) => setAugment2(e.target.value)}>
                    <option value="">Choose Augment 2</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                </select>
                <button onClick={updateValues}>Update Values</button>
            </div>
            <div id='tree'>
                {Object.keys(values).map((key) => (
                    <div key={key}>{values[key]}</div>
                ))}
            </div>
        </div>
    )
}

export default AugmentTree;

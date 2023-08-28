import React, { useState, useEffect } from 'react';

function AugmentTree() {
    const [augment1, setAugment1] = useState('base');
    const [augment2, setAugment2] = useState('silver');
    const [augment3, setAugment3] = useState('silver');
    const [values, setValues] = useState({
        silver: 1,
        gold: 2,
        prismatic: 3,
    });

    const baseOdds = {
        silver: "",
        gold: "",
        prismatic: "",
    }
    const secondOdds = {
        silver: {
            silver: "",
            gold: "",
            prismatic: "",
        },
        gold: {
            silver: "",
            gold: "",
            prismatic: "",
        },
        prismatic: {
            silver: "",
            gold: "",
            prismatic: "",
        }
    }
    const thirdOdds = {
        silver: {
            silver: {
                silver: "",
                gold: "",
                prismatic: "",
            },
            gold: {
                silver: "",
                gold: "",
                prismatic: "",
            },
            prismatic: {
                silver: "",
                gold: "",
                prismatic: "",
            },
        },
        gold: {
            silver: {
                silver: "",
                gold: "",
                prismatic: "",
            },
            gold: {
                silver: "",
                gold: "",
                prismatic: "",
            },
            prismatic: {
                silver: "",
                gold: "",
                prismatic: "",
            },
        },
        prismatic: {
            silver: {
                silver: "",
                gold: "",
                prismatic: "",
            },
            gold: {
                silver: "",
                gold: "",
                prismatic: "",
            },
            prismatic: {
                silver: "",
                gold: "",
                prismatic: "",
            },
        }
    }


    return (<div>placeholder</div>)

    return (
        <div className="component">
            <div className="componentHeader">Augment Tree</div>
            <div>
                <select onChange={(e) => setAugment1(e.target.value)}>
                    <option value="" disabled>Choose Augment 1</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                </select>
                <br />
                <select onChange={(e) => setAugment2(e.target.value)}>
                    <option value="" disabled>Choose Augment 2</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                </select>
                <br />
                <select onChange={(e) => setAugment3(e.target.value)}>
                    <option value="" disabled>Choose Augment 3</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                </select>
                <br />
                <div id='tree'>
                    {Object.keys(values).map((key) => (
                        <div key={key}>{values[key]}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AugmentTree;

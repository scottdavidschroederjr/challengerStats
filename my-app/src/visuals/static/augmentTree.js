import React, { useState, useEffect } from 'react';

function AugmentTree() {
    const [augment1, setAugment1] = useState("false");
    const [augment2, setAugment2] = useState("false");
    const [augment3, setAugment3] = useState("false");

    const secondOdds = {
        silver: {
            silver: "36%",
            gold: "61%",
            prismatic: "3%",
        },
        gold: {
            silver: "32%",
            gold: "40%",
            prismatic: "28%",
        },
        prismatic: {
            silver: "50%",
            gold: "30%",
            prismatic: "20%",
        }
    }
    const thirdOdds = {
        silver: {
            silver: {
                silver: "0%",
                gold: "50%",
                prismatic: "50%",
            },
            gold: {
                silver: "0%",
                gold: "71%",
                prismatic: "29%",
            },
            prismatic: {
                silver: "0%",
                gold: "0%",
                prismatic: "100%",
            },
        },
        gold: {
            silver: {
                silver: "0%",
                gold: "90%",
                prismatic: "10%",
            },
            gold: {
                silver: "0%",
                gold: "88%",
                prismatic: "12%",
            },
            prismatic: {
                silver: "35%",
                gold: "59%",
                prismatic: "6%",
            },
        },
        prismatic: {
            silver: {
                silver: "0%",
                gold: "80%",
                prismatic: "20%",
            },
            gold: {
                silver: "0%",
                gold: "67%",
                prismatic: "33%",
            },
            prismatic: {
                silver: "0%",
                gold: "50%",
                prismatic: "50%",
            },
        }
    }

    if (augment1 === "false") {
        return (
            <div className="component">
                <div className="componentHeader">Augment Tree</div>
                <div>
                    <select onChange={(e) => setAugment1(e.target.value)}>
                        <option value="">Choose Augment 1</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="prismatic">Prismatic</option>
                    </select>
                    <br></br>
                    28% Silver Augment <br></br>
                    62% Gold Augment <br></br>
                    10% Prismatic Augment <br></br>
                </div>
            </div>

        )
    }
    if (augment2 === "false") {
        return (
            <div className="component">
                <div>
                <div className="componentHeader">Augment Tree</div>
                <div>
                    <select onChange={(e) => setAugment1(e.target.value)}>
                    <option value="false">Choose Augment 1</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => setAugment2(e.target.value)}>
                    <option value="false">Choose Augment 2</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                    </select>
                </div>
                <br></br>
                
                {secondOdds[augment1]['silver']} Silver Augment <br></br>
                {secondOdds[augment1]['gold']} Gold Augment <br></br>
                {secondOdds[augment1]['prismatic']} Prismatic Augment <br></br>
                </div>
            </div>

    )
    }
    if (augment3 === "false") {
    return (
        <div className="component">
            <div>
            <div className="componentHeader">Augment Tree</div>
            <div>
                <select onChange={(e) => setAugment1(e.target.value)}>
                <option value="false">Choose Augment 1</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="prismatic">Prismatic</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => setAugment2(e.target.value)}>
                <option value="false">Choose Augment 2</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="prismatic">Prismatic</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => setAugment3(e.target.value)}>
                <option value="false">Choose Augment 3</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="prismatic">Prismatic</option>
                </select>
            </div>
            <br></br>
            
            {thirdOdds[augment1][augment2]['silver']} Silver Augment <br></br>
            {thirdOdds[augment1][augment2]['gold']} Gold Augment <br></br>
            {thirdOdds[augment1][augment2]['prismatic']} Prismatic Augment <br></br>
            </div>
        </div>

    )}
    if (augment3 !== "false") {
        return (
            <div className="component">
                <div>
                <div className="componentHeader">Augment Tree</div>
                <div>
                    <select onChange={(e) => setAugment1(e.target.value)}>
                    <option value="false">Choose Augment 1</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => setAugment2(e.target.value)}>
                    <option value="false">Choose Augment 2</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => setAugment3(e.target.value)}>
                    <option value="false">Choose Augment 3</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="prismatic">Prismatic</option>
                    </select>
            </div>
            </div>
            </div>
        )
        }
    



}

export default AugmentTree;

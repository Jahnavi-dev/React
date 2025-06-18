import React from "react";
import IplImageComp from "./iplImageComp";

const Iplpage=()=>{
    const teamsList=[
        {
            name:"RCB",
            players:["Virat Kohli", "Dinesh Karthik"],
            wins:1
        },
        {
            name:"SRH",
            players:["Abishek", "Pat Cummins"],
            wins:1
        },
        {
            name:"CSK",
            players:["Dhoni", "RRavindra"],
            wins:4
        },
        {
            name:"MI",
            players:["Hardhik", "SuryaKumar"],
            wins:4
        }
    ]

    return(
        <React.Fragment>
            <h1>IPL Teams</h1>
            <IplImageComp/>
            <h3>{teamsList[0].name}</h3>
            <p>{teamsList[0].players[0]}</p>
            <p>{teamsList[0].players[1]}</p>

            <h3>{teamsList[1].name}</h3>
            <p>{teamsList[1].players[0]}</p>
            <p>{teamsList[1].players[1]}</p>

            <h3>{teamsList[2].name}</h3>
            <p>{teamsList[2].players[0]}</p>
            <p>{teamsList[2].players[1]}</p>

            <h3>{teamsList[3].name}</h3>
            <p>{teamsList[3].players[0]}</p>
            <p>{teamsList[3].players[1]}</p>
        </React.Fragment>
    )
}

export default Iplpage;
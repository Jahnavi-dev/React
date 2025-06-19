const IplTeams=[
    {
        teamName:"RCB",
        wins:1,
        players:["virat Kohli", "Dinesh Karthik", "Krunal Pandya"]
    },
    {
        teamName:"SRH",
        wins:1,
        players:["Pat Cummins", "Abhishek", "Kalesen"]
    },
    {
        teamName:"MI",
        wins:4,
        players:["Hardhik", "Surya Kumar", "Bumrah"]
    },
    {
        teamName:"KKR",
        wins:3,
        players:["Ajinkya", "Rinku Singh"]
    },
    {
        teamName:"PK",
        wins:0,
        players:["Shreyas", "Chahal"]
    }, 
    {
        teamName:"GT",
        wins:1,
        players:["Shubman Gill", "Jos Buttler"]
    }
]

const IplFilteredComp=()=>{
    const totalSeasons=IplTeams.reduce((result,obj)=>{return result+obj.wins},0)
    return (<>
    <h1>IPL Teams</h1>
    <h3>{`Total Seasons : ${totalSeasons}`}</h3>
    {(IplTeams.filter((value)=>{
        return value.wins>=0
    })).map((filteredTeam)=>{
        const {teamName, players}=filteredTeam;
        return(
            <>
            <h4>{teamName}</h4>
            {players.map((eachPlayer)=>{
                return(<p>{eachPlayer}</p>)
            })}
            </>
        )
    })
    }
    </>)
}

export default IplFilteredComp
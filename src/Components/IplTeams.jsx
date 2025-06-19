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

const IplTeamsComp=()=>{
    return(
        <>
        <h1>IPL Teams List</h1>
            {
                IplTeams.map((value, index)=>{
                    const {teamName, wins, players}=value
                    return(<>{wins>=1&&
                    <>
                    <h1>{index+1} . {teamName}</h1>
                        <h3>Total Wins:{wins}</h3>
                        {players.map((eachPlayer)=>{
                            return(
                                <>
                                <p>{eachPlayer}</p>
                                </>
                            )
                        })}
                    </>}
                        
                    </>)
                })
            }
        </>
    )
}

export default IplTeamsComp;
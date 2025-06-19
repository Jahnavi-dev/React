const ConditionalRenComp=()=>{
    const login=1;
    // if(login){
    //     return(<button>ClickMe</button>)
    // }
    // else{
    //     return(<button>False login</button>)
    // }


    // login?return(<button>ClickMe</button>):return(<button>False login</button>);


    return(
    <>
        {
            login?<button>ClickMe</button>:<button>False login</button>

        }
    </>
    )
    
}

export default ConditionalRenComp;
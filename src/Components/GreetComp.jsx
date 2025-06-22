const GreetComp=(props)=>{
    console.log(props)
    return(
        <>
        <h1>Hi Ravi How are u</h1>
        {props.children}
        </>
    )
}
export default GreetComp;
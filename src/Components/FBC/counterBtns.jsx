import "./counterStyle.css"


const CounterBtns=(props)=>{
    const {children, onPress}=props;
     console.log(props);
    return(
        <>
        <button onClick={onPress} className={`counter_Btn ${children === "unSubscribe" && "unSubscribe"}`} >{children}</button>
        {/* <button onClick={onPress} className=  {`counter_Btn ${children === "Subscribe" ? "Subscribe" : "unSubscribe"}`} >{children}</button> */}
        </>
    )
}
export default CounterBtns;
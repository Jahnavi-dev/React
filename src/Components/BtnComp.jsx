const BtnComp=(props)=>{
    console.log(props)
    const {btnText, bgColor, btnProperties:{width, height}, color}=props;
    return(
        <>
        <button style={{width:width, height:height, backgroundColor:bgColor, color:color}}>{btnText}</button>
        </>
    )
}
export default BtnComp;
import react from "react";

const Timeline = ( props:any ) => {
    if (props.isLast === true) {
        return ( 
            <div style={{width: "400px", margin: "auto", padding: "none", display: "grid", gridTemplate: "195px 10px 195px"}}>
            <div style={{gridColumn: "1", width: "195px"}}> { props.name } </div>
            <div style={{gridColumn: "2", width: "10px", height: "100px", margin: "auto", backgroundColor: "transparent" }}>
                <div style={{width: "30px", position: "absolute", borderInlineColor: "white", left: "calc(50vw - 15px)", top: ( 200 + 100 * parseInt(props.offset)).toString() + "px", color: "wheat", height: "30px", margin: "auto", backgroundColor: "black", borderRadius: "45px", }}>
    
                </div>
            </div>
            <div style={{gridColumn: "3", width: "195px"}}> { props.name } </div>
        </div>
        )
    }

    let output = ( 
        <div style={{width: "400px", margin: "auto", padding: "none", display: "grid", gridTemplate: "195px 10px 195px"}}>
        <div style={{gridColumn: "1", width: "195px"}}> { props.name } </div>
        <div style={{gridColumn: "2", width: "10px", height: "100px", margin: "auto", backgroundColor: "black" }}>
            <div style={{width: "30px", position: "absolute", borderInlineColor: "white", left: "calc(50vw - 15px)", color: "wheat", height: "30px", margin: "auto", backgroundColor: "black", borderRadius: "45px", }}>

            </div>
        </div>
        <div style={{gridColumn: "3", width: "195px"}}> { props.name } </div>
    </div>
    )
  
    return output;
}

export default Timeline;
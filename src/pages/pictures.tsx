import React from 'react';
import Timeline from '../components/timeline';

const timeline = {
    20220512: {
         
    },

    20220513: {

    },

    20220514: {

    }
}

function TimelineRenderer () {
    var rows = [];
    let iMax:number = Object.keys(timeline).length;
    console.log(iMax);

    for(let i = 0; i < iMax; i++) {
        let key = Object.keys(timeline)[i];
        console.log((i === (iMax - 1) ));
        rows.push(<Timeline name={key}  offset= {i} isLast={ (i === (iMax - 1) )}/>);
    }

    return (
        <div>
            {rows}
        </div>
    )
}

const Pictures = () => {
    return (
        <div className="App">
            {/* Create centered div */}
            <div style={{width: "100vw", height: "30vh"}}>
                {TimelineRenderer()}
            </div>
        </div>
    )
}

export default Pictures;
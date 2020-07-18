import React, {useEffect,useState } from 'react'
import Button from '@material-ui/core/Button';


function EffectComp() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `I have loaded`;

        return function cleanup() {
            document.title = `I have unloaded!!!!!!!!!!`;
        }
    });
    return( 
        <React.Fragment>
            <h3>HELLO!!!</h3>
        </React.Fragment>
    )
}

function UseEffectDemo() {
    const [displayComp, setDisplay] = useState(false);
    return (
 
        <React.Fragment>
            <h1>
                useEffect
            </h1>
        
            <Button onClick={()=>setDisplay(!displayComp)}>Show Effect</Button>
            {
                 displayComp?
                 <EffectComp/>:
                 <React.Fragment></React.Fragment>
            }
        </React.Fragment>
    )
}

export default UseEffectDemo
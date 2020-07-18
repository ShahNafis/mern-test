import React, {useEffect,useState } from 'react'
import Button from '@material-ui/core/Button';


function EffectComp() {
    let [loaded,setLoaded] = useState(false)
    let [counter,setCounter] = useState(0)
    useEffect(() => {
        if(loaded) {
            alert('hi')
        }

        // Update the document title using the browser API
        document.title = `I have loaded ${counter}`;
        setLoaded(true)
        // return function cleanup() {
        //     document.title = `I have unloaded!!!!!!!!!!`;
        //     alert('bye bye')
        // }
    },[counter]);
    return( 
        <React.Fragment>
            <h3>HELLO!!!</h3>
            {counter}
            <Button onClick={()=>setCounter(counter+1)}>INCREMENT</Button>
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
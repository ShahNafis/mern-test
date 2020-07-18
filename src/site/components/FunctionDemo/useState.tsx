import React,{useState} from 'react';
import { count } from 'console';
import Button from '@material-ui/core/Button';

function UseStateDemo() {
    const [counter,setCounter] = useState(0);

    return (
        <React.Fragment>       
                <h1>
                    useState
                </h1>
                <div>
                    Counter = {counter}
                </div>
                <Button variant="contained" color="primary" onClick={()=>{setCounter(counter+1)}}>
                    Up
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>{setCounter(counter-1)}}>
                    Down
                </Button>

        </React.Fragment>
    )
}

export default UseStateDemo
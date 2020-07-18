import {useState,Fragment} from 'react';
import { count } from 'console';
import Button from '@material-ui/core/Button';

function UseStateDemo() {
    const [counter,setCounter] = useState(1000);

    const [counter2,setCounter2] = useState({myName:'bob'});
    return (
        <Fragment>       
                <h1>
                    useState
                </h1>
                <div>
                    Counter = {counter} <br/>
                    {/* {JSON.stringify(counter2)} */}
                </div>
                <Button variant="contained" color="primary" onClick={()=>{setCounter(counter+1)}}>
                    Up
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>{setCounter(counter-1)}}>
                    Down
                </Button>
                {/* <Button variant="contained" color="secondary" onClick={()=>{setCounter2({myName:'john'})}}>
                    XXXXX
                </Button> */}

        </Fragment>
    )
}

export default UseStateDemo
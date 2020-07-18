import React, {useReducer} from 'react'
import Button from '@material-ui/core/Button';

const initState = {
    loggedIn:false,
    likesPizza:true,
    likesPHP:false
}

function reducer(state,action) {
    switch(action.type) {
        case 'toggle_loggedin':
            return {
                ...state,
                loggedIn:!state.loggedIn};
        case 'toggle_pizza':
            return {
                ...state,
                likesPizza:!state.likesPizza
            };
        case 'toggle_php':
            return {
                ...state,
                likesPHP:!state.likesPHP     
            };
        case 'toggle_all':
            return {
                ...state,
                loggedIn:!state.loggedIn,
                likesPizza:!state.likesPizza,
                likesPHP:!state.likesPHP   
            };
        case 'php_bad':
            return {
                ...state,
                loggedIn:true,
                likesPizza:true,
                likesPHP:false
                
            };
    }
}

const yesNo = (state) => state? 'yes':'no'

function UseReducerDemo() {
    const [myState, dispatch] = useReducer(reducer, initState);
    return( 
        <React.Fragment>
            <h1>
                useReducer
            </h1>
            {JSON.stringify(myState)}<br/>
            <Button variant="contained" color="primary" onClick={()=>dispatch({type:'toggle_loggedin'})}>
                Logged in: {yesNo(myState.loggedIn)}
            </Button> <br/>
            <Button variant="contained" color="secondary" onClick={()=>dispatch({type:'toggle_pizza'})}>
                Likes Pizza: {yesNo(myState.likesPizza)}
            </Button> <br/>
            <Button variant="contained" color="default" onClick={()=>dispatch({type:'toggle_php'})}>
                Likes PHP: {yesNo(myState.likesPHP)}
            </Button> <br/><br/>

            <Button onClick={()=>dispatch({type:'php_bad'})}>
                PHP bad
            </Button>
            <Button onClick={()=>dispatch({type:'toggle_all'})}>
                Toggle All
            </Button>
        </React.Fragment>
    )
}

export default UseReducerDemo
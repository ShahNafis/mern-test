import React, {ReactNode} from 'react'
//import UseStateDemo from '../../components/FunctionDemo'
import {UseState,UseReducer,UseEffect,UseContext} from '../../components/FunctionDemo'

function FunctionPage() {
    return (
        <React.Fragment>
            I am a functional component
            <UseState/>
            <UseReducer/>
            <UseEffect/>
            <UseContext/>
        </React.Fragment>
    )
}

export default FunctionPage
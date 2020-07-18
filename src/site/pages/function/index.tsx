import React, {ReactNode} from 'react'
//import UseStateDemo from '../../components/FunctionDemo'
import {UseState,UseReducer,UseEffect,UseContext,UseMemo} from '../../components/FunctionDemo'

function FunctionPage() {
    return (
        <React.Fragment>
            I am a functional component
            <UseState/>
            <UseReducer/>
            <UseEffect/>
            <UseContext/>
            <UseMemo/>
        </React.Fragment>
    )
}

export default FunctionPage
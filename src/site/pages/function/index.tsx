import React, {ReactNode} from 'react'
//import UseStateDemo from '../../components/FunctionDemo'
import {UseState,UseReducer} from '../../components/FunctionDemo'

function FunctionPage() {
    return (
        <React.Fragment>
            I am a functional component
            <UseState/>
            <UseReducer/>
          
        </React.Fragment>
    )
}

export default FunctionPage
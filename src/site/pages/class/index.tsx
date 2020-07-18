import React from 'react';
import {ComponentDidX} from '../../components/ClassDemo'

class ClassPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>I am a class component</div>
                <ComponentDidX/>
            </React.Fragment>
        )
    }
}

export default ClassPage
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';


class DemoComp extends React.Component {
    state = {
        counter:0
    }
    componentDidMount() {
        document.title = `I have mounted`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `Updated!`;
    }
    
    componentWillUnmount() {
        document.title = `Bye bye!`;
    }
    
    setCounter(val:number) {
        this.setState({
            counter:this.state.counter+val
        })
    }
    render() {
      
        return (
    
            <React.Fragment>
                <h1>
                    HELLO:{this.state.counter}
                </h1>
                <Button onClick={()=>this.setCounter(1)}>Show Effect</Button>
            </React.Fragment>
        )
    }
}

class ComponentDidXDemo extends React.Component {
   
    state ={
        displayComp:false
    }

    toggleDisplay() {
        //alert('a')
        this.setState({
            displayComp: !this.state.displayComp
        });
    }
    render() {
        
        return (
    
            <React.Fragment>
                <h1>
                componentDidX
                </h1>
            
                <Button onClick={()=>this.toggleDisplay()}>Show Effect</Button>
                {
                    this.state.displayComp?
                    <DemoComp/>:
                    <React.Fragment></React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default ComponentDidXDemo;
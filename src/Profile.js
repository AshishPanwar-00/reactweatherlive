import React from 'react';

export default class Profile extends React.Component{

    testfun(){
        alert("he up clickde")
    
        
    }
    render(){
        return(
            <div>
                <h1>hello world</h1>
                <button onClick={this.testfun.bind()}>click me</button>
            </div>
        )
        }
    
}
import React, { Component } from 'react';
class register extends Component {
    constructor(props){
        super(props);
        this.state{
            mobilenumber =''
        }
    }
    render(){
        return (
            <form>
                <div>
                    <label>Mobile Number</label>
                    <input
                    type = "Text"
                    value = {mobilenumber}
                    onChange = {(events,newval)=>
                        this.setState({
                            mobilenumber:newval
                        })
                    }
                     />
                        

                </div>
            </form>
        )
    }
}

import React, {Component} from "react"

class Footer extends Component{

    constructor(props){
        super(props)
        this.state = {
            timing: 0
        }
        setInterval(()=>{
            this.setState({
                timing: this.state.timing+1
            })
        },1000)
    }

    render(){
        let {timing} = this.state
        return (
            <div> Footer Second : {timing}</div>
        )
    }
}


export default Footer
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
        },100)
    }

    render(){
        let {timing} = this.state
        let {onTimerClick} = this.props
        return (
            <div onClick={()=>onTimerClick(timing)}> Footer Second : {timing}</div>
        )
    }
}


export default Footer
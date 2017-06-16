import React, {Component} from 'react';



class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state= {
            text1: "",
            check: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
        let text1 = this.state.text1
        this.setState({text1: event.target.value})
          if (text1[1] === 'a'){
            this.setState({check: 'ดีเยี่ยม'}); 
         }
        else {
             this.setState({check: ''}); 
        }
  
    }    
      handleClick(){

        let {onAddTodo} = this.props
        onAddTodo(this.state.text1)
        this.setState({
            text1: ""
        })

      

    }

    render(){
        
        return(
            <div>
                <input type="text" value={this.state.text1} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
              
                </div>


        )
    }
}

export default TodoInput
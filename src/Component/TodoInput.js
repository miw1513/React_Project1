import React, {Component} from 'react';



class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state= {
            text1: "",
            check: "",
            text2: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange1 = this.handleChange1.bind(this)
    }
    handleChange(event){
       
       
        this.setState({
            text1: event.target.value
        
    })
         
  
    }    
    handleChange1(event){
     
         this.setState({
            text2: event.target.value   
            })
    }
      handleClick(event){

        let {onAddTodo} = this.props
        onAddTodo(this.state.text1)
        this.setState({
            text1: ""
        })
        event.preventDefault();
      

    }

    render(){
        
        return(

            <form onSubmit={this.handleClick}>
            <div>
                <h2>Hi My name is {this.state.text2} </h2><br/>
                 <select onChange={this.handleChange1}>
                    <option value="student">Student </option>
                    <option value="teacher">Teacher </option>
                    </select> <br/>
                <input type="text" value={this.state.text1} onChange={this.handleChange} required/>
               
                <input type="submit" value="Add" />
              
                </div>
                </form>

        )
    }
}

export default TodoInput
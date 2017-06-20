import React, {Component} from 'react'


class Todoitem extends Component {
    render(){
        let {item} = this.props
        return (
         <div>
            {item}
             </div>

        )
    }
}

export default Todoitem
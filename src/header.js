import React, {Component} from "react"

class Header extends Component {
    render(){
        let {currentUser, Loggin} = this.props //สามารถใส่ได้หลายตัวแปร
        //let currentUser = this.props.currentUser ต้องใส่หลายบรรทัด
        currentUser = "Logged in as "+ currentUser
        return (
            <div>Header {Loggin && currentUser}</div> //ถ้าซ้ายจริง จะเอาค่าขวามาโชว์
        )

    }
}

export default Header;
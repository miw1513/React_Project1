import React, {Component} from "react"

class Header extends Component {

    render(){
      //  let {currentUser, Loggin} = this.props //สามารถใส่ได้หลายตัวแปร
        //let currentUser = this.props.currentUser ต้องใส่หลายบรรทัด
        //ถ้าเป็น String ต้อง double quote นอกนั้นต้องเป็นปีกกา {}
        
        return (
            // {Loggin && currentUser} //ถ้าซ้ายจริง Loggin จะเอาค่าขวามาโชว์ currentUser
        )

    }
}

export default Header;
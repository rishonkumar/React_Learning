import React from "react";
// import testing from "./testing";

class CHeader extends React.Component{

    state = {
        users : [
            {
            id : 1,
            name : 'brain',
            class : 'A'    
            },
            {
            id : 2,
            name : 'irvve',
            class : 'B'    
            }
        ]
    }

    render() {
        // console.log(this.state.users)
        // console.log(this.state.users[0].name)

        //  const users = this.state.users.map(function(user){
        //     // console.log(user)
        //     <h1>
        //         {user.id}
        //         {user.id}
        //     </h1>
           
        // });

        return(
            <>
                <h1>Hello from CHeader {this.props.name}</h1>
                {/* <h2>{this.state.users}</h2> */}
                {/* <h2>{this.state.users[0].name}</h2> */}
                {/* <h2></h2> */}
                {/* <testing key = {user.id}></testing> */}
            </>
            
        )
    }
}

export default CHeader;
import React from "react";

const Header = (props) => {
    console.log(props);
    return (<>
    <h1 className="header">Hello {props.name}</h1>
    <h1 className="header">Hello {props.name} - {props.last }</h1>
    <h1 className="header">Hello {props.age}</h1>
    {props.children}

    </>
    )
}

export default Header;
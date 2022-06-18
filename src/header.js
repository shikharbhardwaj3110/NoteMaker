import React from "react";

const divStyle = {
    backgroundColor: '#32de84',
    height: '3rem',
    textAlign: 'center',
    paddingTop: '1rem'
};

const headingStyle = {
    color: 'white'
}

function Header(props) {
    console.log(props.heading)
    return (
        <div style={divStyle}>
            <h3 style={headingStyle}>{props.heading}</h3>
        </div>
    )
}

export default Header;
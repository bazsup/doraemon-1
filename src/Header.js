import React from 'react'

const Header = (props) => (
    <div>
        Header {props.message}
        {props.children}
    </div>
)

export default Header
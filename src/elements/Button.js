import React from 'react';

import PropTypes from 'prop-types'


export default function Button(props) {
    const className = ['btn']
    if(props.isDanger)
    className.push("bg-danger")
    if(props.isDefault)
    className.push("btn-default")
    if(props.isMarginTop)
    className.push("mt-4")
    if(props.isJustify)
    className.push("justify-content-center")
    
    return (
        <button className={className.join(" ")}>
            {props.children}
        </button>
    )
}

Button.PropTypes = {
    isDanger: PropTypes.bool,
    isDefault: PropTypes.bool,
    isMarginTop: PropTypes.bool,
    isJustify: PropTypes.bool, 
}
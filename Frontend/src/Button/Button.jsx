import React from 'react'

function Button({onClick,label}) {
    return (
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}

export default Button
import React from 'react'
import './Button.css'

export default props => {
    return(

    <button onClick={e => props.click && props.click(props.label)} className=
    {`button  ${props.operation ? 'operation' : ''}
    ${props.botao ? 'button-1' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}  `}>
        
        {props.label}
        
        
        </button>
    )
}
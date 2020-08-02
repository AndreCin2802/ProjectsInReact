import React from 'react'

export default props => {
    if(props.hide){
        return
    }
    else{
    return(
        <button className={'btn btn-'+ props.styles + ' ' + props.lidos}
                onClick={props.onClick}
                >
                    {props.icon}
                </button>
    )
    }
}
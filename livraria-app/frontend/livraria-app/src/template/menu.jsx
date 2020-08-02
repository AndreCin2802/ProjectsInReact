import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {  faBook} from "@fortawesome/free-solid-svg-icons"; 
export default props => {
    return(
        <div>
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                   <i className="navbar-brand" href="#">
                       <FontAwesomeIcon style={{marginRight:5 + 'px'}} icon={faBook}></FontAwesomeIcon>
                       Livraria App
                   </i>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li> <a href="#/todos">Tarefas</a> </li>
                        <li> <a href="#/about">Sobre  </a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
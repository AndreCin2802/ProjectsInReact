import React from 'react'
import Botao from '../template/botao'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import './livraria.css'
export default props => {
        const keyHandler = (e) =>{
            if(e.key === 'Enter'){
                props.procurarLivro()
            }
        }


    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Livraria
                 </div>
                <div className="card-body">
                    <h5 className="card-title">Adicionar Livraria</h5>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <input onChange={props.HandleChangeName} value={props.name} placeholder="Nome do Livro" type="text" aria-label="First name" className="form-control"></input>
                            <input onChange={props.HandleChangeAuthor} value={props.author} placeholder="Autor do Livro" type="text" aria-label="Last name" className="form-control"></input>
                            <input onChange={props.HandleChangePages} value={props.page} placeholder="Páginas do Livro" type="number" aria-label="First name" className="form-control"></input>
                        </div>



                    </div>
                    <p>O livro foi lido?</p>
                    <input onClick={props.updateCheckBox} readOnly={true} checked={props.read} placeholder="Lido?" type="checkbox" aria-label="Last name" className="form-control"></input>

                </div>
                <Botao styles="primary" icon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>} onClick={props.HandleAdd} ></Botao>


            </div>
            <div className="area-pesquisa">
                <p>Pesquise por um Livro</p>
                <input onKeyUp={keyHandler} onChange={props.mudarLivro} value={props.livroPesquisa} type="text"></input>

            </div>
            <div style={{textAlign:'center'}}>
                <Botao  onClick={props.procurarLivro} styles="icon" icon={<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>}></Botao>
            </div>
        </div>
    )
}
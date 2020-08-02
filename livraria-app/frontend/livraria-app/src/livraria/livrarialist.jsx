import React from 'react'
import Botao from '../template/botao'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import './livraria.css'
export default props => {
    const renderRows = () => {
        const lista = props.lista || []
        return lista.map((livros) => {
            return(
            <tr className={livros.read ? 'Lido' : ''} key={livros._id}>
                
                <td >{livros.name}</td>
                <td>{livros.author}</td>
                <td>{livros.pages}</td>
                <td >
                    <Botao onClick={() => props.updateLivro(livros)} lidos={livros.read ? 'IconeLido' : 'NaoLido'} styles="sucess" icon={<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>}></Botao>
                </td>

                <td>
                    <Botao onClick={() => props.deleteLivro(livros)} styles="danger" icon={<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}></Botao>
                </td> 
            </tr>
            )
        })

    }
    return (
      <table style={{marginTop: 40 + 'px'}} className="table table-dark">
  <thead>
    <tr key="padrao">
      
      <th >Nome</th>
      <th >Autor</th>
      <th >Páginas</th>
      <th>Lido</th>
    </tr>
  </thead>
  <tbody>
   
    {renderRows()}
    
  </tbody>
</table>
    )
}
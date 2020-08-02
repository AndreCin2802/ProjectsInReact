import React, {Component} from 'react'

import Menu from '../template/menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import LivrariaForm from './livrariaform'
import axios from 'axios'
import LivrariaList from './livrarialist'
const URL = 'http://localhost:3003/api/livraria'
export default class Library extends Component  {
    
    constructor(props){
        super(props)
        this.state = {name: '', author: '', pages: '', read: false, list: [], livroPesquisa: ''}
        this.HandleAdd = this.HandleAdd.bind(this)
        this.updateCheckBox = this.updateCheckBox.bind(this)
        this.HandleChangeName = this.HandleChangeName.bind(this)
        this.HandleChangePages = this.HandleChangePages.bind(this)
        this.HandleChangeAuthor = this.HandleChangeAuthor.bind(this)
        this.updateLivro = this.updateLivro.bind(this)
        this.deleteLivro = this.deleteLivro.bind(this)
        this.procurarLivro = this.procurarLivro.bind(this)
        this.setLivro = this.setLivro.bind(this)
        this.refresh()
    }

    refresh(name = ''){
        const search = name ? `?name__regex=/${name}/` : ''
        
        axios.get(`${URL}${search}`).then(resp => this.setState({list: resp.data}))
       

    }

    setLivro(e){
        this.setState({livroPesquisa: e.target.value})
    }

    procurarLivro(){
        const name = this.state.livroPesquisa
        const search = name ? `?name__regex=/${name}/` : ''
        axios.get(`${URL}${search}`).then(resp => this.refresh(name))
    }

    HandleAdd(){
        const Objetos = {...this.state}
        axios.post((URL),Objetos).then(resp => this.refresh(this.state.livroPesquisa))

    }
    deleteLivro(livro){
        axios.delete(`${URL}/${livro._id}`).then(resp => this.refresh())
    }

    updateLivro(livro){
        var lido = ''
        if(livro.read){
            lido = false
            console.log(lido)
        }
        else{
            lido = true
            console.log(lido)
        }
        
        axios.put(`${URL}/${livro._id}`, {read: lido}).then(resp => this.refresh(this.state.livroPesquisa))
        
    }

    updateCheckBox(){
        if(this.state.read){
            this.setState({read: false})
          
        }
        else{
            this.setState({read: true})
        }
    }

    HandleChangeName(e){
        this.setState({name: e.target.value })
    }
    HandleChangeAuthor(e){
        this.setState({author: e.target.value })
    }
    HandleChangePages(e){
        this.setState({pages: e.target.value })
    }

    

    render(){
        return(
            <div>
        <Menu></Menu>

        <LivrariaForm name={this.state.name} author={this.state.author}
                      page={this.props.page} read={this.state.read}
                      updateCheckBox={this.updateCheckBox}
                      HandleAdd={this.HandleAdd}
                      HandleChangeName={this.HandleChangeName}
                      HandleChangeAuthor={this.HandleChangeAuthor}
                      HandleChangePages={this.HandleChangePages}
                      procurarLivro={this.procurarLivro}
                      mudarLivro={this.setLivro}
                      livroPesquisa={this.state.livroPesquisa}></LivrariaForm>

                    <LivrariaList lista={this.state.list}
                    
                    updateLivro={this.updateLivro}
                    deleteLivro={this.deleteLivro}></LivrariaList>
        </div>
        
        )
    }
}
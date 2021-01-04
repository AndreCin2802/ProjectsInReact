import React, { useEffect, useState } from 'react';
import TodoForm from '../TodoForm'
import Todo from '../Todo'
import { TiUser } from 'react-icons/ti';
import {FixedSizeList as List} from 'react-window';
import { parse } from 'uuid';

interface Todos {
  id: number,
  text: string,
  isComplete: boolean


}

const TodoList: React.FC = () => {


  const [active1,setActive1] = useState(true)
  const [active2,setActive2] = useState(false)
  const [active3  ,setActive3] = useState(false)
  const [todos, setTodos] = useState([])
  const [filteredTodos,setFilteredTodos] = useState([])
  const [filter, setFilter] = useState(false)



useEffect(() => {
  const data = localStorage.getItem('todolists')


  if(data) {
    setTodos(JSON.parse(data))
  }
},[])
        
useEffect(() => {
  
  localStorage.setItem('todolists', JSON.stringify(todos))

})
 

  const clearActive = () => {
    setActive1(false)
    setActive2(false)
    setActive3(false)
  }

  const showActive = (id: number) => {
    clearActive()

    if(id === 1) {
      setActive1(true)
      setFilter(false)
    }

    if(id === 2) {
      setActive2(true)
      activeTodos()
    }

    if(id === 3) {
      setActive3(true)
      completedTodos()
    }
  }

 

 



  const addTodo = (todo: Todos) => {

    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }

    const newTodos = [todo, ...todos]

    
    showActive(1)

  
    setTodos(newTodos)
   

  }

  const completeTodo = (id: any) => {
     let updatedTodos = todos.map(todo => {
       if(todo.id === id) {
         todo.isComplete = !todo.isComplete
       }

       return todo
     })

    showActive(1)
    setFilter(false)

   
    
    setTodos(updatedTodos)
    
  }

  const removeTodo = (id: any) => {

    const removeArr = [...todos].filter(todo => todo.id !== id)
    showActive(1)
    setFilter(false)

   
  
    setTodos(removeArr)
  }

  const updateTodo = (todoId: any, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setFilter(false)
    showActive(1)

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

  };



  const completedTodos = () => {

    setFilter(true)


    const filterTodos = todos.filter(todo => todo.isComplete === true)
    setFilteredTodos(filterTodos)
    
  }

  const activeTodos = () => {

    setFilter(true)

    const filterTodos = todos.filter(todo => todo.isComplete  !== true)

    setFilteredTodos(filterTodos)
  }

 


  return (
    <div>
      <h1>#todo</h1>

      <div className="choice">
        <button className={`${active1 ? 'completed' : ''}`} onClick={ () => showActive(1)}>All</button>
        <button className={`${active2 ? 'completed' : ''}`} onClick={ () => showActive(2)}>Active</button>
        <button className={`${active3 ? 'completed' : ''}`} onClick={ () => showActive(3)}>Completed</button>
      </div>

    

      <TodoForm onSubmit={addTodo} />
      <Todo todos={filter ? filteredTodos : todos } updateTodo={updateTodo} completeTodo={completeTodo} removeTodo={removeTodo} />
  
    </div>
  );
}

export default TodoList;

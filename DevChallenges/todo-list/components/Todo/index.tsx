import React, { useState } from 'react';

import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from '../TodoForm';



interface TodosArray {
  id: number,
  text: string,
  isComplete: boolean,
}

interface ITodoProps {
  todos: TodosArray[],
  completeTodo: Function,
  removeTodo: Function,
  updateTodo: Function
}

const Todo: React.FC<ITodoProps> = ({
  todos, completeTodo, removeTodo, updateTodo 
}) => {

  const [edit,setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = (value: any) => {
    updateTodo(edit.id, value)

  
    setEdit({
      id: null,
      value: ''
    })

  }

  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  

 
  
  
  const renderTodos = () => {
    return todos.map((todo,index) => (
      <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>

        <input type="checkbox" className="input-check" onChange={() => completeTodo(todo.id)} checked={todo.isComplete} />

        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
    ))
  }

  

  return (
    
    <div className="render-container">
      {renderTodos()}


      
    </div>
    
  );
}

export default Todo;

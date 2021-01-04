import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

interface ITodoFormProps {
  onSubmit: Function
  edit? : {id: number, value: string}
}

const TodoForm: React.FC<ITodoFormProps> = ({onSubmit, edit}) => {

  const [input,setInput] = useState(edit ? edit.value : '')

  const inputRef = useRef(null)

  useEffect( () => {
    inputRef.current.focus()
  })
  
  const handleSubmit = (e : any) => {
    e.preventDefault();

    onSubmit({
      id: uuidv4(),
      text: input,
      isComplete: false
    });

    setInput('')

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)

  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

      {edit ? (
        <>  
          <input 
            type="text" 
            placeholder="Atualize sua Tarefa"
            name="text"
            value={input}
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button edit">Atualizar Tarefa</button> 

        </>
      ) : 
      
      <>
        <input 
            type="text" 
            placeholder="Adicione uma Tarefa"
            name="text"
            value={input}
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
        />

        <button className="todo-button">Adicionar Tarefa</button> 
      </>
      
      }    

    </form>
  );
}

export default TodoForm;

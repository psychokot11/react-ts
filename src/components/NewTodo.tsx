import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSumbitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        props.onAddTodo(enteredText)
    }

    return (
        <form onSubmit={todoSumbitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo
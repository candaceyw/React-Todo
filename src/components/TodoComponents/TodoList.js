import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todo.map(item => (
                item.show &&
                <Todo key={item.id} todo={item} toggleCompleted={props.toggleCompleted} />
            ))}
            <button className="clear-btn" onClick={props.clearTodo}> Clear Todo
      </button>
        </div>
    )
}

export default TodoList;
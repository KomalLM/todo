import React from 'react';
import TodoList from './TodoList';
import AddNewTodoContainer from './AddNewTodoContainer';
class TodoListcontainer extends React.Component{


    render(){
        return(
            <div>
                <p> This is the List Container </p>
                <TodoList/>
                <AddNewTodoContainer/>

            </div>
        );
    }

}

export default TodoListcontainer;
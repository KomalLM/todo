import React from 'react';
import AddNewToDo from './AddNewToDo';

class AddNewTodoContainer extends React.Component{
    render(){
        return(
            <div><p> Add New ToDo </p>
              <AddNewToDo/>
            </div>

        );
    }
}

export default AddNewTodoContainer;
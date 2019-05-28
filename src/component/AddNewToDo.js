import React from 'react';

class AddNewToDo extends React.Component{
    render(){
        return(
            <div>
                <input placeholder = "New Task" />
                <button type = "submit" > Add New </button>
            </div>
        );

    }
}

export default AddNewToDo;
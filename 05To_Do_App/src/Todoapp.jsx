import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todoapp() {
    let style = {
        // backgroundColor: "lightgray",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        marginLeft: "10px",
        cursor: "pointer",
    };
    let addButtonStyle = {
        backgroundColor: "green",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        marginLeft: "10px",
        cursor: "pointer",
        
    }
    let deleteButtonStyle = {
        backgroundColor: "red",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        marginLeft: "10px",
        cursor: "pointer",
        margin: "10px",
    }
    let UpperCaseButtonStyle = {
        backgroundColor: "Orange",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        marginLeft: "10px",
        cursor: "pointer",
        margin: "10px",
    }
    let MarkAsDonButtonStyle = {
        backgroundColor: "green",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        marginLeft: "10px",
        cursor: "pointer",
        margin: "10px",
    }
    let MarkAsDonAllButtonStyle = {
        backgroundColor: "green",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        marginLeft: "10px",
        cursor: "pointer",
        margin: "10px",
    }

    let [todolist, setTodolist] = useState([{ task: "This is sample task", id: uuidv4(), isDone: false}]);
    let [newToDo, setNewToDo] = useState("");


    let addNewTask = () => {
        // setTodolist([...todolist, {task: newToDo, id: uuidv4()}]);
        setTodolist((prevTodolist) => {
         return [...prevTodolist, {task: newToDo, id: uuidv4(), isDone: false}]
        })
        setNewToDo("");
    }

    let updateTodoValues = (event) => {
        setNewToDo(event.target.value);
    }

    let deleteTask = (id) => {
     setTodolist((prevTodolist) => todolist.filter((prevTodolist) => prevTodolist.id != id));
    }
    

    // array
    let uperCaseAll = () => {
setTodolist((prevTodolist) => ( prevTodolist.map((todo) => {
    return {
        ...todo,
       task: todo.task.toUpperCase()
    };
})
    ));
// console.log(newArray)
    }

    let LowerCase = () => {
        setTodolist((prevTodolist) => ( prevTodolist.map((todo) => {
            return {
                ...todo,
               task: todo.task.toLowerCase()
            };
        })
            ));
            }
        
let UpperCaseOne = (id) => {
setTodolist((prevTodolist) => 
todolist.map((todo) => {

    if(todo.id == id) {
        return {
           ...todo,
            task: todo.task.toUpperCase(),
        };
    } else {
    return todo;
}
})
);
}
let markAsDone= (id) => {
    setTodolist((prevTodolist) => 
    todolist.map((todo) => {
    
        if(todo.id == id) {
            return {
               ...todo,
                isDone: true
            };
        } else {
        return todo;
    }
    })
    );
};  

let markAsDoneAll = () => {
    setTodolist((prevTodolist) =>
        prevTodolist.map((todo) => ({
            ...todo,
            isDone: true
        }))
    );
};
    return (
        <div>
            <input type="text" placeholder="Add your task" value={newToDo} onChange={updateTodoValues} style={style} />
            &nbsp; &nbsp;
            <button style={addButtonStyle} onClick={addNewTask}>Add</button>
         
            <hr />
            <ul>
            <h2>ToDo List</h2>

            
                {todolist.map((todo) => (
                  <li key={todo.id}>
                  <span style={todo.isDone ? {textDecoration: "line-through", backgroundColor: "green", fontSize: "40px"}: {}}>{todo.task}</span>
                 &nbsp; &nbsp;
                  <button style={deleteButtonStyle} onClick={() => deleteTask(todo.id)} >Delete</button>
                  <button style={UpperCaseButtonStyle} onClick={() => UpperCaseOne(todo.id)} >UpperCase One</button>
                  <button style={UpperCaseButtonStyle} onClick={() => LowerCase(todo.id)} >LowerCase</button>
                  <button style={MarkAsDonButtonStyle} onClick={() => markAsDone(todo.id)} >Mark As Done✅</button></li>
            ))
            }</ul>
            <button onClick={uperCaseAll} >UperCase All</button>
            <button style={MarkAsDonAllButtonStyle} onClick={markAsDoneAll} >Mark As Done All ✅</button>

        </div>
    )
}

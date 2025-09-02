import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, update, remove} from "../redux/TodoSlice";

const Todo = () => {

    const [listText, setListText] = useState('');

    const todo = useSelector((state)=> state.todos)
    const dispatch = useDispatch();

    console.log(todo);

    function handleSubmit(){
        if (listText.trim() === "") return;
        dispatch(add(listText));
        setListText('');
    }

  return (

    <>
        <div>
            <h1>Todo Task</h1>
            <input type="text" value={listText} onChange={(e)=>setListText(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {todo&&
                    todo.map((elm, ind)=>{
                        return(
                            <li>
                                <input type="checkbox" name="" id="" checked={elm.completed} onChange={()=>dispatch(update(elm.id))} />
                                <span>{elm.text}</span>
                                <button 
                                onClick={() => dispatch(remove(elm.id))}
                                >
                                Delete
                                </button>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    </>
  )
}

export default Todo
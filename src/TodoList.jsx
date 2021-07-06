import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import ListCompo from './ListCompo';
const TodoList = () => {
    const [item,setitem]=useState();
    const [tasks,setTasks]=useState([]);
    const addTaskToList=()=>{
        setitem('');
        setTasks((preValue)=>{
           return[
               ...preValue,
               item,
           ]
        }) ;
        return(
          <li>
              {item}
          </li>
        );
       
       
    }
    const userInput=(e)=>{
        setitem(e.target.value)
    };
    
    return (
        <>
            <div className="main_div">
                <div>
                    <h1>to do list</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="add an item"
                        onChange={userInput}
                        value={item}
                    />
                    <Button variant="contained" color="primary"
                    onClick={addTaskToList}>
                       <AddIcon/>
                    </Button>
                    <ol>
                        {tasks.map((val,index)=>{
                            return(
                               <ListCompo  key={index} id={index}text={val}/>
                        )})}
                    </ol>


                </div>

            </div>

        </>
    )
}
export default TodoList;
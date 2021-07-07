import React from 'react'
import './index.css'

const Note=(props)=>{
    const deleteNote =()=>{
        props.deleteItem(props.id)
    }
    return(
            <>
               <div className='note'>
                   <h1>{props.title}</h1>
                   <br></br>
                   <p>{props.content}</p>
                   <button onClick={deleteNote}>Delete</button>
               </div>
            </>
    );
} 
export default Note; 


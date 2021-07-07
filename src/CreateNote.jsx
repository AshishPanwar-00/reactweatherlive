
import React, { useState } from 'react';
import './index.css';



const CreateNote=(props)=>{
    const [note,setNote]=useState({
        title:"",
        content:'',
    });
    const InputEvent=(e)=>{
        // const value=e.target.value
        // const name=e.target.name;
        const {name,value}=e.target
        setNote(oldval=>{
            return {
                ...oldval,
                [name]:value,
            }
        })
    };
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
        content:'',
        })
    }
    

    return (
        <>
             <div className='createNote'>
                 <form onClick={e=>e.preventDefault()}>
                     <input type='text'
                        placeholder='title'
                        autoComplete="off"
                        onChange={InputEvent}
                        value={note.title}
                        name='title'
                    />
                    <textarea 
                        rows="" 
                        column="" 
                        placeholder="Write a Note"
                        onChange={InputEvent}
                        value={note.content}
                        name='content'>

                    </textarea>
                     <button onClick={addEvent} type='submit'>Add</button>
                 </form>
             </div>
        </>
    )
}
export default CreateNote;
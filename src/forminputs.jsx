
import React, { useState } from "react"

function App() {
    const [fullName,setFullName]=useState({
        fname:'',
        lname:'',
        pname:"",
        });

    
    const userInput=(e)=>{
    
        var value=e.target.value;
        var iname=e.target.name;
        // fullName.fname=value
        setFullName((prevalue)=>{
           return{
               ...prevalue,
               [iname]:value,
           }
          
        });
       
        
       
        
    };
    
    const onSubmit=(e)=>{
        e.preventDefault();
        
    
    };
    


     return(
         <>
         
          <form onSubmit={onSubmit}>
           <h1>hello world  </h1>
              <input type='text'
                  placeholder='enter your name'
                  name='fname'
                  onChange={userInput}
                  value={fullName.fname}
              />
              <input type='text'
                  placeholder='enter your lastname'
                  name='lname'
                  onChange={userInput}
                  value={fullName.lname}
              />
              <input type='text'
                  placeholder='enter your lastname'
                  name='pname'
                  onChange={userInput}
                  value={fullName.pname}
              />
              <button type="submit"> submit form</button>
          </form>

          
         </>
     )
}
export default App;

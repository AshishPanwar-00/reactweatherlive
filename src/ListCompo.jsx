import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
const ListCompo=(props)=>{
     const [cssProp,setCss]=useState({})
   const cutIt=()=>{
     return setCss(  {textDecoration:"line-through"})
    };

return(<>
     <span onClick={cutIt}><DeleteIcon/></span>
    <li  style={cssProp}>{props.text}</li>
    </>
 )
}
export default ListCompo;
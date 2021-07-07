import React from 'react'

const time=new Date();
const Footer=()=>{
    return (
        <>
        <footer>
            <p>copyright c {time.getFullYear()}</p>
        </footer>

        </>
    )

}
export default Footer;
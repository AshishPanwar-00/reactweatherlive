import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // alert('i am clicked');
        setAddItem(preval => {
            return [
                ...preval,
                note,
            ]
        });
        console.log(addItem);


    };
    const onDelete = (id) => {
        setAddItem((oldDate) => {
            oldDate.filter((curdata, index) => index !== id)
        })
    }

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {
                addItem.map((note, index) => {
                    return (
                        <Note title={note.title}
                            content={note.content}
                            key={index}
                            id={index}
                            deleteItem={onDelete}
                        > </Note>)})
            }

            <Footer />
        </>
    )
}
export default App;
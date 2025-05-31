import {useState} from "react";

interface PropsAddStudentForm {
    sendString : (name:string) => void;
}

const AddStudentForm = ({sendString}: PropsAddStudentForm) => {

    const [name, setName] = useState('');

    return (
        <>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => {sendString(name); setName('')}} >Add Student</button>
        </>
    )
}

export default AddStudentForm
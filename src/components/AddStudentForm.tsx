import {useState} from "react";
import "../css/AddStudentForm.css"
interface PropsAddStudentForm {
    sendString : (name:string) => void;
}

const AddStudentForm = ({sendString}: PropsAddStudentForm) => {

    const [name, setName] = useState('');

    return (
        <>
            <section className="add-student-form-wrapper">
                <input className={"name-input"} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => {sendString(name); setName('')}} >Add Student</button>
            </section>

        </>
    )
}

export default AddStudentForm
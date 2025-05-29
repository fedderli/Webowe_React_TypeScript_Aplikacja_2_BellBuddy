
import './App.css'
import Clock from "./components/Clock.tsx";
import AddStudentForm from "./components/AddStudentForm.tsx";
import StudentItem from "./components/StudentItem.tsx";
import {MyStudentItem} from "./components/StudentItem.tsx";
import StudentList from "./components/StudentList.tsx";
import {useState} from "react";

interface StudentItem {
    studentName: string;
    isPresent: boolean;
}

function App() {

    const [studentName, setStudentName] = useState("");
    const [studentObject, setStudentObject] = useState<MyStudentItem>({ studentName: "", isPresent: false });


    function getStudents(MyStudentName:string) {
        setStudentName(MyStudentName);
    }

    function getStudentObject(MyStudentObject: MyStudentItem) {
        setStudentObject(MyStudentObject);
    }


    return (
    <>
        <Clock/>
        <AddStudentForm sendString={getStudents}/>
        <StudentItem name={studentName} sendStudentItem={getStudentObject}/>
        <StudentList studentObject={studentObject}/>


    </>
  )
}

export default App

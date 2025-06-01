
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

    const [showClock, setShowClock] = useState(true);
    const [showAddForm, setShowAddForm] = useState(true);
    const [showStudentList, setShowStudentList] = useState(true);


    return (
    <>
        <section className="show-components-wrapper">
            <p><input type="checkbox" checked={showClock} onChange={() => setShowClock(!showClock)} /> Clock</p>
            <p><input type="checkbox" checked={showAddForm} onChange={() => setShowAddForm(!showAddForm)} /> AddStudentForm</p>
            <p><input type="checkbox" checked={showStudentList} onChange={() => setShowStudentList(!showStudentList)} /> StudentList</p>
        </section>


        {showClock && <Clock/>}
        {showAddForm && <AddStudentForm sendString={getStudents}/> }
         <StudentItem name={studentName} sendStudentItem={getStudentObject}/>
        {showStudentList && <StudentList studentObject={studentObject}/> }


    </>
  )
}

export default App

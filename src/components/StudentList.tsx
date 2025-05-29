import { useState, useEffect } from "react";
import { MyStudentItem } from "./StudentItem.tsx";

interface PropsStudentList {
    studentObject: MyStudentItem;
}

const StudentList = ({ studentObject }: PropsStudentList) => {
    // Maintain student list inside the component using state
    const [studentList, setStudentList] = useState<MyStudentItem[]>([]);

    useEffect(() => {
        if (studentObject.studentName) {
            setStudentList(prevList => [...prevList, studentObject]); // Add new student to the list
        }
    }, [studentObject]);

    return (
        <>
            {studentList.map((student, index) => (
                <div key={index}>
                    <p>Name: {student.studentName}</p>
                    <p>Present: {student.isPresent ? "Yes" : "No"}</p>
                </div>
            ))}
        </>
    );
};

export default StudentList;

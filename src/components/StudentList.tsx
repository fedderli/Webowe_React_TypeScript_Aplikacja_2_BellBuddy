import { useState, useEffect } from "react";
import { MyStudentItem } from "./StudentItem.tsx";
import "../css/StudentList.css"

interface PropsStudentList {
    studentObject: MyStudentItem;
}

const StudentList = ({ studentObject }: PropsStudentList) => {

    const [studentList, setStudentList] = useState<MyStudentItem[]>(() => {
        const saved = localStorage.getItem("studentList");
        return saved ? JSON.parse(saved) : [];
    });

    const [presenceStatus, setPresenceStatus] = useState<{ [studentName: string]: string }>(() => {
        const saved = localStorage.getItem("presenceStatus");
        return saved ? JSON.parse(saved) : {};
    });




    useEffect(() => {
        if (studentObject.studentName) {
            setStudentList(prevList => [...prevList, studentObject]); // Add new student to the list
        }
    }, [studentObject]);

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        setPresenceStatus(prevStatus => ({
            ...prevStatus,
            [index]: e.target.checked ? "Obecny" : "Nieobecny"


        }));
    };

    let PresentStudent = 0 ;
    for (const student in presenceStatus) {
        if(presenceStatus[student] === "Obecny") {
            PresentStudent++;
        }
    }

    useEffect(() => {
        localStorage.setItem("studentList", JSON.stringify(studentList));
    }, [studentList]);


    useEffect(() => {
        localStorage.setItem("presenceStatus", JSON.stringify(presenceStatus));
    }, [presenceStatus]);



    return (
        <>
            <section className="student-list-wrapper">
                {studentList.map((student, index) => (
                    <div key={index}>
                        <p>Name: {student.studentName}

                            <input
                                type="checkbox"
                                checked={presenceStatus[index] === "Obecny"}
                                onChange={(e) => handleChange(index, e)}

                            />
                            {presenceStatus[index] || "Nieobecny"}
                        </p>

                    </div>
                ))}
                <p className={"is-present-amount"}>ilosc obecnych uczniów : {PresentStudent}</p>
            </section>

        </>
    );
};

export default StudentList;

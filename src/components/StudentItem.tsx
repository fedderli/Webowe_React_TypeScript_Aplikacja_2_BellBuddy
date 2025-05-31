import {useEffect} from "react";

export interface MyStudentItem {
    studentName: string;
    isPresent: boolean;
}

export interface PropsStudentItem {
    name: string;
    sendStudentItem : (student: MyStudentItem) => void
}

const StudentItem = ({name ,sendStudentItem}: PropsStudentItem) => {
    useEffect(() => {
        if (name) {
            const student: MyStudentItem = {
                studentName: name,
                isPresent: false
            };
            sendStudentItem(student);
        }
    }, [name]);

    return (
        <>

        </>
    )
}

export default StudentItem
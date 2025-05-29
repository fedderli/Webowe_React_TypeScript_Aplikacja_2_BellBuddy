import {useEffect} from "react";
import {useState} from "react";

const Clock = () => {

    const [time, setTime] = useState<string>(() => {
        const date = new Date()
        return`${date.toLocaleTimeString()}`})

   useEffect(() => {
       const interval = setInterval(() => {
           const date = new Date()
           setTime(date.toLocaleTimeString())
       }, 1000)

       return () => clearInterval(interval)
   }, [])


    return (
        <>
            <p>{time}</p>
        </>
    )
}

export default Clock
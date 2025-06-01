import {useEffect} from "react";
import {useState} from "react";
import "../css/Clock.css"

const Clock = () => {

    const [time, setTime] = useState<string>(() => {
        const date = new Date()
        return `${date.toLocaleTimeString()}`
    })

    const [JPtime, setJPTime] = useState<string>(() => {
        const date = new Date()
        return `${date.toLocaleTimeString(
            "pl-Pl", {
                timeZone: "Asia/Tokyo"
            }
        )}`
    })

    const [MAtime, setMATime] = useState<string>(() => {
        const date = new Date()
        return `${date.toLocaleTimeString(
            "pl-Pl", {
                timeZone: "Africa/Casablanca"
            }
        )}`
    })

    const [NJtime, setNJTime] = useState<string>(() => {
        const date = new Date()
        return `${date.toLocaleTimeString(
            "pl-Pl", {
                timeZone: "America/New_York"
            }
        )}`
    })


    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setJPTime(date.toLocaleTimeString("pl-PL", {
                timeZone: "Asia/Tokyo"
            }))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setMATime(date.toLocaleTimeString("pl-PL", {
                timeZone: "Africa/Casablanca"
            }))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setNJTime(date.toLocaleTimeString("pl-PL", {
                timeZone: "America/New_York"
            }))
        }, 1000)

        return () => clearInterval(interval)
    }, [])


    const [timeLeft, setTimeLeft] = useState(45 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number): string => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    };


    return (
        <>
            <section className="clock-wrapper">
                <p> Polska : {time}</p>
                <p> Japonia : {JPtime}</p>
                <p> Maroko : {MAtime}</p>
                <p> USA (Nowy Jork) : {NJtime}</p>
                <p> Pozostały czas : {formatTime(timeLeft)}</p>
            </section>
        </>
    )
}

export default Clock
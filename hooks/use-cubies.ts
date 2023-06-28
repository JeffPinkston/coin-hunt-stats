import { useEffect, useState } from "react";

function useCubies() {
    const [cubieData, setCubieData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3001/cubies')
            const json = await res.json()

            setCubieData(json)
        }

        fetchData()
            .catch(err => console.log(err))
    }, [])

    return cubieData
}

export { useCubies }
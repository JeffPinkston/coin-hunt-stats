import axios from "axios";
import { useEffect, useState } from "react";

function useCubies() {
    const [cubieData, setCubieData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/cubies')
            .then(response => setCubieData(response.data))
            .catch(error => console.error(error))
    }, [])

    return cubieData
}



export { useCubies }
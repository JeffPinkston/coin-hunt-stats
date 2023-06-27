import axios from "axios"

export async function generateStaticParmas() {
    const cubies: Cubie[] = await axios.get('http://localhost:3001/cubies')
            .then(response => response.data)
            .catch(error => console.error(error))

    return cubies.map((cubie: Cubie) => {
        cubieId: cubie.ID
    })

}

export default function Page({ params }: { params: { cubieId: string}}) {
    return <div>Cubie ID: {params.cubieId} </div>
}
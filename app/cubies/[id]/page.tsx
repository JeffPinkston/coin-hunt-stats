"use client"
import { useCubiesContext } from "@/contexts/CubiesContext"
import { cubieLoader } from "@/utils/utils"
import { Box } from "@mui/material"
import Image from 'next/image'

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3001/cubies')
    const cubies = await res.json()
    return cubies.map((cubie: Cubie) => {
        id: cubie.ID
    })

}

async function getCubie(id: string) {
    const res = await fetch(`http://localhost:3001/cubies/${id}`)
    return res.json()
}

export default async function Page({ params }: { params: { id: string }}) {
    const selectedCubie = await getCubie(params.id)
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: 2,
        }}>
            <div>{selectedCubie.CubieName}</div>
            <Image loader={cubieLoader} width={60} height={60} src={selectedCubie.CubieName} alt=""/>
        </Box>
    )
}
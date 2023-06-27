"use client"
import { useCubies } from "@/hooks/use-cubies";
import { useRouter } from "next/navigation";
import { createContext, memo, useCallback, useContext, useMemo, useState } from "react";

type CubiesContextProps = {
    cubies: Cubie[];
    selectedCubie: Cubie;
    setCubies: (cubies: Cubie[]) => void;
    handleCubieSelection: (cubie: Cubie) => void;
}

export const CubiesContext = createContext<CubiesContextProps>({} as CubiesContextProps)

export const useCubiesContext = () => useContext(CubiesContext)

export const CubiesProvider = ({ 
    children 
} : { children: React.ReactNode }) => {
    const [cubies, setCubies] = useState<Cubie[]>(useCubies())
    const [selectedCubie, setSelectedCubie] = useState<Cubie>({} as Cubie)
    const router = useRouter()

    const handleCubieSelection = useCallback((cubie: Cubie) => {
        setSelectedCubie(cubie)
        router.push(`/cubies/${cubie.ID}`)
    }, [setSelectedCubie, router])

    const providerValue = useMemo(() => ({ cubies, selectedCubie, setCubies, handleCubieSelection }), [cubies, selectedCubie, setCubies, handleCubieSelection])
    return (
        <CubiesContext.Provider value={ providerValue }>
            {children}
        </CubiesContext.Provider>
    )
}
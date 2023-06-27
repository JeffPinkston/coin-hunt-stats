"use client"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Link from "next/link"
import { useCubies } from "@/hooks/use-cubies";
import CubieTile from "@/components/CubieTile";
import { useCubiesContext } from "@/providers/CubiesProvider";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthenticationContext } from "@/providers/AuthenticationProvider";

export default function Page() {
    const cubiesData: Cubie[] = useCubies()
    const { cubies, setCubies } = useCubiesContext()
    useEffect(() => {
        setCubies(cubiesData)    
    }, [cubiesData, setCubies])
    

    return (
        <>
        
            <Grid2 container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                {cubies.map((cubie, index) => (
                    <Grid2 xs={2} sm={4} md={4} key={index}>
                        <CubieTile cubie={cubie} index={index} />
                    </Grid2>
                
                ))}
            </Grid2>
        </>
    )
    
}
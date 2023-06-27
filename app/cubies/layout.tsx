"use client"
import CubiesAppBar from "@/components/CubiesAppBar"

export default function CubiesLayout({
    children
} : { children: React.ReactNode }) {
    return (
        <>
            <CubiesAppBar/>
            <section>{ children }</section>
        </>
        
    )
}
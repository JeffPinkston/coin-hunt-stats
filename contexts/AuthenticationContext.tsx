"use client";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useMemo, useState }  from "react";

type AuthenticationProviderProps = {
    children: React.ReactNode;
}

type AuthenticationProviderType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    // user: any;
    login: () => void;
    logout: () => void;
}

export const AuthenticationContext = createContext<AuthenticationProviderType>({} as AuthenticationProviderType)

export const useAuthenticationContext = () => useContext(AuthenticationContext)

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()

    const login = useCallback(() => {
        setIsAuthenticated(true)
        router.push('/cubies')
    }, [setIsAuthenticated, router])

    const logout = useCallback(() => {
        console.log('Logging out')
        setIsAuthenticated(false)
        router.push('/')
    }, [setIsAuthenticated, router])

    const providerValue = useMemo(() => ({isAuthenticated, login, logout, setIsAuthenticated}), [isAuthenticated, login, logout, setIsAuthenticated])

    return (
        <AuthenticationContext.Provider value={providerValue}>
            {children}
        </AuthenticationContext.Provider>
    )
}

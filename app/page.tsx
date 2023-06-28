"use client"
import { useAuthenticationContext } from "@/contexts/AuthenticationContext";
import SignIn from "../components/SignIn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const {isAuthenticated} = useAuthenticationContext()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/cubies')
    }
  }, [isAuthenticated, router])

  return (
    <SignIn />
  );
}
"use client"
import { useAuthenticationContext } from "@/providers/AuthenticationProvider";
import SignIn from "../components/SignIn";
import { useRouter } from "next/navigation";

export default function Page() {
  const {isAuthenticated} = useAuthenticationContext()
  const router = useRouter()

  return (
    <SignIn />
  );
}
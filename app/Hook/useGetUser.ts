"use client"
import { useState, useEffect } from "react"

export const useGetUser = () => {
    const [user, setUser] = useState<any>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const storedUser = window.localStorage.getItem("User")
        const storedToken = window.localStorage.getItem("Token")

        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (err) {
                console.error("Failed to parse User:", err)
            }
        }

        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    return { user, token }
}

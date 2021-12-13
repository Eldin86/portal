import {useState, useCallback} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)

    const login = useCallback((token) => {
        setToken(token)
    }, [])

    const logout = useCallback(() => {
        setToken(null)
    }, [])

    return {
        token,
        logout,
        login
    }
}
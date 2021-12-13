import { useState, useCallback } from 'react'
import axios from 'axios'

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const sendRequest = useCallback((async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true)

        try {
            const response = await axios({
                method: method,
                url: url,
                body: body,
                headers: headers
            })
            console.log('response', response.data)
            setIsLoading(false)
            return response.data
        } catch (e) {
            setError(e.message)
            setIsLoading(false)
        }
    }), [])

    return {
        isLoading,
        error,
        sendRequest
    }
}
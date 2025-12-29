import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchCustomData = useCallback(async() => {


        try {
            setLoading(true)
            const res = await axios.get(url)
            setData(res.data)
            console.log(data, 'custom api data displayed')

        } catch (err) {
            setError(err)
        } finally {
            setLoading(error)
        }
    }, [url])

    useEffect(() => {
        fetchCustomData()
    }, [fetchCustomData])

    return { data, loading, error, refetch: fetchCustomData }

}

export default useFetch
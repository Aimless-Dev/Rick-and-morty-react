import { useState, useEffect } from "react"
import { getData } from '../helpers/getData'

export const useFetchData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState( true )


    const getDataApi = async () => {
        const newData = await getData()
        setData(newData)
        setIsLoading(false)
    }


    useEffect(() => {
        getDataApi()
    })

    return {
        data,
        isLoading
    }
}

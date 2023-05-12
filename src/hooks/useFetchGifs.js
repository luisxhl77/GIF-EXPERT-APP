import { useEffect, useState } from "react"
import { getGifs2 } from "../api/getGifs"


export const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async() => {
        const newImages = await getGifs2(category)
        setimages(newImages)
        setIsLoading(false);
    }

    useEffect(() => {
        getImages()
    }, [category])

    return {
        images,
        isLoading
    }
}




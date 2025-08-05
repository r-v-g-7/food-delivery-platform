import { useState, useEffect } from "react"
import { MENU_API } from "../components/mockData"
import { logV6DeprecationWarnings } from "react-router/dist/lib/deprecations"

const useRestaurantMenu = (resId) => {
    const[resInfo, setResinfo] = useState(null) 

    useEffect(() => {
        fetchData() 
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId) 
        const json = await data.json() 
        console.log(json); 
        setResinfo(json.data)
        
    }



    return resInfo
}
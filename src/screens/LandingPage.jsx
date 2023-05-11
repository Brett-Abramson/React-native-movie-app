import {Text, View} from "react-native"
import Banner from "../components/Banner"
import SearchField from "../components/SearchField"
import { useState } from "react"

const apiUrl = "http://www.omdapi.com?apikey=2c0bcb9f&"


const LandingScreen = () => {
    const [movieResult, setMovieResult] = useState()

    const handleSearch = async (searchString) => {
        const result = await fetch(apiUrl+searchString)
        console.log(result)
    }


    return (
        <View style={{flex: 1}}>
            <Banner />
            <SearchField />
        </View>
    )
}

export default LandingScreen
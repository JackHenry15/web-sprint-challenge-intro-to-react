import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
    const {charId, close} = props
    const [details, setDetails] = useState(null)



    //fetch charId details
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${charId}`)
        .then(res => {
            setDetails(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [charId])


    return(
        <div className=''>
            <h2>Character Details:</h2>
            {
                details &&
                <>
                    <p>Gender: {details.gender}</p>
                    <p>Height: {details.height}</p>
                    <p>Mass: {details.mass}</p>
                    <p>Birth Year:{details.birth_year}</p>
                    <p>Hair Color:{details.hair_color}</p>
                    <p>Skin Color: {details.skin_color}</p>
                    <p>Eye Color: {details.eye_color}</p>

                    <p>Species: {details.species}</p>
                    <p>Vehicles: {details.vehicles}</p>
                    <p>Starships: {details.starships}</p>

                    <p>Homeworld: {details.homeworld}</p>
                    <p>Created: {details.created}</p>
                    <p>Edited: {details.edited}</p>
                    <p>URL: {details.url}</p>
                </>
            }

        </div>
    )



}
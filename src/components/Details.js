import React from 'react'


export default function Details(props) {
    const {info} = props
    // const [details, setDetails] = useState(null)



    return(
        <div >
            <h2>Character Details:</h2>
            {
                info &&
                <>
                    <p>Gender: {info.gender}</p>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    <p>Birth Year:{info.birth_year}</p>
                    <p>Hair Color:{info.hair_color}</p>
                    <p>Skin Color: {info.skin_color}</p>
                    <p>Eye Color: {info.eye_color}</p>

                    <p>Homeworld: {info.homeworld}</p>
                    <p>Created: {info.created}</p>
                    <p>Edited: {info.edited}</p>
                    <p>URL: {info.url}</p>
                </>
            }
            
        </div>
    )



}
// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Details from './Details'



const StyledChar = styled.div`
border-style: solid; 
border-color: yellow;

button{


}






`

export default function Character({info, action, bold}){
    return(
        <StyledChar>
            <h3>{info.name}</h3>
            <button onClick={() => action(info.id)}>
                {info.birth_year}
            </button>
            <Details info={info}/>
        </StyledChar>
    )
}
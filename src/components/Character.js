// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
import Details from './Details'



const StyledChar = styled.div`
background-color: rgba(83, 37, 155, .3);
border-style: solid; 
border-color: yellow;
align-items: center;
justify-content: space-between;
display: flex;
padding: 10px;
margin: 10px;

h3{
    color: white;
    font-size: 1.5rem;
    text-shadow: 2px 2px black;
}
button{
border: 2px solid;
border-color: yellow;
color: yellow;
text-shadow: 1px 0px white;
background-color: blue;
font-size: 1.5rem;
width: 200px;
height: 50px;
}

div{
    border: 1px solid;
    border-color:white;
    opacity: .75;
    color: white;
    background-color:black;
    font-style: oblique;
}
`

export default function Character({info, bold}){
    const [detailsShow, setDetailsShow] = useState(false)
    const openInfo = (e) => {
        e.preventDefault(); 
        setDetailsShow(true);
    }
    return(
        <StyledChar bold={bold}>
            <h3>{info.name}</h3>
            <button onClick={openInfo}>
                {info.birth_year}
            </button>
            {
                detailsShow 
                ? <Details info={info}/> 
                : null
            }
        </StyledChar>
    )
}


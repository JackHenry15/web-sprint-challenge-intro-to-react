// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
import Details from './Details'



const StyledChar = styled.div`
border-style: solid; 
border-color: yellow;
align-items: center;
button{


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
            {/* <div className='Details'>
            <Details info={info}/>
            </div> */}
        </StyledChar>
    )
}
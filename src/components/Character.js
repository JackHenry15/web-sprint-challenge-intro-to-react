// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const StyledChar = styled.div`






`

export default function Character({info, action, bold}){
    return(
        <StyledChar>
            {info.name}
            <button onClick={() => action(info.id)}>
                {info.birthyear}
            </button>
        </StyledChar>
    )
}
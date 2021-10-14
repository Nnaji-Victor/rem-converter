import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledHeader>
            Rem-Converter
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    height: 7rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-weight: 600;
    font-size: 2rem;
`;

export default Header

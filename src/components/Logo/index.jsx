import styled from "styled-components"

const StyledLogo = styled.img`
    grid-area: logo;
    align-self: center;
    width: 145px;
    height: 34.049px;
`

function Logo() {
    return (
        <StyledLogo src="./Logo.svg" alt="Logo" />
    )
}

export default Logo
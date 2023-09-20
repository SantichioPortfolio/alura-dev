import styled from "styled-components"

const StyledBtn = styled.button`
    border: none;
    border-radius: 8px;
    background-color: #5081FB;
    padding: 16px;
    color: #051D3B;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    cursor: pointer;
`

function LightBtn({ label }) {
    return (
        <StyledBtn>{label}</StyledBtn>
    )
}

export default LightBtn
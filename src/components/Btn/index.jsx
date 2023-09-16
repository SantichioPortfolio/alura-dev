import styled from "styled-components"

const StyledBtn = styled.button`
    border-radius: 8px;
    background: rgba(80, 129, 251, 0.08);
    padding: 16px;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
        background: rgba(80, 129, 251, 0.16);
    }

    &:active {
        outline-color: rgba(80, 129, 251, 0.24);
        outline-width: 4px;
        outline-style: solid;
    }
`

function Btn({ label }) {
    return (
        <StyledBtn>{label}</StyledBtn>
    )
}

export default Btn
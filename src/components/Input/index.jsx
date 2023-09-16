import styled from "styled-components"

const StyledInput = styled.input`
    grid-area: search;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.16);
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    padding: 16px 14px;
    width: 100%;
    height: auto;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.24);
    }
`

function Input({ placeholder }) {
    return (
        <StyledInput type="text" placeholder={placeholder} />
    )
}

export default Input
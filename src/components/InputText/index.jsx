import styled from "styled-components"

const StyledInputText = styled.input`
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
`

function InputText({ placeholder }) {
    return (
        <StyledInputText type="text" placeholder={placeholder} />
    )
}

export default InputText
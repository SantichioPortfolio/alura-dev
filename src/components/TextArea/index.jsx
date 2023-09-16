import styled from "styled-components"

const StyledTextArea = styled.textarea`
    resize: none;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.16);
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    padding: 16px 14px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;

    &:focus {
        outline: none;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.24);
    }
`

function TextArea({ placeholder }) {
    return (
        <StyledTextArea placeholder={placeholder} />
    )
}

export default TextArea
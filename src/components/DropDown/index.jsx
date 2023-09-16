import styled from "styled-components"

const StyledDropDown = styled.select`
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
    opacity: 0.64;

    &:focus {
        outline: none;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.24);
    }
`

function DropDown({ name, id, options = [] }) {
    return (
        <StyledDropDown name={name} id={id}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.option}</option>
            ))}
        </StyledDropDown>
    )
}

export default DropDown
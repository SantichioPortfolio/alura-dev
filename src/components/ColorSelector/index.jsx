'use client'

import { useColor } from "@/common/context/ColorContext"
import styled from "styled-components"

const StyledInput = styled.input`
    border-radius: 8px;
    border: 1px solid #FFF;
    background: rgba(196, 196, 196, 0.01);
    height: 56px;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
`

function ColorSelector() {
    const { color, setColor } = useColor();

    return (
        <StyledInput type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    )
}

export default ColorSelector
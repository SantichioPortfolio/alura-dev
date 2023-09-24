import { useColor } from "@/common/context/ColorContext"
import styled from "styled-components"

const Container = styled.div`
    border-radius: 8px;
    background: ${props => props.$bgColor};
    padding: 32px;
    height: 50vh;
    position: relative;

    img {
        position: absolute;
        top: 48px;
        left: 48px;
    }

    textarea {
        background-color: #000;
        color: #fff;
        resize: none;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        padding: 52px 16px 16px 16px;
        box-sizing: border-box;
    }

    textarea:focus {
        outline: none;
    }
`

function Code () {
    const { color } = useColor()

    return (
        <Container $bgColor={color}>
            <img src="./mac-buttons.svg" alt="Decorative buttons" />
            <textarea></textarea>
        </Container>
    )
}

export default Code
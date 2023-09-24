import styled from "styled-components"
import Code from "./Code"
import Btn from "@/components/Btn"
import { ColorProvider, useColor } from "@/common/context/ColorContext"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

function CodeEditor() {
    return (
        <Container>
            <ColorProvider>
                <Code />
            </ColorProvider>
            <Btn label="View with higlight" />
        </Container>
    )
}

export default CodeEditor
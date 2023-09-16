import styled from "styled-components"
import Code from "./Code"
import Btn from "@/components/Btn"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

function CodeEditor() {
    return (
        <Container>
            <Code />
            <Btn label="View with higlight" />
        </Container>
    )
}

export default CodeEditor
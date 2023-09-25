import styled from "styled-components"

const Container = styled.div`
    background-color: #9AFF6B;
    border-radius: 8px;
    width: 100%;
    height: 288px;
    padding: 24px;
    box-sizing: border-box;
    position: relative;

    img {
        height: 9px;
        position: absolute;
        top: 38px;
        left: 38px;
    }

    textarea {
        resize: none;
        width: 100%;
        height: 100%;
        padding: 33px 12px 12px 12px;
        border: none;
        border-radius: 8px;
        color: #fff;
        background-color: #000;
        box-sizing: border-box;
    }

    textarea:focus {
        outline: none;
    }
`

function CodeView({ codeContent }) {
    return (
        <Container>
            <img src="./mac-buttons.svg" alt="Mac buttons"></img>
            <textarea disabled value={codeContent}></textarea>
        </Container>
    )
}

export default CodeView
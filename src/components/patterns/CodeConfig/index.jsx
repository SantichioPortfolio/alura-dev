import DropDown from "@/components/DropDown"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    div {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`

const StyledTitle = styled.h2`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
    letter-spacing: 4.8px;
    text-transform: uppercase;
`

function CodeConfig ({ languages }) {
    return (
        <>
            <Container>
                <div>
                    <StyledTitle>Your project</StyledTitle>
                    <Input placeholder="Name of your project" />
                    <TextArea placeholder="Description of your preoject" />
                </div>
                <div>
                    <StyledTitle>Personalization</StyledTitle>
                    <DropDown 
                        name={languages.name}
                        id={languages.id}
                        options={languages.options}
                    />
                </div>
            </Container>
        </>
    )
}

export default CodeConfig
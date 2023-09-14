import Logo from "@/components/Logo"
import InputText from "@/components/InputText"
import ProfileIcon from "@/components/ProfileIcon"
import styled from "styled-components"

const Container = styled.div`
    margin: 40px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto 752px auto;
    grid-template-rows: 56px auto;
    grid-template-areas: 
        "logo search profile";
`

function codeEditor() {
    return (
        <Container>
            <Logo />
            <InputText placeholder="Busque por algo" />
            <ProfileIcon
                name="Harry"
                size="32px"
                imgPath='./profile-photo.png'
            />
        </Container>
    )
}

export default codeEditor
import styled from "styled-components"

import Logo from "@/components/Logo"
import Input from "@/components/Input"
import ProfileIcon from "@/components/ProfileIcon"
import Aside from "@/components/patterns/Aside"
import Card from "@/components/patterns/Card"

const menu = [
    {
        title: 'Code editor',
        icon: './home-icon.svg',
        path: '/'
    },
    {
        title: 'Community',
        icon: './community-icon.svg',
        path: '/community'
    }
]

const StyledMain = styled.main`
    grid-area: main;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 
        "cards";
    column-gap: 40px;
`

function codeEditor() {
    return (
        <>
            <Logo />
            <Input placeholder="Busque por algo" />
            <ProfileIcon
                name="Harry"
                size="32px"
                imgPath='./profile-photo.png'
            />
            <Aside 
                pagesList={menu} 
            />
            <StyledMain>
                <Card />
            </StyledMain>
        </>
    )
}

export default codeEditor
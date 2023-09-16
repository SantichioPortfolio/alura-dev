import styled from "styled-components"

import Logo from "@/components/Logo"
import Input from "@/components/Input"
import ProfileIcon from "@/components/ProfileIcon"
import Aside from "@/components/patterns/Aside"
import CodeEditor from "@/components/patterns/CodeEditor"
import CodeConfig from "@/components/patterns/CodeConfig"

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

const languages = {
    name: 'language',
    id: 'language',
    options: [
        {
            option: 'JavaScript',
            value: 'js'
        },
        {
            option: 'HTML',
            value: 'html'
        },
        {
            option: 'CSS',
            value: 'css'
        }
    ]
}

const StyledMain = styled.main`
    grid-area: main;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "code config";
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
                <CodeEditor />
                <CodeConfig languages={languages}/>
            </StyledMain>
        </>
    )
}

export default codeEditor
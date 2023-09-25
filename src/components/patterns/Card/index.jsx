import styled from "styled-components";
import CodeView from "./CodeView";
import ProfileIcon from "@/components/ProfileIcon";
import { useState } from "react";

const Container = styled.div`
    grid-area: cards;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.16);
    width: 520px;
    height: 400px;
    /* height: 464px; */

    &:hover {
        height: 464px;
    }
`

const StyledContent = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
        font-size: 21px;
        font-style: normal;
        font-weight: 700;
        line-height: 31.5px; /* 150% */
    }

    p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
`

const StyledFooter = styled.div`
    display: none;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }

    div > span {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 8px;
    }
`

const userProject = {
    codeContent: `const ColorContext = createContext()

    ColorContext.displayName = 'Color' 
    
    export function ColorProvider({ children }) {
        const [color, setColor] = useState('#6BD1FF')
    
            return (
                <ColorContext.Provider value={{ color, setColor }}>
            )
    }
    `,
    title: 'Projetc title',
    description: 'This is a description of the project.',
    qtdComments: 9,
    qtdLikes: 9,
    author: '@Santichio',
    imgPath: 'http://github.com/santichio.png'
}

function Footer() {
    return (
        <StyledFooter>
            <div>
                <span>
                    <img src="./comment-icon.svg" alt="Comment icon" />
                    <span>{userProject.qtdComments}</span>
                </span>
                <span>
                    <img src="./like-icon.svg" alt="Likes icon" />
                    <span>{userProject.qtdLikes}</span>
                </span>
            </div>
            <ProfileIcon 
                name={userProject.author}
                size='24px'
                imgPath={userProject.imgPath}
            />
        </StyledFooter>
    )
}

function Card() {
    const [ isHover, setIsHover ] = useState(false)

    function handleMouseHover() {
        setIsHover(true)
    }

    function handleMouseOut() {
        setIsHover(false)
    }

    return (
        <Container 
            onMouseOver={handleMouseHover}
            onMouseOut={handleMouseOut}
        >
            <CodeView codeContent={userProject.codeContent}/>
            <StyledContent>
                <h1>{userProject.title}</h1>
                <p>{userProject.description}</p>
                {isHover && <Footer />}
            </StyledContent>
        </Container>
    )
}

export default Card
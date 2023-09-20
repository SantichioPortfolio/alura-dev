import Link from "next/link"
import { useRouter } from "next/router"

const { default: styled } = require("styled-components")

const StyledMenuItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 189px;

    img {
        border-radius: 16px;
        background: ${props => props.$active == props.$page ? '#5081FB' : 'rgba(80, 129, 251, 0.16)'};
        width: 24px;
        height: 24px;
        padding: 12px;
    }

    h3 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        color: #fff;
    }

    &:hover {
        img {
            background-color: rgba(80, 129, 251, 0.64);
        }
    }

    &:active {
        img {
            background-color: #5081FB;
        }
    }
`

function MenuItem({ menuIconPath, menuTitle, pagePath }) {
    const router = useRouter()

    return (
        <Link href={pagePath} style={{textDecoration: 'none', width: '189px'}}>
            <StyledMenuItem $active={router.asPath} $page={pagePath}>
                <img src={menuIconPath} alt="Menu icon" />
                <h3>{menuTitle}</h3>
            </StyledMenuItem>
        </Link>
    )
}

export default MenuItem
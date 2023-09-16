import Link from "next/link"

const { default: styled } = require("styled-components")

const StyledMenuItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 189px;

    img {
        border-radius: 16px;
        background: rgba(80, 129, 251, 0.16);
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
`

function MenuItem({ menuIconPath, menuTitle, pagePath }) {
    return (
        <Link href={pagePath} style={{textDecoration: 'none', width: '189px'}}>
            <StyledMenuItem>
                <img src={menuIconPath} alt="Menu icon" />
                <h3>{menuTitle}</h3>
            </StyledMenuItem>
        </Link>
    )
}

export default MenuItem
import styled from 'styled-components'
import MenuItem from './MenuItem'

const StyledAside = styled.aside`
    grid-area: aside;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 150% */
        letter-spacing: 4.8px;
        text-transform: uppercase;
    }
`

function Aside({ pagesList = [] }) {
    return (
        <>
            <StyledAside>
                <h2>MENU</h2>
                {pagesList.map((page) => (
                    <MenuItem 
                        key={page.title}
                        menuIconPath={page.icon}
                        menuTitle={page.title}
                        pagePath={page.path}
                    />
                ))}
            </StyledAside>
        </>
    )
}

export default Aside
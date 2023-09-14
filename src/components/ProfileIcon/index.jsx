import styled from "styled-components"

const Container = styled.div`
    grid-area: profile;
    align-self: center;
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 8px;
`

const StyledPhotoProfile = styled.img`
    border-radius: 50%;
    width: ${props => props.$size};
    height: ${props => props.$size};
`

const StyledNameProfile = styled.h3`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`

function ProfileIcon({ name, size, imgPath }) {
    return (
        <Container>
            <StyledPhotoProfile src={imgPath} alt="Photo profile" $size={size} />
            <StyledNameProfile>{name}</StyledNameProfile>
        </Container>
    )
}

export default ProfileIcon
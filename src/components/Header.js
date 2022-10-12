import {
    NavMain,
    NavName,
    NavInfo,
    NavInfoWrapper,
    NavNameWrapper,
    
} from "../styles/HeaderStyles"

export const Header = () => {
    return (
        <NavMain>
            <NavNameWrapper>
                <NavName>Ryan Fritz</NavName>
            </NavNameWrapper>
            <NavInfoWrapper>
                <NavInfo>ryanfritzc@gmail.com</NavInfo>
                <NavInfo>(919)426-8030</NavInfo>
                <NavInfo>US East Coast</NavInfo>
            </NavInfoWrapper>
        </NavMain>
    )
}
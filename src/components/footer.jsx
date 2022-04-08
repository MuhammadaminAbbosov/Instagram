import styled from "styled-components"
import {ReactComponent as Icon2} from "../assets/icons/homeIcon.svg"
import {ReactComponent as Icon3} from "../assets/icons/search.svg"
import {ReactComponent as Icon4} from "../assets/icons/createIcon.svg"
import {ReactComponent as Icon5} from "../assets/icons/likeIcon.svg"
import Profil from "../assets/images/Oval-profil.png"
import {NavLink} from "react-router-dom"


export const Footer = () => {
    return (
        <Wrapper>
            <NavLink to={"/user"}>
                <Icon2 />
            </NavLink>
            <NavLink to={"/user/search"}>
                <Icon3 />
            </NavLink>
            <NavLink to={"/"}>
                <Icon4 />
            </NavLink>
            <NavLink to={"/user/likes"}>
                <Icon5 />
            </NavLink>

            <NavLink to={"/user/profile"}>
                <img src={Profil} alt="Profil" />
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    position: fixed;
    bottom: 0;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FAFAFA;
    box-shadow: 0px -0.33px 0px #A6A6AA;
    border-top: 1px solid grey;

    a {
        &.active {
            svg {
                background-color: red;
            }
        }
    }
    
`
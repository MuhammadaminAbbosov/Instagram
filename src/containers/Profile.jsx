import styled from "styled-components"
import Bar from "../components/Bar"
import SecurityIcon from "../assets/icons/securityIcon.svg"
import AccauntList from "../assets/icons/Accounts List.svg"
import MenuIcon from "../assets/icons/Menu.svg"
import ProfileImage from "../assets/images/Profile-Image.png"
import FirstStory from "../assets/images/first-story (2).png"
import GridIcon from "../assets/icons/Grid Icon.svg"
import YouIcon from "../assets/icons/youIcon.svg"
import PostImage from "../assets/images/post-Image.png"
import { Footer } from "../components/footer"
import { useState } from "react"

import { Link } from "react-router-dom"

import ArchiveIcon from "../assets/icons/ArchiveIcon.svg"
import YourActivity from "../assets/icons/Your Activity-Icon.svg"
import NametagIcon from "../assets/icons/Nametag-Icon.svg"
import DiscoverPeopleicon from "../assets/icons/Discover People-Icon.svg"
import Facebook from "../assets/icons/Facebook-Icon.svg"
import Settings from "../assets/icons/settings.svg"
import SavedIcon from "../assets/icons/Saved-Icon.svg"
import saved from "../assets/icons/saved.svg"

const Profile = () => {

    const Statistics = [
        {bold: "54", paragraph: "Posts"},
        {bold: "834", paragraph: "Followers"},
        {bold: "162", paragraph: "Following"}
    ]

    const storys = [
        {img: FirstStory},
        {img: FirstStory},
        {img: FirstStory},
        {img: FirstStory},
    ]

    const posts = [
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
        {img: PostImage},
    ]

    const settings = [
        {img: ArchiveIcon, title: "Archive"},
        {img: YourActivity, title: "Your Activity"},
        {img: NametagIcon, title: "Nametag"},
        {img: saved, title: "Saved"},
        {img: SavedIcon, title: "Close Friends"},
        {img: DiscoverPeopleicon, title: "Discover People"},
        {img: Facebook, title: "Open Facebook"},
        {img: Settings, title: "Settings"},
    ]

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <Wrapper>

            <Headers>

                <Bar />

                <header>

                    <div className="name">
                        <img src={SecurityIcon} alt="securityIcon" />
                        <p>jacob_w</p>
                        <img src={AccauntList} alt="Icon" />
                    </div>

                    <img onClick={handleClick}  className="nav" src={MenuIcon} alt="Menu" />

                    <div className={click ? "nav-menu active" : "nav-menu"}>
                        
                        <img onClick={handleClick}  className="nav" src={MenuIcon} alt="Menu" />
                        
                        <b>s.khasanov_</b>

                        {
                            settings.map((data, index) => {
                                return (
                                    <div className="display" key={index} onClick={handleClick}>
                                        <img src={data.img} alt="settings" />
                                        <p>{data.title}</p>
                                    </div>
                                )
                            })
                        }

    
                    </div>

                </header>

            </Headers>

            <Container>

                <Profil>

                    <div className="Profile">

                        <img src={ProfileImage} alt="ProfilImage" />

                        {Statistics.map((text, index) => {
                            return (
                                <div className="stats" key={index}>
                                    <b>{text.bold}</b>
                                    <p>{text.paragraph}</p>
                                </div>
                            )
                        })}

                    </div>

                    <div className="texts">
                        <b className="text">Jacob West</b>
                        <p className="text">
                            Digital goodies designer <span>@pixsellz</span> <br /> 
                            Everything is designed.
                        </p>
                    </div>

                    <Link to={"/edit-profile"}>
                        <button>Edit Profile</button>
                    </Link>

                    <Storys>
                        {
                            storys.map((item, index) => {
                                return <img src={item.img} key={index} alt="Story" />
                            })
                        }
                    </Storys>

                    <div className="Icons">
                        <Link to="/user/profile">
                            <img src={GridIcon} alt="GridIcon" />
                        </Link>
                        <Link to="/user/all-posts">
                            <img src={YouIcon} alt="icon2" />
                        </Link>
                    </div>

                </Profil>

                <Posts>
                    {
                        posts.map((post, index) => {
                            return (
                                <img src={post.img} key={index} alt="post" />
                            )
                        })
                    }
                </Posts>

            </Container>

            <Footer />

        </Wrapper>
    )
}

export default Profile;

const Wrapper = styled.div`
`
const Container = styled.div`
    height: 672px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Headers = styled.div`
    background: #FAFAFA;;

    header {
        width: 100%;
        padding: 13px   ;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .nav-menu {
            width: 70%;
            position: absolute;
            z-index: 1;
            display: none;
            right: -375px;
            top: 44px;
        }

        .active {
            padding: 15px 13px;
            background: #FFFFFF;
            right: 0;
            height: calc(812px - 44px);
            display: block;

            b {
                display: block;
                margin-top: 20px;
                font-weight: 400;
                font-size: 25px;
                line-height: 18px;
                letter-spacing: -0.25px;
                color: #262626;
            }

            .nav {
                position: absolute;
                right: 13px;
                top: 13px;
                width: 20px;
                height: 20px;
            }

            .display {
                margin-top: 25px;
                display: flex;
                align-items: center;
                gap: 15px;
                cursor: pointer;

                p {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: -0.25px;
                    color: #262626;
                }
            }
        }


        .name {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
`

const Profil = styled.div`
    padding: 13px;
    background: #FAFAFA;
    box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);

    .Icons {
        padding: 10px;
        display: flex;
        justify-content: space-around;
        position: sticky;

        img {
            cursor: pointer;
        }
    }

    .Profile {
        display: flex;
        align-items: center;
        gap: 30px;
    
        .stats {
            display: flex;
            align-items: center;
            flex-direction: column;
    
            b {
                font-weight: 600;
                font-size: 16px;
                line-height: 21px;
                letter-spacing: -0.3px;
                color: #262626;
            }
    
            p {
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
                letter-spacing: -0.1px;
                color: #262626;
            }
        }
    }

    .texts {
        padding-left: 3px;

        .text {
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            color: #262626;
            
            span {
                color: blue;
            }
        }
    }

    button {
        width: 100%;
        height: 30px;
        color: #262626;
        margin-top: 20px;
        background: #FFFFFF;
        border: 1px solid rgba(60, 60, 67, 0.18);
        box-sizing: border-box;
        border-radius: 6px;
        cursor: pointer;
    }
`

const Storys = styled.div`
    margin: 16px 0;

    img {
        cursor: pointer;
    }
`
const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;

    &::-webkit-scrollbar {
        display: none;
    }

    img {
        cursor: pointer;
    }
`
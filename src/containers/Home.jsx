import React from 'react'
import styled from 'styled-components'

import Bar from '../components/Bar'
import { Footer } from '../components/footer'

import CameraIcon from "../assets/icons/Camera Icon.svg"
import IGTVIcon from "../assets/icons/IGTV.svg"
import InstagramIcon from "../assets/icons/Instagram Logo.svg"
import MessangerIcon from "../assets/icons/Messanger.svg"
import StorieImage from "../assets/images/Inner Oval.png"
import StorieComponent from '../components/StorieComponent'
import PostImage from "../assets/images/Rectangle.png"
import PostComponent from '../components/PostComponent'
import ImageTest from "../assets/images/Rectangle-girl.png"

export default function Home() {

    const StoriesData = [
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
        {
            title: "Your Story",
            image: StorieImage
        },
    ]

    const Posts = [
        {
            author: "joshua_l",
            address: "Tokyo, Japan", 
            authorImage: StorieImage,
            postImages: [
                {
                    id: 1,
                    image: PostImage
                },
                {
                    id: 2,
                    image: PostImage
                },
                {
                    id: 3,
                    image: PostImage
                },
            ],
            title: "The game in Japan was amazing and I want to share some photos",
            liked: [
                {
                    image: StorieImage,
                    count: 44686,
                    userLiked: "craig_love"
                }
            ],
        },
        {
            author: "joshua_l",
            address: "Tokyo, Japan", 
            authorImage: StorieImage,
            postImages: [
                {
                    id: 1,
                    image: PostImage
                },
                {
                    id: 2,
                    image: ImageTest
                },
                {
                    id: 3,
                    image: PostImage
                },
                {
                    id: 4,
                    image: PostImage
                },
                {
                    id: 5,
                    image: ImageTest
                },
                {
                    id: 6,
                    image: PostImage
                },
            ],
            title: "The game in Japan was amazing and I want to share some photos",
            liked: [
                {
                    image: StorieImage,
                    count: 44686,
                    userLiked: "craig_love"
                }
            ],
        },
        {
            author: "joshua_l",
            address: "Tokyo, Japan", 
            authorImage: StorieImage,
            postImages: [
                {
                    id: 1,
                    image: PostImage
                }
            ],
            title: "The game in Japan was amazing and I want to share some photos",
            liked: [
                {
                    image: StorieImage,
                    count: 44686,
                    userLiked: "craig_love"
                }
            ],
        },
        {
            author: "joshua_l",
            address: "Tokyo, Japan", 
            authorImage: StorieImage,
            postImages: [
                {
                    id: 1,
                    image: PostImage
                },
                {
                    id: 2,
                    image: PostImage
                },
                {
                    id: 3,
                    image: PostImage
                },
            ],
            title: "The game in Japan was amazing and I want to share some photos",
            liked: [
                {
                    image: StorieImage,
                    count: 44686,
                    userLiked: "craig_love"
                }
            ],
        }
    ]

    return (
    <Wrapper>
        <Bar />

        <div className="home__messages">
            <img src={CameraIcon} alt="" />
            <img src={InstagramIcon} className="instagram-logo" alt="" />
            <div className="home__messages-right">
                <img src={IGTVIcon} className="igtv-icon" alt="" />
                <img src={MessangerIcon} alt="" />
            </div>
        </div>
        <div className="home__back-top"></div>

        <div className="home__stories">
            {
                StoriesData.map((item, index) => <StorieComponent key={index} data = {item} />)
            }
        </div>

        <div className="home__posts">
            {
                Posts.map((item, index) => <PostComponent key={index} data={item} />)
            }
        </div>

        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    .home__messages {
        padding: 10px 12px 12px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .instagram-logo {
            width: 105px;
            height: 28px;
        }

        img {
            cursor: pointer;
            user-select: none;
        }

        .home__messages-right {
            display: flex;
            align-items: center;
            gap: 20px;

            .igtv-icon {
                width: 24px;
            }
        }
    }

    .home__back-top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 88px;
        background: #FAFAFA;
        box-shadow: 0px 0.33px 0px #A6A6AA;
    }

    .home__stories {
        padding: 9px 10px;
        box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);

        display: flex;
        align-items: center;
        gap: 20px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .home__posts {
        width: 100%;
        height: 566px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`

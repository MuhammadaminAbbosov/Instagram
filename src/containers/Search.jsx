import React from 'react'
import styled from 'styled-components'

import Bar from '../components/Bar'
import SearchIcon from "../assets/icons/Search Icon.svg"
import LiveIcon from "../assets/icons/Live.svg"
import IGTVIcon from "../assets/icons/IGTV.svg"
import ShopIcon from "../assets/icons/shop.svg"
import TestImg from "../assets/images/Rectangle.png"
import { Footer } from '../components/footer'

export default function Search() {
    const types = [
        {
            icon: IGTVIcon,
            title: "IGTV"
        },
        {
            icon: ShopIcon,
            title: "Shop"
        },
        {
            title: "Style"
        },
        {
            title: "Sports"
        },
        {
            title: "Auto"
        },
        {
            title: "Music"
        }
    ]

    const videos = [
        {
            id: 1,
            image: TestImg,
        },
        {
            id: 2,
            image: TestImg,
        },
        {
            id: 3,
            image: TestImg,
        },
        {
            id: 4,
            image: TestImg,
        },
        {
            id: 5,
            image: TestImg,
        },
        {
            id: 6,
            image: TestImg,
        },
        {
            id: 7,
            image: TestImg,
        },
        {
            id: 8,
            image: TestImg,
        },
        {
            id: 9,
            image: TestImg,
        },
        {
            id: 10,
            image: TestImg,
        },
        {
            id: 11,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
        {
            id: 12,
            image: TestImg,
        },
    ]
    return (
        <Wrapper>
            <Bar />
            <div className="search-box">
                <div className="search-box__input">
                    <input type="text" placeholder='Search' />
                    <img src={SearchIcon} alt="" />
                </div>
                <img className='live-icon' src={LiveIcon} alt="" />
            </div>

            <div className="types">
                {
                    types.map((item, index) => <Type key={index}>
                        {
                            item.icon && <img src={item?.icon} alt="" />
                        }
                        <p>{item.title}</p>
                    </Type>)
                }
            </div>

            <div className="main-container">
                {
                    videos.map((item, index) => <img key={index} src={item.image}  alt=""/>)
                }
            </div>
            <Footer />
        </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    .search-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 4px 10px 9px 8px;

        .live-icon {
            cursor: pointer;
        }
        .search-box__input {
            position: relative;
            

            input {
                outline: none;
                border: none;
                width: 327px;
                height: 36px;
                background: rgba(118, 118, 128, 0.12);
                border-radius: 10px;
                padding: 8px 11px 8px 34px;

                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.3px;

                &::placeholder {

                    color: rgba(60, 60, 67, 0.6);
                }
            }

            img {
                position: absolute;
                left: 12px;
                top: 10px;
            }
        }
    }

    .types {
        display: flex;
        align-items: center;
        gap: 6px;
        overflow-x: scroll;
        padding: 0 8px 7px;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .main-container {
        height: 630px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: dense;
        gap: 1px;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const Type = styled.div`
    display: flex;
    align-items: center;
    gap: 6.5px;

    padding: 8px 11px;
    border: 1px solid rgba(60, 60, 67, 0.18);
    border-radius: 6px;
    cursor: pointer;

    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.2px;

    color: #262626;
`
import React, { useState } from 'react'
import styled from 'styled-components'
import LikeIcon from '../assets/icons/likeIcon.svg'
import CommentIcon from "../assets/icons/Comment.svg"
import MessageIcon from "../assets/icons/Messanger.svg"
import SaveIcon from "../assets/icons/Save.svg"

export default function PostComponent({data}) {

    const [id, setId] = useState(1)
  return (
    <Wrapper count={data.postImages} changeImage={id}>
        <div className="post__header">
            <img src={data.authorImage} className="author__image" alt="" />
            <div className="post__header-title">
                <b>{data.author}</b>
                <p>{data.address}</p>
            </div>

            <div className="points">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
            </div>
        </div>

        <div className="post__images">
            {
                data.postImages.length > 1 &&  <div className="counts">{id} / {data.postImages.length}</div>
            }
            {
                data.postImages.map((item, index) => <div className='post__image' key={index}>
                    <img src={item.image} alt="" />
                </div>)
            }
        </div>

        <div className="post__footer">
            <div className="post__footer-top">
                <div className="comments">
                    <img src={LikeIcon} alt="" />
                    <img src={CommentIcon} alt="" />
                    <img src={MessageIcon} alt="" />
                </div>

                {
                    data.postImages.length > 1 && <div className="points-container">
                        {data.postImages.map(item => <div 
                            id={item.id} 
                            onClick={(e) => {
                                setId(item.id)
                            }} 
                            key={item.id} 
                            className={`point-main` + (id === item.id ? " active" : "")}>
                        </div>)}
                    </div>
                }

                <img src={SaveIcon} className="save-icon" alt="" />
            </div>

            <div className="footer__center">
                <img src={data.liked[0].image} className="liked-image" alt="" />
                <p>Liked by <b>{data.liked[0].userLiked}</b> and <b>{data.liked[0].count} others</b></p>
            </div>

            <div className="footer__bottom">
                {data.author} {data.title}
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 375px;
    /* overflow-x: hidden; */
    .post__header {
        padding: 11px 15px 11px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);

        .author__image {
            width: 32px;
            height: 32px;
        }

        .post__header-title {
            b {
                font-weight: 600;
                font-size: 13px;
                line-height: 18px;
                letter-spacing: -0.1px;

                color: #262626;
            }

            p {
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;
                letter-spacing: 0.07px;

                color: #262626;
            }
        }

        .points {
            margin-left: auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 3px;

            .point {
                width: 3px;
                height: 3px;
                background-color: #262626;
                border-radius: 50%;
            }
        }
    }

    .post__images {
        position: relative;
        display: flex;
        align-items: center;
        width: 375px;

        &::-webkit-scrollbar {
            display: none;
        }

        .counts {
            position: absolute;
            z-index: 45;
            right: 14px;
            top: 14px;
            padding: 6px 8px;
            background: rgba(18, 18, 18, 0.7);
            border-radius: 13px;

            font-weight: 400;
            font-size: 12px;
            line-height: 14px;

            color: #F9F9F9;
        }
        .post__image {
            position: relative;
            
            img {
                transition: 0.4s;
                width: 375px;
                transform: ${({changeImage}) => `translateX(${(changeImage - 1) * (-375)}px)`};
            }

        }
    }

    .points-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        gap: 4px;

        .point-main {
            width: 6px;
            height: 6px;
            background: rgba(0, 0, 0, 0.15);
            border-radius: 50%;
            cursor: pointer;

            &.active {
                background-color: #3897F0;
            }
        }

    }

    .post__footer {
        padding: 15px;

        .post__footer-top {
            position: relative;
            display: grid;
            grid-template-columns: ${({count}) => count.length > 1 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
            justify-items: flex-start;
            align-content: center;

            .comments {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 20px;

                img {
                    cursor: pointer;
                }
            }

            .save-icon {
                margin-left: auto;
                cursor: pointer;
            }

            
        }
        .footer__center {
            margin-top: 11px;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 7px;

            .liked-image {
                width: 17px;
            }

            p {
                font-size: 13px;
                line-height: 18px;
                letter-spacing: -0.07px;
                color: #262626;
            }
        }

        .footer__bottom {
            font-size: 13px;
            line-height: 18px;

            letter-spacing: -0.1px;

            color: #262626;
        }
    }

`
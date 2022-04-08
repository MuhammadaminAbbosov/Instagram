import styled from "styled-components"
import girlImage from "../assets/images/Ovalgirl.png"
import maleImage from "../assets/images/Profiles.png"
import Image from "../assets/images/Rectangle-girl.png"
import { Footer } from "../components/footer"


export const Like = () => {

    const likedata = [
        {paragraph: "New", icon: girlImage, text: "karennne liked your photo. 1h", img: Image},
        {paragraph: "Today", icon: maleImage, text: "kiero_d, zackjohn and 26 others liked your photo. 3h", img: Image},
    ]


    return (
        <Wrapper>
            <Header>
                <p>Following</p>
                <b>You</b>
            </Header>

            <div className="text">
                <p>Follow Requests</p>
            </div>

            
            {
                likedata.map((data, index) =>  {
                    return (
                        <div className="liked-photo" key={index}>

                            <b>{data.paragraph}</b>
            
                            <div className="like">
                                <div className="image-text">
                                    <img src={data.icon} alt="girl" />
                                    <p>{data.text}</p>
                                </div>
            
                                <img src={data.img} alt="" />
                            </div>
                        </div>
                    )
                })
            }

        

            <div className="liked-photo">
                <b>This Week</b>

                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>craig_love mentioned you in a comment: @jacob_w exactly.. 💫 2d</p>
                    </div>

                    <img src={Image} alt="" />
                </div>

                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>martini_rond started following you. 3d</p>
                    </div>

                    <button>Message</button>
                </div>

                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>mis_potter started following you. 3d</p>
                    </div>

                    <button className="follow">Follow</button>
                </div>
                
            </div>

            <div className="liked-photo">
                <b>This Month</b>

                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>craig_love mentioned you in a comment: @jacob_w exactly.. 💫 2d</p>
                    </div>

                    <img src={Image} alt="" />
                </div>

                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>martini_rond started following you. 3d</p>
                    </div>

                    <button>Message</button>
                </div>
                
                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>martini_rond started following you. 3d</p>
                    </div>

                    <button className="follow">Follow</button>
                </div>
                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>martini_rond started following you. 3d</p>
                    </div>

                    <button className="follow">Follow</button>
                </div>
                <div className="like">
                    <div className="image-text">
                        <img src={girlImage} alt="girl" />
                        <p>martini_rond started following you. 3d</p>
                    </div>

                    <button className="follow">Follow</button>
                </div>
                
            </div>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    .text {
        padding: 14px 16px;
        background-color: white;
        border-bottom: 1px solid #d5d5d8;
    }

    .liked-photo {
        padding: 13px 16px;
        background: #FFFFFF;
        width: 100%;
        overflow-y: scroll;

        box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29), 0px -0.33px 0px rgba(60, 60, 67, 0.29);

        &::-webkit-scrollbar {
            display: none;
        }
        .like {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .follow {
                width: 90px;
                height: 30px;
                background: #3797EF;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: -0.2px;
                color: #FFFFFF;
            } 

            button {
                width: 90px;
                height: 30px;
                background: #FFFFFF;
                border: 1px solid rgba(60, 60, 67, 0.18);
                box-sizing: border-box;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                letter-spacing: -0.2px;
                color: #262626;
            }
        }

        .image-text {
            display: flex;
            align-items: center;
            gap: 12px;

            p {
                font-weight: 600;
                font-size: 13px;
                line-height: 16px;
                letter-spacing: -0.07px;
                color: #262626;

                span {
                    color: rgba(0, 0, 0, 0.4);
                }
            }
        }

        b {
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.3px;
            color: #262626;
        }
    }
`
const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 12px;
    background: #FAFAFA;
    box-shadow: 0px 0.33px 0px #A6A6AA;
    border-bottom: 1px solid #d5d5d8;

    p {
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: rgba(0, 0, 0, 0.4);
    }

    b {
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: #262626;
    }
`
import styled from "styled-components"
import Bar from "../components/Bar"
import ProfileImage from "../assets/images/Profile.png" 

export const EditProfile = () => {
    return (
        <Wrapper>

            <Headers>
                <Bar />
                <header>
                    <span>Cancel</span>
                    <b>Edit Profile</b>
                    <p>Done</p>
                </header>
            </Headers>

            <div className="change-profile">
                <img src={ProfileImage} alt="profile" />
                <p>Change Profile Photo</p>
            </div>
            
            <div className="info">
                <form action="">
                    <label htmlFor="Name">Name</label>
                    <input type="text" />
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .change-profile {
        padding: 15px;
        img {
            display: block;
            margin: auto;
        }

        p {
            margin-top: 12px;
            font-weight: 600;
            font-size: 13px;
            line-height: 21px;
            text-align: center;
            letter-spacing: -0.05px;
            color: #3897F0;
        }
    }

    .info {
        padding: 15px;
        width: 100%;
        height: 200px;
        background: #FAFAFA;
        border-bottom:  0.33px solid rgba(60, 60, 67, 0.29);
        border-top:  0.33px solid rgba(60, 60, 67, 0.29);

        form {
            display: flex;
            align-items: center;
            justify-content: space-between;

            input {
                width: 240px;
                padding: 13px 13px 13px 3px;
                outline: none;
                border: none;
                border-bottom: 0.33px solid rgba(60, 60, 67, 0.29);
                background-color: transparent;
            }
        }
    }
`
const Headers = styled.div`
    background: #FAFAFA;
    box-shadow: 0px 0.33px 0px #A6A6AA;

    header {
        margin-top: 12px;
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: #262626;

        p {
            color: #3897F0;
        }
    }   
`
import styled from "styled-components"
import Bar from "../components/Bar"
import ProfileImage from "../assets/images/Profile.png" 
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import marat from "../utils/axios"

export const EditProfile = () => {

    const navigate = useNavigate()

    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [gender, setGender] = useState("")
    const [username, setUsername] = useState("")
    const [website, setWebsite] = useState("")
    const [phone, setPhone] = useState("")


    const loginSubmit = () => {

        marat.post("/auth/registration", {
            fullName: fullName,
            username: username,
            website: website,
            bio: bio,
            email: email,
            phone: phone,
            gender: gender
        }).then(res => {
            console.log(res)
            localStorage.setItem("user-token", res.data.jwt);
            navigate("/user/profile");
        })
        .catch(({ message }) => {
            console.log(message);
        })
    }

    return (
        <Wrapper>

            <Headers>
                <Bar />
                <header>
                    <span onClick={() => navigate(-1)}>Cancel</span>
                    <b>Edit Profile</b>
                    <p onClick={() => loginSubmit}>Done</p>
                </header>
            </Headers>

            <div className="change-profile">
                <img src={ProfileImage} alt="profile" />
                <p>Change Profile Photo</p>
            </div>
            
            <div className="info">
                 <form action="edit">
                    <label htmlFor="Name">Name</label>
                    <input onChange={({ target }) => setFullName(target.value)} type="text" />
                </form>

                 <form action="edit">
                    <label htmlFor="Name">Username</label>
                    <input type="text" onChange={({ target }) => setUsername(target.value)} />
                </form>

                 <form action="edit">
                    <label htmlFor="Name">Website</label>
                    <input type="text" onChange={({ target }) => setWebsite(target.value)} />
                </form>

                 <form action="edit">
                    <label htmlFor="Name">Bio</label>
                    <input type="text" onChange={({ target }) => setBio(target.value)} />
                </form>
            </div>

            <div className="information">
                <p>Switch to Professional Account</p>
                <b>Private Information</b>

                <div className="info">
                    <form action="edit">
                        <label htmlFor="Name">Email</label>
                        <input type="text" onChange={({ target }) => setEmail(target.value)} />
                    </form>

                    <form action="edit">
                        <label htmlFor="Name">Phone</label>
                        <input type="text" onChange={({ target }) => setPhone(target.value)} />
                    </form>

                    <form action="edit">
                        <label htmlFor="Name">Gender</label>
                        <input type="text"onChange={({ target }) => setGender(target.value)} />
                    </form>
                </div>

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

    .information {
        height: auto;
        padding: 15px;
        border-bottom: 0.33px solid rgba(60,60,67,0.29);
        border-top: 0.33px solid rgba(60,60,67,0.29);

        p {
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: -0.25px;
            color: #3897F0;
        }

        b {
            display: block;
            margin-top: 30px;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.25px;
            color: #262626;
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
            cursor: pointer;
        }
    }   
`
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Bar from '../components/Bar'
import BackIcon from "../assets/icons/Back.svg"
import InstagramIcon from "../assets/icons/Instagram Logo.svg"
import FacebookIcon from "../assets/icons/facebook.svg"
import marat from "../utils/axios"
import axios from 'axios'

export default function LoginPage() {
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const loginSubmit = () => {

        marat.post("/auth/login", {
            username: username,
            password: password
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
            <Bar />
            <img src={BackIcon}  className="shape" onClick={() => navigate(-1)} alt="" />
            <img src={InstagramIcon} className="instagram-icon" alt="" />

            <form className='' onSubmit={(e) => submitForm(e)}>
                <input onChange={({ target }) => setUsername(target.value)} type="text" placeholder='Username' />
                <input onChange={({ target }) => setPassword(target.value)} type="password" placeholder='Password' />
                <Link to="/">Forgot password?</Link>
                <button onClick={loginSubmit}>Log in</button>
            </form>

            <div className="login-facebook">
                <img src={FacebookIcon} alt="" />
                <p>Log in with Facebook</p>
            </div>

            <div className="sign-up">
                <div className="sign-up__or">
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>
                <p className='sign-up__btn'>Don’t have an account? <span>Sign up.</span></p>
            </div>

            <p className="footer">
                Instagram от Facebook
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    padding: 0 16px;
    width: 100%;
    height: 100%;

    .shape {
        display: block;
        cursor: pointer;
        margin-top: 12px;
        margin-bottom: 14px;
    }

    .instagram-icon {
        display: block;
        margin: 80px auto 39px;
    }

    form {
        display: flex;
        flex-direction: column;

        input, button {
            width: 100%;
            height: 44px;
            padding: 13.5px;

            border: 0.5px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            outline: none;
            background: #FAFAFA;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;

            letter-spacing: -0.15px;

            color: #262626;

            &:first-child {
                margin-bottom: 12px;
            }

            &::placeholder {
                color: rgba(0, 0, 0, 0.2);
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;

                letter-spacing: -0.15px;
            }

            
        }

        button {
            margin: 30px 0 37px 0;
            background-color: #3797EF;
            border: none;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: -0.15px;
            color: #FFFFFF;
            cursor: pointer;
            }

        a {
            font-size: 12px;
            line-height: 14px;
            text-align: right;
            letter-spacing: 0.15px;

            color: #3797EF;

            margin-top: 19px;
        }
    }

    .login-facebook {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 41.5px;
        cursor: pointer;

        p {
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.15px;
            color: #3797EF;
        }
    }

    .sign-up {
        .sign-up__or {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30.5px;

            span {
                width: 132px;
                height: 1px;
                border: 0.33px solid rgba(0, 0, 0, 0.2);
            }

            p {
                font-weight: 600;
                font-size: 12px;
                line-height: 14px;
                text-align: center;

                color: rgba(0, 0, 0, 0.4);
            }
        }

        .sign-up__btn {
            text-align: center;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.15px;
            color: rgba(0, 0, 0, 0.4);

            margin-top: 48px;
            span {
                color: #3797EF;
                cursor: pointer;
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        
        padding: 32.5px 0;
        width: 100%;

        text-align: center;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: -0.01px;

        color: rgba(0, 0, 0, 0.4);
        box-shadow: 0px -0.33px 0px rgba(60, 60, 67, 0.29);
        border-top: 0.33px solid rgba(0, 0, 0, 0.2);
    }
`

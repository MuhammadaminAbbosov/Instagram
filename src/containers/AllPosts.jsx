import styled from "styled-components"
import Bar from "../components/Bar"
import { Footer } from "../components/footer"
import BackIcon from "../assets/icons/Back.svg"
import postImg from "../assets/images/Rectangle.png"
import { useNavigate } from "react-router-dom"

export const AllPosts = () => {

    const navigate = useNavigate()

    const posts = [
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
        {img: postImg},
    ]

    return (
        <Wrapper>

            <Headers>
                <Bar /> 
                <header>
                    <img onClick={() => navigate("/user")} src={BackIcon} alt="BackIcon" />
                    <b>All posts</b>
                </header>
            </Headers>

            <Container>
                {
                    posts.map((post) => {
                        return (
                            <>
                                <img src={post.img} alt="image" />
                            </>
                        )
                    })
                }
            </Container>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`
const Headers = styled.div`
    width: 100%;
    height: 88px;

    header {
        padding: 14px;
        display: flex;
        align-items: center;
        gap: 130px;

        b {
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            letter-spacing: -0.33px;
            color: #262626;
        }
    }
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    width: 100%;
    height: 674px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    img {
        width: 100%;
    }
`
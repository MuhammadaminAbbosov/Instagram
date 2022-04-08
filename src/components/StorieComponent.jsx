import React from 'react'
import styled from 'styled-components'

export default function StorieComponengt({data}) {
  return (
    <Wrapper>
      <div className='story-line'>
        <img src={data.image} alt="" />
      </div>
      <p>{data.title}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  .story-line {
    padding: 3px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);

    img {
      border-radius: 50%;
      border: 1px solid white;
    }
  }


  p {
    font-weight: 400;
    font-size: 12px;
    text-align: center;

    color: #262626;
  }
`
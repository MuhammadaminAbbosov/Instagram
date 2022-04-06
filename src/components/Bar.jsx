import React from 'react'
import styled from 'styled-components'
import TimeImg from "../assets/icons/Time Style.svg" 
import NetworkIcon from "../assets/icons/Mobile Signal.svg" 
import WifiIcom from "../assets/icons/Wifi.svg" 
import BatteryIcon from "../assets/icons/Battery.svg" 

export default function Bar() {
  return (
    <Wrapper>
        <img src={TimeImg} alt="" />
        <img src={NetworkIcon} alt="" />
        <img src={WifiIcom} alt="" />
        <img src={BatteryIcon} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 14px 5px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;

  img {
    display: block;
    &:first-child {
        margin-right: auto;
    }
  }
`
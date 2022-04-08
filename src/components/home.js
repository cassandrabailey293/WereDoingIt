import NavigationBar from "./nav-bar";
import { Affix } from "rsuite";
import styled from "styled-components";
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return <div>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You  have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>}
    </div>
}

const Marriage = styled.p`
  text-align: center;
  font-family: fabrizio a sc;
  top: 48%;
  position: relative;
`;

const Date = styled.p`
  text-align: center;
  font-family: fabrizio a sc;
  top: 55%;
  position: relative;
`;

const Main = styled.h1`
  text-align: center;
  font-family: Arcadia;
  top: 50%;
  position: relative;
`;

function Home() {
  return (
    <div className="home-page">
      <Affix>
        <NavigationBar />
          </Affix>
          <Example></Example>
      <Marriage>CELEBRATING THE MARRIAGE OF</Marriage>
      <Main>Cassandra and Andrew</Main>
      <Date>09.03.2022 - PARKER, COLORADO</Date>
    </div>
  );
}

export default Home;

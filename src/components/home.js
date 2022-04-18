import NavigationBar from "./nav-bar";
import { Affix } from "rsuite";
import styled from "styled-components";
import React from "react";

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

function Home(props) {
  return (
    <div className="home-page">
      <Affix>
        <NavigationBar />
      </Affix>
      {/* <div>
        <h1>Device Test!</h1>
        {props.isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {props.isBigScreen && <p>You have a huge screen</p>}
        {props.isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>
          Your are in {props.isPortrait ? "portrait" : "landscape"} orientation
        </p>
        {props.isRetina && <p>You are retina</p>}
      </div> */}
      <Marriage>CELEBRATING THE MARRIAGE OF</Marriage>
      <Main>Cassandra and Andrew</Main>
      <Date>09.03.2022 - PARKER, COLORADO</Date>
    </div>
  );
}

export default Home;

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
  const wrapperClass = props.isDesktopOrLaptop
    ? "home-page-desktop"
    : "home-page-mobile";
  return (
    <div className={wrapperClass}>
      <Affix>
        <NavigationBar {...props} />
      </Affix>
      <Marriage>CELEBRATING THE MARRIAGE OF</Marriage>
      <Main>Cassandra and Andrew</Main>
      <Date>09.03.2022 - PARKER, COLORADO</Date>
    </div>
  );
}

export default Home;

import NavigationBar from "./nav-bar";
import { Affix } from "rsuite";
import styled from "styled-components";
import React from "react";

const Marriage = styled.p`
  text-align: center;
  font-family: fabrizio a sc;
`;

const Date = styled.p`
  text-align: center;
  font-family: fabrizio a sc;
`;

const Main = styled.h1`
  text-align: center;
  font-family: Arcadia;
  padding-top: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
      <Wrapper>
        <Marriage>CELEBRATING THE MARRIAGE OF</Marriage>
        <Main>Cassandra and Andrew</Main>
        <Date>09.03.2022 - PARKER, COLORADO</Date>
      </Wrapper>
    </div>
  );
}

export default Home;

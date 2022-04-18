import NavigationBar from "./nav-bar";
import { Affix } from "rsuite";
import styled from "styled-components";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { assertOptionalCallExpression } from "@babel/types";

const SizeHelper = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      return React.cloneElement(child, {
        isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina,
      });
    }
  );

  return childrenWithProps;
};

export default SizeHelper;

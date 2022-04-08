import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";
import styled from "styled-components";

const Body = styled.div`
  text-align: center;
`;

function Registry() {
  return (
    <Body>
      <ScrollableAnchor id={"Registry"}>
        <h1 className="section-header">Registry</h1>
      </ScrollableAnchor>
      <p>you can find our registry by clivking the zola link below</p>
      <Button size="lg" appearance="ghost">
        ZOLA
      </Button>
    </Body>
  );
}

export default Registry;

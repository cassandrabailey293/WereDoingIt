import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";
import styled from "styled-components";

const Body = styled.div`
  text-align: center;
`;

const Pdiddy = styled.div`
  padding-top: 50px;
`;

function Registry() {
  return (
    <Body>
      <ScrollableAnchor id={"Registry"}>
        <h1 className="section-header">Registry</h1>
      </ScrollableAnchor>
      <Pdiddy>
        you can find our registry by clicking the zola link below (reword?)
      </Pdiddy>
      <Button
        style={{ marginTop: "20px", marginBottom: "50px" }}
        size="lg"
        appearance="ghost"
        onClick={() => {
          window.open("https://www.zola.com/registry/baileyzimmermanwedding");
        }}
      >
        ZOLA
      </Button>
    </Body>
  );
}

export default Registry;

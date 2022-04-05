import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";

function Registry() {
  return (
    <div>
      <ScrollableAnchor id={"Registry"}>
        <h1 className="section-header">Registry</h1>
      </ScrollableAnchor>
      <p>you can find our registry by clivking the zola link below</p>
      <Button size="lg" appearance="ghost">
        ZOLA
      </Button>
    </div>
  );
}

export default Registry;

import ScrollableAnchor from "react-scrollable-anchor";

function Info() {
  return (
    <div className="info-page">
      <ScrollableAnchor id={"Info"}>
        <h1 className="info-header">Info</h1>
      </ScrollableAnchor>
      <div className="test">
        <h1 className="info-header">When</h1>
        <h1 className="info-header">Where</h1>
        <h1 className="info-header">Wear</h1>
      </div>
    </div>
  );
}

export default Info;

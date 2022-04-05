import ScrollableAnchor from "react-scrollable-anchor";

function Info() {
  return (
    <div className="info-page">
      <ScrollableAnchor id={"Info"}>
        <h1 className="info-header">Info</h1>
      </ScrollableAnchor>
      <div className="test">
              <h1 className="info-header">When</h1>
                <p1 className='info-detail'>September 3rd, 2022</p1>
              <h1 className="info-header">Where</h1>
                <p1 className='info-detail'>Ceremony will be held outdoors (weather permitting) in the courtyard, followed by cocktail hour, dinner & reception on the Villa grounds</p1>
                <p1 className='info-detail'>Villa Parker</p1>
                <p1 className='info-detail'>10750 S Pine Dr</p1>
                <p1 className='info-detail'>Parker, Colorado 80138</p1>
              <h1 className="info-header">Wear</h1> 
                 <p1 className='info-detail'>Cocktail attire</p1>
      </div>
    </div>
  );
}

export default Info;

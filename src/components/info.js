import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";
import styled from "styled-components";
import Map from "./map";

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MapWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const DeatilWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

function Info() {
  return (
    <div className="info-page">
      <ScrollableAnchor id={"Info"}>
        <h1 className="section-header">Info</h1>
      </ScrollableAnchor>
      <Columns>
        <DeatilWrapper className="info-detail" style={{ paddingRight: "20px" }}>
          <h1 className="section-header">When</h1>
          <p>September 3rd, 2022</p>
          <p>Please arrive by 4:30 pm</p>
        </DeatilWrapper>
        <DeatilWrapper className="info-detail" style={{ paddingRight: "20px" }}>
          <h1 className="section-header">Where</h1>
          <p>
            Ceremony will be held outdoors (weather permitting) in the
            courtyard, followed by cocktail hour, dinner & reception on the
            Villa grounds
          </p>
          <p>Villa Parker</p>
          <p>10750 S Pine Dr</p>
          <p>Parker, Colorado 80138</p>
        </DeatilWrapper>
        <DeatilWrapper className="info-detail">
          <h1 className="section-header">Wear</h1>
          <p>Cocktail attire and bring your dancing shoes</p>
        </DeatilWrapper>
      </Columns>

      <h2 className="section-header">Accommodations</h2>
      <div>
        <div className="info-detail">
          <h4 className="section-header">
            Denver Marriott South at Park Meadows (recommended)
          </h4>
          <p>10345 Park Meadows Dr, Lone Tree, CO 80124</p>
          <p>(303) 925-0004</p>
          <Button
            onClick={() => {
              window.open(
                "https://www.marriott.com/en-us/hotels/denms-denver-marriott-south-at-park-meadows/overview/"
              );
            }}
            appearance="ghost"
          >
            Hotel
          </Button>
        </div>
        <div className="info-detail">
          <h4 className="section-header">
            SpringHill Suites by Marriott Denver Parker
          </h4>
          <p>9355 Silverado Dr, Parker, CO 80134</p>
          <p>(303) 841 - 6700</p>
          <Button
            onClick={() => {
              window.open(
                "https://www.marriott.com/en-us/hotels/denpk-springhill-suites-denver-parker/overview/"
              );
            }}
            appearance="ghost"
          >
            Hotel
          </Button>
        </div>
        <div className="info-detail">
          <h4 className="section-header">Hampton Inn & Suites Parker</h4>
          <p>19010 Cottonwood Dr, Parker, CO 80138</p>
          <p>(303) 841 - 2977</p>
          <Button
            onClick={() => {
              window.open(
                "https://www.hilton.com/en/hotels/denpahx-hampton-suites-parker/"
              );
            }}
            appearance="ghost"
          >
            Hotel
          </Button>
        </div>
      </div>
      <MapWrapper>
        sfad
        <Map />
      </MapWrapper>
    </div>
  );
}

export default Info;

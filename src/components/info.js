import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20;
`;

function Info() {
  return (
    <div className="info-page">
      <ScrollableAnchor id={"Info"}>
        <h1 className="info-detail section-header">Info</h1>
      </ScrollableAnchor>
      <Columns>
        <div className="info-detail">
          <h1 className="section-header">When</h1>
          <p>September 3rd, 2022</p>
          <p>Please arrive by 4:30 pm</p>
        </div>
        <div className="info-detail">
          <h1 className="section-header">Where</h1>
          <p>
            Ceremony will be held outdoors (weather permitting) in the
            courtyard, followed by cocktail hour, dinner & reception on the
            Villa grounds
          </p>
          <p>Villa Parker</p>
          <p>10750 S Pine Dr</p>
          <p>Parker, Colorado 80138</p>
        </div>
        <div className="info-detail">
          <h1 className="section-header">Wear</h1>
          <p>Cocktail attire and bring your dancing shoes</p>
        </div>
      </Columns>

      <h2 className="info-detail section-header">Accommodations</h2>
      <div>
        <div className="info-detail">
          <h4 className="section-header">
            Denver Marriott South at Park Meadows | recommended
          </h4>
          <p>10345 Park Meadows Dr, Lone Tree, CO 80124</p>
          <p>(303) 925-0004</p>
          <Button
            onClick={() => {
              window.open(
                "https://www.marriott.com/en-us/hotels/denms-denver-marriott-south-at-park-meadows/overview/?gclid=CjwKCAjw0a-SBhBkEiwApljU0ql7hdx47XRTyBucaa9JPMQhww26rk_KCtUnNfgmZPhvjVIciggYVRoC_PEQAvD_BwE&gclsrc=aw.ds"
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
                "https://www.marriott.com/en-us/hotels/denms-denver-marriott-south-at-park-meadows/overview/?gclid=CjwKCAjw0a-SBhBkEiwApljU0ql7hdx47XRTyBucaa9JPMQhww26rk_KCtUnNfgmZPhvjVIciggYVRoC_PEQAvD_BwE&gclsrc=aw.ds"
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
                "https://www.marriott.com/en-us/hotels/denms-denver-marriott-south-at-park-meadows/overview/?gclid=CjwKCAjw0a-SBhBkEiwApljU0ql7hdx47XRTyBucaa9JPMQhww26rk_KCtUnNfgmZPhvjVIciggYVRoC_PEQAvD_BwE&gclsrc=aw.ds"
              );
            }}
            appearance="ghost"
          >
            Hotel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Info;

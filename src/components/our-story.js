import ScrollableAnchor from "react-scrollable-anchor";

function OurStory() {
  return (
    <div>
      <ScrollableAnchor id={"OurStory"}>
        <h1 className="section-header">Our Story</h1>
      </ScrollableAnchor>
      <div className="our-story-details-wrapper">
        <div>
          Colorado was a new adventure for Cassy - when she moved from Virginia
          out West, she had no idea what to expect. Andrew, a "Colorado Native"
          (born & raised in St. Louis, MO), worked for a company called Connexta
          - the connection that drew the two together. The chemistry between
          them only continued to React - and with COVID ravaging the world,
          Andrew and Cass found light and love within each others' company
          (after all, we couldn't go anywhere or do much at the beginning!).
          Needless to say, they fell deeply in love and bought a house together
          in April of 2021. They now live there with their two cats, Otto and
          Piper (Rest in Peace Ezio, 2/4/22). They invite & welcome you in
          celebration of their union and their happily ever after (heart
          unicode){" "}
        </div>
        {/*put the pic here*/}
      </div>
    </div>
  );
}

//class OurStoryDetails extends React.Component {
//    render() {
//        return <h1>OUR STORY DEETS</h1>;
// this is so that we can use responsive react for different screen sizes..potentially
//    }
//}

export default OurStory;

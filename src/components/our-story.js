import ScrollableAnchor from "react-scrollable-anchor";
import ourStoryCollage from '../img/ourstory_collage.png';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import React from 'react'

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
              {OurStoryDetails}
              <img src={ourStoryCollage} alt="we so cute"></img>
      </div>
    </div>
  );
}

class OurStoryDetails extends React.Component {
    //isDesktopOrLaptop = useMediaQuery({
    //    query: '(min-width: 1224px)'
    //})
    //isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    //isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    //isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    //isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    render() {
        //<h1>Device Test!</h1>
        //{ isDesktopOrLaptop && <p>You are a desktop or laptop</p> }
        //{ isBigScreen && <p>You  have a huge screen</p> }
        //{ isTabletOrMobile && <p>You are a tablet or mobile phone</p> }
        //<p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        //{ isRetina && <p>You are retina</p> }
        return <img src={ourStoryCollage} alt="we so cute"></img> //why doesnt this work
    }
}

export default OurStory;

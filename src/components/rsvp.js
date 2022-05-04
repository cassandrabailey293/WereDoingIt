import ScrollableAnchor from "react-scrollable-anchor";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Modal,
  List,
  Icon,
  Notification,
  Tooltip,
  Whisper,
  Message,
} from "rsuite";
import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0hcB_NxD7vCDFslxDDq_19b8wNEsxCQ",
  authDomain: "wedding-site-7d128.firebaseapp.com",
  projectId: "wedding-site-7d128",
  storageBucket: "wedding-site-7d128.appspot.com",
  messagingSenderId: "446321917636",
  appId: "1:446321917636:web:d01f09b1f711365ff91391",
  measurementId: "G-KFXW5NV2HK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const acceptedMessage = "We look forward to celebrating with you!";
const rejectedMessage =
  "Sorry to miss you - hope that we can celebrate together in the future!";

var db = getFirestore(app);

const BEEF = "Beef";
const VEG = "Vegetarian";

const DesktopBody = styled.div`
  text-align: center;
  width: 33vw;
  margin: auto;
`;

const MobileBody = styled.div`
  text-align: center;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const NotificationContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: inherit;
`;

const buttonStyle = {
  color: "black",
  border: "1px solid black",
};

const tooltip = (
  <Tooltip>
    Due to size constraints of the venue, we are limiting RSVPs to only guests
    that were addressed on the invitations. Thank you.
  </Tooltip>
);

let rsvpMessage = false;

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainGuest: {
        name: "",
        email: "",
        rsvp: null,
        mealChoice: "",
      },
      additionalGuestList: [],
      additionalGuest: {
        name: "",
        mealChoice: "",
      },
      showModal: false,
      showNotification: false,
    };
  }
  onNotificationHide = () => {
    this.setState({ showNotification: false });
  };
  close = () => {
    this.setState({ showModal: false });
    this.inputElement.close();
    rsvpMessage = false;
  };
  open = () => {
    this.setState({ showModal: true });
  };
  submit = () => {
    let flatGuestList = this.state.additionalGuestList.map((guest) => {
      guest.email = this.state.mainGuest.email;
      guest.rsvp = this.state.mainGuest.rsvp;
      return guest;
    });
    flatGuestList.push(this.state.mainGuest);
    const groupID = uuidv4();
    flatGuestList.forEach((e) => {
      e.groupID = groupID;
      e.date = new Date().toUTCString();
      const message = e.rsvp ? acceptedMessage : rejectedMessage;
      addDoc(collection(db, "guestList"), e).then(() => {
        Notification.open({
          title: "You successfully RSVP'ed!",
          description: message,
        });
        this.setState({ showNotification: true });
      });
    });
  };
  render() {
    const {
      mainGuest,
      additionalGuestList,
      additionalGuest,
      showModal,
      showNotification,
    } = this.state;
    const Body = this.props.isDesktopOrLaptop ? DesktopBody : MobileBody;
    const backgroundClass = this.props.isDesktopOrLaptop
      ? "rsvp-page"
      : "rsvp-page rsvp-page-mobile";
    return (
      <Wrapper className={backgroundClass}>
        <div>
          <ScrollableAnchor id={"RSVP"}>
            <h1 className="section-header grey-header">RSVP</h1>
          </ScrollableAnchor>
          <Body>
            <Form
              fluid
              style={{ textAlign: "left" }}
              onChange={(mainGuest) => {
                this.setState({ mainGuest });
              }}
              formValue={mainGuest}
            >
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl name="email" type="email" />
              </FormGroup>
              <FormGroup controlId="rsvp">
                <ControlLabel>Are you attending?</ControlLabel>
                <select
                  onChange={(value) => {
                    mainGuest.rsvp = value.target.value === "true";
                    this.setState({ mainGuest });
                  }}
                  style={{
                    width: "100%",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    borderRadius: "6px",
                  }}
                >
                  <option style={{ display: "none" }} selected>
                    Select
                  </option>
                  <option value={true}>Accepts with Joy</option>
                  <option value={false}>Will Celebrate from Afar</option>
                </select>
              </FormGroup>
              <FormGroup controlId="mealChoice">
                <ControlLabel>Dinner Choice</ControlLabel>
                <select
                  onChange={(value) => {
                    mainGuest.mealChoice = value.target.value;
                    this.setState({ mainGuest });
                  }}
                  style={{
                    width: "100%",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    borderRadius: "6px",
                  }}
                >
                  <option style={{ display: "none" }} selected>
                    Select
                  </option>
                  <option value={VEG}>
                    Stuffed Portobello Mushroom (vegetarian)
                  </option>
                  <option value={BEEF}>Beef Tenderloin</option>
                </select>
              </FormGroup>

              {additionalGuestList.length === 0 ? null : (
                <div style={{ marginBottom: "24px" }}>
                  <List bordered hover>
                    {additionalGuestList.map((item, index) => (
                      <List.Item key={index} index={index}>
                        {item.name} - {item.mealChoice}
                        <Icon
                          className="delete-icon"
                          icon="trash"
                          size="lg"
                          onClick={() => {
                            const index = additionalGuestList.indexOf(item);
                            if (index > -1) {
                              additionalGuestList.splice(index, 1);
                            }
                            this.setState({ additionalGuestList });
                          }}
                        />
                      </List.Item>
                    ))}
                  </List>
                </div>
              )}

              <FormGroup>
                <ButtonToolbar>
                  <Button
                    disabled={this.state.mainGuest.rsvp == null}
                    onClick={this.submit}
                    appearance="ghost"
                    style={buttonStyle}
                  >
                    RSVP
                  </Button>
                  <Button
                    onClick={this.open}
                    appearance="ghost"
                    style={buttonStyle}
                  >
                    Add Additional Guest
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Body>
        </div>
        <Modal
          show={showModal}
          onHide={this.close}
          onEntered={() => {
            if (this.inputElement) {
              this.inputElement.open();
              rsvpMessage = true;
            }
          }}
          size="xs"
          style={{ top: "20%" }}
        >
          <Modal.Header>
            <Modal.Title style={{ display: "inline", paddingRight: "10px" }}>
              Additional Guest
            </Modal.Title>
            <Whisper
              placement="right"
              trigger="none"
              speaker={tooltip}
              ref={(Whisper) => {
                this.inputElement = Whisper;
              }}
            >
              <Icon
                icon="info"
                onClick={() => {
                  if (this.inputElement) {
                    if (rsvpMessage) {
                      this.inputElement.close();
                      rsvpMessage = false;
                    } else {
                      this.inputElement.open();
                      rsvpMessage = true;
                    }
                  }
                }}
              />
            </Whisper>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              formValue={additionalGuest}
              onChange={(additionalGuest) => {
                this.setState({ additionalGuest });
              }}
            >
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
              <FormGroup controlId="mealChoice">
                <ControlLabel>Dinner Choice</ControlLabel>
                <select
                  onChange={(value) => {
                    additionalGuest.mealChoice = value.target.value;
                    this.setState({ additionalGuest });
                  }}
                  style={{
                    width: "100%",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    borderRadius: "6px",
                  }}
                >
                  <option style={{ display: "none" }} selected>
                    Select
                  </option>
                  <option value={VEG}>
                    Stuffed Portobello Mushroom (vegetarian)
                  </option>
                  <option value={BEEF}>Beef Tenderloin</option>
                </select>
              </FormGroup>
            </Form>
            {/* <Message
              type="warning"
              description="Due to size constraints of the venue, we are limiting RSVPs to only guests
    that were addressed on the invitations. Thank you."
            /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                additionalGuestList.push(additionalGuest);
                this.setState({
                  additionalGuestList,
                  additionalGuest: {
                    name: "",
                    mealChoice: "",
                  },
                });
                this.close();
              }}
              appearance="primary"
            >
              Confirm
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Wrapper>
    );
  }
}

export default RSVP;

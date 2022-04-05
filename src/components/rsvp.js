import ScrollableAnchor from "react-scrollable-anchor";
import { v4 as uuidv4 } from 'uuid';
import {
  Form,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  Modal,
  List,
  Icon,
} from "rsuite";
import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
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
    measurementId: "G-KFXW5NV2HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getFirestore(app);

const BEEF = "Beef";
const VEG = "Vegetarian";
class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainGuest: {
        name: "",
        email: "",
        rsvp: "",
        mealChoice: "",
      },
      additionalGuestList: [],
      additionalGuest: {
        name: "",
        mealChoice: "",
      },
      show: false,
    };
  }
  close = () => {
    this.setState({ show: false });
  };
  open = () => {
    this.setState({ show: true });
  };
    submit = () => {
        let flatGuestList = this.state.additionalGuestList.map((guest) => {
            guest.email = this.state.mainGuest.email
            guest.rsvp = this.state.mainGuest.rsvp
            return guest
        });
        flatGuestList.push(this.state.mainGuest)
        const groupID = uuidv4();
        flatGuestList.forEach((e) => {
            e.groupID = groupID
            addDoc(collection(db, "guestList"), e)
        })
    console.log(this.state);
  };
  render() {
    const { mainGuest, additionalGuestList, additionalGuest, show } =
      this.state;
    return (
      <div>
        <ScrollableAnchor id={"RSVP"}>
          <h1 className="rsvp-header">RSVP</h1>
        </ScrollableAnchor>
        <div className="rsvp-body">
          <Form
            fluid
            className="rsvp-form"
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
              <RadioGroup
                onChange={(value) => {
                  mainGuest.rsvp = value;
                  this.setState({ mainGuest });
                }}
                name="rsvp"
              >
                <Radio value="accepted">Accepts with Joy</Radio>
                <Radio value="declined">Will Celebrate from Afar</Radio>
              </RadioGroup>
            </FormGroup>
            {mainGuest.rsvp === "accepted" ? (
              <FormGroup controlId="mealChoice">
                <RadioGroup
                  onChange={(value) => {
                    mainGuest.mealChoice = value;
                    this.setState({ mainGuest });
                  }}
                  name="mealChoice"
                >
                  <p>Dinner Choice</p>
                  <Radio value={VEG}>
                    Stuffed Portobello Mushroom (vegetarian)
                  </Radio>
                  <Radio value={BEEF}>Beef Tenderlion</Radio>
                </RadioGroup>
              </FormGroup>
            ) : null}
            {additionalGuestList.length === 0 ? null : (
              <div className="guest-list">
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
                          console.log(index, additionalGuestList, item);
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
            {mainGuest.rsvp === "accepted" ? (
              <FormGroup>
                <ButtonToolbar>
                  <Button onClick={this.submit} appearance="ghost">
                    RSVP
                  </Button>
                  <Button onClick={this.open} appearance="ghost">
                    Add Additional Guest
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            ) : mainGuest.rsvp === "declined" ? (
              <FormGroup>
                <ButtonToolbar>
                  <Button onClick={this.submit} appearance="ghost">
                    RSVP
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            ) : null}
          </Form>
        </div>
        <Modal show={show} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title>Additional Guest</Modal.Title>
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
                <RadioGroup
                  onChange={(value) => {
                    additionalGuest.mealChoice = value;
                    this.setState({ additionalGuest });
                  }}
                  name="mealChoice"
                >
                  <p>Dinner Choice</p>
                  <Radio value={VEG}>
                    Stuffed Portobello Mushroom (vegetarian)
                  </Radio>
                  <Radio value={BEEF}>Beef Tenderlion</Radio>
                </RadioGroup>
              </FormGroup>
            </Form>
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
                console.log(this.state);
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
      </div>
    );
  }
}

export default RSVP;

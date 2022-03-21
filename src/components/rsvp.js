import ScrollableAnchor from "react-scrollable-anchor";
import {
  Form,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Radio,
  RadioGroup,
} from "rsuite";
import React from "react";

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: "",
        email: "",
        rsvp: "",
        mealChoice: "",
      },
    };
  }
  render() {
    const { formValue } = this.state;
    return (
      <div>
        <ScrollableAnchor id={"RSVP"}>
          <h1 className="rsvp-header">RSVP</h1>
        </ScrollableAnchor>
        <div className="rsvp-body">
          <Form
            fluid
            className="rsvp-form"
            onChange={(formValue) => {
              console.log("here", this.state);
              this.setState({ formValue });
            }}
            formValue={formValue}
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
                  formValue.rsvp = value;
                  this.setState({ formValue });
                }}
                name="rsvp"
              >
                <Radio value="accepted">Accepts with Joy</Radio>
                <Radio value="declined">Will Celebrate from Afar</Radio>
              </RadioGroup>
            </FormGroup>
            {formValue.rsvp === "accepted" ? (
              <FormGroup controlId="mealChoice">
                <RadioGroup name="mealChoice">
                  <p>Dinner Choice</p>
                  <Radio value="vegetarian">
                    Stuffed Portobello Mushroom (vegetarian)
                  </Radio>
                  <Radio value="beef">Beef Tenderlion</Radio>
                </RadioGroup>
              </FormGroup>
            ) : null}
            {formValue.rsvp === "accepted" ? (
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="ghost">RSVP</Button>
                  <Button appearance="ghost">Add Additional Guest</Button>
                </ButtonToolbar>
              </FormGroup>
            ) : null}
          </Form>
        </div>
      </div>
    );
  }
}

export default RSVP;

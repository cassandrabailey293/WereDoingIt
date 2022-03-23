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
  Modal,
  List,
  Icon,
} from "rsuite";

function Registry() {
  return (
    <div>
      <ScrollableAnchor id={"Registry"}>
        <h1 className="contact-header">Registry</h1>
      </ScrollableAnchor>
      <Button size="lg" block appearance="ghost">
        ZOLA
      </Button>
    </div>
  );
}

export default Registry;

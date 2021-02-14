import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import "./style/contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1>CONTACT</h1>
      <hr className="line-section" />
      <hr className="line-section" />
      <h5>Please tell us about your next projects</h5>

      <Container>
        <Form className="contactus">
          <FormGroup>
            <p>
              <Input className="FormInput" type="text" placeholder="Name" />
            </p>
            <p>
              <Input className="FormInput" type="text" placeholder="Email" />
            </p>

            <p>
              <Input className="FormInput" type="text" placeholder="Message" />
            </p>
            <Button color="info" className="btn-send" block>
              Send
            </Button>
          </FormGroup>
        </Form>
      </Container>
      <a href="#contact" class="btn btn-block btn-full-width">
        Let's Discuss !
      </a>
    </div>
  );
}
export default Contact;

import React, { Component } from "react";
import "./Footer.scss";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-bytesize/location";
import telephoneIcon from "@iconify/icons-bytesize/telephone";
import gmailIcon from "@iconify/icons-mdi/gmail";
import * as emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/BarLoader";
import { Button, Modal, Image } from "react-bootstrap";

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      loading: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({ name: "" });
    this.resetForm();
  }

  handleShow() {
    this.setState({ show: true, loading: false });
  }

  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    show: false,
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const { email, subject, message } = this.state;

    let templateParams = {
      from_name: `${this.state.name} - ${email}`,
      to_name: "Pawanraje Kadam",
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        "service_kardf7s",
        "template_guvlq18",
        templateParams,
        "lowl81d6CpQmUrQF5"
      )
      .then(
        (result) => {
          this.handleShow();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  resetForm() {
    this.setState({
      email: "",
      subject: "",
      message: "",
      modal: false,
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span className="so">
            <span key={network.name} className="m-4">
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <i className={network.class}></i>
              </a>
            </span>
          </span>
        );
      });
    }

    return (
      <footer id="contact">
        <div className="col-md-12">
          <div>
            <div className="overlay-mf"></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="contact-mf">
                    <div className="box-shadow-full">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="title-box-2">
                            <h5 className="title-left">Send A Message</h5>
                            <div className="underline"></div>
                          </div>
                          <div>
                            <form
                              className="contactForm"
                              onSubmit={this.handleSubmit.bind(this)}
                            >
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      name="name"
                                      // className="form-control"
                                      id="name"
                                      placeholder="Your Name"
                                      data-rule="minlen:4"
                                      data-msg="Please enter at least 4 chars"
                                      value={this.state.name}
                                      onChange={this.handleChange.bind(
                                        this,
                                        "name"
                                      )}
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      // className="form-control"
                                      name="email"
                                      id="email"
                                      placeholder="Your Email"
                                      data-rule="email"
                                      data-msg="Please enter a valid email"
                                      value={this.state.email}
                                      onChange={this.handleChange.bind(
                                        this,
                                        "email"
                                      )}
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      // className="form-control"
                                      name="subject"
                                      id="subject"
                                      placeholder="Subject"
                                      data-rule="minlen:4"
                                      data-msg="Please enter at least 8 chars of subject"
                                      value={this.state.subject}
                                      onChange={this.handleChange.bind(
                                        this,
                                        "subject"
                                      )}
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <textarea
                                      // className="form-control"
                                      id="message"
                                      name="message"
                                      rows="5"
                                      data-rule="required"
                                      data-msg="Please write something for us"
                                      placeholder="Message"
                                      value={this.state.message}
                                      onChange={this.handleChange.bind(
                                        this,
                                        "message"
                                      )}
                                    ></textarea>
                                    <div className="validation"> </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <button
                                    type="submit"
                                    className="button button-a button-big button-rounded"
                                  >
                                    Send Message
                                    <ClipLoader
                                      size={5} // or 150px
                                      color={"#ffffff"}
                                      loading={this.state.loading}
                                    />
                                  </button>
                                  <Modal
                                    size="md"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    show={this.state.show}
                                    onHide={this.handleClose}
                                    centered
                                  >
                                    <Modal.Body className="contact_success_modal_body">
                                      <Image
                                        className="contact_success_modal_img"
                                        src="https://www.clipartmax.com/png/small/301-3011315_icon-check-green-tick-transparent-background.png"
                                        style={{ width: "15%" }}
                                      />
                                      <h4>
                                        Thank you{" "}
                                        <span>
                                          <strong>{this.state.name}</strong>!!
                                        </span>{" "}
                                        😇
                                      </h4>
                                      <h5>
                                        You have successfully registered your
                                        message. We will get in touch with you
                                        shortly.
                                      </h5>
                                      <br />
                                      <Button
                                        variant="outline-dark"
                                        size="lg"
                                        onClick={this.handleClose}
                                        className="contact-email-text-btn"
                                      >
                                        Close
                                      </Button>
                                    </Modal.Body>
                                  </Modal>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="title-box-2 pt-4 pt-md-0">
                            <h5 className="title-left">Get in Touch</h5>
                            <div className="underline"></div>
                          </div>
                          <div className="more-info">
                            <p id="lead">
                              Whether you want to get in touch, talk about a
                              project collaboration, or just say hi, I'd love to
                              hear from you.
                              <br />
                              Simply fill the from and send me an email.
                            </p>
                            <div className="social-links">{networks}</div>
                            <div className="address">
                              <div>
                                <Icon icon={locationIcon} />
                                Pune, Maharastra, 411012
                              </div>
                              <div>
                                <Icon icon={telephoneIcon} /> +91-9075565252
                              </div>
                              <div>
                                <Icon icon={gmailIcon} />{" "}
                                pawanrajkadam@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-4 text-center">
          <div className="container" style={{ width: "13%" }}>
            <small>
              Copyright &copy;{" "}
              {this.props.sharedBasicInfo
                ? this.props.sharedBasicInfo.name
                : "???"}
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

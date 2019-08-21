import React, { Component } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import  {register}  from "../../redux/actions/RegisterForEventAction";
import validate from "../../utilities/validation";
import { Row, Col } from "../layout/grid";


class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        val: "",
        valid: false,
        validationRules: {
          notEmpty: true,
        },
        touched: false,
        errors: []
      },
      lastName: {
        val: "",
        valid: false,
        validationRules: {
          notEmpty: true,
          minLength: 6
        },
        touched: false,
        errors: []
      },
      email: {
        val: "",
        valid: false,
        validationRules: {
          notEmpty: true,
          isEmail: true,
        },
        touched: false,
        errors: []
      },
      eventDate: {
        val: "",
        valid: false,
        validationRules: {
          notEmpty: true,
        },
        touched: false,
        errors: []
      },
      canSubmit: false,
      submitted: false,
      showSuccessMessage: false
    }
  }

  handleChange = e => {
    e.persist();
    const name = e.target.name
    const value = e.target.value

    const { validationRules } = this.state[name];
    const validationResult = {};

    validationResult.isValid = validate(value, validationRules).isValid;
    validationResult.errors = validate(value, validationRules).errors;

    this.setState(prevState => {
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          val: value,
          valid: validationResult.isValid ? validationResult.isValid : false,
          touched: true,
          errors: validationResult.errors ? validationResult.errors : []
        }
      };
    }, () => {
      const { firstName, lastName, email, eventDate } = this.state;
      const canSubmit = Boolean(firstName.val) && Boolean(lastName.val) && Boolean(email.val) && Boolean(eventDate.val);
      this.setState({
        canSubmit: canSubmit
      })
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, eventDate } = this.state;

    if (firstName.valid && lastName.valid && email.valid && eventDate.valid) {
      this.clearInputs();
      this.props.register({firstName: firstName.val, lastName: lastName.val} );
    }

    this.setState({
      submitted: true,
    })
  }


  clearInputs = () => {
    for (const key in this.state) {
      if (typeof this.state[key] === "object") {
        this.setState(prevState => {
          return {
            ...prevState,
            [key]: {
              ...prevState[key],
              val: "",
              valid: false,
              touched: false,
              errors: []
            }
          };
        })
      }
    }
  }

  createInputClass = (input) => {
    const { submitted } = this.state
    const validationClass = classNames({
      "form-control": true,
      "is-valid": submitted && input.touched && input.valid,
      "is-invalid": submitted && input.touched && !input.valid
    });
    return validationClass
  }


  render() {
    const { firstName, lastName, email, eventDate, canSubmit } = this.state;

    const firstNameClass = this.createInputClass(firstName);
    const lastNameClass = this.createInputClass(lastName);
    const emailClass = this.createInputClass(email);
    const eventDateClass = this.createInputClass(eventDate);

    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit} noValidate>
            <Row>
              <Col>
                <div className="form-group">
                  <label htmlFor="firstName">First name{this.props.loading ? "tak": "nie"}</label>
                  <input type="text"
                    value={firstName.val}
                    onChange={this.handleChange}
                    className={firstNameClass}
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    required
                  />
                  <div className="valid-feedback">
                    This field is required
                  </div>
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="last_name">Last name</label>
                  <input type="text"
                    value={lastName.val}
                    onChange={this.handleChange}
                    className={lastNameClass}
                    id="last_name"
                    name="lastName"
                    placeholder="Last name"
                    required
                  />
                  <div className="invalid-feedback">
                    This field is required
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email"
                    value={email.val}
                    onChange={this.handleChange}
                    className={emailClass}
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <div className="invalid-feedback">
                    Email address is invalid
                  </div>
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="event_date">Event date</label>
                  <input type="date"
                    value={eventDate.val}
                    onChange={this.handleChange}
                    className={eventDateClass}
                    id="event_date"
                    name="eventDate"
                    placeholder="Event"
                  />

                  <div className="invalid-feedback">
                    Event date is required
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <button type="submit" disabled={!canSubmit} className="btn btn-primary btn-block">Submit</button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.RegisterForEventReducer.loading
  }
}

export default connect(mapStateToProps,{ register })(EventForm);
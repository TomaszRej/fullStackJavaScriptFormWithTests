import React, {Component} from "react";
import {Row, Col} from '../layout/grid';


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

    }
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target.name]: {
          ...prevState[e.target.name],
          val: e.target.value,
          // valid: validationResult.isValid ? validationResult.isValid : false,
          touched: true,
          //errors: validationResult.errors ? validationResult.errors : []

        }
      };
    });


  };


  handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, eventDate} = this.state;

    console.log(firstName.val, lastName.val, email.val, eventDate.val)
  };


  render() {
    const {firstName, lastName, email, eventDate} = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit} noValidate>
            <Row>
              <Col>
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text"
                         value={firstName.val}
                         onChange={this.handleChange}
                         className="form-control is-valid"
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
                         className="form-control is-invalid"
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
                         className="form-control is-invalid"
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
                         className="form-control is-invalid"
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
                <button type="submit" disabled={false} className="btn btn-primary btn-block">Submit</button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

export default EventForm;
const server = require("../server");
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();


chai.use(chaiHttp);

describe('/registerForEvent', () => {
  it('should not POST an event without email field', (done) => {
    let event = {
      firstName: "firstNameTest",
      lastName: "lastNameTest",
      eventDate: "2019-08-08"
    };
    chai.request(server)
      .post('/registerForEvent/')
      .send(event)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').eql('"email" is required');
        done();
      });
  });
  
  it('should not POST an event with invalid email field', (done) => {
    let event = {
      firstName: "firstNameTest",
      lastName: "lastNameTest",
      email: "test.test",
      eventDate: "2019-08-08"
    };
    chai.request(server)
      .post('/registerForEvent/')
      .send(event)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').eql('"email" must be a valid email');
        done();
      });
  });


  it('it should POST an event', (done) => {
    let event = {
      firstName: "firstNameTest",
      lastName: "lastNameTest",
      email: "test@test.com",
      eventDate: "2019-10-10"
    };
    chai.request(server)
      .post('/registerForEvent/')
      .send(event)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Event created!');
        res.body.event.should.have.property('firstName');
        res.body.event.should.have.property('lastName');
        res.body.event.should.have.property('email');
        res.body.event.should.have.property('eventDate');
        done();
      });
  });
});



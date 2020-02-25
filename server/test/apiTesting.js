process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let plugin = require('../src/models/plugin');
let User = require('../src/models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/index');
let should = chai.should();
var token = null;

chai.use(chaiHttp);
describe('Users', () => {
    before((done) => { //Before each test we empty the database
        User.remove({}, (err) => { 
           done();           
    });        
    });
    
    describe('/POST register', () => {
        it('it should register a user', (done) => {
            let user = {
                "name": "test",
                "email": "mm@test.com",
                "password": "test"
            }
          chai.request(server)
              .post('/api/users/register')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('user');
                    res.body.user.should.have.property('name');
                    res.body.user.should.have.property('email');
                done();
              });
        });
    });
    describe('/POST login', () => {
        it('it should Not login a user', (done) => {
            let user = {
                "email": "mm@test.com",
                "password": "test"
            }
          chai.request(server)
              .post('/api/users/login')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(403);
                    
                done();
              });
        });
    });
    describe('/POST login', () => {
        it('it should login a user', (done) => {
            let user = {
                "email": "mm@test.com",
                "password": "test"
            }
          chai.request(server)
              .post('/api/users/login')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('user');
                    res.body.user.should.have.property('name');
                    res.body.user.should.have.property('email');
                    
                done();
                token = res.body.user.token;
              });
        });
    });
});
describe('Plugins', () => {
    beforeEach((done) => { //Before each test we empty the database
        plugin.remove({}, (err) => { 
           done();           
    });        
    });

    describe('/GET plugin', () => {
        it('it should GET all the plugins', (done) => {
          chai.request(server)
              .get('/api/plugins')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                done();
              });
        });
    });
    

});
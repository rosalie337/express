const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

describe('organization routes', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('creates an user via POST', () => {
    return request(app)
      .post('/api/v1/user')
      .send({
        name: 'Student',
        password: '12345',
        phoneType: 'mobile',
        phoneNumber: 5035555555,
        image: 'some.string'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Student',
          password: '12345',
          phoneType: 'mobile',
          phoneNumber: 5035555555,
          image: 'some.string',
          __v: 0
        });
      });
  });
  it('it gets a user by id via GET', () => {
    return User.create({
      name: 'Student',
      password: '12345',
      phoneType: 'mobile',
      phoneNumber: 5035555555,
      image: 'some.string'
    })
      .then(() => request(app).get('/api/v1/user'))
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.anything(),
          name: 'Student',
          password: '12345',
          phoneType: 'mobile',
          phoneNumber: 5035555555,
          image: 'some.string',
          __v: 0
        }]);
      });
  });
  it('it updates a user via PATCH', () => {
    return User.create({
      name: 'Student',
      password: '12345',
      phoneType: 'mobile',
      phoneNumber: 5035555555,
      image: 'some.string',
    })
      .then(user => {
        return request(app)
          .patch(`/api/v1/user/${user._id}`)
          .send({ name: 'Teacher',
            phoneNumber: 9715555555 });
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Teacher',
          password: '12345',
          phoneType: 'mobile',
          phoneNumber: 9715555555,
          image: 'some.string',
          __v: 0
        });
      });
  });
  it('it deletes a user via DELETE', () => {
    return User.create({
      name: 'Student',
      password: '12345',
      phoneType: 'mobile',
      phoneNumber: 5035555555,
      image: 'some.string',
    })
      .then(user => request(app).delete(`/api/v1/user/${user._id}`))
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Student',
          password: '12345',
          phoneType: 'mobile',
          phoneNumber: 5035555555,
          image: 'some.string',
          __v: 0
        });
      });
  });
});

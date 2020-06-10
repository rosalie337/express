const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');
const Organization = require('../lib/models/Organization');

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

  it('creates an organization via POST', () => {
    return request(app)
      .post('/api/v1/organization')
      .send({
        name: 'Alchemy',
        description: 'software development school',
        imageUrl: 'url'  
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Alchemy',
          description: 'software development school',
          imageUrl:'url',
          __v: 0
        });
      });
  });

  it('it gets all organizations via GET', () => {
    return Organization.create({
      name: 'Alchemy',
      description: 'software development school',
      imageUrl: 'url'
    })
      .then(() => request(app).get('/api/v1/organization'))
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.anything(),
          name: 'Alchemy',
          description: 'software development school',
          imageUrl: 'url',
          __v: 0,
        
        }]);
      });
  });
});

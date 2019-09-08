const request = require('supertest');
const app = require('../app');

const AirportsModel = require('../components/airports/airport.model');


describe('GET /airports', () => {

  it('should return data with default pagination', async done => {
    const res = await request(app).get('/api/airports');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(20);
    expect(res.body.page).toBe(1);
    expect(res.body.itemsPerPage).toBe(20);
    done();
  });

  it('should return 30 rows', async done => {
    const res = await request(app).get('/api/airports?itemsPerPage=30');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(30);
    expect(res.body.page).toBe(1);
    expect(res.body.itemsPerPage).toBe(30);
    done();
  });

  it('should return 30 rows starting from 3 page', async done => {
    const res = await request(app).get('/api/airports?itemsPerPage=30&page=3');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(30);
    expect(res.body.page).toBe(3);
    expect(res.body.itemsPerPage).toBe(30);
    done();
  });

  it('should return 20 rows with "Canada" country value', async done => {
    const res = await request(app).get('/api/airports?query=Canada');
    expect(res.body.data.length).toBe(20);
    expect(res.body.data.every(airport => airport.country === 'Canada')).toBe(true);
    done();
  });

  it('should return error if db connection failed', async done => {
    const spy = jest.spyOn(AirportsModel, 'findAndCountAll');
    spy.mockImplementationOnce(() => {
      throw new Error();
    });

    const res = await request(app).get('/api/airports');
    expect(res.status).toBe(500);
    done();
  });
});

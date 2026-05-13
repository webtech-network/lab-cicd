const request = require('supertest');

jest.mock('../src/userService');
const { getUsers } = require('../src/userService');

const app = require('../src/app');

describe('API Status', () => {
  it('Deve retornar 200 na rota de status', async () => {
    const response = await request(app).get('/status');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('API Online e CI/CD configurado!');
  });
});
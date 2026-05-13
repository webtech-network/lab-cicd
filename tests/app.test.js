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

describe('GET /users', () => {
  it('Deve retornar lista de usuários', async () => {
    getUsers.mockResolvedValue([{ id: 1, name: 'Alice', email: 'alice@example.com' }]);

    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);
    expect(response.body[0].name).toBe('Alice');
    expect(response.body[0].email).toBe('alice@example.com');
    expect(response.body[0].endereco).toBe('teste');
  });

  it('Deve retornar lista vazia quando não há usuários', async () => {
    getUsers.mockResolvedValue([]);

    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});
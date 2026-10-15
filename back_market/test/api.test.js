
const request = require('supertest');

// Simulamos PostgreSQL para no modificar datos reales.
jest.mock('../src/config/db', () => ({
  query: jest.fn(),
}));

const app = require('../src/app');
const pool = require('../src/config/db');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Pruebas API REST - Vel-Art Marketplace', () => {

  // PRUEBA 1: Obtener publicaciones
  test('GET /posts devuelve 200', async () => {
    pool.query.mockResolvedValueOnce({
      rows: [
        { id: 1, title: 'Vela de vainilla', price: 7500 }
      ]
    });

    const respuesta = await request(app).get('/posts');

    expect(respuesta.status).toBe(200);
    expect(respuesta.body).toHaveLength(1);
  });

  // PRUEBA 2: Publicación inexistente
  test('GET /posts/999 devuelve 404', async () => {
    pool.query.mockResolvedValueOnce({ rows: [] });

    const respuesta = await request(app).get('/posts/999');

    expect(respuesta.status).toBe(404);
    expect(respuesta.body.message)
      .toBe('Publicación no encontrada');
  });

  // PRUEBA 3: Registro incompleto
  test('POST /users devuelve 400', async () => {
    const respuesta = await request(app)
      .post('/users')
      .send({ name: 'Usuario Prueba' });

    expect(respuesta.status).toBe(400);
  });

  // PRUEBA 4: Login incorrecto
  test('POST /login devuelve 401', async () => {
    pool.query.mockResolvedValueOnce({ rows: [] });

    const respuesta = await request(app)
      .post('/login')
      .send({
        email: 'noexiste@example.com',
        password: 'incorrecta'
      });

    expect(respuesta.status).toBe(401);
  });

  // PRUEBA 5: Perfil sin token
  test('GET /users/me devuelve 401', async () => {
    const respuesta = await request(app)
      .get('/users/me');

    expect(respuesta.status).toBe(401);
  });

  // PRUEBA 6: Crear publicación sin token
  test('POST /posts devuelve 401', async () => {
    const respuesta = await request(app)
      .post('/posts')
      .send({
        title: 'Vela nueva',
        description: 'Vela artesanal',
        price: 8000
      });

    expect(respuesta.status).toBe(401);
  });

  // PRUEBA 7: Favoritos sin token
  test('GET /favorites devuelve 401', async () => {
    const respuesta = await request(app)
      .get('/favorites');

    expect(respuesta.status).toBe(401);
  });

});

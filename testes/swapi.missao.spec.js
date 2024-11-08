const request = require('supertest');

test('Deve retornar erro 404 ao buscar por uma missão inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/missoes/9999');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});

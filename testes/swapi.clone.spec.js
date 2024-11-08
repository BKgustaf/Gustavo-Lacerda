const request = require('supertest');

test('Deve retornar erro 404 ao buscar por um clone inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/clones/9999');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});
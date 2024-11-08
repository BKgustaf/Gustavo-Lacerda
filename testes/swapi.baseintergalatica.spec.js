const request = require('supertest');

test('Deve retornar erro 404 ao buscar por uma base intergaláctica inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/bases/43');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});

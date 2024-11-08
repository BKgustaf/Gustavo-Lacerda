const request = require('supertest');

test('Deve retornar erro 404 ao buscar por uma arma galáctica inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/armas/1');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});

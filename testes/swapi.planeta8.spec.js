const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pelo planeta 8 (Naboo)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/8/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Naboo');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/3/');

    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.residents[0]).toBe('https://swapi.dev/api/people/3/');
});

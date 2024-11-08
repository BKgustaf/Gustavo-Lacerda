const request = require('supertest');

test('Deve visualizar informações da espécie Rodian', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/4/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Rodian');
    expect(resposta.body.classification).toBe('sentient');
    expect(resposta.body.designation).toBe('reptilian');
    expect(resposta.body.average_height).toBe('170');
    expect(resposta.body.skin_colors).toBe('green, blue');
    expect(resposta.body.hair_colors).toBe('n/a');
    expect(resposta.body.eye_colors).toBe('black');
    expect(resposta.body.average_lifespan).toBe('unknown');
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/23/');
    expect(resposta.body.language).toBe('Galatic Basic');

    expect(resposta.body.people).toBeDefined();
    expect(resposta.body.people.length).toBeGreaterThan(0);
    expect(resposta.body.people[0]).toBe('https://swapi.dev/api/people/15/');

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
});

const request = require('supertest');

test('Deve visualizar informações de Wicket Systri Warrick', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/30/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Wicket Systri Warrick');
    expect(resposta.body.height).toBe('88');
    expect(resposta.body.mass).toBe('20');
    expect(resposta.body.hair_color).toBe('brown');
    expect(resposta.body.skin_color).toBe('brown');
    expect(resposta.body.eye_color).toBe('brown');
    expect(resposta.body.birth_year).toBe('8BBY');
    expect(resposta.body.gender).toBe('male');
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/7/');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/3/');
    expect(resposta.body.species).toBeDefined();
    expect(resposta.body.species.length).toBeGreaterThan(0);
    expect(resposta.body.species[0]).toBe('https://swapi.dev/api/species/9/');
});

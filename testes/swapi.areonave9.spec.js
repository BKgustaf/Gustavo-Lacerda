const request = require('supertest');

test('Deve visualizar informações da nave Death Star', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Death Star');
    expect(resposta.body.model).toBe('DS-1 Orbital Battle Station');
    expect(resposta.body.manufacturer).toBe('Imperial Department of Military Research, Sienar Fleet Systems');
    expect(resposta.body.cost_in_credits).toBe('1000000000000');
    expect(resposta.body.length).toBe('120000');
    expect(resposta.body.max_atmosphering_speed).toBe('n/a');
    expect(resposta.body.crew).toBe('342,953');
    expect(resposta.body.passengers).toBe('843,342');
    expect(resposta.body.cargo_capacity).toBe('1000000000000');
    expect(resposta.body.consumables).toBe('3 years');
    expect(resposta.body.hyperdrive_rating).toBe('4.0');
    expect(resposta.body.MGLT).toBe('10');
    expect(resposta.body.starship_class).toBe('Deep Space Mobile Battlestation');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
});

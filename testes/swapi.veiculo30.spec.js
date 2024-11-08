const request = require('supertest');

test('Deve visualizar informações do veículo Imperial Speeder Bike', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/30/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Imperial Speeder Bike');
    expect(resposta.body.model).toBe('74-Z speeder bike');
    expect(resposta.body.manufacturer).toBe('Aratech Repulsor Company');
    expect(resposta.body.cost_in_credits).toBe('8000');
    expect(resposta.body.length).toBe('3');
    expect(resposta.body.max_atmosphering_speed).toBe('360');
    expect(resposta.body.crew).toBe('1');
    expect(resposta.body.passengers).toBe('1');
    expect(resposta.body.cargo_capacity).toBe('4');
    expect(resposta.body.consumables).toBe('1 day');
    expect(resposta.body.vehicle_class).toBe('speeder');
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBeGreaterThan(0);
    expect(resposta.body.pilots[0]).toBe('https://swapi.dev/api/people/1/');
    expect(resposta.body.pilots[1]).toBe('https://swapi.dev/api/people/5/');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/3/');
});

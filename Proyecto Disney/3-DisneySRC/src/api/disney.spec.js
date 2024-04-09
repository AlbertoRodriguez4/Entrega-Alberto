describe('test API methods', () => {
  it('should get array of pokemons from API', async () => {
    const pokemons = await getPokemonsApi();
    expect(Array.isArray(pokemons)).toBeTruthy();
  });

  it('should get pokemon details from API', async () => {
    const url = 'http://172.17.21.64:300/peliculas/1';
    const pokemon = await getPokemonDetailsByUrlApi(url);
    expect(pokemon.id).toBe(1);
  });

  it('should throw error when wrong URL is passed', async () => {
    const url = 'http://172.17.21.64:300/peliculas/100000';
    try {
      await getPokemonDetailsByUrlApi(url);
    } catch (error) {
      expect(error.message).toContain('Failed to fetch');
    }
  });
});

